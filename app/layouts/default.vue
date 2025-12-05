<script setup lang="ts">
import { useNavigation, PageMap } from '~/lib/registries/PageMap'

const route = useRoute()
const appConfig = useAppConfig()

const { isCollapsed, toggle, items } = useNavigation()
</script>

<template>
    <UDashboardGroup>
        <UDashboardSidebar v-model:collapsed="isCollapsed" collapsible :toggle>
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
                <UDashboardSidebarCollapse block variant="soft" />
            </template>
            <UNavigationMenu :items orientation="vertical" />
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
