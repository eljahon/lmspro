<template>
  <v-app>
    <template v-if="!$route.meta.public">

      <Appbar/>
      <ToolbarNavbar :drawer="drawer"/>

      <portal target="#portal"></portal>



    </template>
    <template v-else>
      <LoginPage/>
    </template>

  </v-app>
</template>

<script>
import ToolbarNavbar from '../toolbar_and_navbar/Navgeshndrawerr'
import LoginPage from "../../views/LoginPage";
import Appbar from '../toolbar_and_navbar/appbar'



export default {
  data(){
    return{
        drawer:true


  }
  },
  components: {
    ToolbarNavbar,
    LoginPage,
    Appbar
  }
};
</script>
<style scoped>
.popup{
  position: absolute;
}
.v-application--wrap{

}
main{
  min-height: 0px;
}


</style>
