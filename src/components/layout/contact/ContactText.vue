<template>
    <div>
        <div class="contact-text" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="80"
            data-aos-offset="0">
            <h3>Have an idea in mind?</h3>
            <p>
                My inbox is always open for questions, inquiries or to talk about a project or technology
                in general. I will get back to you as soon as I can. also, follow me on social media.
            </p>

            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.contact-text {
    flex: 1 1 35.4rem;
    /* border: 1px solid red; */
    margin: 5rem 0;
}

.contact-form {
    flex: 1 1 38.5rem;
    /* border: solid red; */
    padding: 0 2rem;
}

.contact-text h3 {
    margin: auto 0;
    color: rgba(205, 229, 243, 0.8);
    font-size: 2.5rem;
    margin: 0 0 2rem 0;
}

.contact-text p {
    margin: auto 0;
    color: rgba(205, 229, 243, 0.8);
    font-size: 1.55rem;
    line-height: 2.3rem;
    width: 35rem;
}

@media only screen and (max-width: 768px) {
    .contact-text {
        text-align: center;
    }
}
</style>
