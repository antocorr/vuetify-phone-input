import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify, {
    // components: {
    //     VTextField,
    //     VSelect,
    // },
});

export default new Vuetify({
    treeShake: [
        'VTextField',
        'VSelect',
    ],
});
