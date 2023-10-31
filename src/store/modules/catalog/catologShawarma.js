export default {
  state() {
    return {
      catologShawarma: [{
        name: 'Шаурма деревенская',
        price: 322,
        weight: 310,
        image: require('@/assets/img/shawarma/rustic.jpg'),
        about: `Лучшее с ограды и огорода. Если тебе знакомы эти слова, то тебе точно понравится`,
        callories: 580,
        ingredients: [
          'Тортилья',
          'Курочка гриль',
          'Маринованные огурчики',
          'Солёная капуста',
          'Опята',
          'Чесночный соус',
          'Обжаренный лук'
        ]
      }, {
        name: 'Шаурма молодежная',
        price: 305,
        weight: 320,
        image: require('@/assets/img/shawarma/youth.jpg'),
        about: `Вкусно, сытно, удобно!`,
        callories: 620,
        ingredients: [
          'Тортилья',
          'Мясо курицы',
          'Картофель фри',
          'Пекинская капуста',
          'Огурцы маринованные',
          'Помидоры свежие',
          'Соус'
        ]
      }]

    }
  },
  getters: {
    catologShawarma: (state) => {
      return state.catologShawarma
    }
  }
}