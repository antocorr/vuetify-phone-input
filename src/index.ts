import VuetifyPhoneInput from './VuetifyPhoneInput.vue'
import './plugins/vuetify';

const install = (Vue: any, options: {}) => {
    Vue.component('VuetifyPhoneInput', VuetifyPhoneInput);
};

export default {
    install,
    VuetifyPhoneInput,
};
