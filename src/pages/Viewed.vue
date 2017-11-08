<template>
  <section class='viewed'>
    <span>viewed</span>
    <button @click='check'></button>
  </section>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    check () {
      console.log('views!!!', this.msg)
      this.msg = this.msg + ' ' + 1
    },
    check2 () {
      console.log('dfsfdfsf!!!', this.msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
