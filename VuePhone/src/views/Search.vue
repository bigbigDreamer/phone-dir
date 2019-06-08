<template>
    <div class="search">
        <AutoComplete

                @on-change="handleChange"
                :filter-method="filterMethod"
                v-model="value"
                transfer
                icon="ios-search"
                placeholder="搜索"
                style="width:95%;height: 200px;margin-top: 18px"
                :data="data" >

        </AutoComplete>
    </div>
</template>

<script>
    import mock from '../mock'
    export default {
        name: "Search",
        data(){
            return {
                item:mock,
                value:'',
                data:[]
            }
        },
        methods:{
            filterMethod (value,option){
                return option.indexOf(value) !== -1;
            },
            handleChange(value){
                console.log(value);
                this.$http.post('http://localhost:3000/getInfoByName',{
                    username:value
                })
                    .then(data =>{
                        console.log(data);
                        this.$router.push({name:'Contact',params:{
                                avatar:data.data[0].avatar,
                                telephone:data.data[0].telephone,
                                qq:data.data[0].qq,
                                wechat:data.data[0].wechat
                            }});
                    })
                    .catch(err =>Promise.reject(err));
            }
        },
        mounted(){
            this.$http.post('http://localhost:3000/getData')
                .then(data =>{
                    console.log(data)
                    this.data = data.data.map(item => item.username);;
                })
                .catch(err => Promise.reject(err))
           // this.data = this.item.
        }
    }
</script>

<style scoped lang="less">
.search{
    margin-top: 50px;
    margin-left: 10px;
}
</style>