<template>
  <div class="right-banner">
    <div class="lead-links">
      <a href="http://waimai.meituan.com">美团外卖</a>
      <a href="http://waimai.meituan.com">猫眼电影</a>
      <a href="http://waimai.meituan.com">美团酒店</a>
      <a href="http://waimai.meituan.com">民宿/公寓</a>
      <a href="http://waimai.meituan.com">商家入驻</a>
      <a href="http://waimai.meituan.com">美团公益</a>
    </div>
    <div class="right-th-row">
      <div class="turnPage">
        <el-carousel>
          <el-carousel-item v-for="item in imgsrc" :key="item.id">
            <img :src="item.src" > 
          </el-carousel-item>
        </el-carousel>
      </div>
      <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="" class="pic">
      <div class="login-banner">
          <div class="login-img">
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
          </div>
           <p>Hi! 你好</p>
           <div class="register-btn">
           <router-link :to="{name:'register'}">
             注册
           </router-link>
           </div>
            <div class="login-btn">
            <router-link :to="{name:'login'}">
             立即登录
           </router-link>
           </div>
      </div>
    </div>
    <div class="right-sec-row">
      <div class="pic1"><img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="#"></div>
      <div class="pic2"><img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="#"></div>
      <div class="pic3"><img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="#"></div>
      <div class="pic4">
        <div class="scan">
          <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="#">
        </div>
        <p class="app-name">美团App手机版</p>
        <p class="s1">
          <span class="red">1元起</span>
          <span class="gary">吃喝玩乐</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      imgsrc:[
        {
          src:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
          id:1,
        },{
          src:'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
          id:2,
        },
      {
          src:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
          id:3,
        },
        {
          src:'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
          id:4,
        }
      
      ]
    }
  }
};
</script>
 
<style>
.right-banner{
  margin-top: -35px;
}
.lead-links {
   margin-left: 20px;
   
}

.lead-links a {
  color: #222;
  font-weight: 700;
  font-size: 16px;
  margin: 0 20px;
  cursor: pointer;
  text-decoration: none;
}
.lead-links a:nth-child(1):hover{
  color:#fbc700;
} 
.lead-links a:nth-child(2):hover{
  color:#ed1e24;
} 
.lead-links a:nth-child(3):hover{
  color:#f04d4e;
} 
.lead-links a:nth-child(4):hover{
  color:#FDC411;
} 
.lead-links a:nth-child(5):hover{
  color:#FE8C00;
} 
.lead-links a:nth-child(6):hover{
  color:#f04d4e;
} 
.turnPage{
  float: left;
}
.pic{
  float: left;
  width: 150px;
  height: 240px;
  margin: 23px 10px 0;
}

.el-carousel{
  width: 550px;
  height: 240px;
  overflow: hidden;
  margin-top: 23px;
  margin-left: -5px;
}
.el-carousel__button{
  width: 10px;
  height: 2px;
}
  .el-carousel img{
    width:550px;
    height:240px;
    overflow: hidden;
    
  }
  .right-th-row::after{
    content: '';
    display: block;
    clear: both;
  }
  .login-banner{
    float: left;
    width: 227px;
    height: 240px;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    margin-top: 23px;
    background-color: #fff;
    padding-top: 30px;
    
  }
  .login-img{
       width: 47px;
       margin:0 auto;
  }
  .login-img img{
    border-radius: 50%;
    width: 47px;
    height: 47px;
    border:4px solid #E5E5E5 ;
    margin-bottom: 4px;
  }
 .login-banner p{
   text-align: center;
   color: #222;
   font-size: 16px;
   font-weight: 500;
   margin: 0;
 }
 .register-btn,.login-btn{
    width: 118px;
    height: 38px;
    text-align: center;
    border: 1px solid #e5e5e5;
    border-radius: 40px;
    line-height: 38px;
    margin: 10px auto 15px auto;
 }
  .login-btn a{
   color: #222;
   text-decoration: none;
 }
 .register-btn a{
   color: #222;
   text-decoration: none;
 }
 .right-sec-row{
   height: 177px;
   width: 100%;
   display: inline-block;
   margin-top:10px;
   margin-left: -5px;
   display: flex;
   box-sizing: border-box;
 }
 .pic1 img{
   width: 270px;
   height: 165px;
   margin-right: 10px;
 }
 .pic2 img{
   width: 270px;
   height: 165px;
 }
 .pic3 img {
   width: 150px;
   height: 165px;
   margin: 0 10px;
 }
 .pic4{
   width: 228px;
   height: 165px;
   border: 1px solid #e5e5e5;
 }
 .pic4 .scan img{
   width: 95px;
   height: 95px;
   
 }
 .pic4 .scan{
   width: 95px;
   height: 99px;
   margin: 10px auto 0;
  
 }
 .pic4  .app-name{
   font-size: 16px;
   color: #222;
   font-weight: 500;
   text-align: center;
   margin: 0;
 }
 .s1{
   margin-top: 2px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
 }
 .s1 .red{
   color: #EC5330;
   margin-right:5px;
 }
 .s1 .gary{
  color: #3f3f3f;
 }
</style>