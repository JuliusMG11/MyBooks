<template>
  <div>
    <TestPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :category="post.category"
    />
  </div>
  
</template>

<script>
 import TestPreview from './TestPreview.vue'

export default {
  components: {
    TestPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }

}
</script>

<style>

</style>