# Vuetify Phone Input

### Example

![Vuetify Phone Input](https://i.imgur.com/CZ0krCz.png)

Please refer to the 
[TextField](https://vuetifyjs.com/en/components/text-fields)
if you want to see which inherited props will be available.

### Props

| Name        | Type           | Default  |
| ------------- |:-------------:| -----:|
| `value`|`string`| `''`    |
| `countries`|`[]`|[countries](https://github.com/kingscode/vuetify-phone-input/blob/master/src/countries.ts)|
| `type`|`string`|`tel`|
| `placeholder`|`string`|`#`|
| `countryCode`|`string`-`number`|`''`|
| `prependCountryCode`|`boolean`|`true`|

### Events:
| Name        | Return value           | What  |
| ------------- |:-------------:| -----:|
| `@country`|`string`| The new selected country code    |
| `@phone`|`string`| Equivalent to `@change` event, but with additional features. Gets called on blur |


### Installation

As of now, you can only use this plugin by declaring it globally as so:

```js
import Vue from 'vue';
import VuetifyPhoneInput from '@kingscode/vuetify-phone-input'

Vue.use(VuetifyPhoneInput);
```

Now you can use this component everywhere without having to include it.


### Usage

```js
<template>
    <div>
        <VuetifyPhoneInput :countries="countries"
                           @country="onCountry"
                           @phone="onPhone"/>
    </div>
</template>

<script lang="js">

export default {
    name: 'Home',
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
```

If the consumer enters the following: `+32612345678` when the current selected country does not match, the country will be adjusted accordingly.

Remember that this Phone Input is derived from the `VTextField` from Vuetify, meaning that you can still use the `error-messages`, or `placeholder` attributes for example.
