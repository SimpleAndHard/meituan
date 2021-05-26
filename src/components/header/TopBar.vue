<template>
<div class="back">
  <el-row class="top-bar">
    <el-col :span="10" class="top-barcol">
        <geo></geo>
      
    </el-col>
    <el-col :span="14" class="top-barcol">
        <my-nav></my-nav>
    </el-col>
  </el-row>
</div>
  
</template>

<script>
import geo from './geo'
import MyNav from './nav'
export default {
    components:{
        geo,
        MyNav
    }
};
</script>

<style >
.back{
background-color: #F8F8F8;
 width: 100%;
}
 .top-bar{
   
   height: 40px;
   line-height: 40px;
   color: #666;
   width: 1190px;
   margin: auto;
 }
 .top-barcol{
   height: 100%;
 }
</style>