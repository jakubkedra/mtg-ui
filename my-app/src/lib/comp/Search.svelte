<script lang="ts">
    import { Input } from "$lib/components/ui/input/index.js";
    import Button from '$lib/components/ui/button/button.svelte';
    import axios from "axios";
    import { token } from "../../stores";
    import Grid from "$lib/comp/Grid.svelte";
    import * as Card from "$lib/components/ui/card/index.js";
    import * as Select from "$lib/components/ui/select/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import {jwtDecode} from "jwt-decode";
    let accessToken = '';
    let searchTerm = '';
    let searchedData = new Array()
    let URL = 'http://localhost:8080/api/card/search?name=';
    let addToCollectionURL = 'http://localhost:8080/api/card/collection/add';
    export function fetchData() {
        if (accessToken) {
            axios.get(URL + searchTerm, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res.data.data);
                searchedData = res.data.data
                console.log(searchedData)
            }).catch(error => {
                console.error(error);
                // Dodaj obsługę błędów
            });
        } else {
            alert('Username or password is missing!');
        }
    }

    export function addToCollection(card_id: string, card_name: string, img_url: string) {
        axios.post(addToCollectionURL, {
            scryfall_id: card_id,
            card_name: card_name,
            img_url: img_url,
            username: jwtDecode(accessToken).sub
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.data);
        }).catch(error => {
            console.error(error);
            // Dodaj obsługę błędów
        });
    }

    token.subscribe((data) => {
        accessToken = data;
        console.log(accessToken);
    });
</script>

<div class="bg-slate-200 h-screen">
    <div class="justify-center flex h-[25.5vh] items-center">
        <form class="flex w-full max-w-sm items-center space-x-2">
            <Input class="bg-white" placeholder="Lion" bind:value={searchTerm} />
            <Button on:click={fetchData}>Search</Button>
        </form>
    </div>
    <div class="flex justify-center">
        <div class="grid grid-cols-4 gap-x-8 gap-y-4 p-4">
            {#if searchedData.length > 0}
                {#each searchedData as item}
                    <Card.Root class="w-[350px]">
                        <br/>
                        <Card.Content>
                            <img src={item.image_uris.large} alt={item.name}>
                        </Card.Content>
                        <Card.Footer class="flex justify-between">
                            <Button variant="outline">more info</Button>
                            <Button on:click={() => addToCollection(item.id, item.name, item.image_uris.large)}>Add to collection</Button>
                        </Card.Footer>
                    </Card.Root>
                {/each}
            {:else}
                <p>No data found</p>
            {/if}
        </div>
    </div>
</div>


