<template>
  <div>
      <el-row class="home">  
        <el-col :span="5">
          <m-menu></m-menu>
        </el-col>
        <el-col :span="19">
          <m-life></m-life>
        </el-col>
      </el-row>
      <el-row class="travel">
        <el-col :span="24">
          <m-card></m-card>
        </el-col>
      </el-row>
  </div>
      
  
</template>

<script>
import MLife from '@/components/index/life.vue'
import MMenu from '@/components/index/menu.vue'
import MCard from '@/components/index/card.vue'

export default {
components:{
  MMenu,
  MLife,
  MCard,
  
}
}
</script>

<style>
 .home{
     width: 1190px;
     margin:0 auto;
     padding: 0;
     position: relative;
     top: 0;   
 }
 .home .el-col-5{
   position: relative;
   top: 0;
   left: 0;
 }
 .travel {
   width: 1190px;
   margin: 0 auto;
   margin-top: 40px;
   position: relative;
 }
</style>