<template>
    <div class="root">
        <nav id="topNav">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="40px" height="40px" viewBox="0 0 500 500">
            <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            fill="#EAECEE" stroke="none">
            <path d="M2061 4412 c-30 -53 -138 -245 -241 -427 -103 -181 -198 -350 -212
            -375 -14 -25 -114 -202 -223 -395 -275 -486 -787 -1392 -845 -1495 -26 -47
            -143 -253 -259 -459 -116 -205 -211 -379 -211 -385 0 -14 155 -292 178 -318
            14 -17 134 -18 2247 -18 1770 0 2234 3 2247 12 8 7 54 83 102 168 72 128 85
            158 77 175 -6 11 -23 43 -39 70 -24 42 -298 527 -585 1035 -38 69 -85 150
            -102 180 -18 30 -44 75 -57 100 -14 25 -103 182 -198 350 -167 295 -365 646
            -440 780 -139 247 -358 634 -385 680 -17 30 -78 137 -135 238 l-102 182 -382
            0 -381 0 -54 -98z m89 -681 l0 -650 -29 -63 c-120 -261 -333 -723 -354 -768
            -13 -30 -39 -86 -56 -124 -18 -38 -29 -71 -26 -75 10 -10 1608 -12 1624 -2 12
            8 10 19 -12 65 -15 31 -27 58 -27 61 0 2 -22 51 -50 110 -27 59 -50 108 -50
            110 0 2 -15 36 -34 77 -45 98 -109 238 -200 441 l-76 168 0 645 c0 455 3 645
            11 642 6 -2 40 -60 75 -128 78 -150 200 -383 262 -500 162 -307 225 -428 317
            -605 119 -228 294 -563 330 -630 18 -33 67 -127 110 -210 43 -82 92 -177 110
            -210 18 -33 65 -123 105 -200 40 -77 114 -219 165 -315 51 -96 125 -238 165
            -315 40 -77 97 -186 126 -242 30 -55 54 -106 54 -111 0 -9 -42 -78 -174 -285
            -10 -16 -42 -17 -428 -17 -230 0 -418 2 -418 4 0 2 38 68 85 147 47 79 85 150
            85 157 0 7 -5 20 -10 30 -6 9 -53 112 -105 227 l-94 210 -1134 3 -1133 2 -19
            -42 c-10 -24 -58 -130 -107 -236 -50 -107 -87 -200 -84 -209 4 -8 42 -73 86
            -144 44 -71 80 -133 80 -139 0 -7 -140 -10 -424 -10 l-424 0 -98 152 c-75 117
            -95 155 -87 167 5 9 31 57 58 106 26 50 60 113 75 140 15 28 51 95 80 150 29
            55 65 123 80 150 15 28 48 91 75 140 26 50 60 113 75 140 15 28 48 88 73 135
            82 156 209 394 242 455 18 33 54 101 80 150 26 50 55 104 65 120 10 17 40 74
            69 128 28 53 74 141 102 195 29 53 59 111 69 127 10 17 46 84 80 150 35 66 85
            159 112 208 26 48 48 89 48 91 0 2 19 39 43 82 24 44 67 124 96 179 30 55 73
            136 96 180 97 179 147 274 187 353 23 45 46 82 50 82 5 0 8 -292 8 -649z"/>
            </g>
            </svg>
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
            <div v-if="user.length >= 0" class="userBox">
                <img src="https://avatarfiles.alphacoders.com/144/144325.png">
                <div class="userInfo">
                    <h4>{{user}}</h4>
                    <h6>@jeb</h6>
                </div>
            </div>
            <div v-else class="userBox">
                <router-link to="/auth/login">Login</router-link>
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
  name: 'navigation',
  props: {
      user: Object
  }
}
</script>
