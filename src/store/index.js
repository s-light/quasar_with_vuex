import Vue from 'vue'
import Vuex from 'vuex'

import VueNativeSock from 'vue-native-websocket'

// import example from './module-example'
import appconfig from './appconfig'

import PluginMapBind from '../plugins/mapBind.js'

// Use a new variable and export values to change default behavior.
let store = null

// https://github.com/nathantsoi/vue-native-websocket#readme
Vue.use(Vuex)
Vue.use(VueNativeSock, 'ws://localhost:9090', {
    store: store,
    // format: 'json',
    protocol: '',
    // (Boolean) whether to reconnect automatically (false)
    reconnection: true,
    // (Number) number of reconnection attempts before giving up (Infinity),
    reconnectionAttempts: 5,
    // (Number) how long to initially wait before attempting a new (1000)
    reconnectionDelay: 3000
})

Vue.use(PluginMapBind)

/*
* If not building with SSR mode, you can
* directly export the Store instantiation;
*
* The function below can be async too; either use
* async/await or return a Promise which resolves
* with the Store instance.
*/

export default function (/* { ssrContext } */) {
    const Store = new Vuex.Store({
        modules: {
            // add store reference here
            appconfig
        },

        // enable strict mode (adds overhead!)
        // for dev mode and --debug builds only
        strict: process.env.DEBUGGING
    })

    if (process.env.DEV && module.hot) {
        module.hot.accept(['./appconfig'], () => {
            const newAppConfig = require('./appconfig').default
            Store.hotUpdate({ modules: { appconfig: newAppConfig } })
        })
    }

    // add this so that we export store
    store = Store

    return Store
}

// add this line to access store wherever you need
export { store }
