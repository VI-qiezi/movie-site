<template>
    <div class="movie-news">
        <div class="container">
            <div id="content">
                <div class="mod">
                    <MovieNewsLeft></MovieNewsLeft>
                    <MovieNewsRight></MovieNewsRight>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MovieNewsLeft from '../components/news/MovieNewsLeft.vue'
import MovieNewsRight from '../components/news/MovieNewsRight.vue'
export default {
    name: 'MovieNews',
    components:{
        MovieNewsLeft,
        MovieNewsRight
    }
}
</script>

<style scoped>
.movie-news{
    width: 100%;
    background-color: #ffffff;
}
.container{
    width: 980px;
    padding: 0 10px;
    margin: 0 auto;
}
#content{
    width: 100%;
    margin: 0;
    padding: 0;
}
.mod{
    zoom: 1;
    margin-left: -10px;
    margin-right: -10px;
    display: flex;
    flex-direction: row;
}
</style>