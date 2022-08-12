
<template>
<section id="project-section">

    <div class="project-wrapper">
        <section-titles data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="80"
            data-aos-offset="0"
         :style="{ margin: '10rem 0 2rem 0', fontSize: '4rem'}" title="My Projects" />
      
        <section-titles data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="150"
            data-aos-offset="0"
        :style="{ margin: '0rem 0 3rem 0', fontSize: '3.5rem', color:subTextColor}" title="Some of my best projects" />

        <project-list></project-list>
    </div>
</section>
</template>

<script>
import ProjectList from "../layout/project/ProjectList.vue"

export default {
    name: "project list",
    components: {
        ProjectList
    },

    data() {
        return {

            subTextColor: 'white'

        }
    },

}
</script>

<style scoped>
.project-title {
    font-size: 3rem;
    width: 70%;
    margin: 2rem auto 5rem auto;
    text-align: left;

}

.buttons {
    display: inline-block;
    margin: 3.5rem 0;
}

#project-section {
    min-height: 100vh;
    display: flex;
    justify-content: center;
   

}

.project {
    
    margin: 1rem;

}

.project-wrapper {

    overflow: hidden;

}

.project-wrapper h3 {
    font-size: 4rem;
    margin-bottom: 7rem;
    overflow: hidden;

}
</style>
