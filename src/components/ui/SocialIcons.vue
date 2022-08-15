<template>
    <div class="social-icons">
        <a class="soc-icon" href="https://github.com/" alt="github-images"><i class="fa fa-github"
                aria-hidden="true"></i> </a>
        <a class="soc-icon" href="https://www.linkedin.com/feed/" alt="social-images"><i class="fa fa-linkedin-square"
                aria-hidden="true"></i> </a>
        <a class="soc-icon" href="https://twitter.com/home" alt="linkedin-image"><i class="fa fa-twitter"
                aria-hidden="true"></i></a>
        <a class="soc-icon" href="https://www.instagram.com/" alt="facebook-image"> <i class="fa fa-facebook-official"
                aria-hidden="true"></i> </a>
        <a class="soc-icon" href="https://www.instagram.com/" alt="instagram-image"> <i class="fa fa-instagram"
                aria-hidden="true"></i></a>

    </div>
</template>

<style scoped>

.soc-icon {
    font-size: 2.6rem;
    margin: 1rem 1rem;
    list-style: none;
    text-decoration: none;
    color: white;
}

.soc-icon:hover{
    color: rgb(68, 110, 146);
    transition:0.5s ease-out;
}

.social-icons {

    margin: 2rem 0 0 0rem;
    list-style: none;
    text-decoration: none;
    color: white;
}

.social-icon {
    font-size: 1.8rem;
    margin: 1rem 1rem;
    list-style: none;
    text-decoration: none;
    color: white;
}

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
