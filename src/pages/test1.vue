<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <h2>Test1</h2>
        <h3>globalMessage: '{{ globalMessage }}'</h3>
        <input type="text" name="" value="" v-model="globalMessageX">
    </q-page>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'PageTest',
    computed: {
        // https://jerickson.net/basics-of-mapstate-vuex/
        // https://github.com/quasarframework/quasar-play/blob/master/src/layouts/layout-demo.vue#L114
        ...mapState('appconfig', ['globalMessage']),
        // same as
        globalMessageX: {
            get () {
                return this.$store.state.appconfig.globalMessage
            },
            set (val) {
                this.$store.commit('appconfig/setGlobalMessage', val)
            }
        }
    }
}
</script>
