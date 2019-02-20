<template>
  <router-link
    class="nav-link no-underline text-grey-darkest hover:text-blue hover:bg-grey-lighter px-5 py-4 text-xs"
    :to="link"
    v-if="!isExternal(link)"
    :exact="exact"
  >{{ item.text }}</router-link>
  <a
    v-else
    :href="link"
    class="nav-link no-underline text-grey-darkest hover:text-blue hover:bg-grey-lighter px-5 py-4 text-xs external"
    :target="isMailto(link) || isTel(link) ? null : '_blank'"
    :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'"
  >
    {{ item.text }}
    <OutboundLink/>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from "../util";

export default {
  props: {
    item: {
      required: true
    }
  },

  computed: {
    link() {
      return ensureExt(this.item.link);
    },

    exact() {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(
          rootLink => rootLink === this.link
        );
      }
      return this.link === "/";
    }
  },

  methods: {
    isExternal,
    isMailto,
    isTel
  }
};
</script>

<style lang="stylus">
.nav-links .router-link-exact-active {
  border-bottom-width: 2px;
  border-style: solid;
  border-color: #70a5d8;
}
</style>
