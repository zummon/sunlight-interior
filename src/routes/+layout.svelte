<script>
	// import '../app.css';
	import 'uikit/dist/css/uikit.min.css'
	import 'uikit/dist/js/uikit.min.js'
	import 'uikit/dist/js/uikit-icons.min.js'
	
	// import { page } from '$app/stores';
</script>

<!-- header -->
<div class="uk-padding-small uk-box-shadow-medium">
	<div class="uk-flex uk-flex-center uk-flex-middle">
		<div>
			<a href="/" class="uk-link-reset uk-text-light uk-padding-small uk-text-large">Home</a>
		</div>
		<div>
			<a href="/service" class="uk-link-reset uk-text-light uk-padding-small uk-text-large">Service</a>
		</div>
		<div>
			<a href="/#about" class="uk-link-reset uk-text-light uk-padding-small uk-text-large">About</a>
		</div>
		<div>
			<a href="/#contact" class="uk-link-reset uk-text-light uk-padding-small uk-text-large">Contact</a>
		</div>
	</div>
</div>

<!-- body -->
<slot/>

<!-- footer -->
<div class="uk-section uk-section-large">
	<div class="uk-container uk-text-center">
		<div class="uk-child-width-1-2@s uk-child-width-1-4@l" uk-grid="">
			<div class="">
				<a
					class="uk-icon-button uk-margin-small-right"
					uk-icon="facebook"
					href="#"
				></a>
				<a
					class="uk-icon-button uk-margin-small-right"
					uk-icon="instagram"
					href="#"
				></a>
				<a
					class="uk-icon-button uk-margin-small-right"
					uk-icon="pinterest"
					href="#"
				></a>
				<a
					class="uk-icon-button uk-margin-small-right"
					uk-icon="twitter"
					href="#"
				></a>
				<a
					class="uk-icon-button uk-margin-small-right"
					uk-icon="youtube"
					href="#"
				></a>
			</div>

			<div>
				<h3>Paragraph</h3>
				<p>
					<span>
						Made by zummon (Teerapat Anantarattanachai)
					</span>
				</p>
			</div>

			<div>
				<h3>List</h3>
				<ul class="uk-list">
					<li>Lorem, ipsum.</li>
					<li>Lorem, ipsum.</li>
				</ul>
			</div>

			<div>
				<h3>List</h3>
				<ul class="uk-list">
					<li>
						<a href="#">Lorem, ipsum.</a>
					</li>
					<li>
						<a href="#">Lorem, ipsum.</a>
					</li>
					<li>
						<a href="#">Lorem, ipsum.</a>
					</li>
					<li>
						<a href="#">Lorem, ipsum.</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>