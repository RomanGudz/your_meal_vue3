export default {
  state() {
    return {
      catologWok: [{
        name: 'Фунчоза с курицей',
        price: 360,
        weight: 320,
        image: require('@/assets/img/wok/chiken wok.jpg'),
        about: `Фунчоза - это стеклянная лапша. Из нее получаются чрезвычайно аппетитные блюда азиатской кухни!`,
        callories: 540,
        ingredients: [
          'Лапша стеклянная',
          'Грудка куриная',
          'Морковь',
          'Лук репчатый',
          'Перец болгарский'
        ]
      }, {
        name: 'Удон с курицей',
        price: 380,
        weight: 320,
        image: require('@/assets/img/wok/chiken udon.jpg'),
        about: `Популярное блюдо японской кухни лапша удон с курицей в соусе терияки.!`,
        callories: 480,
        ingredients: [
          'Лапша пшеничная',
          'Грудка куриная',
          'Соус "Чесночный"',
          'Лук репчатый',
          'Перец болгарский'
        ]
      }]

    }
  },
  getters: {
    catologWok: (state) => { return state.catologWok }
  }
}