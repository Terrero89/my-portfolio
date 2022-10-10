<template>
  <div
    class="about-img"
    data-aos="fade-zoom-in"
    data-aos-easing="ease-in-back"
    data-aos-offset="250"
    uk-parallax=" blur: 1.8; blue: 5; "
  >
    <div class="square">
      <img
        src="../../../assets/images/newAr.png"
        data-aos="fade-up"
        data-aos-delay="350"
        data-aos-offset="250"
        alt="my-avatar"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-container .square {
  position: relative;
  /* border: solid red 1px; */
  width: 32rem;
  height: 32rem;
  border-radius: 5px;

  margin: 5rem 0 0 0;
}

.about-container .square2 {
  overflow: hidden;
  z-index: 0;

  z-index: 100;
  width: 32rem;
  height: 32rem;
  border-radius: 5px;
}

#about .about-container .about-img {
  overflow: hidden;
  object-fit: fill;
  margin: auto 0;
  background-color: rgb(255, 255, 255, 0.5);
  border-radius: 5px;
  margin-bottom: 5rem;
}

#about .about-container .about-img img {
  position: absolute;
  border-radius: 0% 0% 50% 50%;
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>
