<template>
    <div class="social-icons">
        <a tabindex="0" class="social-icon" href="https://www.linkedin.com/feed/" aria-label="Linkedin" alt="linkedin social icon"><i
                alt="linkedin social icon" class="fa fa-linkedin-square" aria-hidden="true" aria-label="Linkedin"></i>
        </a>
        <a tabindex="0" class="social-icon" href="https://twitter.com/home" alt="twitter social icon" aria-label="Twitter"><i
                alt="linkedin social icon" class="fa fa-twitter" aria-hidden="true" ></i></a>
        <a tabindex="0" class="social-icon" href="https://www.facebook.com/sergio.terrero/" alt="facebook social icon" aria-label="Facebook">
            <i alt="linkedin social icon" class="fa fa-facebook-official" aria-hidden="true" ></i>
        </a>
        <a tabindex="0" class="social-icon" href="https://www.instagram.com/" alt="instagram social icon" aria-label="Instagram">
            <i alt="linkedin social icon" class="fa fa-instagram" aria-hidden="true" ></i></a>
    </div>
</template>

<style scoped>
.social-icon {
    font-size: 2.6rem;
    margin: 1rem 1.5rem;
    list-style: none;
    text-decoration: none;
    color: rgb(255, 255, 255, 0.7);
}

.social-icon:hover {
    color: rgb(0, 217, 255);
    transition: 0.5s ease-out;
}

.social-icons {
    margin: 2rem 0 0 0rem;
    list-style: none;
    text-decoration: none;
    color: white;
}

/* .social-icon {
    font-size: 1.8rem;
    margin: 1rem 1rem;
    list-style: none;
    text-decoration: none;
    color: white;
} */

.fixed-icons {
    position: fixed;
    right: auto;
    top: 85%;
    height: 4rem;
    width: 20rem;
}

@media only screen and (max-width: 400px) {
    .fixed-icons {
        top: 88%;
    }
}

@media only screen and (max-width: 768px) and (min-width: 400px) {
    .fixed-icons {
        position: fixed;
        right: auto;
        top: 90%;
        height: 4rem;
        width: 20rem;
    }
}
</style>
