<template>
  <span class="menu" @click="isOpen = !isOpen">
    <img id="avatar-img" :src="profileData.avatar" class="avatar" alt="Me">
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div> {{ profileData.firstname + " " + profileData.lastname}} </div>
        <div> {{ profileData.email}} </div>
        <hr>
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <router-link :to="item.link"> {{ item.title }} </router-link>
        </div>
      </div>
    </transition>
  </span>
</template>

<script>
export default {
  name: 'dropdown',
  props: ['info', 'items'],
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
  mounted () {
    this.$store.dispatch('getUser')
  }}
</script>

<style>
.sub-menu {
  right: 0;
  position: absolute;
  padding:20px 25px 20px 0;
  background-color: #ffffff;
  min-width: 160px;
  min-height: 220px;
  z-index: 999;
  font-size: 18px;
}

.sub-menu a:hover {
  color: #01579b;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
