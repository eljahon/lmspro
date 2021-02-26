<template>
  <v-app>
    <template v-if="!$route.meta.public">

      <div>

        <ToolbarNavbar :drawer="drawer"/>
          <Appbar/>
        <portal target="#portal"></portal>

      </div>

    </template>
    <template v-else>
      <LoginPage/>
    </template>

  </v-app>
</template>

<script>
import ToolbarNavbar from './components/toolbar_and_navbar/Navgeshndrawerr'
import LoginPage from "@/views/LoginPage";
import Appbar from './components/toolbar_and_navbar/appbar'



export default {
data(){
  return{
    drawer:true,
    lading:true
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


</style>
