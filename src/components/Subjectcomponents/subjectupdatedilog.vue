<template>
  <v-app>
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="340"
          v-if="dialog"
      >

        <v-card>
          <v-card-title class="headline" style="background-color: aqua">
            <v-row>
              <v-col cols="10"> SubjectUpdate</v-col>
              <v-col cols="2"><v-btn plain @click="dialog=false"><v-icon>mdi-close-thick</v-icon></v-btn></v-col>
            </v-row>
          </v-card-title>
          <v-card-text class="mt-15">
            <v-text-field
                v-model="subject"
                label="subjectupdate"
                outlined

            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                text
                @click="subjectupdet()"
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
  data: () => {
    return {
      dialog: false,
      subject: '',
      Id:null


    }
  },
  methods: {
    ...mapGetters(["subjectslist"]),
    openupdatedialog(index,id) {
      this.dialog = !this.dialog
      this.subject=index;
     this.Id=id;


    },
    subjectupdet(){
      let subjectCreateDTO={
        id:this.Id,
        learningCentreId:localStorage.getItem("learningCentresid"),
        name:this.subject

      }
      this.$store.dispatch("updateSubject",subjectCreateDTO)

      this.dialog = false
    },

  },
  // computed:{
  //
  // },
  updated() {
  }
}
</script>

<style scoped>

</style>
