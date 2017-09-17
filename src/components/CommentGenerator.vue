<template>
  <div class="comment-generator">
    <h1>Lilappen</h1>
    <!-- aboutAd -->
    <div class="aboutAd">
      <label>Descrição do anúncio</label>
      <input @change="updateAboutAd" v-model="aboutAd" placeholder="descrição do anúncio...">
    </div>

    <overall-rating></overall-rating>
    <generated-message></generated-message>
  </div>
</template>

<script>
  import GeneratedMessage from '@/components/GeneratedMessage'
  import OverallRating from '@/components/OverallRating'
  export default {
    name: 'comment-generator',
    data () {
      return {
        aboutAd: ''
      }
    },
    components: {GeneratedMessage, OverallRating}
  }
</script>

<style scoped>
</style>
