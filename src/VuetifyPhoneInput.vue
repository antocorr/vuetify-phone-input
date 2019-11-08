<script lang="ts">
    import {PropValidator} from 'vue/types/options.js';
    import VTextField from 'vuetify/lib/components/VTextField/VTextField';
    import VSelect from 'vuetify/lib/components/VSelect/VSelect';
    import countries from './countries';
    import {parsePhoneNumberFromString} from 'libphonenumber-js/min/';

    export default VTextField.extend({
        name: 'VuetifyPhoneInput',
        props: {
            value: {
                type: String,
                default: () => '',
                validator: (val) => {
                    return typeof val === 'string';
                },
            } as PropValidator<string>,
            type: {
                type: String,
                default: () => 'tel',
            },
            placeholder: {
                type: String,
                default: () => '#',
            },
            countries: {
                type: Array,
                default: () => [],
            },
            countryCode: {
                type: [Number, String],
                default: () => '',
            },
            prependCountryCode: {
                type: Boolean,
                default: () => true,
            },
            returnWithCountryCode: {
                type: Boolean,
                default: () => true,
            },
        },
        data: () => {
            return {
                internalCountryCode: '',
            };
        },
        watch: {
            value: {
                handler(value) {
                    this.parsePhoneNumber(value)
                },
                immediate: true,
            },
            countryCode: {
                handler(code) {
                    this.internalCountryCode = code;
                    this.parsePhoneNumber(this.internalValue);
                },
                immediate: true,
            },
        },
        methods: {
            genPrependSlot() {
                if (!this.prependCountryCode) return false;

                return this.genSelector();
            },
            genSelector() {
                const selections = this.countries.length ? this.countries : countries.sort((a, b) => Number(a.code) - Number(b.code));

                return this.$createElement(VSelect, {
                    props: {
                        items: selections.map((el) => {
                            return {
                                text: `${el.name} (+${el.code})`,
                                value: el.code,
                            }
                        }),
                        placeholder: this.placeholder,
                        value: this.internalCountryCode,
                    },
                    on: {
                        input: this.selectCountry,
                    },
                    class: {
                        'pt-0': true,
                        'mt-0': true,
                        'mr-1': true,
                    },
                    ref: 'countrySelector',
                });
            },
            onInput(e) {
                VTextField.options.methods.onInput.call(this, e);

                this.$emit('phone', this.internalValue);
            },
            onBlur(e) {
                VTextField.options.methods.onBlur.call(this, e);

                this.parsePhoneNumber(e.target.value);
            },
            prefixCountryCode() {
                return '+' + this.internalCountryCode + this.internalValue;
            },
            selectCountry(code: string) {
                this.$emit('country', this.internalCountryCode = code);

                if (this.returnWithCountryCode) this.$emit('phone', this.prefixCountryCode());
            },
            parsePhoneNumber(phone: string) {
                const phoneNumber = parsePhoneNumberFromString(phone);

                if (phoneNumber) {
                    this.lazyValue = phoneNumber.nationalNumber;
                    this.internalCountryCode = Number(phoneNumber.countryCallingCode);
                }
            },
        },
    });
</script>
