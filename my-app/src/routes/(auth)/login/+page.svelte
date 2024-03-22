<script lang="ts">
	import { applyAction, enhance } from '$app/forms'
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import axios from 'axios';
	import {goto} from "$app/navigation";
	import {token} from "../../../stores";

	let username = ''
	let password = ''
	export let form
	const loginURL = 'http://localhost:8080/api/auth/login';
	export function login() {
		if(username && password) {
			let loginObj = {
				username: username,
				password: password
			}
			axios.post(loginURL, {
				username: loginObj.username,
				password: loginObj.password
			}).then(res => {
				console.log(res.data);
				token.set(res.data.accessToken)
				token.subscribe((data) => {
					console.log(data)
				})
			}).then(() => {
				goto('/search')
			}).catch(error => console.error(error));
		}else{
			alert('Username or password is missing!')
		}
	}

</script>

<div class="justify-center flex h-[90.5vh] items-center bg-slate-200">
	<Card.Root class="md:w-[400px] shadow-md shadow-slate-300">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Login to Continue</Card.Title>
			<Card.Description>Enter your email and password to Visit Dashboard</Card.Description>
		</Card.Header>
		<form action="?/login" method="POST" use:enhance>
		<Card.Content class="grid gap-4">
			<div class="grid gap-2">
				<Label for="email">Username</Label>
				<Input id="username" placeholder="username" bind:value={username} name="username" />
			</div>
			<div class="grid gap-2">
				<Label for="password">Password</Label>
				<Input id="password" type="password" placeholder="Password" bind:value={password} name="password" />
			</div>
		</Card.Content>
			<button type="submit">Log in</button>
		</form>
		<Card.Footer>
<!--			<Button class="w-full" on:click={login}>Log In</Button>-->

		</Card.Footer>
		<Card.Footer>
			<button type="submit">Log in</button>
			<div>
				Don't have an account? <a href="/signup" class="text-blue-500 underline underline-offset-1"
					>Sign Up</a
				>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
