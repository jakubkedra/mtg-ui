<script lang="ts">
	import type { PageData } from './$types';
	import {token} from "../../stores";
    import Collection from "$lib/comp/Collection.svelte";

	let accessToken = ''
	token.subscribe((data) => {
		accessToken = data
		console.log(accessToken)
	})

	export let data: PageData;
</script>

<Collection />