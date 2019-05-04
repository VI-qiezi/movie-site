<template>
    <div class="layout-wrapper" id="movieComments">
        <div class="layout movieComments">
            <h3 class="movieComments-title">电影评论</h3>
            <div class="movieComments-conts">
                <div class="movieComments-conts-item">
                    <div class="conts-item-top">
                        <a :href="getNewHref(leftComment._id)" class="item-top-img picHover" :title="leftComment.title" target="_blank">
                            <img :src="leftComment.coverPicture" :alt="leftComment.title" class="hvr-glow">
                        </a>
                    </div>
                    <div class="conts-item-bottom">
                        <div class="item-bottom-bot">
                            <h3><a :href="getNewHref(leftComment._id)" target="_blank">{{leftComment.title}}</a></h3>
                            <div class="bottom-bot-conts">
                                <span class="i-quotes"></span>
                                <em>{{leftComment.coverAbstract}}</em>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="movieComments-conts-middle">
                    <div class="conts-middle">
                        <div class="middle-inner-list" v-for="hot in hotComments" :key="hot._id">
                            <a :href="getNewHref(hot._id)" class="inner-list-left picHover" :title="hot.title" target="_blank">
                                <img :src="hot.coverPicture" :alt="hot.title" class="hvr-glow">
                            </a>
                            <div class="inner-list-right">
                                <h3 class="list-right-title">
                                    <a :href="getNewHref(hot._id)" target="_blank">{{hot.title}}</a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="movieComments-conts-right">
                    <a :href="getNewHref(rightComment._id)" class="conts-right-img picHover" target="_blank" :title="rightComment.title">
                        <img :src="rightComment.coverPicture" :alt="rightComment.title" class="hvr-glow">
                    </a>
                    <div class="conts-right-bottom">
                        <div class="right-bottom-inner">
                            <h3 class="bottom-inner-title">
                                <a :href="getNewHref(rightComment._id)" target="_blank" :title="rightComment.title">{{rightComment.title}}</a>
                            </h3>
                            <p class="bottom-inner-conts">
                                <span class="i-bot-quotes"></span>
                                <em>{{rightComment.coverAbstract}}</em>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="buttonRadiusMore">
                <a href="/movie-comments" class="buttonRadiusMore-btn">查看更多</a>
            </div>
        </div>
    </div>
</template>

<script>
import "../../assets/libs/jquery.min.js";
import "hover.css/css/hover-min.css";
export default {
  name: "MovieComments",
  data() {
    return {
      leftComment: [],
      hotComments: [],
      rightComment: []
    };
  },
  created() {
    this.getLeftComment();
    this.getHotComments();
    this.getRightComments();
  },
  methods: {
    getLeftComment() {
      var vm = this;
      this.axios
        .get("/api/comments/getLeftComment")
        .then(function(res) {
          if (res.data.code == 200) {
            vm.leftComment = res.data.leftComment[0];
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getHotComments() {
      var vm = this;
      this.axios
        .get("/api/comments/getHotComments")
        .then(function(res) {
          if (res.data.code == 200) {
            var data = res.data.hotComments;
            if (data.length >= 3) {
              vm.hotComments = data.slice(0, 3);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getRightComments() {
      var vm = this;
      this.axios
        .get("/api/comments/getRightComments")
        .then(function(res) {
          if (res.data.code == 200) {
            vm.rightComment = res.data.rightComment[0];
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
.layout-wrapper {
  min-width: 980px;
}
#movieComments {
  background-color: #f5f5f5;
}
.layout {
  width: 980px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 50px;
}
#movieComments {
  padding-top: 10px;
  font-family: "Microsoft Yahei";
}
.movieComments * {
  margin: 0;
  padding: 0;
}
.movieComments-title {
  height: 110px;
  font: 30px/110px "Microsoft Yahei";
  text-align: center;
}
.movieComments-conts {
  display: flex;
  flex-direction: row;
}
.movieComments-conts-item {
  width: 458px;
  background-color: #ffffff;
  margin-right: 30px;
}
.conts-item-top {
  width: 458px;
  height: 239px;
  position: relative;
}
.item-top-img {
  width: 458px;
  height: 239px;
  display: inline-block;
  position: relative;
}
.item-top-img img {
  width: 100%;
  height: 100%;
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
.conts-item-bottom {
  padding: 0 27px 61px;
}
.item-bottom-bot h3 {
  font-size: 18px;
  margin-top: 23px;
  margin-bottom: 23px;
  font-weight: normal;
}
.item-bottom-bot h3 a {
  color: #000000;
}
.item-bottom-bot h3 a:hover {
  color: rgb(34, 103, 173);
}
.i-quotes {
  width: 26px;
  height: 23px;
  display: inline-block;
  background: url("../../assets/img/homeico.png") no-repeat;
  background-position: -230px 0;
  margin-right: 8px;
}
.bottom-bot-conts em {
  height: 45px;
  font: 14px/26px "Microsoft Yahei";
  color: #333333;
}
.movieComments-conts-middle {
  width: 190px;
  height: 468px;
  margin-right: 30px;
}
.middle-inner-list {
  width: 190px;
  margin-bottom: 10px;
}
.inner-list-left {
  width: 190px;
  height: 105px;
  margin-bottom: 8px;
  margin-top: 0;
  display: inline-block;
}
.inner-list-left img {
  width: 100%;
  height: 100%;
}
.inner-list-right {
  width: 190px;
}
.list-right-title {
  font: 14px/18px "Microsoft Yahei";
  margin-bottom: 0;
}
.list-right-title a {
  color: #000000;
}
.list-right-title a:hover {
  color: rgb(34, 103, 173);
}
.movieComments-conts-right {
  width: 272px;
}
.conts-right-img {
  width: 272px;
  height: 304px;
  display: inline-block;
}
.conts-right-img img {
  width: 100%;
  height: 100%;
}
.conts-right-bottom {
  background-color: #ffffff;
  padding: 5px 14px 30px 20px;
}
.bottom-inner-title {
  font: 16px/47px "Microsoft Yahei";
  text-align: center;
}
.bottom-inner-title a {
  color: #000000;
}
.bottom-inner-title a:hover {
  color: rgb(34, 103, 173);
}
.i-bot-quotes {
  width: 26px;
  height: 23px;
  display: inline-block;
  background: url("../../assets/img/homeico.png") no-repeat;
  background-position: -230px 0;
  margin-right: 11px;
}
.bottom-inner-conts em {
  font: 15px/26px "Microsoft Yahei";
  color: #333333;
  font-style: normal;
}
.buttonRadiusMore {
  width: 158px;
  margin: 40px auto 0;
  padding: 0;
}
.buttonRadiusMore-btn {
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
.buttonRadiusMore-btn:hover {
  color: #ffffff;
  background-color: rgb(95, 127, 175);
  border: 1px solid rgb(95, 127, 175);
}
</style>