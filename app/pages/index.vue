<script setup lang="ts">
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/core'
import IncomeWidget from '~/lib/components/widgets/IncomeWidget.vue'

const income = ref<IncomeData[]>([])

async function getData() {
    const jsonStr: string = await invoke('get_data')
    const { data } = JSON.parse(jsonStr)
    income.value = data.income
}

onMounted(() => {
    getData()
})
</script>

<template>
    <section class="grid gap-4 grid-flow-row grid-cols-4">
        <IncomeWidget :income="income" />
    </section>
</template>
