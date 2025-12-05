import { ref } from 'vue'

import type { Ref, ComputedRef } from 'vue'
import type { NavigationMenuItem } from '@nuxt/ui'

export const PageMap: Record<string, string> = {
    index: 'Dashboard',
    settings: 'Settings',
}

interface Navigation {
    isCollapsed: Ref<boolean>
    toggle: Record<string, string>
    items: ComputedRef<NavigationMenuItem[]>
}

export const useNavigation = (): Navigation => {
    const isCollapsed = ref<boolean>(false)

    const toggle = {
        color: 'primary',
        variant: 'subtle',
        class: 'rounded-full',
    } as const

    const items = computed<NavigationMenuItem[]>(() => [
        {
            label: PageMap.index,
            icon: 'i-lucide-home',
            href: '/',
        },
        {
            label: PageMap.settings,
            icon: 'i-lucide-settings',
            href: '/settings',
        },
    ])

    return { toggle, items, isCollapsed }
}
