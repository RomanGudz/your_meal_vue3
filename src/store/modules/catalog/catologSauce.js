export default {
  state() {
    return {
      catologSauce: [{
        name: 'Ореховый',
        price: 60,
        weight: 40,
        image: require('@/assets/img/sauce/peanute.jpg'),
        about: `Соус Гамадари - ореховый соус на основе арахиса. Отлично подходит к овощам и холодным закускам`,
        callories: 156,
        ingredients: [
          'Арахис',
          'Кунжут',
          'Мирин',
          'Кунжутное масло'
        ]
      }, {
        name: 'Сметанный соус',
        price: 40,
        weight: 40,
        image: require('@/assets/img/sauce/saure cream.jpg'),
        about: `Сметанный острый соус - слегка острый, обладает приятным вкусом с нежной сливочной нотой.`,
        callories: 178,
        ingredients: [
          'Сметана',
          'Майонез',
          'Лайм',
          'Васаби'
        ]
      }, {
        name: 'Соус Шрирача',
        price: 40,
        weight: 40,
        image: require('@/assets/img/sauce/sriracha.jpg'),
        about: `Тайский соус на основе красного перца чили, для тех, кто любит поострее!`,
        callories: 112,
        ingredients: [
          'Перец чили',
          'Чеснок',
          'Коричневый сахар',
          'Соль',
          'Белый уксус'
        ]
      }]

    }
  },
  getters: {
    catologSauce: (state) => { return state.catologSauce }
  }
}