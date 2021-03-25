<template>

<v-app class="applogin">


    <v-card
      class="overflow-hidden card"


      style="width: 450px;margin: auto"
      elevation="22"
      :loading="lading"

  >
    <v-toolbar flat color=""
    >
      <v-icon size="50px">mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light ml-16">
        Admin panel
      </v-toolbar-title>


    </v-toolbar>

    <v-card-text>

      <v-text-field
          outlined
          label="login"
          color="white"
          v-model="login"
          placeholder="user..."
      >
      </v-text-field>

      <v-text-field
          label="password"
          type="password"
          autofocus="true"
          outlined
          color="white"
          v-model="password"
          placeholder="password.."
      ></v-text-field>


    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn

          color="success"
          @click="userLoginDataSend()"
          :disabled="button_click"
      >
        Submit
      </v-btn>
    </v-card-actions>

  </v-card>





</v-app>


</template>

<script>
// import requesPost from "@/service/requestPOST";
// import request from "../service/axios_init"

export default {
  name: "LoginPage",
  data() {
    return {

      password: '',
      login: '',
      button_click: false,
      lading: false

    }
  },

  methods: {

    userLoginDataSend() {

      this.lading = !this.lading
      this.button_click = !this.button_click
      let login = {password: this.password, username: this.login}
      let sendtoken ={sendToken: false}
      this.$store.dispatch("authenticate", login, sendtoken)
          .then(res=>{
            console.log(res)
            this.$router.push('/home')
          })
          .finally(() => {
            // enable
            this.button_click = !this.button_click;
            this.lading = false

          })

    }
  },
}
</script>

<style scoped>
main{
  min-height: 0px;
}
.img{
  width: 100%;
  height: 100%;

  background-size: cover;
  background-repeat: no-repeat;

}
/*.applogin{*/
/*background-image: url("../assets/image-440.jpg");*/
/*  background-size: cover;*/
/*  background-repeat: no-repeat;*/
/*}*/
  /*.card{*/
  /*  background-image: url("../assets/image-440.jpg");*/
  /*  background-size: cover;*/
  /*  background-repeat: no-repeat;*/

  /*}*/

</style>
