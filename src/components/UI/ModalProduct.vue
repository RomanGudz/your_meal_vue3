<template>
  <div class="modal modal_product" v-if="modalOpenOrCloseModalProduct">
    <div class="modal__main modal-product">
      <div class="modal-product-container">
        <h2 class="modal-product-title">{{ cardProduct.name }}</h2>
        <div class="modal-product__content">
          <img class="modal-product__image" :src="cardProduct.image" :alt="cardProduct.name">
          <p class="modal-product__description">{{ cardProduct.about }}</p>
          <div class="modal-product__ingredients ingredient">
            <h3 class="ingredients-title">Состав:</h3>
            <ul class="ingredients__list">
              <li class="ingredients__item" v-for="ingredient in cardProduct.ingredients" :key="ingredient.idx">
                {{ ingredient }}</li>
            </ul>
            <p class="ingredients__calories">{{ cardProduct.weight }}г, ккал {{ cardProduct.callories }}</p>
          </div>

        </div>
        <div class="modal-product__footer">
          <div class="modal-product__add">
            <button class="modal-product__btn" @click="addOrderBasketModal(cardProduct.name)">Добавить</button>
            <div class="modal-product__count count">
              <button class="count__minus" @click="countMinus">-</button>
              <p class="count__amount">{{ countProduct }}</p>
              <button class="count__plus" @click="countPlus">+</button>
            </div>
          </div>
          <p class="modal-product__price">{{ cardProduct.price }}
            <span class="currency">₽</span>
          </p>
        </div>
      </div>
      <button class="modal__close" @click="modalClose">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)" />
          <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)" />
        </svg>
      </button>
    </div>

  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    const countProduct = ref(1)

    const cardProduct = computed(() => {
      return store.getters.cardProduct
    })

    const modalOpenOrCloseModalProduct = computed(() => {
      return store.getters.modalOpenOrCloseModalProduct
    })

    const modalClose = () => {
      store.commit('openOrClose')
    }

    const countMinus = () => {
      if (countProduct.value > 1) { countProduct.value-- }

    }

    const countPlus = () => countProduct.value++

    const addOrderBasketModal = (name) => {
      store.commit('addOrderBasketModal', { name: name, quantity: countProduct.value })
      countProduct.value = 1
    }


    return {
      countMinus,
      countPlus,
      modalClose,
      addOrderBasketModal,
      countProduct,
      modalOpenOrCloseModalProduct,
      cardProduct
    }
  }
}
</script>