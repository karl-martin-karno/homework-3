<template>
  <div class="browse">
    <div class="profile-container" v-for="(profile, i) in profileData" :key="i">
      <img id="profile-avatar" :src="profile.avatar" class="profile-avatar" alt="Me">
      <p>{{ profile.firstname | capitalize }} {{ profile.lastname | capitalize }}</p>
      <FollowButton/>
    </div>
  </div>
</template>
<script>
import FollowButton from '../../components/FollowButton'

export default {
  name: 'Browse',
  components: {FollowButton},
  computed: {
    profileData () {
      return this.$store.state.profiles
    }
  },
  mounted () {
    this.$store.dispatch('getProfiles')
  }
}

</script>

<style scoped>
.browse {
  text-align: center;
  margin: 0 auto;
}

.profile-container {
  display: inline-block;
  vertical-align: top;
  width: 45%;
  min-width: min-content;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px #9b9b9b;
  font-weight: 600;
  font-size: 24px;
}

.profile-avatar {
  height: 100px;
  width: 100px;
  margin: auto;
  object-fit: cover;
  object-position: 50% 10%;
  clip-path: circle();
}

</style>
