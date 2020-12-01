
import { mapState } from 'vuex'

export default {
    install: (Vue, options) => {
        console.log('install mapBind plugin')
        // Plugin code goes here
        Vue.prototype.$mapBind = function (base, params) {
        // Vue.mapBind = function (base, params) {
            // console.log('mapBind called')
            // inspired by https://stackoverflow.com/a/48447361/574981
            function capitalizeFirstLetter (string) {
                // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
                return string.charAt(0).toUpperCase() + string.slice(1)
            }

            const map = mapState(base, params)
            const result = {}
            // console.log(map)
            for (const [key, value] of Object.entries(map)) {
                // console.log('key', key)
                // console.log('value', value)
                result[key] = {
                    get: value
                }
                result[key].set = function (val) {
                    // this.$store.commit('appconfig/setGlobalMessage', val)
                    const mutationName = 'set' + capitalizeFirstLetter(key)
                    this.$store.commit(base + '/' + mutationName, val)
                }
            }
            // console.log(result)
            return result
        }
    }
}

// PluginMapBind.install = function (Vue, options) {
//     // 1. add global method or property
//     Vue.mapBind = function (base, params) {
//         // inspired by https://stackoverflow.com/a/48447361/574981
//         function capitalizeFirstLetter (string) {
//             // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
//             return string.charAt(0).toUpperCase() + string.slice(1)
//         }
//
//         const map = mapState(base, params)
//         const result = {}
//         console.log(map)
//         for (const [key, value] of Object.entries(map)) {
//             console.log('key', key)
//             console.log('value', value)
//             result[key] = {
//                 get: value
//             }
//             result[key].set = function (val) {
//                 // this.$store.commit('appconfig/setGlobalMessage', val)
//                 const mutationName = 'set' + capitalizeFirstLetter(key)
//                 this.$store.commit(base + '/' + mutationName, val)
//             }
//         }
//         console.log(result)
//         return result
//     }
//
//     // 4. add an instance method
//     Vue.prototype.$myMethod = function (methodOptions) {
//         // some logic ...
//     }
// }

// ------------------------------------------
// usage:
// src/store/index.js

// import { mapBinder } from 'store/utils.js';
//
// export default {
//     name: 'ComponentName',
//     computed: {
//         ...mapBinder('appconfig', ['globalMessage'])
//     },
// }
