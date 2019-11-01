<script lang="ts">
    import VTextField from 'vuetify/lib/components/VTextField';
    import {PropValidator} from 'vue/types/options.js';

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
                default: () => 'text',
            },
            placeholder: {
                type: String,
                default: () => 'Input your phone number here'
            },
            counter: {
                type: Number,
                default: () => 13,
            },
            countryCode: {
                type: String,
                default: () => '31',
            },
            countryCodeRequired: {
                type: Boolean,
                default: () => false,
            },
            prependCountryCode: {
                type: Boolean,
                default: () => true,
            },
            allowCharacteristics: {
                type: Boolean,
                default: () => false,
            },
            disableRules: {
                type: Boolean,
                default: () => false,
            },
        },
        computed: {
            // defaultRules() {
            //     if (this.disableRules) return [...this.rules];
            //
            //     return [
            //         () => this.matchesCount() || 'Count does not match',
            //         () => this.matchesCountryCode() || 'Country code does not match',
            //         ...this.rules];
            // },
            // matchesCount() {
            //     return this.counter > this.internalValue;
            // },
            // matchesCountryCode() {
            //     if (!this.countryCodeRequired) return true;
            //
            //     return (this.internalValue as string).startsWith(this.countryCode);
            // },
        },
        methods: {
            genPrependSlot() {
                if (!this.prependCountryCode) return false;

                return this.genSlot('prepend', 'outer', '+' + this.countryCode);
            },
        },
    });
</script>
