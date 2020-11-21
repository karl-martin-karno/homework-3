<template>
  <img :src="profileData.avatar" class="img-profile" alt="Me" @click="toggle">
</template>

<script>
import {EventBus} from '../assets/event-bus'

export default {
  name: 'DropdownButton',
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    profileData () {
      return this.$store.state.profileData
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
      EventBus.$emit('toggleDropdown', this.isOpen)
    }
  }
}
</script>

<style scoped>

.img-profile {
  border: 2px solid transparent;
  transition: all .2s
}

.img-profile:hover {
  border: 2px solid #20bdff;
  box-shadow: 0 0 9px #20bdff;
}

.img-profile:active {
  transition: .1s;
  box-shadow: 0 0 9px dodgerblue;
  border: 8px solid dodgerblue;
  transform: scale(0.95);
}
</style>
