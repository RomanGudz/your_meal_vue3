<template>
  <div class="catalog__order order " v-if="orderBasket.length">
    <section class="order__wrapper">
      <div class="order__wrap-title " role="button" tabindex="0">
        <h2 class="order__title">Корзина</h2>
        <span class="order__count">{{ orderBasket.length }}</span>
      </div>
      <div class="order__wrap-list">
        <ul class="order__list">
          <li class="order__item" v-for=" order  in   orderBasket  " :key="order.name">
            <img class="order__image" :src="order.image" :alt="order.name">
            <div class="order__product">
              <h3 class="order__product-title">{{ order.name }}</h3>
              <p class="order__product-weight">
                512г
              </p>
              <p class="order__product-price">{{ order.price }}
                <span class="currency">₽</span>
              </p>
            </div>
            <div class="order__product-count count">
              <button class="count__minus" @click="$emit('countMinus', order)">-</button>
              <p class="count__amount">{{ order.quantity }}</p>
              <button class="count__plus" @click="$emit('countPlus', order)">+</button>
            </div>
          </li>
        </ul>
        <div class="order__total">
          <p>Итого</p>
          <p>
            <span class="order__total-amount">{{ totalOrder }}</span>
            <span class="currency">₽</span>
          </p>
        </div>
        <button class="order__submit" @click="$emit('openDelivery')">Оформить заказ</button>
        <div class="order__wrap-apeal">
          <p class="order__apeal">Бесплатная доставка</p>
          <button class="order__close" @click="toggleOrder">Свернуть</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    orderBasket: {
      type: Array,
      default: () => []
    },
    totalOrder: {
      type: Number,
      required: true
    }
  },
  setup() {
    const openOrder = ref(false)
    const toggleOrder = () => {
      openOrder.value = !openOrder.value
    }
    return {
      toggleOrder,
      openOrder
    }
  }
}
</script>