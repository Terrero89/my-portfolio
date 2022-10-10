

<template>

   
    <div class="skills-container">
            <SectionTitles data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="80" data-aos-offset="0"
            :style="{ margin: '10rem 0 1.5rem 0'}" title="My Skills" />

            <SectionTitles data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="150" data-aos-offset="0"
            :style="{ margin: '0rem 0 3rem 0', fontSize: '3.5rem', color: 'white' }" title="Some tools I've used" />
        
        <SkillsBox></SkillsBox>

    </div>
</template>

<script>

import SkillsBox from "./SkillsBox.vue"
import SectionTitles from '../../ui/SectionTitles.vue'
export default {
    components: {
        SectionTitles,
        SkillsBox
    },

    data() {
        return {
            
        }
    }

};
</script>

<style scoped>
.skills-container {
   
 
    overflow: hidden;
    margin: 0rem 0 10rem 0;
    min-height: 80vh;
  

}

@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

.technology-box img:hover {
    transform: scale(1.3);
    transition: 0.1s ease-in, 0.1s ease;
}
</style>
