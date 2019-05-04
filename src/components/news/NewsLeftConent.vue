<template>
    <div class="news-left-content">
        <section class="mod-top-news">
            <ul class="pic-event-over">
                <li class="pic-pack-out" v-for="main in mainNews" :key="main._id" :class="{'pic-vertical': main.isPicVertial == 1}">
                    <a :href="getNewHref(main._id)" target="_blank" class="pic-url">
                        <img :src="main.coverPicture" :alt="main.title">
                    </a>
                    <div class="pic-pack-inner">
                        <h3>
                            <a :href="getNewHref(main._id)" target="_blank" :title="main.title" class="title">{{main.title}}</a>
                        </h3>
                        <p>{{main.briefContent}}</p>
                        <div class="rel-other">
                            <span class="timer">{{main.publicTime}}</span>
                            <span class="type-url" v-if="main.label.length < 3" v-for="(l,i) in main.label" :key="i">{{l}}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="news-paging">
                <mo-paging ref="moPaging" :page-index="currentPage" :total="count" :page-size="pageSize" v-on:pageChange="pageChange"></mo-paging>
            </div>
        </section>
    </div>
</template>

<script>
import moPaging from "../moPaging.vue";
export default {
  name: "NewsLeftConent",
  components: {
    moPaging
  },
  data() {
    return {
      mainNews: [],
      pageSize: 10, //每页显示10条数据
      currentPage: 1, //当前页码
      count: 1 //总记录数
    };
  },
  created() {
    this.getMainNews();
    this.getMainNewsCount();
  },
  methods: {
    getMainNewsCount(){
      var vm = this;
      this.axios
        .get(
          `/api/news/getMainNewsCount`
        )
        .then(function(res) {
          if (res.data.code == 200) {
            vm.count = res.data.count;
            // console.log(res);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getMainNews() {
      var vm = this;
      this.axios
        .get(
          `/api/news/getMainNews/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
        )
        .then(function(res) {
          if (res.data.code == 200) {
            vm.mainNews = res.data.mainNews;
            // console.log(res);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //从page组件传递过来的当前page
    pageChange(page) {
      this.currentPage = page;
      this.getMainNews();
    },
    getNewHref(val){
      return 'http://localhost:8080/new?'+val;
    }
  },
  mounted() {
    // 请求第一页数据
    // this.getMainNews();
  }
};
</script>

<style scoped>
.mod-top-news {
  background-color: #ffffff;
}
.pic-pack-out {
  padding-top: 26px;
  padding-bottom: 14px;
  border-bottom: 1px solid #e0e0e0;
  position: relative;
}
.pic-pack-out:hover {
  background-color: rgb(249, 249, 249);
}
.pic-url {
  display: block;
  overflow: hidden;
  position: absolute;
  top: 26px;
  left: 0;
}
.pic-pack-out .pic-url img {
  width: 150px;
  height: 100px;
}
.pic-vertical .pic-url img {
  width: 150px;
  height: 226px;
}
img {
  vertical-align: top;
}
.pic-pack-inner {
  padding-left: 170px;
}
.pic-pack-inner h3 {
  height: 22px;
  line-height: 22px;
  color: #000000;
  font-size: 21px;
  font-weight: normal;
  overflow: hidden;
  margin-bottom: 7px;
}
.pic-pack-inner h3 a {
  color: #000000;
}
.pic-pack-inner h3 a:hover {
  color: rgb(207, 47, 30);
}
.pic-pack-inner p {
  height: 46px;
  line-height: 23px;
  color: #999999;
  font-size: 13px;
  margin-bottom: 3px;
  overflow: hidden;
}
.pic-vertical .pic-pack-inner p {
  margin-bottom: 129px;
}
.pic-pack-inner .rel-other {
  height: 20px;
  line-height: 20px;
  padding-top: 4px;
  margin-bottom: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.pic-pack-inner .rel-other .timer,
.pic-pack-inner .rel-other .type-url {
  display: inline-block;
  width: auto;
  font-size: 13px;
}
.pic-pack-inner .rel-other .timer {
  color: #cccccc;
  padding-right: 3px;
}
.pic-pack-inner .rel-other .type-url {
  color: #999999;
  margin-left: 6px;
  padding: 0 3px;
  cursor: pointer;
}
.pic-pack-inner .rel-other .type-url:hover {
  color: #ffffff;
  background-color: rgb(207, 47, 30);
}
.news-paging {
  width: 100%;
  height: 25px;
  margin-top: -1px;
  padding-top: 40px;
  padding-bottom: 45px;
}
</style>
