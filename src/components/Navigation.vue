<template>
  <nav class="navigation">
      <ul class="navigation__list">
          <li class="navigation__list-item">
            <router-link to="/" class="navigation__item-link" exactActiveClass="navigation__item-link--isActive">главная</router-link>
            </li>
          <li class="navigation__list-item">
            <router-link to="/viewed" class="navigation__item-link" exactActiveClass="navigation__item-link--isActive">просмотренные</router-link>
            </li>
          <li class="navigation__list-item">
            <router-link to="/favourite" class="navigation__item-link" exactActiveClass="navigation__item-link--isActive">избранное</router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  watch: {
    '$route' (to, from) {
      this.setCurrentRoute(to.name)
    }
  },
  methods: {
    ...mapActions(['setCurrentRoute'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navigation {
      &__list {
        display:flex;
        flex-direction: row;
      }

      &__list-item {
        flex: 1 0 auto;
        display:flex;
        justify-content: center;
        transition: background 0.3s ease;
        text-align:center;

        &:hover {
          background-color:#303030;
        }
      } 

      &__item-link {
        font-family: 'Bebas Book';
        text-decoration: none;
        text-transform: uppercase;
        color: #303030;
        font-size:30px;
        transition: color 0.3s ease;
        padding: 20px 0;
        display:block;
        width:100%;

        &--isActive {
          background: #303030;
          color: #fff;
        }
      }

      &__list-item:hover &__item-link {
        color: #fff;
      }
  }

</style>
