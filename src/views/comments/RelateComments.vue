<template>
    <div class="relate-comments">
        <div class="content">
            <h1>{{relateMovieTitle}}的影评（{{relateCommentsTotal}}）</h1>
            <div class="content-inner">
                <div class="article">
                    <div class="comment-list">
                        <div class="comment-item" v-for="citem in relateComments" :key="citem._id">
                            <header class="main-hd">
                                <a href="javascript:void(0);" class="author-avatar">
                                    <img src="../../assets/img/头像.png" width="24" height="24">
                                </a>
                                <span class="author">{{citem.author}}</span>
                                <span class="grade">评分：</span>
                                <span class="com-grade">{{citem.grade}} 星</span>
                                <span class="time">{{citem.publicTime}}</span>
                            </header>
                            <div class="main-bd">
                                <h2>
                                    <a :href="getNewHref(citem._id)" target="_blank">{{citem.title}}</a>
                                </h2>
                                <div class="comment-short">
                                    {{citem.shortContent}}
                                    （<a :href="getNewHref(citem._id)" target="_blank" class="unfold">详情</a>）
                                </div>
                                <div class="action">
                                    <a href="javascript:;" class="action-btn" title="有用">
                                        <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">
                                        <span>{{citem.usefulCount}}</span>
                                    </a>
                                    <a href="javascript:;" class="action-btn" title="没用">
                                        <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">
                                        <span>{{citem.uselessCount}}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aside">
                    <div class="mod-ad">
                        <a href="https://cloud.tencent.com/act/weapp" target="_blank" class="picHover">
                            <img src="https://tpc.googlesyndication.com/daca_images/simgad/17594854793970370632" class="hvr-glow">
                        </a>
                        <span class="ad-txt">广告</span>
                    </div>
                    <div class="mod-r-pc">
                        <div class="mod-reletive" v-if="relateMovieTitle">
                            <div class="mod-hd">
                                <h2>相关电影</h2>
                            </div>
                            <div class="mod-bd">
                                <div class="pic-pack-outer">
                                    <a href="" target="_blank" class="pic-url">
                                        <img :src="relateMovie.coverPicture" width="110" height="160" class="hvr-glow">
                                    </a>
                                    <div class="pic-pack-inner">
                                        <h3 class="title">
                                            <a href="" target="_blank" :title="relateMovie.title">{{relateMovie.title}}</a>
                                        </h3>
                                        <div class="director-role">
                                            <span>导演：</span>
                                            <h5>{{relateMovie.director}}</h5>    
                                        </div>
                                        <div class="director-role" v-show="relateMovie.actors != ''">
                                            <span>主演：</span>
                                            <h5>{{relateMovie.actors[0]}}</h5>
                                            &nbsp;&nbsp;等
                                        </div>
                                        <div class="pic-jump">
                                            <a href="" target="_blank" class="i-jump">预告片</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "RelateComments",
  data() {
    return {
      relateMovieTitle: "",
      relateCommentsTotal: "",
      relateComments: {},
      relateMovie: {
        actors: ""
      }
    };
  },
  created() {
    this.getRelateComments();
    this.getRelateMovie();
  },
  methods: {
    getRelateComments() {
      var vm = this;
      vm.relateMovieTitle = this.$route.query.movieName;
      //   console.log(vm.relateMovieTitle)
      this.axios
        .get("/api/comments/getRelateComments", {
          params: { movieName: vm.relateMovieTitle }
        })
        .then(function(res) {
          if (res.data.code == 200) {
            vm.relateComments = res.data.relateComments;
            // console.log(vm.relateComments);
            vm.relateCommentsTotal = res.data.relateCommentsTotal;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getRelateMovie() {
      var vm = this;
      this.axios
        .get("/api/movies/getRelateMovie", {
          params: { title: vm.relateMovieTitle }
        })
        .then(function(res) {
          if (res.data.code == 200) {
            vm.relateMovie = res.data.relateMovie;
            // console.log(vm.relateMovie);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNewHref(val) {
      return "http://localhost:8080/comment?" + val;
    }
  }
};
</script>

<style scoped>
.relate-comments {
  width: 980px;
  margin: 0 auto;
  font-size: 13px;
  color: #111;
  padding-top: 40px;
}
.relate-comments .content {
  min-height: 420px;
}
.relate-comments .content h1 {
  font-size: 26px;
  display: block;
  word-wrap: break-word;
  font-weight: bold;
  color: #494949;
  margin: 0;
  padding: 0 0 15px 0;
  line-height: 1.1;
}
.content-inner {
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
}
.article {
  width: 640px;
  padding-right: 40px;
}
.comment-list {
  margin-top: 20px;
}
.comment-item {
  padding: 20px 0;
  border-top: 1px solid #eee;
  position: relative;
}
.author-avatar {
  margin-right: 6px;
  position: absolute;
  top: -3px;
}
.main-hd {
  height: 25px;
  margin-bottom: 0;
  padding: 0;
  position: relative;
}
.main-hd .author,
.main-hd .com-grade,
.main-hd .time {
  font-size: 13px;
  margin-right: 10px;
}
.main-hd .author {
  margin-left: 30px;
  color: #37a;
}
.main-hd .com-grade {
  color: #687e96;
}
.main-hd .time {
  color: #999;
  font-weight: 300;
  margin-left: 5px;
}
.main-bd {
  margin: 5px 0 0 0;
  padding: 0;
  word-wrap: break-word;
}
.main-bd h2 {
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: normal;
}
.main-bd h2 a {
  color: #669;
}
.main-bd h2 a:hover {
  color: #ffffff;
  background-color: #37a;
}
.comment-short {
  color: #494949;
  overflow: hidden;
  word-break: break-all;
  margin: 0;
  cursor: pointer;
}
.unfold {
  color: #37a;
  font-size: 13px;
}
.unfold:hover {
  color: #ffffff;
  background-color: #37a;
}
.action {
  margin-top: 18px;
}
.action .action-btn {
  color: #37a;
  padding: 4px 6px;
  margin-right: 10px;
  border-radius: 2px;
  background-color: #f0f7f9;
  display: inline-block;
  line-height: 1;
}
.action .action-btn img {
  width: 12px;
  margin-right: 4px;
}
.action .action-btn span {
  font-size: 12px;
}
.aside {
  width: 300px;
}
.mod-ad {
  width: 300px;
  height: 250px;
  display: block;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
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
.ad-txt {
  font-size: 13px;
  color: #ffffff;
  padding: 2px 5px;
  background-color: #999;
  position: absolute;
  right: 0;
  bottom: 0;
}
.mod-r-pc {
  width: 300px;
}
.mod-reletive {
  padding-bottom: 20px;
}
.mod-hd {
  min-height: 1px;
  margin-top: 20px;
  margin-bottom: 20px;
  zoom: 1;
}
.mod-hd h2 {
  height: 24px;
  line-height: 22px;
  color: #000000;
  font-size: 21px;
  font-weight: normal;
  margin-right: 15px;
}
.pic-pack-outer {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.pic-pack-outer .pic-url {
  width: 110px;
  height: 160px;
}
.pic-pack-inner {
  height: 160px;
  padding-left: 10px;
}
.pic-pack-inner .title {
  height: 50px;
  font-weight: normal;
  overflow: hidden;
}
.pic-pack-inner .title a {
  height: auto;
  line-height: 25px;
  display: block;
  font-size: 15px;
  color: #000000;
}
.pic-pack-inner .title a:hover {
  color: rgb(207, 47, 30);
}
.pic-pack-inner .director-role {
  font-size: 13px;
  color: #999999;
  margin: 4px 0;
  display: flex;
  flex-direction: row;
}
.pic-pack-inner .director-role span:nth-child(1) {
  width: 39px;
}
.pic-pack-inner .director-role h5 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 400;
  cursor: pointer;
}
.pic-pack-inner .director-role h5:hover {
  color: rgb(207, 47, 30);
}
.pic-pack-inner .pic-jump {
  padding-top: 15px;
}
.pic-pack-inner .pic-jump .i-jump {
  height: 24px;
  line-height: 24px;
  display: inline-block;
  color: #687e94;
  font-size: 12px;
  padding-left: 20px;
  background: url("../../assets/img/icon_final.png") no-repeat;
  background-position: 0 -90px;
}
.pic-pack-inner .pic-jump .i-jump:hover {
  color: rgb(147, 166, 176);
}
</style>