<script>
	import { User } from 'lucide-svelte';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	import {token} from "../../stores.js";
	import {goto} from "$app/navigation";

	let accessToken = ''
	token.subscribe((data) => {
		accessToken = data
		console.log(accessToken)
	})

	let nav = {
		title: 'MTG Collector',
		img: 'https://cdn-icons-png.flaticon.com/512/5769/5769490.png',
		listnavs: [
			{
				name: 'Home',
				link: '/'
			}
		]
	};

	let profileNavs = {
		title: 'MTG Collector',
		img: 'https://cdn-icons-png.flaticon.com/512/5769/5769490.png',
		listnavs: [
			{
				name: 'Search',
				link: '/search'
			},
			{
				name: 'Collection',
				link: '/collection'
			}
		]
	};
	$: isActive = $page.route.id?.split('/')[1];

	let isProfileMenu = false;
	let isMobileMenu = false;



	function logout() {
		token.set('')
		console.log(accessToken)
		goto('/login')
	}
</script>

<nav class="bg-white shadow border-b border-slate-300">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<div class="-ml-2 mr-2 flex items-center md:hidden">
					<!-- Mobile menu button -->
					<button
						type="button"
						class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
						aria-controls="mobile-menu"
						aria-expanded="false"
						on:click={() => (isMobileMenu = !isMobileMenu)}
					>
						<span class="absolute -inset-0.5" />
						<span class="sr-only">Open main menu</span>
						<!--
                  Icon when menu is closed.
    
                  Menu open: "hidden", Menu closed: "block"
                -->
						<svg
							class="{isMobileMenu ? 'hidden' : 'block'} h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
						<!--
                  Icon when menu is open.
    
                  Menu open: "block", Menu closed: "hidden"
                -->
						<svg
							class="{isMobileMenu ? 'block' : 'hidden'} h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="flex flex-shrink-0 items-center">
					<a href="/"><img class="h-8 w-auto" src={nav.img} alt="Your Company" /></a>
				</div>
				<div class="hidden md:ml-6 md:flex md:space-x-8">
					{#if accessToken}
						{#each profileNavs.listnavs as item}
							<a
									href={item.link}
									class="{isActive === item.link.split('/')[1]
								? 'border-indigo-500 text-gray-900'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
							>{item.name}</a
							>
						{/each}
					{:else}
						{#each nav.listnavs as item}
							<a
									href={item.link}
									class="{isActive === item.link.split('/')[1]
								? 'border-indigo-500 text-gray-900'
								: 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'} inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
							>{item.name}</a
							>
						{/each}
					{/if}
				</div>
			</div>
			<div class="flex items-center">
				<div class="flex-shrink-0">
					{#if accessToken}
						<!-- if user is logged in -->
							<Button on:click={logout}>
								<User size="18" class="mr-1" strokeWidth="2" />
								Log Out</Button
							>
					{:else}
						<!-- if user is not logged in -->
						<Button href="/login">
							<User size="18" class="mr-1" strokeWidth="2" />
							Log In</Button
						>
					{/if}
				</div>
			</div>
		</div>
	</div>
</nav>
