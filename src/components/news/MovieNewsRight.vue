<template>
    <div class="mod-r">
        <div class="mod-r-inner">
            <div class="mod-box-office">
                <div class="mod-hd">
                    <h2>最新资讯</h2>
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
            <div class="mod-box-mostHot">
                <div class="mod-hd">
                    <h2>最惹眼球</h2>
                </div>
                <div class="mod-bd">
                    <ul class="pic-pack-out">
                        <li v-for="(fav,index) in mostFavNews" :key="index" v-if="index == 0">
                            <a :href="getNewHref(fav._id)" target="_blank" class="img-url" :title="fav.title">
                                <img :src="fav.coverPicture" :alt="fav.title" class="hvr-glow">
                                <div class="office-spec">
                                    <span class="num top">{{index + 1}}</span>
                                    <span class="title">{{fav.title}}</span>
                                </div>
                            </a>
                        </li>
                        <li class="office" v-else>
                            <span class="num" :class="{top: index < 3}">{{index + 1}}</span>
                            <a :href="getNewHref(fav._id)" target="_blank" class="title" :title="fav.title">{{fav.title}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "MovieNewsRight",
  data() {
    return {
      mostNewNews: [],
      mostFavNews: []
    };
  },
  created() {
    this.getMostNewNews();
    this.getMostFavNews();
  },
  methods: {
    getMostNewNews() {
      var vm = this;
      this.axios
        .get(`/api/news/getMostNewNews`)
        .then(function(res) {
          if (res.data.code == 200) {
            vm.mostNewNews = res.data.mostNewNews;
            // console.log(vm.mostNewNews);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getMostFavNews() {
      var vm = this;
      this.axios
        .get(`/api/news/getMostFavNews`)
        .then(function(res) {
          if (res.data.code == 200) {
            vm.mostFavNews = res.data.mostFavNews;
            // console.log(vm.mostNewNews);
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
.mod-r {
  width: 300px;
  min-height: 1px;
  padding: 0 10px;
  /* border: 1px solid blue; */
}
.mod-r-inner {
  width: 300px;
  padding-left: 20px;
}
.mod-box-office {
  width: 100%;
  height: auto;
  /* border: 1px solid red; */
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
.pic-pack-out li:nth-child(1) {
  height: 150px;
  overflow: hidden;
  margin-bottom: 7px;
}
.pic-pack-out li:nth-child(1) .img-url {
  height: 150px;
  display: block;
  position: relative;
}
.pic-pack-out li:nth-child(1) .office-spec {
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
.pic-pack-out .num,
.pic-pack-out .title {
  height: 30px;
  display: inline-block;
  overflow: hidden;
}
.pic-pack-out .office-spec .num {
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
.pic-pack-out .office-spec .title {
  line-height: 30px;
  color: #ffffff;
  font-size: 15px;
  padding-left: 22px;
}
.pic-pack-out .office {
  height: 25px;
  overflow: hidden;
  padding: 4px 0 3px;
  position: relative;
}
.pic-pack-out .office .num {
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
.pic-pack-out .office .top {
  color: #cf2f1e;
}
.pic-pack-out .office .title {
  height: 25px;
  line-height: 25px;
  padding-left: 23px;
  font-size: 13px;
  color: #000000;
}
.pic-pack-out .office .title:hover {
  color: rgb(207, 47, 30);
}
.mod-box-mostHot {
  margin-top: 20px;
}
</style>
