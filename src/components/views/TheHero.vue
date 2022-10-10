<template>
    <div class="hero-section" uk-parallax="blur: 10; blue: 5;">
        <HeroContainer>
            
        </HeroContainer>
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
