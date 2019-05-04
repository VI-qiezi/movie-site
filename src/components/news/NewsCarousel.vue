<template>
    <div class="news-carousel">
        <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="/new?5cb1f805904f538324e91c87" title="束焕为《鼠胆英雄》创作剧本 岳云鹏：不是喜剧" target="_blank">
                        <img src="http://image11.m1905.cn/uploadfile/2019/0409/thumb_1_660_330_20190409114550725475.jpg" alt="束焕为《鼠胆英雄》创作剧本 岳云鹏：不是喜剧">
                    </a>
                    <div class="tc-mask-title">
                        <a href="/new?5cb1f805904f538324e91c87" target="_blank" title="束焕为《鼠胆英雄》创作剧本 岳云鹏：不是喜剧">束焕为《鼠胆英雄》创作剧本 岳云鹏：不是喜剧</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <a href="/new?5cb1f805904f538324e91c88" title="《小丑》首款预告海报双发 邪魅反派如何炼成？" target="_blank">
                        <img src="http://image11.m1905.cn/uploadfile/2019/0408/thumb_1_660_330_20190408120902164362.jpg" alt="《小丑》首款预告海报双发 邪魅反派如何炼成？">
                    </a>
                    <div class="tc-mask-title">
                        <a href="/new?5cb1f805904f538324e91c88" target="_blank" title="《小丑》首款预告海报双发 邪魅反派如何炼成？">《小丑》首款预告海报双发 邪魅反派如何炼成？</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <a href="/new?5cb1f805904f538324e91c89" title="电影《九龙不败》定档4月30日 张晋化身不败神探" target="_blank">
                        <img src="http://image11.m1905.cn/uploadfile/2019/0409/thumb_1_660_330_20190409121027992263.jpg" alt="电影《九龙不败》定档4月30日 张晋化身不败神探">
                    </a>
                    <div class="tc-mask-title">
                        <a href="/new?5cb1f805904f538324e91c89" target="_blank" title="电影《九龙不败》定档4月30日 张晋化身不败神探">电影《九龙不败》定档4月30日 张晋化身不败神探</a>
                    </div>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination" style="z-index: 10; width:98%;"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next swiper-button-white" style="z-index: 10;"></div>
            <div class="swiper-button-prev swiper-button-white" style="z-index: 10;"></div>
        </div>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";
export default {
  name: "NewsCarousel",
  mounted() {
    this.$nextTick(function() {
      var swiper = new Swiper(".swiper-container", {
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
    });
  }
};
</script>

<style scoped>
.news-carousel {
  width: 100%;
  z-index: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 50%;
  margin-top: 20px;
}
.swiper-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}
.swiper-slide {
  position: relative;
}
.tc-mask-title {
  width: 100%;
  height: 30px;
  background: rgba(0, 0, 0, 0.4);
  padding: 10px 0;
  display: inline-block;
  position: absolute;
  left: 0px;
  bottom: 0px;
}
.tc-mask-title a {
  width: auto;
  height: 30px;
  line-height: 30px;
  font-size: 19px;
  color: #ffffff;
  padding-left: 18px;
  padding-right: 0;
  margin: 0;
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.swiper-pagination {
  text-align: right;
}
</style>
