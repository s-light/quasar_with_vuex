<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <img
        alt="Quasar logo"
        src="~assets/quasar-logo-full.svg"
        >
        <p> <br> </p>
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
import { mapBind } from '../store/utils.js'

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
        ...mapBind('appconfig', ['globalMessage', 'package_selected', 'package_options'])
    }
    // computed: this.mapBind()
}
</script>
