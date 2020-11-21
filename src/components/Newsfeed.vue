<template>
 <div>
   <Header/>
   <section class="main-container"></section>
 </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Newsfeed.vue',
  components: {Header}
}
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
  left: 35px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img, video {
  width: 100%;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
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

h1{
  font-size:inherit;
}
</style>
