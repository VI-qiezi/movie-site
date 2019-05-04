<template>
    <div class="about">
        <div class="head">
            <div class="head-inner">
                <a href="http://localhost:8080/" class="head-logo">
                    <span>I ·</span>
                    <i class="i-logo"></i>
                </a>
                <ul class="nav-smile">
                    <li class="nav">
                        <a class="btn-nav" href="/" target="_blank" title="首页">首页</a>
                    </li>
                    <li class="nav">
                        <a class="btn-nav" href="/movie-news" target="_blank" title="电影资讯">电影资讯</a>
                    </li>
                    <li class="nav">
                        <a class="btn-nav" href="/vip-movies" target="_blank" title="VIP影院">VIP影院</a>
                    </li>
                    <li class="nav">
                        <a class="btn-nav" href="/movie-comments" target="_blank" title="影评">影评</a>
                    </li>
                </ul>
                <a href="/login" target="_blank" class="btn-login">登录 / 注册</a>
            </div>
        </div>
        <div class="top-pic">
            <!-- Swiper -->
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="http://css.static.m1905.com/jobs/foc3.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="http://css.static.m1905.com/jobs/foc4.jpg">
                    </div>
                    <div class="swiper-slide">
                        <img src="http://css.static.m1905.com/jobs/foc5.jpg">
                    </div>
                </div>
            </div>
        </div>
        <div class="subject-wrap">
            <div class="left-list">
                <dl>
                    <dt>
                        <router-link to="/about/aboutus">关于我们</router-link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <router-link to="/about/copyright">版权声明</router-link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <router-link to="/about/contactus">联系我们</router-link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <router-link to="/about/link">友情链接</router-link>
                    </dt>
                </dl>
            </div>
            <div class="right-cont">
                <router-view></router-view>
            </div>
        </div>
        <div class="down">
            <p>
                <a href="/about/aboutus">关于我们</a>
                &nbsp;|&nbsp;
                <a href="/about/copyright">版权声明</a>
                &nbsp;|&nbsp;
                <a href="/help?chose=new">帮助中心</a>
                &nbsp;|&nbsp;
                <a href="/about/contactus">联系我们</a>
                &nbsp;|&nbsp;
                <a href="/about/link">友情链接</a>
            </p>
            电影卫星频道节目中心官方网站
        </div>
    </div>
</template>

<script>
import "../../assets/libs/jquery.min.js";
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
export default {
  name: "About",
  created() {
    this.$emit("public_header", false);
    this.$emit("public_footer", false);
  },
  mounted() {
    this.$nextTick(function() {
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        }
      });
    });
  }
};
</script>

<style scoped>
.about {
  background: url("../../assets/img/bodybg.jpg") no-repeat #3e7eae;
  color: #000;
  position: relative;
}
.head {
  width: 100%;
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  background-color: #707885;
  font-size: 13px;
  font-family: "Microsoft YaHei";
}
.head-inner {
  width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
}
.head-logo {
  font-size: 21px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 5px;
}
.head-logo span {
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: 0px;
}
.i-logo {
  width: 60px;
  height: 20px;
  display: inline-block;
  background: url("../../assets/img/icons_navigation_1905all.png") no-repeat;
  background-position: -440px -572px;
  margin-top: 5px;
  margin-left: 20px;
}
.nav-smile {
  margin-left: 80px;
  display: flex;
  flex-direction: row;
}
.nav {
  margin: 0 5px;
}
.btn-nav {
  color: #ffffff;
  padding: 0 20px;
  display: inline-block;
  vertical-align: top;
}
.btn-nav:hover {
  background-color: rgb(30, 40, 51);
}
.btn-login {
  color: #ffffff;
  position: absolute;
  right: 20px;
}
.top-pic {
  width: 980px;
  height: 376px;
  margin: 0 auto;
  padding-top: 30px;
  position: relative;
}
.subject-wrap {
  width: 978px;
  margin: 0 auto;
  padding: 0;
  background: #e7e7e7;
  border: 1px solid #66a1bf;
  border-radius: 4px;
  box-shadow: #639ebe 0px 0px 1px 1px;
  display: flex;
  flex-direction: row;
}
.left-list {
  width: 147px;
  height: 766px;
  background-color: rgb(240, 240, 240);
  border: 1px solid #ffffff;
  border-right: 1px solid #dfdfdf;
  box-shadow: #e0e0e0 1px 0px 1px 0px;
  border-radius: 4px;
}
.left-list dl {
  padding: 18px 36px 0 36px;
  color: #3d3d3d;
}
.left-list dl dt {
  font: normal 15px/26px "微软雅黑";
  text-shadow: #b1b1b1 0px 1px 1px;
  cursor: pointer;
}
.router-link-exact-active {
  color: #da0845!important;
  text-shadow: #e6a1b4 0px 1px 1px;
}
.left-list dl dt a {
  color: #696969;
}
.right-cont {
  width: 750px;
  min-height: 564px;
  padding: 20px 39px 20px 40px;
  color: #696969;
}
.down{
    width: 980px;
    height: 65px;
    margin: 0 auto;
    padding-top: 20px;
    text-align: center;
}
.down, .down p a{
    color: #ffffff;
    font-size: 12px;
    font-family: "宋体",Arial, Helvetica, sans-serif;
}
.down p{
    margin-top: 1px;
    height: 24px;
    line-height: 24px;
}
</style>
