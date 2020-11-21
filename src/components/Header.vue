<template>
  <nav>
    <div class="logo-container">
      <img src="@/assets/logo.png" alt="postIt">
    </div>
    <div class="search-container">
      <input type="text" name="search">
      <button type="button">Search</button>
    </div>
    <div class="avatar-container">
      <Dropdown :items="links"></Dropdown>
    </div>
  </nav>
</template>

<script>
import Dropdown from './Dropdown'
export default {
  name: 'header',
  components: {
    Dropdown
  },
  data () {
    return {
      links: [
        {
          title: 'Browse',
          link: '/Browse'
        },
        {
          title: 'Log out',
          link: '/'
        }
      ]
    }
  }
}
</script>

<style>
nav {
  display: flex;
  background-color: #ffffff;
  align-items: center;
}

nav div {
  height: 30px;
  flex-grow: 4;
  padding: 10px;
}

nav div img {
  height: 100%;
  width: 30px;
  margin-left: 15px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top center;
}

nav div.search-container {
  white-space: nowrap;
  overflow: hidden;
}

nav div.search-container > input {
  box-sizing: border-box;
  height: 30px;
  width: 80%;
  margin: 0;
  padding: 5px;
  border: 1px solid #e0e0e0;
}

nav div.search-container > button {
  height: 30px;
  min-width: max-content;
  width: 20%;
  margin: 0;
  padding: 5px;
  color: #ffffff;
  background-color: #01579b;
  border: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}
</style>
