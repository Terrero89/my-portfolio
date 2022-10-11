<template>
    <SuccessMessage v-if="isSent && !isError" :class="{ success: isSent }" message="Message successfully sent!" />
    <SuccessMessage v-if="isError" :class="{ error: isError }"
        message="Something went wrong... please, try again in a moment" />
    <div data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="180">
        <div class="contact-form">
            <form @submit.prevent="sendData">
                <div class="form-control">
                    <label for="fullName"> Full Name</label>

                    <input type="text" name="fullName" id="fullName" v-model.trim="name" placeholder="Name" required />

                </div>

                <div class="form-control">
                    <label for="email">Email Address</label>

                    <input type="email" name="email" id="email" v-model.trim="email" placeholder="Hello@gmail.com..."
                        required />

                </div>

                <div class="form-controls">
                    <label for="message"> Message</label>

                    <textarea name="message" id="" cols="40" rows="10" v-model.trim="message" placeholder="Message..."
                        required></textarea>
                    <h3 class="message" v-if="!formIsValid">Please enter a valid email and non-empty message.
                    </h3>
                </div>

                <button @click="sendData" class="btn-fill">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
// import axios from "axios"

import SuccessMessage from "../../ui/SuccessMessage.vue";

export default {
    components: { SuccessMessage },

    emits: ["message"],
    data() {
        return {

            formIsValid: true,
            isSent: false,
            isError: false,
            name: "",
            email: "",
            message: "",
        };
    },

    methods: {
        emptyForm() {
            this.name = "";
            this.email = "";
            this.message = "";
        },

        async sendData() {


            this.formIsValid = true
            if (
                this.name === '' ||
                this.email === '' ||
                !this.email.includes('@') ||
                this.message === ''
            ) {
                this.formIsValid = false;
                return;
            }


            const formData = {
                name: this.name,
                email: this.email,
                message: this.message,
            };

            const response = await fetch(
                "https://contact-section-portfolio-default-rtdb.firebaseio.com/messages" +
                ".json",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                });

            if (!response.ok) {
                this.isError = true

                setTimeout(() => {
                    this.isError = false
                }, 3000);

                this.emptyForm();

            } else {
                this.isSent = true;
                setTimeout(() => {
                    this.isSent = false;
                }, 3000);

                this.emptyForm();




            }



        },
    },
};

</script>

<style scoped>
@media only screen and (max-width: 425px) {
    .contact-form {
        padding: 0 2rem;
    }
}

.message {
    color: red;
    font-size: 1.5rem;
    margin: 1rem 0;
}

.error {
    background-color: rgb(163, 0, 0);
}

.success {
    background-color: rgb(3, 122, 116);
}

.btn-fill {
    padding: 11px 30px;
    background: #00657e;
    color: rgb(255, 255, 255);
    border: solid 1px #2e4c6d;
    margin: 2rem 0;
    font-size: 1.5rem;
    border-radius: 5px;
}

.btn-fill:hover {
    background: #46a0b6;
    transition: 0.6s ease-in-out;
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
    border-radius: 3px;

    background-color: rgba(255, 255, 255, 0.9);
    border: solid rgba(236, 236, 240, 0.5) 1px;

    color: rgb(0, 0, 0);

    padding: 10px;
}

textarea {
    border: solid rgb(211, 211, 231, 0.1) 0.5px;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.9);
    width: 100%;
    color: rgb(0, 0, 0);

    padding: 10px;
}

.contact-form {
    width: 41.62rem;
    padding: 0 2rem;
    border-radius: 10px;
/* border: solid blue 1px; */
    /* box-shadow: 5px 5px 15px 5px rgba(73, 73, 73, 0.19); */
    margin: 0 auto;
}

.contact-form i {
    position: absolute;
    left: 1rem;
}
</style>
