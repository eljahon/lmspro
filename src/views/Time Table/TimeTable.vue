<template>
  <div>
    <Dialog v-if="losder" />
    <h1 v-else>Teachers........</h1>

      <div>
    <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        transition="scale-transition"
        offset-y
        max-width="290px"
        min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="time"
            label="Picker in menu"
            prepend-icon="mdi-clock-time-four-outline"
            readonly
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
          v-if="menu2"
          v-model="time"
          full-width
          @click:minute="$refs.menu.save(time)"
      ></v-time-picker>
    </v-menu>
    </div>
  </div>
</template>

<script>
import Dialog from '../../components/loadeng/loadeng'
export default {
  components:{ Dialog},
  data:()=>{
    return {
      losder:true,
      menu2: false,
      time: null,

    }
  },
  beforeMount() {
    setTimeout(()=>{
      this.losder=!this.losder
    },1000)
  }
}
</script>

<style scoped>

</style>