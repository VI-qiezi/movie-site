<template>
    <div class="new-comments">
        <ul>
            <li class="comment-item" v-for="newc in newComment.slice(0,a)" :key="newc._id">
                <a :href="getNewHref(newc._id)" class="item-imgs picHover" :title="newc.title" target="_blank">
                    <img :src="newc.coverPicture" :alt="newc.title" class="hvr-glow">
                </a>
                <div class="item-txt">
                    <a :href="getNewHref(newc._id)" class="txt-title" target="_blank">{{newc.title}}</a>
                    <p class="txt-abstract">
                        {{newc.coverAbstract}}
                    </p>
                    <div class="txt-column">
                        <span class="author">{{newc.author}}</span>
                        <span class="grade">评分：</span>
                        <span class="com-grade">{{newc.grade}} 星</span>
                        <span class="time">{{newc.publicTime}}</span>
                        <div class="action">
                            <a href="javascript:;" class="action-btn" title="有用">
                                <img src="https://img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png">
                                <span>{{newc.usefulCount}}</span>
                            </a>
                            <a href="javascript:;" class="action-btn" title="没用">
                                <img src="https://img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png">
                                <span>{{newc.uselessCount}}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="btn-more" v-if="a<newComment.length" @click="loadMore">更多评论</div>
        <div class="btn-empty" v-else>没有更多了</div>
    </div>
</template>

<script>
import "../../assets/libs/jquery.min.js"
import "hover.css/css/hover-min.css";
export default {
    name: "NewComments",
    data() {
    return {
      newComment: [],
      a: 5
    };
  },
  created() {
    this.getNewComments();
  },
  methods: {
    getNewComments() {
      var vm = this;
      this.axios
        .get("/api/comments/getNewComments")
        .then(function(res) {
          if (res.data.code == 200) {
            vm.newComment = res.data.newComments;
            // console.log(vm.popularComment);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    getNewHref(val) {
      return "http://localhost:8080/comment?" + val;
    },
    loadMore(){
        this.a += 5;
    }
  }
}
</script>

<style scoped>
.comment-item {
  padding: 20px 0;
  border-top: 1px solid #eee;
  display: flex;
  flex-direction: row;
}
.comment-item:hover{
    background-color: rgb(249, 249, 249);
}
.item-imgs {
  width: 320px;
  height: 174px;
  margin-right: 20px;
  display: block;
}
.item-imgs img {
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
.item-txt {
  width: 510px;
}
.txt-title {
  font: bold 22px/22px "Microsoft YaHei";
  color: #333;
  display: block;
  margin-bottom: 14px;
}
.txt-title:hover{
    color: rgb(34, 103, 173);
}
.txt-abstract {
  height: 84px;
  color: #888;
  font: 14px/2 "Microsoft YaHei";
  margin-bottom: 24px;
}
.txt-column {
  height: 20px;
  color: #888;
  font: 14px/20px "Microsoft YaHei";
  position: relative;
}
.author,
.com-grade,
.time {
  margin-right: 15px;
}
.author {
  color: #37a;
  cursor: pointer;
}
.author:hover{
    color: #ffffff;
    background-color: #37a;
}
.com-grade {
  color: #687e96;
}
.time {
  color: #999;
  font-weight: 300;
  font-family: Verdana;
  margin-left: 5px;
}
.action {
  position: absolute;
  right: 0;
  bottom: 0;
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
.btn-more{
    width: 100%;
    height: 45px;
    background: #f5f5f5;
    color: #888;
    font: 15px/45px "Microsoft YaHei";
    text-align: center;
    cursor: pointer;
    margin-top: 40px;
}
.btn-empty{
    width: 100%;
    height: 45px;
    color: #888;
    font: 15px/45px "Microsoft YaHei";
    text-align: center;
    cursor: pointer;
    margin-top: 40px;
}
</style>
