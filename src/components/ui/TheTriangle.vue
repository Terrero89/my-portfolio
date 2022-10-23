<template>
  <div>
    <div class="triangle-right"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.triangle-right {
	width: 1px;
	height: 1px;
	border-top: 3px solid transparent;
	border-left: 6px solid #61DBFB;;
	border-bottom: 3px solid transparent;
    margin: 0 1rem 0 0;
}

@media only screen and (min-width: 768px) {
    .triangle-right {
        border-top: 0px ;
	border-left: 0;
	border-bottom: 0;
  }
}
</style>