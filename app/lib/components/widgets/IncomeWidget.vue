<script setup lang="ts">
import { useLocale } from '~/lib/composables/useLocale'
import type { TableColumn } from '@nuxt/ui'

interface Props {
    income: IncomeData[]
}

const { income } = defineProps<Props>()

const { getCurrency, getDate } = useLocale()

const columns: TableColumn<IncomeData>[] = [
    {
        accessorKey: 'label',
        header: 'Income Source',
        cell: ({ row }) => row.getValue('label') ?? '',
    },
    {
        accessorKey: 'amount',
        header: 'Paycheck',
        cell: ({ row }) =>
            row.getValue('amount') ? getCurrency(row.getValue('amount')) : '',
    },
    {
        accessorKey: 'payday',
        header: 'Pay Date',
        cell: ({ row }) =>
            row.getValue('payday') ? getDate(row.getValue('payday')) : '',
    },
]
</script>

<template>
    <UCard>
        <template #header>
            <h2 class="text-xl font-bold">Total Income</h2>
        </template>
        <div>
            <UTable :data="income" :columns="columns" class="flex-1" />
        </div>
    </UCard>
</template>
