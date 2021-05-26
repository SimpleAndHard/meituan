<template>
  <div class="category">
      <div class="m-category">
          <div class="letter-select">按拼音首字母选择:</div>
          <ul class="category-letter">
              <li v-for="(item,index) in Letter" :key="index">
                  <a :href="'#city-'+item">{{ item }}</a></li>
          </ul>

      </div>
    
    <dl class="m-category-section" 
      v-for="(item ,index) in cityGroupList" 
      :key="index" :id="'city-'+index">
          <dt>{{ index }}</dt> 
          <dd v-for="city in item " :key="city.id">{{ city.name }}</dd> 
    </dl>
  </div>
</template>

<script>
import axios from '@/api/index'
export default {
    data(){
        return{
            Letter:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            cityGroupList:[],
            hotCity:{}
        }
    },
    created(){
        let self=this;
        let obj={};
        axios.getcityList().then(res=>{
            
           res.data.data.forEach((item , index)=>{
               
                if(!obj[item.firstChar.toUpperCase()]){
                   obj[item.firstChar.toUpperCase()]=[];
                }
                obj[item.firstChar.toUpperCase()].push(item);
           })
           
           self.cityGroupList=obj;
          
        });
      
}
}
</script>

<style>
  .m-category{
      display: flex;
      padding: 30px 0;
      justify-content: space-between;
  }
  .category-letter{
      display: flex;
      align-items:baseline;
      margin-top: 2px;
      width: 990px;
  }
  .category-letter li {
      
      margin: 0 10px;
      width: 25px;
      height: 25px;
      padding-top: 2px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      
  }
  .category-letter li a{
      font-size: 15px;
      text-decoration: none;
      color: #666;
  }
  .letter-select{
      margin-right: 5px;
      color: #333;
      font-size: 16px;
      width: 144px;
  }
  .m-category-section{
      display: flex;

  }
  .m-category-section dt {
      width:40px ;
      height:40px ;
      border-radius: 50%;
      text-align: center;
      background-color:#FFD000 ;
      color:#222 ;
      line-height: 40px;
  }
    .m-category-section dd{
        margin: 10px 20px;
        color: #666;
        font-size: 14px;
    }
</style>