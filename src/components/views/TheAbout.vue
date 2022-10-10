<template>
    <section id="about" uk-parallax=" blur: 0.8; ">
        
        <div class="main">
           <SectionTitles  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="20" data-aos-offset="0"
        :style="{ fontSize: '4rem',margin:'rem,0,7rem 0'}" title="About me"
         ></SectionTitles>
   
            <about-container></about-container>
        </div>
    </section>
</template>

<script>
import AboutContainer from '../layout/about/AboutContainer.vue'
import SectionTitles from '../ui/SectionTitles.vue'
export default {
    name: "about",
    components: {
        SectionTitles,
        AboutContainer
    },
    data() {
        return {

        };
    },
};
</script>

<style scoped>


.about-container .square {
    margin: 5rem 0;
    width: 30rem;
    height: 40rem;

    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    margin: 8rem 0 0 0;

}


#about {
    min-height: 70vh;
   
    padding: 0 auto;

    align-items: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    text-align: center;

}



#about .about-header h3 {
    margin: 2rem 0;
    padding: 0 0 0 2rem;
    font-size: 3rem;
    line-height: 3rem;
    color: rgb(255, 255, 255, 0.8);
    font-weight: 600;
    padding: auto 0;
}




/*Media queries started*/

@media only screen and (min-width: 1024px) {
    #about .about-text {
        width: 35%;
        margin: 1rem 0;
    }
}


</style>
