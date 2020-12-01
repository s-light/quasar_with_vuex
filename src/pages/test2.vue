<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <h1>Test2</h1>
        <h2>globalMessage '{{ globalMessage }}'</h2>
        <h2>globalMessageX '{{ globalMessageX }}'</h2>
        <input type="text" name="" value="" v-model="globalMessage">
    </q-page>
</template>

<script>
// import { mapState, mapMutations, mapActions } from 'vuex'
import { mapBind } from '../store/utils.js'

export default {
    name: 'PageTest',
    computed: {
        // https://jerickson.net/basics-of-mapstate-vuex/
        // https://github.com/quasarframework/quasar-play/blob/master/src/layouts/layout-demo.vue#L114
        ...mapBind('appconfig', ['globalMessage']),
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
    // https://techformist.com/avoid-vuex-boilerplate-pathify/
    // methods: {
    //     ...mapMutations('appconfig', ['setGlobalMessage']),
    //     ...mapActions('appconfig', ['getFromServer'])
    //     // actions and mutations from store are now accessible
    //     //   .. as any other methods
    // }
}
</script>
