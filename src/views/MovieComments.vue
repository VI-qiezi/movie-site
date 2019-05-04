<template>
    <div class="movie-comments">
        <div class="container">
            <h1 class="comment-head">最受欢迎的影评</h1>
            <ul class="top-tab">
                <li>
                    <router-link to="/movie-comments/popular-comments" @click.native="chosePopular">热门影评</router-link>
                </li>
                &nbsp;/&nbsp;
                <li>
                    <router-link to="/movie-comments/new-comments" @click.native="choseNew">最新影评</router-link>
                </li>
            </ul>
            <div class="comment">
                <div class="comment-list">
                    <router-view></router-view>
                </div>
                <div class="comment-right">
                    <div class="mod-ad">
                        <a href="http://www.1905.com/mtalk/?fr=cmt_rcm" target="_blank"  title="今日影评栏目">
                            <img src="http://image13.m1905.cn/uploadfile/2017/0228/thumb_1_300_300_20170228035742651274.jpg" class="hvr-glow" alt="今日影评栏目">
                        </a>
                        <span class="ad-txt">广告</span>
                    </div>
                    <div class="sidebar-info">
                        <p>如果你觉得一篇评论对你有帮助，请你点击“有用”。你的投票直接决定哪些评论出现在爱电影网首页和“最受欢迎的评论”里，以及在书、电影和音乐介绍页里评论的排序。</p>
                        <p>所有“没用”的点击都是匿名的。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/libs/jquery.min.js";
export default {
    name: 'MovieComments',
    methods: {
        chosePopular(){
            $(".comment-head").text("最受欢迎的影评");
        },
        choseNew: function(){
            $(".comment-head").text("最新的影评");
        }
    },
}
</script>

<style scoped>
.movie-comments{
    min-width: 980px;
    background-color: #ffffff;
}
.container{
    width: 1200px;
    margin: 40px auto 0;
}
.container h1{
    font-size: 26px;
    padding-bottom: 10px;
    font-weight: bold;
    color: #494949;
}
.top-tab{
    font-size: 13px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
}
.top-tab li a{
    color: #111;
}
.router-link-exact-active, .router-link-active{
    color: #669!important;
    cursor: default;
}
.comment{
    width: 1200px;
    display: flex;
    flex-direction: row;
    position: relative;
}
.comment-list{
    width: 850px;
    margin-right: 50px;
    margin-bottom: 50px;
}
.comment-right{
    width: 300px;
}
.mod-ad {
  width: 300px;
  height: 300px;
  display: block;
  position: absolute;
  top: -20px;
  right: 0;
  overflow: hidden;
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
.sidebar-info{
    margin-top: 330px;
    font-size: 13px;
    color: #999;
}
.sidebar-info p:nth-child(1){
    margin-bottom: 13px;
}
</style>