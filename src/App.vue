<template>
   <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <SearchForm> </SearchForm>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation'
import SearchForm from '@/components/SearchForm'

export default {
  name: 'app',
  data () {
    return {}
  },
  components: { Navigation, SearchForm }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
