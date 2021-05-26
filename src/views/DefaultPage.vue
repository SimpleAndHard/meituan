<template>
  <div class="default-page">
    <el-container>
      <el-header style="height:'';padding:0">
          <header-index></header-index>
      </el-header>
      <el-main>
             <router-view></router-view>
             
      </el-main>
      <el-footer style="height:''">
        <footer-page></footer-page>
       
      </el-footer>
    </el-container>

   
  </div>
</template>

<script>
import HeaderIndex from "@/components/header/index.vue"
import FooterPage from "@/components/footer/footer.vue"
export default {
    components:{
        HeaderIndex,
        FooterPage,
    }
};
</script>

<style>

 
  .el-main{
    overflow: unset;
    width: 100%;
    padding:0;
   
  }
 
 .el-header .wrapper .search-hotword{
   border:1px solid #E5E5E5;
   background-color: #fff;
   box-shadow: 0 3px 5px 0 rgba(0,0,0,0.1);
   border-bottom-left-radius: 4px;
   border-bottom-right-radius: 4px;
   width: 442px;
   position: absolute;
   z-index: 2222;
   box-sizing: border-box;
  }

  .el-main .left-menu .righthover {
  position: absolute;
  width: 400px;
  left: 231px;
  top: 62px;
  height: 416px;
  background-color: #fff;
  color: #666;
  padding: 0 30px;
  z-index: 20;
}

.el-footer{
  width: 100%;
  margin-top: 40px;
  background-color: #f8f8f8;
}

</style>