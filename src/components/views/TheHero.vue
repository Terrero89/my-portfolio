<template>
    <div class="hero-section" uk-parallax="blur: 10; blue: 5;">
        <HeroContainer :title="titleName" :subtitle="subDesc" :description="titleDesc" />
        

    </div>
</template>

<script>
import HeroContainer from "../layout/hero/HeroContainer.vue";

export default {
    components: {
        HeroContainer,
      
    },

    data() {
        return {
        
            titleName: "Sergio Terrero",
            subDesc: "I build ideas with code from scratch.",
            titleDesc: "Passionate and driven Front-end Developer with the desire to learn, improve and help build ideas. My main focus is to build performant, accessible, and search optimized websites and apps.",
          
        };
    },

    

}
</script>

<style scoped>
.hero-section {
    position: relative;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    z-index: 1;
    /* border: solid black 1px; */
}


</style>
