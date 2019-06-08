<template>
    <div>
        <van-nav-bar :title="title" left-text="返回" left-arrow fixed @click-left="handleBack">

        </van-nav-bar>
    </div>
</template>

<script>
    import  {mapState} from 'vuex'
    export default {
        name: "TopBar",
        methods:{
            handleBack(){
                this.$router.go(-1);
            }
        },
        computed:{
            ...mapState(['title'])
        }
    }
</script>

<style scoped>

</style>