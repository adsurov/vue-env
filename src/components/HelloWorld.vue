<script setup>
const name = import.meta.env.VITE_PRODUCT_NAME;
const logoSrc = import.meta.env.VITE_LOGO_URL;
console.log(
  `%c ${import.meta.env.MODE}-->`,
  `background: ${
    import.meta.env.MODE === "development" ? "green" : "hotpink"
  }; color: white; display: block;`,
  import.meta.env,
  logoSrc
);
</script>

<template>
  <div class="greetings">
    <div>
      <span>Static image:</span>
      <!-- Use @ in paths only for static images -->
      <img width="50" height="50" src="@/assets/logo.svg" alt="" />
    </div>
    <div>Name: {{ name }}</div>
    <h1 class="green">Hello</h1>
    <p>alternate logo</p>
    <img :src="`${logoSrc}`" alt="logo" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
