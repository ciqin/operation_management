<!-- sidebar -->
<template>
  <div class="sidebar-c">
      <div class="info">
        <span class="head" :class="fontName"></span>
        <p class="desc">{{userName}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    fontName:String,
    userName:String,
  },
  data () {
    return {
    };
  },
  created(){
  
  }
}

</script>
<style scoped>
@import url('../../common/css/icon.css');
.sidebar-c{
  color:#fff;
}
.info{
  width:100%;
  text-align: center;
  padding-top:20px;
}
.head{
  font-size: 30px;
}
</style>