<template>
<!--<v-app>-->
<!--  <template>-->
    <div>

      <yandex-map
          style="height:500px"
          :coords="coords"
          :zoom="10"
          @click="onClick"
      >
        <ymap-marker
            :coords="coords"
            marker-id="123"
            hint-content="some hint"
        />
      </yandex-map>
    </div>
<!--  </template>-->
<!--</v-app>-->
</template>

<script>
// import { yandexMap, ymapMarker } from 'vue-yandex-maps'
export default {
  // components: { yandexMap, ymapMarker },
data:()=>{
  return{
    coords: [
      54.82896654088406,
      39.831893822753904,
    ],
    // coonrdinates:{
    //   lat:0,
    //   lng:0
    // }
  }
},
  methods: {
    onClick(e) {
      this.coords = e.get('coords');
    },
    created() {
      this.$getLocation({})
          .then(coonrdinates => {
            this.coonrdinates = coonrdinates
          })
          .catch(err => alert(errs))
    }

  }}
</script>

<style scoped>

</style>
