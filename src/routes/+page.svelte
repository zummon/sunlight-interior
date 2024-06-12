<script>
  export let data;

  let carousel = 0;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
</svelte:head>

<div class="p-10 text-center w-full flex-none">
  <div class="flex flex-wrap items-baseline justify-center mb-10">
    <h1 class="text-4xl lg:text-5xl xl:text-6xl">{data.title}</h1>
    <span class="before:content-['—']">Architect</span>
  </div>
  <p class="text-2xl">{data.description}</p>
</div>

<div class="h-full w-full flex items-center justify-center">
  {#each data.services as item, index}
    <div class="">
      <abbr class="" title={item.title}>
        <button
          class="rounded-full inline-flex justify-center items-center w-9 h-9 {carousel == index
            ? 'text-black'
            : 'text-gray-300 hover:text-gray-400 focus:text-gray-400'}"
          on:click={() => {
            carousel = index;
          }}
        >
          <!-- uikit icon -->
          <span class="sr-only">nut</span>
          <svg class="" width="20" height="20" viewBox="0 0 20 20"
            ><polygon
              fill="none"
              stroke="currentColor"
              points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"
            /><circle fill="none" stroke="currentColor" cx="10" cy="10" r="3.5" /></svg
          >
        </button>
      </abbr>
    </div>
  {/each}
</div>

{#each data.services as item, index}
  <div class="shadow-md max-w-lg mx-auto {carousel == index ? 'block' : 'hidden'}">
    <a class="block bg-white shadow-md p-4" href="/service/{item.path}">
      <div class="flex flex-wrap items-baseline mb-4">
        <h3 class="text-2xl">{item.title}</h3>
        <span class="before:content-['—'] text-gray-500">{item.date}</span>
      </div>
      <p class="mb-4 text-gray-500">{item.description}</p>
      <div class="flex justify-end">
        <span class="block pl-2 pr-1 py-1 lg:pl-4 border-y-2 border-l-2 border-gray-500">Price</span>
        <span class="block pr-2 pl-1 py-1 lg:pr-4 border-y-2 border-r-2 border-gray-500"
          >{(item.price.labor + item.price.material).toLocaleString()}</span
        >
      </div>
    </a>
  </div>

  <div
    class="w-full bg-cover bg-center {carousel == index ? '' : 'hidden'}"
    style="height: 65vh; background-image: url({item.image.src});"
  ></div>
{/each}

<div class="flex items-center" id="about">
  <div class="w-5/6 sm:w-3/4 lg:w-1/2 flex-none p-4">
    <div class="flex flex-wrap items-baseline mb-10">
      <h2 class="text-4xl lg:text-5xl xl:text-6xl">About</h2>
      <span class="before:content-['—']">me</span>
    </div>
    <p class="text-2xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, repellat mollitia blanditiis nobis ratione
      rerum culpa nihil enim!
    </p>
  </div>
  <div class="w-1/6 sm:w-1/4 lg:w-1/2 flex-none shadow-md" style="height: 80vh;">
    <img
      class="object-cover h-full w-full"
      src="https://images.pexels.com/photos/6585764/pexels-photo-6585764.jpeg?w=1280"
      alt="Living Room"
    />
  </div>
</div>

<div class="flex items-center" id="contact">
  <div class="w-1/6 sm:w-1/4 lg:w-1/2 flex-none shadow-md" style="height: 80vh;">
    <img
      class="object-cover h-full w-full"
      src="https://images.pexels.com/photos/3097112/pexels-photo-3097112.jpeg?w=1280"
      alt="Sunlight Interior"
    />
  </div>
  <div class="w-5/6 sm:w-3/4 lg:w-1/2 flex-none p-4">
    <div class="flex flex-wrap items-baseline mb-10">
      <h2 class="text-4xl lg:text-5xl xl:text-6xl">Contact</h2>
      <span class="before:content-['—']">us</span>
    </div>
    <div class="">
      <label class="block mb-4">
        <span class="text-2xl block mb-2"> Your e-mail </span>
        <input class="block w-full" placeholder="example@mail.com" type="email" />
      </label>
      <label class="block mb-4">
        <span class="text-2xl block mb-2"> Your name </span>
        <input class="block w-full" placeholder="Tanya" type="text" />
      </label>
      <label class="block mb-4">
        <span class="text-2xl block mb-2"> Your message </span>
        <textarea class="block w-full" placeholder="I have a small house. How you can help?" rows="5" />
      </label>
      <button class="px-10 py-4 bg-gray-900 text-white"> Send </button>
    </div>
  </div>
</div>
