<template>
  <div>

    <v-app-bar :clipped-left="false" :app="true" :fixed="true" color="indigo" dark class="appbar">
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
            <v-menu >

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
                 >
                  <v-btn plain @click="logout()">
                  <v-list-item-title >
                    Logout  <v-icon>
                    mdi-arrow-right-bold
                  </v-icon>
                  </v-list-item-title>
                  </v-btn>



                </v-list-item>
                <v-list-item
                >
                  <v-btn plain>
                    <v-list-item-title >
                    Setting
                      <v-icon>
                      mdi-wrench
                    </v-icon>
                    </v-list-item-title>
                  </v-btn>



                </v-list-item>
                <v-list-item style="position:relative;left:-75px;top:-10px;">
                  <v-list-item-title >
                  <template>
                    <div class="text-center" >
                      <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn
                              plain
                              color="primary"
                              dark
                              v-bind="attrs"
                              v-on="on"

                          >
                           <flag iso="us"></flag> Language
                          </v-btn>
                        </template>
                        <v-list>
                          <v-list-item>
                           <v-btn plain @click="setLocale('us')">
                             <v-list-item-title>

                               <flag iso="us"></flag>  English
                             </v-list-item-title>
                           </v-btn>
                          </v-list-item>
                          <v-list-item>
                            <v-btn plain @click="setLocale('ru')">
                              <v-list-item-title>

                                <flag iso="ru"></flag>  Russa
                              </v-list-item-title>
                            </v-btn>
                          </v-list-item>
                          <v-list-item>
                            <v-btn plain @click="setLocale('uz')">
                              <v-list-item-title>

                                <flag iso="uz"></flag>  Uzbek
                              </v-list-item-title>
                            </v-btn>
                            </v-list-item>
                        </v-list>
                      </v-menu>
                    </div>
                  </template>
                  </v-list-item-title>
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


                 ],
      img:Img

    }
  },
  methods: {
    setLocale(val){
      this.$i18n.locale=val;
    },
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('usertoken')
      localStorage.removeItem('learningCentresid')
      this.$router.push({name: 'Login'})},

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
