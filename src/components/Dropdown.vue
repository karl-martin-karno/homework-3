<template>
  <transition name="slide" v-if="isOpen">
    <div class="dropdown">
      <ul>
        <li>{{ profileData.firstname | capitalize }} {{ profileData.lastname | capitalize }}</li>
        <li>{{ profileData.email }}</li>
        <hr>
        <li>
          <router-link to="/home/id/posts">Feed</router-link>
        </li>
        <li>
          <router-link to="/home/id/browse">Browse</router-link>
        </li>
        <li>
          <router-link to="/">Log out</router-link>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import {EventBus} from '../assets/event-bus'

export default {
  name: 'Dropdown',
  computed: {
    profileData () {
      return this.$store.state.profileData
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  mounted () {
    EventBus.$on('toggleDropdown', newValue => {
      this.isOpen = newValue
    })
  }
}
</script>

<style scoped>

.dropdown {
  position: fixed;
  z-index: 1;
  top: 50px;
  right: 0;
  padding: 25px 25px 0 0;

  background-color: #fff;
  box-shadow: 0 0 20px var(--dark-shadow);
  font-size: 18px;
}

.dropdown a {
  font-weight: 600;
}

.dropdown ul {
  list-style-type: none;
}

.slide-enter-active, .slide-leave-active {
  transition: all .4s ease;
}

.slide-enter, .slide-leave-to {
  transform: translateY(-100%);
  box-shadow: none;
}
</style>
