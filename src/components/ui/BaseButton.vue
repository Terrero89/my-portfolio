<template>
    <div>
            <button :style="btnStyles" > {{title}}</button>

    </div>

</template>
<script>
export default {
    props:['title'],
    data(){
        return{
            btnStyles:{
                color: '',
                background:'',
                border:'',
                fontsize:'',

            }
        }
    }
}
</script>


    
<style scoped>
    .hero-btn {
    padding: 12px 29px;
    background: none;
    /* color: rgb(28, 26, 51); */
    border: solid 1px #2e4c6d;
    /*details color*/
    
    font-size: 1.5rem;
    border-radius: 5px;
}

</style>