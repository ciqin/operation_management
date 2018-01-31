<!-- doctor  -->
<template>
  <div class="doctor">
      <div class="doctor-header">
          <headers :content="content"></headers>
      </div>
      <div class="doctor-sidebar">
        <sidebar ></sidebar>
      </div>
      <div class="doctor-content">
        <div class="content-show">
          <button class="btn" @click="changeShow" >date</button>
          <div class="adddate" v-show="show">
            <ul>
              <li v-for="item in api" @click="descCon(item)">{{item}}</li>
            </ul>
            <button class="addele" @click="addEle">addAPI</button>
          </div>
          <div class="addinput" v-show="addinput">
            <input type="text" placeholder="input" ref="val">
            <button @click="add">add</button>
          </div>
        </div>
        <div class="content-operation" v-show="API">
          <div class="menute">
            <div class="text">{{API}}</div>
            <div class="text-content">
              <p><span>descrition:</span> <span></span></p>
              <p><span>score:</span> <span></span></p>
            </div>
          </div>
          <div class="status">
            <p><span>status:</span><span>off</span></p>
            <button>change start</button>
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
      content: "user pages",
      api: ["API1", "API2", "API3"],
      show: 0,
      addinput: false,
      API:false
    };
  },
  components: {
    headers: Headers,
    sidebar: Sidebar
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    addEle() {
      this.addinput = true;
    },
    add() {
      this.addinput = false;
      this.api.push(this.$refs.val.value);
    },
    descCon(ele){
        this.API = ele;
    }
  }
};
</script>
<style scoped>
button {
  border: 1px solid #ccc;
  padding: 5px;
  background: rgb(117, 144, 102);
}
.doctor{
  height:100%;
  background:#fff;
}
.doctor-header {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background:rgb(63,157,252);
}
.doctor-sidebar {
  position: fixed;
  top: 50px;
  min-width: 210px;
  background: rgb(61,70,76);
  height: 100%;
}
.doctor-content {
  margin-left: 210px;
  padding-top: 50px;
}
.content-show {
  float: left;
  width: 200px;
}
.doctor .btn {
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 5px;
  background: rgb(117, 144, 102);
}
.content-operation {
  float: left;
}
</style>