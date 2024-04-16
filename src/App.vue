<template>
  <div>
    <div v-if="isLoading" class="bg">
      <div class="name">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <div class="bg2" v-if="!isLoading">
      <TheNavbar></TheNavbar>
      <TheHero></TheHero>
      <TheAbout></TheAbout>
      <TheSkills></TheSkills>
      <Projects></Projects>
      <Contact></Contact>
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheFooter from "./components/views/TheFooter.vue";
import TheNavbar from "./components/layout/navigation/TheNavbar.vue";
import TheHero from "./components/views/TheHero.vue";
import TheAbout from "./components/views/TheAbout.vue";
import TheSkills from "./components/views/TheSkills.vue";
import Contact from "./components/views/Contact.vue";
import Projects from "./components/views/TheProjects.vue";

export default {
  name: "App",

  components: {
    TheNavbar,
    TheHero,
    TheAbout,
    TheSkills,
    Projects,
    Contact,
    TheFooter,
  },

  data() {
    return {
      isLoading: false,
      showName: false,
    };
  },

  mounted() {
    document.onreadystatechange = () => {
     
      if (document.readyState == "complete") {
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
      }
    };
    this.isLoading = true;
  },
};
</script>

<style>
.s,
.t {
  position: absolute;
  color: red;
}

.s {
  bottom: 10.2rem;
  left: 6rem;
  animation: move;
}
.t {
  bottom: 10.2rem;
  left: 6.9rem;
}

@keyframes move {
  0% {
    right: 5.4rem;
    top: 0px;
  }
  100% {
    right: 5.4rem;
    top: 0px;
  }
  /* 50%   {background-color:red; left:0px; top:0px;}
  100%  {background-color:yellow; left:200px; top:0px;}    */
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ellipsis div {
  position: absolute;
  top: 33px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: rgb(209, 211, 219);
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}

/* 

paragraphs:  
color: rgba(205, 229, 243, 0.8); 
font-size: 1.58rem;
line-height: 2.3rem;

*/

/* section subtitles:
font-size: 2.5rem;
  color: rgb(255, 255, 255, 0.8);

 */

/* Color to change when finished:
 html Doc: #02383C;
 contrast color: 
 
 */
/* color: rgb(0, 217, 255); */

.bg {
  z-index: 1000;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
}

* {
  /* border: solid rgb(9, 255, 0) .1px; */
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Raleway", sans-serif;
}

body {
  overflow-x: hidden;
}

html {
  background-color: #031226;
  color: white;
  font-size: 62.5%;
}
</style>
