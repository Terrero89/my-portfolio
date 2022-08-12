<template>


    <section id="contact-section">
        <div class="contact-wrapper">


            <section-titles data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="80"
                data-aos-offset="0" :style="{ margin: '7rem 0 1.5rem 0' }" title="Get in touch" />
            <div class="section-wrapper">


                <ContactText>
                    <SocialIcons />

                </ContactText>



                <ContactForm />






            </div>


        </div>


    </section>
</template>

<script>
import ContactForm from '../layout/contact/ContactForm.vue'
import SocialIcons from '../ui/SocialIcons.vue'
import ContactText from '../layout/contact/ContactText'
export default {
    components: {
        ContactForm,
        SocialIcons,
        ContactText
    },
    data() {
        return {

        }
    },

}
</script>

<style scoped>
#contact-section {
    min-height: 70vh;


}

.section-wrapper {
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    margin: 5rem auto;
    flex-wrap: wrap;

}


.form-control {
    margin: 3rem 0;
}

label {
    display: block;
    margin: 2rem 0;
    font-size: 1.5rem;

}

input {
    display: block;
    margin: 1rem 0;

    width: 100%;
    height: 4rem;
    border-radius: 10px;

    background-color: rgba(255, 255, 255, 0.9);
    border: solid rgba(236, 236, 240, 0.5) 1px;

    color: rgb(0, 0, 0);

    padding: 10px;

}

textarea {

    border: solid rgb(211, 211, 231, 0.1) 0.5px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    color: rgb(0, 0, 0);

    padding: 10px;
}

.contact-form {
    width: 40rem;
    /* position: relative; */
    /* border: solid rgba(177, 177, 255, 0.5) 1px; */
    border-radius: 10px;

    /* box-shadow: 5px 5px 15px 5px rgba(73, 73, 73, 0.19); */
    margin: 0 auto;
}

.contact-form i {
    position: absolute;
    left: 1rem;

}





button {
    align-items: center;
    text-align: center;
}

@media only screen and (max-width: 425px) {
    .contact-form {
        width: 100%;
    }
}

@media only screen and (max-width: 768px) {
    .contact-text {
        text-align: center;
        flex: none;
        margin-top: 0;
    }



}

@media only screen and (max-width: 425px) {
    .contact-form {
        width: 100%;
    }
}

@media only screen and (max-width: 768px) {

    .contact-form {

        max-width: 90%;
    }


}

@media only screen and (min-width: 500px) {

    .contact-form {

        max-width: 70%;
    }


}
</style>

