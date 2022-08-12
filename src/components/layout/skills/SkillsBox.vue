

<template>

    <section class="skills-wrapper">

        <div class="icons-wrapper" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="80"
            data-aos-offset="0">


            <SkillIcons></SkillIcons>

        </div>


        <div class="skill-box"
            uk-parallax="target: #hero-img; start: 100%; end: 10%; y: -200; easing: 3; opacity: 1,0,0,0;">

            <div class="expertise-box" v-for="skills in skillsInfo" :key="skills.title" data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back" data-aos-delay="200" data-aos-offset="0">
                <div class="expertise-text">
                    <div class="expertise-title">
                        <h3 v-if="skills.title === 'Front-end'">Front End Tools</h3>

                        <h3 v-else>Backend End Tools</h3>


                        <div>

                        </div>
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

import SkillIcons from "./SkillIcons.vue"


export default {
    components: {

        SkillIcons,

    },
    data() {
        return {

            skillsInfo: [
                { title: "Front-end", text: "I have plenty of experience using HMTL, CSS, And Javascript as well as UI Frameworks. I'm currently working with Vue Js ecosystem as my main stack, and progresively transitioning to React Js.   " },
                { title: "Backend", text: "Although not a Backend Developer, I have gain some familiarity with these tool. I have worked on small projects where I have applied the fundamentals of each one of them. " },

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
                "Boostrap",
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
                "C"
            ],

            fontSize: '2rem',


        };
    },


};
</script>

<style scoped>

.skill-box{
    /* border: solid blue 1px;; */
    flex:1 1 26.9rem
}
.icons-wrapper {

    display: flex;
    justify-content: center;
    position: relative;
      flex:1 1 50rem

}

.skills-wrapper {
   
    margin: 0 auto;
    max-width: 1300px;
    /* border: solid red 1px; */
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

}


.skills-container {
    overflow: hidden;
    margin: 10rem 0;

}



.expertise-section .expertise-header {
    font-size: 2.5rem;
}
/* needs background gradiant on hover */
.expertise-box {
    /* border: solid rgb(99, 225, 241) 1px; */

    margin: 3.5rem 0rem;
    border-radius: 10px;
    padding: 1rem 2rem;
    /* width: 45rem; */
    /* background-color: rgb(17, 24, 63, 0.5) */
    background-color: #041731;
    background-color: #01152e;
}




.expertise-text p {
 
    color: rgb(255, 255, 255, 0.8);
    margin: 1rem 0;
    font-size: 1.4rem;
    line-height: 2rem;
}

.expertise-box h3 {
    /* color: rgb(0, 241, 201); */
    /* color: #5EE3F2; */
    color: #61DBFB;
    letter-spacing: 0.15rem;
    text-decoration: none;
    list-style: none;

    font-size: 1.8rem;
}

.expertise-box ul li {

    text-decoration: none;
    list-style: none;
    margin: 0rem 2.5rem 0 0;
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
    color: rgb(255, 244, 255, 0.8);

    text-decoration: none;
    list-style: none;
    letter-spacing: 0.15rem
}

.expertise-tech {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin: 1rem 0;
}

.expertise-tech .technologies ul li {
    color: rgb(255, 255, 255, 0.8);
    font-size: 1.35rem;

}

.expertise-text p {

    line-height: 2.5rem;

}

/* expertise individually */

#skills>h3 {
    font-size: 4rem;

    color: #2e4c6d;
    font-weight: 600;
    letter-spacing: 0.15rem;
    text-align: center;
    line-height: 4rem;
    margin: 5rem 0 15rem 0;
}

.technologies {


    display: flex;
    flex-wrap: wrap;
    margin-right: 3rem;

}

.technologies ul li {


    width: 100%;
    margin-right: 1.25rem;
    margin-top: 1rem;

}




@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}




/**table size */
@media only screen and (max-width: 500px) {
    .expertise-tech ul li {
        margin-top: 1rem;
    }



}

@media only screen and (max-width: 768px) {


    .icons-wrapper {
        margin: 0 0 10rem 0;


    }

    .skill-box{

    max-width: 90%;

}

.expertise-box {
    margin: 5rem 0 0 0 ;
}
}
</style>
