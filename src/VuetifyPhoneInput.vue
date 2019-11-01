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
            counter: {
                type: Number,
                default: () => 13,
            },
        },
    });
</script>
