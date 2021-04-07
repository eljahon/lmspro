<template>
  <v-card>

    <v-row
        class="pa-4"
        justify="space-between"
    >
      <v-col cols="5">
        <v-treeview
            :active.sync="active"
            :items="items"
            :load-children="fetchUsers"
            :open.sync="open"
            activatable
            color="warning"
            open-on-click
            transition
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children">
             mdi-bookshelf
            </v-icon>
          </template>
        </v-treeview>
      </v-col>

<!--      <v-divider vertical></v-divider>-->

      <v-col
          class="d-flex text-center"
      >
        <v-scroll-y-transition mode="out-in">
          <div
              v-if="!selected"
              class="title grey--text text--lighten-1 font-weight-light"
              style="align-self: center;"
          >
            Select a User
          </div>
          <v-card
              v-else
              :key="selected.id"
              class="pt-6 mx-auto"
              flat
              max-width="400"
          >
            <v-card-text>

              <h3 class="headline mb-2">
                {{ selected.name }}
              </h3>
              <div class="blue--text mb-2">
                {{ selected.email }}
              </div>
              <div class="blue--text subheading font-weight-bold">
                {{ selected.username }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-row
                class="text-left"
                tag="v-card-text"
            >
              <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
              >
                Company:
              </v-col>
              <v-col>{{ selected.company.name }}</v-col>
              <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
              >
                Website:
              </v-col>
              <v-col>

              </v-col>
              <v-col
                  class="text-right mr-4 mb-2"
                  tag="strong"
                  cols="5"
              >
                Phone:
              </v-col>
              <v-col>{{ selected.phone }}</v-col>
            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import  {mapGetters} from 'vuex'


const pause = ms => new Promise(resolve => setTimeout(resolve, ms))

export default {
  data: () => ({
    active: [],
    avatar: null,
    open: [],
    users: [],
  }),

  computed: {
    ...mapGetters(["subjectlistname"]),
    items () {
      return [
        {
          name: 'Subjects',
          children: this.subjectlistname ,
        },
      ]
    },

  },

  watch: {
    selected: 'randomAvatar',
  },

  methods: {
    async fetchUsers (item) {
      await pause(1000)

    },

  },
}
</script>
