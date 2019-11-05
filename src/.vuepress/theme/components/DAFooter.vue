<template>
  <footer class="mt-1">
    <div class="px-2">
      <div class="flex flex-wrap -mx-2 text-xs text-center uppercase font-hairline tracking-wide">
        <div class="w-1/3 py-5 flex justify-around w-full md:w-1/3">
          <div>
            <p class="mb-3">GitHub</p>
            <a
              class="text-blue-dark hover:text-grey-darkest text-2xl"
              href="https://github.com/davidangel"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div>
            <p class="mb-3">CodePen</p>
            <a
              class="text-blue-dark hover:text-grey-darkest text-2xl"
              href="https://codepen.io/davidangel"
              target="_blank"
            >
              <i class="fab fa-codepen"></i>
            </a>
          </div>
          <div>
            <p class="mb-3">GitLab</p>
            <a
              class="text-blue-dark hover:text-grey-darkest text-2xl"
              href="https://gitlab.com/davidangel"
              target="_blank"
            >
              <i class="fab fa-gitlab"></i>
            </a>
          </div>
        </div>
        <div class="w-1/3 py-5 w-full md:w-1/3">
          <div class="logo flex items-center p-1 md:p-4">
            <div class="mx-auto">
              <DALogo size="75" flipped="true" />
            </div>
          </div>
        </div>
        <div class="w-1/3 py-5 flex justify-around w-full md:w-1/3">
          <div>
            <p class="mb-3">Twitter</p>
            <a
              class="text-blue-dark hover:text-grey-darkest text-2xl"
              href="https://twitter.com/davidius"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
          <div>
            <p class="mb-3">Instagram</p>
            <a
              class="text-blue-dark hover:text-grey-darkest text-2xl"
              href="https://instagram.com/davidius"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div>
            <p class="mb-3">Unsplash</p>
            <a
              class="text-blue-dark hover:text-grey-darkest text-2xl"
              href="https://unsplash.com/@davidangel"
              target="_blank"
            >
              <i class="fas fa-camera"></i>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center text-grey p-12">
      <span class="mx-auto">&copy; {{ currentYear }} by {{ appName }}</span>
    </div>
  </footer>
</template>
<script>
import DALogo from "../components/DALogo.vue"
export default {
  name: "DAFooter",
  components: { DALogo },
  data() {
    return {
      appName: "David Angel",
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
