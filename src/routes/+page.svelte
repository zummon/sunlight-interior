<script>
	export let data
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
</svelte:head>

<div
	class="uk-position-relative"
	tabindex="-1"
	uk-slideshow="animation: slide; autoplay: true; ratio: false; pause-on-hover: false"
>
	<ul class="uk-slideshow-items" style="min-height: 80vh">
		{#each data.services as { path, image, title, description, date }, index (`service-${index}`)}
			<li>
				<img {...image} uk-cover="" />
				<div class="uk-position-center uk-transition-scale-down uk-position-large">
					<a class="uk-display-block uk-card uk-card-body uk-card-default uk-card-hover uk-link-toggle" 
						href="/service/{path}" 
						style="width: 50vw;"
					>
						<h3 class="uk-card-title uk-text-truncate">{title}</h3>
						<p class="uk-text-truncate">{description}</p>
						<p class="uk-link-heading uk-text-right">
              <span class="">{date}</span>&#160;
              <span class="uk-text-large">&#8611;</span>
            </p>
					</a>
				</div>
			</li>
		{/each}
	</ul>
	<a
		class="uk-position-center-left uk-position-small uk-hidden-hover uk-light"
		href="#"
		uk-slidenav-previous=""
		uk-slideshow-item="previous"
	></a>
	<a
		class="uk-position-center-right uk-position-small uk-hidden-hover uk-light"
		href="#"
		uk-slidenav-next=""
		uk-slideshow-item="next"
	></a>
</div>

<div class="uk-padding uk-text-center uk-box-shadow-medium">
	<div class="uk-flex uk-flex-wrap uk-flex-bottom uk-flex-center">
		<h1 class="uk-heading-medium">{data.title}</h1>
		<blockquote>
			<footer>summon</footer>
		</blockquote>
	</div>
	<p class="uk-text-large">{data.description}</p>
</div>

<div class="uk-grid-match uk-grid-collapse" uk-grid="">
	<div class="uk-width-5-6 uk-width-3-4@s uk-width-1-2@l" id="about">
		<div class="uk-padding-small uk-margin-auto-vertical">
			<div class="uk-flex uk-flex-wrap uk-flex-bottom">
				<h2 class="uk-heading-medium">About</h2>
				<blockquote>
					<footer>me</footer>
				</blockquote>
			</div>
			<p class="uk-text-large">
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Consequuntur, repellat mollitia blanditiis nobis ratione rerum
				culpa nihil enim!
			</p>
		</div>
	</div>
	<div class="uk-width-1-6 uk-width-1-4@s uk-width-1-2@l uk-cover-container uk-height-viewport uk-box-shadow-medium">
		<img class=""
			src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?w=640"
			alt="Living Room"
			uk-cover=""
		/>
	</div>

	<div class="uk-width-1-6 uk-width-1-4@s uk-width-1-2@l uk-cover-container uk-height-viewport uk-box-shadow-medium">
		<img class=""
			src="https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?w=640"
			alt="Sunlight Interior"
			uk-cover=""
		/>
	</div>
	<div
		class="uk-width-5-6 uk-width-3-4@s uk-width-1-2@l"
		id="contact"
	>
		<div class="uk-padding-small uk-margin-auto-vertical">
			<div class="uk-flex uk-flex-wrap uk-flex-bottom">
				<h2 class="uk-heading-medium">Contact</h2>
				<blockquote>
					<footer>us</footer>
				</blockquote>
			</div>
			<form>
				<label class="uk-display-block uk-margin">
					<span class="uk-h3 uk-margin-small uk-display-block">
						Your e-mail
					</span>
					<input
						class="uk-input uk-form-large"
						placeholder="example@mail.com"
						type="email"
					/>
				</label>
				<label class="uk-display-block uk-margin">
					<span class="uk-h3 uk-margin-small uk-display-block">
						Your name
					</span>
					<input
						class="uk-input uk-form-large"
						placeholder="Tanya"
						type="text"
					/>
				</label>
				<label class="uk-display-block uk-margin">
					<span class="uk-h3 uk-margin-small uk-display-block">
						Your message
					</span>
					<textarea
						class="uk-textarea uk-form-large uk-resize-vertical"
						placeholder="I have a small house. How you can help?"
						rows="5"
					></textarea>
				</label>
				<button class="uk-button uk-button-secondary uk-button-large">
					Send
				</button>
			</form>
		</div>
	</div>
</div>