<template>
    <div class="root" style="position: relative;">
        <div class="rowTitle">
            Popular Anime
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 28 8"><path fill="#D5D8DC" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
        </div>
        <div class="rowContainer">
            <div class="row">
                <div class="animeCard">
                    <div class="thumb" style="background-image: url(https://images-na.ssl-images-amazon.com/images/I/41mlfGektXL.jpg)"></div>
                    <div class="content">
                        <h2>Kimi no na wa</h2>
                        <p>Vestibulum tincidunt nec ipsum in consequat. Mauris sed facilisis leo. Praesent aliquam felis nisl, eget condimentum eros mattis sed.</p>
                        <div class="stats">
                            <p>89 posts this week</p>
                        </div>
                    </div>
                </div>
                <div class="animeCard">
                    <div class="thumb" style="background-image: url(https://img1.ak.crunchyroll.com/i/spire3/7ba81b1709a87f5ca8930229b10029a61484092235_full.jpg)"></div>
                    <div class="content">
                        <h2>Konosuba</h2>
                        <p>Nec ipsum in consequat. Mauris sed facilisis leo. Praesent aliquam felis nisl, eget condimentum eros mattis sed.</p>
                        <div class="stats">
                            <p>38 posts this week</p>
                        </div>
                    </div>
                </div>
                <div class="animeCard">
                    <div class="thumb" style="background-image: url(https://cdn.europosters.eu/image/750/posters/death-note-from-the-shadows-i58005.jpg)"></div>
                    <div class="content">
                        <h2>Death Note</h2>
                        <p>Praesent aliquam felis nisl, eget condimentum eros mattis sed. Mauris sed facilisis leo. Praesent aliquam felis nisl, eget condimentum eros mattis sed.</p>
                        <div class="stats">
                            <p>21 posts this week</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rowBtnWrapper">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#D5D8DC" d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                </button>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#D5D8DC" d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                </button>
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
