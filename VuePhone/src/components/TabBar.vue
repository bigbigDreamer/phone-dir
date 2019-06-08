<template>
    <div>
        <van-tabbar
                v-model="active"
                fixed
                safe-area-inset-bottom
                @change="handleChange"
        >
            <van-tabbar-item icon="home-o">主页</van-tabbar-item>
            <van-tabbar-item icon="search">搜索</van-tabbar-item>
            <van-tabbar-item icon="setting-o">反馈</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import  {mapActions} from 'vuex'
    export default {
        name: "TabBar",
        data(){
            return {
                active:0
            }
        },
        methods:{
            handleChange(args){
               this.$router.push({name:args+''});
               switch (args) {
                   case 0:this.changeTitle('主页');
                   break;
                   case 1:this.changeTitle('搜索');
                   break;
                   case 2:this.changeTitle('反馈');
                   break;
                   default:this.changeTitle('主页');
               }
            },
            ...mapActions(['changeTitle'])
        }
    }
</script>

<style scoped>

</style>