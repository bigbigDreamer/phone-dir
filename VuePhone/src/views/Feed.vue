<template>
    <div class="Feed">
        <van-notice-bar
                text="富强民主，文明和谐"
                left-icon="volume-o"
        />
        <Row>
            <Col style="text-align: center;margin-top: 50px" :md="{span:24}">
                <Badge dot>
                    <Icon type="ios-notifications-outline" size="38"></Icon>
                </Badge>
            </Col>
            <Col :md="{span:24}" style="padding: 18px">
                <p style="text-indent: 2em;line-height: 2em;margin-top: 18px;font-size: 14px">也许未来，我们不知道你身在何处，但希望你始终记得，我们一直在~~~</p>
                <p style="text-indent: 2em;line-height: 2em;margin-top: 18px;font-size: 14px">当你有困难了，记得找我们，“在家靠自己，在外靠朋友”，不要自己一个人扛着~~~</p>
                <p style="text-indent: 2em;line-height: 2em;margin-top: 18px;color: #007FFF;font-size: 14px">
                    我叫王彬林(EN:Eric Wang)是App开发以及维护者，假如你在使用过程中有什么问题。欢迎使用首页的联系方式及时联系我，7x24小时人工在线。
                </p>


                 <div class="icon" @click="openModal">
                     <Icon type="ios-brush-outline" size="80"/>
                     <br>
                     <span style="font-size: 18px">有话想给开发大大说嘛~~~</span>
                 </div>
                <Modal
                        style="height: auto"
                        :mask-closable="false"
                        v-model="modal"
                        title="反馈信息"
                        @on-ok="ok"
                        ok-text="发送"
                        @on-cancel="cancel">
                    <Input prefix="ios-contact" placeholder="姓名"  size="large" style="width: 70%;margin-bottom: 18px" v-model='name'/>
                    <br>
                    <Input
                            style="height: 80px;"
                            v-model="textarea"
                           type="textarea"
                           :autosize="{minRows: 3,maxRows: 50}"
                           placeholder="有什么想说的诺~快来告诉我吧"></Input>
                </Modal>
                <p style="text-indent: 2em;line-height: 2em;margin-top: 18px;color: #cccccc;font-size: 14px">
                    鸣谢：狄国阳、汤万福、刘薇
                </p>
<!--                <button @click="sendEmail">发送</button>-->

            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        name: "Feed",
        data(){
            return {
                modal:false,
                name:'',
                textarea:""
            }
        },
        methods:{
            ok() {
                if(!!this.name&&!!this.textarea) {
                this.$http.post('http://localhost:3000/sendEmail',{
                    msg:'我叫'+this.name+'，我想说:'+ this.textarea
                })
                    .then(data => {
                        console.log(data)
                        this.name = '';
                        this.textarea = '';
                        this.$Message.success('发送成功喔小可爱，我会尽快回复你的~~');
                    })
                    .catch(err => Promise.reject(err))}
                else {
                    this.$Message.error('发送失败喔，小可爱，恶作剧不太好吧~~~');
                }
            },
            openModal(){
                this.modal = true;
            },
            cancel(){

            }
        }
    }
</script>

<style scoped lang="less">
  .Feed{
      margin-top: 50px;
      .icon{
          text-align: center;
          margin: 18px auto;
          &:active{
              color: orangered;
          }
          &:hover{
              color: orangered;
          }
      }
  }
</style>