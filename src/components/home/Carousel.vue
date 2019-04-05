<template>
    <div class="carousel">
        <!-- Swiper -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/1.jpg" alt="中国合伙人2"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/2.jpg" alt="那条河"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/3.jpg" alt="半个月亮"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/4.jpg" alt="大导归来"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/5.jpg" alt="一出好戏"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/6.jpg" alt="龙藏深泉王隐林"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/7.jpg" alt="来电狂响"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/8.jpg" alt="破·局"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/9.jpg" alt="心理罪"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="../../assets/img/swiper/10.jpg" alt="你的名字"></a>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination" style="z-index: 10;"></div>
            <!-- Add Arrows -->
            <div class="swiper-button-next" style="z-index: 10;"></div>
            <div class="swiper-button-prev" style="z-index: 10;"></div>
        </div>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.min.css";
import Swiper from "swiper";

export default {
  name: "Carousel",
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
.swiper-container {
  overflow: hidden;
  width: 980px;
  height: 322px;
  padding-top: 18px;
  border: 0;
}
</style>
</style>
