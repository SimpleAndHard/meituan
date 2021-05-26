<template>
  
   <ul class="geo">
       <li >
            <i class="el-icon-location"></i>
            <span>{{position.name }}</span>
       </li>
        <li >
           <router-link :to="{name:'city'}" class="city" >切换城市</router-link> 
        </li>
        [ <a href="#"
        class="local"
         v-for="(item,index) in nearCity" 
         :key="index">{{ item.name }}</a>   ]
        <li>
            <router-link :to="{name:'login'}" class="login">立即登录</router-link>
        </li>
        <li>
            <router-link :to="{name:'register'}" class="register">注册</router-link>
        </li>
   </ul>
</template>

<script>
import axios from '@/api/index.js'
import {mapState, mapMutations} from 'vuex'
export default {
 data(){
     return {
         position:[],
         nearCity:[],
     }
 },
 watch:{
     '$store.state.selectPosition':function(){
         console.log(this.$store.state.selectPosition);
         this.position=this.$store.state.selectPosition;
     }
  
 },
 created(){
     axios.getPosition().then(res=>{
        this.$store.dispatch('setPosition',res.data.data);
        this.position=res.data.data;
        this.nearCity=res.data.data.nearCity;
     })
 }
}
</script>

<style>
 .geo{
     display: flex;
     list-style: none;
     height: 100%;
     padding: 0;
     margin: 0;
     align-items: center;
     font-size: 12px;
 }
.geo .el-icon-location{
    font-size: 13px;
    
}
.geo .local{
    margin: 0 4px;
}
.geo .local:hover{
    color:#FE8C00 ;
}
.geo a{
    text-decoration: none;
    color: #999;
   
}
.geo .city{
    border: 1px solid #ddd;
    padding: 0 2px;
    margin: 0 4px;
}
.geo .city:hover{
    color:#FE8C00 ;
}
.geo .login{
    margin-left: 25px;
    margin-right: 10px;
    color: #FE8C00;
}
.geo .register:hover{
    color: #FE8C00;
}
</style>