<script setup lang="ts">
const posts = [
  {
    title: 'Welcome to Dur E Sabeeh Seed Corporation',
    date: '2026-09-25',
    excerpt: 'Our website is live. Add real announcements here as they happen.'
  }
]
</script>

<template>
  <div>
    <HeroSection title="News & Updates">
      <template #actions />
    </HeroSection>

    <section class="section space-y-6">
      <article v-for="p in posts" :key="p.title" class="card">
        <p class="text-xs text-gray-500">{{ p.date }}</p>
        <h3 class="mt-1 text-lg font-semibold text-[var(--color-brand-green)]">{{ p.title }}</h3>
        <p class="mt-2 text-sm text-gray-700">{{ p.excerpt }}</p>
      </article>
    </section>
  </div>
</template>
