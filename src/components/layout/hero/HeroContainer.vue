<template>
  <div class="hero-content" uk-parallax="target: #hero-img; start: 90%; end: 30%; y: -450; easing: 5;">
    <div class="hero-text">
      <span>Hi there, I'm</span>
      <h3 data-aos-duration="400" data-aos="fade-up">
        {{ title }}
      </h3>

      <h2 data-aos-duration="400" data-aos="fade-up">
        {{ subtitle }}
      </h2>

      <p data-aos-duration="600" data-aos="fade-up">
        {{ description }}
      </p>
    </div>

    <a href="https://sergiovirtualresume.netlify.app"><button data-aos="zoom-in" data-aos-delay="300"
        class="hero-btn">Virtual Resume </button></a>

  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "description"],
  data() {

    return {
      heroInfo: [{ title: " Sergio Terrero" }],
    };
  },
};
</script>

<style scoped>
/*START REGULAR SCREEN SIZE CSS PROPERTIES */
.hero-text span {
  color: #61DBFB;
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
  margin-bottom: 2rem;
}

.hero-text h2 {
  font-size: 5rem;
  letter-spacing: 0.1rem;
  line-height: 5rem;
  margin: 2rem 0;
  color: rgba(225, 244, 255, 0.8);
  width: 70rem;

}

.hero-text p {
  color: rgba(225, 244, 255, 0.7);
  font-size: 1.58rem;
  line-height: 2.5rem;
  margin: 2.5rem 0;
  width: 60%;
}

.hero-text span {
  font-size: 2rem;
  letter-spacing: 0.1rem;
  line-height: 5rem;
}



.hero-btn {
  padding: 16px 29px;
  background: none;
  border: solid 1px #2e4c6d;
  margin: 3rem 0;
  font-size: 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}

.hero-btn a {
  text-decoration: none;
  list-style: none;
  color: #61DBFB;
}

.hero-btn a:hover {

  color: #f5f5f5;
}


.hero-btn:hover {
  /* background: #46a0b6; */
  background: #46a0b6;
  ;
  color: white;
  transition: 0.3s ease-in-out;
}

/*ENDS REGULAR SCREEN SIZE CSS PROPERTIES */

/* ***************************************** */
/*Media queries for hero section*/
@media only screen and (max-width: 390px) {
  .hero-content {

    padding: 0 0.5rem;
    background-color:  rgb(59, 0, 155);
    width: 90%;
  }

  .hero-text h3 {

    font-size: 5rem;
    letter-spacing: 0.3rem;
    margin-bottom: 1.5rem;
  }

  .hero-text p {
    font-weight: 500;
    line-height: 2.8rem;
    letter-spacing: 1px;
    width: 100%;
  }


}

/* SEMI SM SCREEN */
@media only screen and  (max-width: 425px) {
  .hero-content {
 
    padding:0rem;
    width: 90%;
    background-color:  rgb(240, 162, 162);

  }

  .hero-text h3 {
    font-size: 4.2rem;
  }

  .hero-text h2 {
    font-size: 3.1rem;
    width: 100%;
    margin: 1.5rem auto;
    line-height: 3.2rem;

  }

  .hero-text p {
    width: 100%;

    line-height: 2.5rem;
    font-weight: 300;
  }

  .hero-btn {
    padding: 16px 20px;
  }
}

/* MD TABLET SCREEN */
@media only screen and  (min-width: 426px)  and (max-width: 648px) {
  .hero-content {

    background-color:  rgb(68, 68, 68);
    width: 88%;


  }

  .hero-text h3 {
    font-size: 4.3rem;
  }

  .hero-text h2 {
    line-height: 3rem;
    font-size: 2.8rem;
    width: 100%;
    margin: 2.5rem auto;
   
  }

  .hero-text p {

    width: 98%;
  }
}


/* TABLET SCREEN */
@media only screen and (min-width: 649px) and (max-width: 768px) {

  .hero-content {
  
    padding: 0 2rem;
    width: 90%;
    background-color:  rgb(167, 23, 23);
  }

  .hero-text h2 {
    font-size: 3.4rem;
    width: 100%;
    margin: 2.5rem auto;
  }

  .hero-text h3 {
  
    font-size: 5rem;

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
    background-color:  rgb(0, 124, 124);
  }

  .hero-text h3 {
    font-size: 6.1rem;

  }

  .hero-text h2 {
    font-size: 4.5rem;

  }

  .hero-text p {
    width: 80%;

  }


}
</style>
