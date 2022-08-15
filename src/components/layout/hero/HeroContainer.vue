<template>
  <div
    class="hero-content"
    uk-parallax="target: #hero-img; start: 90%; end: 30%; y: -450; easing: 5;"
  >
    <div class="hero-text">
      <span>Hi there, I'm</span>
      <h3 data-aos-duration="400" data-aos="fade-up"  >
        {{ title }}
      </h3>

      <h2 data-aos-duration="400" data-aos="fade-up"  >
        {{ subtitle }}
      </h2>

      <p data-aos-duration="600" data-aos="fade-up"  >
        {{ description }}
      </p>
    </div>
<a href="https://sergiovirtualresume.netlify.app"><button data-aos="zoom-in"  data-aos-delay="300"  class="hero-btn">Virtual Resume  </button></a>
    
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

.hero-text span{
   color:#61DBFB; 
}

.hero-img {
  /* border: solid white 1px; */

  height: auto;
  flex: 1 1 40rem;
  animation-name: fadeup;
  animation-duration: 1.3s;
}

.hero-img img {
  height: 100%;
  width: 360px;
  border-radius: 5rem;

  /* animation-name: fadeupp;
    animation-duration: 2s; */
}

.hero-content {
  /* border: solid white 1px; */
  max-width: 900px;
  margin: 0 auto;

  animation-duration: 1.3s;
}

/* .hero-text{
   
 } */

.hero-text h3 {
  font-size: 9.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
}

.hero-text h2 {
  font-size: 4.5rem;
  font-weight: 600;
  letter-spacing: 0.2rem;
  line-height: 5rem;
  margin: 2rem 0;
  color: rgba(225, 244, 255, 0.8);
  width: 70rem;
}

.hero-text p {
  font-weight: 500;
  color: rgba(225, 244, 255, 0.8);
  font-size: 1.6rem;
  line-height: 3rem;
  letter-spacing: 1px;
  margin: 2.5rem 0;
  width: 60%;
}

.hero-text span {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  line-height: 5rem;
}

.hero-text h2 span {
  font-size: 4.5rem;
  font-weight: 300;
  letter-spacing: 0.2rem;
  line-height: 5rem;
  color: #0064fa;
}

.hero-btn {
  padding: 16px 29px;
  background: none;
  border: solid 1px #2e4c6d;
  margin: 3rem 0;
  font-size: 1.5rem;
  border-radius: 5px;
}
.hero-btn a{
text-decoration: none;
list-style: none;
   color:#61DBFB; 
}
.hero-btn a:hover{

   color:#f5f5f5; 
}


.hero-btn:hover {
  /* background: #46a0b6; */
  background: #46a0b6;;
  color: white;
  transition: 0.3s ease-in-out;
}

/*Media queries for hero section*/

@media only screen and (max-width: 390px) {
  .hero-content {
    margin: 10rem 0;
    padding: 0 0.5rem;
  }

  .hero-text h3 {
    /* color: #000000; */
    font-size: 7rem;

    letter-spacing: 0.3rem;
    margin-bottom: 1.5rem;
  }

  .hero-text p {
    font-weight: 500;
    /* color: #000000; */
    font-size: 1.8rem;
    line-height: 2.8rem;
    letter-spacing: 1px;
    width: 100%;
  }

  .hero-text h2 span {
    font-size: 4.5rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
    line-height: 5rem;

    color: #0064fa;
  }
}

@media only screen and (max-width: 768px) {

  .hero-content {
    margin: 10rem 0;
    padding: 0 2rem;

    width: 98%;
  }

 .hero-text h2 {
    font-size: 3.4rem;
    width: 100%;
    margin: 2.5rem auto;
  }
  .hero-text h3 {
    /* color: #000000; */
    font-size: 5rem;

    letter-spacing: 0.4rem;
  }
  

  .hero-text p {
    font-weight: 500;
    /* color: #000000; */
    font-size: 1.6rem;
    line-height: 2.5rem;
    letter-spacing: 1px;
    width: 95%;

    /* font-family: "Roboto Slab", serif; */
  }
}

/* ANIMATIONS START */
@keyframes fadeup {
  from {
    opacity: 0;
    margin-bottom: -30px;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeupp {
  from {
    position: relative;
    opacity: 0;

    right: 55rem;
  }

  to {
    opacity: 0.5;
  }
}

/* AANIMATION END */

@media only screen and (max-width: 648px) {
  .hero-content {
    margin: 10rem 0;
   
    
    /* width: 90%; */
  }

  .hero-text h3 {
    font-size: 4.3rem;
  }

  .hero-text h2 {
    font-size: 2.8rem;
    width: 100%;
    margin: 2.5rem auto;
  }

  .hero-text p {
    font-size: 1.6rem;
    width: 98%;
  }
}

@media only screen and (max-width: 425px) {
  .hero-content {
    margin: 12rem 0;
    padding: 0 2.5rem;
    width: 98%;

  }

  .hero-text h3 {
    /* color: #000000; */
    font-size: 4rem;

    /* font-family: "Roboto Slab", serif; */
  }

  .hero-text h2 {
    font-size: 2.7rem;
    width: 100%;
    margin: 2.5rem auto;
    line-height: 3.2rem;
    /* font-family: "Roboto Slab", serif; */
  }

  .hero-text p {
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.5rem;
  }

  .hero-btn {
    padding: 16px 20px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .hero-content {
    padding: 0 2.5rem;
    width: 90%;
  }

  .hero-text h3 {
    font-size: 6.1rem;
    letter-spacing: 0.3rem;
  }

  .hero-text h2 {
    font-size: 4rem;
  }

  .hero-text p {
    font-weight: 500;
    font-size: 1.6rem;
    width: 95%;
    /* font-family: "Roboto Slab", serif; */
  }

  @media only screen and (min-width: 1024px) {
    .hero-content {
      margin: 12rem 0;
    }
  }
}
</style>
