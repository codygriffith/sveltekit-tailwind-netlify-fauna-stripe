<script>
	import Logo from '$lib/header/svelte-logo.svg';
</script>

<footer class="relative bg-gray-100 pt-6 px-[10%]">
	<div class="flex flex-wrap text-left lg:text-left">
		<div class="w-full lg:w-6/12 px-4">
			<a href="/" class="w-[20%] md:w-[10%] mb-2 flex justify-center space-x-3 md:justify-start m-auto md:m-0">
				<img class="self-center text-2xl font-semibold w-full" src={Logo} alt="" srcset="" />
			</a>
			<h5 class="text-lg mt-0 mb-2 text-blueGray-600 text-center md:text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h5>
		</div>

		<div class="w-full lg:w-4/12 lg:px-4 text-right ml-auto">
			<span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 mt-4 md:mt-0">Pages</span>
			<a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/#">Try It</a>
			<a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/#">Blog</a>
			<a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/#">Pricing</a>
			<a class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="/#">Sign-Up</a>
		</div>
	</div>
	<hr class="my-6 border-blueGray-300" />
	<div class="flex flex-wrap items-center justify-center w-full md:w-4/12 md:px-4 mx-auto text-center text-sm text-blueGray-500 font-semibold py-1">
		Copyright © 2022 by <a href="https://alenthea.com" class="text-blueGray-500 hover:text-blueGray-800">Alenthea</a>.
	</div>
</footer>
