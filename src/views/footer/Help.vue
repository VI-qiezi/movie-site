<template>
    <div class="help">
        <div class="ques-index">
          当前位置：
          <a href="/">爱电影网</a>
          >
          <span id="help-index">新手上路</span>
        </div>
        <div class="ques-containt clearfix">
          <div class="ques-containt-L">
            <!-- <router-link to="/chose-new" class="span cur">
              <span class="a1"></span>
              新手上路
            </router-link> -->
            <a class="span" @click=choseNew>
              <span class="a1"></span>
              新手上路
            </a>
            <a class="span" @click=choseProblem>
              <span class="a2"></span>
              常见问题
            </a>
            <a class="span" @click=chosePlay>
              <span class="a3"></span>
              播放问题
            </a>
            <div class="ques-tel-pc">
              <span class="a4"></span>
              客服热线
              <p class="p1">400-066-2000 转2</p>
              <p class="p2">9:00-21:00</p>
              <span class="a5"></span>
              客服邮箱
              <p class="p1">vipservice@iMovies.com</p>
            </div>
          </div>
          <div class="ques-contanit-R">
            <div class="ques-line" style="display:none">
              <div class="ques-line-ti">安全管理声明</div>
              <div class="ques-line-con">
                <p style="margin-bottom:8px">任何注册用户不得利用爱电影网络院线危害国家安全、泄露国家秘密，不得侵犯国家、社会、集体利益和其他公民的合法权益，不得制作、复制和传播下列信息，否则，一经发现，一律给予删贴处理。情节严重的，移交司法机关处理。</p>
                <p>1.煽动抗拒、破坏宪法和法律、行政法规实施的；</p>
                <p>2.煽动颠覆国家政权、推翻社会主义制度的；</p>
                <p>3.煽动分裂国家、破坏国家统一的；</p>
                <p>4.煽动民族仇恨、民族歧视，破坏民族团结的；</p>
                <p>5.捏造或者歪曲事实，散布谣言，扰乱社会秩序的；</p>
                <p>6.宣扬封建迷信、淫秽、色情、赌博、暴力、凶杀、恐怖、教唆犯罪的；</p>
                <p>7.公然侮辱他人或者捏造事实诽谤他人的，或者进行其他恶意攻击的；</p>
                <p>8.损害国家机关信誉的；</p>
                <p>9.其他违反宪法和法律行政法规的；</p>
                <p>10.没有定性，不利于社会稳定的言论；</p>
                <p>11.渲染凶杀、血腥、暴力、色情等情节的；</p>
                <p>12.涉及少数民族及民族地区突发事件的。</p>
              </div>
              <div class="ques-line-ti">轻松体验  仅需四步</div>
              <div class="ques-line-con">
                <p>1) 注册/登录</p>
                <p>用户观看或购买爱电影网络院线付费节目均需要先登录，而后才能进行观看或购买操作，极大地保护了用户信息的安全性。</p>
                <p>2)充值</p>
                <p>爱电影网络院线支持多种支付方式，您可以通过手机支付、易宝、快钱、支付宝、网银等进行支付，满足不同用户支付习惯。</p>
                <p>3)选择支付方式</p>
                <p>您可以选择单独观看一部电影或升级成为VIP用户免费观看所有高清电影。</p>
                <p>4)观看</p>
              </div>
            </div>
            <div class="ques-line" style="display:none">
              <div class="ques-line-ti">什么是包月计划？</div>
              <div class="ques-line-con">
                <p>尊敬的用户您好！</p>
                <p>包月计划是我们为广大付费用户量身定制的一款专属特惠活动，价格更低廉，操作更方便。</p>
                <p>凡是参加包月计划的会员，可以从付费包月之日起不限次数的观看30天的电影（特殊注明不参加包月的电 影除外）</p>
              </div>
              <div class="ques-line-ti">什么是有效期？如何计算有效期？</div>
              <div class="ques-line-con">
                <p>尊敬的用户您好！</p>
                <p>有效期指支付一次可享有的节目租赁时长。节目有效期可在节目页及支付过程中查看。</p>
                <p style="margin-top:8px">【收费节目是否可以下载？】</p>
                <p>尊敬的用户您好！</p>
                <p>为了保护用户的权益和版权方的权益，我们目前不提供下载服务，请谅解。</p>
                <p style="margin-top:8px">【收费的节目是否是正版？是否是高清？】</p>
                <p>尊敬的用户您好！</p>
                <p>爱电影网VIP影院所有收费节目均为正版，且均为超高清720P视频。</p>
                <p style="margin-top:8px">【观看是否有带宽限制？】</p>
                <p>尊敬的用户您好！</p>
                <p>由于爱电影网VIP影院所有节目均为高清视频，所以建议您的网络带宽至少在一兆以上才能正常观看电影。</p>
              </div>
            </div>
            <div class="ques-line" style="display:none">
              <div class="ques-line-ti">症状: 身份验证失败，浏览器不支持所导致</div>
              <div class="ques-images">
                <img src="//static.m1905.cn/images/vip/imagers/help15.jpg">
              </div>
              <div class="ques-line-con">
                <p>
                  解决办法：点击浏览器地址栏右侧按钮切换至兼容浏览模式，或者更换浏览器，推荐下载 
                  <a target="_blank" href="//windows.microsoft.com/zh-CN/internet-explorer/download-ie">IE浏览器下载</a>
                  <a target="_blank" href="//rj.baidu.com/soft/detail/14744.html?ald"> Chrome浏览器下载</a>
                </p>
              </div>
              <div class="ques-line-ti">症状: 播放器黑屏, 看不到播放器或播放器区域空白。</div>
              <div class="ques-line-con">
                <p>【解决方法:】</p>
                <p>
                  1.安装浏览器流畅观看： 
                  <a target="_blank" href="//windows.microsoft.com/zh-CN/internet-explorer/download-ie">IE浏览器下载</a>
                  <a target="_blank" href="//rj.baidu.com/soft/detail/14744.html?ald"> Chrome浏览器下载</a>
                </p>
                <p>注: 下载安装后, 须关闭全部浏览器窗口, 重新开启浏览器方可正常观看。</p>
                <p>
                  2.更新Flash插件 。 
                  <a target="_blank" href="//get.adobe.com/cn/flashplayer/">下载最新版Flash</a>
                </p>
                <p>注：更新Flash插件后，请重启电脑生效。</p>
                <p>3.如问题未解决, 您可以为浏览器开启Java功能。</p>
                <p>打开浏览器的"工具" > "Internet选项", 切换到"安全"选项卡, 点击"默认级别"按钮, 确定。如出现警告提示框, 请选择"是"。(见下图)</p>
                <div class="ques-images">
                  <img src="//static.m1905.cn/images/vip/imagers/help07.jpg">
                </div>
                <p>也可以手动设置。</p>
                <p>
                  在上一步基础上, 选择左边按钮"自定义级别", 拖动滚动条, 找到关于脚本的描述, 点选启用。如果您是FireFox用户, 在"工具">"选项" >"内容"位置, 勾选Java和JavaScript即可。
                </p>
                <p>4.开启Active功能</p>
                <p>与开启Java相同。选择"默认级别"按钮, 系统将默认开启ActiveX。</p>
              </div>
              <div class="ques-line-ti">症状: 播放视频很卡, 无法完整播放视频。</div>
              <div class="ques-line-con">
                <p>【推荐方案:】</p>
                <p>1.暂停其它的下载活动, 如: BT下载、其它P2P软件的数据交流。可显著提高视频的流畅度。</p>
                <p>2.由于VIP影院电影是720p的超高清视频（部分大片可定制1080P），基本带宽需求是1M以上带宽，所以如果带宽未达到1M的会员请勿定制。</p>
                <p>3.避开上网热门时段通常，上网热门时段（20：00-21：00）发生网络拥塞的机会较大。网络拥塞分两种情况，一是用户端网络 拥塞，如有些小区局域网宣称宽带接入，但如果很多人共用一个出口（通常共用10M甚至2M，北京的小区常见的配置），高峰期带宽肯定不足。二是服务端拥塞，超过我们的带宽和许可证量。这种情况极其罕见，如果遇到此类问题，请错峰观看。</p>
              </div>
              <div class="ques-line-ti">症状: 播放显示更新失败，由于同时开启多个浏览器同时更新导致出现更新失败</div>
              <div class="ques-images">
                <img src="//static.m1905.cn/images/vip/imagers/help08.jpg" alt="">
              </div>
              <div class="ques-line-con">
                <p>解决办法：避免同时两个浏览器一起更新该模块，更新时只打开一个浏览器更新。</p>
              </div>
              <div class="ques-line-ti">症状: 播放器解析文件失败，由于网速慢导致部分文件无法加载</div>
              <div class="ques-images">
                <img src="//static.m1905.cn/images/vip/imagers/help10.jpg" alt="">
              </div>
              <div class="ques-line-con">
                <p>解决办法：刷新该页面，重试。</p>
              </div>
              <div class="ques-line-ti">症状: 播放器文件加载出错，无法访问网络所导致</div>
              <div class="ques-images">
                <img src="//static.m1905.cn/images/vip/imagers/help11.jpg" alt="">
              </div>
              <div class="ques-line-con">
                <p>解决办法：刷新该页面，重试。</p>
              </div>
              <div class="ques-line-ti">症状: 访问超时，网速很慢所导致</div>
              <div class="ques-images">
                <img src="//static.m1905.cn/images/vip/imagers/help12.jpg" alt="">
              </div>
              <div class="ques-line-con">
                <p>解决办法：刷新该页面，重试。</p>
              </div>
              <div class="ques-line-ti">症状: 播放出错，网络连接不上或断线所导致</div>
              <div class="ques-images">
                <img src="//static.m1905.cn/images/vip/imagers/help14.jpg" alt="">
              </div>
              <div class="ques-line-con">
                <p>解决办法：刷新该页面，重试。</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import "../../assets/libs/jquery.min.js";
