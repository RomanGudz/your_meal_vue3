export default {
  state() {
    return {
      catologPizza: [{
        name: 'Фета',
        price: 790,
        weight: 470,
        image: require('@/assets/img/pizza/pizza feta.jpg'),
        about: `Пицца с творожным сыром, красным соусом, рукколой`,
        callories: 1605,
        ingredients: [
          'Тонкое тесто',
          'Красный соус',
          'Моцарелла',
          'Руккола',
          'Творожный сыр'
        ]
      }, {
        name: 'Рио',
        price: 850,
        weight: 550,
        image: require('@/assets/img/pizza/pizza Rio.jpg'),
        about: `Пицца с ветчиной, курицей, сладким перцем, оливками`,
        callories: 1350,
        ingredients: [
          'Тонкое тестое',
          'Томатный соус',
          'Ветчина',
          'Курица',
          'Шампиньоны',
          'Сладкий перец',
          'Помидоры черри',
          'Оливки'
        ]
      }, {
        name: 'Оливия',
        price: 750,
        weight: 550,
        image: require('@/assets/img/pizza/pizza Olive.jpg'),
        about: `Пицца с вялеными томатами, оливками, сыром моцарелла`,
        callories: 1350,
        ingredients: [
          'Пышное тесто',
          'Сметанный соус',
          'Глазунья',
          'Сыр моцарелла',
          'Вяленые томаты',
          'Оливки'
        ]
      }]

    }
  },
  getters: {
    catologPizza: (state) => { return state.catologPizza }
  }
}