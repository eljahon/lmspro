<template>
  <v-overlay :value="loader">
    <div class="loaders">
      <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
      ></v-progress-circular>
    </div>
  </v-overlay>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['loader'])
  }
}
</script>

<style scoped>
.loaders {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 3;
}

.v-progress-circular {
  margin: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
}

</style>