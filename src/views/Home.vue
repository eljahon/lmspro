<template>

  <v-app>
    <Dialog v-if="losder" />

   <v-row no-gutters>
     <v-col xml:space="12"   sm="12"
            md="4"> <template>
       <v-card
           class="mt-4 mx-auto"
           max-width="400"
       >
         <v-sheet
             class="v-sheet--offset mx-auto"
             color="deep-orange lighten-1"
             elevation="12"
             max-width="calc(100% - 32px)"
         >
           <v-sparkline
               :labels="labels"
               :value="value"
               color="white"
               line-width="2"
               padding="16"
           ></v-sparkline>
         </v-sheet>

         <v-card-text class="pt-0">
           <div class="title font-weight-light mb-2">
             User Registrations
           </div>
           <div class="subheading font-weight-light grey--text">
             Last Campaign Performance
           </div>
           <v-divider class="my-2"></v-divider>
           <v-icon
               class="mr-2"
               small
           >
             mdi-clock
           </v-icon>
           <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
         </v-card-text>
       </v-card>
     </template></v-col>
     <v-col xml:space="12"   sm="12"
            md="4"> <template>
       <v-card
           class="mt-4 mx-auto"
           max-width="400"
       >
         <v-sheet
             class="v-sheet--offset mx-auto"
             color="cyan"
             elevation="12"
             max-width="calc(100% - 32px)"
         >
           <v-sparkline
               :labels="labels"
               :value="value"
               color="white"
               line-width="2"
               padding="16"
           ></v-sparkline>
         </v-sheet>

         <v-card-text class="pt-0">
           <div class="title font-weight-light mb-2">
             User Registrations
           </div>
           <div class="subheading font-weight-light grey--text">
             Last Campaign Performance
           </div>
           <v-divider class="my-2"></v-divider>
           <v-icon
               class="mr-2"
               small
           >
             mdi-clock
           </v-icon>
           <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
         </v-card-text>
       </v-card>
     </template></v-col>
     <v-col xml:space="12" sm="12"
            md="4"> <template>
       <v-card
           class="mt-4 mx-auto"
           max-width="400"
       >
         <v-sheet
             class="v-sheet--offset mx-auto"
             color="deep-purple lighten-2"
             elevation="12"
             max-width="calc(100% - 32px)"
         >
           <v-sparkline
               :labels="labels"
               :value="value"
               color="white"
               line-width="2"
               padding="16"
           ></v-sparkline>
         </v-sheet>

         <v-card-text class="pt-0">
           <div class="title font-weight-light mb-2">
             User Registrations
           </div>
           <div class="subheading font-weight-light grey--text">
             Last Campaign Performance
           </div>
           <v-divider class="my-2"></v-divider>
           <v-icon
               class="mr-2"
               small
           >
             mdi-clock
           </v-icon>
           <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
         </v-card-text>
       </v-card>
     </template></v-col>
   </v-row>
    <v-row no-gutters>
      <v-col cols="2"></v-col>

      <v-col cols="8"
      class="mt-10"
      >
       <v-sheet>
         <Map style="margin-top: -20px" />
       </v-sheet>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    </v-app>

</template>

<script>
import Dialog from '../components/loadeng/loadeng'
import Map from '../components/Map/Map'
export default {
  components:{ Dialog,Map},
  data:()=>{
    return {
      losder:true,
      labels: [
        '12am',
        '3am',
        '6am',
        '9am',
        '12pm',
        '3pm',
        '6pm',
        '9pm',
      ],
      value: [
        200,
        675,
        410,
        390,
        310,
        460,
        250,
        240,
      ],

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
