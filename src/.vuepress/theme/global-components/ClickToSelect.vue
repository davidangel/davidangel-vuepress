<template>
  <span class="click-to-select" @click="select">
    <slot></slot>
  </span>
</template>

<style>
.click-to-select {
  -webkit-user-select: all; /* Chrome 49+ */
  -moz-user-select: all; /* Firefox 43+ */
  -ms-user-select: all; /* No support yet */
  user-select: all; /* Likely future */
}
</style>

<script>
export default {
  name: "ClickToSelect",
  methods: {
    select() {
      const text = this.$el.innerHTML
      document.execCommand("copy")
      if (document.selection) {
        const range = document.body.createTextRange()
        range.moveToElementText(this.$el)
        range.select()
      } else if (window.getSelection) {
        const range = document.createRange()
        range.selectNode(this.$el)
        window.getSelection().removeAllRanges()
        window.getSelection().addRange(range)
      }
      document.execCommand("copy")
    }
  }
}
</script>
