<template>
  <nav class="bg-white h-12 shadow mb-8">
    <div class="container sm mx-auto">
      <div class>
        <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
        <div
          class="links flex flex-row justify-between"
          :style="linksWrapMaxWidth ? {
        'max-width': linksWrapMaxWidth + 'px'
      } : {}"
        >
          <NavLinks class="can-hide"/>
          <AlgoliaSearchBox class="mt-2" v-if="isAlgoliaSearch" :options="algolia"/>
          <SearchBox class="mt-2" v-else-if="$site.themeConfig.search !== false"/>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SidebarButton from "./SidebarButton.vue"
import AlgoliaSearchBox from "@AlgoliaSearchBox"
import SearchBox from "@SearchBox"
import NavLinks from "./NavLinks.vue"

export default {
  components: { SidebarButton, NavLinks, SearchBox, AlgoliaSearchBox },

  data() {
    return {
      linksWrapMaxWidth: null
    }
  },

  mounted() {
    const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
    const NAVBAR_VERTICAL_PADDING =
      parseInt(css(this.$el, "paddingLeft")) +
      parseInt(css(this.$el, "paddingRight"))
    const handleLinksWrapWidth = () => {
      if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
        this.linksWrapMaxWidth = null
      } else {
        this.linksWrapMaxWidth =
          this.$el.offsetWidth -
          NAVBAR_VERTICAL_PADDING -
          ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0)
      }
    }
    handleLinksWrapWidth()
    window.addEventListener("resize", handleLinksWrapWidth, false)
  },

  computed: {
    algolia() {
      return (
        this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
      )
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName
    }
  }
}

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property]
}
</script>

<style lang="stylus">
.search-box {
}

ul.suggestions {
  left: -10rem;
  margin-top: 0.5rem;
}

@media (max-width: $MQMobile) {
  .can-hide {
    display: none;
  }

  .search-box {
    padding-right: 1rem;
  }
}
</style>
