import { invoke } from '@tauri-apps/api/core'

interface UseData {
    getData: <T>(tauriEndpoint: string) => Promise<T>
}

export const useData = (): UseData => {
    async function getData<T>(tauriEndpoint: string): Promise<T> {
        try {
            const data = await invoke<ArrayBuffer | string>(tauriEndpoint)

            if (data instanceof ArrayBuffer) {
                return JSON.parse(new TextDecoder().decode(data))
            }

            return JSON.parse(data)
        } catch {
            throw new Error(`Failed to get data from: ${tauriEndpoint}`)
        }
    }

    return { getData }
}
