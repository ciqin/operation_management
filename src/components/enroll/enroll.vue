<!-- enroll -->
<template>
  <div class="enroll-wrapper">
       <div class="switch-wrapper">
          <div class="user-login" :class="{ 'bk': selectState ==='user'}"  @click="userSelect">user</div>
          <div class="doctor-login" :class="{ 'bk': selectState ==='hospotal'}"  @click="hospotalSelect">doctor</div>
        </div>  
      <div class="enroll-content">
             <div class="info">
                   <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email">
             </div>
             <div class="info">
                   <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
             </div>
             <div class="info"> 
                  <input type="text" v-model="description" placeholder="description">
              </div>
              <div class="btnWrapper">
                  <button class="btn" id="btn" @click="enrollData">enroll</button>
              </div>
             
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
  width: 400px;
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
.switch-wrapper {
  height: 40px;
  margin-bottom: 15px;
  display: flex;
}
.user-login,
.doctor-login {
  flex: 1;
  line-height: 40px;
  cursor: pointer;
  border-bottom: 1px solid rgb(221, 222, 223);
  text-align: center;
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
  display: flex;
}
.enroll-content:last-child .info{
  margin-bottom:30px;
}
.info .tip{
  flex: 0 0 80px;
  margin-right:5px;
  text-align: right;
  display: inline-block;
}
.info input{
  width:100%;
  padding-left:16px;
  font-size: 15px;
  flex:1;
  height:35px;
  border: 1px solid rgb(221, 222, 223);
}
.enroll-content{
  padding:30px;
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
  text-align: center;
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
  border-bottom: 1px solid red; 
}
.enroll-wrapper .btnWrapper{
  width:100%;
  text-align: center;
  margin-top:10px;
}
</style>