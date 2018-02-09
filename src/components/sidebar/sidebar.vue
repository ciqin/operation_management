<!-- sidebar -->
<template>
  <div class="sidebar-c">
      <div class="info">
          <div class="avater">
            <span class="head" :class="fontName"></span>
          </div>
          <div class="user">
            <p class="desc">{{userName}}</p>
          </div>
          <div class="line"></div>
      </div>
      <div class="content">
        <p>welcome {{userName}}</p>
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
.avater{
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background:#fff;
  display: inline-block;
  line-height: 60px;
}
.head{
  font-size: 30px;
  color:#000;
  line-height: 60px;
}
.user{
  margin:15px 0;
}
.line{
  border-top:1px solid rgba(255,255,255,0.1);
  margin: 0 20px;
}
.content {
  margin-top:20px;
}
.content p{
  text-align: center;
}
</style>