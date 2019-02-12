<template>
    <div class="root" style="position: relative;">
        <div class="rowTitle">Popular Anime <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 20 16"><path fill="#D6DBDF" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg></div>
        <div class="rowContainer">
            <div class="row">
                <div class="animeCard">
                    <div class="thumb" style="backgroundImage: 'url(../../assets/img.png)'"></div>
                    <div class="content">
                        <h2>Kimi no na wa</h2>
                        <p>Vestibulum tincidunt nec ipsum in consequat. Mauris sed facilisis leo. Praesent aliquam felis nisl, eget condimentum eros mattis sed. Pellentesque at nunc lacinia, fermentum ex sit amet, consectetur diam.</p>
                        <div class="stats">
                            <p>89 posts this week</p>
                        </div>
                    </div>
                </div>
                <div class="animeCard">
                    <img src="">
                    <div class="content">
                        <h2>Konosuba</h2>
                        <p>Nec ipsum in consequat. Mauris sed facilisis leo. Praesent aliquam felis nisl, eget condimentum eros mattis sed. Pellentesque at nunc lacinia, fermentum ex sit amet, consectetur diam.</p>
                        <div class="stats">
                            <p>38 posts this week</p>
                        </div>
                    </div>
                </div>
                <div class="animeCard">
                    <img src="">
                    <div class="content">
                        <h2>Death Note</h2>
                        <p>Praesent aliquam felis nisl, eget condimentum eros mattis sed. Mauris sed facilisis leo. Praesent aliquam felis nisl, eget condimentum eros mattis sed. Pellentesque at nunc lacinia, fermentum ex sit amet, consectetur diam.</p>
                        <div class="stats">
                            <p>21 posts this week</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rowBtnWrapper">
                <button v-on:click="scroll('left', 100)">o</button>
                <button v-on:click="scroll('right', 100)">o</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'navigation',
  methods: {
    scroll: function (dir, dist) {
      if (dir == 'right') {
        let unit = dist / 30
        console.log(unit)

        // Working on animating scroll
        for (var i = 0; i < 30; i++) {
            setTimeout(function () {
                document.getElementsByClassName('row')[0].scrollLeft = -unit
                console.log(i)
            }, 500);
        } 
      } else {
        document.getElementsByClassName('row')[0].scrollLeft = dist
      }
    }
  }
}
</script>