export default {
  name: "Help",
  created() {
    // this.$emit("public_header", false);
    // this.$emit("public_footer", false);
  },
  mounted() {
    this.changeQues();
  },
  methods: {
    changeQues: function() {
      var chose = this.$route.query.chose;
      if (chose == "new") {
        $(".ques-containt-L .span:nth-child(1)").addClass("cur");
        $(".ques-contanit-R .ques-line:nth-child(1)").css("display", "block");
      } else if (chose == "problem") {
        $("#help-index").text("常见问题");
        $(".ques-containt-L .span:nth-child(2)").addClass("cur");
        $(".ques-contanit-R .ques-line:nth-child(2)").css("display", "block");
      } else {
        $("#help-index").text("播放问题");
        $(".ques-containt-L .span:nth-child(3)").addClass("cur");
        $(".ques-contanit-R .ques-line:nth-child(3)").css("display", "block");
      }
    },
    choseNew: function(){
      $("#help-index").text("新手上路");
      $(".ques-containt-L .span").removeClass("cur");
      $(".ques-contanit-R .ques-line").css("display", "none");
      $(".ques-containt-L .span:nth-child(1)").addClass("cur");
      $(".ques-contanit-R .ques-line:nth-child(1)").css("display", "block");
    },
    choseProblem: function(){
      $("#help-index").text("常见问题");
      $(".ques-containt-L .span").removeClass("cur");
      $(".ques-contanit-R .ques-line").css("display", "none");
      $(".ques-containt-L .span:nth-child(2)").addClass("cur");
      $(".ques-contanit-R .ques-line:nth-child(2)").css("display", "block");
    },
    chosePlay: function(){
      $("#help-index").text("播放问题");
      $(".ques-containt-L .span").removeClass("cur");
      $(".ques-contanit-R .ques-line").css("display", "none");
      $(".ques-containt-L .span:nth-child(3)").addClass("cur");
      $(".ques-contanit-R .ques-line:nth-child(3)").css("display", "block");
    }
  }
};
</script>

