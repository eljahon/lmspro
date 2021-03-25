<template>
  <div class="text-xs-center">
    <v-dialog
        v-model="dialog"
        style="justify-content: center;"
        width="300"

    >
            <v-card
                color="primary"
                dark
            >

              <v-card-text>
                Please stand by
                <v-progress-linear
                    indeterminate
                    color="white"
                    class="mb-0"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  methods: {

    lod() {
      this.dialog = !this.dialog
    }
  },
  mounted() {
    this.lod()
  },

  // watch: {
  //
  // },
}
</script>
<style scoped>


</style>
