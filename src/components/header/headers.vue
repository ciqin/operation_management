<!-- header  -->
<template>
  <div class="logo">
    <h1 class="title">{{content}}</h1>
  </div>
</template>

<script>
export default {
  props:{
    content:String
  },
  data () {
    return {
    };
  },
}

</script>
<style scoped>
.logo{
  height: 100%;
  display: inline-block;
}
.title{
  padding-left:20px;
  color:#fff;
  font-size: 30px;
}
</style>