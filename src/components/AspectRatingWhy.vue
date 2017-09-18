<template>
  <div id="aspect-rating-why">
    <h2>Por que?</h2>
    <div class="aspect-rating-why-block">

      <!-- search -->
      <div class="-item">
        <input type="text" placeholder="filtrar ..." v-model="query">
        <button class="btn-secondary" @click="query = ''">Limpar</button>
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
               :class="{ active: currentWhy === otherWhy && otherWhy !== '' }"
               @input="setAspectRatingWhy($event.target.value)"
               @click="setAspectRatingWhy($event.target.value)">
        <button class="btn-secondary" @click="otherWhy = ''">Limpar</button>
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
        otherWhy: '',
        query: ''
      }
    },
    computed: {
      aspectRatingWhys () {
        return this.$store.getters.aspectRatingWhys(this.query)
      },
      currentWhy () {
        return this.$store.getters.currentWhy[this.index]
      }
    },
    methods: {
      setAspectRatingWhy (why) {
        if (why !== '') {
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

    .-item {
      min-width: 40vw;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      * {
        flex-grow: 1;
        flex-shrink: 1;
        box-sizing: border-box;
        margin: 0;
      }

      button.btn-secondary {
        margin-left: 5px;
        padding: 5px 0 5px 0;
      }

      ul {
        padding: 0;
        overflow: auto;
        max-height: 60vh;

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
  }

</style>
