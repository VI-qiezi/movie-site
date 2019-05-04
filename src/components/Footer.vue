<template>
    <div class="footer">
        <div class="helpBox">
            <div class="wrap">
                <div class="ele ele-first ele-link">
                    <b class="icons-il"></b>
                    <div class="txt">
                        <div class="tit">帮助中心</div>
                        <br>
                        <div class="con">
                            <router-link :to="{path: '/help', query: {chose: 'new'}}" target="_blank">新手上路</router-link><br>
                            <router-link :to="{path: '/help', query: {chose: 'problem'}}" target="_blank">常见问题</router-link><br>
                            <router-link :to="{path: '/help', query: {chose: 'play'}}" target="_blank">播放问题</router-link><br>
                        </div>
                    </div>
                </div>
                <div class="ele ele-line">
                    <b class="icons-il"></b>
                    <div class="txt">
                        <div class="tit">在线反馈</div>
                        <br>
                        <div class="con">
                            <div class="mail">
                                客服邮箱：
                                <br>
                                <span>vipservice@iMovies.com</span> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ele ele-last ele-tele">
                    <b class="icons-il"></b>
                    <div class="txt">
                        <div class="tit">客服电话</div>
                        <br>
                        <div class="con">
                            <div class="number">400-066-2000 转2</div>
                            <br>
                            <div class="time">9:00-21:00</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navBox">
            <router-link to="/about/aboutus" target="_blank">关于我们</router-link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <router-link to="/about/copyright" target="_blank">版权声明</router-link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <router-link to="/help?chose=new" target="_blank">帮助中心</router-link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <router-link to="/about/contactus" target="_blank">联系我们</router-link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <router-link to="/about/link" target="_blank">友情链接</router-link>
            <div class="footer-bottom">
                <span>网络视听许可证</span>
                <span>出版物经营许可证</span>
                <span>电影发行许可证</span>
                <span>经营性演出许可证</span>
            </div>
            <div class="copyRight">
                <span>CopyRight © 2019</span>
                国家广播电影电视总局电影卫星频道节目制作中心 版权所有
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    gotoHelp: function(val){
      return 'http://localhost:8080/help?chose='+val;
    }
  },
};
</script>

<style scoped>
.footer {
  background-color: #ebebeb;
  color: #333333;
  text-align: center;
  font-family: Helvetica, Arial;
}
.helpBox {
  border-top: 1px solid #dedede;
}
.wrap {
  min-width: 980px;
  padding: 0 100px;
  box-sizing: border-box;
}
.helpBox .wrap {
  padding: 36px 0 40px;
  font-size: 0;
  border-top: 1px solid #dedede;
  position: relative;
  top: -1px;
  margin-bottom: -1px;
}
.helpBox .ele {
  min-height: 122px;
  display: inline-block;
  border-right: 1px solid #cdcdcd;
  vertical-align: top;
  padding: 0 56px 2px;
  zoom: 1;
}
.helpBox .ele-first {
  padding-left: 0;
}
.icons-il {
  font-size: 0;
  line-height: 0;
  overflow: hidden;
  background: url("../assets/img/icons.gif") no-repeat;
}
.footer .helpBox .ele * {
  display: inline-block;
  zoom: 1;
  vertical-align: top;
}
.helpBox .ele .icons-il {
  width: 98px;
  height: 98px;
  margin-top: 3px;
}
.helpBox .ele-link .icons-il {
  background-position: 0 -318px;
}
.helpBox .ele .txt {
  font-size: 12px;
  text-align: left;
  margin-left: 18px;
}
.helpBox .ele .txt .tit {
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
}
.helpBox .ele .txt .con {
  line-height: 16px;
}
.helpBox .ele-link .txt .con {
  padding-top: 17px;
}
.footer a {
  color: #333333;
}
.helpBox .ele-link .txt .con a {
  margin-top: 12px;
}
.helpBox .ele-link .txt .con a:hover {
  text-decoration: underline;
}
.helpBox .ele-line .icons-il {
  background-position: -108px -318px;
}
.helpBox .ele-line .txt .con {
  padding-top: 29px;
}
.helpBox .ele-line .txt .con span {
  margin-top: 5px;
  font-size: 13px;
}
.helpBox .ele-last {
  padding-right: 0;
  border-right: 0;
}
.helpBox .ele-tele .icons-il {
  background-position: 0 -426px;
}
.helpBox .ele-tele .txt .con {
  margin-top: 24px;
}
.helpBox .ele-tele .number {
  color: #7f7f7f;
  font-size: 19px;
  line-height: 20px;
  font-family: Verdana;
}
.helpBox .ele-tele .time {
  margin-top: 12px;
}
.navBox {
  border-top: 4px solid #dedede;
}
.footer .navBox {
  line-height: 24px;
  padding: 22px 0 44px;
  position: relative;
  top: -4px;
  margin-bottom: -4px;
}
.navBox a {
  font-size: 13px;
  color: #333333;
}
.navBox a:hover {
  text-decoration: underline;
}
.navBox .footer-bottom {
  width: 429px;
  margin: 0 auto;
}
.footer-bottom span {
  font: 12px/28px "Microsoft Yahei";
  color: #474747;
  margin-right: 23px;
}
.navBox .copyRight {
  color: #474747;
  font: 12px/28px "Microsoft Yahei";
}
.navBox .copyRight span {
  color: #4794d8;
  margin-right: 13px;
  font-family: "Arial";
}
</style>
