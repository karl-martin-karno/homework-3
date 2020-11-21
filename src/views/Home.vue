<template>
  <div>
    <SearchBar/>
    <Dropdown/>
    <router-view/>
  </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import Dropdown from '../components/Dropdown'

export default {
  name: 'Home',
  components: {SearchBar, Dropdown},
  mounted () {
    this.$store.dispatch('getUser')
  }
}
</script>

<style scoped>
main {
  width: 60%;
  margin: auto;
  padding-top: 80px;
  background-color: #fff;
  box-shadow: 0 0 50px var(--dark-shadow)
}
</style>
