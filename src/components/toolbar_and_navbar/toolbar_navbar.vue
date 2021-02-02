<template>
<v-app>

    <v-app-bar :clipped-left="true" app color="indigo"
               dark dense>
      <v-row >

      <v-icon @click="drawer = ! drawer  ">
        {{ drawer ? "mdi-format-indent-increase" : "mdi-format-indent-decrease" }}
      </v-icon>
      <v-toolbar-title>Tilte</v-toolbar-title>

      </v-row>
    </v-app-bar>
  <v-main>
    <v-cart>
    <v-container>
      <router-view/>
    </v-container>
    </v-cart>
  </v-main>

    <v-navigation-drawer app :clipped="true" :floating="true" :mini-variant="drawer" color="deep-purple accent-3">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-icon>mdi-bank</v-icon>
            Lms System
          </v-list-item-title>
<!--          <v-list-item-subtitle>-->
<!--            subtext-->
<!--          </v-list-item-subtitle>-->
        </v-list-item-content>
      </v-list-item>

<!--      <v-divider></v-divider>-->

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            router :to="item.router"
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

</v-app>
</template>

<script>

export default {
name: "toolbar_navbar",
  data () {
    return {
      items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard', router:'/'},
        {title: 'Student', icon: 'mdi-account-tie', router:'/Students',},
        {title: 'Teachers', icon: 'mdi-account-tie-voice', router:'/Teachers' },
        {title: 'Rooms', icon: 'mdi-cellphone-link', router:'/Rooms'},
        {title: 'Subjects', icon: 'mdi-account-details-outline', router:'/Subjects'},
        {title: 'Student Gurup', icon: 'mdi-account-multiple', router:'/StudentGrups'},
        {title: 'Time Table', icon: 'mdi-folder-table-outline', router:'/TimeTable'},
        {title: 'AdminLogin', icon: 'mdi-account', router:'/AdminLogin'},





      ],
      right: null,
      drawer: true
    }
  }
}
</script>

<style scoped>

</style>