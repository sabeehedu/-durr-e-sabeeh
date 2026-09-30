<script setup lang="ts">
import { getVarietiesByCrop } from '~/data/products'

const varieties = getVarietiesByCrop('rice')
</script>

<template>
  <div>
    <HeroSection title="Rice Seed" subtitle="Basmati and non-Basmati varieties for different farming requirements.">
      <template #actions />
    </HeroSection>

    <section class="section grid gap-6 lg:grid-cols-2">
      <div v-for="v in varieties" :key="v.slug" class="card">
        <h3 class="text-lg font-semibold text-[var(--color-brand-green)]">{{ v.name }}</h3>
        <p class="mt-1 text-sm font-medium text-[var(--color-brand-gold)]">{{ v.tagline }}</p>
        <p class="mt-3 text-sm text-gray-700">{{ v.description }}</p>
        <ul class="mt-3 flex flex-wrap gap-2">
          <li v-for="t in v.traits" :key="t" class="rounded-full bg-[var(--color-brand-green)]/10 px-3 py-1 text-xs text-[var(--color-brand-green)]">
            {{ t }}
          </li>
        </ul>
        <p class="mt-3 text-xs text-gray-500">Pack sizes: {{ v.packSizes.join(', ') }}</p>
      </div>
    </section>
  </div>
</template>
