<!-- user -->
<template>
  <div class="user">
    <div class="user-header">
       <headers :content="content"></headers>
    </div>
    <div class="user-sidebar">
      <sidebar></sidebar>
    </div>
    <div class="user-content">
        <div class="query">
           <button class="query-btn">query records</button>
            <ul v-show="1">
              <li v-for="item in query">{{item}}</li>
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
      query: ['API1'],
      usable:["API1","API2","API3"],
      queryResult:0,
      submit:1,
      result:0,
      content:'user content'
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
        this.query.push(this.ele)
        this.submit = 0;
        this.result = 1;
    }
  },
  components: {
    headers: Headers,
    sidebar: Sidebar
  }
};
</script>
<style scoped>
.user-header {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
}
.user-sidebar {
  position: fixed;
  top: 50px;
  min-width: 210px;
  background: #424a5d;
  height: 100%;
}
.user-content {
  margin-left: 210px;
  margin-top: 50px;
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