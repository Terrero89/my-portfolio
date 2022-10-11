<template>
  <ProjectItems
    v-for="(project, index) in projects"
    :key="project.name"
    :name="project.name"
    :description="project.description"
    :link="project.link"
    :stacks="project.stack"
    :github="project.github"
    :web="project.website"
    :type="project.type"
    :length="index"
  />
</template>

<script>
import ProjectItems from "./ProjectItems.vue";

export default {
  name: "project list",
  components: { ProjectItems },

  data() {
    return {
      linking: require,

      projects: [
        {
          type: "Personal Project",
          name: "Find a Mentor",
          link: require("../../../assets/images/FindAMentorApp.png"),
          description:
            "Web application built using Vue js ecosystem. This application allows to sign up, display information about types of services offered and allow users to send messages to the mentor listed in our system for hiring or coaching.",
          stack: ["Vue JS", "Vuex", "Vue Router", "Firebase", "jwt"],
          github: "https://github.com/Terrero89/Find_a_mentor_project",
          website: "https://find-mentor-project.web.app",
        },

        {
          type: "Personal Project",
          name: "My Web blog",
          link: require("../../../assets/images/MyBlogWebApp" + ".png"),
          description:
            "Personal Blog where I intend to post different articles and posts about technology, and other topics. This web app also allows users to sign up, sign in, as well as post articles and blogs of their preference. The ideas was to allow users to interact with others user through the blog as well.",
          stack: ["Vue JS", "Nuxtjs", "Firebase", "Axios", "Vuex", "Jwt", "Cookies"],
          github: "http://www.phoenixfinancial.co/",
          website: "http://www.phoenixfinancial.co/",
        },
        
        
      ],
    };
  },
};
</script>

<style scoped></style>
