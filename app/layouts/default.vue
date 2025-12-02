<script setup lang="ts">
import LayoutHeader from '~/lib/components/LayoutHeader.vue'
import LayoutFooter from '~/lib/components/LayoutFooter.vue'
import LayoutSideNav from '~/lib/components/LayoutSideNav.vue'
</script>

<template>
    <section id="layout__wrapper" class="bg-gray-50/50 flex flex-col flex-1">
        <LayoutHeader id="layout__header" />
        <div id="layout__content-wrapper" class="flex">
            <LayoutSideNav id="layout__side-nav" />
            <UMain id="layout__main" class="bg-amber-500">
                <slot />
            </UMain>
            <LayoutFooter id="layout__footer" />
        </div>
    </section>
</template>
