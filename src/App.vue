<template>
  <v-app>
    <template v-if="!$route.meta.public">
      <ToolbarNavbar/>
    </template>
    <template v-else>
      <div>

        <router-view/>
      </div>
    </template>
  </v-app>
</template>

<script>
import ToolbarNavbar from './components/toolbar_and_navbar/toolbar_navbar'
import requests from "@/service/requests";


export default {
  name: 'App',
  components: {
    ToolbarNavbar

  },

  data() {
    return {}
  },
  mounted() {
    requests.get("/account-info")
        .then(console.log)
        .catch(err => {
          if(err.status === 401) {
            // redirect to login
          }
        })
  }
};
</script>
<style scoped>


</style>
