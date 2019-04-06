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
                    <div class="user-login-img" style="display: none" @mouseover="userInfoEnter" @mouseout="userInfoLeave">
                        <img src="../assets/img/user-login-img.jpg" alt="">
                    </div>
                    <div class="user-login-plane" style="display: none" @mouseover="userInfoEnter" @mouseout="userInfoLeave">
                        <i class="arrow-up login-plane-position"></i>
                        <div class="login-plane clearfix">
                            <div class="login-infoBox">
                                <img src="../assets/img/user-login-img.jpg" alt="">
                                <p class="infoBox-title">
                                    <a href="#">{{userInfo.username}}</a>
                                    <i class="i-crownGray"></i>
                                </p>
                                <p>立即开通VIP 大片随意看</p>
                                <p>
                                    <a href="#"><button type="button" class="login-renewal-btn">开通</button></a>
                                </p>
                            </div>
                            <span class="loginOutBtn" @click="louout">退出</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/libs/jquery.min.js";
import UserInfo from "../assets/libs/userInfo.js";
export default {
  name: "Header",
  data() {
    return {
      isRemember: true,
      userInfo: {
        loginName: "",
        loginPass: ""
      }
    };
  },
  mounted() {
    var vm = this;
    UserInfo.$on("val", data => {
      // console.log(data);
      vm.userInfo = data;
    });
    vm.getCookie();
  },
  methods: {
    searchEnter: function() {
      $(".nav-bar-search").css("background", "#fff");
      $(".search-plane").css("display", "block");
      $(".i-search").css("background-position", "-200px -150px");
    },
    searchleave: function() {
      $(".nav-bar-search").css("background", "rgb(47, 51, 63)");
      $(".search-plane").css("display", "none");
    },
    loginEnter: function() {
      $(".i-profile").css("background-position", "-68px -189px");
    },
    loginLeave: function() {
      $(".i-profile").css("background-position", "-68px -150px");
    },
    userInfoEnter: function() {
      $(".user-login-plane").css("display", "block");
    },
    userInfoLeave: function() {
      $(".user-login-plane").css("display", "none");
    },
    louout: function() {
      var vm = this;
      this.axios
        .get("/api/users/logout")
        .then(function(res) {
          if (res.data.code != 200) {
            console.log("退出异常");
          }
          if (vm.isRemember == false) {
            console.log("清空cookie");
            vm.clearCookie();
          }
          vm.$router.push({ path: "/" });
          $(".user-login-reg").css("display", "block");
          $(".user-login-img").css("display", "none");
          $(".user-login-plane").css("display", "none");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    //读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
        for (var i = 0; i < arr.length; i++) {
          var arr2 = arr[i].split("="); //再次切割
          //判断查找相对应的值
          if (arr2[0] == "loginName") {
            this.userInfo.loginName = arr2[1]; //保存到保存数据的地方
          } else if (arr2[0] == "isRemember") {
            this.isRemember = arr2[1];
          }
        }
      }
    },
    //设置cookie
    setCookie(c_name, c_pwd, exdays, isRemember) {
      var exdate = new Date(); //获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      //字符串拼接cookie
      window.document.cookie =
        "loginName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie =
        "loginPass" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      window.document.cookie = "isRemember" + "=" + isRemember + ";path=/;expires=" + exdate.toGMTString();
    },
    //清除cookie
    clearCookie: function() {
      this.setCookie("", "", -1, ""); //修改2值都为空，天数为负1天就好了
    }
  }
};
</script>

<style scoped>
.head {
  width: 1366px;
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
}
.head-bar-logo {
  width: 220px;
  height: 70px;
  display: flex;
  flex-direction: row;
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
.router-link-exact-active {
  color: #fff !important;
  font-size: 17px !important;
}
.nav-bar-search {
  width: 180px;
  height: 40px;
  background: rgb(47, 51, 63);
  margin-top: 15px;
  border-radius: 20px;
  position: relative;
  margin-left: 20px;
}
.search-form {
  padding: 10px 15px 10px 20px;
}
form {
  display: block;
  margin-top: 0em;
  display: flex;
  flex-direction: row;
}
.search-txt {
  width: 80%;
  color: #999;
  background-color: transparent;
}
.search-txt,
.search-btn,
.search-chip {
  font-size: 14px;
  border: 0;
}
.i-search {
  width: 20px;
  height: 20px;
  background: url("../assets/img/homeico.png") no-repeat;
  background-position: -170px -150px;
  display: inline-block;
  zoom: 1;
  overflow: hidden;
}
.search-chip {
  width: 100%;
  color: #999;
  position: absolute;
  top: 10px;
  left: 20px;
  z-index: 1;
  display: block;
}
.search-plane {
  width: 180px;
  position: absolute;
  left: 0;
  top: 35px;
  z-index: 999;
  padding-top: 8px;
}
.search-plane ul {
  background: #fff;
  padding: 0px;
  margin-top: 2px;
  border-radius: 5px;
}
.search-plane ul li {
  height: 40px;
  line-height: 40px;
  list-style: none;
  padding-left: 18px;
  background: #fff;
  border-radius: 5px;
  margin: 0;
}
.search-plane ul li a:link,
.search-plane ul li a:visited,
.search-plane ul li a:hover {
  font-size: 14px;
  color: #666;
  display: block;
}
.search-plane ul li:hover {
  background: rgb(245, 245, 245);
}
.nav-bar-user {
  font-size: 12px;
  margin-left: 51px;
  position: relative;
}
.user-login {
  height: 56px;
  padding-left: 20px;
  padding-top: 14px;
  display: inline-block;
  position: relative;
  text-align: center;
  cursor: pointer;
}
.i-profile {
  width: 21px;
  height: 23px;
  background: url("../assets/img/homeico.png") no-repeat;
  background-position: -68px -150px;
  display: inline-block;
  zoom: 1;
  overflow: hidden;
}
.user-login-span {
  font-size: 12px;
  color: #c1c1c1;
  display: block;
}
.user-login-img {
  width: 40px;
  height: 56px;
}
.user-login-img img {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  vertical-align: top;
}
.user-login-plane {
  width: 260px;
  height: 148px;
  background: #fff;
  position: absolute;
  right: 0;
  top: 70px;
  z-index: 999;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  cursor: auto;
  border-radius: 5px;
}
.login-plane-position {
  position: absolute;
  top: -5px;
  right: 10px;
}
.arrow-up {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #ffffff;
}
.login-infoBox {
  margin-left: 20px;
  margin-top: 20px;
  color: #9d846d;
}
.login-infoBox img {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 10px;
  float: left;
}
.login-infoBox p {
  text-align: left;
  margin: 8px 0;
}
.infoBox-title a {
  font-size: 15px;
  color: #666;
}
.i-crownGray {
  width: 20px;
  height: 18px;
  margin-left: 7px;
  background: url("../assets/img/homeico.png") no-repeat;
  background-position: -130px -170px;
  display: inline-block;
  zoom: 1;
  overflow: hidden;
}
.login-renewal-btn {
  width: 45px;
  line-height: 20px;
  border: none;
  color: #fff;
  background: #ffc200;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
}
.login-renewal-btn:hover {
  background: #ffae00;
}
.loginOutBtn {
  float: right;
  margin-top: 10px;
  margin-right: 17px;
  color: #999999;
  cursor: pointer;
}
.loginOutBtn:hover {
  color: #20232c;
}
</style>
