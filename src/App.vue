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

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono:300');

  * {
    font-family: 'Roboto Mono', monospace;
    color: rgba(0, 0, 0, 0.76);
  }

  h1, h2 {
    display: flex;
    justify-content: center;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
