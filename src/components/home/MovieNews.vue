// 电影资讯
<template>
    <div class="layout-wrapper" style="margin-top: 23px;">
        <div class="layout">
            <div class="frame news">
                <div class="news-roomImportant frame-room">
                    <div class="news-title">
                        <span>要闻</span>
                    </div>
                    <div class="news-special clearfix">
                        <h5 class="title-importantFocus">
                            <a :href="getNewHref(specialNew._id)" target="_blank">{{specialNew.title}}</a>
                        </h5>
                        <a :href="getNewHref(specialNew._id)"  target="_blank" :title="specialNew.title" class="picHover">
                            <img :src="specialNew.coverPicture" :alt="specialNew.title" class="news-specialPic hvr-glow" width="210px" height="185px">
                        </a>
                        <p class="context-importantFocus">{{specialNew.briefContent}}</p>
                    </div>
                    <ul class="news-importantList">
                        <li class="news-importantItem" v-for="(imp, index) in importantNews" :key="index" @mouseover="textOver(imp)"  @mouseout="textOut(imp)">
                            <a :href="getNewHref(imp._id)" target="_blank">
                                <span class="title-importantClassify" :class="{'active':imp.active == true}">{{imp.importantType}}</span>
                                <h6 class="title-important" :class="{'active':imp.active == true}">{{imp.title}}</h6>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="news-roomFast frame-room">
                    <div class="news-title">
                        <span>快讯</span>
                    </div>
                    <ul v-for="(fast,index) in fastNews" :key="index">
                        <li v-for="(f,i) in fast" :key="f._id">
                            <h6 class="title-fast" :class="{'title-fastFocus': i==0}">
                                <a :href="getNewHref(f._id)" target="_blank">{{f.title}}</a>
                            </h6>
                        </li>
                    </ul>
                </div>
                <div class="news-roomDeep frame-room">
                    <div class="news-title">
                        <span>深度</span>
                    </div>
                    <figure class="news-deepItem" v-for="deep in deepNews" :key="deep._id">
                        <div class="news-deepPic picHover">
                            <a :href="getNewHref(deep._id)" target="_blank" :title="deep.title">
                                <img class="hvr-glow" :src="deep.coverPicture" :alt="deep.title" width="176px" height="110px">
                            </a>
                        </div>
                        <figcaption class="news-deepDesc">
                            <h5 class="title-deep">
                                <a :href="getNewHref(deep._id)" target="_blank">{{deep.title}}</a>
                            </h5>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div class="buttonRadiusMore">
                <a href="/movie-news"  class="buttonRadiusMore-btn">更多新闻</a>
            </div>
        </div>
    </div>
</template>

