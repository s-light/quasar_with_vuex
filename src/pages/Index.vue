<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
        >
        <p>
            <br>
        </p>
        <p>
            test_message: '{{ test_message }}'<br>
            globalMessage: '{{ globalMessage }}'<br>
            package_options: '{{ package_options }}'<br>
        </p>
        <input type="text" name="" value="" v-model="test_message">
        <input type="text" name="" value="" v-model="globalMessage">
    </q-page>
</template>

<script>
import { mapBind } from '../store/mapBind.js'

export default {
    name: 'PageIndex',
    data () {
        return {
            test_message: 'Hello World'
        }
    },
    // https://techformist.com/access-vuex-store-quasar/
    computed: {
        // globalMessage () { return this.$store.globalMessage },
        // // mix this into the outer object with the object spread operator
        // // ...mapState([
        // //     // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
        // //     // map this.count to store.state.count
        // //     // 'package_selected',
        // //     // 'package_options'
        // // ]),
        // test () { return 0 }
        // globalMessage: {
        //     get () {
        //         return this.$store.state.appconfig.globalMessage
        //     },
        //     set (val) {
        //         this.$store.commit('appconfig/setGlobalMessage', val)
        //     }
        // },
        // use the global installed plugin
        // ...this.$mapBind('appconfig', ['globalMessage', 'package_selected', 'package_options'])
        // ..but this seems to not work.
        //
        // normal import used:
        ...mapBind('appconfig', ['globalMessage', 'package_selected', 'package_options'])
    }
    // computed: this.mapBind()
}
</script>
