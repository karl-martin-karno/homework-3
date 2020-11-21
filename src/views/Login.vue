<template>
  <div class="login-page">
    <section class="wrapper">
      <div class="content">

        <header>
          <div class="image-container">
            <img src="@/assets/logo.png" alt="">
          </div>
          <div class="welcome-container">
            <h1>Welcome to postIt!</h1>
            <h3>Please Login!</h3>
          </div>
        </header>

        <section>
          <form class="login-form">
            <div class="input-group">
              <input type="email" placeholder="Email" id="email" required>
              <input type="password" placeholder="Password" id="password" required>
            </div>
            <div class="btn-group">
              <router-link to="/home/id/posts"><input type="submit" value="Log In"></router-link>
              <router-link to="/home/id/posts"><input type="button" value="Sign up"></router-link>
            </div>
          </form>
        </section>

        <footer>
          <router-link id="footer-link-pswrd" to="/home/id/posts">Forgot Password?</router-link>
        </footer>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  margin: 0;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  max-width: 500px;
  text-align: center;
  padding: 40px 15px 50px 15px;
  border-radius: 5px;
  background-color: #fff;

  box-shadow: 0 0 50px #2b2b2b;
}

h1, h2 {
  font-weight: 500;
}

header {
  display: flex;
  margin-bottom: 10px;
}

.image-container {
  flex-basis: 20%;
}

.welcome-container {
  flex-basis: 60%;
  justify-content: center;
  padding-top: 10px;
  margin-bottom: 10px;
}

img {
  width: 80px;
  height: 80px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-group {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
}

/* Use of Descendant Selector */
.input-group input:first-child {
  margin-bottom: 10px;
}

input {
  font-size: 14px;
  padding: 15px;
  border-radius: 5px;
  border: none;
  background-color: #e4eff8;
}

input:hover {
  background-color: #d7e2ec;
}

.btn-group {
  width: 100%;
  max-width: 300px;
  display: flex;
  margin: 20px 0;
}

/* Use of Class Selector */
.btn-group a {
  padding: 0 5px;
  width: 50%;
  border: none;
  text-decoration: none;
}

/* Use of Descendant Selector */
.btn-group input {
  width: 100%;
  height: 100%;
  font-size: 16px;
  cursor: pointer;
  color: #fff;
  text-align: center;
  background-color: #1b9fd8;
}

/* Use of pseudo-class */
.btn-group a input:hover {
  background-color: #20bdff;
}

/* Use of an ID selector */
#footer-link-pswrd {
  color: #1b9fd8;
  font-size: 14px;
  font-weight: 700;
}

#footer-link-pswrd:hover {
  color: #20bdff;
}

@media screen and (max-width: 720px) {
  .content {
    width: 70%;
    padding-right: 0;
    padding-left: 0;
    margin: 0 10px;
  }
}
</style>
