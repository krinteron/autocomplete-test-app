<template>
  <button
    class="submit-btn"
    :disabled="disabled"
    @click.prevent="$emit('click')"
    type="submit"
    v-text="text"
  />
</template>

<script>
export default {
  name: 'BlueButton',
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    text: {
      type: String,
      required: false,
      default: 'Отправить',
    },
  },
  emits: ['click'],
};
</script>

<style lang="scss" scoped>
.submit-btn {
  background: #387aff;
  display: inline-block;
  width: 100%;
  height: 54px;
  padding: 17px 25px;
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 1;
  }

  &:disabled {
    background: gray;
    opacity: 0.3;
    pointer-events: none;
  }
}
</style>
