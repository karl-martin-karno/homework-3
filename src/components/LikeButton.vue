<template>
  <div class="like-button" v-bind:class="{liked: isLiked}">
    <input type="button" @click="isLiked = !isLiked">
  </div>
</template>

<script>
export default {
  name: 'LikeButton',
  data () {
    return {
      isLiked: false
    }
  }
}
</script>

<style scoped>
.like-button {
  width: 60px;
  height: 40px;
  padding: 0;
  border-radius: 15%;
  background-color: #e4eff8;

  transition: all .2s;
}

.like-button:focus {
  outline: none;
  box-shadow: none;
}

.like-button:hover {
  background-color: #c0e9ff;
  box-shadow: 0 0 3px #c0e9ff;;
}

.like-button:active {
  border: 2px solid dodgerblue;
  box-shadow: 0 0 8px dodgerblue;
  transform: scale(0.8);
  transition: .1s;
}

.like-button input {
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  border-radius: 15%;

  background: rgba(0, 0, 0, 0) url('../assets/like.png') no-repeat center;
  background-size: 50%;
  filter: invert();
  transition: all 0.3s;
}

.like-button.liked {
  background-color: #1b9fd8;
}

.like-button.liked:hover {
  box-shadow: 0 0 3px dodgerblue;
  background: #20bdff;
}

.like-button.liked:active {
  border: 2px solid red;
  box-shadow: 0 0 10px red;
  transform: scale(0.8);
  transition: 50ms;
}

.like-button.liked input {
  filter: none;
}
</style>
