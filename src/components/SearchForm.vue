<template>
  <form action="" class="search-form">
    <input type="text" class="search-form__input">
    <button class="search-form__button"></button>
  </form>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .search-form {
    display:flex;
    

     &__input {
       width:100%;
       display:block;
       font-size: 30px;
       height:60px;
       flex: 1 1 auto;
     }

     &__button {
       flex: 1 1 10%;
       max-width:120px;
       background: rgba(48,48,48, 1);
       transition: background 0.3s ease;

       &:hover {
         background: rgba(48,48,48, 0.8);
         cursor: pointer;
       }

       &:active {
         background: rgba(48,48,48, 1);
       }
     }
  }
</style>
