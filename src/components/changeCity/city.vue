<template>
  <div class="city-banner">
    <div class="city-content">
      <div class="choose-province">
        <div class="choose-city">
          <h3 class="l-attr">按省份选择:</h3>
          <div class="choose-wrap">
            <div class="select-province" @click="showBox" v-document-click="documentClick">
              <span class="my-province">{{ mrprovince }}</span> 
              <i class="el-icon-caret-bottom"></i>
              <div class="province-list myprovince" v-show="showProvince">
                <p class="city-lead">省份</p>
                <div class="clearf">
                  <div class="line-city" v-for="(item,index) in showprovince" :key="index">
                    <p 
                    v-for="(province,i) in item" 
                    :key="i" 
                    @click="selectProvince(province)">{{ province.provinceName }}</p>
                  </div>
                 
                </div>
              </div>
            </div>
            <div class="select-city" 
            :class="{
              active:isActive
            }"
            @click="showCity" v-document-click="documentClick">
              <span class="my-city">{{ mrcity }} </span> 
              <i class="el-icon-caret-bottom"></i>
              <div class="province-list mycity" v-if="showCityList">
                <p style="margin-top:0">城市</p>
                <div class="clearf">
                <div class="line-city" v-for="(item,index) in citys" :key="index">
                  <p v-for="(city,i) in item" :key="i"> 
                  <!-- <router-link @click="selectCity(city.name)" :to="{name:'indexPage'}"></router-link> -->
                  <a href="#" @click="selectCity(city)"> {{ city.name }} </a>
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="direct-search">
          <h3>直接搜索：</h3>
          <el-select
            v-model="searchWorld"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading"
          >
            <el-option v-for="item in cityList" :key="item" :label="item" :value="item"></el-option>
          </el-select>
        </div>
      </div>
      <hot-city></hot-city>
      <m-category></m-category>
      
    </div>
  </div>
</template>

<script>
import HotCity from '@/components/changeCity/hotCity.vue'
import MCategory from '@/components/changeCity/category.vue'
import axios from '@/api/index.js'
import { mapState,mapMutations } from 'vuex'
export default {
  data() {
    return {
      cityList:['北京','上海','广东','深圳'],
      provinceList: [],
      showProvince: false,
      showCityList: false,
      loading:false,
      searchWorld:"",
      mrprovince:'省份',
      mrcity:'城市',
      isActive:false,
      col:1,
      showprovince:[],
      mycity:[],
      cols:1,
      citys:[],
    };
   
  },
  components:{
      HotCity,
      MCategory
  },
  created(){
    axios.getProvinceCity().then(res=>{
        this.provinceList=res.data.data;
        console.log(res);
        this.col=Math.ceil(this.provinceList.length/12);
        for(let i=0;i<this.col;i++)
        {
            this.showprovince.push(this.provinceList.slice(i*12,i*12+12));
        }
        
    })
  },
  methods: {
    ...mapMutations(['setPosition']),
    showBox(el) {
      el.stopPropagation();
      this.showProvince = true;
      this.showCityList = false;
    },
    showCity(el) {
      if(!this.isActive)
      {
        return;
      }
      el.stopPropagation();
      this.showCityList = true;
      this.showProvince = false;
    },
    documentClick() {
      this.showProvince = false;
      this.showCityList = false;
    },
    remoteMethod(){

    },
    selectProvince(province)
    {
      
      this.mrprovince=province.provinceName;
      this.mycity=province.cityInfoList;
      this.cols=Math.ceil(this.mycity.length/12);
     
      this.citys=[];
      for(let i =0 ;i<this.cols;i++){
        this.citys.push(this.mycity.slice(i*12,i*12+12))
      }
      
      let self=this;
      setTimeout(function(){
        self.showProvince=false;
        
      },0)
      this.isActive=true
    },
    selectCity(city){
      console.log(city);
      this.setPosition(city);
      this.mrcity=city.name;
      this.$router.push({name:'indexPage'})
      //  let self=this;
      // setTimeout(function(){
      //   self.showCityList = false;
       
      // },0)
    }
  },
};
</script>

<style>
.city-content {
  width: 1190px;
  margin: 0 auto;
  box-sizing: border-box;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
}
.choose-province {
  padding-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  width: 100%;
}
.clearf{
  display: flex;
  width: max-content;
}
.choose-city {
  display: flex;
  align-items: center;
}
.choose-city .l-attr {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}
.choose-city .choose-wrap {
  display: flex;
}
.choose-city .direct-search {
  display: flex;
}
.choose-city .select-province {
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  position: relative;
  color: #666;
  font-size: 14px;
  padding: 10px 0 10px 10px;
  cursor: pointer;
  margin: 0 10px 0 20px;
  border-radius: 4px;
}
.choose-city .select-city {
  width: 150px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  position: relative;
  color: #666;
  font-size: 14px;
  padding: 10px 0 10px 10px;
  cursor: not-allowed;
  margin: 0 10px 0 20px;
  border-radius: 4px;
}
.choose-city .select-city.active{
  cursor: pointer;
}
.choose-city .select-province .el-icon-caret-bottom {
  position: absolute;
  right: 4px;
  line-height: 18px;
}
.choose-city .select-city .el-icon-caret-bottom {
  position: absolute;
  right: 4px;
  line-height: 18px;
}
.direct-search {
  margin-left: 40px;
  display: flex;
  align-items: center;
}
.direct-search h3 {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}
.direct-search .search-inp {
  width: 220px;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
  margin-left: 10px;
  font-size: 14px;
  color: #666;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  outline: none;
}
.province-list {
  
  height: 375px;
  padding: 20px 0 20px 15px;
  border: 1px solid #e5e5e5;
  color: #666;
  font-size: 14px;
  background: #fff;
  position: absolute;
  top: 45px;
  left: 0;
  box-sizing: border-box;
}
.province-list.myprovince{
  width: 264px;
}
/* .province-list.mycity{
  min-width: 150px;

} */
.province-list::before {
  content: "";
  position: absolute;
  top: -7px;
  left: 26px;
  border-bottom: 6px solid #e5e5e5;
  border-top: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}
.province-list::after {
  content: "";
  position: absolute;
  top: -5px;
  left: 26px;
  border-bottom: 6px solid #fff;
  border-top: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
}
.province-list .city-lead {
  font-size: 16px;
  color: #ccc;
  margin-top: 0;
  margin-bottom: 11px;
}
.province-list .clearf::after {
  content: "";
  display: block;
  clear: both;
}
.province-list .line-city {
  float: left;
}
.province-list .line-city p {
  
  cursor: pointer;
  
  display: table;
  box-sizing: border-box;
  height: 20px;
  padding: 1px 8px;
  margin: 6px 38px 6px 0;
  font-size: 12px;
}
.province-list .line-city p a{
color: #666; 
text-decoration: none;
}
</style>