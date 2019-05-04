<template>
  <div class="home">
    <Carousel></Carousel>
    <MovieNews></MovieNews>
    <MovieComments></MovieComments>
    <MoviesBox></MoviesBox>
  </div>
</template>

<script>
import Carousel from '../components/home/Carousel.vue'
import MovieNews from '../components/home/MovieNews.vue'
import MovieComments from '../components/home/MovieComments.vue'
import MoviesBox from '../components/home/MoviesBox.vue'

export default {
  name: "home",
  components: {
    Carousel,
    MovieNews,
    MovieComments,
    MoviesBox
  }
};
</script>
