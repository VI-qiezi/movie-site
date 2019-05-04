<template>
    <div class="mod-l">
        <NewsCarousel></NewsCarousel>
        <NewsLeftConent></NewsLeftConent>
    </div>
</template>

<script>
import NewsCarousel from './NewsCarousel.vue'
import NewsLeftConent from './NewsLeftConent.vue'
export default {
    name: "MovieNewsLeft",
    components: {
        NewsCarousel,
        NewsLeftConent
    }
}
</script>

<style scoped>
.mod-l{
    width: 660px;
    min-height: 1px;
    padding: 0 10px;
    /* border: 1px solid red; */
}
</style>
