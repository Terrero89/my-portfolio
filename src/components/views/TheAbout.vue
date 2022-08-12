<template>
    <section id="about" uk-parallax=" blur: 0.8; ">
        
        <div class="main">
           <section-titles  data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="20" data-aos-offset="0"
        :style="{ fontSize: '4rem',margin:'rem,0,7rem 0'}" title="About me"
         ></section-titles>
   
            <about-container></about-container>
        </div>
    </section>
</template>

<script>
import AboutContainer from '../layout/about/AboutContainer.vue'
export default {
    name: "about",
    components: {

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

#about .about-intro span {
    font-weight: 300;
    font-size: 1.4rem;
    /* color: #71dfe7; */
    padding: 0 0 0 2rem;
    color: #aaacc9;
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

#about .about-container {
    position: relative;
    max-width: 1400px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* border: solid white 1px; */

    text-align: left;

}

.about-text h4 {
    font-size: 4.5rem;
    font-weight: 800;
    letter-spacing: 0.5rem;
    color: #303336;
    margin: 2rem 0;
}

.about-text p {
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    line-height: 2.7rem;
    padding: 0 0 0 2rem;
    margin: 2rem 0 2rem 0;

    text-align: justify;
    text-justify: inter-word;
}

#about .about-text {
    width: 45%;

}

#about .about-container .about-img img {
    position: absolute;
    bottom: -3.1rem;
    border-radius: 0% 0% 53% 53%;
    z-index: 50;

    object-fit: contain;
    width: 100%;
    height: 100%;

}

/*Media queries started*/

@media only screen and (min-width: 1024px) {
    #about .about-text {
        width: 35%;
        margin: 1rem 0;
    }
}

@media only screen and (max-width: 768px) {
    #about .about-text {
        width: 80%;
        margin: 1rem 0;
    }

    #about .about-intro h3 {
        padding: 0;
    }

    #about .about-header h3 {
        padding: 0;
    }

    #about .about-container .about-img img {
        object-fit: contain;
        border-radius: 50%;
    }

    #about .about-text p {
        padding: 0;
    }
}

@media only screen and (max-width: 610px) {
    #about .about-text {

        margin: 3rem 0;
    }

    #about .about-text p {
        font-size: 1.5rem;
        padding: 0;
    }

}

@media only screen and (max-width: 536px) {
    #about .about-text {
        width: 90%;
    }

    #about .about-text p {
        font-size: 1.5rem;
        padding: 0;
    }

}

@media only screen and (max-width: 490px) {

    .about-container .square {
        margin-bottom: 3rem;
    }

    #about .about-text {

        width: 100%;
    }

    #about .about-text p {
        margin: 2rem 2.5rem 0 2.5rem;
        font-size: 1.5rem;
        padding: 0;
        order: 1;
    }

    #about .about-header h3 {
        margin: 0 2.5rem;
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: 0.2rem;

    }

    #about .about-intro h3 {
        margin: 2.5rem;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.2rem;
        color: rgb(28, 26, 51);
    }

}
</style>
