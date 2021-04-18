<template>
    <div class="intro-image">
        <img src="~/assets/images/object.png" alt="">
    </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
    mounted: function() {
      this.startAnimations()
    },
    methods: {
      startAnimations() {
        
        gsap.registerPlugin(ScrollTrigger);


      /*  gsap.set('.intro-image', {
          transformOrigin: "50% 50%"
        });

        gsap.from('.intro-image', {
            duration: 20,
            opacity: 0,
            scale: 0.3,
            ease: 'back'
        }); */

     /*   gsap.to('.intro-image', {
            scrollTrigger: {
                trigger: '.intro-image',
                start: '20px 80%',
                end: '+=100%',
               /// markers: true,
                scrub: true
            },
            x: 200,
            rotation: 360,
            duration: 3
            
        })*/


      }
}
}
</script>

<style style="scoped">

    .intro-image {
        position: relative;
        max-width: 700px;
        width: 100%;
        height: auto;
        top: -40px;
    }

</style>