<template>
  <div class="clearf">
    <ul class="nav">
      <li class="nav-menu mymeituan">
        <router-link to="/" class="nav-li">我的美团</router-link>
        <ul class="my-mt">
          <li>
            <router-link to="/">我的订单</router-link>
          </li>
          <li>
            <router-link to="/">我的收藏</router-link>
          </li>
          <li>
            <router-link to="/">抵用券</router-link>
          </li>
          <li>
            <router-link to="/">账户设置</router-link>
          </li>
        </ul>
      </li>
      <li class="nav-menu">
        <router-link to="/" class="nav-li">手机APP</router-link>
      </li>
      <li class="nav-bigwidth nav-menu">
        <router-link to="/" class="nav-li">商家中心</router-link>
        <ul class="my-mt store-center">
          <li>
            <router-link to="/">美团餐饮商户中心</router-link>
          </li>
          <li>
            <router-link to="/">登录商家中心</router-link>
          </li>
          <li>
            <router-link to="/">美团智能收银</router-link>
          </li>
          <li>
            <router-link to="/">我想合作</router-link>
          </li>
          <li>
            <router-link to="/">手机免费开店</router-link>
          </li>
        </ul>
      </li>

      <li class="nav-menu">
        <router-link to="/" class="nav-li">美团规则</router-link>
        <ul class="my-mt">
          <li>
            <router-link to="/">规则中心</router-link>
          </li>
          <li>
            <router-link to="/">规则目录</router-link>
          </li>
          <li>
            <router-link to="/">规则评议院</router-link>
          </li>
        </ul>
      </li>
      <li class="nav-menu nav-web">
        <router-link to="/" class="nav-li">网站导航</router-link>
        <div class="my-mtuan">
          <div class="web-leader">
            <dl class="hotel-travel">
              <dt>酒店旅游</dt>
              <dd>国际机票</dd>
              <dd>火车票</dd>
              <dd>民宿</dd>
              <dd>经济型酒店</dd>
              <dd>主题酒店</dd>
              <dd>商务酒店</dd>
              <dd>公寓</dd>
              <dd>青年旅社</dd>
              <dd>豪华酒店</dd>
              <dd>客栈</dd>
            </dl>
            <dl class="eat-food">
              <dt>吃美食</dt>
              <dd>烤鱼</dd>
              <dd>特色小吃</dd>
              <dd>烧烤</dd>
              <dd>自助餐</dd>
              <dd>火锅</dd>
              <dd>代金券</dd>
            </dl>
            <dl class="movie">
              <dt>看电影</dt>
              <dd>热映电影</dd>
              <dd>热门影院</dd>
              <dd>热映电影口碑榜</dd>
              <dd>最受期待电影</dd>
              <dd>国内票房榜</dd>
              <dd>北美票房榜</dd>
              <dd>电影排行榜</dd>
            </dl>
            <dl class="phone-app">
              <dt>手机应用</dt>
              <dd><img class="appicon" src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png" title="美团app" alt="美团app"></dd>
              <dd><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app"></dd>
              <dd><img class="appicon" src="https://p0.meituan.net/travelcube/162c3308d9622f6d9cfaa49e60be4dca8573.png" title="民宿app" alt="民宿app"></dd>
              <dd><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app"></dd>
              <dd><img class="appicon" src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app"></dd>
            </dl>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {};
</script>

<style>
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.clearf {
  content: "";
  display: block;
  clear: both;
  float: right;
}
.nav {
  float: right;
}
.nav .nav-menu {
  display: inline-block;
  font-size: 12px;
  width: 82px;
  text-align: center;
  vertical-align: top;
  box-sizing: border-box;
  margin: 0 1px;
}

.nav .nav-menu a {
  text-decoration: none;
  color: #999;
}

.nav .nav-menu:hover {
  background-color: #fff;
  border-left: solid 1px #e5e5e5;
  border-right: solid 1px #e5e5e5;
  border-bottom: solid 1px #e5e5e5;
}
.nav .nav-menu a:hover{
  color: #FE8C00;;
}
.nav .nav-menu:hover .my-mt {
  display: block;
}
.nav .nav-menu:hover .my-mtuan{
  display: block;
}
.nav .nav-menu .my-mtuan{
  display: none;
}
.nav .nav-menu:hover  .nav-li{
  color: #FE8C00;
}
.nav .my-mt {
  display: none;
  position: relative;
  z-index: 999;
  background-color:#fff ;
}
.nav .nav-bigwidth {
  position: relative;
  box-sizing: border-box;
}
.nav .nav-menu.nav-bigwidth .store-center::after {
  width: 86px;
  height: 3px;
  content: "";
  position: absolute;
  background-color: #fff;
  top: -1px;
  right: 0;
}
.nav .nav-bigwidth .store-center {
  position: absolute;
  z-index: 200;
  width: 110px;
  right: -1px;
  top: 95%;
  border: 1px solid #e5e5e5;
  background-color: #fff;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
.nav .nav-web {
  position: relative;
  box-sizing: border-box;
}
.nav .web-leader {
  position: absolute;
  top: 40px;
  width: 1200px;
  right: -1px;
  border: 1px solid #e5e5e5;
  padding: 30px 36px 36px 47px;
  box-sizing: border-box;
  z-index: 200;
  background-color: #fff;
  display: flex;
  
}
.nav .web-leader::after {
  content: "";
  position: absolute;
  width: 86px;
  height: 3px;
  background-color: #fff;
  top: -1px;
  right: 0;
}
.nav .web-leader dl{
  margin-right: 33px;
}
.nav .web-leader dt{
    margin-bottom: 26px;
    font-size: 14px;
    color: #222222;
    font-weight: 500;
    
    
}
.nav .web-leader  dd:hover{
  color:#FE8C00 ;
  cursor: pointer;
}
.nav .hotel-travel {
  width: 234px;
}
.nav .hotel-travel dd{
    width: 33%;
    text-align: center;
    float: left;
    margin: 0;
    color: #999;
}
.nav .eat-food {
  width: 156px;
}
.nav .eat-food dd{
    width: 50%;
    text-align: center;
    float: left;
    margin: 0;
    color: #999;
}
.nav .movie {
  width: 90px;
}
.nav .movie dd{
    width: 100%;
    text-align: center;
    float: left;
    margin: 0;
    color: #999;
}
.nav .phone-app{
    position: absolute;
    right: 0;
    margin-right: 47px;
   
}
.nav .phone-app dd{
    margin-top: 10px;
    display: inline-block;
}
.nav .phone-app img{
    width: 60px;
    height: 60px;
}
</style>