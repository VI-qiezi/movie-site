<template>
    <div class="video-box">
        <video id="myVideo" class="video-js vjs-default-skin vjs-big-play-centered" poster="http://vjs.zencdn.net/v/oceans.png">
            <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {
    name: 'myVideo',
    data() {
        return {
            
        }
    },
    mounted() {
        this.initVideo();
    },
    methods: {
        initVideo(){
            // 初始化视频方法
            let myPlayer = this.$video(myVideo, {
                controls: true,
                autoplay: "false",
                preload: "auto",
                width: "800px",
                height: "400pxs",
                playbackRates: [0.5, 1, 1.5, 2]
            })
        }
    },
}
</script>

<style scoped>

</style>
