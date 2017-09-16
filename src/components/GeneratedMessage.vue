<template>
  <div id="generated-message">
    <h2>Generated Message</h2>
    <textarea cols="50" rows="10">
      {{generatedComment}}
    </textarea>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters(['generatedComment'])
  }
</script>
