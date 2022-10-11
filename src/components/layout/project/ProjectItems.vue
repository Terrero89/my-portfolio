<template>
  <div>
    <div class="project-container" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200"
      data-aos-offset="0" 
      >
      <div v-if="this.length % 2 === 0" class="image-container"
        uk-parallax="target: #hero-img; start: 100%; end: 0%; y: -280; easing: 3; opacity: 1,0,0,0;">
        <div class="gradient">
          <img :src="link" class="project-image" alt="project-img" />
        </div>
      </div>

      <div v-if="this.length % 2 === 0" class="project-text"
        uk-parallax="target: #hero-img; start: 130%; end: 0%; y: -250; easing: 3; opacity: 1,0,0,0;">
        <span>{{ type }}</span>
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>

        <div class="tech-section">
          <ul class="techs" v-for="stack in stacks" :key="stack.name">
            <li>{{ stack }}</li>
          </ul>
        </div>

        <div class="buttons">
          <TheOutlinedButton style="margin-right: 1rem" :link="this.web" button-title="Website" />
          <TheFilledButton :link="this.github" button-title="Github" />
        </div>
      </div>
      <!-- if is not even then render this one -->
      <div v-if="this.length % 2 !== 0" class="image-container"
        uk-parallax="target: #hero-img; start: 100%; end: 0%; y: -280; easing: 3; opacity: 1,0,0,0;">
        <div class="gradient">
          <img :src="link" class="project-image" alt="project-img" />
        </div>
      </div>

      <div v-if="this.length % 2 !== 0" class="project-text"
        uk-parallax="target: #hero-img; start: 130%; end: 0%; y: -250; easing: 3; opacity: 1,0,0,0;">
        <span>{{ type }}</span>
        <h3>{{ name }}</h3>
        <p>{{ description }}</p>

        <div class="tech-section">
          <ul class="techs" v-for="stack in stacks" :key="stack.name">
            <li>{{ stack }}</li>
          </ul>
        </div>

        <div class="buttons">
          <TheOutlinedButton style="margin-right: 1rem" :link="this.web" button-title="Website" />
          <TheFilledButton :link="this.github" button-title="Github" />
        </div>
      </div>

      <!-- <div
        v-if="this.length % 2 !== 0"
        class="image-container"
        uk-parallax="target: #hero-img; start: 100%; end: 0%; y: -280; easing: 3; opacity: 1,0,0,0;"
      >
        <img :src="link" class="project-image" alt="project-img" />
      </div> -->
    </div>
  </div>
</template>

<script>
import TheOutlinedButton from "../../ui/TheOutlinedButton.vue";
import TheFilledButton from "../../ui/TheFilledButton.vue";
export default {
  components: { TheOutlinedButton, TheFilledButton },
  props: [
    "projects",
    "name",
    "description",
    "link",
    "stacks",
    "web",
    "github",
    "type",
    "length",
  ],

  data() {
    return {};
  },
};
</script>

<style scoped>
.gradient {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
}

.techs {
  margin: 0rem 2.5rem 0 0;
  font-size: 1.3rem;
  color: rgb(255, 255, 255, 0.8);

  text-decoration: none;
  list-style: none;
  letter-spacing: 0.15rem;
}

.buttons {
  display: flex;
  /* display: inline-block; */
  /* margin: 3.5rem 0 0 0; */
}

.project-text .techs span {
  margin: 0 2rem 0 0;
  font-size: 1.3rem;
}

.btn-regular {
  padding: 11px 30px;
  background: none;

  border: solid 1px #2e4c6d;

  margin: 1rem 1.5rem 0 0;
  font-size: 1.5rem;
  border-radius: 5px;
}

.btn-regular:hover {
  background: #00657e;
  transition: 0.5s ease-in;
}

.btn-fill {
  padding: 11px 30px;
  background: #00657e;

  border: solid 1px #2e4c6d;

  margin: 1rem 0;
  font-size: 1.5rem;
  /* border-radius: 5px; */
}

.btn-fill:hover {
  background: #46a0b6;

  color: rgb(80, 78, 78);
  transition: 0.6s ease-in-out;
}

/* button hover */

.btn-fill:hover {
  color: #01161b;
  transition: 600ms ease-in-out;
}

/* btn anchor tag styles */
button a:hover {
  color: rgba(3, 19, 73, 0.8);
  text-decoration: none;
}

button a {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.buttons button :hover {
  color: rgb(255, 255, 255);
  transition: 600ms ease-in-out;
}

.project-container {
  max-width: 1700px;

  overflow: hidden;
  /* background-color: #01152e; */
  opacity: 0.5;
  padding: 2rem 0;

  margin: 8rem auto;
  /* border-radius: 20px; */
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.project {
  margin: 1rem;
}

.project-text {
  flex: 1 1 28rem;
  width: 50rem;
  padding: 0 1rem;
  margin: 2rem 5rem;
  padding: 2rem;
}

.project-text h3 {
  font-size: 2.5rem;

  color: rgba(205, 229, 243);

  margin: 1rem 0;
}

.project-text span {
  font-size: 1.4rem;
  font-weight: 600;
  color: #61dbfb;

  margin: 4rem 0 0 0;
  /* border: solid red 1px; */
}

.project-text p {
  max-width: 100%;
  font-size: 1.55rem;
  margin: 2rem 0 2.5rem 0;
  line-height: 2.4rem;

  color: rgba(205, 229, 243, 0.8);
}

.techs li {
  font-family: 'Inconsolata', monospace;
  margin: 1rem 0;
  color: #61dbfb;
  font-size: 1.4rem;
}

.tech-section {
  /* border: solid 1px rgb(42, 151, 15); */
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
}

.image-container {
  filter: contrast(100%);
  filter: brightness(79%);

  width: 100;
  height: 100%;
  flex: 1 1 28rem;
  max-width: 40rem;
  height: 30rem;
  margin: 0 5rem;

  align-self: center;
}

.project-image {
  border-radius: 5px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(black);
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .project-text {
    max-width: 90%;
  }

  .project-container {
    padding: 0rem 2rem;
    background-color: none;
  }
}

@media only screen and (max-width: 768px) {
  .image-container {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: none;
  }

  .project-text {
    min-width: 100%;
    margin: 1rem;
    padding: 2rem;
  }

  .project-container {
    padding: 0rem 2rem;
    background-color: none;
  }

  .project-image {
    opacity: 0.1;
    object-fit: cover;
  }

  .image-container {
    max-width: 100%;
    padding: 0;
  }
}

@media only screen and (min-width: 769px) {
  .project-container {
    margin: 5rem 2rem;
    background-color: #01152e;
  }
}

@media only screen and (min-width: 1300px) {
  .project-text {
    margin: 2rem 0 0 0;
    max-width: 60rem;
    /* border: solid red 1px; */
  }
}

.project-container {
  margin: 5rem 2rem;
  background-color: none;
}

.project-text p {
  width: 100%;
  /* border: solid red 1px; */
}
</style>
