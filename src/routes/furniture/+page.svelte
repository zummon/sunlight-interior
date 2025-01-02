<script>
	let { data } = $props()
	let shape = { wide: '3 / 2', tall: '2 / 3' }
</script>

<div class="w-fit mx-auto sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6">
	{#each data.furnitures as furniture}
		<div class="mb-4">
			<img class="h-60 object-cover" style="aspect-ratio: { furniture['image-shape'] || 'auto' }" src={furniture['image-source']} alt={furniture['image-detail']}>
			{furniture['image-detail']}
		</div>
	{/each}
</div>