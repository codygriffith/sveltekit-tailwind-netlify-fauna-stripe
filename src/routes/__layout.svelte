<script context="module">
	export const prerender = true;
</script>

<script>
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import ContactForm from '$lib/contactForm/ContactForm.svelte';
	export const prerender = true;
	import '../app.css';
</script>

<svelte:head>
</svelte:head>

<Header />

<main>
	<slot />
</main>

<ContactForm />

<Footer />

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
