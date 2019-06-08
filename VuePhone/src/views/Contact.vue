<template>
    <div class="content">
        <div class="contact">
            <van-row>
                <van-col span="24" style="text-align: center">
                    <img :src="ContactInfo.avatar" alt=""
                         style="width: 80px;height: 80px;border-radius: 50%">
                </van-col>
            </van-row>
            <van-row style="margin-top: 18px">
                <van-col span="10">
                    &emsp; <van-tag mark type="success">使用中</van-tag>&emsp;电话
                </van-col>
                <van-col span="14">
                    {{ContactInfo.telephone}}
                </van-col>
            </van-row>
            <van-row style="margin-top: 18px">
                <van-col span="10">
                    &emsp;  <van-tag mark type="success">使用中</van-tag>&emsp;QQ
                </van-col>
                <van-col span="14">
                    {{ContactInfo.qq}}
                </van-col>
            </van-row>
            <van-row style="margin-top: 18px">
                <van-col span="10">
                    &emsp;  <van-tag mark type="success">使用中</van-tag>&emsp;微信
                </van-col>
                <van-col span="14">
                    {{ContactInfo.wechat}}
                </van-col>
            </van-row>
             <div class="diver"></div>
            <van-row>
                <van-col span="6" style="text-align: center">
                    <span class="text">热心指数</span>
                </van-col>
                <van-col span="18">
                    <van-rate
                            readonly
                            v-model="value"
                            icon="like"
                            void-icon="like-o"
                            style="text-align: center"></van-rate>
                </van-col>
            </van-row>
            <br>
            <van-row>
                <van-col span="6" style="text-align: center">
                    <span class="text">活跃指数</span>
                </van-col>
                <van-col span="18">
                    <van-rate
                            readonly
                            v-model="value"
                            icon="like"
                            void-icon="like-o"
                            style="text-align: center"></van-rate>
                </van-col>
            </van-row>
            <br>
            <van-row>
                <van-col span="6" style="text-align: center">
                    <span class="text">健康指数</span>
                </van-col>
                <van-col span="18">
                    <van-rate
                            readonly
                            v-model="value"
                            icon="like"
                            void-icon="like-o"
                            style="text-align: center"></van-rate>
                </van-col>
            </van-row>

        </div>
    </div>

</template>

<script>
    export default {
        name: "Contact",
        data(){
            return {
                value:5,
                ContactInfo:{
                    avatar:'',
                    phone:'17693104287',
                    qq:'1826001146',
                    wechat:'17693104287'
                }
            }
        },
        mounted(){
            this.ContactInfo = this.$route.params;
        }
    }
</script>

<style scoped lang="less">
    .content{
    .contact {
        margin: 90px auto;
        font-size: 18px;
        .diver{
            width: 90%;
            height: 1px;
            background-color: #F5F6F8;
            margin: 25px auto;
        }
        .text{
            color: #8F9CA2;
        }
    }}
</style>