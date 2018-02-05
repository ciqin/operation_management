<!-- doctor  -->
<template>
  <div class="doctor">
      <div class="doctor-header">
          <headers :content="content"></headers>
      </div>
      <div class="doctor-sidebar">
           <sidebar :fontName = "fontName" :userName = "userName"></sidebar>
      </div>
      <div class="doctor-content">
          <div class="operation">
              <div class="operation-btn">
                    <button @click="showAsset">Asset</button>
                    <button @click="changeShow">API</button>
              </div>
              <div class="queryApi" v-show="apiShow">
                    <div class="apiLeft">
                        <ul>
                              <li v-for="item in apiData" @click="apiDesc(item)">{{item.name}}</li>
                        </ul>
                        <button @click="addEle">addApi</button>
                        <div class="addinput" v-show="addinput">  
                              <input type="name" placeholder="name" v-model="name">
                              <input type="data" placeholder="data" v-model="data">
                              <input type="status" placeholder="status" v-model="status">
                              <button @click="add" class="addApi">add</button>
                        </div>
                    </div>
                      <div class="content-operation" v-show="API">
                            <div class="menute">
                                  <div class="text"><span>name:</span>{{API.name}}</div>
                                  <div class="text-content">
                                    <p><span>descrition:</span> <span>{{API.data}}</span></p>
                                    <p><span>hospital name:</span> <span>{{API.hospital_name}}</span></p>
                                  </div>
                            </div>
                            <div class="status">
                                  <p><span>status:</span><span>{{API.status}}</span></p>
                                  <button @click="enableApi">on</button>
                                  <button @click="disableApi">off</button>
                            </div>
                      </div>
              </div>
          </div>
          <div class="asset" v-show="Asset">
              <p><span>owner:</span><span>{{AssetData.owner}}</span></p>
              <p><span>score:</span><span>{{AssetData.score}}</span></p>
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
      content: "user pages",
      hospital: String,
      show: Number,
      addinput: false,
      API: false,
      Asset: false,
      apiShow: false,
      AssetData: Object,
      fontName: String,
      apiData: Array,
      userName: String,
      name: "",
      data: "",
      status: "",
      hospitalName: ""
    };
  },
  components: {
    headers: Headers,
    sidebar: Sidebar
  },
  methods: {
    changeShow() {
      this.apiShow = !this.apiShow;
    },
    addEle() {
      this.addinput = true;
    },
    add() {
      this.addinput = false;
      cmdUtil.addAPI(
        this.name,
        this.data,
        this.status,
        this.apiData[0].hospital_name
      );
    },
    showAsset() {
      this.Asset = true;
      this.API = false;
      this.AssetData = cmdUtil.queryAsset(this.userName);
    },
    apiDesc(ele) {
      this.API = ele;
      this.Asset = false;
    },
    enableApi() {
      if (cmdUtil.enableAPI(this.API.hospital_name, this.API.name)) {
        this.API.status = "on";
      }
    },
    disableApi() {
      if (cmdUtil.disableAPI(this.API.hospital_name, this.API.name)) {
        this.API.status = "off";
      }
    }
  },
  created() {
    this.fontName = localStorage.fontName;
    this.hospital = cmdUtil.queryAvailableHospital();
    this.userName = localStorage.email;
    this.apiData = cmdUtil.queryLocalAPIs(this.userName);
  }
};
</script>
<style scoped>
button {
  border: 1px solid #ccc;
  padding: 5px;
  background: rgb(117, 144, 102);
}
.doctor {
  height: 100%;
  background: #fff;
}
.doctor-header {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  background: rgb(63, 157, 252);
}
.doctor-sidebar {
  position: fixed;
  top: 50px;
  min-width: 210px;
  background: rgb(61, 70, 76);
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
.addApi {
  display: block;
}
.queryApi {
  display: flex;
}
.content-operation {
  float: left;
  margin-left: 30px;
  margin-top: -30px;
}
.addinput {
  width: 200px;
}
.operation {
  width: 150px;
  float: left;
}
</style>