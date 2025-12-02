<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
    {
        label: 'Home',
        icon: 'i-lucide-house',
        href: '/',
    },
    {
        label: 'Settings',
        icon: 'i-lucide-inbox',
        href: '/settings',
    },
]

const TOGGLES = {
    color: 'primary',
    variant: 'subtle',
    class: 'rounded-full',
} as const
</script>

<template>
    <UDashboardGroup>
        <UDashboardSidebar :toggle="TOGGLES">
            <template #header="{ collapsed }">
                <UIcon
                    v-if="!collapsed"
                    name="i-simple-icons-nuxtdotjs"
                    class="size-5 text-primary mx-auto"
                />
                <UIcon
                    v-else
                    name="i-simple-icons-nuxtdotjs"
                    class="size-5 text-primary mx-auto"
                />
            </template>
            <UNavigationMenu :items="items" orientation="vertical" />
        </UDashboardSidebar>

        <UDashboardPanel resizable>
            <template #header>
                <UDashboardNavbar title="Dashboard" />
            </template>
            <template #body>
                <slot />
            </template>
        </UDashboardPanel>
    </UDashboardGroup>
</template>
