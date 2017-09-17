<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300');
  $primary-color-normal: #29b6f6;
  $primary-color-light: #73e8ff;
  $primary-color-dark: #0086c3;

  $secondary-color-normal: #006064;
  $secondary-color-light: #428e92;
  $secondary-color-dark: #00363a;

  @mixin primary-color-normal {
    background-color: $primary-color-normal;
    color: black;
  }

  @mixin primary-color-light {
    background-color: $primary-color-light;
    color: black;
  }

  @mixin primary-color-dark {
    background-color: $primary-color-dark;
    color: white;
    * {
      color: white;
    }
  }

  @mixin primary-color-dark-outline {
    color: $primary-color-dark;
    border: 1px solid $primary-color-dark;
    background-color: white;
    * {
      color: $primary-color-dark;
    }
  }

  @mixin secondary-color-normal {
    background-color: $secondary-color-normal;
    color: white;
  }

  @mixin secondary-color-light {
    background-color: $secondary-color-light;
    color: black;
  }

  @mixin secondary-color-dark {
    background-color: $secondary-color-dark;
    color: white;
    * {
      color: white;
    }
  }

  * {
    font-family: 'Roboto Mono', monospace;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.76);
  }

  h1 { font-size: 3em; }
  h2 { font-size: 2em; }
  h1, h2 {
    display: flex;
    justify-content: center;

  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  button {
    border: 1px solid black;
    margin: 1px;
    @include primary-color-dark-outline;
  }

  button:hover, button:focus {
    @include primary-color-dark;
    outline: none;
  }

  button.active {
    @include primary-color-dark;
  }

  .btn-big {
    width: 15vw;
    padding: 10px;
  }

  div.single-aspect.active {
    @include secondary-color-dark;
  }


</style>
