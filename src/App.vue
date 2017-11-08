<template>
   <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: { Navigation }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
