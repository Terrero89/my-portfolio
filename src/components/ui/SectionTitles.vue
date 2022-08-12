<template>

    <h2 :style="{ styles }">{{ title }}</h2>

</template>

<script>
export default {
    props: ['title', 'color', 'margin', 'fontSize'],
    data() {
        return {
            styles: {
                color: '',
                fontSize: '',
                margin: '',
                textAlign: '',
                background: '',




            }

        };
    },
};
</script>

<style scoped>
h2 {
    font-size: 4rem;
    text-align: center;
    align-items: center;
    margin: 10rem 0 3rem 0;
       color:#61DBFB; 
 




}

@media only screen and (max-width: 490px) {
    h2 {
        margin: 10rem 0 3rem 0;
        overflow: hidden;
        font-size: 3.5rem;
        z-index: 1000;
    }
}
</style>
