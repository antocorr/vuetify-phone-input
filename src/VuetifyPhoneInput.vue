<script lang="ts">
    import {PropValidator} from 'vue/types/options.js';
    import VTextField from 'vuetify/lib/components/VTextField/VTextField';
    import VSelect from 'vuetify/lib/components/VSelect/VSelect';
    import countries from './countries';

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
                internalCountryCode: null,
            };
        },
        watch: {
            countryCode: {
                handler(code) {
                    this.internalCountryCode = code;
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
                        placeholder: this.$vuetify.lang.t('vuetify-phone-input.country-placeholder'),
                        value: String(this.countryCode),
                    },
                    on: {
                        input: this.selectCountry,
                    },
                    class: {
                        'pt-0': true,
                        'mt-0': true,
                        'mr-1': true,
                    },
                });
            },
            onInput(e) {
                VTextField.options.methods.onInput.call(this, e);
                const final = this.returnWithCountryCode ? this.prefixCountryCode() : this.internalValue;
                this.$emit('phone', final);
            },
            prefixCountryCode() {
                return '00' + this.internalCountryCode + this.internalValue;
            },
            selectCountry(code: string) {
                this.$emit('country', this.internalCountryCode = code);

                if (this.returnWithCountryCode) this.$emit('phone', this.prefixCountryCode());
            },
        },
    });
</script>
