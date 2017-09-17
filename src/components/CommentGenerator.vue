<template>
  <div class="comment-generator">
    <header>
      <h1>Lilappen</h1>
      <button class="btn-big btn-secondary" @click="reset">Resetar valores</button>
    </header>
    <!-- aboutAd -->

    <div class="container">
      <about-ad class="about-ad"></about-ad>
      <overall-rating class="overall-rating"></overall-rating>
      <aspect-rating index="0" class="aspect-rating-1"></aspect-rating>
      <aspect-rating index="1" class="aspect-rating-2"></aspect-rating>
      <generated-message class="generated-message"></generated-message>
    </div>
  </div>
</template>

<script>
  import GeneratedMessage from '@/components/GeneratedMessage'
  import OverallRating from '@/components/OverallRating'
  import AspectRating from '@/components/AspectRating'
  import AboutAd from '@/components/AboutAd'
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
      },
      reset () {
        this.$store.commit('reset')
      }
    },
    components: {GeneratedMessage, OverallRating, AspectRating, AboutAd}
  }
</script>

<style scoped lang="scss">

  /*.aspectRating {*/
    /*padding: 50px;*/
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: center;*/
  /*}*/

  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 600px){
    .container {
      grid-template-areas:
        "header            header"
        "about-ad          about-ad"
        "overall-rating    overall-rating"
        "aspect-rating-1   aspect-rating-2"
        "generated-message generated-message";

      justify-items: center;
    }
  }

  @media screen and (max-width: 600px){
    .container {
      grid-template-areas:
        "header            header"
        "about-ad          about-ad"
        "overall-rating    overall-rating"
        "aspect-rating-1   aspect-rating-1"
        "aspect-rating-2   aspect-rating-2"
        "generated-message generated-message";

      justify-items: center;
    }
  }



  header {
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .about-ad { grid-area: about-ad; }
  .overall-rating { grid-area: overall-rating; }
  .aspect-rating-1 { grid-area: aspect-rating-1; }
  .aspect-rating-2 { grid-area: aspect-rating-2; }
  .generated-message { grid-area: generated-message; }

</style>
