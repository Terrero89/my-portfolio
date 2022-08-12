<template>
    <div class="about-img" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" 
            data-aos-offset="250"
            uk-parallax=" blur: 1.8; blue: 5; ">

        <div class="square" >

            <img src="../../../assets/images/newAr.png"
                data-aos="fade-up"  data-aos-delay="350"
            data-aos-offset="250"
                alt="my-avatar" />


        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.about-container .square {
    position:relative;
    /* border: solid red 1px; */
    width: 32rem;
    height: 32rem;
    border-radius: 5px;

    margin: 5rem 0 0 0;


}

/* data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="150"
            data-aos-offset="150" */
.about-container .square2 {
    overflow: hidden;
    z-index: 0;

    z-index: 100;
    width: 32rem;
    height: 32rem;
    border-radius: 5px;

}



#about {

    padding: 0 auto;
    min-height: 80vh;
    align-items: center;
    overflow: hidden;
    display: flex;
    justify-content: center;


}

#about .about-intro span {
    font-weight: 300;
    font-size: 1.4rem;
    /* color: #71dfe7; */
    padding: 0 0 0 2rem;
    color: #aaacc9;
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

#about .about-container {
  

    position: relative;
    max-width: 1400px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;


}

.about-text h4 {
    font-size: 4.5rem;
    font-weight: 800;
    letter-spacing: 0.5rem;
    color: #303336;
    margin: 2rem 0;
}

.about-text p {
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    line-height: 2.7rem;
    padding: 0 0 0 2rem;
    margin: 2rem 0 2rem 0;


}

#about .about-text {
    width: 45%;

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

    #about .about-container .about-img img {
        object-fit: contain;


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
        font-size: 1.5rem;
        padding: 0;
    }

}

@media only screen and (max-width: 536px) {
    #about .about-text {
        width: 90%;
    }

    #about .about-text p {
        font-size: 1.5rem;
        padding: 0;
    }

}

@media only screen and (max-width: 490px) {



    #about .about-text {

        width: 100%;
    }

    #about .about-text p {
        margin: 2rem 2.5rem 0 2.5rem;
        font-size: 1.5rem;
        padding: 0;
        order: 1;
    }

    #about .about-header h3 {
        margin: 0 2.5rem;
        font-size: 2.5rem;
        font-weight: 600;
        letter-spacing: 0.2rem;

    }

    #about .about-intro h3 {
        margin: 2.5rem;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 0.2rem;
        color: rgb(28, 26, 51);
    }

    #about .about-container .about-img {
        margin-top: 10rem;
        object-fit: contain;

    }

}
</style>

