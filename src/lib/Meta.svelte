<script>
  let { data } = $props()
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	{#if data.date}
		<meta name="date" content={data.date} />
	{/if}
	{#if data.image}
		<meta name="twitter:image" content={data.image.src} />
		<meta property="og:image" content={data.image.src} />
	{/if}
</svelte:head>