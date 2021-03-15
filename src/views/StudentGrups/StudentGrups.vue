<template>

  <v-app>

    <portal></portal>
    <template>
      <v-card>
        <v-card-title>
          <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"

              hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="studentgrupinfo"
            :search="search"
        >
          <template v-slot:item.chexbox="{ item }">
            <v-simple-checkbox
                v-model="item.chexbox"
                color="red"
            ></v-simple-checkbox>
          </template>
          <template v-slot:item.Avatar="{ item }">
            <v-avatar
                v-model="item.Avatar"
                color="primary"
                size="40"
            ><img src="../../assets/95-958614_man-icon-person-logo-png-clipart.png" alt=""></v-avatar>
          </template>
          <template v-slot:item.Status="{ item }">
            <v-chip v-model="item.Status"   class="ma-2"

                    color="cyan accent-2"
            >
              <v-icon>mdi-check-bold</v-icon>
              Action
            </v-chip>
          </template>
          <template v-slot:item.Result="{ item }">
            <v-chip v-model="item.Result"   class="ma-2"

                    color="deep-purple accent-3"
                    outlined>
              100%
            </v-chip>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
                color ="indigo darken-4"
                class="mr-2"
                @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
                color="red"
                @click="deleteItem(item)"
            >
              mdi-delete
            </v-icon>
          </template>


        </v-data-table>
      </v-card>
    </template>
    <Dialog v-if="losder" />
  </v-app>


</template>

<script>
import Dialog from '../../components/loadeng/loadeng'
import {mapActions,mapGetters} from 'vuex'
export default {
  components:{ Dialog},
  data:()=>{
    return {
      losder:true,
      search: '',
      headers: [

        {text:'chexbox',value:'chexbox',chexbox:true},
        { text: 'Avatar', value: 'Avatar',chexbox:true },
        { text: 'Firsname', value: 'lastName',chexbox:true },
        { text: 'Lastname', value: 'lastName' ,chexbox:true},
        { text: 'Username', value: 'username',chexbox:true },
        { text: 'subjects', value: 'subjects[0].name' },
        {text:'Status', value:"Status",chexbox:true},
        {text:'Result',value:'Result',chexbox:true},
        {text:'Ations',value:'actions',chexbox:true},


      ],
    }
  },
  methods:{
    ...mapActions(["getStudentGrupList"])
  },
  computed:{
    ...mapGetters(['studentgrupinfo'])

  },
  mounted() {
    this.getStudentGrupList();
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