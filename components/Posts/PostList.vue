<template>
      <section class="featured-posts">

            <post-preview
              id = "1"
              :is-admin="isAdmin"
              title="Hello there" 
              previewText="This is my first shit"
              thumbnail="https://images.pexels.com/photos/6569318/pexels-photo-6569318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              />
            <post-preview 
              id = "2"
              :is-admin="isAdmin"
              title="Hello there 2" 
              previewText="This is my first shit 2121"
              thumbnail="https://images.pexels.com/photos/6569318/pexels-photo-6569318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />
            <post-preview 
              id = "3"
              :is-admin="isAdmin"
              title="Hello there 3" 
              previewText="This is my first shit 3 23 23 3 "
              thumbnail="https://images.pexels.com/photos/6569318/pexels-photo-6569318.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            />

        </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview.vue'

export default {
    components: {
        PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false
      }
    }
}

</script>

<style scoped>
  .posts-page {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}
</style>