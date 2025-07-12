<script>
	import Meta from "../../lib/Meta.astro";
	import furnitures from "../../lib/furniture.json";

	let data = { title: "", description: "" };
	let shape = { wide: "3 / 2", tall: "2 / 3" };
</script>

<Meta {data}></Meta>

<div
	class="w-fit mx-auto sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 text-center"
>
	{#each furnitures as furniture}
		<div class="mb-4">
			<img
				class="h-60 object-cover mx-auto"
				style={`aspect-ratio: ${furniture["image-shape"] || "auto"}`}
				src={furniture["image-source"]}
				alt={furniture["image-detail"]}
			/>
			{furniture["image-detail"]}
		</div>
	{/each}
</div>
