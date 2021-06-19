<template>
  <div>
      <div class="mini-slider">
            <a @click="prev" class="prev-button">Previous</a> || <a @click="next">Next</a>
            <transition-group name='fade' tag='div'>
                  <div
                  v-for="number in [currentNumber]"
                  :key='number'
                  >
                  <img
                  :src="currentImage"
                
                  />
                  </div>
                  

                  

              </transition-group>
      </div>

  </div>
</template>

<script>
import { gsap } from 'gsap'
import TweenLite from 'gsap'

export default {
	props: [],
	data() {
		return {
		
        images: [
          'http://julo.posunemevasvys.cz/wp-content/uploads/2021/04/1617898663.png', 
          'https://images.pexels.com/photos/3981646/pexels-photo-3981646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          'http://julo.posunemevasvys.cz/wp-content/uploads/2021/04/1617898663.png',
          'https://images.pexels.com/photos/3981646/pexels-photo-3981646.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
          'http://julo.posunemevasvys.cz/wp-content/uploads/2021/04/1617898663.png',

        ],
       
      
        currentNumber: 0,
        timer: null
			}
	},

	mounted() {
    
  },

  methods: {
    startRotation() {
      this.time = setInterval(this.next, 3000);
    },

    stopRotation() {
      clearTimeout(this.time);
      this.time = null;
    },
    next() {
      console.log('debil');
      this.currentNumber += 1;
    },
    prev() {
      this.currentNumber -=1;
    }
  },
  computed: {
    currentImage() {
        return this.images[Math.abs(this.currentNumber) % this.images.length];
    }
  }

}
</script>

<style scoped>

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


.mini-slider {
  position: relative;
  height: 600px;
  width: 100%;

}

.mini-slider img {
  max-width: 400px;
}

.prev-button {
   
}

</style>