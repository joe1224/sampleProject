<template>
  <div style="overflow: hidden;">
    <el-row type="flex" :gutter="10" justify="center" v-show="!fullscreen">
      <el-col :span="4">&nbsp;</el-col>
      <el-col :span="16"><div class="grid-content bg-purple">
        <el-button-group>
          <el-button :type="classtype1"  @click="selecttype('classtype1',1,24)">单屏</el-button>
          <el-button :type="classtype2"  @click="selecttype('classtype2',4,12)">四分屏</el-button>
          <el-button :type="classtype3"  @click="selecttype('classtype3',9,8)">九分屏</el-button>
          <el-button :type="classtype4"  @click="selecttype('classtype4',16,6)">十六分屏</el-button>
          <!--<el-button >
            <div class="btn-fullscreen" @click="handleFullScreen">
              <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                <i class="el-icon-rank"></i>
              </el-tooltip>
            </div>
          </el-button>-->
        </el-button-group>
      </div>
      </el-col>
      <el-col :span="4">&nbsp;</el-col>
    </el-row>


    <el-container class="center">
      <el-main class="main-box">
        <el-row  :gutter="10">
          <el-col  v-for="(n,index) in fornum" :xs="24" :sm="24" :md="clonum" :lg="clonum" :xl="clonum"  :class="videoclass" :key="index" >
            <div  class="player-wrapper" element-loading-text="加载中..." element-loading-background="#000">
              <div class="video-wrapper" :style="videoclass" :id="`videoid${n}`">
                <div class="video-inner live hide-waiting" style="position: absolute; top: 0px; bottom: 0px; left: 0px; right: 0px;">
                  <div class="alt table-c">
                    <div class="talbetop">
                      <table>
                        <tr>
                          <td @click="showDialog(imgUrl[index])">
