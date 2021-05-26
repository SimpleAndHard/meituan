<template>
<div class="hot-city" >
     <div  class="cityListBanner">
      <dl class="cityList">
          <dt>热门城市:</dt>
          <dd v-for="(city,index) in hotCity" :key="index">{{ city.name }}</dd>
      </dl>
  </div>
  <div   class="cityListBanner">
      <dl class="cityList">
          <dt>最近访问:</dt>
          <dd v-for="(city,index) in recentCity" :key="index">{{ city.name }}</dd>
      </dl>
  </div>
</div>
 
</template>

<script>
import axios from '@/api/index.js'
export default {
   data(){
       return{
          hotCity:[],
          recentCity:[],
       }
   },
    created(){
         axios.getHotCityList().then(res=>{
            this.hotCity=res.data.data;
          
       })
       axios.getRecentCity().then(res=>{
           this.recentCity=res.data.data;
       })
}
    }

</script>

<style>
.hot-city{
    width: 100%;
}
.cityListBanner{
    padding: 30px 0;
    border-bottom: 1px solid #e5e5e5;
}
.cityList{
       display: flex;
       margin: 0;
}

.cityList dd{
    margin: 0 20px;
    color: #666;
    font-size: 14px;
    cursor: pointer;
}
.cityList dd:hover{
    color: #222;
    font-weight: 500;
}
</style>