export default {
  state() {
    return {
      catologHotDog: [{
        name: 'Домашний хот-дог',
        price: 265,
        weight: 210,
        image: require('@/assets/img/hotdog/home hot-dog.jpg'),
        about: `Вкусно, по-домашнему`,
        callories: 526,
        ingredients: [
          'Булочка',
          'Мясная сосиска',
          'Помидор',
          'Маринованный и свежий огурец',
          'Соусы'
        ]
      }, {
        name: 'Хот-дог Premium',
        price: 385,
        weight: 430,
        image: require('@/assets/img/hotdog/premium hot-dog.jpg'),
        about: `Рубленый бифштекс из натуральной говядины и свинины, а вы уверены что это хот-дог?`,
        callories: 516,
        ingredients: [
          'Булочка',
          'Рубленый бифштекс из натуральной говядины и свинины',
          'Сыр Чеддер',
          'Сыр Моцарелла',
          'Ростбиф',
          'Помидор',
          'Маринованный огурец',
          'Красный лук',
          'Лист салата',
          'Картофель фри',
          'Соус'
        ]
      }, {
        name: 'Double Chiken',
        price: 315,
        weight: 390,
        image: require('@/assets/img/hotdog/double hot-dog.jpg'),
        about: `Для любителей курочки`,
        callories: 890,
        ingredients: [
          'Булочка',
          'Копченая сосиска',
          'Курица горячего копчения',
          'Сыр Чеддер',
          'Луковые колечки',
          'Маринованный огурец',
          'Помидор',
          'Картофельные чипсы',
          'Соус'
        ]
      }, {
        name: 'Классический хот-дог',
        price: 160,
        weight: 200,
        image: require('@/assets/img/hotdog/classic hot-dog.jpg'),
        about: `Нестареющая классика`,
        callories: 390,
        ingredients: [
          'Булочка',
          'Сосиска',
          'Соусы'
        ]
      }, {
        name: 'Жгучий хот-дог',
        price: 280,
        weight: 250,
        image: require('@/assets/img/hotdog/spisy_hot-dog.jpg'),
        about: `Для любителей остеренького`,
        callories: 610,
        ingredients: [
          'Булочка',
          'Говяжья сосиска',
          'Халапень',
          'Корейская морковь',
          'Острый соус'
        ]
      }]

    }
  },
  getters: {
    catologHotDog: (state) => { return state.catologHotDog }
  }
}