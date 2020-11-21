<template>
  <header>
    <img class="img-logo" src="@/assets/logo.png" alt="logo">
    <div class="search-container">
      <form>
        <label>
          <input class="search-container" type="text" placeholder="Type something to look for...">
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
    <DropdownButton/>
  </header>
</template>

<script>
import DropdownButton from './DropdownButton'

export default {
  name: 'SearchBar',
  components: {
    DropdownButton
  },
  mounted () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 60px;
  padding: 0 30px;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  z-index: 3;

  background-color: #fff;
  box-shadow: 0 0 15px var(--light-shadow);
}

.search-container {
  flex-basis: 50%;
}

.search-container > form {
  display: flex;
  max-lines: 1;
}

.search-container input[type=text] {
  width: 100%;
  height: 40px;

  font-size: 14px;
  padding: 0 10px;
  border: thin solid #dcdcdc;
  background-color: white;
}

.search-container label {
  flex-grow: 1;
}

/*Use a General Sibling Selector (eg: div ~ p)*/
.search-container label ~ button {
  width: 15%;
  min-width: max-content;
  height: 40px;
  padding: 0 5px;

  font-size: 14px;
  font-weight: 600;
  border: none;
  color: #ffffff;
  background-color: #1b9fd8;
  border-radius: 0 8px 8px 0;
}

.search-container button:hover {
  background: #20bdff;
}
</style>
