<script>
	import Meta from "../../../lib/Meta.svelte";

	let { data } = $props();
</script>

<Meta {data}></Meta>

<div class="p-10 text-center">
	<div class="flex items-baseline justify-center mb-10">
		<h1 class="text-3xl lg:text-4xl xl:text-5xl">{data.title}</h1>
		<span class="text-gray-500">—{data.date}</span>
	</div>
	<p class="text-xl text-gray-500 max-w-lg mx-auto">{data.description}</p>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2">
	{#each [data.image, ...data.images] as image, index}
		<div class="">
			<img
				class="block h-full w-full object-contain object-center"
				style="height: 50vh"
				src={image.src}
				alt={image.alt}
			/>
		</div>
	{/each}
	<div class="">
		<div
			class="flex justify-center items-center w-full h-1/2 border-x-2 border-t-2"
		>
			<span class="block pl-2 pr-1 py-1 lg:pl-4 text-lg text-gray-500"
				>Labor</span
			>
			<span class="block pr-2 pl-1 py-1 lg:pr-4 text-lg text-gray-500"
				>{data.price.labor.toLocaleString()}</span
			>
		</div>
		<div
			class="flex justify-center items-center w-full h-1/2 border-x-2 border-b-2"
		>
			<span class="block pl-2 pr-1 py-1 lg:pl-4 text-lg text-gray-500"
				>Material</span
			>
			<span class="block pr-2 pl-1 py-1 lg:pr-4 text-lg text-gray-500"
				>{data.price.material.toLocaleString()}</span
			>
		</div>
	</div>
</div>
