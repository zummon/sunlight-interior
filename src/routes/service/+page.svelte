<script>
	import Meta from "../../lib/Meta.svelte";

	let { data } = $props();

	let tags = $state([])
</script>

<Meta {data}></Meta>

<div class="p-10 text-center">
	<div class="flex items-baseline justify-center mb-10">
		<h1 class="text-4xl lg:text-5xl xl:text-6xl">{data.title}</h1>
		<span class="text-gray-500">—creative</span>
	</div>
	<p class="text-2xl text-gray-500 max-w-2xl mx-auto mb-4">
		{data.description}
	</p>
	<div class="text-center">
		{#each data.tags as tag}
			<button
				class={tags.includes(tag) ? "text-gray-500" : ""}
				onclick={() => {
					if (tags.includes(tag)) {
						tags = tags.filter((o) => o != tag);
					} else {
						tags.push(tag);
					}
				}}
			>
				{tag}
			</button>{" "}
			&nbsp;
		{/each}
	</div>
</div>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
	{#each data.services.filter((service) => {
		if (tags.length == 0) {
			return true;
		}
		let bl = false;
		service.tags.forEach((tag) => {
			if (tags.includes(tag)) {
				bl = true;
			}
		});
		return bl;
	}) as item}
		<div class="">
			<a
				class="block group relative"
				style="height: 50vh"
				href={`/service/${item.path}`}
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
						<span class="text-gray-500">—{item.date}</span>
					</div>
					<p class="mb-4 text-gray-500">{item.description}</p>
					<div class="flex justify-end">
						<span
							class="block pl-2 pr-1 py-1 lg:pl-4 border-y-2 border-l-2 border-gray-500"
						>
							Price
						</span>
						<span
							class="block pr-2 pl-1 py-1 lg:pr-4 border-y-2 border-r-2 border-gray-500"
						>
							{(item.price.labor + item.price.material).toLocaleString()}
						</span>
					</div>
				</div>
			</a>
		</div>
	{/each}
	<div class="">
		<div class="flex justify-center items-center w-full h-full">
			<span class="block pl-2 pr-1 py-1 lg:pl-4 text-lg text-gray-500">
				Total Price
			</span>
			<span class="block pr-2 pl-1 py-1 lg:pr-4 text-lg text-gray-500">
				{data.services
					.reduce((prev, curr) => {
						return prev + curr.price.labor + curr.price.material;
					}, 0)
					.toLocaleString()}
			</span>
		</div>
	</div>
</div>
