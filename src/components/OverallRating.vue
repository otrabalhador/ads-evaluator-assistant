<template>
  <div id="overall-rating">
    <h2>Nota do anúncio</h2>
    <div class="buttons">
      <template v-for="option in buttonOptions">

        <button class="btn btn-big" :class="{ active: overallRating == option.value}" @click="overallRating = option.value">
          <p>{{option.text}}</p>
        </button>
      </template>

    </div>

  </div>
</template>

<script>
  import GeneratedMessage from '@/components/GeneratedMessage'
  export default {
    name: 'overall-rating',
    components: { GeneratedMessage },
    data () {
      return {
        buttonOptions: [
          {value: '1', text: '1 - Definitely do not want to see'},
          {value: '2', text: '2 - Do not want to see'},
          {value: '3', text: '3 - Don\'t mind seeing in my feed'},
          {value: '4', text: '4 - Want to see in my feed'},
          {value: '5', text: '5 - Definitely want to see'}
        ]
      }
    },
    computed: {
      overallRating: {
        get: function () {
          return this.$store.getters.overallRating
        },
        set (value) {
          this.$store.commit('overallRating', value)
        }

      }
    }
  }
</script>

<style scoped lang="scss">

  .buttons {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;

    button {
      flex-shrink: 1;
      /*flex-grow: 1;*/
      flex-basis: 150px;

      p {
        overflow-wrap: break-word;
        /*white-space: nowrap;*/
        /*overflow: hidden;*/
        /*text-overflow: ellipsis;*/
      }
    }
  }

</style>
