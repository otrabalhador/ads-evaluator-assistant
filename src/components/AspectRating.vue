<template>
  <div id="aspect-rating">
  <h2>Aspecto {{humanReadableIndex}}</h2>
    <div class="aspect-group">
      <template v-for="aspect in aspects">

        <div class="single-aspect"
             :class="{ active: currentAspect[index] === aspect + '1'
                            || currentAspect[index] === aspect + '2'
                            || currentAspect[index] === aspect + '3'}">
          <p>{{aspect}}</p>
        </div>
        <div class="rate">
          <button class="btn" :class="{ active: currentAspect[index] === aspect + '1' }" @click="setAspectRating(aspect, 1)">1 - not at all</button>
          <button class="btn" :class="{ active: currentAspect[index] === aspect + '2' }" @click="setAspectRating(aspect, 2)">2 - a little</button>
          <button class="btn" :class="{ active: currentAspect[index] === aspect + '3' }" @click="setAspectRating(aspect, 3)">3 - a lot</button>
        </div>

      </template>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'aspect-rating',
    props: ['index'],
    data () {
      return {
        humanReadableIndex: parseInt(this.index) + 1
      }
    },
    computed: {
      ...mapGetters(['aspects', 'currentAspect'])
    },
    methods: {
      setAspectRating (tag, rate) {
        this.$store.commit({
          type: 'setAspectRating',
          index: this.index,
          tag: tag,
          rate: rate
        })
      }
    }
  }
</script>

<style scoped lang="scss">

  .aspect-group {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-row-gap: 5px;

    div.single-aspect {
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;

      /*overflow-wrap: break-word;*/

      * {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    div.rate {
      display: flex;
      flex-direction: column;

      button {
        display: flex;
      }

    }

  }

</style>
