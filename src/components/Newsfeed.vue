<template>
 <div>
   <Header/>
   <section class="main-container">
     <div v-for="(post, i) in getPosts" :key="i" class="menu-item">
      <div v-if="post.media != null">

        <div class="post">
          <div class="post-author">
            <span class="post-author-info">
              <img :src="post.author.avatar" alt="Post author">
              <small> {{ post.author.firstname + " " + post.author.lastname }} </small>
            </span>
            <small> {{ post.createTime }} </small>
          </div>
          <div class="post-image" v-if="post.media.type === 'image'">
            <img :src="post.media.url" alt="">
          </div>
          <div class="post-image" v-if="post.media.type === 'video'">
            <video :src="post.media.url" alt=""/>
          </div>
          <div class="post-title" v-if="post.text != null">
            <h3> {{ post.text }} </h3>
          </div>
          <div class="post-actions">
            <button @click="changeLiked" type="button" name="like" class="like-button"> {{ post.likes }} </button>
          </div>
        </div>
      </div>
     </div>
   </section>
 </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Newsfeed.vue',
  components: {Header},
  methods: {
    changeLiked: function (event) {
      if (event.hasClass('liked')) {
        event.removeClass('liked')
      } else {
        event.addClass('liked')
      }
    }
  },
  computed: {
    getPosts () {
      return this.$store.state.posts
    }
  },
  mounted () {
    this.$store.dispatch('getPosts')
  }}
</script>

<style>
.main-container {
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: #ffffff;
  text-align: center;
}

.post {
  text-align: left;
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post-image img, video {
  width: 100%;
}

.post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post-title ~ .post-actions {
  padding: 10px;
}

.like-button {
  background-image: url(../assets/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  background-color: #8a8a8a;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
  transition: all 0.2s;
}

.like-button.liked {
  background-color: #01579b;
}

h1{
  font-size:inherit;
}
</style>
