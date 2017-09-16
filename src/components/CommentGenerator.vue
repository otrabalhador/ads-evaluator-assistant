<template>
  <div class="comment-generator">
    <h1>Lilappen</h1>
    <generated-message></generated-message>
  </div>
</template>

<script>
import GeneratedMessage from '@/components/GeneratedMessage'
export default {
  name: 'comment-generator',
  data () {
    return { }
  },
  components: { GeneratedMessage }
}
</script>

<style scoped>
</style>
