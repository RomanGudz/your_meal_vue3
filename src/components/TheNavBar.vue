<template>
  <nav class="navigation">
    <div class="container navigation__container">
      <ul class="navigation__list">
        <li class="navigation__item" v-for="(nav, id) in  navigate " :key="id">
          <button @click="$emit('activeButton', id)" :class="[
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

export default {
  props: {
    navigate: {
      type: Object
    },
    activeNav: {
      type: String
    }
  }
}
</script>
