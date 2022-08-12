<template>
  <section id="skills">
    <skills-container></skills-container>
  </section>
</template>

<script>
import SkillsContainer from "../layout/skills/SkillsContainer.vue";

export default {
  components: {
    SkillsContainer,
  },
  data() {
    return {
      fontSize: "2rem",
    };
  },
};
</script>

<style scoped>


</style>
