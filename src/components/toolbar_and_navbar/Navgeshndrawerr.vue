<template>
  <v-app>
    <v-navigation-drawer
        app :floating="true"
        :mini-variant="navbar_appbar"
        color="deep-purple"
        class="navbar"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-icon>mdi-bank</v-icon>
            Lms System
          </v-list-item-title>
          <v-list-item-subtitle>
            Vue js Eljahon
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router :to="item.router"
            color="light-blue lighten-5"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>


    <v-main class="mainruoter">
      <router-view/>
    </v-main>

  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import request from "@/service/axios_init";
// import img from '../../assets/subject.png'


export default {

  data() {
    return {
      items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard', router: '/'},
        {title: 'Student', icon: 'mdi-account-tie', router: '/Students',},
        {title: 'Teachers', icon: 'mdi-account-tie-voice', router: '/Teachers'},
        {title: 'Rooms', icon: 'mdi-cellphone-link', router: '/Rooms'},
        {title: 'Subjects', icon: 'mdi-account-details-outline', router: '/Subjects'},
        {title: 'Student Gurup', icon: 'mdi-account-multiple', router: '/StudentGrups'},
        {title: 'Time Table', icon: 'mdi-folder-table-outline', router: '/TimeTable'},
        {title: 'Main Menu', icon: 'mdi-account', router: '/mainmenu'},


      ],
      right: null,
    }
  },
  computed: {
    ...mapGetters(['navbar_appbar'])
  },
  mounted() {
    const token = localStorage.getItem("token")
    if (token) {
      request.get("/account-info")
          .then(res => {
            if (res.status === 200) {
              this.$store.dispatch("setAccountData", res.body)
            }
          })
          .catch(err => {
            // eslint-disable-next-line no-debugger
            if (err.response.status === 401 || err.response.status === 403) {
              this.$router.push({name: "Login"})
            }
          }).finally(() => {

      })
    } else {
      this.$router.push({name: "Login"})
    }

  },
  methods: {
    // toggle(){
    //   this.$store.dispatch("toggleNavbar")
    // }

  }


}
</script>

<style scoped>

* {
  box-sizing: border-box;

}

.navbar{
  z-index:6!important;
}

.mainruoter {
  margin-top: 50px;
  /*width: 100%;*/
}

</style>