<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  imageAlt?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-[var(--color-brand-green)] text-white">
    <div class="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24">
      <span class="rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-wide">
        Punjab • Since Seed to Harvest
      </span>
      <h1 class="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="max-w-xl text-lg text-white/85">
        {{ subtitle }}
      </p>
      <div class="flex flex-wrap gap-3">
        <slot name="actions">
          <NuxtLink to="/seeds" class="btn-secondary !border-white !text-white hover:!bg-white hover:!text-[var(--color-brand-green)]">
            Explore Our Seeds
          </NuxtLink>
          <NuxtLink to="/verify" class="btn-primary bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)]/90">
            Verify Your Seed
          </NuxtLink>
        </slot>
      </div>
    </div>
    <!-- Swap this gradient for a real field photo: put the image in /public and
         reference it as background-image below. Kept as a gradient so the
         template works with zero image assets out of the box. -->
    <div class="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[var(--color-brand-green)] via-[var(--color-brand-green-dark)] to-black/40" />
  </section>
</template>
