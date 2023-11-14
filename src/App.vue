<template>
  <the-header />
  <the-nav-bar />
  <section class="catalog">
    <div class="container catalog__container">
      <the-order-basket />
      <catolog-item />
    </div>
    <modal-product />
    <modal-delivery />
  </section>

  <the-footer />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';
import TheOrderBasket from './components/TheOrderBasket.vue';
import CatologItem from './components/UI/CatologItem.vue';
import ModalProduct from './components/UI/ModalProduct.vue';
import ModalDelivery from './components/UI/ModalDelivery.vue';

export default {
  setup() {
    return {}
  },
  components: { TheHeader, TheNavBar, TheFooter, TheOrderBasket, CatologItem, ModalProduct, ModalDelivery }
}
</script>



