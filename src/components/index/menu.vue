<template>
  <div class="left-menu">
   
    <ul>
      <li class="title">全部分类</li>
      <li v-for="(content,index) in dataList" :key="content.name" 
      @mouseenter="mouseEnterLi(index)"
      @mouseleave="mouseLeaveLi"
      >
        <div class="leftlead">
          <i :class="iconclass(index)"></i>
          <router-link to="/" class="menu-type">{{ content.name }}</router-link>
        </div>
        <div class="rightlead">
          <i class="iconfont icon-youjiantou-01 black"></i>
        </div>

        <div class="righthover" v-if="curindex==index&&listLook">
          <div class="ftitle">
            <h2>{{ content.name }}</h2>
            <div class="more">
              <span>更多</span>
              <i class="iconfont icon-youjiantou-01"></i>
            </div>
          </div>
          <div class="ttitle">
            <router-link to="/" v-for="item in content.items[0].items" :key="item">{{ item }}</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import api from '@/api/index.js'
export default {
  data() {
    return {
      dataList: [],
      iconfontclass: ["icon-shaozikuaizi", "icon-waimai-", "icon-hotel"],
      listLook: false,
      curindex: 0,
    };
  },

  methods: {
    iconclass(index) {
      return `iconfont ${this.iconfontclass[index]}`;
    },
    mouseEnterLi(index) {
      // console.log(index)
      this.curindex = index;
      this.listLook=true;
    },
    mouseLeaveLi(){
      this.listLook=false;
    }
  },
  created() {
    // this.$axios
    //   .get("https://open.duyiedu.com/api/meituan/index/nav.json", {
    //     params: {
    //       appkey: "MQisOK_1581077315848",
    //     },
    //   })
      api.getMenuList().then((res) => {
        this.dataList = res.data.data;
       
      });
  },
};
</script>
 
<style>
@import url("https://at.alicdn.com/t/font_1973793_xxej0nrox48.css");
.left-menu {
  width: 230px;
  height: 475px;
  background-color: #fff;
  
 
 
}
 
.left-menu ul {
  padding-bottom:  8px;
  height: 475px;
  box-sizing: border-box;
  position: relative;
  margin-top: -50px;
  border: 1px solid #e5e5e5;
}
.left-menu .title {
  width: 232px;
  color: #222;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 10px;
  padding-left: 15px;
  padding-top: 15px;
  height: 50px;
  box-sizing: border-box;
  
}
.left-menu ul li {
  height: 26px;
  padding: 2px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left-menu li a {
  margin-left: 11px;
  text-decoration: none;
  font-size: 13px;
  color: #646464;
  cursor: pointer;
}
.left-menu ul li .icon-youjiantou-01 {
  font-size: 10px;
  color: #bfbfbf;
  font-weight: 500;
}
.left-menu ul li:hover {
  background: rgba(255, 150, 0, 0.08);
}
.left-menu ul li:hover .black {
  color: #222222;
  font-weight: 1000;
}
.left-menu ul li:hover .menu-type {
  color: #222222;
  font-weight: 800;
}
.icon-shaozikuaizi {
  color: #ff8200;
  vertical-align: center;
}
.icon-waimai- {
  color: #ffb500;
}
.icon-hotel {
  color: #9b5e3e;
}

.righthover .ftitle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  height: 22px;
  /* box-sizing: border-box; */
}
.righthover .ftitle h2 {
  font-size: 16px;
  font-weight: 500;
  color: #222;
  cursor: pointer;
}
.righthover .ftitle .more {
  font-size: 12px;
  color: #999;
  font-weight: 400;
  margin-right: 6px;
  cursor: pointer;
}
.righthover .ftitle .more .icon-youjiantou-01 {
  font-size: 8px;
  margin-bottom: 1px;
}
.righthover .ttitle a{
  margin: 10px 16px 0 0;
  color: #999;
  font-size: 12px;
  line-height: 15px;
  display: inline-block;  
}
.righthover .ttitle a:hover{
  color: #ffb500;
}
</style>