<template>
  <the-header />
  <the-nav-bar />
  <section class="catalog">
    <div class="container catalog__container">
      <the-order-basket :order-basket="orderBasket" />
      <catolog-item @open-modal="modalOpenOrClose" @add-product="addProduct" :catolog-product="catologBurgers" />
    </div>
  </section>
  <modal-product @modal-close="modalOpenOrClose" @add-product="addProduct" :style="`display: ${modalProduct}`"
    :card-product="cardProduct" />

  <modal-delivery />

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
import { reactive, ref } from 'vue';

export default {

  setup() {

    const modalProduct = ref('none')
    const cardProduct = ref({})
    const catologBurgers = reactive([
      {
        name: 'Мясня бомба',
        price: 689,
        weight: 520,
        image: require('../src/assets/img/meat-bomb.jpg'),
        about: `Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего
            мяса покорит вас своей сочностью, а хрустящие
            листья салата добавят свежести.`,
        callories: 430,
        ingredients: [
          'Пшеничная булочка',
          'Котлета из говядины',
          'Красный лук',
          'Листья салата',
          'Соус горчичный'
        ],
      },
      {
        name: 'Супер сырный',
        price: 550,
        weight: 512,
        image: require('../src/assets/img/super_chees.jpg'),
        about: `Супер сырное наслаждение! Большая рубленая котлета из свежего 
        мраморного говяжего мяса покорит вас своей сочностью, а сыра то сыра сколько: Пармезан, Гауда, Чеддер и Блю Чиз.`,
        callories: 590,
        ingredients: [
          "Пшеничная булочка",
          'Котлета из говядины',
          'Солёные огурчики',
          'Соус сырный',
          'Пармезан',
          'Гауда',
          'Чеддер',
          'Блю-Чиз'
        ]
      },
      {
        name: 'Сытный',
        price: 639,
        weight: 580,
        image: require('../src/assets/img/satisfying.jpg'),
        about: `Супер сытное наслаждение! Два огромных бифштекса приготовленых по-домашнему покорит вас своей сытностью.`,
        callories: 740,
        ingredients: [
          'Пшеничная булочка с кунжутом',
          '2 Котлеты из говядины с курочкой',
          'Хрустящий лук',
          'Солёные огурчики',
          'Соус горчичный',
          'Кетчуп',
          'Чеддер']
      },
      {
        name: 'Тяжелый удар',
        price: 480,
        weight: 470,
        image: require('../src/assets/img/heavy_kick.jpg'),
        about: `Нужно быть в себе уверенным на 100%, чтобы его съесть! Две огромные свинные котлеты приготовленых на огне сведут тебя с ума сочностью и вкусом`,
        callories: 810,
        ingredients: [
          'Пшеничная булочка',
          '2 Котлеты из свинины',
          'Сочный лук',
          'Свежий томат',
          'Хрустящий салат',
          'Солёные огурчики',
          'Соус мерри',
          'Кетчуп',
          'Чеддер',
        ]
      },
      {
        name: 'Вечная классика',
        price: 450,
        weight: 450,
        image: require('../src/assets/img/classic.jpg'),
        about: `Вкуснейшая 100% классика`,
        callories: 610,
        ingredients: [
          'Пшеничная булочка с кунжутом',
          'Котлета из 100 % говядины',
          'Лук репчтый',
          'Свежий томат',
          'Хрустящий салат Айсберг',
          'Солёные огурчики',
          'Майонез',
          'Кетчуп томатный'
        ]
      },
      {
        name: 'Итальянский',
        price: 560,
        weight: 510,
        image: require('../src/assets/img/italian.jpg'),
        about: `Это искусство Италии в каждом укусе. Этот бургер - настоящая гастрономическая симфония, объединяющая в себе выдающиеся ингредиенты и уникальные вкусы.`,
        callories: 535,
        ingredients: [
          'Итальянская ржанная булочка',
          'Котлета из телятины',
          'Cыр моцарелла',
          'Свежий томат',
          'Бальзамический крем',
          'Микс салата',
          'Соус песто',
        ]
      }])

    const modalOpenOrClose = (name) => {
      if (!modalProduct.value) {
        modalProduct.value = 'none'

      } else {
        modalProduct.value = ''
        cardProduct.value = catologBurgers.find(item => item.name === name)
      }
    }

    const addProduct = (order, name) => {
      orderBasket.push(catologBurgers.find(item => item.name === name)),
        orderBasket.forEach(obj => {
          if (orderBasket.name === name) {
            console.log('start')
            obj.quantity = order
          }
        })
      console.log(orderBasket)
    }

    const orderBasket = reactive([])
    return {
      modalOpenOrClose,
      addProduct,
      modalProduct,
      catologBurgers,
      cardProduct,
      orderBasket
    }
  },
  components: { TheHeader, TheNavBar, TheFooter, TheOrderBasket, CatologItem, ModalProduct, ModalDelivery }
}
</script>



