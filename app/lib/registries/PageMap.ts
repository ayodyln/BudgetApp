import type { NavigationMenuItem } from '@nuxt/ui'

export const PageMap: Record<string, string> = {
    index: 'Dashboard',
    settings: 'Settings',
}

export const useNavigation = () => {
    const TOGGLE = {
        color: 'primary',
        variant: 'subtle',
        class: 'rounded-full',
    } as const

    const ITEMS: NavigationMenuItem[] = [
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
    ] as const

    return { TOGGLE, ITEMS }
}
