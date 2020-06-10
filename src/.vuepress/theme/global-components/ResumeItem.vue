<template>
  <div class="lg:flex my-6 w-full lg:w-2/5 shadow-sm grow">
    <div v-if="image"
      class="h-48 lg:h-auto lg:w-2/5 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div
      class="border-r border-b border-l border-grey-light lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <p class="text-sm text-grey-dark flex items-center">
<svg xmlns="http://www.w3.org/2000/svg" id="_x31__x2C_5_px" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20"><path d="m13.75 24h-12c-.965 0-1.75-.785-1.75-1.75v-20.319c0-.516.226-1.002.619-1.336s.911-.477 1.418-.391l10.989 1.665c.859.143 1.474.869 1.474 1.728v19.653c0 .414-.336.75-.75.75zm-11.999-22.319c-.081 0-.135.035-.162.058-.033.029-.089.091-.089.192v20.319c0 .138.112.25.25.25h11.25v-18.903c0-.123-.088-.227-.209-.247l-10.989-1.664c-.018-.003-.035-.005-.051-.005z"/><path d="m22.25 24h-8.5c-.414 0-.75-.336-.75-.75v-13.5c0-.226.102-.44.277-.582.175-.143.405-.198.626-.152l8.717 1.826c.816.181 1.38.883 1.38 1.71v9.698c0 .965-.785 1.75-1.75 1.75zm-7.75-1.5h7.75c.138 0 .25-.112.25-.25v-9.698c0-.118-.08-.218-.195-.244l-7.805-1.635z"/><path d="m9.75 23.75h-4.5c-.414 0-.75-.336-.75-.75v-4.25c0-.965.785-1.75 1.75-1.75h2.5c.965 0 1.75.785 1.75 1.75v4.25c0 .414-.336.75-.75.75zm-3.75-1.5h3v-3.5c0-.138-.112-.25-.25-.25h-2.5c-.138 0-.25.112-.25.25z"/><path d="m5.75 6h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m10.75 6h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m5.75 9h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m10.75 9h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m5.75 12h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m10.75 12h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m5.75 15h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m10.75 15h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m19.25 15h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m19.25 18h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m19.25 21h-1.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h1.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/></svg>
          <span class="ml-2">{{ companyName }}</span>
        </p>
        <div class="text-black font-bold text-xl mb-2">{{ title }}</div>
        <div class="text-grey-darker text-base">
          <slot></slot>
        </div>
      </div>
      <div class="flex items-center">
        <img
          class="w-10 h-10 rounded-full mr-4"
          :src="$withBase('/images/davidangel.jpg')"
          alt="Avatar of David Angel"
        />
        <div class="text-sm">
          <p class="text-grey-dark">{{ dates }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ResumeItem",

  components: {},

  props: ["title", "companyName", "description", "dates", "image"]
}
</script>

<style scoped>
.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.05); }
</style>