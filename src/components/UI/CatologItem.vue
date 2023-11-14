<template>
  <div class="catalog__wrapper">
    <h2 class="catalog__title">{{ activeTitle }}</h2>
    <div class="catalog__wrap_list">
      <ul class="catalog__list">
        <li class="catalog__item" v-for="product in  catologProduct" :key="product.id">
          <article class="product">
            <img :src="product.image" :alt="product.name" class="product__image" @click="openOrClose(product.name)">
            <p class="product__price">{{ product.price }} <span class="currency">₽</span></p>
            <h3 class="product__title">
              <button class="product__detail" @click="openOrClose(product.name)">{{ product.name }}</button>
            </h3>
            <p class="product__weight">{{ product.weight }}г</p>
            <button class="product__add" type="button" @click="addProduct(product.name)">Добавить</button>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'


export default {
  setup() {
    const store = useStore()

    const catologProduct = computed(() => {
      return store.getters.catologProduct
    })

    const activeTitle = computed(() => {
      return store.getters.activeTitle
    })

    const addProduct = (name) => {
      store.commit('addOrderBasket', name)
    }

    const openOrClose = (name) => {
      store.commit('modalOpenOrClose', name)
    }
    return {
      catologProduct,
      addProduct,
      activeTitle,
      openOrClose
    }
  }
}
</script>

<style lang="scss" scoped></style>