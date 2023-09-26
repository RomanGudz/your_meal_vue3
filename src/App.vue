<template>
  <the-header />
  <the-nav-bar :navigate="navigate" :active-nav="activeNav" @active-button="activeButton" />
  <section class="catalog">
    <div class="container catalog__container">
      <the-order-basket :order-basket="orderBasket" :total-order="totalOrder" @count-minus='countMinus'
        @count-plus="countPlus" @open-delivery="openDelivery" />
      <catolog-item @open-modal="modalOpenOrClose" @add-product="addProduct" :catolog-product="catologProduct" />
    </div>
    <modal-product @modal-close="modalOpenOrClose" @add-product="addProduct" :style="`display: ${modalProduct}`"
      :card-product="cardProduct" />

    <modal-delivery :style="`display: ${modalDelivery}`" @modal-delivery-close="modalDeliveryClose"
      @submit-delivery="submitDelivery" />
  </section>

  <the-footer />
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheNavBar from './components/TheNavBar.vue';
import TheFooter from './components/TheFooter.vue';
import TheOrderBasket from './components/TheOrderBasket.vue';
import CatologItem from './components/UI/CatologItem.vue';
import ModalProduct from './components/UI/ModalProduct.vue';
import ModalDelivery from './components/UI/ModalDelivery.vue';
import { computed, reactive, ref } from 'vue';

