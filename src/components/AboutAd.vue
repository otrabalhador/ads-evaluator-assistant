<template>
  <div id="about-ad">
    <h2>Descrição do Anúncio</h2>
    <input type="text" v-model="aboutAd" placeholder="This ad is about ...">
  </div>
</template>

<script>
  export default {
    name: 'about-ad',
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
  input[type="text"] {
    height: 50px;
    min-width: 75vw;
    padding: 5px;

    border-radius: 5px;
  }
</style>
