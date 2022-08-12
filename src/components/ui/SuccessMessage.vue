<template>
    <div class="message">
        <h3>{{message}}</h3>

    </div>

</template>

<script>

export default {
props:['message'],
data() {
        return {
            isSent: false,
        }
    }
}

</script>


<style scoped>
.active {

    animation: fadedown 0.5s ease-in-out linear;
}

@keyframes fadedown {
    from {
        top: -3rem;
        opacity: 0;
    }



    to {

        top: 0;
        opacity: 1;
    }

}




 h3 {
    text-align: center;
    color: white;
    font-size: 1.7rem;

}

.message{
    width: 50%;
    
    padding: 1rem;
    position: fixed;
    top: 6%;
    left: auto;
    right: auto;
    border-radius: 15px;
}



/* @keyframes fadedown {
    from{
        top: -3rem;
        opacity: 0;
    }

    

    to {
        
      top:0;
        opacity: 1;
    }

} */

@media only screen and (max-width: 768px) {
    .message {
        width: 100%;
        
    }



}
</style>

