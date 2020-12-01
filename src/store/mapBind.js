// inspired by https://stackoverflow.com/a/48447361/574981

import { mapState } from 'vuex'

// export const mapBind = (base, params = {}) => (
// export const mapBind = (base, params) => (
export const mapBind = function (base, params) {
    // helper function for vuex
    // create setter and getter functions for given store and properties
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
// )
}

// ------------------------------------------
// usage:
// import { mapBinder } from 'store/mapBind.js';
//
// export default {
//     name: 'ComponentName',
//     computed: {
//         ...mapBinder('appconfig', ['globalMessage', 'someOtherThing'])
//     },
// }
