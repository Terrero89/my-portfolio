
<template>



    <div class="about-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="100"
        data-aos-offset="200">



        <div class="about-header">
            <h3>Who am I?</h3>
        </div>
        <p>
            Hello again! My name is Sergio Terrero, Im a <span>Front-end developer </span>
            located in Massachusetts. My passion for programming started when I took a C class in
            college back in 2019. Started to build basic Websites
            with HTML, and CSS, and Javascript as well as some small C projects for the school.
        </p>

        <p>
            I have background in Industrial Enginnering from
            <span><a href="https://www.utesa.edu/home/">Santiago University of Technology</a> </span>
            I am currently in my senior year in <span>Information Technology</span> at <span><a
                    href="https://uml.umassonline.net/">University Of Massachusetts Lowell.</a> </span>
            I Like to create accessible, performant websites and web applications with the main focus on UI and SEO
            optimization.

        </p>

    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
span a {
    color: #61DBFB;
    text-decoration: none;
}

span a:hover {
    color: #3aafcc;
    transition: 0.3s;
    text-decoration: underline;

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




.about-text p {
    color: rgb(255, 244, 255, 0.8);
    font-size: 1.6rem;
    line-height: 2.7rem;
    padding: 0 2rem 0 2rem;
    margin: 2rem 0 2rem 0;
    text-align: justify;
    text-justify: inter-word;

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



    #about .about-text p {
        padding: 0;
    }
}

@media only screen and (max-width: 610px) {
    #about .about-text {

        margin: 3rem 0;
    }

    #about .about-text p {
        font-size: 1.6rem;
        padding: 0;
    }

}

@media only screen and (max-width: 536px) {
    #about .about-text {
        width: 90%;

    }

    #about .about-text p {
        font-size: 1.6rem;
        padding: 0;
    }

}

@media only screen and (max-width: 490px) {



    #about .about-text {

        width: 100%;
    }

    #about .about-text p {
        margin: 2rem 2.5rem 0 2.5rem;
        font-size: 1.6rem;
        padding: 0;
        order: 1;
        color: rgba(225, 244, 255, 0.8);
    }

    #about .about-header h3 {
        margin: 0 2.5rem;
        font-size: 2.7rem;
        font-weight: 600;
        letter-spacing: 0.1rem;
        color: rgba(225, 244, 255, 0.8);

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

