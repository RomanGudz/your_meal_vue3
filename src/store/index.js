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
      modalOpenOrClose: true,
      orderBasket: [],
    }

  },
  getters: {
    modalOpenOrClose: (state) => {
      return state.modalDelivery
    },
    activeNav: (state) => {
      return state.activeNav
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
        return activeCatolog.catologBurgers
      }
      else if (activeCatolog.catologSnack) {
        return activeCatolog.catologSnack
      }
      else if (activeCatolog.catologHotDog) {
        return activeCatolog.catologHotDog
      }
      else if (activeCatolog.catologCombo) {
        return activeCatolog.catologCombo
      }
      else if (activeCatolog.catologShawarma) {
        return activeCatolog.catologShawarma
      }
      else if (activeCatolog.catologPizza) {
        return activeCatolog.catologPizza
      }
      else if (activeCatolog.catologWok) {
        return activeCatolog.catologWok
      }
      else if (activeCatolog.catologDessert) {
        return activeCatolog.catologDessert
      }
      else {
        return activeCatolog.catologSauce
      }
    }
  },
  mutations: {
    openOrClose(state) {
      state.modalOpenOrClose = !state.modalOpenOrClose
      console.log(state.modalOpenOrClose)
    },
    activeButton(state, id) {
      state.activeNav = id

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