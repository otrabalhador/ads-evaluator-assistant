<template>
  <div id="navigation-menu">
    <div class="header-fixed">
      <div class="-info">

      </div>
      <div class="-validated" :class="{true: validated}">
        <md-icon :class="{'md-accent': validated}">check_circle</md-icon>
      </div>
    </div>


  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'navigation-menu',
    computed: mapGetters(['validated'])
  }
</script>

<style scoped lang="scss">

  .header-fixed {
    top: 0;
    left: 0;
    position: fixed;
    height: 5vw;
    width: 100%;

    display: flex;
    justify-content: space-between;

    .-info {
      display: flex;
      flex-direction: row;
      /*background-color: gray;*/
      /*width: 5vw;*/
    }

    .-validated {
      display: flex;
      flex-direction: row-reverse;
      /*background-color: yellow;*/
      width: 5vw;
    }

    .-validated.true {
      /*background-color: green;*/
    }
  }


</style>
