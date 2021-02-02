<template>



<!--    <v-card-->
<!--        class="overflow-hidden"-->
<!--        color="purple lighten-1"-->
<!--        dark-->
<!--    >-->
<!--      <v-toolbar-->
<!--          flat-->
<!--          color="purple"-->
<!--      >-->
<!--        <v-icon>mdi-account</v-icon>-->
<!--        <v-toolbar-title class="font-weight-light">-->
<!--          Admin panel-->
<!--        </v-toolbar-title>-->


<!--      </v-toolbar>-->

<!--      <v-card-text>-->

<!--        <v-text-field-->

<!--            color="white"-->
<!--            v-model="User"-->
<!--            placeholder="user..."-->
<!--        ></v-text-field>-->
<!--        <v-text-field-->

<!--            color="white"-->
<!--            v-model="Password"-->
<!--            placeholder="password.."-->
<!--        ></v-text-field>-->


<!--      </v-card-text>-->
              <v-divider></v-divider>
<!--      <v-card-actions>-->
<!--        <v-spacer></v-spacer>-->
        <v-btn

            color="success"
            @click="UserLogenDataSend()"
        >
          Submit
        </v-btn>
<!--      </v-card-actions>-->
      <!-- -->
<!--    </v-card>-->



</template>

<script>
import  axios from 'axios'

export default {
  name: "LoginPage",
  data() {
    return {

      Password: '',
      User: '',

    }
  },

  methods: {

    UserLogenDataSend() {
      let UserPassword = this.Password;
      let UserLogin = this.User;
      console.log(UserLogin, UserPassword)
      axios.POST("https://lmspro-uz.herokuapp.com/api/authenticate", {
        username: UserLogin,
        password: UserPassword
      })
    }
  },
}
</script>

<style scoped>

</style>