<template>
  <section id="footer-section">
    <footer>
      <div class="footer-container">
        <div class="footer-text">
          <h3>
            <span>&copy;  </span>
            <a href="https://github.com/Terrero89/">Built by Sergio Terrero </a>
          </h3>
          <p>Front-end Web Developer 2022</p>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
span {
  content: "\0026";
}
#footer-section {
  padding: 1.5rem;
  width: 100%;
  background-color: rgba(24, 32, 80, 0.2);
}

.footer-container {
  text-align: center;
  overflow: hidden;
}

.footer-text {
  margin: 0 0 2rem 0;
}

.footer-text h3 a {
  list-style: none;
  text-decoration: none;
  color: rgba(205, 229, 243, 0.8);
  margin: 2rem 0;
  font-size: 1.5rem;
  font-family: "Inconsolata", monospace;
}

.footer-text h3 a:hover {
  text-decoration: underline;
  color: rgb(0, 217, 255)
}
.footer-text p {
  color: rgba(205, 229, 243, 0.8);
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-family: "Inconsolata", monospace;
}
</style>