<!--                            @click="handleFullScreen(n,index)"-->
                            <el-image  :src="imgUrl[index]" :fit="fit"></el-image>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-dialog id="dialogDrag" class="dialog-box" :visible.sync="dialogVisible" :modal="false" :close-on-click-modal="false" :top="top" width="100%"v-dialogDrag>
          <el-image :src="dialogUrl" :fit="fit"></el-image>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import imgUrl1 from '../assets/images/1.png';
  import imgUrl2 from '../assets/images/2.png';
  import imgUrl3 from '../assets/images/3.png';
  import imgUrl4 from '../assets/images/4.png';
  import imgUrl5 from '../assets/images/5.png';
  import imgUrl6 from '../assets/images/6.png';
  import imgUrl7 from '../assets/images/7.png';
  import imgUrl8 from '../assets/images/8.png';
  import imgUrl9 from '../assets/images/9.png';
  import imgUrl10 from '../assets/images/10.png';
  import imgUrl11 from '../assets/images/11.png';
  import imgUrl12 from '../assets/images/12.png';
  import imgUrl13 from '../assets/images/13.png';
  import imgUrl14 from '../assets/images/14.png';
  import imgUrl15 from '../assets/images/15.png';
  import imgUrl16 from '../assets/images/16.png';
  export default {
    data () {
      return {
top:'0',
        imgUrl:[imgUrl1,imgUrl2,imgUrl3,imgUrl4,imgUrl5,imgUrl6,imgUrl7,imgUrl8,imgUrl9,imgUrl10,imgUrl11,imgUrl12,imgUrl13,imgUrl14,imgUrl15,imgUrl16],
        fit:'contain',
        dialogVisible:false,
        dialogUrl:"",

        fullscreen: false,
        fornum:4,
        clonum:12,
        videoclass:"padding-bottom: 45.10%; position: relative; margin: 0px auto; overflow: hidden;",
        classtype1:'',
        classtype2:'primary',
        classtype3:'',
        classtype4:'',
        items:[false,false,false,false]

      }
    },
    created(){
      let that = this
      window.onresize = function(){
        if(!that.checkFull()){
          //  alert(that.videoclass)
          // 退出全屏后要执行的动作
          console.log("退出全屏")
          that.fullscreen = false;
          //alert(that.fornum)
          for(let n=1;n<=that.fornum;n++){
            //alert('videoid'+n)
            // alert(document.getElementById('videoid'+n))
            document.getElementById('videoid'+n).style = "padding-bottom: 45.10%; position: relative; margin: 0px auto; overflow: hidden;";
          }
        }
        else{
          for(let n=1;n<=that.fornum;n++){
            document.getElementById('videoid'+n).style = "padding-bottom: 52.25%; position: relative; margin: 0px auto; overflow: hidden;";
          }
        }
      }
    },
    mounted () {
      this.$nextTick(()=>{
        document.addEventListener('keyup',(e)=>{
          if(e.keyCode==27){
            this.dialogVisible = false;
          }
        })
      })
    },
    methods:{
      showDialog(image){
        this.dialogUrl = image;
        this.dialogVisible = true;
        let id = document.getElementById('dialogDrag');
        const dragDom = id.querySelector('.el-dialog');
        dragDom.style.left = '0px'
        dragDom.style.top = '0px'
        // this.handleFullScreen();
      },
      showselect(item1){
        this.items=[];
        for(let i=0;i<this.fornum;i++){
          if(item1==i){
            this.items[i] = true;
          }else{
            this.items[i]=false;
          }
        }
      },
      selecttype(item,fnum,clo) {
        this.items=[];
        for(let i=0;i<fnum;i++){
          this.items[i]=false;
        }
        this.fornum = fnum;
        this.clonum = clo;

        if(item==='classtype1'){
          this.classtype1='primary'
          this.classtype2=''
          this.classtype3=''
          this.classtype4=''
        }
        else if(item==='classtype2'){
          this.classtype1=''
          this.classtype2='primary'
          this.classtype3=''
          this.classtype4=''
        }
        else if(item==='classtype3'){
          this.classtype1=''
          this.classtype2=''
          this.classtype3='primary'
          this.classtype4=''
        }
        else if(item==='classtype4'){
          this.classtype1=''
          this.classtype2=''
          this.classtype3=''
          this.classtype4='primary'
        }
      },
      checkFull(){
        //判断浏览器是否处于全屏状态 （需要考虑兼容问题）
        //火狐浏览器
        var isFull = document.mozFullScreen||
          document.fullScreen ||
          //谷歌浏览器及Webkit内核浏览器
          document.webkitIsFullScreen ||
          document.webkitRequestFullScreen ||
          document.mozRequestFullScreen ||
          document.msFullscreenEnabled
        if(isFull === undefined) {
          isFull = false
        }
        return isFull;
      },

// 全屏事件
      handleFullScreen(){
        this.dialogVisible = true;
        let element = document.documentElement;
        // let element = document.getElementById("dialogDrag");
            if (this.fullscreen) {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
              } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
            } else {
              if (element.requestFullscreen) {
                element.requestFullscreen();
              } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
              } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
              } else if (element.msRequestFullscreen) {
                // IE11
                element.msRequestFullscreen();
              }
            }
            this.fullscreen = !this.fullscreen;

      }
    }
  }
</script>


<style scoped>
  .dialog-box >>>.el-dialog__body{
    text-align: center;
  }
  .dialog-box >>>.el-dialog{
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    height: 100%;
    background: rgba(0,0,0,1);
  }

  .dialog-box >>>.el-dialog__header{
    flex: 0.2;
  }
  .dialog-box >>>.el-dialog__body{
    flex: 0.8;
  }
  .video-wrapper{
    position: relative; top: 0px; bottom: 0px; left: 0px; right: 0px;
  }
  .alt {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #000;
    color: #fff;
    text-align: center;
  }
  .alt table{
    width: 100%;
    height: 100%;
  }
  .talbetop{
    width: 100%;
    height: 100%;
    position:relative;
  }
  .selectchannel{
    position:absolute;right:5px;top:5px;
  }
  .video-close {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #fff;
    font-size: 12px;
    background-color: hsla(0,0%,50%,.5);
    padding: 2px 5px;
    cursor: pointer;
    border-radius: 2px;
    max-width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }


  /*.table-c table{border-right:2px solid #fff;border-bottom:2px solid #fff;}*/
  /*.table-c table td{border-left:2px solid #fff;border-top:2px solid #fff}*/
  /*
  css 注释：
  只对table td设置左与上边框；
  对table设置右与下边框；
  为了便于截图，我们将css 注释说明换行排版
  */
  .player-wrapper{
    padding-bottom: 10px;
  }
</style>
