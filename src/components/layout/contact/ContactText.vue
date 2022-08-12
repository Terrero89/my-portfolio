<template>
<div>
    <div class="contact-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="80" data-aos-offset="0">
        <h3>
          Have an idea in mind?</h3>
        <p>Please reach out for questions, curiosity or to talk about a project or technology in general, 
          Just send a message from the form And I will get back to you as soon as I can. also, follow me on social media. 
        </p>

        <slot></slot>

    </div>

</div>
</template>

<style scoped>
.contact-text {
    flex: 1 1 38.4rem
}

.contact-form {
    flex: 1 1 38.5rem;
    /* border: solid red; */
    padding: 0 2rem
}

.contact-text {
    margin: 5rem 0;
    padding: 0 2rem
}

.contact-text h3 {
    margin: auto 0;
    color: rgb(255, 244, 255, 0.8);
    font-size: 3rem;
    margin: 0 0 2rem 0;

}

.contact-text p {
    margin: auto 0;
    color: rgb(255, 244, 255, 0.8);
    font-size: 1.4rem;
    line-height: 2rem;
    width: 35rem;

}

@media only screen and (max-width: 768px) {

    .contact-text {
   text-align: center;
    }


}
</style>
