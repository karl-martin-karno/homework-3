<template>
  <div>
    <SearchBar/>
    <Dropdown/>
    <main>
      <transition name="fade-slide" mode="out-in">
        <router-view/>
      </transition>
    </main>
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

.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all .8s ease;
}

.fade-slide-enter {
  transform: translateX(-40%);
  opacity: 0;
}

.fade-slide-leave-active {
  transform: translateX(80%);
  opacity: 0;
}
</style>
