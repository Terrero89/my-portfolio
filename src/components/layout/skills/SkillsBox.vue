<template>
  <section class="skills-wrapper">
    <div
      class="icons-wrapper"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="80"
      data-aos-offset="0"
    >
      <SkillIcons></SkillIcons>
    </div>

    <div
      class="skill-box"
      uk-parallax="target: #hero-img; start: 100%; end: 10%; y: -200; easing: 3; opacity: 1,0,0,0;"
    >
      <div
        class="expertise-box"
        v-for="skills in skillsInfo"
        :key="skills.title"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
      >
        <div class="expertise-text">
          <div class="expertise-title">
            <h3 v-if="skills.title === 'Front-end'">Front-end Tools</h3>

            <h3 v-else>Backend-end Tools</h3>
          </div>
          <p>
            {{ skills.text }}
          </p>
        </div>
        <div class="expertise-tech">
          <div class="technologies" v-if="skills.title === 'Front-end'">
            <ul v-for="tech in frontend" :key="tech.name">
              <li>
                {{ tech }}
              </li>
            </ul>
          </div>

          <div class="technologies" v-if="skills.title === 'Backend'">
            <ul v-for="tech in backend" :key="tech.name">
              <li>
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillIcons from "./SkillIcons.vue";

export default {
  components: {
    SkillIcons,
  },
  data() {
    return {
      skillsInfo: [
        {
          title: "Front-end",
          text: "I have solid experience using HMTL, CSS, And Javascript as well as UI Frameworks. I'm currently working with Vue Js ecosystem as my main stack, and progresively transitioning to React Js. ",
        },
        {
          title: "Backend",
          text: "Although not a Backend Developer, I have gained some familiarity with these tool. I have worked on small projects where I have applied the fundamentals of each one of them. ",
        },
      ],

      frontend: [
        "Html",
        "Css",
        "Javascript",
        "React JS",
        "Next Js",
        "Vue Js",
        "Nuxt Js",
        "Sass",
        "Bootstrap",
        "Tailwind",
      ],
      backend: [
        "Python",
        "Node Js",
        "Express Js",
        "EJS",
        "Firebase",
        "Mongoose",
        "MongoDB",
        "Rest Api",
        "C",
      ],

      fontSize: "2rem",
    };
  },
};
</script>

<style scoped>
.skill-box {
  flex: 1 1 25.9rem;

  /* border: solid red 1px; */
  margin: auto 0;
}

.icons-wrapper {
  /* border: solid rgb(30, 255, 0) 1px; */
  display: flex;
  justify-content: center;
  position: relative;
  flex: 1 1 30rem;
}

.skills-wrapper {
  /* border: solid 1px red; */
  max-width: 1300px;
  padding: 1rem 3rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.skills-container {
  overflow: hidden;
  margin: 10rem 0;
}

.expertise-section .expertise-header {
  font-size: 2.5rem;
}

.expertise-box {
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem 2rem;
  max-width: 55rem;

  background-color: #01152e;
}

.expertise-box h3 {
  color: rgb(255, 255, 255, 0.8);
  font-weight: 700;
  text-decoration: none;
  list-style: none;

  font-size: 2.5rem;
}

.expertise-box ul li {
  text-decoration: none;
  list-style: none;
  margin: 0rem 2.5rem 0 0;
  font-size: 1.3rem;
  letter-spacing: 0.15rem;

  text-decoration: none;
  list-style: none;
  letter-spacing: 0.15rem;
}

.expertise-tech {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin: 1rem 0;
}

.expertise-tech .technologies ul li {
  font-family: "Inconsolata", monospace;
  color: #61dbfb;
  font-size: 1.4rem;
  margin-right: 1.3rem;
  margin-top: 1rem;
}

.expertise-text p {
  color: rgba(225, 244, 255, 0.7);
  margin: 1rem 0;
  font-size: 1.5rem;
  line-height: 2.4rem;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  margin-right: 3rem;
}

/* @media only screen and (min-width: 425px) and (max-width: 500px) {
} */
@media only screen and (max-width: 500px) {
  .expertise-tech ul li {
    margin-top: 1rem;
  }

  .skill-box {
    max-width: 95%;
  }

  .skills-wrapper {
    padding: 0 0.5rem;
  }
}

@media only screen and (min-width: 501px) and (max-width: 580px) {
  .skill-box {
    max-width: 90%;
  }

  .icons-wrapper {
    margin: 0 0 10rem 0;
  }

  .skill-box {
    max-width: 100%;
  }

  .expertise-box {
    margin: 5rem 0 0 0;
  }
}

@media only screen and (min-width: 581px) and (max-width: 768px) {
  .icons-wrapper {
    margin: 0 0 10rem 0;
  }

  .skill-box {
    max-width: 85%;
  }

  .expertise-box {
    margin: 5rem 0 0 0;
  }

  .expertise-box:hover {
    transform: scale(0);
  }

  @media only screen and (min-width: 768px) {
    /* .expertise-box:nth-child(1):hover {
      transform: scale(1.05);
      transition: 0.4s;
      box-shadow: 2px 0px 15px 8px rgb(77, 84, 128, 0.5);
    }

    .expertise-box:nth-child(2):hover {
      overflow: hidden;
      transform: scale(1.05);
      transition: 0.4s;
      box-shadow: 2px 0px 15px 8px rgb(146, 168, 22, 0.5);
    } */
  }
}
</style>
