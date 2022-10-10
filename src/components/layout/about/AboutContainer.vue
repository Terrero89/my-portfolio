<template>
   
          
    <div class="about-container">
       
        <!-- about text component -->
        <about-text></about-text>
        <!-- about image component -->
        <about-image></about-image>


    </div>
</template>

<script>
import AboutImage from './AboutImage.vue'
import AboutText from './AboutText.vue'
export default {
    components: {
        AboutImage,
        AboutText
    },
}
</script>

<style scoped>





#about .about-container {
    position: relative;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: left;

}






/*Media queries started*/



</style>
