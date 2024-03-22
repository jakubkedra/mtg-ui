<!--<script lang="ts">-->
<!--    import { enhance } from '$app/forms';-->
<!--    import Button from '$lib/components/ui/button/button.svelte';-->
<!--    import * as Card from '$lib/components/ui/card';-->
<!--    import { Input } from '$lib/components/ui/input';-->
<!--    import { Label } from '$lib/components/ui/label';-->
<!--    import axios from 'axios';-->

<!--    let newUsername = ''-->
<!--    let username = ''-->
<!--    let newPassword = ''-->
<!--    let password = ''-->

<!--    const registerURL = 'http://localhost:8080/api/auth/register';-->
<!--    const loginURL = 'http://localhost:8080/api/auth/login';-->
<!--    export function login() {-->
<!--        if(username && password) {-->
<!--            let loginObj = {-->
<!--                username: username,-->
<!--                password: password-->
<!--            }-->
<!--            axios.post(loginURL, {-->
<!--                username: loginObj.username,-->
<!--                password: loginObj.password-->
<!--            }).then(res => {-->
<!--                console.log(res.data);-->
<!--            }).catch(error => console.error(error));-->
<!--        }else{-->
<!--            alert('Username or password is missing!')-->
<!--        }-->
<!--    }-->

<!--    export function register() {-->
<!--        if(newUsername && newPassword) {-->
<!--            let loginObj = {-->
<!--                username: newUsername,-->
<!--                password: newPassword-->
<!--            }-->
<!--            axios.post(registerURL, {-->
<!--                username: loginObj.username,-->
<!--                password: loginObj.password-->
<!--            }).then(res => {-->
<!--                console.log(res.data);-->
<!--            }).catch(error => console.error(error));-->
<!--        }else{-->
<!--            alert('Username or password is missing!')-->
<!--        }-->
<!--    }-->

<!--</script>-->

<!--<div class="justify-center flex h-[90.5vh] items-center bg-slate-200">-->
<!--    <Card.Root class="md:w-[400px] shadow-md shadow-slate-300">-->
<!--        <Card.Header class="space-y-1">-->
<!--            <Card.Title class="text-2xl">Login to Continue</Card.Title>-->
<!--            <Card.Description>Enter your email and password to Visit Dashboard</Card.Description>-->
<!--        </Card.Header>-->
<!--        <form on:submit|preventDefault="{login}">-->
<!--            <Card.Content class="grid gap-4">-->
<!--                <div class="grid gap-2">-->
<!--                    <Label for="email">Username</Label>-->
<!--                    <Input id="email" placeholder="username" bind:value={username} name="email" />-->
<!--                </div>-->
<!--                <div class="grid gap-2">-->
<!--                    <Label for="password">Password</Label>-->
<!--                    <Input id="password" type="password" placeholder="Password" bind:value={password} name="password" />-->
<!--                </div>-->
<!--            </Card.Content>-->
<!--            <Card.Footer>-->
<!--                <Button class="w-full" type="submit">Log In</Button>-->
<!--            </Card.Footer>-->
<!--        </form>-->
<!--        <Card.Footer>-->
<!--            <div>-->
<!--                Don't have an account? <a href={loginURL} class="text-blue-500 underline underline-offset-1"-->
<!--            >Sign Up</a-->
<!--            >-->
<!--            </div>-->
<!--        </Card.Footer>-->
<!--    </Card.Root>-->
<!--</div>-->
