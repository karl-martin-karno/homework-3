<template>
  <button class="follow-button" v-bind:class="{unfollow: isFollowed}"
          @click="isFollowed = !isFollowed">{{ isFollowed ? 'Followed' : 'Follow' }}
  </button>
</template>

<script>
export default {
  name: 'FollowButton',
  data () {
    return {
      isFollowed: false
    }
  }
}
</script>

<style scoped>
.follow-button {
  display: inline-block;
  vertical-align: bottom;
  width: 30%;
  min-width: max-content;
  margin: auto;
  padding: 10px;

  transition: all .4s;
  background-color: #663399;
  color: #FFF;
  border-radius: 4px;
  border: 2px solid #663399;
  text-align: center;
  font-size: 16px;
}

.follow-button:active {
  transform: scale(0.9);
  transition: .1s;
}

.follow-button:hover {
  background-color: #8a5bbf;
  border: 2px solid #8a5bbf;
}

.follow-button.unfollow {
  background-color: #FFF;
  color: #663399;
}

.follow-button.unfollow:hover {
  border: 2px solid #8a5bbf;
  background-color: #eee5ff;
  color: #8a5bbf;
}
</style>
