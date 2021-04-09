<template>
  <v-app class="applogin" style="background-color:#BDBDBD">
    <v-card
        class="overflow-hidden card"
        style="width: 450px;margin: auto"
        elevation="22"
        :loading="lading">
      <v-toolbar flat
                 color="purple"      ><v-avatar size="70"><img :src="Img" alt="buyerda rasmi bor"></v-avatar>
        <v-toolbar-title class="font-weight-light ml-16">
          Admin panel
        </v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-text-field
            label="username"
           :rules="validater.login"
            v-model="login"
            solo
        ></v-text-field>
        <v-text-field
            label="password"
            type="password"
            solo
            :rules="validater.password"
            v-model="password"
        ></v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn style="position: relative;left: -100px"
            color="success"
            @click="userLoginDataSend()"
            :disabled="button_click">
          Submit
        </v-btn>
        <v-btn style="position: relative;left: -100px"
               color="success"
               @click="claer()"
               :disabled="button_click">
         clear
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-snackbar
        v-model="snackbar"
        color="deep-purple accent-4"
        :timeout="955"
        left
        top
        shaped
    >
      {{ text?"Hello you clear work" :"plase you " }}


    </v-snackbar>
    <v-snackbar
        v-model="snackbarsave"
        color="deep-purple accent-4"
        :timeout="955"
        top
        shaped
    >
      {{ text?"Hello you clear work" :"plase you " }}


    </v-snackbar>

  </v-app>


</template>

<script>
import Img from '../assets/95-958614_man-icon-person-logo-png-clipart.png'
export default {
  data() {
    return {
      snackbarsave:false,
      snackbar: false,
      text:true,
      Img: Img,
      password: '',
      login: '',
      button_click: false,
      lading: false,
      validater:{
        login:[e=>!!e||'you username required',
        ],
        password:[p=>!!p||'you password required']
      }

    }
  },

  methods: {
     userLoginDataSend() {
       this.snackbarsave=!this.snackbarsave
      this.lading = !this.lading
      this.button_click = !this.button_click
      let login = {password: this.password, username: this.login}
      let sendtoken = {sendToken: false}
      this.$store.dispatch("authenticate", login, sendtoken)
          .then(res => {
            console.log(res)
            this.$router.push('/')
          })
          .finally(() => {
            // enable
            this.button_click = !this.button_click;
            this.lading = false

          })

    },
    claer(){
       this.snackbar=!this.snackbar
       this.login=""
      this.password=""
    }
  },
  updated() {
    // this.claer()
  }
}
</script>

<style scoped>
main {
  min-height: 0px;
}

.img {
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
