<script>
	export let data;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
</svelte:head>

<div class="p-10 text-center">
	<div class="flex items-baseline justify-center mb-10">
		<h1 class="text-4xl lg:text-5xl xl:text-6xl">{data.title}</h1>
		<span class="before:content-['—'] text-gray-500">creative</span>
	</div>
	<p class="text-2xl text-gray-500 max-w-2xl mx-auto">{data.description}</p>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
	{#each data.services as item, index (`service-${index}`)}
		<div class="">
			<a
				class="block group relative"
				style="height: 50vh"
				href="/service/{item.path}"
			>
				<img
					class="h-full w-full object-cover block absolute"
					src={item.image.src}
					alt={item.image.alt}
				/>
				<div
					class="opacity-0 group-hover:opacity-100 group-focus:opacity-100 p-4 lg:p-8 bg-white w-full h-full absolute duration-500 transition overflow-y-auto overflow-x-hidden"
				>
					<div class="flex flex-wrap items-baseline mb-4">
						<h3 class="text-2xl">{item.title}</h3>
						<span class="before:content-['—'] text-gray-500">{item.date}</span>
					</div>
					<p class="mb-4 text-gray-500">{item.description}</p>
					<div class="flex justify-end">
						<span
							class="block pl-2 pr-1 py-1 lg:pl-4 border-y-2 border-l-2 border-gray-500"
							>Price</span
						>
						<span
							class="block pr-2 pl-1 py-1 lg:pr-4 border-y-2 border-r-2 border-gray-500"
							>{(item.price.labor + item.price.material).toLocaleString()}</span
						>
					</div>
				</div>
			</a>
		</div>
	{/each}
	<div class="">
		<div class="flex justify-center items-center w-full h-full border-2">
			<span class="block pl-2 pr-1 py-1 lg:pl-4 text-lg text-gray-500"
				>Total Price</span
			>
			<span class="block pr-2 pl-1 py-1 lg:pr-4 text-lg text-gray-500"
				>{data.services
					.reduce((prev, curr) => {
						return prev + curr.price.labor + curr.price.material;
					}, 0)
					.toLocaleString()}</span
			>
		</div>
	</div>
</div>
