<script>
	export let data;
	let { title, description, date, image, images, price } = data;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="date" content={date} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image.src} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image.src} />
</svelte:head>

<div class="uk-padding uk-text-center">
	<div class="uk-flex uk-flex-wrap uk-flex-bottom uk-flex-center">
		<h1 class="uk-heading-medium">{title}</h1>
		<blockquote>
			<footer>{date}</footer>
		</blockquote>
	</div>
	<p class="uk-text-large">{description}</p>
</div>

<div
	class="uk-child-width-1-2@s uk-grid-collapse"
	uk-grid="masonry: true"
	uk-lightbox="animation: slide"
>
	{#each [image, ...images].filter((img) => img.src) as image, index (`image-${index}`)}
		<div>
			<a
				class="uk-display-block uk-box-shadow-medium"
				href={image.src}
				data-caption={image.alt}
			>
				<img {...image} />
			</a>
		</div>
	{/each}
</div>

<a
	class="uk-display-block uk-card uk-card-body uk-card-default uk-link-toggle uk-margin-auto-left uk-margin-auto-right uk-margin-large-top uk-text-center"
	href="/#contact"
	style="width: 50vw;"
>
	<h2 class="uk-heading-divider">Price</h2>
	<p class="uk-margin-remove-vertical uk-text-lead">Labor: {price.labor}</p>
	<p class="uk-margin-remove-vertical uk-text-lead">
		Material: {price.material}
	</p>
	<p class="uk-link-heading uk-text-large uk-text-right">&#8611;</p>
</a>
