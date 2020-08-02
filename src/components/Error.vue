<template>
   <div v-show="error" class="error">{{ error }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'error',
  computed: mapGetters({
    error: 'getError'
  })
}
</script>

<style>
.error {
  background: rgb(238, 98, 98);
  border-radius: 5px;
  color: #eee;
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  position: relative;
}
</style>
