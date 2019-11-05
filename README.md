# Vuetify Phone Input

Please refer to the 
[TextField](https://vuetifyjs.com/en/components/text-fields)
if you want to see which inherited props will be available.

### Props:

| Name        | Type           | Default  |
| ------------- |:-------------:| -----:|
| `value`|`string`| `''`    |
| `countries`|`[]`|[countries](https://github.com/kingscode/vuetify-phone-input/blob/master/src/countries.ts)|
| `type`|`string`|`tel`|
| `placeholder`|`string`|`#`|
| `countryCode`|`string`-`number`|`''`|
| `prependCountryCode`|`boolean`|`true`|
| `returnWithCountryCode`|`boolean`|`true`|

### Events:
| Name        | Return value           | What  |
| ------------- |:-------------:| -----:|
| `@country`|`string`| The new selected country code    |
| `@phone`|`string`| The phone number, if `returnWithCountryCode` is enabled; prefix with: `00 + countryCode`. Equivalent to `@change` event, but with additional features |

I don't recommend using all of the default countries on a large page with a lot of bindings,
 it can slow things down if everything in the list is rendered.
  Therefore, you can always choose to set `prependCountryCode` to `false`
