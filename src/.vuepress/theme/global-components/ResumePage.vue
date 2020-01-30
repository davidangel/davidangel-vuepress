<template>
  <div>
    <div v-html="markdown($frontmatter.intro)"></div>
    <ResumeItem
      v-for="item in $frontmatter.resumeItems"
      :title="item.title"
      :companyName="item.companyName"
      :dates="item.dates"
      :image="item.image"
    >
      <div v-html="markdown(item.description)"></div>
    </ResumeItem>
    <div v-html="markdown($frontmatter.outro)"></div>
  </div>
</template>

<script>
import marked from "marked"

export default {
  name: "ResumePage",
  methods: {
    markdown: function(value) {
      return marked(value, { sanitize: true })
    }
  }
}
</script>

<style scoped></style>
