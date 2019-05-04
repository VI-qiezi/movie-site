<template>
    <div class="movie-info">
        <section class="banner">
            <div class="banner-img" style="background: url(http://static.m1905.cn/mdb/img/banner-blackbig.jpg) no-repeat center center;background-size: cover;"></div>
        </section>
        <div class="movie-body">
            <section class="infomation">
                <div class="container">
                    <div class="container-left">
                        <div class="poster">
                            <a href="javascript" class="picHover">
                                <img :src="currentMovie.infoPicture" :alt="currentMovie.title">
                            </a>
                            <a href="" class="icon-banner" target="_blank">
                                播放正片
                                <i class="icon-playBtn"></i>
                            </a>
                        </div>
                    </div>
                    <div class="container-right">
                        <h1>
                            {{currentMovie.title}}
                            <span v-if="currentMovie.year">({{currentMovie.year}})</span>
                            <span class="score" v-if="currentMovie.score">
                                <b>{{currentMovie.scoreInt}}</b>{{currentMovie.scoreDec}}
                            </span>
                        </h1>
                        <h2 v-if="currentMovie.EnglishTitle">{{currentMovie.EnglishTitle}}</h2>
                        <div class="information-list">
                            <span class="information-item" v-if="currentMovie.releaseTime">
                                {{currentMovie.releaseTime}}({{currentMovie.region}})
                            </span>
                            <i v-if="currentMovie.type">|</i>
                            <span class="information-item" v-if="currentMovie.type">
                                <span v-for="(t,i) in currentMovie.type" :key="i">{{t}}&nbsp;</span>
                            </span>
                            <i v-if="currentMovie.Country">|</i>
                            <span class="information-item" v-if="currentMovie.Country">
                                {{currentMovie.Country}}
                            </span>
                            <i v-if="currentMovie.language">|</i>
                            <span class="information-item" v-if="currentMovie.language">
                                {{currentMovie.language}}
                            </span>
                            <i v-if="currentMovie.duration">|</i>
                            <span class="information-item" v-if="currentMovie.duration">
                                {{currentMovie.duration}}
                            </span>
                            <i v-if="currentMovie.dimensional">|</i>
                            <span class="information-item" v-if="currentMovie.dimensional">
                                {{currentMovie.dimensional}}
                            </span>
                        </div>
                        <div class="creator">
                            <a href="javascript:void(0)" class="creator-resume first" :title="currentMovie.director.name" v-if="currentMovie.director">
                                <div class="creator-portrait picHover">
                                    <img :src="currentMovie.director.photo" :alt="currentMovie.director.name" width="64" height="64">
                                </div>
                                <div class="creator-name">{{currentMovie.director.name}}</div>
                                <span class="creator-class">导演</span>
                            </a>
                            <div class="creator-divide" v-if="currentMovie.actors"></div>
                            <a href="javascript:void(0)" class="creator-resume" v-for="(a,i) in currentMovie.actors" :key="i">
                                <div class="creator-portrait picHover">
                                    <img :src="a.photo" :alt="a.name" width="64" height="64">
                                </div>
                                <div class="creator-name">{{a.name}}</div>
                                <div class="creator-character">{{a.character}}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import "../assets/libs/jquery.min.js";
import "../assets/libs/purl.min.js";
export default {
    name: "MovieInfo",
    data() {
        return {
            currentMovie: []
        }
    },
    created() {
        this.getCurrentMovie();
    },
    methods: {
        getCurrentMovie(){
            var vm = this;
            var id = purl().data.attr.query;
            this.axios.get("/api/movies/getCurrentMovie", {params: {id: id}})
            .then(function(res){
                if(res.data.code == 200){
                    vm.currentMovie = res.data.currentMovie;
                    // console.log(vm.currentMovie);
                }
            })
        }
    },
}
</script>

