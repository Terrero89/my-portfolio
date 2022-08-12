<template>
  <section id="blog-section">
<SectionTitles title="Blog"> </SectionTitles>
<CardBase></CardBase>


  </section>
</template>


<script>
import SectionTitles from "./../ui/SectionTitles.vue"
import CardBase from "../blog/CardBase.vue"
export default {
    components: { SectionTitles, CardBase}
    
}
</script>

<style scoped>
    #blog-section{
    min-height: 65vh;
    align-items: center;
    }

 
</style>

