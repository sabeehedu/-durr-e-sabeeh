<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  to: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="card block">
    <div class="mb-3 text-3xl">{{ icon }}</div>
    <h3 class="text-lg font-semibold text-[var(--color-brand-green)]">{{ title }}</h3>
    <p class="mt-2 text-sm text-gray-600">{{ description }}</p>
    <span class="mt-4 inline-block text-sm font-medium text-[var(--color-brand-gold)]">
      Learn more →
    </span>
  </NuxtLink>
</template>
