<script setup lang="ts">
import { useNavigation, PageMap } from '~/lib/registries/PageMap'

const route = useRoute()
const appConfig = useAppConfig()
const { TOGGLE, ITEMS } = useNavigation()
</script>

<template>
    <UDashboardGroup>
        <UDashboardSidebar collapsible :toggle="TOGGLE">
            <template #header="{ collapsed }">
                <UIcon
                    name="i-game-icons:ancient-ruins"
                    class="size-5 text-primary mx-auto"
                />
                <template v-if="!collapsed">
                    {{ appConfig.title }}
                </template>
            </template>
            <template #footer>
                <UDashboardSidebarCollapse block />
            </template>
            <UNavigationMenu :items="ITEMS" orientation="vertical" />
        </UDashboardSidebar>

        <UDashboardPanel resizable>
            <template #header>
                <UDashboardNavbar :title="PageMap[String(route.name)]" />
            </template>
            <template #body>
                <slot />
            </template>
        </UDashboardPanel>
    </UDashboardGroup>
</template>
