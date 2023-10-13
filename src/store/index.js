import { createStore } from 'vuex'

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
      activeNav: 'burger'
    }
  },
  getters: {
    modalDelivery: (state) => {
      return state.modalDelivery
    },
    modalProduct: (state) => {
      return state.modalProduct
    },
    activeNav: (state) => {
      return state.activeNav
    }
  },
  mutations: {
    openDelivery(state) {
      state.modalDelivery = ''
    },
    modalDeliveryClose(state) {
      state.modalDelivery = 'none'

    },
    activeButton(state, id) {
      state.activeNav = id

    }
  },
  actions: {

  }
})