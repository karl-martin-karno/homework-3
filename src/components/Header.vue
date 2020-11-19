<template>
<nav>
            <div class="logo-container">
                <img src="@/assets/logo.png" alt="postIt">
            </div>
            <div class="search-container">
                <input type="text" name="search"><button type="button">Search</button>
            </div>
            <div class="avatar-container">
                <img id="avatar-img" src="@/assets/avatar.png" class="avatar" alt="Me">
                <div class="dropdown">
                    <ul>
                        <li id="name"></li>
                        <li id="email"></li>
                        <hr>
                        <li><a id="avatar-browse" href="browse.html">Browse</a></li>
                        <li><a id="avatar-login" href="login.html">Log out</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    
</template>

<script>
export default {
    
}
</script>

<style>

</style>