<style scoped>
body {
  font: 12px/1.5 "Microsoft YaHei";
  color: #000;
}
.help {
  min-width: 980px;
  padding: 0 100px 70px;
  margin: 0 auto;
  box-sizing: border-box;
  background-color: #f3f3f3;
}
.help {
  width: 100% !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
}
.ques-index {
  width: 220px;
  height: 20px;
  font-size: 12px;
  color: rgb(95, 95, 95);
  font-family: "宋体";
  padding-top: 30px;
  padding-bottom: 25px;
}
.ques-index a {
  color: #5f5f5f;
}
.ques-containt {
  overflow: hidden;
  zoom: 1;
}
.ques-containt-L {
  width: 18.36734693877551%;
  float: left;
  border-top: 1px solid #d9d9d9;
  margin-bottom: 20px;
  overflow: hidden;
}
.ques-containt-L .span {
  height: 66px;
  line-height: 66px;
  font-size: 20px;
  font-family: "微软雅黑";
  color: rgb(70, 70, 70);
  margin-left: 0;
  cursor: pointer;
  display: block;
  border-width: 1px 1px 1px;
  border-style: none solid solid;
  border-color: rgb(217, 217, 217) rgb(217, 217, 217) rgb(217, 217, 217);
  border-image: initial;
  border-top: none;
}
.ques-containt-L .span.cur {
  background-color: #ffffff;
}
.ques-containt-L .span span {
  width: 24px;
  height: 24px;
  margin: 21px 20px 0 24px;
  float: left;
  background: url("../../assets/img/vip-ques.png") no-repeat;
}
.ques-containt-L .span.cur span.a1 {
  background-position: -50px 0;
}
.ques-containt-L .span span.a2 {
  background-position: 0 -37px;
}
.ques-containt-L .span span.a3 {
  background-position: 0 -102px;
}
.ques-containt-L .ques-tel-pc {
  line-height: 60px;
  font-size: 20px;
  font-family: "微软雅黑";
  color: rgb(70, 70, 70);
  cursor: pointer;
  display: block;
  padding-bottom: 25px;
  border: 1px solid rgb(217, 217, 217);
  border-image: initial;
  margin-top: 42px;
  overflow: hidden;
}
.ques-containt-L .ques-tel-pc .a4,
.ques-containt-L .ques-tel-pc .a5 {
  width: 24px;
  height: 24px;
  margin: 21px 20px 0 24px;
  float: left;
  background: url("../../assets/img/vip-ques.png") no-repeat;
}
.ques-containt-L .ques-tel-pc .a4 {
  background-position: 0 -136px;
}
.ques-containt-L .ques-tel-pc p {
  text-align: center;
  margin: 0;
  padding: 0;
}
.ques-containt-L .ques-tel-pc p.p1 {
  font-size: 20px;
  line-height: 30px;
  color: #0090cd;
}
.ques-containt-L .ques-tel-pc p.p2 {
  font-size: 12px;
  line-height: 30px;
  padding-bottom: 18px;
  margin-bottom: 10px;
  border-bottom: 1px dashed #cccccc;
}
.ques-containt-L .ques-tel-pc .a5 {
  background-position: 0 -173px;
  width: 26px;
}
.ques-contanit-R {
  width: 79.28571428571429%;
  float: right;
  border: 1px solid #d9d9d9;
  margin-bottom: 20px;
}
.ques-contanit-R .ques-line-ti {
  padding-left: 21px;
  line-height: 47px;
  font-size: 18px;
  font-family: "微软雅黑";
  background-color: #ffffff;
  border-bottom: 1px solid rgb(217, 217, 217);
}
.ques-contanit-R .ques-line-con {
  padding: 15px 30px;
  font-size: 12px;
  line-height: 23px;
}
.ques-contanit-R .ques-line-con p {
  margin: 0;
  padding: 0;
  margin-top: 1px;
  margin-bottom: 1px;
  text-indent: 2em;
}
.ques-images {
  width: 100%;
}
.ques-images img {
  max-width: 100%;
  margin: 10px auto;
  display: block;
}
.ques-contanit-R a {
  color: #1e8fdb;
}
</style>