<style scoped>
.banner{
    width: 100%;
    height: 520px;
    min-width: 1200px;
    background-color: #f5f5f5;
    position: relative;
}
.banner-img{
    width: 100%;
    height: 230px;
    font-size: 0;
}
.movie-body{
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}
.infomation{
    width: 100%;
    height: 420px;
    margin-top: -420px;
    color: #bfbfbf;
}
.container{
    width: 1200px;
    display: flex;
    flex-direction: row;
}
.container-left{
    width: 283px;
    height: 100%;
    position: relative;
    z-index: 2;
}
.poster{
    width: 283px;
    height: 390px;
    position: relative;
}
.poster img{
    width: 100%;
    height: 100%;
    box-shadow: 0 0 7px rgba(0,0,0,.5);
    cursor: pointer;
}
.picHover img{
    transition:box-shadow .6s ease-out,transform .1s ease-in,-webkit-filter .6s ease-out
}
.picHover:hover img{
    -webkit-filter:saturate(1.2) contrast(1.2) brightness(1.1)
}
.picHover:active img{
    transform:scale(0.97) translateZ(0)
}
.picHover:visited img{
    transition:box-shadow 1s ease-out,transform 0s ease,-webkit-filter 1s ease-out
}
.icon-banner{
    width: 142px;
    height: 44px;
    background-color: rgb(173, 133, 74);
    border-radius: 30px;
    outline: 0;
    position: absolute;
    bottom: 42px;
    right: 0;
    z-index: 20;
    color: #ffffff;
    font-size: 22px;
    line-height: 44px;
    padding-left: 15px;
    margin-right: -9px;
    font-style: normal;
    cursor: pointer;
}
.icon-playBtn{
    width: 29px;
    height: 29px;
    display: inline-block;
    background: url("../assets/img/播放.png") no-repeat;
    background-size: 29px 29px;
    vertical-align: middle;
    background-color: #ffffff;
    border-radius: 35px;
    position: absolute;
    top: 8px;
    right: 15px;
}
.container-right{
    width: 917px;
    height: 100%;
    position: relative;
    z-index: 1;
}
h1{
    min-height: 47px;
    font-size: 42px;
    color: #ffffff;
    line-height: 42px;
    margin: 0;
    padding-top: 24px;
    padding-bottom: 0;
    margin-left: 30px; 
}
h1 span{
    font-size: 36px;
    font-weight: 400;
    font-family: Verdana;
    margin-left: 16px;
}
.score{
    font-size: 40px;
    color: #b28850;
    line-height: 40px;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0;
    margin-left: 20px;
}
.score b{
    font-size: 50px;
    font-weight: 400;
}
h2{
    min-height: 26px;
    font-size: 24px;
    color: #ffffff;
    line-height: 24px;
    font-weight: 400;
    font-family: Verdana;
    padding-top: 15px;
    padding-bottom: 19px;
    margin: 0;
    margin-left: 30px;
}
.information-list{
    position: relative;
    padding: 0 20px 0 16px;
}
.information-item{
    display: inline-block;
    font-size: 15px;
    color: black;
    line-height: 15px;
    padding-top: 29px;
    padding-bottom: 34px;
    margin: 0;
    padding-left: 14px;
    padding-right: 19px;
    vertical-align: middle;
    cursor: default;
}
.information-list i{
    font-style: normal;
}
.creator{
    height: 119px;
    text-align: center;
    display: flex;
    flex-direction: row;
}
.creator-resume{
    width: 76px;
    outline: 0;
    position: relative;
}
.creator-resume.first{
    margin-left: 30px;
}
.creator-portrait{
    width: 76px;
    height: 76px;
    margin: 0 auto;
}
.creator-portrait img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
}
img{
    border: none;
    vertical-align: top;
}
.creator-name{
    width: 100px;
    height: 15px;
    font-size: 15px;
    color: black;
    line-height: 15px;
    padding-top: 9px;
    padding-bottom: 0;
    margin: 0;
    margin-left: -12px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
}
.creator-name:hover{
    color: #37a;
}
.creator-class{
    width: 39px;
    text-align: center;
    background-color: #b28850;
    font-size: 12px;
    color: #ffffff;
    line-height: 18px;
    border-radius: 9px;
    position: absolute;
    top: 58px;
    left: 47px;
}
.creator-divide{
    width: 1px;
    height: 114px;
    background: #ddd;
    margin: 5px 34px 0;
}
.creator-character{
    width: 130px;
    height: 15px;
    font-size: 13px;
    color: #999;
    line-height: 13px;
    padding-top: 6px;
    padding-bottom: 0;
    margin: 0;
    margin-left: -27px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
}
.creator-resume+.creator-resume {
    margin-left: 50px;
}
</style>
