<template>
  <div id="generated-message">
    <h2>Mensagem gerada</h2>
    <div class="container">

      <textarea class="generated-comment">
        {{generatedComment}}
      </textarea>
      <button class="btn-inverse" v-clipboard="generatedComment">
        Copiar mensagem
      </button>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['generatedComment'])
  }

</script>

<style scoped>

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  textarea.generated-comment {
    min-width: 70vw;
    min-height: 10vh;
  }

  button {
    margin: 10px;
    min-height: 10vh;
  }

</style>
