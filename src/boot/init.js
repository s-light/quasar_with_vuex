// import something here

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async (/* { app, router, Vue ... } */) => {
//   // something to do
// }

// https://quasar.dev/quasar-cli/boot-files#Anatomy-of-a-boot-file
// https://forum.quasar-framework.org/topic/6605/where-to-initialize-vuex-store-at-app-start-up?_=1605463955183
export default async ({ app, router, Vue, store }) => {
    console.info('boot: init entered', store)
    await store.dispatch('appconfig/getFromServer')
    console.info('boot: init exited')
}
