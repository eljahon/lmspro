<template>
  <v-app>

    <portal to="Teachers">
      <v-row>
        <v-col cols="4">  <v-btn plain></v-btn></v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4">
<!--            teacher new  add button-->
          <v-tooltip bottom color="red">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  plain
                  @click="opendialogandclose()"
              >
                <v-avatar><img :src="img" alt=""></v-avatar>
              </v-btn>
            </template>
            <span>new Teacher add</span>
          </v-tooltip>
          <v-btn plain></v-btn>

        </v-col>
      </v-row>


    </portal>
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
            :items="teacherinfo"
            :search="search"
            show-select
        >
<!--          <template v-slot:item.chexbox="{ item }">-->
<!--            <v-simple-checkbox-->
<!--                v-model="item.chexbox"-->
<!--                color="red"-->
<!--            ></v-simple-checkbox>-->
<!--          </template>-->
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
                @click="editItem(item.id,
                item.firstName,
                item.lastName,
                item.promisedTimeSlots,
                item.username)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
               color="red"
                @click="deleteItem(item.id)"
            >
              mdi-delete
            </v-icon>
          </template>


        </v-data-table>
      </v-card>
    </template>
    <NewTeacherAdd ref="teacher"/>
    <Dialog v-if="losder" />
  </v-app>

</template>

<script>
import Dialog from '../../components/loadeng/loadeng'
import  {mapActions ,mapGetters} from 'vuex'
import IMG from '../../assets/126337.png'
import NewTeacherAdd from '../../components/Teacher/newteacheradd'
export default {
  components:{ Dialog,NewTeacherAdd},
data:()=>{
  return {
    promisedTimeSlots:[],
    subjectsWithLevel:[],
    lastname:'',
    firstname:'',
    login:'',
    password:'',
    losder:true,
    search: '',
    img:IMG,
    headers: [

      // {text:'chexbox',value:'chexbox',chexbox:true},
      { text: 'Avatar', value: 'Avatar',chexbox:true },
      { text: 'Firsname', value: 'firstName',chexbox:true },
      { text: 'Lastname', value: 'lastName' ,chexbox:true},
      { text: 'Username', value: 'username',chexbox:true },
      { text: 'subjects1', value: 'subjects[0].name' },
      // { text: 'subjects2', value: 'subjects[1].name' },
       {text:'Status', value:"Status",chexbox:true},
       {text:'Result',value:'Result',chexbox:true},
       {text:'Ations',value:'actions',chexbox:true},


    ],
  }
},
  methods:{
    ...mapActions(["getListTeacher"]),
    editItem(index,firsname,lastname, promisedTimeSlots,username){
      this.lastname=this.teacherinfo[index]
      console.log(index,firsname,lastname,promisedTimeSlots,username)
      console.log(this.lastname)
    },
    deleteItem(id){
      this.losder=!this.losder;
      console.log(id)
      this.$store.dispatch("removeTeacher",id)
      .finally(()=>{
        this.losder=!this.losder;
      })
    },
    opendialogandclose(){
      this.$refs.teacher.open()
    }
  },
  computed:{
    ...mapGetters(["teacherinfo"]),
  },
  mounted() {
    this.getListTeacher().then(res => {

    })
  },
  beforeMount() {
  setTimeout(()=>{
    this.losder=!this.losder
  },1000)
  },
  updated() {
    console.log(this.teacherinfo)
  }
}
</script>

<style scoped>

</style>
