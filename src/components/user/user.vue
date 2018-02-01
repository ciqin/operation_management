<!-- user -->
<template>
  <div class="user">
    <div class="user-header">
       <headers :content="content"></headers>
    </div>
    <div class="user-sidebar">
      <sidebar :fontName = "fontName"></sidebar>
    </div>
    <div class="user-content">
        <div class="query">
           <button class="query-btn" @click="clickChange">query records</button>
            <ul v-show="1">
              <li v-for="item in query" v-show="query && clickShow">{{item}}</li>
            </ul>
        </div>
        <div class="usable">
          <button class="usable-btn">invoke records</button>
            <ul v-show="1">
              <li v-for="item in usable" @click="inputShow(item)">{{item}}</li>
            </ul>
        </div>
        <div class="add-result" v-show="queryResult">
           <div class="message" v-show="submit">
                <span>args:</span>
                <input type="text">
                <button @click="querySubmit">submit</button>
            </div>
            <div class="result" v-show="result">
                <p>执行结果</p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import Headers from "../header/headers";
import Sidebar from "../sidebar/sidebar";
export default {
  data() {
    return {
      query: [],
      clickShow:false,
      usable:["API1","API2","API3"],
      queryResult:0,
      submit:1,
      result:0,
      content:'user pages',
      fontName:""
    };
  },
  methods:{
    inputShow(ele){
      this.queryResult=1;
      this.submit = 1;
      this.ele = ele;
      this.result = 0;
    },
    querySubmit(){
        this.query.push(this.ele);
        let newArr = Array.from(new Set(this.query)._c);
        this.query = newArr;
        this.submit = 0;
        this.result = 1;
    },
    clickChange(){
      this.clickShow = !this.clickShow;
    }
  },
  components: {
    headers: Headers,
    sidebar: Sidebar
  },
  created(){
    this.fontName = localStorage.fontName
  }
};
</script>
<style scoped>
@import url(../../common/css/icon.css);
.user{
  height: 100%;
  background:#fff;
}
.user-header {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background:rgb(63,157,252);
}
.icon-user-tie{
  font-size: 30px;
  float:right;
  margin-top:10px;
  margin-right:10px;
}
.user-sidebar {
  position: fixed;
  top: 50px;
  min-width: 210px;
  background: rgb(61,70,76);
  height: 100%;
}
.user-content {
  margin-left: 210px;
  padding-top: 50px;
  background:#fff;
}
.query,.usable{
  float:left;
  margin-right:30px;
} 
.query{
  height:400px;
}
.query-btn,.usable-btn{
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  background: rgb(117, 144, 102);
}
.add-result{
  float:left;
}
</style>