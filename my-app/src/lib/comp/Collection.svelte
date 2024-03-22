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
    import {onMount} from "svelte";

let accessToken = '';
let collectionURL = 'http://localhost:8080/api/card/collection/get/'

let collection = new Array()

export function getUserCollection() {
    if (accessToken) {
        axios.get(collectionURL + jwtDecode(accessToken).sub, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            console.log(res.data);
            collection = res.data
            console.log(collection)
        }).catch(error => {
            console.error(error);
            // Dodaj obsługę błędów
        });
    } else {
        alert('Username or password is missing!');
    }
}

onMount(async() => {
    await getUserCollection();
})

token.subscribe((data) => {
    accessToken = data;
    console.log(accessToken);
});

</script>
<div class="bg-slate-200 h-screen">
    <div class="flex justify-center">
        <div class="grid grid-cols-4 gap-x-8 gap-y-4 p-4">
            {#if collection.length > 0}
                {#each collection as item}
                    <Card.Root class="w-[350px]">
                        <br/>
                        <Card.Content>
                            <img src={item.img_url} alt={item.cardName}>
                        </Card.Content>
                        <Card.Footer class="flex justify-between">
                            <Button variant="outline">more info</Button>
                        </Card.Footer>
                    </Card.Root>
                {/each}
            {:else}
                <p>No data found</p>
            {/if}
        </div>
    </div>
</div>
