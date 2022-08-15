<template>

    <div v-if="isLoading" class="bg">
        <h3>loading....</h3>

    </div>
    <div class="bg2" v-if="!isLoading" >
      <TheNavbar></TheNavbar>
          <TheHero></TheHero>
        <TheAbout></TheAbout>
        <TheSkills></TheSkills>
        <Projects></Projects>
        <Contact></Contact> 
     
    </div>



</template>

<script>
import TheNavbar from "./components/ui/TheNavbar.vue";
import TheHero from "./components/views/TheHero.vue";
import TheAbout from "./components/views/TheAbout.vue";
import TheSkills from "./components/views/TheSkills.vue";

import Contact from "./components/views/Contact.vue"
import Projects from "./components/views/TheProjects.vue"


export default {
    name: "App",

    components: {
        TheNavbar,
        TheHero,
        TheAbout,
        TheSkills,
        Projects,
        Contact,




    },

    data() {
        return {
            isLoading: false,
        }
    },

    mounted() {
        document.onreadystatechange = () => {
            //! spiner at the befinning set for two seconds
            if (document.readyState == "complete") {

                // setTimeout(() => {
                //     this.isLoading = false;
                // }, 3000);
                //  this.isLoading = true;

                this.isLoading = false; //temporary
            }
        };
    },
};
</script>

<style>
.bg {
    
    z-index: 1000;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    animation:change;
}

@keyframes change {

    0%{opacity: 0; background-color:rgb(212, 212, 212);transition:0.4s ease-in-out}
    10%{opacity: 0; background-color:rgb(255, 255, 255); transition:0.4s ease-in-out}
    10%{opacity: 0; background-color:rgb(255, 255, 255) ;transition:0.4s ease-in-out}
    90%{opacity: 1;background-color:rgb(255, 255, 255,0.6); transition:0.4s ease-in-out; }
     100%{opacity: 0;background-color:rgb(255, 255, 255,0.6); transition:0.4s ease-in-out; }
}

* {
    /* border: solid rgb(9, 255, 0) .1px; */
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Raleway', sans-serif;

}

html {
    position: relative;

    background-color: #031226;
    color: white;
    font-size: 62.5%;
}

p {
    color: rgb(255, 255, 255);
}

/* Main titles H3 */
h3 {
    color: #fef8fd;
    ;
}

h1,
h2,
h4,
h5,
button {

    color: #61DBFB;
    /*react color */
}
</style>
