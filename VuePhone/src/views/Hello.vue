<template>
    <div class="swiper">
        <van-swipe indicator-color="white" @change="handleChange" touchable>
            <van-swipe-item>
                <img src="../assets/swiper4.jpg" alt="" class="img">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/swiper2.jpg" alt="" class="img">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/swiper3.jpg" alt="" class="img">
            </van-swipe-item>
            <van-swipe-item>
                <img src="../assets/swiper1.jpg" alt="" class="img">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "Hello",
        methods: {
            handleChange(index) {
                return index === 3 ? this.$router.push({name: '0'}) : true;
            }
        }
    }
</script>

<style scoped lang="less">
.swiper{
    .img{
        width: 100%;
    }
}

</style>