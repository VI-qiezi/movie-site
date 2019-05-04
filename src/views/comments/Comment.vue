<template>
    <div class="comment">
        <div id="content">
            <div class="article">
                <h1 class="title">{{currentComment.title}}</h1>
                <div class="pic-base">
                    <a href="javascript:void(0);" class="author-avatar">
                        <img src="../../assets/img/头像.png" width="24" height="24">
                    </a>
                    <header class="main-hd">
                        <span>{{currentComment.author}}</span>
                        评论
                        <a href="" target="_blank">{{currentComment.movieName}}</a>
                        {{currentComment.publicTime}}
                    </header>
                </div>
                <div class="pic-content">
                    <table v-if="currentComment.picture1">
                        <tbody>
                            <tr class="firstRow">
                                <td>
                                    <img :src="currentComment.picture1" :style="{width:currentComment.pic1Width, height:currentComment.pic1Height}">
                                </td>
                            </tr>
                            <tr v-if="currentComment.picContent1">
                                <td>
                                    <span class="table-img-alt">{{currentComment.picContent1}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-if="currentComment.picture1"><br></p>
                    <p style="font-weight: bold;">{{currentComment.thickP1}}</p>
                    <p v-if="currentComment.thickP1"><br></p>
                    <p>
                        {{currentComment.content1}}
                    </p>
                    <p v-if="currentComment.content1"><br></p>
                    <p>{{currentComment.content2}}</p>
                    <p v-if="currentComment.content2"><br></p>
                    <table v-if="currentComment.picture2">
                        <tbody>
                            <tr class="firstRow">
                                <td>
                                    <img :src="currentComment.picture2" :style="{width:currentComment.pic2Width, height:currentComment.pic2Height}">
                                </td>
                            </tr>
                            <tr v-if="currentComment.picContent2">
                                <td>
                                    <span class="table-img-alt">{{currentComment.picContent2}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-if="currentComment.picture2"><br></p>
                    <p style="font-weight: bold;">{{currentComment.thickP2}}</p>
                    <p v-if="currentComment.thickP2"><br></p>
                    <p>{{currentComment.content3}}</p>
                    <p v-if="currentComment.content3"><br></p>
                    <p>{{currentComment.content4}}</p>
                    <p v-if="currentComment.content4"><br></p>
                    <table v-if="currentComment.picture3">
                        <tbody>
                            <tr class="firstRow">
                                <td>
                                    <img :src="currentComment.picture3" :style="{width:currentComment.pic3Width, height:currentComment.pic3Height}">
                                </td>
                            </tr>
                            <tr v-if="currentComment.picContent3">
                                <td>
                                    <span class="table-img-alt">{{currentComment.picContent3}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-if="currentComment.picture3"><br></p>
                    <p style="font-weight: bold;">{{currentComment.thickP3}}</p>
                    <p v-if="currentComment.thickP3"><br></p>
                    <p>{{currentComment.content5}}</p>
                    <p v-if="currentComment.content5"><br></p>
                    <p>{{currentComment.content6}}</p>
                    <p v-if="currentComment.content6"><br></p>
                    <table v-if="currentComment.picture4">
                        <tbody>
                            <tr class="firstRow">
                                <td>
                                    <img :src="currentComment.picture4" :style="{width:currentComment.pic4Width, height:currentComment.pic4Height}">
                                </td>
                            </tr>
                            <tr v-if="currentComment.picContent4">
                                <td>
                                    <span class="table-img-alt">{{currentComment.picContent4}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-if="currentComment.picture4"><br></p>
                    <p style="font-weight: bold;">{{currentComment.thickP4}}</p>
                    <p v-if="currentComment.thickP4"><br></p>
                    <p>{{currentComment.content7}}</p>
                    <p v-if="currentComment.content7"><br></p>
                    <p>{{currentComment.content8}}</p>
                    <p v-if="currentComment.content8"><br></p>
                    <table v-if="currentComment.picture5">
                        <tbody>
                            <tr class="firstRow">
                                <td>
                                    <img :src="currentComment.picture5" :style="{width:currentComment.pic5Width, height:currentComment.pic5Height}">
                                </td>
                            </tr>
                            <tr v-if="currentComment.picContent5">
                                <td>
                                    <span class="table-img-alt">{{currentComment.picContent5}}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p v-if="currentComment.picture5"><br></p>
                    <p style="font-weight: bold;">{{currentComment.thickP5}}</p>
                    <p v-if="currentComment.thickP5"><br></p>
                    <p>{{currentComment.content9}}</p>
                    <p v-if="currentComment.content9"><br></p>
                    <p>{{currentComment.content10}}</p>
                    <p v-if="currentComment.content10"><br></p>
                    <p>{{currentComment.content11}}</p>
                    <p v-if="currentComment.content11"><br></p>
                    <p>{{currentComment.content12}}</p>
                    <p v-if="currentComment.content12"><br></p>
                    <p>{{currentComment.content13}}</p>
                    <p v-if="currentComment.content13"><br></p>
                    <p>{{currentComment.content14}}</p>
                    <p v-if="currentComment.content14"><br></p>
                    <p>{{currentComment.content15}}</p>
                    <p v-if="currentComment.content15"><br></p>
                </div>
                <div class="pic-author" v-if="currentComment.author">
                    <span class="author-name">文/{{currentComment.author}}</span>
                </div>
                <div class="pic-other">
                    <div class="rel-label">
                        <span>标签：</span>
                        <span class="label-con" v-for="(lab, index) in currentComment.label" :key="index">{{lab}}</span>
                    </div>
                </div>
                <p>
                    <img src="http://static.m1905.cn/images/news/1905news_tglogo.gif" alt="">
                </p>
                <div class="backflow-nav">
                    <div>
                        <a href="/movie-comments" target="_blank" class="ico-fianl">更多影评</a>
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
                <div class="more-comments">
                    <h2 class="more-comments-hd">
                        更多{{relateMovieTitle}}的影评 · · · · · ·
                    </h2>
                    <div class="more-comments-bd">
                        <ul class="comment-list">
                            <li v-for="rel in relateComments" :key="rel._id">
                                <h3 class="comment-title">
                                    <a :href="getNewHref(rel._id)">{{rel.title}}</a>
                                </h3>
                                <span class="comment-author">{{rel.author}}</span>
                                评分：<span class="comment-grade">{{rel.grade}}星</span>
                            </li>
                        </ul>
                          > 
                        <a href="javascript:void(0);" class="total-comment" @click="movieComments">查看全部{{relateCommentsTotal}}篇影评</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../../assets/libs/jquery.min.js";
import "../../assets/libs/purl.min.js";
import "hover.css/css/hover-min.css";
export default {
  name: "Comment",
  data() {
    return {
      currentComment: {},
      relateMovieTitle: "",
      relateMovie: {
        actors: []
      },
      relateComments: {},
      relateCommentsTotal: ""
    };
  },
  created() {
    this.getCurrentComment();
  },
  methods: {
    getCurrentComment() {
      var vm = this;
      var id = purl().data.attr.query;
      //   console.log(id);
      this.axios
        .get("/api/comments/getCurrentComment", { params: { id: id } })
        .then(function(res) {
          if (res.data.code == 200) {
            vm.currentComment = res.data.currentComment;
            // console.log(vm.currentComment);
            vm.relateMovieTitle = vm.currentComment.movieName;
            // console.log(vm.relateMovieTitle)
            vm.axios
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
            vm.axios
              .get("/api/comments/getRelateComments", {
                params: { movieName: vm.relateMovieTitle }
              })
              .then(function(res) {
                if (res.data.code == 200) {
                  var data = res.data.relateComments;
                  vm.relateComments = data.slice(1,4);
                //   console.log(vm.relateComments);
                  vm.relateCommentsTotal = res.data.relateCommentsTotal;
                }
              })
              .catch(function(err) {
                console.log(err);
              });
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNewHref(val) {
      return "http://localhost:8080/comment?" + val;
    },
    movieComments(){
        this.$router.push({
            path: "/relate-comments",
            query: {
                movieName: this.relateMovieTitle
            }
        })
    }
  }
};
</script>

<style scoped>
.comment {
  width: 1040px;
  margin: 0 auto;
  color: #111;
  font-size: 13px;
  font-family: "Microsoft Yahei", Helvetica, Arial, sans-serif;
  line-height: 1.5em;
  padding-top: 40px;
  padding-bottom: 40px;
}
#content {
  min-width: 420px;
  display: flex;
  flex-direction: row;
}
.article {
  width: 695px;
  padding-right: 20px;
}
.article .title {
  line-height: 1;
  font-size: 29px;
  color: #000000;
  font-weight: normal;
  text-align: left;
}
.pic-base {
  height: 16px;
  margin-bottom: 18px;
  margin-top: 18px;
  display: flex;
  flex-direction: row;
}
.author-avatar {
  margin-right: 6px;
}
.main-hd {
  margin-top: 4px;
  color: #999;
  font-size: 13px;
}
.main-hd a,
.main-hd span {
  color: #666999;
  cursor: pointer;
}
.main-hd a {
  margin-right: 20px;
}
.main-hd a:hover {
  color: #ffffff;
  background-color: #37a;
}
.pic-content {
  font-size: 17px;
  line-height: 35px;
}
.article .pic-content table {
  width: 100%;
  text-align: center;
}
.pic-content table,
.pic-content table a,
.pic-content table span {
  font-size: 13px;
  padding: 0;
}
.pic-content img {
  width: 100%;
  height: auto;
}
.pic-content table span.table-img-alt {
  font-size: 17px;
}
img {
  vertical-align: top;
}
.firstRow td {
  text-align: center;
  border-color: #ffffff;
}
.pic-content tr:nth-child(2) td {
  text-align: center;
  font-weight: bolder;
  border-color: #ffffff;
}
.pic-content p {
  font-size: 17px;
  line-height: 35px;
  text-indent: 2em;
  text-align: left;
}
.pic-author,
.pic-other {
  margin-top: 8px;
  position: relative;
  height: 16px;
  color: #687e94;
}
.pic-author .author-name {
  height: 16px;
  line-height: 16px;
  font-size: 15px;
  display: inline-block;
  position: absolute;
  right: 0;
}
.pic-other {
  margin-top: 27px;
}
.pic-other .rel-label {
  width: 430px;
  line-height: 16px;
  overflow: hidden;
}
.pic-other .rel-label span {
  height: 16px;
  line-height: 16px;
  font-size: 13px;
  display: inline-block;
}
.pic-other .rel-label .label-con {
  color: #ffffff;
  background-color: #127cb4;
  margin-right: 11px;
  padding: 0 4px;
  cursor: pointer;
}
.pic-other .rel-label .label-con:hover {
  background-color: rgb(32, 146, 207);
}
.backflow-nav {
  height: 40px;
  text-align: center;
  margin-top: 50px;
  padding-bottom: 20px;
}
.backflow-nav div {
  width: 171px;
  height: 38px;
  margin: 0 auto;
  background-color: #fafafa;
  border: 1px solid #e0e0e0;
}
.backflow-nav div a {
  height: 38px;
  line-height: 38px;
  display: inline-block;
  color: #333;
  font-size: 15px;
  padding-left: 25px;
  background: url("../../assets/img/右箭头.png") no-repeat;
  background-size: 20px 20px;
  background-position: 0 10px;
}
.backflow-nav div a:hover {
  color: #687e94;
  background: url("../../assets/img/右箭头-1.png") no-repeat;
  background-size: 20px 20px;
  background-position: 0 10px;
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
.more-comments {
  width: 300px;
  margin: 20px 0 0 0;
}
.more-comments-hd {
  color: #072;
  font-size: 16px;
  font-weight: normal;
  margin-bottom: 10px;
}
.more-comments-bd {
  margin-top: 16px;
  margin-bottom: 30px;
}
.comment-list {
  margin-top: 20px;
  color: #999;
}
.comment-list li {
  margin: 16px 0;
}
.comment-title {
  background-color: #ffffff;
  margin-bottom: 6px;
  line-height: 1.2;
}
.comment-title a {
  color: #666699;
  font-size: 15px;
  font-weight: normal;
}
.comment-title a:hover {
  color: #ffffff;
  background-color: #127cb4;
}
.comment-author {
  color: #999;
  margin-right: 6px;
}
.comment-grade {
  color: #687e96;
  font-size: 14px;
}
.total-comment {
  color: #669;
}
</style>
