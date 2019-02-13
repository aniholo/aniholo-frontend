<template>
    <div class="root">
        <nav id="topNav">
            <input placeholder="Search tags and posts">
            <ul class="menuArea">
                <router-link tag="li" to="/" exact>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
                    Board
                </router-link>
                <router-link tag="li" to="/chat">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    Live chat
                </router-link>
                <router-link tag="li" to="/explore">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg>
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
        </nav>
        <nav id="sideNav">
            <div id="tagCloudLabel">Tag Cloud:</div>
            <ul id="tagCloud">
                <li>/Konasuba/</li>
                <li>/Kimi no na wa/</li>
                <li>/Death Note/</li>
                <li>/Sword Art Online/</li>
                <li>/Konasuba/</li>
                <li>/Bleach/</li>
                <li>/Fairy Tail Zero/</li>
                <li>/Black Clover/</li>
                <li>/Momokuri/</li>
                <li>/Nyanfuru/</li>
                <li>/Psycho-Pass Movie/</li>
                <li>/Summer Wars/</li>
                <li>/One Punch Man/</li>
                <li>/Konasuba/</li>
                <li>/Kimi no na wa/</li>
                <li>/Death Note/</li>
                <li>/Sword Art Online/</li>
                <li>/Konasuba/</li>
                <li>/Bleach/</li>
                <li>/Fairy Tail Zero/</li>
                <li>/Black Clover/</li>
                <li>/Momokuri/</li>
                <li>/Nyanfuru/</li>
                <li>/Psycho-Pass Movie/</li>
                <li>/Summer Wars/</li>
                <li>/One Punch Man/</li>
            </ul>
            <div class="dropdown">
                <div class="toggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#D5D8DC" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                    Recently viewed
                </div>
                <ul class="list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'navigation'
}
</script>
