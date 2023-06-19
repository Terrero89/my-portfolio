<template>
  <div>
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
  </div>
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
          name: "Foodie App",
          link: require("../../../assets/images/foodieApp.png"),
          description:
            "Cross platform E-commerce web application built with react. You can order, save,delete items from the cart and much more.",
          stack: ["React", "Context Api", "Hooks", "Firebase"],
          github: "https://github.com/Terrero89/Order_App_Project",
          website: "https://foodieapp2023.netlify.app",
        },
        {
          type: "Personal Project",
          name: "Find a Mentor",
          link: require("../../../assets/images/FindAMentorApp.png"),
          description:
            "Web application built using Vue js ecosystem. This application allows to sign up, display information about types of services offered and allow users to send messages to the mentor listed in our system for hiring.",
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
          stack: [
            "Vue JS",
            "Nuxtjs",
            "Firebase",
            "Axios",
            "Vuex",
            "Jwt",
            "Cookies",
          ],
          github: "https://github.com/Terrero89/Blog",
          website: "https://sergioterreroblog.netlify.app",
        },
           {
          type: "Personal Project",
          name: "Finance Tracker UI",
          link: require("../../../assets/images/financetracker2023.png"),
          description:
            "Simple React.Js practice application UI that displays information entered for finance tracking purposes. At this time application displays entered information, filter by month and year as a way to show features of the application. ",
          stack: ["React Js"],
          github: "https://github.com/Terrero89/react_project_practice",
          website: "https://financetracker2023.netlify.app/",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
