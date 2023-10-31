export default {
  state() {
    return {
      catologSnack: [{
        name: 'Начос',
        price: 250,
        weight: 220,
        image: require('@/assets/img/snack/nachos.jpg'),
        about: `Хрустящие чипсы из кукурузной тортильи`,
        callories: 660,
        ingredients: [
          'Начос',
          'Соус на выбор'
        ]
      }, {
        name: 'Картошка фри',
        price: 245,
        weight: 180,
        image: require('@/assets/img/snack/fry.jpg'),
        about: `У нас он именно такой, каким любят его во всем мире — мягкий, рассыпчатый внутри и аппетитно хрустящий снаружи.`,
        callories: 560,
        ingredients: [
          'Картофель',
          'Соус на выбор'
        ]
      },
      {
        name: 'Луковые кольца',
        price: 230,
        weight: 160,
        image: require('@/assets/img/snack/onion rings.jpg'),
        about: `Кольца из рубленного лука в панировке`,
        callories: 650,
        ingredients: [
          'Репчатый лук',
          'Пшенично - кукурузный кляр',
          'Соус на выбор'
        ]
      }]

    }
  },
  getters: {
    catologSnack: (state) => { return state.catologSnack }
  }
}