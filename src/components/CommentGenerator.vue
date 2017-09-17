<template>
  <div class="comment-generator">
    <h1>Lilappen</h1>
    <!-- aboutAd -->
    <div class="aboutAd">
      <label>Descrição do anúncio</label>
      <input @change="updateAboutAd" v-model="aboutAd" placeholder="descrição do anúncio...">
    </div>

    <overall-rating></overall-rating>

    <div class="aspectRating">
      <div>
        <aspect-rating index="0"></aspect-rating>
      </div>
      <div>
        <aspect-rating index="1"></aspect-rating>
      </div>
    </div>

    <generated-message></generated-message>

  </div>
</template>

<script>
  import GeneratedMessage from '@/components/GeneratedMessage'
  import OverallRating from '@/components/OverallRating'
  import AspectRating from '@/components/AspectRating'
  export default {
    name: 'comment-generator',
    data () {
      return {
        aboutAd: ''
      }
    },
    methods: {
      updateAboutAd () {
        this.$store.commit('aboutAd', this.aboutAd)
      }
    },
    components: {GeneratedMessage, OverallRating, AspectRating}
  }
</script>

<style scoped>

  .aspectRating {
    padding: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .aspectRating > div {
      width: 40vw;
  }

  .aspectRating > div:last-child {
    border-left: 1px solid #bcbcbc;
  }

</style>
