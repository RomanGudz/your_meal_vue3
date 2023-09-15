<template>
  <div class="catalog__order order">
    <section class="order__wrapper">
      <div class="order__wrap-title" role="button" tabindex="0">
        <h2 class="order__title">Корзина</h2>
        <span class="order__count">4</span>
      </div>
      <div class="order__wrap-list">
        <ul class="order__list">
          <li class="order__item">
            <img class="order__image" src="../assets/img/super_chees.jpg" alt="Супер сырный">
            <div class="order__product">
              <h3 class="order__product-title">Супер сырный</h3>
              <p class="order__product-weight">
                512г
              </p>
              <p class="order__product-price">550
                <span class="currency">₽</span>
              </p>
            </div>
            <div class="order__product-count count">
              <button class="count__minus">-</button>
              <p class="count__amount">1</p>
              <button class="count__plus">+</button>
            </div>
          </li>
          <li class="order__item">
            <img class="order__image" src="../assets/img/fry.jpg" alt="Картошка фри">
            <div class="order__product">
              <h3 class="order__prodct-title">Картошка фри</h3>
              <div class="order__product-weight">
                180г
                <p class="order__product-price">245
                  <span class="currency">₽</span>
                </p>
              </div>

            </div>
            <div class="order__product-count count">
              <button class="count__minus">-</button>
              <p class="count__amount">2</p>
              <button class="count__plus">+</button>
            </div>
          </li>
          <li class="order__item">
            <img class="order__image" src="../assets/img/spisy_hot-dog.jpg" alt="Жгучий хот-дог">
            <div class="order__product">
              <h3 class="order__prudct-title">Жгучий хот-дог</h3>
              <div class="order__product-weight">
                245г
                <p class="order__product-price">239
                  <span class="currency">₽</span>
                </p>
              </div>

            </div>
            <div class="order__product-count count">
              <button class="count__minus">-</button>
              <p class="count__amount">1</p>
              <button class="count__plus">+</button>
            </div>
          </li>
        </ul>
        <div class="order__total">
          <p>Итого</p>
          <p>
            <span class="order__total-amount">1279</span>
            <span class="currency">₽</span>
          </p>
        </div>
        <button class="order__submit">Оформить заказ</button>
        <div class="order__wrap-apeal">
          <p class="order__apeal">Бесплатная доставка</p>
          <button class="order__close">Свернуть</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

// переключатель видимости корзины
// document.querySelector('.order__wrap-title').addEventListener('click', () => {
//   document.querySelector('.order').classList.toggle('order__open')
// })
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped></style>