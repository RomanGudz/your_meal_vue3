<template>
  <div class="modal modal_delivery">
    <div class="modal__main modal-delivery">
      <div class="modal-delivery__container">
        <h2 class="modal_delivery__title">Доставка</h2>
        <form action="submit" class="modal-delivery__form" id="delivery">
          <fieldset class="modal-delivery__fieldset">
            <input class="modal-delivery__input" type="text" name="name" placeholder="Ваше имя"
              v-model="formDelivery.name">
            <input class="modal-delivery__input" type="tel" name="phone" placeholder="Телефон"
              v-model="formDelivery.phone">
          </fieldset>

          <fieldset class="modal-delivery__fieldset modal-delivery__fieldset-radio">
            <label class="modal-delivery__label">
              <input class="modal-delivery__radio" type="radio" name="delivery" value="Самовывоз" checked
                v-model="formDelivery.delivery">
              Самовывоз</label>
            <label class="modal-delivery__label">
              <input class="modal-delivery__radio" type="radio" name="delivery" value="Доставка"
                v-model="formDelivery.delivery">
              Доставка</label>
          </fieldset>
          <fieldset class="modal-delivery__fieldset">
            <input class="modal-delivery__input" type="text" name="address" placeholder="Улица, дом, квартира"
              v-model="formDelivery.address">
            <input class="modal-delivery__input delivery__input_half" type="number" name="floor" placeholder="Этаж"
              v-model="formDelivery.floor">
            <input class="modal-delivery__input delivery__input_half" type="number" name="itercom" placeholder="Домофон"
              v-model="formDelivery.itercom">
          </fieldset>
        </form>
        <button class="modal-delivery__btn" type="submit" form="delivery" @click.prevent="submit">Оформить</button>
      </div>
      <button class="modal__close" @click="$emit('modalDeliveryClose')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)" />
          <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)" />
        </svg>

      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['submitDelivery'],
  setup(_, { emit }) {

    const formDelivery = ref({
      name: '',
      phone: '',
      delivery: '',
      address: '',
      floor: '',
      itercom: '',

    })
    const submit = () => {
      emit('submitDelivery', formDelivery.value),
        formDelivery.value = {
          name: '',
          phone: '',
          delivery: '',
          address: '',
          floor: '',
          itercom: '',
        }
    }

    return {
      formDelivery,
      submit
    }
  }
}
</script>

<style lang="scss" scoped></style>