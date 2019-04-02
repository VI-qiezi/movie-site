<template>
    <div class="login">
        <div class="head-logo">
            <h1>
                <span class="nav-header active">登录</span>
                <span class="nav-header">注册</span>
            </h1>
        </div>
        <div class="login-box">
            <div class="login-left"></div>
            <div class="login-right clearfix">
                <ul class="tag">
                    <li class="fl active">登录</li>
                    <li class="fr">注册电影网账号</li>
                </ul>
                <div class="passContent loginBox active">
                    <div class="span8">
                    <form id="login" name="login" method="get">
                        <ul class="list">
                            <li class="error">
                                <em class="icons fail"></em>
                            </li>
                            <li class="normal">
                                <input type="text" name="username" class="input username" id="mail-sug" placeholder="邮箱/手机号/用户名" autocomplete="off">
                            </li>
                            <li class="normal passwordBox">
                                <input type="password" name="password" class="input password original" placeholder="请输入密码">
                            </li>
                            <li>
                                <input type="button" name="btn-login" class="submit" value="登 录">
                            </li>
                            <li>
                                <span class="remember">
                                    <input type="checkbox" name="rememberme" id="rememberme" class="acceptIpt">
                                    <span class="c-fl">记住密码</span>
                                </span>
                            </li>
                        </ul>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
.login {
  color: #4d4d4d;
  font-size: 12px;
  line-height: 1.5em;
  font-family: Arial, Helvetica, sans-serif;
}
.head-logo {
  max-width: 980px;
  height: 52px;
  margin: 0 auto;
  padding-top: 22px;
  /* border: 1px solid red; */
}
.nav-header {
  color: #9498a1;
  font-size: 21px;
  font-weight: normal;
  height: 30px;
  line-height: 30px;
  padding: 3px 15px;
  border-left: 1px solid #e3e3e3;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  display: none;
}
.nav-header.active {
  display: block;
}
.login-box{
    width: 980px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
}
.login-left {
  width: 560px;
  height: 560px;
  background: url("../assets/img/login-bg.jpg") 25% 0px no-repeat;
  background-size: 560px 560px;
}
.login-right {
  width: 352px;
  height: 350px;
  padding: 20px 0px 20px 50px;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  position: relative;
  margin-left: 20px;
  margin-top: 40px;
}
.login-right .tag{
    width: 300px;
    margin-left: 2px;
    border-bottom: 1px solid #e4e4e4;
    position: relative;
    display: flex;
    flex-direction: row;
}
.login-right .tag li{
    font-size: 20px;
    font-weight: normal;
    line-height: 60px;
    cursor: pointer;
}
.login-right .tag li.active{
    color: #418fe4;
    border-bottom: 2px solid #418fe4;
}
.fr{
    position: absolute;
    right: 2px;
}
.passContent{
    display: none;
}
.passContent.active{
    display: block;
}
.passContent .span8{
    width: 380px;
    margin: 0;
    /* border: 1px solid red; */
}
.passContent ul li.error{
    height: 32px;
    line-height: 32px;
    background-color: #fff;
    font-style: normal;
    color: #ff8161;
}
.icons{
    background: url("../assets/img/icons.png") no-repeat;
}
.passContent .error .fail{
    width: 24px;
    height: 32px;
    background-position: -90px -197px;
    display: inline-block;
    vertical-align: middle;
    visibility: hidden;
}
.passContent ul li{
    width: 330px;
}
.passContent ul li.normal{
    margin-bottom: 28px;
}
.passContent .input{
    width: 282px;
}
.passContent input{
    height: 30px;
    line-height: 30px;
    font-family: "微软雅黑";
    margin: 0;
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    zoom: 1;
    outline: none;
    padding: 4px 8px;
}
.passContent .submit{
    width: 300px;
    height: 50px;
    line-height: 50px;
    border: none;
    background: #418fe4;
    border-radius: 5px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    cursor: pointer;
}
.passContent .remember{
    width: 300px;
    font-size: 14px;
    line-height: 38px;
    color: #7f7f7f;
}
.passContent input[type="checkbox"]{
    border: none;
}
.passContent .acceptIpt{
    margin: 0px 6px 0 0;
    padding: 0;
}
.passContent .c-fl{
    color: #686868;
    cursor: default;
    line-height: 38px;
}
</style>
