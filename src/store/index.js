import { createStore } from 'vuex'
import catologDessert from './modules/catalog/catologDessert'
import catologHotDog from './modules/catalog/catologHotDog'
import catologBurgers from './modules/catalog/catologBurgers'
import catologPizza from './modules/catalog/catologPizza'
import catologSauce from './modules/catalog/catologSauce'
import catologShawarma from './modules/catalog/catologShawarma'
import catologSnack from './modules/catalog/catologSnack'
import catologWok from './modules/catalog/catologWok'
import catologCombo from './modules/catalog/catologCombo'

export const store = createStore({
  state() {
    return {
      navigate: {
        burger: 'Бургеры',
        snack: 'Закуски',
        hotdog: 'Хот-доги',
        combo: 'Комбо',
        shawarma: 'Шаурма',
        pizza: 'Пицца',
        wok: 'Вок',
        dessert: 'Десерты',
        sauce: 'Соусы'
      },
      activeNav: 'burger',
      openOrCloseOrder: '',
      modalOpenOrCloseModalProduct: false,
      modalOpenOrCloseModalDelivery: false,
      orderBasket: [],
      cardProduct: {},
      catologProducts: [],
      totalOrder: 0,
      formDelivery: {
        name: '',
        phone: '',
        delivery: '',
        address: '',
        floor: '',
        itercom: '',
      },
    }

  },
  getters: {
    modalOpenOrCloseModalProduct: (state) => {
      return state.modalOpenOrCloseModalProduct
    },
    modalOpenOrCloseModalDelivery: (state) => {
      return state.modalOpenOrCloseModalDelivery
    },
    openOrCloseOrder: (state) => {
      return state.openOrCloseOrder
    },
    cardProduct: (state) => {
      return state.cardProduct
    },
    activeNav: (state) => {
      return state.activeNav
    },
    orderBasket: (state) => {
      return state.orderBasket
    },
    activeTitle: (state) => {
      return state.navigate[state.activeNav]
    },
    catologProduct: (state) => {
      const catologs = {
        burger: state.catologBurgers,
        snack: state.catologSnack,
        hotdog: state.catologHotDog,
        combo: state.catologCombo,
        shawarma: state.catologShawarma,
        pizza: state.catologPizza,
        wok: state.catologWok,
        dessert: state.catologDessert,
        sauce: state.catologSauce,
      };
      const activeCatolog = catologs[state.activeNav];

      if (activeCatolog.catologBurgers) {
        return state.catologProducts = activeCatolog.catologBurgers
      }
      else if (activeCatolog.catologSnack) {
        return state.catologProducts = activeCatolog.catologSnack
      }
      else if (activeCatolog.catologHotDog) {
        return state.catologProducts = activeCatolog.catologHotDog
      }
      else if (activeCatolog.catologCombo) {
        return state.catologProducts = activeCatolog.catologCombo
      }
      else if (activeCatolog.catologShawarma) {
        return state.catologProducts = activeCatolog.catologShawarma
      }
      else if (activeCatolog.catologPizza) {
        return state.catologProducts = activeCatolog.catologPizza
      }
      else if (state.activeCatolog.catologWok) {
        return state.catologProducts = activeCatolog.catologWok
      }
      else if (activeCatolog.catologDessert) {
        return state.catologProducts = activeCatolog.catologDessert
      }
      else {
        return state.catologProducts = activeCatolog.catologSauce
      }
    },
    totalOrder: (state) => {
      return state.orderBasket.reduce((acamulator, item) => {
        return acamulator + (item.quantity * item.price)
      }, state.totalOrder)
    },
    formDelivery: (state) => {
      return state.formDelivery
    }
  },
  mutations: {
    openOrClose(state) {
      state.modalOpenOrCloseModalProduct = !state.modalOpenOrCloseModalProduct
    },
    ModalDeliveryOpenOrClose(state) {
      state.modalOpenOrCloseModalDelivery = !state.modalOpenOrCloseModalDelivery
    },
    activeButton(state, id) {
      state.activeNav = id
    },
    toggleOrder: (state) => {
      state.openOrCloseOrder = state.openOrCloseOrder === 'order_open' ? '' : 'order_open'
    },
    modalOpenOrClose(state, name) {
      if (!state.modalOpenOrCloseModalProduct) {
        state.modalOpenOrCloseModalProduct = true
        return state.cardProduct = state.catologProducts.find(item => item.name === name)
      } else {
        state.modalOpenOrCloseModalProduct = false
      }
    },
    addOrderBasket(state, name) {

      const foundProduct = state.catologProducts.find(item => item.name === name);

      if (foundProduct) {
        const existingItem = state.orderBasket.find(item => item.name === name);
        if (existingItem) {
          existingItem.quantity += 1;
        }
        else {
          foundProduct.quantity = 1;
          state.orderBasket.push(foundProduct);
        }
      }
    },
    addOrderBasketModal(state, payload) {
      const { name, quantity } = payload
      const foundProduct = state.catologProducts.find(item => item.name === name);
      const existingItem = state.orderBasket.find(item => item.name === name);

      if (existingItem) {
        existingItem.quantity += quantity;
        state.modalOpenOrCloseModalProduct = false
      }
      else {
        foundProduct.quantity = quantity;
        state.orderBasket.push(foundProduct);
        state.modalOpenOrCloseModalProduct = false
      }
    },

    countMinus(state, order) {
      const findOrder = state.orderBasket.find(item => item.name === order.name)
      findOrder.quantity--
      if (findOrder.quantity == 0) {
        state.orderBasket = state.orderBasket.filter(item => item.name !== order.name)
      }
    },

    countPlus(state, order) {
      const findOrder = state.orderBasket.find(item => item.name === order.name)
      findOrder.quantity++
    },

    submitOrder(state) {
      state.orderBasket = state.orderBasket.reduce((acamulator, item) => {
        return acamulator + (item.quantity * item.price)
      }, state.totalOrder)
      state.modalOpenOrCloseModalDelivery = !state.modalOpenOrCloseModalDelivery
      state.orderBasket = []
    }

  },
  actions: {

  },
  modules: {
    catologBurgers,
    catologDessert,
    catologHotDog,
    catologPizza,
    catologSauce,
    catologShawarma,
    catologSnack,
    catologWok,
    catologCombo

  }
})