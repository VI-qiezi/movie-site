// 顶部导航栏
<template>
    <div class="head">
        <div class="head-bar">
            <div class="head-bar-logo">
                <a href="" title="电影频道" class="head-bar-left">
                    <img src="../assets/img/电影.png" class="head-bar-img">
                    <span class="head-bar-txt">电影频道</span>
                </a>
                <a href="#" title="爱电影网" class="head-bar-right">爱电影网</a>
            </div>
            <ul class="nav-bar-menu">
                <li class="home-page nav-active">
                    <router-link to="/">首页</router-link>
                </li>
                <li class="movie-news">
                    <router-link to="/movie-news">电影资讯</router-link>
                </li>
                <li class="vip-movies">
                    <router-link to="/vip-movies">VIP影院</router-link>
                </li>
                <li class="movie-comments">
                    <router-link to="/movie-comments">影评</router-link>
                </li>
            </ul>
            <div class="nav-bar-search">
                <div class="search-form" @mouseover="searchEnter" @mouseout="searchleave">
                    <form action="http://localhost:8080/search/" method="get" name="search-form">
                        <input type="text" class="search-txt">
                        <input type="submit" class="i-search search-btn" value="">
                    </form>
                    <div class="search-chip">我不是药神</div>
                </div>
                <div class="search-plane" style="display: none" @mouseover="searchEnter" @mouseout="searchleave">
                    <ul>
                        <li><a href="">我不是药神</a></li>
                        <li><a href="">西虹市首富</a></li>
                        <li><a href="">中国蓝盔</a></li>
                        <li><a href="">胖子行动队</a></li>
                        <li><a href="">黄金兄弟</a></li>
                        <li><a href="">追龙</a></li>
                        <li><a href="">猛虫过江</a></li>
                        <li><a href="">影</a></li>
                    </ul>
                </div>
            </div>
            <div class="nav-bar-user">
                <div class="user-login" @mouseover="loginEnter" @mouseout="loginLeave">
                    <div class="user-login-reg">
                        <router-link to="/login">
                            <i class="i-profile"></i>
                            <br>
                            <span class="user-login-span">登录</span>
                        </router-link> 
                    </div>
                    <div class="user-login-img" style="display: none">
                        <img src="../assets/img/user-login-img.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/libs/jquery.min.js";
export default {
  name: "Header",
  methods:{
      searchEnter: function(){
          $(".nav-bar-search").css("background", "#fff");
          $(".search-plane").css("display", "block");
          $(".i-search").css("background-position", "-200px -150px");
      },
      searchleave: function(){
          $(".nav-bar-search").css("background", "rgb(47, 51, 63)");
          $(".search-plane").css("display", "none");
      },
      loginEnter: function(){
          $(".i-profile").css("background-position", "-68px -189px");
      },
      loginLeave: function(){
          $(".i-profile").css("background-position", "-68px -150px");
      }
  }
};
</script>

<style scoped>
.head {
  width: 1349px;
  min-width: 980px;
  height: 70px;
  background: #20232c;
  position: relative;
}
.head-bar {
  width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  /* border: 1px solid yellow; */
}
.head-bar-logo {
  width: 220px;
  height: 70px;
  display: flex;
  flex-direction: row;
  /* border: 1px solid red; */
}
.head-bar-left {
  width: 60px;
  height: 70px;
}
.head-bar-img {
  width: 35px;
  height: 35px;
  padding: 8px 12.5px 0 12.5px;
}
.head-bar-txt {
  color: #c1c1c1;
  font-size: 12px;
  display: block;
  width: 60px;
  text-align: center;
  margin-top: -5px;
  font-family: "幼圆";
}
.head-bar-right {
  height: 70px;
  line-height: 70px;
  font-size: 32px;
  color: #009fe8;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 500;
  margin-left: 25px;
}
.nav-bar-menu {
  margin: 0;
  padding: 0;
  padding-left: 30px;
  /* border: 1px solid black; */
}
.nav-bar-menu li {
  list-style: none;
  float: left;
}
.nav-bar-menu li a {
  font-size: 16px;
}
.nav-bar-menu li a:link,
.nav-bar-menu li a:visited {
  line-height: 70px;
  display: block;
  padding: 0px 31px;
  color: #bdbdbd;
}
.router-link-exact-active{
    color: #fff !important;
    font-size: 17px !important;
}
.nav-bar-search{
    width: 180px;
    height: 40px;
    background: rgb(47, 51, 63);
    margin-top: 15px;
    border-radius: 20px;
    position: relative;
    margin-left: 20px;
}
.search-form{
    padding: 10px 15px 10px 20px;
}
form{
    display: block;
    margin-top: 0em;
    display: flex;
    flex-direction: row;
}
.search-txt{
    width: 80%;
    color: #999;
    background-color: transparent;
}
.search-txt, .search-btn, .search-chip{
    font-size: 14px;
    border: 0;
}
.i-search{
    width: 20px;
    height: 20px;
    background: url("../assets/img/homeico.png") no-repeat;
    background-position: -170px -150px;
    display: inline-block;
    zoom: 1;
    overflow: hidden;
}
.search-chip{
    width: 100%;
    color: #999;
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 1;
    display: block;
}
.search-plane{
    width: 180px;
    position: absolute;
    left: 0;
    top: 35px;
    z-index: 999;
    padding-top: 8px;
}
.search-plane ul{
    background: #fff;
    padding: 0px;
    margin-top: 2px;
    border-radius: 5px;
}
.search-plane ul li{
    height: 40px;
    line-height: 40px;
    list-style: none;
    padding-left: 18px;
    background: #fff;
    border-radius: 5px;
    margin: 0;
}
.search-plane ul li a:link, .search-plane ul li a:visited, .search-plane ul li a:hover{
    font-size: 14px;
    color: #666;
    display: block;
}
.search-plane ul li:hover{
    background: rgb(245, 245, 245);
}
.nav-bar-user{
    margin-left: 30px;
}
.user-login{
    height: 56px;
    padding-left: 20px;
    padding-top: 14px;
    display: inline-block;
    position: relative;
    text-align: center;
    cursor: pointer;
}
.i-profile{
    width: 21px;
    height: 23px;
    background: url("../assets/img/homeico.png") no-repeat;
    background-position: -68px -150px;
    display: inline-block;
    zoom: 1;
    overflow: hidden;
}
.user-login-span{
    font-size: 12px;
    color: #c1c1c1;
    display: block;
}
.user-login-img img{
    width: 40px;
    height: 40px;
    border-radius: 20px;
    vertical-align: top;
}
</style>
