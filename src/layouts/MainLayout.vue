<template>
    <q-layout view="lHh Lpr lFf">
        <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            content-class="bg-grey-1"
        >
            <q-list>
                <EssentialLink
                    v-for="link in essentialLinks"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
    {
        title: 'Welcome',
        icon: 'home',
        link: '/'
    },
    {
        title: 'Test1',
        icon: 'aspect_ratio',
        link: 'test1'
    },
    {
        title: 'Test2',
        icon: 'code',
        link: 'test2'
    }
]

export default {
    name: 'MainLayout',
    components: { EssentialLink },
    data () {
        return {
            leftDrawerOpen: false,
            essentialLinks: linksData
        }
    }
}
</script>
