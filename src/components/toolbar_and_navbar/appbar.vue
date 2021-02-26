<template>
  <div>
    <v-app-bar :clipped-left="false" app color="deep-purple" dark class="appbar">
      <v-icon @click="toggleDrawer">
        {{ navbar_appbar ? "mdi-format-indent-increase" : "mdi-format-indent-decrease" }}
      </v-icon>
      <v-toolbar-title>Tilte</v-toolbar-title>
      <div>

      </div>
      <div>
        <v-avatar color="indigo" class="avatar">
          <img :src="img" alt="buyerda rasmi bor">
        </v-avatar>

        <div class="portal"> <portal-target name="destination"></portal-target></div>

        <template>
          <div class="text-center">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="#651FFF"
                    dark
                    v-bind="attrs"
                    v-on="on"
                >{{ surname }}:{{ username }}
                  <v-icon @click="useropenicon= ! useropenicon">
                    {{ useropenicon ? 'mdi-menu-down' : 'mdi-menu-up' }}
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                    v-for="(item, index) in overflow" :key="index">
                  <v-list-item-title @click="logout()">{{ item.title }}</v-list-item-title>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </template>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Img from '../../assets/photo_2020-11-16_13-29-39.jpg'


export default {

  data() {
    return {
      portal:true,
      salom: true,
      username: JSON.parse(localStorage.getItem('usertoken')).name,
      surname: JSON.parse(localStorage.getItem('usertoken')).surname,
      useropenicon: true,
      overflow: [{title: 'Logout', icon: 'mdi-arrow-right-bold'}],
      img:Img

    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('usertoken')
      localStorage.removeItem('learningCentresid')
      this.$router.push({name: 'Login'})

    },

    toggleDrawer() {
      this.$store.dispatch('toggleNavbar');
    }
  },
  computed: {
    ...mapGetters(['navbar_appbar'])
  },
  mounted() {

  }

}
</script>

<style scoped>
.text-center {

  position: absolute;
  top: 15px;
  right: 10px;
}

.avatar {
  position: absolute;
  top: 10px;
  right: 250px;
}
.portal{
  position: absolute;
  top: 15px;
  right: 320px;
}

</style>