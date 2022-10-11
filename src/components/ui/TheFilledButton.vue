<template>

    <div>
        <a  :href="link"><button class="btn">{{buttonTitle}} </button></a>
    </div>
</template>

<script>
export default {
    props: ['link', 'buttonTitle'],
    data() {
        return {

        }
    }
}
</script>


<style scoped>
.btn {
    z-index: 101;
    padding: 12px 22px;
    background: rgb(38, 125, 151);
    border: rgb(38, 125, 151);
    color: #ffffff;
    margin: 3rem 0 0 0;
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
   
}

.btn a {
    font-size: 15px;
   
    width: 140px;
    height: 50px;
    border-width: none;

}
 .btn:hover {

    background: #46a0b6;
    border: #46a0b6;
    color: white;
    transition: 0.3s ease-in-out;
   
}


/* make the buttons a little smaller on sm screen
 .hero-btn {
    padding: 16px 20px;
  }
 */
</style>