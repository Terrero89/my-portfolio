<template>
  <div
    class="hero-content"
    uk-parallax="target: #hero-img; start: 90vh; end: 10vh; y: -300; easing: 1;"
  >
    <div class="hero-text">
      <span class="hero-greet">Hi there, I'm</span>
      <h3 data-aos-duration="400" data-aos="fade-up">Sergio Terrero</h3>

      <h2 data-aos-duration="400" data-aos="fade-up">
        I build ideas with code from scratch.
      </h2>

      <p data-aos-duration="600" data-aos="fade-up">
        I'm a passionate <span>Front-end Developer</span> with the desire to learn,
        improve and help build ideas. My main focus is to build performant, accessible,
        and search optimized websites and apps.
      </p>
    </div>

    <TheHeroButton
      button-title="Virtual Resume"
      link="https://sergiovirtualresume.netlify.app"
    />
  </div>
</template>

<script>
import TheHeroButton from "../../ui/TheHeroButton.vue";
export default {
  components: { TheHeroButton },
};
</script>

<style scoped>
/*START REGULAR SCREEN SIZE CSS PROPERTIES */
.hero-text span {
  color: #61dbfb;
}

.hero-img img {
  height: 100%;
  width: 360px;
  border-radius: 5rem;
}

.hero-content {
  max-width: 900px;
  margin: 0 auto;
  animation-duration: 1.3s;
}

.hero-text h3 {
  font-size: 7.5rem;
  letter-spacing: 0.1rem;
  opacity: 0.8;
}

.hero-text h2 {
  font-size: 5rem;
  letter-spacing: 0.1rem;
  line-height: 5rem;
  margin: 1.8rem 0;
  color: rgba(225, 244, 255, 0.8);
  width: 70rem;
}

.hero-text p {
  color: rgba(225, 244, 255, 0.7);
  font-size: 1.55rem;
  line-height: 2.5rem;
  margin: 1rem 0;
  width: 60%;
}

.hero-text span {
  font-size: 1.55rem;
  font-weight: 600;
}
.hero-text .hero-greet {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
}

/*ENDS REGULAR SCREEN SIZE CSS PROPERTIES */

/* ***************************************** */
/*Media queries for hero section*/
@media only screen and (max-width: 390px) {
  .hero-content {
    padding: 0 0.5rem;
    background-color: rgb(59, 0, 155);
    width: 90%;
  }

  .hero-text h3 {
    font-size: 5rem;
    letter-spacing: 0.3rem;
    margin-bottom: 1.5rem;
  }

  .hero-text p {
    font-weight: 500;
    line-height: 2rem;
    letter-spacing: 1px;
    width: 100%;
  }
}

/* SEMI SM SCREEN */
@media only screen and (max-width: 425px) {
  .hero-content {
    padding: 0rem;
    width: 90%;
    /* background-color:  rgb(99, 58, 58); */
  }

  .hero-text h3 {
    font-size: 4.2rem;
  }

  .hero-text h2 {
    font-size: 3.1rem;
    width: 100%;
    margin: 1.5rem auto;
    line-height: 3rem;
  }

  .hero-text p {
    width: 100%;

    line-height: 2.3rem;
    font-weight: 300;
  }
}

/* MD TABLET SCREEN */
@media only screen and (min-width: 426px) and (max-width: 648px) {
  .hero-content {
    /* background-color: rgb(68, 68, 68); */
    width: 80%;
  }

  .hero-text h3 {
    font-size: 4.3rem;
  }

  .hero-text h2 {
    font-size: 3rem;
    line-height: 3.5rem;
    width: 100%;
  }

  .hero-text p {
    width: 98%;
  }
}

/* TABLET SCREEN */
@media only screen and (min-width: 649px) and (max-width: 768px) {
  .hero-content {
    width: 86%;
    /* background-color: rgb(167, 23, 23); */
  }
  .hero-text h3 {
    font-size: 5rem;
  }
  .hero-text h2 {
    font-size: 3.4rem;
    width: 100%;
    line-height: 3.5rem;
  }

  .hero-text p {
    line-height: 2.5rem;

    width: 95%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .hero-content {
    padding: 0rem;
    width: 85%;
    /* background-color: rgb(0, 124, 124); */
  }

  .hero-text h3 {
    font-size: 6.1rem;
  }

  .hero-text h2 {
    font-size: 4.5rem;
    margin: 1.5rem 0;
  }

  .hero-text p {
    width: 80%;
  }
}
/* 
@media only screen and (min-width: 1024px){
  .hero-content {

 
    background-color: rgb(124, 0, 52);
  }

  .hero-text h3 {
    font-size: 6.1rem;

  }

  .hero-text h2 {
   
    font-size: 4.5rem;
    margin: 2.5rem 0;

  }

  .hero-text p {

    width: 60%;

  }



} */
</style>
