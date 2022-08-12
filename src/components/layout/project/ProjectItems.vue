<template>
    <div>
        <div 
        
        class="project-container" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="200"
            data-aos-offset="0"     >

            <div class="image-container" 
               uk-parallax="target: #hero-img; start: 100%; end: -10%; y: -280; easing: 3; opacity: 1,0,0,0;"
                >
                <img :src="link"
                    class="project-image" alt="project-img"   >

            </div>

            <div class="project-text" uk-parallax="target: #hero-img; start: 100%; end: 10%; y: -250; easing: 3; opacity: 1,0,0,0;">
                <h3> {{ name }}</h3>
                <p> {{ description }}</p>

                <div class="tech-section">
                    <ul class="techs" v-for="stack in stacks" :key="stack.name">
                        <li>{{ stack }}</li>
                            

                    </ul>

                </div>

                <div class="buttons">
                    <button class="btn-regular"> <a :href="web"> Website</a></button>
                    <button class="btn-fill"> <a :href="github"> Github</a> </button>
                </div>
            </div>

        </div>




    </div>

</template>


<script>

export default {
    props: ["projects",'name', 'description', 'link', 'stacks', 'web', 'github'],

    data() {
        return {



        }
    },

 
}
</script>

<style scoped>
.techs {
    margin: 0rem 2.5rem 0 0;
    font-size: 1.3rem;
    color: rgb(255, 255, 255, 0.8);
    /* border: green solid 1px; */
    text-decoration: none;
    list-style: none;
    letter-spacing: 0.15rem
}

.techs li{
    margin: 1rem 0;
}


.tech-section {

    display: flex;
    flex-wrap: wrap;

}

.buttons {
    display: inline-block;
    margin: 3.5rem 0;
}

.project-text .techs span {
    margin: 0 2rem 0 0;
    font-size: 1.3rem;

}

/* both buttons default styles */



.btn-regular{
   padding: 11px 30px;
    background: none;

    border: solid 1px #2e4c6d;

    margin: 1rem 1.5rem 0 0;
    font-size: 1.5rem;
    border-radius: 5px;
}

.btn-regular:hover {
   
      background:#00657e;
    transition: .5s ease-in;

}
.btn-fill {
   padding: 11px 30px;
    background:#00657e;

    border: solid 1px #2e4c6d;

    margin: 1rem 0;
    font-size: 1.5rem;
    border-radius: 5px;
}
.btn-fill:hover {
    background: #46a0b6;;
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



/* .btn-fill:hover {
    color: rgb(255, 255, 255, 0.8)
} */



.buttons button :hover {
    color: rgb(255, 255, 255);
    transition: 600ms ease-in-out;

}



.project-container {
    /* border-bottom: 0.5px solid rgb(163, 255, 220, 0.5); */
    overflow: hidden;
      background-color: #01152e;
 
   opacity: 0.5;
    /* box-shadow: 5px 5px 32px 5px rgb(1, 24, 39); */
    padding: 2rem 0;
    width: 75%;
    margin:8rem auto;
    border-radius: 20px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

}

.project {

    margin: 1rem;

}

.project-text {

    width: 35%;
    padding: 0 2rem;
    align-self: center;
    /*background-color: rgb(9, 211, 194, 0.8);*/
    /*background-color: rgb(255, 255, 255, 0.9);*/
    border-radius: 5px;
}

.project-text h3 {

    font-size: 3rem;
   /* color: #5EE3F2; */
   color: rgb(255, 244, 255);
  
    margin: 2rem 0;
   
    /* letter-spacing: 0.1rem; */

    /* font-family: "Roboto Slab", serif; */
}

.project-text p {
    font-size: 1.4rem;
    margin: 2rem 0 2.5rem 0;
    line-height: 2.3rem;
    margin: 2rem 0;
     color: rgb(255, 244, 255, 0.8);
    
}


.image-container {

    width: 40rem;
    height: auto;
}

.project-image {
      
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: contain
}


@media only screen and (max-width: 768px) {
 
.image-container {
    margin-top: 4rem;
    width: 40rem;
    height: auto;
}
}

@media only screen and (max-width: 390px) and (min-width: 449) {
    .project-container {
        width: 95%;
    }

    .project-text {
        /* background-color: red; */
        width: 100%;

    }
}

@media only screen and (max-width: 450px) {
    .project-container {
        width: 95%;
    }

    .project-text {
        /* background-color: red; */
        width: 40rem;

    }
}

@media only screen and (max-width: 580px) and (min-width: 390px) {
    .project-container {
        width: 95%;
    }

    .project-text {
        /* background-color: rgb(74, 233, 0); */
        width: 45rem;

    }
}

@media only screen and (max-width: 580px) {
    .project-container {
        width: 95%;
    }

    .project-text {
        /* background-color: rgb(25, 0, 255); */
        width: 40rem;

    }
}

@media only screen and (max-width: 821px) and (min-width: 581px) {
    .project-container {
        width: 80%;
    }

    .project-text {
        /* background-color: rgb(255, 0, 106); */
        width: 40rem;

    }

}

@media only screen and (max-width: 821px) {
    .project-container {
        width: 90%;
    }

    .project-text {
        /* background-color: rgb(255, 0, 106); */
        width: 40rem;
        margin-top: 2.5rem;

    }

 
}
</style>