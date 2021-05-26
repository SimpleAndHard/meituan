<template>
<div class="travel-container">
  <div class="top-travel">
       <dl>
        <dt>推荐民宿</dt>
        <dd>上海</dd>
        <dd>南京</dd>
        <dd>苏州</dd>
        <dd>合肥</dd>
        <dd>南昌</dd>
        <dd>宁波</dd>
        <dd>福州</dd>
        <dd>无锡</dd>
        <dd>扬州</dd>
        <dd>嘉兴</dd>
      </dl>
      <div class="travel-all">全部<i class="iconfont icon-youjiantou-01"></i></div>
  </div>
    
    <div class="card-container">
       <el-card :body-style="{ padding: '0px' }">
      <img src="https://img.meituan.net/phoenix/12f39cf95cff9343f80f0cdbc935bb8f1607077.jpg@740w_416h_1e_1c" class="image">
      <div class="head-img"></div>
      <div class="text">
        <p>鄞州万达旁，近3号线地铁口，全新装修，北欧风格，【壹如初心】-初心</p>
        <p>整套1居室·可住2人 | 鄞州大学城/万达广场商业区</p>
        <p>￥208</p>
      </div>
    </el-card>
    <el-card :body-style="{ padding: '0px' }">
      <img src="https://img.meituan.net/phoenix/12f39cf95cff9343f80f0cdbc935bb8f1607077.jpg@740w_416h_1e_1c" class="image">
      <div class="head-img"></div>
      <div class="text">
        <p>鄞州万达旁，近3号线地铁口，全新装修，北欧风格，【壹如初心】-初心</p>
        <p>整套1居室·可住2人 | 鄞州大学城/万达广场商业区</p>
        <p>￥208</p>
      </div>
    </el-card>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url("https://at.alicdn.com/t/font_1973793_xxej0nrox48.css");
.travel-container .top-travel{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background: linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);
  box-sizing: border-box;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
 .travel-container dl{
   display: flex;
   font-size: 14px;
   color: #fff;
   align-items: center;
 }
  .travel-container dl dt{
    margin-left: 13px;
    margin-right: 10px;
    font-size: 18px;
    padding: 0 5px;
    cursor: pointer;
    font-family: "MFShangHei-Regular" !important;
  }
  .travel-container dl dd{
    margin: 0 5px;
    cursor: pointer;
  }
  .travel-all{
    margin-right: 12px;
    cursor: pointer;
    padding: 0 5px;
    font-size: 14px;
    color: #fff;
  }
 .travel-all .iconfont{
   font-size: 12px;
   color: #fff;
   font-weight: 1000;
 }
 .card-container{
   width: 1190px;
   box-sizing: border-box;
   border: 1px solid #e5e5e5;
   padding: 20px 0 0 20px;
   display: flex;
 }
 .el-card.is-always-shadow{
   box-shadow: 0 0 0 #fff;
 }
 .el-card{
   margin-right: 18px;
   width: 370px;
   position: relative;
   border-radius: 5px;
   overflow: hidden;
   margin-bottom: 25px;
   border: none;
 }
 .el-card .image{
   width: 100%;
   height: 208px;
   margin-bottom:11px ;
   
 }
  .el-card .head-img{
    background-image: url('https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png');
    background-position: -50% -50%;
    background-size: 100%;
    width: 48px;
    height: 48px;
    position: absolute;
    top: 180px;
    left: 305px;
    border-radius: 40px;
    border: 2px solid #fff;
  }
  .card-container .text p:nth-child(1){
     font-size: 16px;
     color: #222;
     overflow: hidden;
     width: 297px;
     margin: 7px 0;
     font-weight: 400;
     white-space: nowrap;
     text-overflow: ellipsis;
  }
  .card-container .text p:nth-child(2){
    font-size: 12px;
    color: #999;
    margin: 0;
  }
  .card-container .text p:nth-child(3){
    margin: 0;
    color: #FF6600;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -0.8px;
    padding: 4px 0;
  }
</style>