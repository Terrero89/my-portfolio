<template>
    <header>
        <nav class="navbar" 
        :class="{ navbarOn: isScrolled, navbarOff: !isScrolled }">
            <a href="#" data-aos="zoom-out" data-aos-delay="200" class="nav-logo">ST.</a>
            <ul class="nav-menu" :class="[{ active: menuIsVisible }]">


                <li class="nav-item" data-aos-duration="200" data-aos="fade-down"  data-aos-delay="350"  data-aos-easing="ease-in-sine" @click="toggleOn">
                    <a href="#about" class="nav-link">About</a>
                </li>

                <li class="nav-item" 
                data-aos-duration="300" data-aos="fade-down"  ata-aos-easing="ease-in-sine" data-aos-delay="350" 
                @click="toggleOn">
                    <a href="#skills" class="nav-link">Skills</a>
                </li>

                <li class="nav-item"
                data-aos-duration="400" data-aos="fade-down"  ata-aos-easing="ease-in-sine" data-aos-delay="350" 
                 @click="toggleOn">
                    <a href="#project-section" class="nav-link">Projects</a>
                </li>

                <li class="nav-item" 
                data-aos-duration="500" data-aos="fade-down"  ata-aos-easing="ease-in-sine" data-aos-delay="350" 
                @click="toggleOn">
                    <a href="#contact-section" class="nav-link">Contact</a>
                </li>


            </ul>
            <div class="hamburger" @click="toggleOn" :class="[{ active: menuIsVisible }]">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            menuIsVisible: false,
            isScrolled: false,
        };
    },
    mounted() {

        window.addEventListener("scroll", this.updateScroll);
    },
    methods: {
        toggleOn() {
            this.menuIsVisible = !this.menuIsVisible;
        },

        // default = False -->

        updateScroll() {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {

                this.isScrolled = true;

            } else {

                this.isScrolled = false;

            }
        },





    },
};
</script>

<style scoped>
.navbar {
    height:8rem;
    position: fixed;
    width: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem 1.5rem;
    z-index: 2;

    /*background-color: rgb(28, 26, 51);*/
}

.navbarOn {


    background-color: #01152e;
    /* backdrop-filter: blur(10px); */
    transition: background 600ms ease-out;
    position: fixed;
    width: 100%;
    top: 0;
    box-shadow: 5px 5px 15px 1px rgba(0, 0, 0, 0.2);
    border-bottom: 1px rgb(44, 44, 44, 0.1) solid;
    padding: 1.5rem 1.5rem;
    z-index: 2;

}

.navbarOff {

    position: fixed;
    width: 100%;
    top: 0;
    background-color: none;
    transition: background 600ms ease-in;

}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}








/* hover effect starts */
nav .nav-logo,
nav .nav-link {
    position: relative;

    /* color: #71DFE7; */
    color: rgb(255, 244, 255, 0.8);

}

/*underline for links start*/
nav .nav-logo::before {
    content: "";
    display: block;
    height: 1px;
    background: rgb(111, 119, 113);
    position: absolute;
    top: 1.2em;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    transition: transform ease-in-out 250ms;
}

nav .nav-link::before {
    content: "";
    display: block;
    height: 1px;
    background: #807e8a;
    position: absolute;
    top: 1.5em;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    transition: transform ease-in-out 250ms;
}

nav .nav-logo:hover::before,
nav .nav-link:hover::before {
    transform: scale(1, 1);
}

/*underline for links end*/

nav .nav-logo {
    list-style: none;
    text-decoration: none;
    font-size: 2.5rem;
    font-weight: 500;
    color: none;
    z-index: 110;
    margin-right: 50%;
}

/*nav-links colors */
nav .nav-link {
    font-size: 1.4rem;
    font-weight: 400;
    color: none;
    letter-spacing: 0.15rem;
}

/* hover nav link */
nav .nav-logo:hover,
.nav-link:hover {
    transition: all 0.3s ease-in-out;
    color: #807e8a;
    animation: underline 1s ease-in-out;
}

/* hover effect ends */
.nav-item,
.nav-item a {
    list-style: none;
    text-decoration: none;
}

ul.nav-menu {
    margin-bottom: 0;
}

.nav-item {

    margin: 0 1.5rem;

}

.hamburger {

    display: none;
    z-index: 110;
    /* margin: 0 1.5rem; */
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background-color: rgb(255, 244, 255,0.8);
    z-index: 110;
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bar:nth-child(1) {
    width: 25px;
}

.bar:nth-child(2) {
    width: 10px;
}

.bar:nth-child(3) {
    width: 7px;
}

/* Media query to show hamburguer */

@media only screen and (max-width: 768px) {
    .nav-menu {
        width: 85%;
        height: 100%;

        position: fixed;
        left: -100%;
        top: 0rem;
        right: 0%;
        flex-direction: column;
        justify-content: center;
        background-color: #021429;;
        border-radius: 0 0 10px 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
        z-index: 100;
    }



    .nav-link {
        font-size: 3rem;
        font-weight: 500;
        color: rgb(255, 244, 255, 0.8);
        letter-spacing: 0.1rem;
        margin: 5.5rem 0;
    }

    .nav-menu.active {
        left: 0;
    }
        .nav-item {
        align-items: center;
        color: #000000;
        margin: 4.5rem 0;
    }

/* nav links in mobile */
    .nav-item a{
        font-size:1.6rem;
        margin: 2.5rem 0;
          color: rgba(255, 255, 255, 0.8);
        
    }



    .hamburger {


        display: block;
        cursor: pointer;
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
        width: 25px;
        
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
        width: 25px;
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
        width: 25px;
    }

    .navbar {

        justify-content: space-between;
    }
}

/* navbar animation */
.nav-active {
    transform: translateX(0%);
}

@keyframes navLinkfade {
    from {
        opacity: 0;
        transform: translateX(50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
}
</style>
