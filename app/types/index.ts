declare global {
    interface FBAModel {
        id: number
        name: string
        author: string
        data: {
            income: IncomeData[]
            debt: Record<string, string>[] // Empty array, type unclear from context
            buckets: BucketData[]
        }
        _created: string
        _updated: string
    }

    interface IncomeData {
        id: number
        name: string
        amount: string
        frequency: Frequency
        payday: UTCStr
    }

    interface BucketData {
        id: number
        name: string
        nickname: string
        items: {
            id: number
            name: string
            amount: number
            frequency: Frequency
            date: UTCStr
        }[]
    }

    enum Frequency {
        'weekly',
        'bi-weekly',
        'monthly',
    }

    type UTCStr =
        `${number}-${number}-${number}T${number}:${number}:${number}.${number}Z`
}

export type { FBAModel, IncomeData, BucketData, Frequency, UTCStr }
