<template>
  <div class="catalog__wrapper">
    <h2 class="catalog__title">{{ activeTitle }}</h2>
    <div class="catalog__wrap_list">
      <ul class="catalog__list">
        <li class="catalog__item" v-for="product in  catologProduct" :key="product.id">
          <article class="product">
            <img :src="product.image" :alt="product.name" class="product__image"
              @click="$emit('openModal', product.name)">
            <p class="product__price">{{ product.price }} <span class="currency">₽</span></p>
            <h3 class="product__title">
              <button class="product__detail" @click="$emit('openModal', product.name)">{{ product.name }}</button>
            </h3>
            <p class="product__weight">{{ product.weight }}г</p>
            <button class="product__add" type="button" @click="addProduct(1, product.name)">Добавить</button>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, toRaw } from 'vue'
import { useStore } from 'vuex'


export default {
  setup() {
    const store = useStore()

    const catologProduct = computed(() => {

      return toRaw(store.getters.catologProduct)
    })

    const activeTitle = computed(() => {
      return store.getters.activeTitle
    })

    const addProduct = (order, name) => {
      const foundProduct = catologProduct.value.find(item => item.name === name);

      if (foundProduct) {
        const existingItem = store.state.orderBasket.find(item => item.name === name);

        if (existingItem) {
          existingItem.quantity += order;
        }
        else {
          foundProduct.quantity = order;
          store.state.orderBasket.push(foundProduct);
        }
      }
    }
    return {
      catologProduct,
      addProduct,
      activeTitle
    }
  }
}
</script>

<style lang="scss" scoped></style>