<script>
import "../../assets/libs/jquery.min.js";
import "hover.css/css/hover-min.css";
export default {
  name: "MovieNews",
  data() {
    return {
      specialNew: {},
      importantNews: [],
      active: false,
      fastNews: [],
      deepNews: []
    };
  },
  created() {
    this.getSpecialNew();
    this.getImportantNews();
    this.getFastNews();
    this.getDeepNews();
  },
  methods: {
    getSpecialNew() {
      var vm = this;
      this.axios
        .get("/api/news/getSpecialNew")
        .then(function(res) {
          if (res.data.code == 200) {
            vm.specialNew = res.data.specialNew;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getImportantNews() {
      var vm = this;
      this.axios
        .get("/api/news/getImportantNews")
        .then(function(res) {
          if (res.data.code == 200) {
            vm.importantNews = res.data.importantNews;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    textOver: function(imp) {
      var vm = this;
      this.$nextTick(function() {
        this.importantNews.forEach(function(imp) {
          vm.$set(imp, "active", false);
        });
        this.$set(imp, "active", true);
      });
    },
    textOut: function(imp) {
      this.$set(imp, "active", false);
    },
    getFastNews: function() {
      var vm = this;
      this.axios
        .get("/api/news/getFastNews")
        .then(function(res) {
          if (res.data.code == 200) {
            var data = res.data.FastNewsList;
            var len = data.length;
            if (len >= 12) {
              var group1 = data.slice(0, 4);
              var group2 = data.slice(4, 8);
              var group3 = data.slice(8, 12);
              vm.fastNews = [group1, group2, group3];
              // console.log(vm.fastNews);
            }
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getDeepNews: function() {
      var vm = this;
      this.axios
        .get("/api/news/getDeepNews")
        .then(function(res) {
          if (res.data.code == 200) {
            vm.deepNews = res.data.DeepNewsList;
            // console.log(vm.deepNews);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNewHref(val) {
      return "http://localhost:8080/new?" + val;
    }
  }
};
</script>

<style scoped>
.layout-wrapper {
  background-color: #ffffff;
  overflow: hidden;
}
.layout {
  width: 980px;
  margin: 0 auto;
  padding-bottom: 50px;
}
.frame {
  width: 100%;
  position: relative;
}
.news {
  margin: 0 0 -5px;
  display: flex;
  flex-direction: row;
}
.news-roomImportant {
  width: 396px;
  height: auto;
}
.news-title {
  width: 100%;
  height: 46px;
  overflow: hidden;
  border-bottom: 2px solid #e8e8e8;
}
.news-title span {
  width: 48px;
  height: 46px;
  line-height: 46px;
  padding: 0;
  margin: 0;
  font-size: 24px;
  color: #000000;
  font-weight: normal;
  display: inline-block;
  position: absolute;
  top: 0;
  border-bottom: 2px solid #000000;
  z-index: 2;
}
.news-special {
  overflow: hidden;
}
.title-importantFocus {
  height: 56px;
  line-height: 28px;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  padding: 15px 0 10px 0;
}
.title-importantFocus a {
  color: black;
}
.title-importantFocus a:hover {
  color: rgb(34, 103, 173);
}
.news-specialPic {
  width: 183px;
  height: 161px;
  float: left;
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
.context-importantFocus {
  width: 201px;
  height: 144px;
  line-height: 24px;
  text-overflow: ellipsis;
  float: right;
  font-size: 14px;
  color: #888888;
  margin: 0;
}
.news-importantList {
  margin-top: 27px;
  clear: left;
  padding: 0;
  margin: 25px 0 0;
}
.news-importantItem {
  height: 42px;
  overflow: hidden;
  vertical-align: top;
}
.news-importantItem + .news-importantItem {
  border-top: 1px solid #e6e6e6;
}
.news-importantItem a {
  display: flex;
  flex-direction: row;
}
.title-importantClassify {
  height: 14px;
  color: #888888;
  font-size: 13px;
  line-height: 14px;
  font-weight: normal;
  padding: 0 9px 0 0;
  margin: 17px 0 12px;
  display: inline-block;
  border-right: 1px solid #cccccc;
  cursor: pointer;
}
.title-importantClassify.active {
  color: rgb(34, 103, 173);
}
.title-important {
  height: 14px;
  line-height: 14px;
  color: #333333;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
  padding: 17px 0 12px 9px;
}
.title-important.active {
  color: rgb(34, 103, 173);
}
.news .frame-room + .frame-room {
  margin-left: 20px;
}
.news-roomFast {
  width: 366px;
  height: auto;
  overflow: hidden;
}
.news-roomFast ul {
  margin: 0;
  padding: 0;
}
.title-fast {
  width: 100%;
  white-space: nowrap;
  height: 15px;
  line-height: 15px;
  color: #333333;
  font-size: 14px;
  font-weight: normal;
  margin: 0;
  padding: 10px 0 10px 0;
}
.title-fast a {
  width: 360px;
  display: inline-block;
  overflow: hidden;
  color: #333333;
  outline: none;
}
.title-fast a:hover {
  color: rgb(34, 103, 173);
}
.title-fastFocus {
  height: 17px;
  line-height: 17px;
  color: #8c4c30;
  font-size: 16px;
  font-weight: normal;
  margin: 0;
  padding: 24px 0 14px 0;
  white-space: nowrap;
}
.title-fastFocus a {
  width: 360px;
  color: #8c4c30;
  outline: none;
}
.title-fastFocus a:hover {
  color: rgb(34, 103, 173);
}
.news-roomDeep {
  width: 176px;
  height: auto;
  overflow: hidden;
}
.news-deepItem {
  width: auto;
  height: auto;
  border: none;
  margin: 0;
  padding: 18px 0 0;
  display: block;
  overflow: hidden;
}
.news-deepPic {
  width: 176px;
  height: 110px;
  position: relative;
}
.title-deep {
  width: 176px;
  height: 16px;
  line-height: 16px;
  overflow: hidden;
  margin: 0;
  padding: 10px 0 0 0;
}
.title-deep a {
  font-size: 14px;
  font-weight: normal;
  color: #333333;
  outline: none;
}
.title-deep a:hover {
  color: rgb(34, 103, 173);
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