export default {

  setup() {

    const modalProduct = ref('none')
    const modalDelivery = ref('none')
    const cardProduct = ref({})
    const orderBasket = ref([])


    const totalOrder = computed(() => {
      const total = ref(0)
      return orderBasket.value.reduce((acamulator, item) => {
        return acamulator + (item.quantity * item.price)
      }, total.value)
    })
    const navigate = ref({
      burger: 'Бургеры',
      snack: 'Закуски',
      hotdog: 'Хот-доги',
      combo: 'Комбо',
      shawarma: 'Шаурма',
      pizza: 'Пицца',
      wok: 'Вок',
      dessert: 'Десерты',
      sauce: 'Соусы'
    })

    const activeNav = ref('burger')

    const activeButton = (id) => {
      activeNav.value = id
    }

    const catologBurgers = reactive([
      {
        name: 'Мясня бомба',
        price: 689,
        weight: 520,
        image: require('../src/assets/img/burgers/meat-bomb.jpg'),
        about: `Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего
            мяса покорит вас своей сочностью, а хрустящие
            листья салата добавят свежести.`,
        callories: 430,
        ingredients: [
          'Пшеничная булочка',
          'Котлета из говядины',
          'Красный лук',
          'Листья салата',
          'Соус горчичный'
        ],
      },
      {
        name: 'Супер сырный',
        price: 550,
        weight: 512,
        image: require('../src/assets/img/burgers/super_chees.jpg'),
        about: `Супер сырное наслаждение! Большая рубленая котлета из свежего 
        мраморного говяжего мяса покорит вас своей сочностью, а сыра то сыра сколько: Пармезан, Гауда, Чеддер и Блю Чиз.`,
        callories: 590,
        ingredients: [
          "Пшеничная булочка",
          'Котлета из говядины',
          'Солёные огурчики',
          'Соус сырный',
          'Пармезан',
          'Гауда',
          'Чеддер',
          'Блю-Чиз'
        ]
      },
      {
        name: 'Сытный',
        price: 639,
        weight: 580,
        image: require('../src/assets/img/burgers/satisfying.jpg'),
        about: `Супер сытное наслаждение! Два огромных бифштекса приготовленых по-домашнему покорит вас своей сытностью.`,
        callories: 740,
        ingredients: [
          'Пшеничная булочка с кунжутом',
          '2 Котлеты из говядины с курочкой',
          'Хрустящий лук',
          'Солёные огурчики',
          'Соус горчичный',
          'Кетчуп',
          'Чеддер']
      },
      {
        name: 'Тяжелый удар',
        price: 480,
        weight: 470,
        image: require('../src/assets/img/burgers/heavy_kick.jpg'),
        about: `Нужно быть в себе уверенным на 100%, чтобы его съесть! Две огромные свинные котлеты приготовленых на огне сведут тебя с ума сочностью и вкусом`,
        callories: 810,
        ingredients: [
          'Пшеничная булочка',
          '2 Котлеты из свинины',
          'Сочный лук',
          'Свежий томат',
          'Хрустящий салат',
          'Солёные огурчики',
          'Соус мерри',
          'Кетчуп',
          'Чеддер',
        ]
      },
      {
        name: 'Вечная классика',
        price: 450,
        weight: 450,
        image: require('../src/assets/img/burgers/classic.jpg'),
        about: `Вкуснейшая 100% классика`,
        callories: 610,
        ingredients: [
          'Пшеничная булочка с кунжутом',
          'Котлета из 100 % говядины',
          'Лук репчтый',
          'Свежий томат',
          'Хрустящий салат Айсберг',
          'Солёные огурчики',
          'Майонез',
          'Кетчуп томатный'
        ]
      },
      {
        name: 'Итальянский',
        price: 560,
        weight: 510,
        image: require('../src/assets/img/burgers/italian.jpg'),
        about: `Это искусство Италии в каждом укусе. Этот бургер - настоящая гастрономическая симфония, объединяющая в себе выдающиеся ингредиенты и уникальные вкусы.`,
        callories: 535,
        ingredients: [
          'Итальянская ржанная булочка',
          'Котлета из телятины',
          'Cыр моцарелла',
          'Свежий томат',
          'Бальзамический крем',
          'Микс салата',
          'Соус песто',
        ]
      }])

    const catologSnack = reactive([{
      name: 'Начос',
      price: 250,
      weight: 220,
      image: require('../src/assets/img/snack/nachos.jpg'),
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
      image: require('../src/assets/img/snack/fry.jpg'),
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
      image: require('../src/assets/img/snack/onion rings.jpg'),
      about: `Кольца из рубленного лука в панировке`,
      callories: 650,
      ingredients: [
        'Репчатый лук',
        'Пшенично - кукурузный кляр',
        'Соус на выбор'
      ]
    },])
    const catologHotDog = reactive([{
      name: 'Домашний хот-дог',
      price: 265,
      weight: 210,
      image: require('../src/assets/img/hotdog/home hot-dog.jpg'),
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
      image: require('../src/assets/img/hotdog/premium hot-dog.jpg'),
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
      image: require('../src/assets/img/hotdog/double hot-dog.jpg'),
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
      image: require('../src/assets/img/hotdog/classic hot-dog.jpg'),
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
      image: require('../src/assets/img/hotdog/spisy_hot-dog.jpg'),
      about: `Для любителей остеренького`,
      callories: 610,
      ingredients: [
        'Булочка',
        'Говяжья сосиска',
        'Халапень',
        'Корейская морковь',
        'Острый соус'
      ]
    },])
    const catologCombo = reactive([{
      name: 'Combo-wombo',
      price: 990,
      weight: 1200,
      image: require('../src/assets/img/combo/combo1.jpg'),
      about: `2 любых бургера и картофель фри`,
      callories: 1500,
      ingredients: [
        'Бургер',
        'Бургер',
        'Картофель фри',
        'Соус на выбор'
      ]
    },])
    const catologShawarma = reactive([{
      name: 'Шаурма деревенская',
      price: 322,
      weight: 310,
      image: require('../src/assets/img/shawarma/rustic.jpg'),
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
      image: require('../src/assets/img/shawarma/youth.jpg'),
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
    },])
    const catologPizza = reactive([{
      name: 'Фета',
      price: 790,
      weight: 470,
      image: require('../src/assets/img/pizza/pizza feta.jpg'),
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
      image: require('../src/assets/img/pizza/pizza Rio.jpg'),
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
      image: require('../src/assets/img/pizza/pizza Olive.jpg'),
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
    },])
    const catologWok = reactive([{
      name: 'Фунчоза с курицей',
      price: 360,
      weight: 320,
      image: require('../src/assets/img/wok/chiken wok.jpg'),
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
      image: require('../src/assets/img/wok/chiken udon.jpg'),
      about: `Популярное блюдо японской кухни лапша удон с курицей в соусе терияки.!`,
      callories: 480,
      ingredients: [
        'Лапша пшеничная',
        'Грудка куриная',
        'Соус "Чесночный"',
        'Лук репчатый',
        'Перец болгарский'
      ]
    },])
    const catologDessert = reactive([{
      name: 'Рустик',
      price: 460,
      weight: 600,
      image: require('../src/assets/img/dessert/rustik.jpg'),
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
      image: require('../src/assets/img/dessert/donut.jpg'),
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
      image: require('../src/assets/img/dessert/cheese-cake.jpg'),
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
    },])
    const catologSauce = reactive([{
      name: 'Ореховый',
      price: 60,
      weight: 40,
      image: require('../src/assets/img/sauce/peanute.jpg'),
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
      image: require('../src/assets/img/sauce/saure cream.jpg'),
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
      image: require('../src/assets/img/sauce/sriracha.jpg'),
      about: `Тайский соус на основе красного перца чили, для тех, кто любит поострее!`,
      callories: 112,
      ingredients: [
        'Перец чили',
        'Чеснок',
        'Коричневый сахар',
        'Соль',
        'Белый уксус'
      ]
    },])

    const modalOpenOrClose = (name) => {
      if (!modalProduct.value) {
        modalProduct.value = 'none'

      } else {
        modalProduct.value = ''
        cardProduct.value = catologProduct.value.find(item => item.name === name)
      }
    }

    const addProduct = (order, name) => {
      const foundProduct = catologProduct.value.find(item => item.name === name);

      if (foundProduct) {
        const existingItem = orderBasket.value.find(item => item.name === name);

        if (existingItem) {
          existingItem.quantity += order;
        } else {
          foundProduct.quantity = order;
          orderBasket.value.push(foundProduct);
        }
      }
    }

    const catologProduct = computed(() => {
      const catalogs = {
        burger: catologBurgers,
        snack: catologSnack,
        hotdog: catologHotDog,
        combo: catologCombo,
        shawarma: catologShawarma,
        pizza: catologPizza,
        wok: catologWok,
        dessert: catologDessert,
        sauce: catologSauce,
      };
      return catalogs[activeNav.value]
    })

    const countMinus = (order) => {
      const findOrder = orderBasket.value.find(item => item.name === order.name)
      findOrder.quantity--
      if (findOrder.quantity == 0) {
        orderBasket.value = orderBasket.value.filter(item => item.name !== order.name)
      }

    }


    const countPlus = (order) => {
      const findOrder = orderBasket.value.find(item => item.name === order.name)
      findOrder.quantity++
    }

    const openDelivery = () => {
      modalDelivery.value = ''
    }
    const submitDelivery = (submit) => {
      console.log(totalOrder.value)
      console.log(orderBasket.value)
      console.log(submit)
      modalDelivery.value = 'none'
      orderBasket.value = []
    }

    const modalDeliveryClose = () => {
      modalDelivery.value = 'none'
    }

    return {
      activeButton,
      modalOpenOrClose,
      addProduct,
      countMinus,
      countPlus,
      openDelivery,
      modalDeliveryClose,
      submitDelivery,
      catologProduct,
      navigate,
      activeNav,
      modalProduct,
      modalDelivery,
      cardProduct,
      orderBasket,
      totalOrder
    }
  },
  components: { TheHeader, TheNavBar, TheFooter, TheOrderBasket, CatologItem, ModalProduct, ModalDelivery }
}
</script>



