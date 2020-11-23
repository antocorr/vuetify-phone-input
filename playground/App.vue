<template>
  <v-app>
    <VuetifyPhoneInput :countries="countries"
                       @country="onCountry"
                       @phone="onPhone"/>
  </v-app>
</template>

<script lang="js">

import VuetifyPhoneInput from '@/VuetifyPhoneInput.vue';

export default {
  name: 'App',
  components: {
    VuetifyPhoneInput,
  },
  computed: {
    countries: () => [ // we can now provide our own list of countries + codes. Defaults to all possible countries.
      {
        code: 31,
        name: 'NL',
      },
      {
        code: 32,
        name: 'BE',
      },
    ],
  },
  methods: {
    onCountry(country) { // callback when the consumer changed the country code.
      console.log(country); // 32
    },
    onPhone(phone) { // callback when the consumer changed the phone number
      console.log(phone); // +31612345678
    },
  },
};
</script>
