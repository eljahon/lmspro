
<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="390"
        style="height:350px;"
        color="indigo"

    >

      <v-card color="indigo">
        <v-card-title class="headline" >
          <v-row>
            <v-col cols="10"> <span>Roomsinfo</span>

            </v-col>
            <v-col cols="2">
               <span style="float: left"
                     @click="dialog = false"><v-icon>mdi-close-thick</v-icon>
               </span></v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="6" style="border-right:2px soldi red;">

<v-row>
  <v-col cols="12">
    <v-avatar>
    <img src="../../assets/pupils-study-classroom-interior-pupils-school-lesson-vector-illustration_53562-8013.jpg" alt="">
  </v-avatar>
  </v-col>
  <v-col cols="12"><b>firsname:</b>{{firsname}}</v-col>
  <v-col cols="12"><b>lastname:</b>{{lastname}}</v-col>
  <v-col cols="12"><b>username:</b>{{username}}</v-col>
</v-row>


            </v-col>


            <v-col cols="6">


            </v-col>
          </v-row>

        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {

  data(){
  return {
    dialog:false,
    firsname:null,
    lastname:null,
    username:null,
    subject:null

  }

  },
  methods:{
    loader(firstname,lastname,username,subject){
      this.dialog=true
      this.firsname=firstname;
      this.lastname=lastname;
      this.username=username;
      this.subject=subject;

    }

  },
}
</script>

<style scoped>

</style>
