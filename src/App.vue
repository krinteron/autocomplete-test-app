<template>
  <div id="app">
    <div class="container">
      <div class="find-input">
        <AutocompleteComponent
          :options="doctors"
          placeholder="Врач, заболевания, услуги"
          list-title="Специальность"
          empty-title="Не найдено специальностей"
          @input="setCurrentDoctor"
        />
      </div>
      <div class="find-btn">
        <BlueButton text="Найти" @click="findDoctor" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import AutocompleteComponent from './components/AutocompleteComponent.vue';
import BlueButton from './components/BlueButton.vue';

export default {
  name: 'App',
  components: {
    AutocompleteComponent,
    BlueButton,
  },
  methods: {
    findDoctor() {
      if (this.currentDoctor) {
        alert(`${this.currentDoctor} is coming!`);
      }
    },
    setCurrentDoctor(doctor) {
      this.$store.dispatch('setCurrentDoctor', doctor);
    },
  },
  computed: mapState({
    doctors: (state) => state.doctors,
    currentDoctor: (state) => state.currentDoctor,
  }),
  async created() {
    await this.$store.dispatch('fetchDoctors');
  },
};
</script>

<style lang="scss">
#app {
  font-family: Open Sans, Arial, sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #1f3149;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px auto;
  max-width: 600px;

  .find-input {
    width: 424px;
  }

  .find-btn {
    min-width: 105px;
  }
}
</style>
