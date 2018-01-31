<!-- enroll -->
<template>
  <div class="enroll-wrapper">
      <div class="enroll-content">
             <p class="info"><span>name:</span><input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="email"></p>
             <p class="info"><span>password:</span><input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password"></p>
             <button class="btn" id="btn" @click="enrollData">enroll</button>
        </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        email:"",
        password:""
    };
  },
  methods:{
    enrollData(){
        this.$http.get("http://localhost:8011/enroll",{params: {email:this.email,password:this.password}}).then(res=>{
              if(res.body==="ok"){
                this.$router.push({ path: '/' });
              }else{
                alert("error")
              }
        })
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
</style>