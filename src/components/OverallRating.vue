<template>
  <div class="overall-rating">
    <h2>Nota do anúncio</h2>
    <div class="overallRating form-radio -horizontal">
      <div class="-item">
        <input type="radio" name="overallRating" id="overallRating-1" value="1" v-model="overallRating">
        <label for="overallRating-1">1</label>
      </div>
      <div class="-item">
        <input type="radio" name="overallRating" id="overallRating-2" value="2" v-model="overallRating">
        <label for="overallRating-2">2</label>
      </div>
      <div class="-item">
        <input type="radio" name="overallRating" id="overallRating-3" value="3" v-model="overallRating">
        <label for="overallRating-3">3</label>
      </div>
      <div class="-item">
        <input type="radio" name="overallRating" id="overallRating-4" value="4" v-model="overallRating">
        <label for="overallRating-4">4</label>
      </div>
      <div class="-item">
        <input type="radio" name="overallRating" id="overallRating-5" value="5" v-model="overallRating">
        <label for="overallRating-5">5</label>
      </div>
    </div>

  </div>
</template>

<script>
  import GeneratedMessage from '@/components/GeneratedMessage'
  export default {
    name: 'overall-rating',
    components: { GeneratedMessage },
    methods: {
      updateAboutAd () {
        this.$store.commit('aboutAd', this.aboutAd)
      }
    },
    computed: {
      overallRating: {
        get () { return this.$store.overallRating },
        set (value) {
          this.$store.commit('overallRating', value)
        }

      }
    }
  }
</script>

<style scoped>
  .form-radio {
    display: flex;
    justify-content: center;
  }

  .form-radio > .-item {
    display: flex;
    justify-content: center;
    align-items: center;
    /*width: 15vw;*/
    border: 0.5px solid;
    background-color: #d4d4d4;
  }

  .form-radio > .-item:hover {
    background-color: #c5c5c5;
  }

  .form-radio > .-item > label {
    padding: 30px;
  }

  .form-radio > .-item input:checked ~ label {
    background-color: #4e4e4e;
    color: white;
  }

  .-horizontal {
    flex-direction: row;
  }

</style>
