<template>
    <div class="layout-wrapper">
        <div class="recommend-box">
            <div class="layuot">
                <div class="column-title">推荐电影</div>
                <div class="movies-box">
                    <figure class="frame-room recommend-item" v-for="recommend in recommendMovies" :key="recommend._id">
                        <div class="movies-pic picHover">
                            <a :href="getNewHref(recommend._id)" :title="recommend.title" target="_blank">
                                <img :src="recommend.coverPicture" :alt="recommend.title" width="180" height="252" style="display: inline" class="hvr-glow">
                                <span class="movies-score">{{recommend.score}}</span>
                                <span class="movies-flag">{{recommend.type[0]}}</span>
                            </a>
                        </div>
                        <figcaption class="movies-desc">
                            <p class="title-movies">
                                <a :href="getNewHref(recommend._id)" target="_blank" :title="recommend.title">{{recommend.title}}</a>
                            </p>
                            <p class="context-movies">{{recommend.briefIntro}}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div class="hot-box">
            <div class="layuot">
                <div class="column-title">热播大片</div>
                <div class="movies-box">
                    <figure class="frame-room hot-item" v-for="hot in hotMovies" :key="hot._id">
                        <div class="movies-pic picHover">
                            <a :href="getNewHref(hot._id)" :title="hot.title" target="_blank">
                                <img :src="hot.coverPicture" :alt="hot.title" width="180" height="252" style="display: inline" class="hvr-glow">
                                <span class="movies-score">{{hot.score}}</span>
                                <span class="movies-flag">全网热播</span>
                            </a>
                        </div>
                        <figcaption class="movies-desc">
                            <p class="title-movies">
                                <a :href="getNewHref(hot._id)" target="_blank" :title="hot.title">{{hot.title}}</a>
                            </p>
                            <p class="context-movies">{{hot.briefIntro}}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div class="new-box">
            <div class="layuot">
                <div class="column-title">新片速递</div>
                <div class="movies-box">
                    <figure class="frame-room new-item" v-for="news in newMovies" :key="news._id">
                        <div class="movies-pic picHover">
                            <a :href="getNewHref(news._id)" :title="news.title" target="_blank">
                                <img :src="news.coverPicture" :alt="news.title" width="180" height="252" style="display: inline" class="hvr-glow">
                                <span class="movies-score">{{news.score}}</span>
                                <span class="movies-flag">新</span>
                            </a>
                        </div>
                        <figcaption class="movies-desc">
                            <p class="title-movies">
                                <a :href="getNewHref(news._id)" target="_blank" :title="news.title">{{news.title}}</a>
                            </p>
                            <p class="context-movies">{{news.briefIntro}}</p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
        <div class="buttonRadiusMore">
            <a href="/vip-movies"  class="buttonRadiusMore-btn">更多电影</a>
        </div>
    </div>
</template>

<script>
export default {
  name: "MoviesBox",
  data() {
    return {
      recommendMovies: [],
      hotMovies: [],
      newMovies: []
    };
  },
  created() {
    this.getRecommendMovies();
    this.getHotMovies();
    this.getNewMovies();
  },
  methods: {
    getRecommendMovies() {
      var vm = this;
      this.axios
        .get("/api/movies/getRecommendMovies")
        .then(function(res) {
          if (res.data.code == 200) {
            var data = res.data.recommendMovies;
            if (data.length >= 5) {
              vm.recommendMovies = data.slice(0, 5);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getHotMovies() {
      var vm = this;
      this.axios
        .get("/api/movies/getHotMovies")
        .then(function(res) {
          if (res.data.code == 200) {
            var data = res.data.hotMovies;
            if (data.length >= 5) {
              vm.hotMovies = data.slice(0, 5);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNewMovies() {
      var vm = this;
      this.axios
        .get("/api/movies/getNewMovies")
        .then(function(res) {
          if (res.data.code == 200) {
            var data = res.data.newMovies;
            if (data.length >= 5) {
              vm.newMovies = data.slice(0, 5);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNewHref(val) {
      return "http://localhost:8080/movie-info?" + val;
    },
  }
};
</script>

<style scoped>
.layout-wrapper {
  min-width: 980px;
}
.recommend-box {
  background-color: #ffffff;
}
.layuot {
  width: 980px;
  margin: 0 auto;
  padding-bottom: 50px;
}
.column-title {
  width: 140px;
  margin: 33px auto 25px;
  color: black;
  font-size: 30px;
  text-align: center;
  line-height: 2;
}
.movies-box {
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
}
.frame-room {
  width: 180px;
  height: 315px;
  overflow: hidden;
  margin: 0;
}
.recommend-item {
  background-color: #f5f5f5;
}
.frame-room + .frame-room {
  margin-left: 20px;
}
.movies-pic {
  width: 100%;
  height: 245px;
  cursor: pointer;
  position: relative;
}
.picHover img{
    transition:box-shadow .6s ease-out,transform .1s ease-in,-webkit-filter .6s ease-out
}
.picHover:hover img{
    -webkit-filter:saturate(1.2) contrast(1.2) brightness(1.1)
}
.picHover:active img{
    transform:scale(0.97) translateZ(0)
}
.picHover:visited img{
    transition:box-shadow 1s ease-out,transform 0s ease,-webkit-filter 1s ease-out
}
.movies-pic img {
  width: 100%;
  height: 100%;
}
.movies-score {
  display: block;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0 12px 8px 0;
  color: #ffffff;
  font-size: 14px;
  text-shadow: 0 0 2px black;
}
.movies-flag {
  position: absolute;
  top: 0;
  left: 0;
  line-height: 22px;
  padding: 0 5px;
  color: #ffffff;
  font-size: 12px;
  background-color: #ff8d06;
}
.movies-desc {
  margin: 0;
  text-align: center;
}
.title-movies {
  height: 16px;
  line-height: 16px;
  font-size: 15px;
  color: #333333;
  font-weight: normal;
  margin: 0;
  padding: 15px 0 7px 0;
}
.title-movies a {
  height: 16px;
  line-height: 16px;
  font-size: 15px;
  color: #333333;
  font-weight: normal;
  margin: 0;
  outline: none;
}
.title-movies a:hover {
  color: rgb(34, 103, 173);
}
.context-movies {
  width: 100%;
  height: auto;
  font-size: 13px;
  line-height: 13px;
  color: #999999;
  margin: 0;
  overflow: hidden;
}
.hot-box {
  background-color: #f5f5f5;
  border: 1px solid #f5f5f5;
}
.hot-item {
  background-color: #ffffff;
}
.new-box {
  background-color: #ffffff;
}
.new-item {
  background-color: #f5f5f5;
}
.new-item .movies-flag {
  background-color: rgb(0, 162, 103);
}
.buttonRadiusMore{
    width: 158px;
    margin: 0px auto 50px;
    padding: 0;
}
.buttonRadiusMore-btn{
    width: 156px;
    line-height: 35px;
    display: inline-block;
    font-size: 15px;
    text-align: center;
    color: #818181;
    border: 1px solid #717171;
    border-radius: 18px;
    margin-right: -4px;
    outline: none;
}
.buttonRadiusMore-btn:hover{
    color: #ffffff;
    background-color: rgb(95, 127, 175);
    border: 1px solid rgb(95, 127, 175);
}
</style>
