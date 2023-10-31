export default {
  state() {
    return {
      catologDessert: [{
        name: 'Рустик',
        price: 460,
        weight: 600,
        image: require('@/assets/img/dessert/rustik.jpg'),
        about: `Пироженное с открытыми коржами, творожным кремом, голубикой, грецким орехом`,
        callories: 2028,
        ingredients: [
          'Бисквитные коржи',
          'КТворожный крем',
          'Голубика',
          'Грецкий орех'
        ]
      }, {
        name: 'Пончик',
        price: 99,
        weight: 70,
        image: require('@/assets/img/dessert/donut.jpg'),
        about: `Классичесий пончик`,
        callories: 320,
        ingredients: [
          'Пончик',
          'Посыпка',
          'Глазурь',
          'Начинка на выбор'
        ]
      }, {
        name: 'Чизкейк Нью-Йорк',
        price: 235,
        weight: 100,
        image: require('@/assets/img/dessert/cheese-cake.jpg'),
        about: `Настоящая американская классика — нежный чизкейк из сливочно-творожной начинки с ванильной ноткой на тонкой песочно-миндальной подложке.`,
        callories: 350,
        ingredients: [
          'Печенье песочное',
          'Масло сливочное',
          'Сыр сливочный',
          'Сахар',
          'Яйца',
          'Сливки'
        ]
      }]

    }
  },
  getters: {
    catologDessert: (state) => { return state.catologDessert }
  }
}