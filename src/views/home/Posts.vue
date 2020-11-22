<template>
  <div>
    <div v-for="(post, i) in getPosts" :key="i" class="menu-item">
      <div class="post">
        <div class="post-top">
          <img class="img-profile" :src="post.author.avatar" alt="Post author">
          <div class="profile-name">{{ post.author.firstname | capitalize }} {{ post.author.lastname | capitalize }}
          </div>
          <div>{{ post.createTime }}</div>
        </div>
        <div class="media" v-if="post.media != null && post.media.type === 'image'">
          <img :src="post.media.url" alt="Post image">
        </div>
        <video class="media" controls v-if="post.media != null && post.media.type === 'video'">
          <source :src="post.media.url">
          Your browser does not support HTML video.
        </video>
        <p v-if="post.text != null">
          {{ post.text }}
        </p>
        <div class="like">
          <LikeButton/>
          <div class="like-counter">{{ post.likes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LikeButton from '../../components/LikeButton'

export default {
  name: 'Posts',
  components: {LikeButton},
  computed: {
    getPosts () {
      return this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style>
.post {
  display: block;
  width: 80%;
  padding: 10px 0;
  margin: 35px auto;
  border-radius: 15px;
  box-shadow: 0 0 20px #9b9b9b;
}

.post-top {
  padding: 0 10px 10px;
}

.profile-name {
  font-size: 16px;
  font-weight: 500;
}

/*Use an Adjacent Sibling Selector (eg: div + p)*/
.profile-name + div {
  width: 100%;
  font-size: 16px;
  color: gray;
  text-align: end;
}

/*Use a Child Selector (eg: div > p)*/
.post > video, img {
  z-index: 1;
  width: 100%;
}

.post p {
  font-size: 24px;
  font-weight: 600;
  width: 95%;
  margin: 20px 10px 30px;
}

.like {
  display: inline-block;
  width: auto;
  margin: 10px 0 0 10px;
}

.like-counter {
  font: 400 14px 'Heebo', sans-serif;
  margin: auto;
  text-align: center;
}
</style>
