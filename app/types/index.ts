declare global {
    interface IncomeData {
        id: number
        name: string
        amount: string
        frequency: 'weekly' | 'bi-weekly' | 'monthly'
        payday: UTCStr
    }

    type UTCStr =
        `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`
}

export type { IncomeData, UTCStr }
