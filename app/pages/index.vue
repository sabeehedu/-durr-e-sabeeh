<script setup lang="ts">
const steps = [
  { icon: 'mdi:flask-outline', title: 'Research', text: 'Breeding and trials suited to Punjab conditions.' },
  { icon: 'mdi:filter-variant', title: 'Selection', text: 'Only top-performing lines advance.' },
  { icon: 'mdi:test-tube', title: 'Testing', text: 'Germination and purity testing every lot.' },
  { icon: 'mdi:certificate-outline', title: 'Certification', text: 'Independently certified seed class.' },
  { icon: 'mdi:account-group-outline', title: 'Farmers', text: 'Delivered through our dealer network.' }
]
</script>

<template>
  <div>
    <HeroSection
      title="Better Seed. Stronger Crops. Better Future."
      subtitle="Certified wheat and rice seed, developed and tested for Punjab's growing conditions."
    />

    <section class="section">
      <h2 class="text-2xl font-bold text-[var(--color-brand-green)]">Our Seeds</h2>
      <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <SeedCard
          icon="🌾"
          title="Wheat"
          description="High-quality wheat seed selected for Punjab's growing conditions."
          to="/seeds/wheat"
        />
        <SeedCard
          icon="🌾"
          title="Rice"
          description="Basmati and non-Basmati varieties for different farming requirements."
          to="/seeds/rice"
        />
        <SeedCard
          icon="🌱"
          title="Other Crops"
          description="Additional field crop varieties as our range expands."
          to="/seeds/other-crops"
        />
      </div>
    </section>

    <section class="bg-white">
      <div class="section">
        <h2 class="text-2xl font-bold text-[var(--color-brand-green)]">From Seed to Harvest</h2>
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div v-for="(step, i) in steps" :key="step.title" class="flex flex-col items-center text-center">
            <div class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)]">
              <Icon :name="step.icon" size="28" />
            </div>
            <p class="font-semibold">{{ i + 1 }}. {{ step.title }}</p>
            <p class="mt-1 text-sm text-gray-600">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="card flex flex-col items-start gap-4 bg-[var(--color-brand-green)]/5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 class="text-xl font-bold text-[var(--color-brand-green)]">🔎 Verify Your Seed</h3>
          <p class="mt-1 max-w-xl text-sm text-gray-600">
            Every bag carries a code. Scan the QR code or enter it manually to confirm it's a genuine
            Dur E Sabeeh product.
          </p>
        </div>
        <NuxtLink to="/verify" class="btn-primary whitespace-nowrap">Verify Now</NuxtLink>
      </div>
    </section>
  </div>
</template>
