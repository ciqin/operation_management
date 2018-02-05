<!-- enroll -->
<template>
  <div class="enroll-wrapper">
      <div class="enroll-content">
             <p class="type-select">
                  <span class="user-btn">user:</span> 
                  <span class="circle" :class="{ 'bk': selectState ==='user'}"  @click="userSelect"></span>
                  <span class="hospital-btn">hospital:</span>
                  <span class="circle" :class="{ 'bk': selectState ==='hospotal'}"  @click="hospotalSelect"></span>
              </p>
             <p class="info">
                   <span>name:</span>
                   <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email">
             </p>
             <p class="info">
                   <span>password:</span>
                   <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
             </p>
             <p class="info"> 
                  <span class="desc">description:</span>
                  <input type="text" v-model="description" placeholder="description"></p>
             <button class="btn" id="btn" @click="enrollData">enroll</button>
        </div>
  </div>
</template>

<script>
import  Manager from '../../common/js/userManagement';
let manager = new Manager();
export default {
  data() {
    return {
      email: "",
      password: "",
      description: "",
      selectState: "user"
    };
  },
  methods: {
    userSelect() {
      this.selectState = "user";
    },
    hospotalSelect() {
      this.selectState = "hospotal";
    },
    enrollData() {
      if(manager.signUp(this.selectState,this.email,this.password,this.description)){
        this.$router.push({ path:'/' });
      }
    }
  }
};
</script>
<style scoped>
.enroll-wrapper {
  position: absolute;
  padding: 30px;
  width: 340px;
  border: 1px solid rgb(221, 222, 223);
  background: #ffffff;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); /* IE 9 */
  -moz-transform: translate(-50%, -50%); /* Firefox */
  -webkit-transform: translate(-50%, -50%); /* Safari 和 Chrome */
  -o-transform: translate(-50%, -50%); /* Opera */
}
.login-content input[type="email"] {
  border: 1px solid rgb(221, 222, 223);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.login-content input[type="password"] {
  border: 1px solid rgb(221, 222, 223);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.info {
  height: 30px;
  line-height: 30px;
  margin-bottom: 15px;
}
.enroll-content .btn {
  width: 100px;
  display: inline-block;
  border: 1px splid rgb(93, 77, 67);
  background: rgb(117, 144, 102);
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
}
.type-select {
  height: 30px;
  line-height: 30px;
}
.user-btn,
.hospital-btn {
  display: inline-block;
}
.circle {
  height: 15px;
  margin-top: 4px;
  width: 15px;
  border-radius: 50%;
  display: inline-block;
  background: blue;
  margin: 0 10px;
}
.bk {
  background: red;
}
</style>