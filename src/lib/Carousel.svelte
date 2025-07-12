<script>
	let { services } = $props();

	let carousel = $state(0);
	let occur = $derived(services[carousel]);
</script>

<div
	class="bg-cover bg-center flex items-center justify-between"
	style={`height: 50vh; background-image: url(${occur.image.src});`}
>
	<!-- uikit icon -->
	<button
		class="cursor-pointer"
		onclick={() => {
			if (0 < carousel) {
				carousel += -1;
			} else {
				carousel = services.length - 1;
			}
		}}
	>
		<svg width="40" height="40" viewBox="0 0 20 20"
			><polyline
				fill="none"
				stroke="#fff"
				stroke-width="1.03"
				points="13 16 7 10 13 4"
			></polyline></svg
		>
		<span class="sr-only">chevron-left</span>
	</button>
	<button
		class="cursor-pointer"
		onclick={() => {
			if (services.length - 1 > carousel) {
				carousel += 1;
			} else {
				carousel = 0;
			}
		}}
	>
		<svg width="40" height="40" viewBox="0 0 20 20"
			><polyline
				fill="none"
				stroke="#fff"
				stroke-width="1.03"
				points="7 4 13 10 7 16"
			></polyline></svg
		>
		<span class="sr-only">chevron-right</span>
	</button>
</div>

<div class="flex items-center justify-center gap-3 py-2">
	<!-- uikit icon -->
	{#each services as service, index}
		<button
			class={index == carousel
				? "text-black"
				: "text-gray-300 hover:text-gray-400 focus:text-gray-400 cursor-pointer"}
			aria-label="slide"
			title={service.title}
			onclick={() => {
				carousel = index;
			}}
		>
			<svg class="" width="20" height="20" viewBox="0 0 20 20">
				<polygon
					fill="none"
					stroke="currentColor"
					points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"
				/>
				<circle fill="none" stroke="currentColor" cx="10" cy="10" r="3.5" />
			</svg>
		</button>
	{/each}
</div>

<div class="bg-white shadow-md p-4 text-center">
	<a
		class="flex-wrap justify-center items-baseline mb-4"
		href={`/service/${occur.path}`}
	>
		<h3 class="text-2xl">{occur.title}</h3>
		<span class="text-gray-500">
			—
			{(occur.price.labor + occur.price.material).toLocaleString()}
		</span>
	</a>
	<p class="text-gray-500 max-w-lg mx-auto">{occur.description}</p>
</div>
