<template>
  <v-app>
    <Home/>
<!--    <template v-if="!$route.meta.public">-->


<!--           <ToolbarNavbar :drawer="drawer"/>-->
<!--           <Appbar/>-->
<!--           <portal target="#portal"></portal>-->
<!--        <v-main>-->
<!--          <v-container fluid>-->
<!--            <router-view></router-view>-->
<!--          </v-container>-->
<!--        </v-main>-->


<!--    </template>-->
<!--    <template v-else>-->
<!--      <LoginPage/>-->
<!--    </template>-->

  </v-app>
</template>

<script>
import Home from './components/Home/home'




export default {
data(){
  return{

  }
},
  components: {
    Home
  }
};
</script>
<style scoped>
.popup{
  position: absolute;
}


</style>
