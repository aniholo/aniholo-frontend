<template>
    <nav>
        <div class="boardTitle">
            <p>Anihola</p>
        </div>
        <!--
        <div class="searchArea">
            <input type="text" placeholder="Search posts">
        </div>
        -->
        <ul class="menuArea">
            <router-link tag="li" to="/" exact>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
                Board
            </router-link>
            <router-link tag="li" to="/chat">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                Live chat
            </router-link>
            <router-link tag="li" to="/explore">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>
                Explore
            </router-link>
        </ul>
        <div class="userBox">
            <img src="https://avatarfiles.alphacoders.com/144/144325.png">
            <div class="userInfo">
                <h4>Mitsuha</h4>
                <h6>@jeb</h6>
            </div>
        </div>
        <div class="recentArea">
            <div>
                <h4>Duis nulla felis</h4>
                <p>1.4k votes</p>
            </div>
            <div>
                <h4>Proin feugiat</h4>
                <p>2 votes</p>
            </div>
            <div>
                <h4>Mauris efficitur</h4>
                <p>201 votes</p>
            </div>
            <div>
                <h4>Praesent aliquam</h4>
                <p>9.4k votes</p>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navigation'
}
</script>
