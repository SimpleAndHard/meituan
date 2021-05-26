<template>

<div class="search-banner">
  <el-row class="search-bar" style="height:''">
   <el-col :span="3" class="logo">
     <router-link to="/">
     <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
     </router-link>
   </el-col>
   <el-col :span="15">
     <div class="wrapper">
       <div class="search-block">
       <input class="search-input" type="text" placeholder="搜索商家或地点" 
       @focus="focus"  @blur="blur" @input="input"
       v-model="inpdata" >
       <el-button type="warning" icon="el-icon-search" class="search-btn" ></el-button>  
     </div>
        <dl v-if="inpfocus" class="search-suggest">
         <dt>热门搜索</dt>
         <dd></dd>
       </dl>
       <ul v-if="searchFlag" class="search-hotword">
         <li 
         v-for="(item,index) in searchList"
         :key="index">{{ item }}</li>
       </ul>
     </div>
     
   </el-col>
 </el-row>
  
</div>
 

  
</template>

<script>
// import axios from 'axios'
import api from  '@/api/index.js'
export default {
   data(){
     return{
       inpdata:'',
       hotplace:false,
       searchitem:true,
       searchList:[],
      
     }
   },
   computed:{
     inpfocus(){
       return this.hotplace&&!this.inpdata;
     },
     searchFlag(){
       return this.searchitem&&this.inpdata;
     }
   },
   methods:{
     focus(){
        this.hotplace=true;
        this.searchitem=true;
     },
     blur(){
       this.hotplace=false;
       this.searchitem=false;
     },
     input(){
         let val =this.inpdata;
         api.getSearchList().then(res=>this.searchList=res.data.data.list.filter((item,index)=>{
         return item.indexOf(val)>-1;
       }));
        console.log(this.searchList)
     }
}
}
</script>

<style>
.header-bot{
  width: 1190px;
  margin: 0 auto;
  position: relative;
}

.search-banner{
    padding: 20px;
}
.search-bar{
  
  width: 1190px;
  margin: auto;
  padding-bottom: 55px;
  background-color: #fff;
} 

.logo{
 padding-top: 15px;
 width: 280px;
}
 .logo img{
   width: 126px;
   height: 46px;
  
 }
 .wrapper{
   padding-top: 17px;
   position: relative;
   margin-left: 45px;
 }
 .wrapper .search-block{
   width: 550px;
   height: 40px;
   background: #fff;
 }
 .wrapper .search-block .search-input{
   height: 100%;
   width: 80%;
   border-radius: 4px 0 0 4px;
   border:1px solid #E5E5E5;
   box-sizing: border-box;
   padding: 15px;
   line-height: 100%;
   font-size: 14px;
   outline: none;
   border-right-color: transparent;
 }
 .wrapper .search-block .search-input::-webkit-input-placeholder{
color: #ccc;
 }
 .wrapper .search-block .search-btn{
  width: 15%;
   border-radius: 0 4px 4px 0;
   border: 1px solid #FFC300;
   background-color: #FFC300;
   color: #000;
  
   
 }
 .wrapper .search-suggest{
   position: absolute;
   background: #fff;
   border: 1px solid #e5e5e5;
   border-top-color: transparent;
   margin: 0;
   width: 442px;
   box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
   border-bottom-left-radius: 4px;
   border-bottom-right-radius: 4px;
   padding: 10px;
   box-sizing: border-box;
   font-size: 12px;
 }
  .wrapper .search-suggest dt{
    color: #999;
    font-weight: bold;
  }
   .wrapper .search-hotword li:hover {
    background-color: #f8f8f8;
    color: #fe8c00;
}

  .wrapper .search-hotword li{
  
    list-style: none;
    margin: 0;
    padding: 3px 10px;
    color: #333;
    font-size: 12px;
    line-height: 19px;
    text-align: left;
    cursor: pointer;
    box-sizing: border-box;
  }

</style>