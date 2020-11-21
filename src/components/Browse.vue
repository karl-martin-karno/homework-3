<template>
  <div>
    <Header/>
    <section class="main-container">
      <div  class="profile-container" v-for="(profile, i) in profileData" :key="i">
        <img id="avatar-img" :src="profile.avatar" class="profile-avatar" alt="Me">
        <h1 id="name"> {{profile.firstname + " " + profile.lastname }}</h1>
        <button class="follow-button follow" name="follow">Follow</button>
      </div>

    </section>

  </div>
</template>
<script>
import Header from './Header'

export default {
  name: 'Browse',
  components: {Header},
  props: ['info', 'items'],
  methods: {
    muuda () {
      this.isClicked = !this.isClicked
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    profileData () {
      return this.$store.state.profiles
    }
  },
  mounted () {
    this.$store.dispatch('getProfile')
  }
}

</script>

<style scoped>

.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
  text-align: center;
}

.profile-container {
  text-align: center;
  width: 45%;
  padding: 10px;
  display: inline-block;
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
  margin: 10px;
}

.profile-avatar {
  min-height: 50px;
  height: 90px;
  min-width: 75px;
  width: 25%;
  max-width: 134px;
  object-fit: cover;
  clip-path: circle();
  object-position: 50% 10%;
  margin: auto;
}

.follow-button {
  display: inline-block;
  border-radius: 4px;
  border: 2px solid #663399;
  text-align: center;
  padding: 10px;
  width: 30%;
  min-width: max-content;
  transition: all 0.5s;
  margin: auto;
  font-size: inherit;
}

.follow-button.follow {
  background-color: #663399;
  color: #FFFFFF;
}

.follow-button.followed {
  background-color: #FFFFFF;
  color: #663399;
}

h1 {
  font-size: inherit;
}

</style>
