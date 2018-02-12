<!-- hospital  -->
<template>
  <div class="hospital">
      <div class="hospital-header">
          <headers :content="content"></headers>
      </div>
      <div class="hospital-sidebar">
           <sidebar :fontName = "fontName" :userName = "userName"></sidebar>
      </div>
      <div class="hospital-content">
        <div class="main">
            <div class="hospital-nav">
                <div class="line"></div>
                <button class="api-btn" @click="showAsset">Asset</button>
                <button class="api-btn" @click="changeShow">API</button>
                <button class="api-btn" @click="addEle">addApi</button>
            </div>
            <div class="hospital-opt">
                <div class="opt-left">
                    <transition name="apiList">
                        <div class="apiLeft" v-show="apiShow">
                            <ul>
                                  <li class="apiItem" v-for="item in apiData" @click="apiDesc(item)">{{item.name}}</li>
                            </ul>
                        </div>
                    </transition> 
                </div>
                <div class="opt-right">
                      <transition name="assetDesc">
                          <div class="asset" v-show="Asset">
                            <p><span>owner  :  </span><span>{{AssetData.owner}}</span></p>
                            <div class="line"></div>
                            <p><span>score  :  </span><span>{{AssetData.score}}</span></p>
                            <div class="line"></div>
                        </div>
                      </transition>
                      <transition  name="contentDesc">
                          <div class="content-operation" v-show="API">
                                  <div class="menute">
                                        <p class="text"><span>name  :  </span>{{API.name}}</p>
                                        <div class="line"></div>
                                        <div class="text-content">
                                          <p><span>descrition  :  </span> <span>{{API.data}}</span></p>
                                          <div class="line"></div>
                                          <p><span>hospital name  :  </span> <span>{{API.hospital_name}}</span></p>
                                          <div class="line"></div>
                                        </div>
                                  </div>
                                  <div class="status">
                                        <p><span>status  :  </span><span>{{API.status}}</span></p>
                                        <div class="line"></div>
                                        <button @click="enableApi">on</button>
                                        <button @click="disableApi">off</button>
                                  </div>
                        </div>
                      </transition>   
                </div>
                <transition name="hosOpt">
                    <div class="hos-bk" v-show="addinput">
                        <div class="close icon-close" @click="controlClose"></div>
                        <div class="addinput">  
                                    <input type="name" placeholder="name" v-model="name">
                                    <input type="data" placeholder="data" v-model="data">
                                    <input type="status" placeholder="status" v-model="status">
                                    <button class="btn" @click="add">add</button>
                          </div>
                    </div>
                </transition>    
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
      content: "hospital pages",
      hospital: String,
      show: Number,
      addinput: false,
      API: false,
      Asset: false,
      apiShow: true,
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
    controlClose() {
      this.addinput = false;
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
@import url(../../common/css/icon.css);
button {
  padding: 5px;
  background: rgb(117, 144, 102);
}
.hospital {
  height: 100%;
  background: #fff;
}
.hospital-header {
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  z-index: 5;
  background: rgb(42, 46, 49);
}
.hospital-sidebar {
  position: fixed;
  top: 50px;
  min-width: 210px;
  background: rgb(54, 61, 68);
  height: 100%;
}
.hospital-content {
  margin-left: 210px;
  padding-top: 50px;
  box-sizing: border-box;
  height: 100%;
  background: rgba(26, 30, 33, 1);
  position: relative;
}
.hospital-content .main {
  margin-top: 120px;
  background: rgb(41, 44, 48);
  height: 70%;
  width: 100%;
  position: absolute;
  bottom: 0px;
  box-sizing: border-box;
}

/*  main nav */
.main .hospital-nav {
  height: 30px;
  width: 100%;
  background: rgba(26, 30, 33, 1);
  position: relative;
  z-index: 10;
}
.main .hospital-nav .line {
  height: 1px;
  background: rgb(18, 22, 24);
  margin: 0 30px;
  box-shadow: 1px 1px 1px rgb(33, 37, 40);
}
.main .hospital-nav .api-btn {
  padding: 5px;
  background: rgba(26, 30, 33, 1);
  margin-left: 30px;
  font-size: 16px;
  color: rgb(110, 113, 114);
}
.main .hospital-nav .api-btn:hover {
  color: rgb(62, 100, 130);
}

/* hospital  operation content */
.main .hospital-opt {
  height: 100%;
  margin-top: -30px;
  padding-top: 30px;
  box-sizing: border-box;
  display: flex;
}

/* hospital  operation left content */
.main .hospital-opt .opt-left {
  height: 100%;
  flex: 2;
  overflow-y: auto;
}
.opt-left .apiLeft .apiItem {
  height: 60px;
  line-height: 60px;
  padding-left: 20px;
  color: rgb(164, 167, 170);
  display: flex;
}
.opt-left .apiLeft .apiItem:nth-child(odd) {
  background: rgb(44, 48, 51);
}
.opt-left .apiLeft .apiItem:nth-child(even) {
  background: rgb(30, 34, 37);
}

/* hospital  operation right content */
.main .hospital-opt .opt-right {
  background: rgb(38, 41, 47);
  overflow: hidden;
  flex: 1;
}
.hospital-opt .opt-right .asset {
  position: relative;
}
.hospital-opt .opt-right .asset p,
.hospital-opt .opt-right .content-operation p {
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: rgb(164, 167, 170);
}
.hospital-opt .opt-right .asset .line,
.hospital-opt .opt-right .content-operation .line {
  height: 1px;
  width: 80%;
  background: rgb(18, 22, 24);
  margin: 0 10%;
  box-shadow: 1px 1px 3px #ccc;
}
.opt-right .content-operation .status {
  text-align: center;
}
.opt-right .content-operation .status .line {
  margin-bottom: 20px;
}
/*  hospital model start*/
.hospital-opt .hos-bk {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  padding-top: 30px;
  position: absolute;
  box-sizing: border-box;
  top: 0px;
  left: 0px;
  z-index: 100;
}
.hospital-opt .hos-bk .close {
  color: #fff;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
}
.hospital-opt .hos-bk .addinput {
  position: absolute;
  height: 200px;
  width: 400px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  border-radius: 20px;
  background: rgb(47, 50, 56);
  text-align: center;
}
.hospital-opt .hos-bk .addinput input {
  height: 30px;
  width: 60%;
  display: inline-block;
  line-height: 30px;
  font-size: 16px;
  color: rgb(122, 117, 146);
  margin: 5px 20% 10px 20%;
  text-align: center;
  background: rgb(47, 50, 56);
  border: none;
  border-bottom: 2px solid rgb(122, 117, 146);
}
.hospital-opt .hos-bk .addinput .btn {
  background: gradient(linear, left top, left bottom, from(#666), to(#000));
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#666),
    to(#000)
  );
  background: -moz-gradient(
    linear,
    left top,
    left bottom,
    from(#666),
    to(#000)
  );
  background: -o-gradient(linear, left top, left bottom, from(#666), to(#000));
  height: 40px;
  border-radius: 10px;
  width: 200px;
  color: #d7d7d7;
  font-size: 16px;
}
.hospital-opt .hos-bk .addinput .btn:hover {
  background: rgb(12, 12, 12);
}
/*  hospital model end*/

/*  hospital addApi operation animation */
.hosOpt-enter-active,
.hosOpt-leave-active {
  transition: all 0.8s ease;
}
.hosOpt-enter {
  transform: scale(0.5);
}
.hosOpt-leave-to {
  transform: scale(0.5);
  opacity: 0;
}

/*  hospital addList operation animation */
.apiList-enter-active,
.apiList-leave-active {
  transition: all 0.8s ease;
}
.apiList-enter {
  transform: translateY(100px);
}
.apiList-leave-to {
  transform: translateY(-100px);
}

/*  hospital assetDesc operation animation */
.assetDesc-enter-active,
.assetDesc-leave-active {
  transition: all 0.8s ease;
}
.assetDesc-enter {
  transform: translateY(100px);
}
.assetDesc-leave-to {
  transform: translateY(-100px);
}
/*  hospital contentDesc operation animation */
.contentDesc-enter-active,
.contentDesc-leave-activ {
  transition: all 0.8s ease;
}
.contentDesc-enter {
  transform: translateY(100px);
}
.contentDesc-leave-to {
  transform: translateY(-100px);
}
</style>