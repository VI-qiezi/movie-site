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
                    <li class="fl active" @click="clickLogin">登录</li>
                    <li class="fr" @click="clickReg">注册电影网账号</li>
                </ul>
                <div class="passContent loginBox active">
                    <div class="span8">
                    <form id="login" name="login" method="get">
                        <ul class="list">
                            <li class="error">
                                <em class="icons fail"></em>
                                <span class="error-text"></span>
                            </li>
                            <li class="normal">
                                <input type="text" name="username" class="input  username" id="login-name" placeholder="请输入账号" autocomplete="off" :class="{'focus-input': focusUsername}" @focus="focusUsername=true" @blur="focusUsername=false">
                            </li>
                            <li class="normal passwordBox">
                                <input type="password" name="password" class="input password original" id="login-pass" placeholder="请输入密码" :class="{'focus-input': focusPassword}" @focus="focusPassword=true" @blur="focusPassword=false">
                            </li>
                            <li>
                                <input type="button" name="btn-login" class="submit" value="登    录" @click="toLogin">
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
                <div class="passContent registerBox">
                    <div class="span8">
                        <form id="form-reg" name="form-reg" method="get">
                            <ul class="list">
                                <li class="error">
                                    <em class="icons fail"></em>
                                    <span class="error-text"></span>
                                </li>
                                <li class="normal">
                                    <input type="text" name="regname" class="input  regname" id="reg-name" placeholder="由英文字母开头的3-15个字母、数字组合" autocomplete="off" :class="{'focus-input': focusRegname}" @focus="focusRegname=true" @blur="focusRegname=false">
                                </li>
                                <li class="normal">
                                    <input type="password" name="password" class="input password" id="reg-pass" placeholder="6-18个字符，由英文字母和数字组成" :class="{'focus-input': focusRegPassword}" @focus="focusRegPassword=true" @blur="focusRegPassword=false">
                                </li>
                                <li class="normal accept">
                                    <span class="agreement">
                                        <input type="checkbox" name="rememberme" class="agree acceptIpt fl" checked="checked">
                                        <span class="fl pr05">同意</span>
                                        <a href="" class="text-link fl">电影网服务协议</a>
                                    </span>
                                </li>
                                <li class="reg-submit">
                                    <input type="button" name="btn-register" class="submit" value="注    册" @click="toRegister">
                                </li>
                            </ul>
                        </form>
                        <div class="login mar-login">
                            <span class="pr05">已有账号</span>
                            <a href="javascript:void(0);" class="text-link" @click="clickLogin">直接登录</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      focusUsername: false,
      focusPassword: false,
      focusRegname: false,
      focusRegPassword: false
    };
  },
  methods: {
    clickLogin: function() {
      $(".nav-header:nth-child(1)").addClass("active");
      $(".nav-header:nth-child(2)").removeClass("active");
      $(".tag li:nth-child(1)").addClass("active");
      $(".tag li:nth-child(2)").removeClass("active");
      $(".loginBox").addClass("active");
      $(".registerBox").removeClass("active");
    },
    clickReg: function() {
      $(".nav-header:nth-child(1)").removeClass("active");
      $(".nav-header:nth-child(2)").addClass("active");
      $(".tag li:nth-child(1)").removeClass("active");
      $(".tag li:nth-child(2)").addClass("active");
      $(".loginBox").removeClass("active");
      $(".registerBox").addClass("active");
    },
    toRegister: function(e) {
      e.preventDefault();
      var vm = this;
      var regName = $.trim($("#reg-name").val());
      var regPass = $.trim($("#reg-pass").val());
      var isAgree = $('.agree').prop('checked');

      var exName=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;  
      var exPass = /^[0-9a-zA-Z.,;'/]{6,18}$/;

      if(!regName || !regPass){
        $(".registerBox .error").css("visibility", "visible");
        $(".error-text").text('账号或密码不能为空');
        return;
      } 
      if(!exName.test(regName)){
        $(".registerBox .error").css("visibility", "visible");
        $(".error-text").text('请输入正确的用户名');
        return;
      }
      if(!exPass.test(regPass)){
        $(".registerBox .error").css("visibility", "visible");
        $(".error-text").text('密码不能含有非法字符，长度在6-18之间');
        return;
      }
      if(isAgree != true){
        $(".registerBox .error").css("visibility", "visible");
        $(".error-text").text('同意协议后才能注册');
        return;
      }
      this.axios
      .get("/api/users/register", {
        params: {
          regName: regName, 
          regPass: regPass,
          isAgree: isAgree
        }
      }).then(function(res){
        if(res.data.code != 200){
          $(".registerBox .error").css("visibility", "visible");
          $(".error-text").text(res.data.message);
          return;
        }
        vm.$router.push({path: '/'});
        $(".user-login-reg").css("display", "none");
        $(".user-login-img").css("display", "block");
      }).catch(function(err){
        console.log(err);
      })
    },
    toLogin: function(e){
      e.preventDefault();
      var vm = this;
      var loginName = $.trim($("#login-name").val());
      var loginPass = $.trim($("#login-pass").val());
      var isRemember = $("#rememberme").prop("checked");
      
      var exName=/^[a-zA-Z][a-zA-Z0-9]{3,15}$/;  
      var exPass = /^[0-9a-zA-Z.,;'/]{6,18}$/;
      
      if(!loginName || !loginPass){
        $(".loginBox .error").css("visibility", "visible");
        $(".error-text").text('账号或密码不能为空');
        return;
      }
      if(!exName.test(loginName)){
        $(".loginBox .error").css("visibility", "visible");
        $(".error-text").text('请输入正确的用户名');
        return;
      }
      if(!exPass.test(loginPass)){
        $(".loginBox .error").css("visibility", "visible");
        $(".error-text").text('密码不能含有非法字符，长度在6-18之间');
        return;
      }
      
      this.axios
      .get("/api/users/login", {
        params: {
          loginName: loginName, 
          loginPass: loginPass,
          isRemember: isRemember
        }
      }).then(function(res){
        if(res.data.code != 200){
          $(".loginBox .error").css("visibility", "visible");
          $(".error-text").text(res.data.message);
          return;
        }
        vm.$router.push({path: '/'});
        $(".user-login-reg").css("display", "none");
        $(".user-login-img").css("display", "block");
      }).catch(function(err){
        console.log(err);
      })
    }
  }
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
.login-box {
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
  padding: 20px 0px 10px 50px;
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  position: relative;
  margin-left: 20px;
  margin-top: 40px;
}
.login-right .tag {
  width: 300px;
  margin-left: 2px;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
  display: flex;
  flex-direction: row;
}
.login-right .tag li {
  font-size: 20px;
  font-weight: normal;
  line-height: 60px;
  cursor: pointer;
}
.login-right .tag li.active {
  color: #418fe4;
  border-bottom: 2px solid #418fe4;
}
.fr {
  position: absolute;
  right: 2px;
}
.passContent {
  display: none;
}
.passContent.active {
  display: block;
}
.passContent .span8 {
  width: 380px;
  margin: 0;
  /* border: 1px solid red; */
}
.passContent ul li.error {
  width: 300px;
  height: 32px;
  line-height: 32px;
  background-color: #fff;
  font-style: normal;
  color: #ff8161;
  visibility: hidden;
}
.icons {
  background: url("../assets/img/icons.png") no-repeat;
}
.passContent .error .fail {
  width: 24px;
  height: 32px;
  background-position: -90px -197px;
  display: inline-block;
  vertical-align: middle;
}
#reg-text{
    width: 200px;
    text-align: left;
}
.passContent ul li {
  width: 330px;
}
.passContent ul li.normal {
  margin-bottom: 28px;
}
.passContent .input {
  width: 282px;
}
.passContent input {
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
input[type="text"],
input[type="password"] {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border linear 0.2s, box-shadow linear 0.2s;
}
.focus-input {
  border-color: #38f !important;
}
.passContent .submit {
  width: 300px;
  height: 50px;
  line-height: 50px;
  border: none;
  background-color: #418fe4;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  padding: 0;
}
.passContent .submit:hover {
  background-color: #4896e9;
  border-bottom: 1px solid #4081e4;
  box-shadow: 1px 1px 1px #ccc;
}
.loginBox ul li:nth-child(5) {
  width: 300px;
  height: 38px;
  margin-top: 3px;
}
.passContent .remember,
.passContent .agreement,
.passContent .mar-login {
  font-size: 14px;
  line-height: 38px;
  color: #7f7f7f;
}
.passContent input[type="checkbox"] {
  border: none;
}
.passContent .acceptIpt {
  margin: 0px 6px 0 0;
  padding: 0;
}
.passContent .c-fl {
  color: #686868;
  cursor: default;
  line-height: 38px;
}
.passContent ul li.accept {
  margin: -20px 0 18px;
}
.pr05 {
  padding-right: 5px;
}
.text-link {
  color: #4c8fd1;
}
.reg-submit {
  margin-top: -10px;
}
</style>
