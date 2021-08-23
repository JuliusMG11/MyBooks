<template>
  <div>
    <p>{{ data}}</p>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
    name:'testB',
   
   data() {
      return {
        data: null,
        postsCategory: {
            type: Array,
            required: true
          }

      }
    },

   mounted() {
      axios
        .get('https://nuxt-blog-1bfc5-default-rtdb.firebaseio.com/posts.json')
        .then(response => this.data = response);
        console.log(this.data)
    }
    


    

}
</script>

<style>

</style>