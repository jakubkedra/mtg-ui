<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import axios from 'axios';
	import {goto} from "$app/navigation";
	let username = ''
	let password = ''

	const registerURL = 'http://localhost:8080/api/auth/register';

	export function register() {
		if(username && password) {
			let loginObj = {
				username: username,
				password: password
			}
			axios.post(registerURL, {
				username: loginObj.username,
				password: loginObj.password
			})
					.then(res => {
						console.log(res.data);
					})
					.then(() => {
						goto('/login')
					})
					.catch(error =>
							console.error(error)
					);
		}else{
			alert('Username or password is missing!')
		}
	}
</script>

<div class="justify-center flex h-[90.5vh] items-center bg-slate-200">
	<Card.Root class="md:w-[400px] shadow-md shadow-slate-300">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">Create an account</Card.Title>
			<Card.Description>Enter your email below to create your account</Card.Description>
		</Card.Header>
			<Card.Content class="grid gap-4">
				<div class="grid gap-2">
					<Label for="email">Username</Label>
					<Input id="username" bind:value={username} placeholder="username" name="username" />
				</div>
				<div class="grid gap-2">
					<Label for="password">Password</Label>
					<Input id="password" bind:value={password} type="password" placeholder="Password" name="password" />
				</div>
			</Card.Content>
			<Card.Footer>
				<Button class="w-full" on:click={register}>Create account</Button>
			</Card.Footer>
		<Card.Footer>
			<div>
				Already have an account? <a href="/login" class="text-blue-500 underline underline-offset-1"
					>Log In</a
				>
			</div>
		</Card.Footer>
	</Card.Root>
</div>
