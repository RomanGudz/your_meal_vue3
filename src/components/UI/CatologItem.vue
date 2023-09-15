<template>
  <div class="catalog__wrapper">
    <h2 class="catalog__title">Бургеры</h2>
    <div class="catalog__wrap_list">
      <ul class="catalog__list">
        <li class="catalog__item" v-for="product in  catologProduct " :key="product.id">
          <article class="product">
            <img :src="product.image" :alt="product.name" class="product__image"
              @click="$emit('openModal', product.name)">
            <p class="product__price">{{ product.price }} <span class="currency">₽</span></p>
            <h3 class="product__title">
              <button class="product__detail" @click="$emit('openModal', product.name)">{{ product.name }}</button>
            </h3>
            <p class="product__weight">{{ product.weight }}г</p>
            <button class="product__add" type="button" @click="$emit('addProduct', 1, product.name)">Добавить</button>
          </article>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>


export default {
  props: {
    catologProduct: {
      type: Array,
      requred: true
    }
  },
  setup() {

    return {

    }
  }
}
</script>

<style lang="scss" scoped></style>