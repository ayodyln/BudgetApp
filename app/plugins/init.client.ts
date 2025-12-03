import { invoke } from '@tauri-apps/api/core'

// plugins/hooks.client.ts
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:beforeMount', () => {
        invoke('show_main_window')
    })
})
