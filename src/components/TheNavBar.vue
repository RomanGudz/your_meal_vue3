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
import { reactive, ref } from 'vue'

export default {

  setup() {
    const navigate = reactive({
      burger: 'Бургеры',
      snack: 'Закуски',
      hotdog: 'Хот-доги',
      combo: 'Комбо',
      shawarma: 'Шаурма',
      pizza: 'Пицца',
      wok: 'Вок',
      dessert: 'Десерты',
      sauce: 'Соусы'
    })

    const activeNav = ref('burger')

    const activeButton = (id) => {
      activeNav.value = id
    }

    return {
      navigate,
      activeButton,
      activeNav

    }
  }
}
</script>
