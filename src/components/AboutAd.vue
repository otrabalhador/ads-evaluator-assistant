<template>
  <div>
    <h2>Descrição do Anúncio</h2>
    <input type="text" v-model="aboutAd" placeholder="This ad is about ...">
  </div>
</template>

<script>
  export default {
    computed: {
      aboutAd: {
        get () {
          return this.$store.getters.aboutAd
        },
        set (value) {
          this.$store.commit('aboutAd', value)
        }

      }
    }
  }
</script>

<style scoped>
</style>
