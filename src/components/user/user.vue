<!-- user -->
<template>
  <div class="user">
    <div class="user-header">
       <headers :content="content"></headers>
    </div>
    <div class="user-sidebar">  
      <sidebar :fontName = "fontName" :userName = "userName"></sidebar>
    </div>
    <div class="user-content">
      <div class="main-query clearfix">
            <div class="query-nav">
                <div class="line"></div>
                <button class="usable-btn">invoke records</button>
            </div>
            <div class="query-opt">
                <div class="usable">
                      <ul>
                          <li v-for="(item,index ) in usable" @click="inputShow( item,index)" class="apiItem">
                              <div class="apiName">{{ item }}</div>
                              <div class="result" v-show="index ===clickIndex">
                                 {{ result===false?"":result }}
                              </div>
                          </li>
                      </ul>
                      <div class="usable-bk" v-show="userBk">
                            <div class="close icon-close" @click="controlClose"></div>
                            <div class="query-result">
                                  <input type="text" class="input-result" v-model="queryNumber">
                                  <button class="result-sub" @click="querySubmit">submit</button>
                            </div>
                      </div>
                </div>
                <div class="query">
                    <button class="query-btn" @click="clickChange">query records</button>
                      <ul>
                          <li class="queryList" v-for="(item, index) in query" v-show="query && clickShow" @mouseover ="showMinute(index)" @mouseout="hiddenMinute">
                              <p><span>{{ item.name }}</span></p>
                              <div class="queryItem" v-show="itemShow ===index">
                                    <p><span>name:</span> <span>{{ item.name }}</span></p>
                                    <p><span>result:</span> <span>{{ item.result }}</span></p>
                                    <p><span>hospital:</span> <span>{{ item.hps[0] }},{{ item.hps[1] }}</span></p>
                              </div>
                              <div class="line"></div>
                          </li>
                      </ul>
                </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script>
import Headers from "../header/headers";
import Sidebar from "../sidebar/sidebar";
import CmdUtil from "../../common/js/cmdUtil";
let cmdUtil = new CmdUtil();
export default {
  data() {
    return {
      query: [],
      clickShow: true,
      usable: [],
      queryResult: false,
      result:'',
      ele:String,
      queryNumber: '',
      clickIndex:Number,
      userBk:false,
      content: "user pages",
      fontName: "",
      userName: String,
      itemShow: false
    };
  },
  methods: {
    inputShow(ele,index) {
      this.ele = ele;
      console.log(ele);
      this.clickIndex = index;
      this.userBk = true;
      this.result = false;
    },
    querySubmit() {
      this.userBk = false;
      this.result = cmdUtil.invokeAPI(this.ele, this.queryNumber);
      console.log(this.result)
    },
    controlClose(){
      this.userBk = false;
    },
    clickChange() {
      this.clickShow = !this.clickShow;
    },
    showMinute(index) {
      this.itemShow = index;
    },
    hiddenMinute() {
      this.itemShow = false;
    }
  },
  components: {
    headers: Headers,
    sidebar: Sidebar
  },
  created() {
    this.fontName = localStorage.fontName;
    this.query = cmdUtil.queryHistoricRecords();
    this.usable = cmdUtil.queryAvailableAPI();
    this.userName = localStorage.email;
  }
};
</script>
<style scoped>
@import url(../../common/css/icon.css);
.user {
  height: 100%;
  background: #fff;
}
.user-header {
  position: fixed;
  top: 0;
  height: 50px;
  z-index: 50;
  width: 100%;
  background: rgb(42, 46, 49);
}
.icon-user-tie {
  font-size: 30px;
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}
.user-sidebar {
  position: fixed;
  top: 50px;
  min-width: 210px;
  background: rgb(54, 61, 68);
  height: 100%;
}
.user-content {
  margin-left: 210px;
  padding-top: 50px;
  box-sizing: border-box;
  height: 100%;
  background: rgba(26, 30, 33, 1);
  position: relative;
}
.user-content .main-query {
  margin-top: 120px;
  background: rgb(41, 44, 48);
  height: 70%;
  width: 100%;
  position: absolute;
  bottom: 0px;
  box-sizing: border-box;
}
.user-content .main-query .query-nav {
  height: 30px;
  width: 100%;
  background: rgba(26, 30, 33, 1);
  position: relative;
  z-index: 10;
}
.user-content .main-query .query-nav .line {
  height: 1px;
  background: rgb(18, 22, 24);
  margin: 0 30px;
  box-shadow: 1px 1px 1px rgb(33, 37, 40);
}
.user-content .main-query .query-opt {
  height: 100%;
  margin-top: -30px;
  padding-top: 30px;
  box-sizing: border-box;
  display: flex;
}

