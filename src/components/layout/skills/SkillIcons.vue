<template>

    <div class="skills-icons"
        uk-parallax="target: #hero-img; opacity: 1,0, 0; start: 120%; end: 10%; y: 200; easing: 1;"
        >

        <div class="main-icons">
            <i alt="HTML Image" 
                class="main-icon devicon-html5-plain colored"></i>

            <i alt="Javascript Image"
                class=" main-icon devicon-javascript-plain colored"></i>
            <i alt="CSS Image" 
                class=" main-icon devicon-css3-plain colored"></i>

        </div>

        <!-- git -->
        <img alt=" git Image" class="icon git"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" />

        <!-- tailwind -->
        <img alt="Tailwind Image" class="icon tailwind"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg" />


        <!-- REACT -->
        <img alt="React Image" class="icon react" data-aos-duration="800"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        <!-- vue -->
        <img alt="image" class="icon vue " data-aos-duration="800"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />


        <!-- nuxt -->
        <img alt="image" class="icon nuxt"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" />


        <!-- LINUX -->
        <img alt="Linux Image" class="icon linux" data-aos-duration="800"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
        <!-- GITHUB -->
        <img alt="Github image" class="icon github"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />

        <!-- c language -->

        <img alt="C language Image" class="icon c" data-aos-duration="800"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />

        <!-- express -->


        <img alt=" Express image" class="icon express"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" />

        <!-- mongo -->


        <img alt="MongoDb image" class="icon mongo"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />

        <!-- node -->

        <img alt=" Node Image" class="icon node"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />



        <img alt="Firebase Image" class="icon firebase"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />




        <img alt="Python Image" class="icon python"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />





        <img alt="image" class="icon bootstrap"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" />


    </div>

</template>

<style scoped>
.icon {
    height: 5rem;
    position: absolute;

}

@media only screen and (max-width: 450px) {
    .icon {
        height: 4.5rem;
    }

    .git {
        height: 3rem;
    }
    .skills-icons {

width: 45rem;
height: 45rem;
position: relative;
/* border:solid yellow 1px; */


}


}



.c {

    left: 45%;
    bottom: 0%
}


.node {
    height: 9rem;
    left: 43%;
    top: 65%;

}

.tailwind {
    height: 12rem;
    left: 14%;
    top: 23%;

}

.react {
    left: 30%;
    bottom: 75%;
}

.firebase {
    height: 6rem;
    left: 60%;
    bottom: 5%;
}

.vue {

    left: 45%;
    bottom: 80%;
}

.nuxt {

    left: 60%;
    bottom: 75%;
}

.linux {

    left: 73%;
    top: 25%
}

.git {
    height: 8rem;
    left: 10%;
    bottom: 35%;
}


.vscode {

    left: 45%;
    top: 70%;
}

.mongo {
    height: 7rem;
    left: 30%;
    bottom: 5%;
}

.github {
    background-color: rgb(255, 255, 255, 0.9);
    border-radius: 5px;
    left: 79%;
    bottom: 40%;
}

.bootstrap {
    height: 6rem;
    left: 80%;
    bottom: 20%;
    left: 45%;
    top: 30%
}





.python {
    height: 6rem;
    left: 72%;
    bottom: 15%;
}

.express {
    background-color: rgb(255, 255, 255, 0.8);
    border-radius: 5px;
    left: 17%;
    bottom: 15%;
}

.main-icons {
    /* border: solid white 1px; */
    width: 25rem;

    margin: 0 auto;
    border-radius: 10px;
    top: 50%;
    left: 0;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: space-evenly;

}



.main-icon {
    font-size: 5rem;
    height: 5rem;
    margin: 0 1rem;
}

.skills-icons {

    width: 45rem;
    height: 45rem;
    position: relative;
    /* border:solid yellow 1px; */


}

.icons-wrapper {

    display: flex;
    justify-content: center;
    position: relative;
    

}

.skills-wrapper {
    margin: 0 auto;
    max-width: 1300px;
    /* border: solid red 1px; */
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

}
</style>