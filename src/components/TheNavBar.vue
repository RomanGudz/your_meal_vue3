<template>
  <nav class="navigation">
    <div class="container navigation__container">
      <ul class="navigation__list">
        <li class="navigation__item" v-for="(nav, id) in  navigate " :key="id">
          <button @click="activeButton(id)" :class="[
            'navigation__button',
            { 'navigation__button_active': activeNav === id },
            `navigation__button_${id}`]">
            {{ nav }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { computed, reactive, } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const navigate = reactive(store.state.navigate)
    const activeNav = computed(() => { return store.getters.activeNav })

    const activeButton = (id) => {
      store.commit('activeButton', id)
    }
    return {
      navigate,
      activeNav,
      activeButton
    }
  }
}
</script>
