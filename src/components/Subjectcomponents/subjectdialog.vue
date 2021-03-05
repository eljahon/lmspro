<template>
<v-dialog   transition="dialog-top-transition"
            max-width="500" v-model="dialog">
  <template>
  <v-card>
    <v-toolbar
        color="primary"
        dark
    >subjets new addd </v-toolbar>
    <v-card-text>


      <v-row>
        <v-col cols="2"> </v-col>
        <v-col
          cols="6"
          sm="6"
          md="4"
          class="mt-15 ml-16"
      >
        <v-text-field
            label="newSubjectadd"
            outlined
            dense
            v-model="newsubject"
            style="width: 200px"
        ></v-text-field>

      </v-col>
        <v-col cols="2"></v-col>
      </v-row>

    </v-card-text>
    <v-card-actions class="justify-end">
      <v-btn
          text
          @click="addnewsubject()"
      >Save</v-btn>
    </v-card-actions>
  </v-card>
</template>
</v-dialog>
</template>

<script>
import {mapActions} from 'vuex'
export default {
data:()=>{
  return {
    subject:'',
    dialog:false,
    newsubject:''
  }
}
,methods:{
  ...mapActions(["getSubjectList"]),

  dialogopen(){
    this.dialog=!this.dialog
  },
  addnewsubject(){
    let subject={

      learningCentreId:localStorage.getItem("learningCentresid"),
      mandatory:true,
      name:this.newsubject
    }

    this.$store.dispatch("createSubjectAdd",subject)
    .finally(()=>{
      this.dialog=!this.dialog
      this.getSubjectList()

    })

  }
  }
}
</script>

<style scoped>

</style>