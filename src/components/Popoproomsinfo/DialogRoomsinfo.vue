
  <template>
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
      >
        <template>

        </template>
        <v-card>
          <v-card-title class="headline">
           <v-row>
             <v-col cols="10"> <span>Roomsinfo</span>
               </v-col>
             <v-col cols="2"><span style="float: left" @click="dialog = false"><v-icon>mdi-close-thick</v-icon></span></v-col>
           </v-row>
          </v-card-title>
          <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
              Disagree
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
              Agree
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </template>


<script>
export default {
  data(){
    return {
      dialog:false
    }
  },

  methods:{
  shov(){
    this.dialog=true

  }
  }
}
</script>

<style scoped>
.headline{
  background-color:#7C4DFF;
}

</style>