/* usable*/
.usable {
  height: 100%;
  flex: 2;
}
.usable-btn {
  padding: 5px;
  background: rgba(26, 30, 33, 1);
  margin-left: 30px;
  color: rgb(110, 113, 114);
}
.usable-btn:hover {
  color: rgb(62, 100, 130);
}
.usable .apiItem {
  height: 60px;
  color: rgb(164, 167, 170);
  display: flex;
}
.usable .apiItem .apiName {
  flex: 0 0 200px;
  line-height: 60px;
  padding-left: 20px;
  margin-right:30px;
}
.usable .apiItem .result {
  flex: 1;
  line-height: 60px;
}
.usable .apiItem:nth-child(odd) {
  background: rgb(44, 48, 51);
}
.usable .apiItem:nth-child(even) {
  background: rgb(30, 34, 37);
}
.usable .usable-bk{
  height:100%;
  width:100%;
  background:rgba(0,0,0,0.6);
  position:absolute;
  z-index: 100;
  left:0px;
  top:0px;
}
.usable .usable-bk .close{
  color:#fff;
  height:20px;
  width:20px;
  position: absolute;
  right:10px;
  top:10px;
}
.usable .usable-bk .query-result{
  position: absolute;
  height:200px;
  width:400px;
  transform: translate(-50%,-50%);
  left:50%;
  top:50%;
  border-radius:20px;
  background:rgb(47,50,56);
  text-align: center;
}
.usable .usable-bk .query-result .input-result{
  height:50px;
  width:60%;
  display: inline-block;
  line-height: 50px;
  font-size: 30px;
  color:rgb(122,117,146);
  margin: 30px 20%;
  text-align: center;
  background:rgb(47,50,56);
  border:none;
  border-bottom: 2px solid rgb(122,117,146);
}
.usable .usable-bk .query-result .result-sub{
  background: -webkit-gradient(linear, left top, left bottom, from(#666), to(#000));
  background: -moz-gradient(linear, left top, left bottom, from(#666), to(#000));
  background: -o-gradient(linear, left top, left bottom, from(#666), to(#000));
  height:40px;
  border-radius:10px;
  width:200px;
  color: #d7d7d7;
  font-size: 16px;
}
.usable .usable-bk .query-result .result-sub:hover{
  background:rgb(12,12,12);
}
/* query */
.query {
  height: 100%;
  width: 200px;
  background: rgb(38, 41, 47);
  flex: 1;
  overflow-y:auto;
}
.query .queryList {
  position: relative;
  height:50px;
  line-height: 50px;
  text-align: center;
  color: rgb(164, 167, 170);
}
.query .queryList .line {
    height: 1px;
    width:80%;
    background: rgb(18, 22, 24);
    position: absolute;
    bottom:0px;
    margin: 0 10%;
    box-shadow: 1px 1px 3px #ccc;
}

.query .queryItem {
  background: #ccc;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  left: -100%;
  top: 7px;
  z-index: 10;
  border-right: 10px solid #fff;
}
.query .queryItem:before {
  content: "";
  display: block;
  position: absolute;
  right: -5px;
  top: 3px;
  transform: rotate(-45deg);
  border-top: 10px solid transparent;
  border-right: 10px solid #ccc;
  z-index: 11;
}
.query-btn {
  padding: 5px;
  width: 100%;
  height: 40px;
  background: rgb(43, 47, 50);
  color: rgb(110, 113, 114);
  border: 1px solid rgb(20, 23, 26);
  margin-top: -1px;
}

.add-result {
  float: left;
}
</style>