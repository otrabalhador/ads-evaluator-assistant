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
    * {
      color: black;
    }
  }

  @mixin primary-color-light-outline {
    color: $primary-color-light;
    border: 1px solid $primary-color-light;
    background-color: white;
    * {
      color: $primary-color-light;
    }
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

  @mixin secondary-color-dark-outline {
    color: $secondary-color-dark;
    border: 1px solid $secondary-color-dark;
    background-color: white;
    * {
      color: $secondary-color-dark;
    }
  }

  * {
    font-family: 'Roboto Mono', monospace;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.76);
  }

  h1 { font-size: calc(5vw + 0.5em); }
  h2 { font-size: calc(2.5vw + 0.2em); }
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
    border: 1px solid;
    margin: 1px;
  }

  button:focus {
    outline: none;
  }

  button.btn.active,
  button.btn-inverse.active {
    @include primary-color-dark;
  }

  button.btn { @include primary-color-dark-outline; }
  button.btn:active { @include primary-color-dark; }

  button.btn-inverse { @include primary-color-dark; }
  button.btn-inverse:active { @include primary-color-dark-outline; }

  button.btn-secondary { @include secondary-color-dark; }
  button.btn-secondary:active { @include secondary-color-dark-outline; }


  .btn-big {
    min-width: 15vw;
    padding: 10px;
  }

  div.single-aspect.active {
    @include secondary-color-dark;
  }


  input[type="text"] {
    outline: none;

    @include primary-color-dark-outline
  }

  textarea {
    outline: none;
    @include primary-color-dark-outline
  }

</style>
