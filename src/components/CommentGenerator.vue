<template>
  <div class="comment-generator">
    <header>
      <h1>Lilappen</h1>
    </header>
    <!-- aboutAd -->

    <div class="container">

      <div class="about-ad">
        <about-ad></about-ad>
      </div>

      <div class="overall-rating">
        <overall-rating></overall-rating>
      </div>

      <div class="aspect-rating-1">
        <aspect-rating index="0"></aspect-rating>
      </div>

      <div class="aspect-rating-2">
          <aspect-rating index="1"></aspect-rating>
      </div>

      <div class="generated-message">
        <generated-message></generated-message>
      </div>

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



  header { grid-area: header }
  .about-ad { grid-area: about-ad }
  .overall-rating { grid-area: overall-rating }
  .aspect-rating-1 { grid-area: aspect-rating-1 }
  .aspect-rating-2 { grid-area: aspect-rating-2 }
  .generated-message { grid-area: generated-message }

</style>
