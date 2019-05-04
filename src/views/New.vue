<template>
    <div class="new">
        <div class="container" id="content">
            <div class="mod mod-main">
                <div class="grid-8x">
                    <div class="mod-content">
                        <h1 class="title">{{currentNew.title}}</h1>
                        <div class="pic-base">
                            <span>时间：{{currentNew.publicTime}}</span>
                            <span class="source">来源：{{currentNew.source}}</span>
                            <span class="author" v-if="currentNew.author">作者：{{currentNew.author}}</span>
                        </div>
                        <div class="pic-content">
                            <table v-if="currentNew.picture1">
                                <tbody>
                                    <tr class="firstRow">
                                        <td>
                                            <img :src="currentNew.picture1" :style="{width:currentNew.pic1Width, height:currentNew.pic1Height}">
                                        </td>
                                    </tr>
                                    <tr v-if="currentNew.picContent1">
                                        <td>
                                            <span class="table-img-alt">{{currentNew.picContent1}}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p v-if="currentNew.picture1"><br></p>
                            <p>
                                <strong v-if="currentNew.source == '1905电影网'">1905电影网讯</strong>
                                {{currentNew.content1}}
                            </p>
                            <p v-if="currentNew.content1"><br></p>
                            <p>{{currentNew.content2}}</p>
                            <p v-if="currentNew.content2"><br></p>
                            <table v-if="currentNew.picture2">
                                <tbody>
                                    <tr class="firstRow">
                                        <td>
                                            <img :src="currentNew.picture2" :style="{width:currentNew.pic2Width, height:currentNew.pic2Height}">
                                        </td>
                                    </tr>
                                    <tr v-if="currentNew.picContent2">
                                        <td>
                                            <span class="table-img-alt">{{currentNew.picContent2}}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p v-if="currentNew.picture2"><br></p>
                            <p style="font-weight: bold;">{{currentNew.thickP1}}</p>
                            <p v-if="currentNew.thickP1"><br></p>
                            <p>{{currentNew.content3}}</p>
                            <p v-if="currentNew.content3"><br></p>
                            <p>{{currentNew.content4}}</p>
                            <p v-if="currentNew.content4"><br></p>
                            <table v-if="currentNew.picture3">
                                <tbody>
                                    <tr class="firstRow">
                                        <td>
                                            <img :src="currentNew.picture3" :style="{width:currentNew.pic3Width, height:currentNew.pic3Height}">
                                        </td>
                                    </tr>
                                    <tr v-if="currentNew.picContent3">
                                        <td>
                                            <span class="table-img-alt">{{currentNew.picContent3}}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p v-if="currentNew.picture3"><br></p>
                            <p style="font-weight: bold;">{{currentNew.thickP2}}</p>
                            <p v-if="currentNew.thickP2"><br></p>
                            <p>{{currentNew.content5}}</p>
                            <p v-if="currentNew.content5"><br></p>
                            <p>{{currentNew.content6}}</p>
                            <p v-if="currentNew.content6"><br></p>
                            <table v-if="currentNew.picture4">
                                <tbody>
                                    <tr class="firstRow">
                                        <td>
                                            <img :src="currentNew.picture4" :style="{width:currentNew.pic4Width, height:currentNew.pic4Height}">
                                        </td>
                                    </tr>
                                    <tr v-if="currentNew.picContent4">
                                        <td>
                                            <span class="table-img-alt">{{currentNew.picContent4}}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p v-if="currentNew.picture4"><br></p>
                            <p style="font-weight: bold;">{{currentNew.thickP3}}</p>
                            <p v-if="currentNew.thickP3"><br></p>
                            <p>{{currentNew.content7}}</p>
                            <p v-if="currentNew.content7"><br></p>
                            <p>{{currentNew.content8}}</p>
                            <p v-if="currentNew.content8"><br></p>
                            <table v-if="currentNew.picture5">
                                <tbody>
                                    <tr class="firstRow">
                                        <td>
                                            <img :src="currentNew.picture5" :style="{width:currentNew.pic5Width, height:currentNew.pic5Height}">
                                        </td>
                                    </tr>
                                    <tr v-if="currentNew.picContent5">
                                        <td>
                                            <span class="table-img-alt">{{currentNew.picContent5}}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <p v-if="currentNew.picture5"><br></p>
                            <p style="font-weight: bold;">{{currentNew.thickP4}}</p>
                            <p v-if="currentNew.thickP4"><br></p>
                            <p>{{currentNew.content9}}</p>
                            <p v-if="currentNew.content9"><br></p>
                            <p>{{currentNew.content10}}</p>
                            <p v-if="currentNew.content10"><br></p>
                            <p>{{currentNew.content11}}</p>
                            <p v-if="currentNew.content11"><br></p>
                        </div>
                        <div class="pic-author" v-if="currentNew.author">
                            <span class="author-name">文/{{currentNew.author}}</span>
                        </div>
                        <div class="pic-other">
                            <div class="rel-label">
                                <span>标签：</span>
                                <span class="label-con" v-for="(lab, index) in currentNew.label" :key="index">{{lab}}</span>
                            </div>
                        </div>
                    </div>
                    <p>
                        <img src="http://static.m1905.cn/images/news/1905news_tglogo.gif" alt="">
                    </p>
                    <div class="backflow-nav">
                        <div>
                            <a href="/movie-news" target="_blank" class="ico-fianl">电影资讯首页</a>
                        </div>
                    </div>
                </div>
                <div class="grid-4x">
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
                    <div class="mod-box-office">
                        <div class="mod-hd">
                            <h2>最新资讯</h2>
                            <a href="/movie-news" target="_blank" class="more">去新闻频道</a>
                        </div>
                        <div class="mod-bd">
                            <ul class="pic-pack-out">
                                <li v-for="(news,index) in mostNewNews" :key="index" v-if="index == 0">
                                    <a :href="getNewHref(news._id)" target="_blank" class="img-url" :title="news.title">
                                        <img :src="news.coverPicture" :alt="news.title" class="hvr-glow">
                                        <div class="office-spec">
                                            <span class="num top">{{index + 1}}</span>
                                            <span class="title">{{news.title}}</span>
                                        </div>
                                    </a>
                                </li>
                                <li class="office" v-else>
                                    <span class="num" :class="{top: index < 3}">{{index + 1}}</span>
                                    <a :href="getNewHref(news._id)" target="_blank" class="title" :title="news.title">{{news.title}}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mod-exclusive">
                        <div class="mod-hd">
                            <h2>独家专访</h2>
                            <a href="/movie-news" target="_blank" class="more">更多</a>
                        </div>
                        <div class="mod-bd">
                            <div class="mod-placehoder mb20">
                                <a href="/new?5cb9533b81a632ca13006f90" target="_blank" class="pic-url">
                                    <img src="http://image14.m1905.cn/uploadfile/2019/0329/thumb_1_300_150_20190329095031874059.jpg" width="300" height="150">
                                    <span class="pic-title">
                                        <span>导演亲述！反转烧脑的《海市蜃楼》是这样炼成的</span>
                                    </span>
                                </a>
                            </div>
                            <div class="mod-placehoder">
                                <a href="/new?5cb9566f81a632ca13007071" target="_blank" class="pic-url">
                                    <img src="http://image11.m1905.cn/uploadfile/2019/0328/thumb_1_300_150_20190328095433937019.jpg" width="300" height="150">
                                    <span class="pic-title">
                                        <span>疯狂在朋友圈营销的王小帅，真的不在乎票房吗？</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/libs/jquery.min.js";
