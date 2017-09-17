<template>
  <div id="aspect-rating">
  <h2>Aspecto {{humanReadableIndex}}</h2>
    <div class="aspects">
      <div class="aspect-group">

        <template v-for="aspect in aspects">

          <div class="single-aspect">
            {{aspect}}
          </div>
          <div class="rate">
            <button :class="{ active: buttonActive === aspect + '1' }" @click="setAspectRating(aspect, 1)">1</button>
            <button :class="{ active: buttonActive === aspect + '2' }" @click="setAspectRating(aspect, 2)">2</button>
            <button :class="{ active: buttonActive === aspect + '3' }" @click="setAspectRating(aspect, 3)">3</button>
          </div>

        </template>

      </div>
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
        buttonActive: { },
        humanReadableIndex: parseInt(this.index) + 1
      }
    },
    computed: {
      ...mapGetters(['aspects'])
    },
    methods: {
      setAspectRating (tag, rate) {
        this.$store.commit({
          type: 'setAspectRating',
          index: this.index,
          tag: tag,
          rate: rate
        })
        this.buttonActive = tag + rate
        console.log(this.buttonActive)
//        console.log(this.buttonActive[tag] ? buttonActive[tag][1] : 0)
      }
    }
  }
</script>

<style scoped lang="scss">

  div.aspects {
    display: flex;
    justify-content: center;

    .aspect-group {
      display: grid;
      grid-template-columns: 20vw 10vw;
      grid-row-gap: 5px;

      div.single-aspect {
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      div.rate {
        display: flex;
        flex-direction: column;

        button {
          margin: 1px;
        }

        .active {
          background-color: white;
        }

      }

    }

  }

</style>
