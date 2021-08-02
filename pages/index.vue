<template>
    
          <div class="home-page">

            <section class="intro">

                  <v-container >
                    <v-row>
                      <v-col>
                        <div class="intro-title">
                            <h1 id="title">Najdi si tu pravú knižku
                            </h1>

                              <div class="intro-search">
                                <input
                                  placeholder="Search"
                                  type="text"
                                  >
                              </div>

                        </div>
                      </v-col>
                    
                    </v-row>
                  </v-container>
            </section>

                  <v-container>
                
                     <v-row >
                       <v-col class="text-content">
                    <h2>Aj také tu máme</h2>
                    <p>Programovanie, Marketing, Dizajn, Ebooks, Ľudia</p>
                    </v-col>


                       <v-col class="slider-row">
                         <div class="slider-container">
                           
                           <test-b :postCategory="loadedPostCategory" />

                    </div>
                    </v-col>
                  </v-row>
              
                  </v-container>


            <section>
              <v-container>
                  
                  <PostList 
                    :posts="loadedPosts" 
                  />
              </v-container>


            </section>
            
          </div>
    
    
</template>

<script>


import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import TestB from '../components/testB.vue';


export default {
  components: {
    TestB
     
   
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    },
    loadedPostCategory() {
      return this.$store.getters.loadedPosts
    }
  
  },

  mounted: function() {
      this.startAnimations()
    },
    methods: {
      startAnimations() {
        
        gsap.registerPlugin(ScrollTrigger);

          let sections = gsap.utils.toArray('.test-scroll');

      /*  gsap.set('.intro-image', {
          transformOrigin: "50% 50%"
        });

        gsap.from('.intro-image', {
            duration: 20,
            opacity: 0,
            scale: 0.3,
            ease: 'back'
        }); */

     /*   gsap.to('.intro-image1', {
            scrollTrigger: {
                trigger: '.intro-image1',
                start: 'top 200px',
                end: 'bottom 50px',
                markers: true,
                scrub: true,
                pin: true,
            },
            y: 200,
            x: 300,
            scale: 3,
            duration: 5,
            opacity: 1
            
        })*/


      


      }
}
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
};
</script>


<style  scoped>


.home-page {
  width: 80%;
  left: 20%;
  position: relative;

  
}

.intro h1 {
  font-size: 62px;
  font-family: "Calistoga";
}

.intro-title {
  position: relative;
  top: 20%;
}

.intro-search {
  background: #407BFF;
  color: white;
  padding: 20px;
  
  border-radius: 50px;
}

.intro-search[input]


.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

   .intro-image1 {
        position: relative;
        max-width: 700px;
        width: 100%;
        height: auto;
        top: -40px;
    }

.slider-row {
  justify-content: center;
}

.slider-container {
  margin-top: 50px;
  padding-bottom: 50px;
  width: 100%;
}

.text-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text-content p {
  font-size: 22px;
}
</style>
