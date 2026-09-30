<script setup lang="ts">
import { getVarietiesByCrop } from '~/data/products'

const varieties = getVarietiesByCrop('other')
</script>

<template>
  <div>
    <HeroSection title="Other Crops" subtitle="Additional field crop varieties as our range expands.">
      <template #actions />
    </HeroSection>

    <section class="section">
      <div v-if="varieties.length === 0" class="card text-gray-600">
        No additional crop varieties are listed yet. Add one in
        <code class="rounded bg-gray-100 px-1">app/data/products.ts</code> with
        <code class="rounded bg-gray-100 px-1">crop: 'other'</code> and it will appear here automatically.
      </div>
      <div v-else class="grid gap-6 lg:grid-cols-2">
        <div v-for="v in varieties" :key="v.slug" class="card">
          <h3 class="text-lg font-semibold text-[var(--color-brand-green)]">{{ v.name }}</h3>
          <p class="mt-3 text-sm text-gray-700">{{ v.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
