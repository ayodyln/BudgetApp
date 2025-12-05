<script setup lang="ts">
import { ref } from 'vue'
import { useData } from '~/lib/composables/useData'
import IncomeWidget from '~/lib/components/widgets/IncomeWidget.vue'
import GoalAndActualWidget from '~/lib/components/widgets/GoalAndActualWidget.vue'
import BucketsWidget from '~/lib/components/widgets/BucketsWidget.vue'

// Utils
const { getData } = useData()

// State
const income = ref<IncomeData[]>([])
const buckets = ref<BucketData[]>([])

// Methods
async function initPage() {
    const { data } = await getData<FBAModel>('get_fba_data')
    income.value = data.income
    buckets.value = data.buckets
}

// Lifecycle
onMounted(initPage)
</script>

<template>
    <section class="grid gap-4 grid-flow-row grid-cols-4">
        <IncomeWidget :income class="col-span-2" />
        <GoalAndActualWidget class="col-span-2" />
        <BucketsWidget :buckets class="col-span-4" />
    </section>
</template>
