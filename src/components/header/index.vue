<template>
  <div class="myheader">
    <top-bar></top-bar>

    <search-bar></search-bar>
  </div>
</template>

<script>
import TopBar from "./TopBar";
import SearchBar from "./SearchBar";
export default {
  components: {
    TopBar,
    SearchBar,
  },
};
</script>

<style>
.myheader{
   width: 100%;
   margin: 0 auto;
   box-shadow: 0 2px 27px 0 rgba(0,0,0,0.10);
 
}
</style>