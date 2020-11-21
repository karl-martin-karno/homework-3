<template>
  <div>
    <Header/>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'Browse',
  components: {Header}
}
</script>

<style>
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
</style>
