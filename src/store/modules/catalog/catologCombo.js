export default {
  state() {
    return {
      catologCombo: [{
        name: 'Combo-wombo',
        price: 990,
        weight: 1200,
        image: require('@/assets/img/combo/combo1.jpg'),
        about: `2 любых бургера и картофель фри`,
        callories: 1500,
        ingredients: [
          'Бургер',
          'Бургер',
          'Картофель фри',
          'Соус на выбор'
        ]
      }]

    }
  },
  getters: {
    catologCombo: (state) => {
      return state.catologCombo
    }
  }
}