<script>
	import "../app.css";

	let { data, children } = $props();
</script>

<div class="flex flex-wrap justify-center items-center p-4">
	<div class="">
		<a class="inline-block p-4 text-xl" href="/">Home</a>
	</div>
	<div class="">
		<a class="inline-block p-4 text-xl" href="/service">Service</a>
	</div>
	<div class="">
		<a class="inline-block p-4 text-xl" href="/furniture">Furniture</a>
	</div>
	<div class="">
		<a class="inline-block p-4 text-xl" href="/#about">About</a>
	</div>
	<div class="">
		<a class="inline-block p-4 text-xl" href="/#contact">Contact</a>
	</div>
</div>

{@render children()}

<div
	class="py-10 sm:py-20 lg:py-36 px-4 mx-auto container text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
>
	<div class="p-4 flex flex-wrap gap-3 justify-center">
		<!-- uikit icon -->
		<div class="">
			<a
				class="rounded-full inline-flex justify-center items-center w-9 h-9 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 fill-gray-500 hover:fill-gray-600 focus:fill-gray-600"
				target="_blank"
				href="https://www.facebook.com/zummonSpace/"
			>
				<span class="sr-only">facebook</span>
				<svg class="" width="20" height="20" viewBox="0 0 20 20"
					><path
						d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"
					/></svg
				>
			</a>
		</div>
		<div class="">
			<a
				class="rounded-full inline-flex justify-center items-center w-9 h-9 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 fill-gray-500 hover:fill-gray-600 focus:fill-gray-600"
				target="_blank"
				href="https://instagram.com/"
			>
				<span class="sr-only">instagram</span>
				<svg class="" width="20" height="20" viewBox="0 0 20 20"
					><path
						d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"
					/><circle cx="14.87" cy="5.26" r="1.09" /><path
						d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"
					/></svg
				>
			</a>
		</div>
		<div class="">
			<a
				class="rounded-full inline-flex justify-center items-center w-9 h-9 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 fill-gray-500 hover:fill-gray-600 focus:fill-gray-600"
				target="_blank"
				href="https://www.pinterest.com/zummonSpace"
			>
				<span class="sr-only">pinterest</span>

				<svg class="" width="20" height="20" viewBox="0 0 20 20"
					><path
						d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"
					/></svg
				>
			</a>
		</div>
		<div class="">
			<a
				class="rounded-full inline-flex justify-center items-center w-9 h-9 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 fill-gray-500 hover:fill-gray-600 focus:fill-gray-600"
				target="_blank"
				href="https://x.com/zummonSpace"
			>
				<span class="sr-only">x, twitter</span>
				<svg class="" width="20" height="20" viewBox="0 0 20 20"
					><path
						d="m15.08,2.1h2.68l-5.89,6.71,6.88,9.1h-5.4l-4.23-5.53-4.84,5.53H1.59l6.24-7.18L1.24,2.1h5.54l3.82,5.05,4.48-5.05Zm-.94,14.23h1.48L6,3.61h-1.6l9.73,12.71h0Z"
					></path></svg
				>
			</a>
		</div>
		<div class="">
			<a
				class="rounded-full inline-flex justify-center items-center w-9 h-9 bg-gray-100 hover:bg-gray-200 focus:bg-gray-200 fill-gray-500 hover:fill-gray-600 focus:fill-gray-600"
				target="_blank"
				href="https://youtube.com/"
			>
				<span class="sr-only">youtube</span>
				<svg class="" width="20" height="20" viewBox="0 0 20 20"
					><path
						d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"
					/></svg
				>
			</a>
		</div>
	</div>

	<div class="p-4">
		<h3 class="text-2xl mb-5">Paragraph</h3>
		<p class="text-gray-500">
			<span class=""> Made by Teerapat Anantarattanachai </span><br />
			Something breaks, needs upgrade. Let me know
		</p>
	</div>

	<div class="p-4">
		<h3 class="text-2xl mb-5">List</h3>
		<ul class="text-gray-500">
			<li class="">Lorem, ipsum.</li>
			<li class="">Lorem, ipsum.</li>
		</ul>
	</div>

	<div class="p-4">
		<h3 class="text-2xl mb-5">List</h3>
		<ul class="text-gray-500">
			<li class="">
				<a class="text-blue-500 hover:underline focus:underline" href="/">
					Lorem, ipsum.
				</a>
			</li>
			<li class="">
				<a class="text-blue-500 hover:underline focus:underline" href="/">
					Lorem, ipsum.
				</a>
			</li>
			<li class="">
				<a class="text-blue-500 hover:underline focus:underline" href="/">
					Lorem, ipsum.
				</a>
			</li>
			<li class="">
				<a class="text-blue-500 hover:underline focus:underline" href="/">
					Lorem, ipsum.
				</a>
			</li>
		</ul>
	</div>
</div>
