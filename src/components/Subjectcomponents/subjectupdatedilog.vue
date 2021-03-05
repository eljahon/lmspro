<template>
  <v-app>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="290"
        v-if="dialog"
    >

      <v-card>
        <v-card-title class="headline" style="background-color: aqua">
          SubjectUpdate
        </v-card-title>
        <v-card-text class="mt-15"><v-text-field
            v-model="subject"
            label="subjectupdate"
            outlined

        ></v-text-field></v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            update
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data:()=>{
    return{
      dialog:false,
      subject:''


    }
  },
  methods:{
    ...mapGetters(["subjectslist"]),
    openupdatedialog(index){
      this.dialog=!this.dialog
    a
      console.log(index)
      this.subject=this.subjectaltname[index].name

    }
  },
  // computed:{
  //
  // },
  updated() {
    console.log(this.subjectaltname[0])
  }
}
</script>

<style scoped>

</style>