import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    doctors: [],
    currentDoctor: '',
  },
  getters: {},
  mutations: {
    addDoctors(state, newDoctors) {
      state.doctors = [...newDoctors];
    },
    setCurrentDoctor(state, doctor) {
      state.currentDoctor = doctor;
    },
  },
  actions: {
    setCurrentDoctor({ commit }, doctor) {
      return commit('setCurrentDoctor', doctor);
    },

    fetchDoctors({ commit }) {
      const doctors = [
        {
          title: 'Аллерголог',
          id: '9440',
          url: 'vrachi/allergolog',
          type: 'spec',
        },
        {
          title: 'Андролог',
          id: '11690',
          url: 'vrachi/androlog',
          type: 'spec',
        },
        {
          title: 'Артролог',
          id: '7757',
          url: 'vrachi/artrolog',
          type: 'spec',
        },
        {
          title: 'Вегетолог',
          id: '8385',
          url: 'vrachi/vegetolog',
          type: 'spec',
        },
        {
          title: 'Вертебролог',
          id: '7758',
          url: 'vrachi/vertebrolog',
          type: 'spec',
        },
        {
          title: 'Вертеброневролог',
          id: '7759',
          url: 'vrachi/vertebronevrolog',
          type: 'spec',
        },
        {
          title: 'Висцеральный массажист',
          id: '8170',
          url: 'vrachi/visczeralnyj-massazhist',
          type: 'spec',
        },
        {
          title: 'Висцеральный терапевт',
          id: '7760',
          url: 'vrachi/visczeralnyij-terapevt',
          type: 'spec',
        },
        {
          title: 'Врач восточной медицины',
          id: '7763',
          url: 'vrachi/vrach-vostochnoj-mediczinyi',
          type: 'spec',
        },
        {
          title: 'Врач китайской медицины',
          id: '7764',
          url: 'vrachi/vrach-kitayskoy-mediciny',
          type: 'spec',
        },
        {
          title: 'Врач ЛФК',
          id: '7761',
          url: 'vrachi/vrach-lfk',
          type: 'spec',
        },
        {
          title: 'Врач общей практики',
          id: '7765',
          url: 'vrachi/vrach-obshhey-praktiki',
          type: 'spec',
        },
        {
          title: 'Врач первичного приёма',
          id: '7766',
          url: 'vrachi/vrach-pervichnogo-priema',
          type: 'spec',
        },
        {
          title: 'Врач тибетской медицины',
          id: '7767',
          url: 'vrachi/vrach-tibetskoy-mediciny',
          type: 'spec',
        },
        {
          title: 'Врач УВТ',
          id: '7762',
          url: 'vrachi/vrach-uvt',
          type: 'spec',
        },
        {
          title: 'Врач УЗИ',
          id: '8386',
          url: 'vrachi/vrach-uzi',
          type: 'spec',
        },
        {
          title: 'Гастроэнтеролог',
          id: '7768',
          url: 'vrachi/gastroenterolog',
          type: 'spec',
        },
        {
          title: 'Гериатр',
          id: '8374',
          url: 'vrachi/geriatr',
          type: 'spec',
        },
        {
          title: 'Геронтолог',
          id: '8375',
          url: 'vrachi/gerontolog',
          type: 'spec',
        },
        {
          title: 'Гинеколог',
          id: '8387',
          url: 'vrachi/ginekolog',
          type: 'spec',
        },
        {
          title: 'Гинеколог-эндокринолог',
          id: '8388',
          url: 'vrachi/ginekolog-endokrinolog',
          type: 'spec',
        },
        {
          title: 'Гипнотерапевт',
          id: '7771',
          url: 'vrachi/gipnoterapevt',
          type: 'spec',
        },
        {
          title: 'Гирудолог',
          id: '7772',
          url: 'vrachi/girudolog',
          type: 'spec',
        },
        {
          title: 'Гирудотерапевт',
          id: '7773',
          url: 'vrachi/girudoterapevt',
          type: 'spec',
        },
        {
          title: 'Гомеопат',
          id: '7774',
          url: 'vrachi/gomeopat',
          type: 'spec',
        },
      ];

      return new Promise((resolve) => {
        setTimeout(() => {
          commit('addDoctors', doctors);
          resolve();
        }, 500);
      });
    },
  },
  modules: {},
});
