<template>
  <div class="login-wrapper">
      <div class="login-title">
        <h2>Please Sign In </h2>
      </div>
      <div class="form-signin">
        <div class="switch-wrapper">
          <div class="user-login" @click="addUser" :class="{'addborder' :addborder==='user'}">user</div>
          <div class="doctor-login" @click="addDoctor" :class="{'addborder' :addborder==='hospital'}">doctor</div>
        </div>  
        <div class="login-content">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
            <div class="input-operation">
               <router-link to="/revise">Go to revise</router-link>
               <router-link to="/enroll">Go to enroll</router-link>
            </div>
            <div class="login-btn">
              <button class="btn" id="btn" @click="goUser">Sign in</button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import  Manager from '../../common/js/userManagement';
let manager = new Manager();
export default {
  name: "loginWrapper",
  data() {
    return {
      addborder: "user",
      email: "",
      password: "",
      fontName: "icon-user-tie",
    };
  },
  methods: {
    goUser() {
      let paths = this.addborder;
      let fontName = this.fontName;
      localStorage.fontName = this.fontName;
      localStorage.email = this.email;
      if(manager.signIn(this.addborder,this.email,this.password)){
        this.$router.push({ path: `/${paths}` });
      }else{
        alert("Wrong username or password");
      }   
    },
    addUser() {
      this.addborder = "user";
      this.fontName = "icon-user-tie";
    },
    addDoctor() {
      this.addborder = "hospital";
      this.fontName = "icon-home";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-wrapper {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); /* IE 9 */
  -moz-transform: translate(-50%, -50%); /* Firefox */
  -webkit-transform: translate(-50%, -50%); /* Safari 和 Chrome */
  -o-transform: translate(-50%, -50%); /* Opera */
}
.login-title {
  text-align: center;
}
.login-title h2 {
  color: #ffffff;
  font-size: 30px;
  font-weight: 700;
}
.form-signin {
  width: 400px;
  margin: 0 auto;
  border: 1px solid rgb(221, 222, 223);
  background: #ffffff;
}
/* user and doctor switch*/
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
.addborder {
  border-bottom: 1px solid red;
}
.form-signin .checkbox {
  font-weight: 400;
}
/* login content*/
.form-signin .login-content {
  padding: 30px;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: 20px;
  width: 100%;
  border: 1px solid rgb(221, 222, 223);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid rgb(221, 222, 223);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
/* user login btn*/
.login-btn {
  text-align: right;
}
.form-signin #btn {
  width: 100px;
  display: inline-block;
  border: 1px splid rgb(93, 77, 67);
  background: rgb(117, 144, 102);
  height: 30px;
  line-height: 30px;
  border-radius: 5px;
}
</style>
