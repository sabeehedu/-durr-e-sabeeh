<script setup lang="ts">
const dealers = [
  { name: 'Add your first dealer', city: 'City', phone: '03XX-XXXXXXX' }
]
</script>

<template>
  <div>
    <HeroSection title="Our Dealers" subtitle="Find an authorized Dur E Sabeeh dealer near you.">
      <template #actions />
    </HeroSection>

    <section class="section">
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div v-for="d in dealers" :key="d.name" class="card">
          <p class="font-semibold text-[var(--color-brand-green)]">{{ d.name }}</p>
          <p class="mt-1 text-sm text-gray-600">{{ d.city }}</p>
          <p class="text-sm text-gray-600">{{ d.phone }}</p>
        </div>
      </div>
      <p class="mt-6 text-sm text-gray-500">
        Edit the <code class="rounded bg-gray-100 px-1">dealers</code> list in this file, or move it to
        <code class="rounded bg-gray-100 px-1">app/data/dealers.ts</code> the same way seed varieties are
        structured once you have a real list.
      </p>
    </section>
  </div>
</template>
