<template>
    <div class="goTop">
        <div id="goTop" v-show="goTopShow" @click="goTop">
            <a href="javascript:void(0);" class="return-back affix" title="返回顶部">
            </a>
        </div>
    </div>
</template>

<script>
import "../assets/libs/jquery.min.js"
export default {
    name: "goTop",
    data() {
        return {
            scrollTop: "",
            goTopShow: false
        }
    },
    watch: {
        scrollTop(val){
            if(this.scrollTop > 450){
                this.goTopShow = true;
            } else {
                this.goTopShow = false;
            }
        }
    },
    methods: {
        handleScroll() {
            this.scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            // console.log(this.scrollTop);
            if (this.scrollTop > 450) {
                this.goTopShow = true;
            }
        },
        goTop() {
            let timer = null,
                _that = this;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn() {
                if (_that.scrollTop > 0) {
                    _that.scrollTop -= 50;
                    document.body.scrollTop = document.documentElement.scrollTop =
                        _that.scrollTop;
                    timer = requestAnimationFrame(fn);
                } else {
                    cancelAnimationFrame(timer);
                    _that.goTopShow = false;
                }
            });
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style scoped>
#goTop {
  position: fixed;
  right: 40px;
  bottom: 50px;
  width: 60px;
  height: auto;
  z-index: 999;
}
#goTop .affix {
  width: 60px;
  height: 50px;
  display: block;
}
#goTop .return-back {
  background: url("../assets/img/icons-top.png") no-repeat;
  background-position: 0px -135px;
  margin-top: 10px;
  background-color: rgba(0, 0, 0, 0.8);
}
#goTop .return-back:hover {
  background-color: rgba(0, 0, 0, 0);
}
</style>
