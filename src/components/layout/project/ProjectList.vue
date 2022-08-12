<template>


    <ProjectItems v-for="project in projects"
     :key="project.name" :name="project.name"
        :description="project.description" 
        :link="project.link" 
        :stacks="project.stack" 
        :github="project.github"
        :web="project.website" />

</template>

<script>
import ProjectItems from './ProjectItems.vue'

export default {

    name: "project list",
    components: { ProjectItems },

    data() {
        return {

            projects: [
                {
                    name: 'Find a Mentor',
                    link: 'https://cdn-ecbjf.nitrocdn.com/trFSLbdBEIFWvubMBbeHotqYSOVJJYEv/assets/static/optimized/rev-a53dc1f/blog/wp-content/uploads/2020/02/40-BEST-WEBSITE-DESIGNS-2022.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis obcaecati pariatur odio porroullam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo beatae repellat.',
                    stack: ["Vue JS", "Vuex", "Firebase", "Vue Router"],
                    github: 'https://github.com/Terrero89/Find_a_mentor_project',
                    website: 'https://find-mentor-project.web.app/coaches',
                },

                {
                    name: 'Phoenix Financial Advisors',
                    link: 'https://miro.medium.com/max/600/0*npRqA-IodJWs4jae.jpg',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veritatis obcaecati pariatur odio porroullam excepturi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla illo beatae repellat.',
                    stack: ["Vue JS", "Nuxtjs", "Firebase", "Sass"],
                    github: 'http://www.phoenixfinancial.co/',
                    website: 'http://www.phoenixfinancial.co/'
                },

            ],



        }
    },

 

}
</script>

<style scoped>
</style>
