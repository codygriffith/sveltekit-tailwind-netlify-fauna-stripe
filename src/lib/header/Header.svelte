<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
	import Hamburger from './Hamburger.svelte';

	export let open = false;
</script>

<header class="w-full flex flex-wrap md:flex-row justify-between p-3 md:p-auto md:justify-around bg-[#0d0d0d] text-white text-lg py-4">
	<a href="/" class="w-[20%] md:w-[5%]">
		<img src={logo} alt="Logo" />
	</a>

	<Hamburger bind:open />

	<nav class="flex items-end w-full md:w-auto flex-col max-h-0 md:max-h-full md:flex-row md:items-center text-2xl sm:text-2xl md:text-base lg:text-xl" class:open>
		<a class="mx-4" class:active={$page.url.pathname === '/#'} sveltekit:prefetch href="/#">Try It</a>
		<a class="mx-4" class:active={$page.url.pathname === '/#'} sveltekit:prefetch href="/#">Blog</a>
		<a class="mx-4" class:active={$page.url.pathname === '/#'} sveltekit:prefetch href="/#">Pricing</a>
		<a class="mx-4" class:active={$page.url.pathname === '/#'} sveltekit:prefetch href="/#">Sign-Up</a>
		<a class="mx-4" class:active={$page.url.pathname === '/#'} sveltekit:prefetch href="/#">Login</a>
	</nav>
</header>

<style>
	nav {
		overflow: hidden;
		transition: all 0.5s ease-in-out;
	}
	.open {
		max-height: 500px;
		overflow: hidden;
	}
	.active{
		text-decoration: underline;
	}
</style>
