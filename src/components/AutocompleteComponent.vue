<template>
  <div class="wrapper">
    <div class="appearance" :class="focus && 'rotate'" />
    <div
      v-if="inputValue"
      class="close"
      tabindex="-1"
      id="select-list"
      @click="clearInput"
    />
    <input
      class="input"
      type="text"
      :placeholder="placeholder"
      :value="inputValue"
      ref="input"
      @input="checkEmpty"
      @focus="setFocus"
      @blur="blur"
      v-on:keydown.down="incCurrentSelect"
      v-on:keydown.up="decCurrentSelect"
      v-on:keydown.enter="selectItem(sample[currentSelect])"
    />
    <p
      class="label"
      :class="(inputValue || focus) && 'input-modified'"
      v-text="placeholder"
    />
    <div
      class="list"
      id="select-list"
      tabindex="0"
      @blur="focus = false"
      v-if="focus"
    >
      <ul>
        <li
          id="select-list"
          class="list-title"
          tabindex="-1"
          v-text="listTitle"
        />
        <li v-if="!sample.length" v-text="emptyTitle" />
        <li
          v-for="(item, index) in sample"
          :key="item.id"
          :ref="'item' + index"
          class="select-list-item"
          :class="currentSelect === index && 'selected'"
          id="select-list-item"
          :tabindex="-index - 2"
          @click="selectItem(item)"
          v-text="item.title"
        />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AutocompleteComponent',
  props: {
    options: {
      type: Array,
      required: false,
      default: () => [],
    },
    placeholder: {
      type: String,
      required: false,
      default: 'text',
    },
    listTitle: {
      type: String,
      required: false,
      default: 'title',
    },
    emptyTitle: {
      type: String,
      required: false,
      default: 'empty',
    },
  },
  emits: ['input'],
  data: () => ({
    inputValue: '',
    savedValue: '',
    focus: false,
    currentSelect: 0,
  }),
  methods: {
    clearInput() {
      this.inputValue = '';
      this.lastValue = '';
      this.currentSelect = 0;
    },
    incCurrentSelect() {
      if (this.currentSelect < this.sample.length - 1) {
        this.currentSelect++;
        this.focusList();
      }
    },
    decCurrentSelect() {
      if (this.currentSelect > 0) {
        this.currentSelect--;
        this.focusList();
      }
    },
    focusList() {
      if (!this.$refs['item' + this.currentSelect]) return;
      this.$refs['item' + this.currentSelect][0].focus();
      this.$refs.input.focus();
    },
    setFocus() {
      this.focus = true;
    },
    checkEmpty(event) {
      this.inputValue = event.target.value;
      this.currentSelect = 0;
      if (!this.inputValue) {
        this.lastValue = '';
      }
    },
    blur(event) {
      const arr = ['select-list', 'select-list-item'];
      if (
        !event ||
        !event.relatedTarget ||
        !arr.includes(event.relatedTarget.id)
      ) {
        this.inputValue = this.inputValue ? this.lastValue : '';
        this.currentSelect = 0;
        this.$refs.input.blur();
        this.focus = false;
        return;
      }
      if (event.relatedTarget.id === 'select-list')
        return this.$refs.input.focus();
    },
    selectItem(item) {
      if (!item || !item.title) return;
      this.lastValue = item.title;
      this.inputValue = item.title;
      this.blur();
    },
  },
  computed: {
    lastValue: {
      get() {
        return this.savedValue;
      },
      set(value) {
        this.savedValue = value;
        this.$emit('input', value);
      },
    },
    sample() {
      return this.options.filter((item) => {
        if (
          item.title.toLowerCase().startsWith(this.inputValue.toLowerCase())
        ) {
          return item;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
p {
  padding: 0 !important;
  margin: 0 !important;
}
.wrapper {
  position: relative;
  height: 54px;
  width: 100%;

  .appearance {
    $size: 8px;
    position: absolute;
    box-sizing: border-box;
    top: calc(50% - $size * 0.75);
    right: calc(14px + 1.4 * $size / 4);
    width: $size;
    height: $size;
    border: solid #757f93;
    border-width: 0 2px 2px 0;
    pointer-events: none;
    transform-origin: 75% 75%;
    transform: rotate(45deg);
    transition: 0.3s cubic-bezier(0.55, 0.8, 0.5, 1);

    &.rotate {
      transform: rotate(225deg);
    }
  }

  .close {
    position: absolute;
    right: 45px;
    top: calc(50% - 1.4 * 14px / 2);
    width: 14px;
    height: 14px;
    cursor: pointer;

    &:before,
    &:after {
      position: absolute;
      left: 6px;
      content: ' ';
      height: 18px;
      width: 2px;
      background-color: #757f93;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
  }

  .input {
    height: 100%;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    padding: 22px 65px 8px 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    background: #f2f8ff;
    &::placeholder {
      opacity: 0;
      color: #9f9f9f;
    }
    &:focus {
      background: none;
      outline: 1px solid #1160ff;
      &::placeholder {
        opacity: 1;
      }
      + .label {
        color: #9f9f9f;
      }
    }
  }
  .label {
    position: absolute;
    top: calc(50% - 24px / 2);
    left: 20px;
    font-size: 16px;
    line-height: 24px;
    color: #757f93;
    pointer-events: none;
    transform-origin: top left;
    transition: 0.3s cubic-bezier(0.55, 0.8, 0.5, 1);

    &.input-modified {
      transform: translateY(-7px) scale(0.75);
    }
  }

  .list {
    position: absolute;
    width: 100%;
    height: 280px;
    overflow-y: auto;
    top: calc(100% + 8px);
    cursor: pointer;
    background: #ffffff;
    box-shadow: 0px 14px 24px rgba(31, 49, 73, 0.25);
    border-radius: 5px;
    z-index: 900;

    &::-webkit-scrollbar {
      width: 5px;
      background-color: #f1f4f9;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #387aff;
      border-radius: 5px;
    }

    ul {
      margin: 0;
      padding: 0;

      li {
        list-style-type: none;
        padding: 4px 14px;
        font-size: 14px;
        line-height: 22px;

        &:hover {
          background: #f2f8ff;
        }

        &.selected {
          background: #f2f8ff;
        }

        &.list-title {
          pointer-events: none;
          border-bottom: 1px solid #9cbdff;
          color: #808080;
          font-size: 13px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
