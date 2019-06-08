<template>
    <div class="list">
        <van-list
                v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad"
        >
            <van-cell
                    v-for="(item,index) in list"
                    :key="index"
                    value="更多"
                    @click="handleClick(item)"
                    is-link
                    :arrow-direction="arrow"
                    >
                <van-row>
                    <van-col span="6" style="text-align: center;">
                        <img :src="item.avatar" alt="" style="width: 40px;height: 40px;border-radius: 50%">
                    </van-col>
                    <van-col span="18" style="text-align: left">{{item.username}}</van-col>
                </van-row>
            </van-cell>
        </van-list>

    </div>
</template>

<script>
    import  mock from '../mock'
    export default {
        name: "PhoneList",
        data() {
            return {
                list: mock,
                loading: false,
                finished: false,
                arrow:'',
                UserInfo:{
                    avatar: "https://avatars2.githubusercontent.com/u/39019913?s=460&v=4",
                    qq: 1826001146,
                    telephone: 17693104287,
                    username: "王彬林",
                    wechat: "17693104287",
                },

            }
        },
        methods:{
            onLoad() {
                // 异步更新数据
                this.finished = true;
                this.loading = false;
                // setTimeout(() => {
                //     // for (let i = 0; i < 10; i++) {
                //     //     this.list.push(this.list.length + 1);
                //     // }
                //     // 加载状态结束
                //     this.loading = false;
                //
                //     // 数据全部加载完成
                //     if (this.list.length >= 20) {
                //
                //     }
                // }, 500);
            },
            handleClick(item){
                this.$router.push({name:'Contact',params:{
                        avatar:item.avatar,
                        telephone:item.telephone,
                        qq:item.qq,
                        wechat:item.wechat
                    }});
            }
        },
        mounted(){
            this.$http.post('http://localhost:3000/getData')
                .then(data =>{
                    console.log(data)
                    this.list = data.data;
                })
                .catch(err => Promise.reject(err))
        }
    }
</script>

<style scoped lang="less">
  .list{
      margin: 50px auto;
  }
</style>