import * as firebase from 'firebase/app'
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyB6p4Zh9aw1TCEzBmhaboE28oEasn8T1Ho",
    authDomain: "nuxt-blog-1bfc5.firebaseapp.com",
    databaseURL: "https://nuxt-blog-1bfc5-default-rtdb.firebaseio.com",
    projectId: "nuxt-blog-1bfc5",
    storageBucket: "nuxt-blog-1bfc5.appspot.com",
    messagingSenderId: "422792852775",
    appId: "1:422792852775:web:70c4b7e4505bb088dba502",
    measurementId: "G-0V8W0WL4XS"
  };



  
  let app = null;
if (!firebase.apps.length) {
    app =  firebase.initializeApp(firebaseConfig);
}


export default firebase