import "../assets/libs/purl.min.js";
import 'hover.css/css/hover-min.css'
export default {
  name: "New",
  data() {
    return {
      currentNew: {},
      relateMovieTitle: "",
      relateMovie: {
          actors: []
      },
      mostNewNews: []
    };
  },
  created() {
    this.getCurrentNew();
    this.getMostNewNews();
  },
  methods: {
    getCurrentNew() {
      var vm = this;
      var id = purl().data.attr.query;
      // console.log(id);
      this.axios
        .get("/api/news/getCurrentNew", { params: { id: id } })
        .then(function(res) {
          if (res.data.code == 200) {
            vm.currentNew = res.data.currentNew;
            vm.relateMovieTitle = vm.currentNew.movieTitle;
            vm.axios
              .get("/api/movies/getRelateMovie", {
                params: { title: vm.relateMovieTitle }
              })
              .then(function(res) {
                if (res.data.code == 200) {
                  vm.relateMovie = res.data.relateMovie;
                  vm.actors = vm.relateMovie.actors;
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
    getMostNewNews() {
      var vm = this;
      this.axios
        .get(`/api/news/getMostNewNews`)
        .then(function(res) {
          if (res.data.code == 200) {
            vm.mostNewNews = res.data.mostNewNews;
            console.log(vm.mostNewNews);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNewHref(val){
      return 'http://localhost:8080/new?'+val;
    }
  }
};
</script>

<style scoped>
.new {
  width: 100%;
  color: #333;
  font-family: "Microsoft Yahei", Helvetica, Arial, sans-serif;
  font-size: 1.2rem;
  line-height: 1.5em;
  background: #ffffff;
  padding-top: 0 !important;
}
#content {
  width: 1000px;
  font-family: "Microsoft Yahei";
  margin-bottom: 30px;
}
.container {
  padding: 0 10px;
  margin: 0 auto;
}
.mod {
  zoom: 1;
  margin-left: -10px;
  margin-right: -10px;
  display: flex;
  flex-direction: row;
}
.mod-main {
  padding-top: 24px;
}
.grid-8x {
  width: 660px;
}
.grid-4x {
  width: 320px;
}
.grid-4x,
.grid-8x {
  position: relative;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
}
.mod-content .title {
  line-height: 1;
  font-size: 29px;
  color: #000000;
  font-weight: normal;
  text-align: left;
  padding-top: 24px;
}
.pic-base {
  height: 16px;
  margin-bottom: 15px;
  margin-top: 18px;
}
.pic-base span {
  width: auto;
  height: 16px;
  line-height: 16px;
  display: inline-block;
  color: #687e94;
  font-size: 13px;
  margin-right: 25px;
}
.pic-content {
  font-size: 17px;
  line-height: 35px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.mod-content .pic-content table {
  width: 100%;
  text-align: center;
}
.pic-content table,
.pic-content table a,
.pic-content table span {
  font-size: 13px;
  padding: 0;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td {
  margin: 0;
  padding: 0;
  display: table-cell;
  vertical-align: inherit;
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
.pic-author {
  margin-top: 8px;
  position: relative;
}
.pic-author,
.pic-other {
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
  padding-bottom: 30px;
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
  background: url("../assets/img/右箭头.png") no-repeat;
  background-size: 20px 20px;
  background-position: 0 10px;
}
.backflow-nav div a:hover {
  color: #687e94;
  background: url("../assets/img/右箭头-1.png") no-repeat;
  background-size: 20px 20px;
  background-position: 0 10px;
}
.mod-r-pc{
    width: 300px;
    padding-left: 20px;
}
.mod-reletive{
    padding-bottom: 20px;
}
.mod-hd{
    min-height: 1px;
    margin-top: 20px;
    margin-bottom: 20px;
    zoom: 1;
}
.mod-hd h2{
    height: 24px;
    line-height: 22px;
    color: #000000;
    font-size: 21px;
    font-weight: normal;
    margin-right: 15px;
}
.pic-pack-outer{
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: row;
}
.pic-pack-outer .pic-url{
    width: 110px;
    height: 160px;
}
.pic-pack-inner{
    height: 160px;
    padding-left: 10px;
}
.pic-pack-inner .title{
    height: 50px;
    font-weight: normal;
    overflow: hidden;
}
.pic-pack-inner .title a{
    height: auto;
    line-height: 25px;
    display: block;
    font-size: 15px;
    color: #000000;
}
.pic-pack-inner .title a:hover{
    color: rgb(207, 47, 30);
}
.pic-pack-inner .director-role{
    /* width: 180px; */
    font-size: 13px;
    color: #999999;
    display: flex;
    flex-direction: row;
}
.pic-pack-inner .director-role span:nth-child(1){
    width: 39px;
}
.pic-pack-inner .director-role h5{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 400;
    cursor: pointer;
}
.pic-pack-inner .director-role h5:hover{
    color: rgb(207, 47, 30);
}
.pic-pack-inner .pic-jump{
    padding-top: 15px;
}
.pic-pack-inner .pic-jump .i-jump{
    height: 24px;
    line-height: 24px;
    display: inline-block;
    color: #687e94;
    font-size: 12px;
    padding-left: 20px;
    background: url("../assets/img/icon_final.png") no-repeat;
    background-position: 0 -90px;
}
.pic-pack-inner .pic-jump .i-jump:hover{
    color: rgb(147, 166, 176);
}
.mod-box-office{
    width: 300px;
    padding-bottom: 10px;
    padding-left: 20px;
}
.mod-box-office .mod-hd{
    display: flex;
    flex-direction: row;
    position: relative;
}
.mod-hd .more{
    color: #999999;
    font-size: 13px;
    position: absolute;
    right: 0;
}
.mod-hd .more:hover{
    color: rgb(207, 47, 30);
}
.pic-pack-out li:nth-child(1){
    height: 150px;
    overflow: hidden;
    margin-bottom: 7px;
}
.pic-pack-out li:nth-child(1) .img-url{
    height: 150px;
    display: block;
    position: relative;
}
.pic-pack-out li:nth-child(1) .office-spec{
    width: 100%;
    height: 30px;
    background: rgba(0, 0, 0, 0.8);
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: row;
}
.pic-pack-out .num, .pic-pack-out .title{
    height: 30px;
    display: inline-block;
    overflow: hidden;
}
.pic-pack-out .office-spec .num{
    width: 17px;
    line-height: 30px;
    color: #ffffff;
    font-size: 21px;
    text-align: center;
    font-family: Arial;
    background-color: #cf2f1e;
    position: absolute;
    top: 0;
    left: 0;
}
.pic-pack-out .office-spec .title{
    line-height: 30px;
    color: #ffffff;
    font-size: 15px;
    padding-left: 22px;
}
.pic-pack-out .office{
    height: 25px;
    overflow: hidden;
    padding: 4px 0 3px;
    position: relative;
}
.pic-pack-out .office .num{
    width: 20px;
    height: 25px;
    line-height: 25px;
    font-size: 19px;
    text-align: center;
    font-family: Arial;
    position: absolute;
    top: 4px;
    left: 0;
}
.pic-pack-out .office .top{
    color: #cf2f1e;
}
.pic-pack-out .office .title{
    height: 25px;
    line-height: 25px;
    padding-left: 23px;
    font-size: 13px;
    color: #000000;
}
.pic-pack-out .office .title:hover{
    color: rgb(207, 47, 30);
}
.mod-exclusive{
    width: 300px;
    padding-bottom: 20px;
    padding-left: 20px;
}
.mod-exclusive .mod-hd{
    display: flex;
    flex-direction: row;
}
.mb20{
    margin-bottom: 20px;
}
.mod-placehoder .pic-url{
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    color: #ffffff;
}
.mod-placehoder .pic-url img{
    width: 100%;
}
.mod-placehoder .pic-url .pic-title{
    width: 100%;
    height: 30px;
    line-height: 30px;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 15px;
    display: block;
    background: rgba(0, 0, 0, 0.8);
}
.mod-placehoder .pic-url .pic-title span{
    line-height: 20px;
    color: #ffffff;
    display: block;
    position: relative;
    overflow: hidden;
    padding: 5px 10px 0 10px;
}
.mod-exclusive .pic-url .pic-title span{
    height: 20px;
}
.mod-exclusive .pic-url .pic-title:hover{
    animation: bottom20 1s;
    animation-duration: 1s;
    animation-iteration-count: 1;
}
@keyframes bottom20{
    0% { bottom: 0px; height: 30px;}
    100% { bottom: 0px; height: 50px;}
}
.mod-exclusive .pic-url .pic-title span:hover{
    animation: height40 1s;
    animation-duration: 1s;
    animation-iteration-count: 1;
}
@keyframes height40{
    0% { height: 30px;}
    100% { height: 50px;}
}
</style>