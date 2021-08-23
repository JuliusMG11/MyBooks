<template>
    <section class="post-list">

       || <a @click="nextSlide">Next</a>



          <transition-group name='fade' tag='div' style="display: flex;">
                  <div
                  class="more-slide"
                  v-for="(slide, index) in slides"
                  :key='index'
                  >
                  <img
                  :src="slide.image"
                  />
                  <p>
                    {{ slide.title }}
                  </p>
                  </div>
                  

                  

              </transition-group>
     
    </section>

</template>

<script>
export default {
    data() {
        return {
        slides: [
          {
            id: 1,
            title: 'debil',
            image: 'http://julo.posunemevasvys.cz/wp-content/uploads/2021/04/1617898663.png'
          },
          {
            id: 2,
            title: 'debil2',
            image: 'https://images.pexels.com/photos/3981646/pexels-photo-3981646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
          }
        ],
        currentRound: 0,
        }
    },

    methods: {
      nextSlide() {
        
      }
    }
}
</script>

<style scoped>

.post-list {
  width: 50%;
  overflow: hidden;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.more-slide {
    width: 400px;
 }

.fade-enter-active, .fade-leave-active {
      transition: all 0.8s ease;
      overflow: hidden;
      visibility: visible;
      opacity: 1;
      position: absolute;

}

.fade-enter, .fade-leave-to {
 opacity: 0;
 visibility: hidden;

}

.fade-enter {
  transform: translateX(20px);
}




</style>