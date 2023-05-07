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

<div class="uk-padding uk-text-center">
	<div class="uk-flex uk-flex-wrap uk-flex-bottom uk-flex-center">
		<h1 class="uk-heading-medium">{data.title}</h1>
		<blockquote>
			<footer>creative</footer>
		</blockquote>
	</div>
	<p class="uk-text-large">{data.description}</p>
</div>

<div class="uk-grid-collapse" uk-grid="masonry: true">
	{#each data.services as { image, path, title, description, date }, index (`service-${index}`)}
		<div class="uk-width-1-1 uk-width-1-2@s">
			<div
				class="uk-cover-container uk-box-shadow-medium"
				style="min-height: 80vh"
			>
				<img {...image} uk-cover="" />
				<div class="uk-position-center uk-position-large">
					<a
						class="uk-display-block uk-card uk-card-body uk-card-default uk-card-hover uk-link-toggle"
						href="/service/{path}"
					>
						<h3 class="uk-card-title">{title}</h3>
						<p>{description}</p>
						<p class="uk-link-heading uk-text-right">
							<span class="">{date}</span>&#160;
							<span class="uk-text-large">&#8611;</span>
						</p>
					</a>
				</div>
			</div>
		</div>
	{/each}
</div>

<div
	class="uk-card uk-card-body uk-card-default uk-margin-auto-left uk-margin-auto-right uk-margin-large-top uk-text-center"
	style="width: 50vw;"
>
	<h2 class="uk-heading-divider">Total Price</h2>
	<p class="uk-margin-remove-vertical uk-text-lead">
		Labor: {data.services.reduce((prev, curr) => prev + curr.price.labor, 0)}
	</p>
	<p class="uk-margin-remove-vertical uk-text-lead">
		Material: {data.services.reduce(
			(prev, curr) => prev + curr.price.material,
			0
		)}
	</p>
</div>
