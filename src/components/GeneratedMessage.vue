<template>
  <div id="generated-message">
    <h2>Mensagem gerada</h2>
    <div class="center">

      <textarea cols="50" rows="10">
        {{generatedComment}}
      </textarea>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['generatedComment'])
  }

</script>

<style>

</style>
