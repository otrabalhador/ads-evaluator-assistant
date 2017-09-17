<template>
  <div id="aspect-rating-why">
    <h2>Por que?</h2>
    <div class="aspect-rating-why-block">

      <!-- search -->
      <div class="-item">
        <input type="text" placeholder="filtrar ...">
      </div>

      <!-- options -->
      <div class="-item">
        <ul>
          <li @click="setAspectRatingWhy(why.en)"
              :class="{ active: currentWhy === why.en }"
              class="why"
              v-for="why in aspectRatingWhys">
            <p class="pt">{{why.pt}}</p>
            <p class="en">{{why.en}}</p>
          </li>
        </ul>
      </div>

      <!-- another -->
      <div class="-item">
        <input type="text"
               placeholder="outro ..."
               v-model="otherWhy"
               :class="{ active: currentWhy === otherWhy }"
               @input="setAspectRatingWhy($event.target.value)"
               @click="setAspectRatingWhy($event.target.value)">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'aspect-rating-why',
    props: ['index'],
    data () {
      return {
        otherWhy: ''
      }
    },
    computed: {
      aspectRatingWhys () {
        return this.$store.getters.aspectRatingWhys
      },
      currentWhy () {
        return this.$store.getters.currentWhy[this.index]
      }
    },
    methods: {
      setAspectRatingWhy (why) {
        if (why) {
          this.$store.commit({
            type: 'setAspectRatingWhy',
            why: why,
            index: this.index
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">

  div.aspect-rating-why-block {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;

    * {
      width: 100%;
      box-sizing: border-box;
    }

    ul {
      padding: 0;
      margin: 0;
      overflow: auto;
      max-height: 100vh;

      li.why {
        width: 100%;
        list-style: none;
        padding: 5px 15px 5px 15px;
        cursor: pointer;
        margin-top: 5px;
        margin-bottom: 5px;
      }
    }

  }

</style>
