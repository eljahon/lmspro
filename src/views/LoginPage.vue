<template>


  <v-card
      class="overflow-hidden"
      color="purple lighten-1 blue"
      dark
      style="width: 450px;margin: auto"
      elevation="22"
      :loading="lading"

  >
    <v-toolbar flat color="purple"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        Admin panel
      </v-toolbar-title>


    </v-toolbar>

    <v-card-text>

      <v-text-field color="white"
                    v-model="login" placeholder="user...">
      </v-text-field>

      <v-text-field

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


</template>

<script>
// import requesPost from "@/service/requestPOST";
import request from "../service/axios_init"

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
      request.post('/authenticate', {password: this.password, username: this.login}, {sendToken: false})
          .then(res => {
            if (res.status === 200 && res.body.token) {
              const {token, learningCentres} = res.body;
              console.log(res)
              localStorage.setItem('learningCentresid', learningCentres[0].id)
              localStorage.setItem('token', token);
              let usertoken = {surname: res.body.user.lastName, name: res.body.user.firstName}
              localStorage.setItem('usertoken', JSON.stringify(usertoken))
              this.$router.push({name: 'ToolbarNavbar'});
            }
          })
          .catch(console.log)
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

</style>