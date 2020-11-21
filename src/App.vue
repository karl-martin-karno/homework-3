<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand:400,500,600,700');
@import url('https://fonts.googleapis.com/css?family=Heebo:400,700');

:root {
  --light-shadow: #9b9b9b;
  --dark-shadow: #2b2b2b;
}

* {
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale
}

html, body, main {
  height: 100vh;
  margin: 0;
  overflow: auto;
}

body {
  background-color: dodgerblue;
}

a {
  color: #1b9fd8;
}

a:hover {
  color: #20bdff;
}

.img-logo, .img-profile {
  height: 40px;
  width: 40px;
  object-fit: cover;
}

.img-profile {
  float: left;
  border-radius: 50%;
  object-position: 50% 10%;
}
</style>
