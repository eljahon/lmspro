<template>
  <div>

    <v-app-bar :clipped-left="false" :app="true" :fixed="true" color="purple darken-1" dark class="appbar">
      <v-btn @click="toggleDrawer" plain>      <v-icon >
        {{ navbar_appbar ? "mdi-format-indent-increase" : "mdi-format-indent-decrease" }}
      </v-icon>
      </v-btn>

      <v-toolbar-title>Tilte</v-toolbar-title>

      <div>
        <v-avatar color="indigo" class="avatar">
          <img :src="img" alt="buyerda rasmi bor">
        </v-avatar>

        <div class="portal">
          <portal-target name="destination"></portal-target>
         <portal-target name="subjects"></portal-target>
          <portal-target name="student"></portal-target>
          <portal-target name="Teachers"></portal-target>
        </div>

        <template>
          <div class="text-center">
            <v-menu offset-y>

              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="#651FFF"
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="useropenicon=!useropenicon"
                >{{ surname }}:{{ username }}
                  <v-icon @click="useropenicon= ! useropenicon">
                    {{ useropenicon ? 'mdi-menu-down' : 'mdi-menu-up' }}
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="title">
                      <v-avatar>
                        <img :src="img" alt="user img ">
                      </v-avatar>
                      {{surname}} : {{username}}
                    </v-list-item-title>
                    <v-list-item-subtitle>

                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list-item
                    v-for="(item, index) in overflow" :key="index">
                  <v-btn plain @click="logout(index)">
                  <v-list-item-title >
                    {{ item.title }}
                  </v-list-item-title>
                  </v-btn>

                  <v-icon>
                    {{ item.icon }}
                  </v-icon>

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
import Img from '../../assets/95-958614_man-icon-person-logo-png-clipart.png'




export default {

  data() {
    return {

      portal:true,
      salom: true,
      username: JSON.parse(localStorage.getItem('usertoken')).name,
      surname: JSON.parse(localStorage.getItem('usertoken')).surname,
      useropenicon:true,
      overflow: [
          {title: 'Logout', icon: 'mdi-arrow-right-bold'},
          {title:"Setting",icon:'mdi-wrench'},
          { title:'Lange',icon:'mdi-lange'}
                 ],
      img:Img

    }
  },
  methods: {
    logout(index) {
      if(index==0){
        console.log(" men Loginga ketdmi")
      localStorage.removeItem('token')
      localStorage.removeItem('usertoken')
      localStorage.removeItem('learningCentresid')
      this.$router.push({name: 'Login'})}
      else{}
        if(index==1){
        console.log(" hellow i si own")
      }
      else{} if(index==2){
        console.log(" hellow i is two")

      }

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
.appbar{

}
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
