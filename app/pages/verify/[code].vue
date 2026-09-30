<script setup lang="ts">
const route = useRoute()
const code = String(route.params.code)

const { data, pending } = await useFetch(`/api/verify/${code}`)
</script>

<template>
  <div class="section max-w-lg">
    <div v-if="pending" class="text-center text-gray-500">Checking…</div>

    <div v-else-if="data?.verified" class="card border-2 border-green-500">
      <div class="flex items-center gap-2 text-green-600">
        <Icon name="mdi:check-decagram" size="28" />
        <p class="text-lg font-bold">PRODUCT VERIFIED</p>
      </div>
      <p class="mt-1 font-semibold text-[var(--color-brand-green)]">Dur E Sabeeh Seed Corporation</p>

      <dl class="mt-4 grid grid-cols-2 gap-y-2 text-sm">
        <dt class="text-gray-500">Crop</dt>
        <dd>{{ data.crop }}</dd>
        <dt class="text-gray-500">Variety</dt>
        <dd>{{ data.variety }}</dd>
        <dt class="text-gray-500">Lot</dt>
        <dd>{{ data.lot }}</dd>
        <dt class="text-gray-500">Seed Class</dt>
        <dd>{{ data.seedClass }}</dd>
        <dt class="text-gray-500">Pack</dt>
        <dd>{{ data.packSize }}</dd>
        <dt class="text-gray-500">Testing</dt>
        <dd>{{ data.testingStatus }}</dd>
      </dl>
    </div>

    <div v-else class="card border-2 border-red-400">
      <div class="flex items-center gap-2 text-red-600">
        <Icon name="mdi:alert-circle-outline" size="28" />
        <p class="text-lg font-bold">CODE NOT RECOGNIZED</p>
      </div>
      <p class="mt-2 text-sm text-gray-600">
        We couldn't verify code <strong>{{ code }}</strong>. If you believe this is a genuine
        Dur E Sabeeh product, please <NuxtLink to="/contact" class="underline">contact us</NuxtLink>.
      </p>
    </div>

    <NuxtLink to="/verify" class="mt-4 inline-block text-sm text-gray-500 hover:underline">
      ← Check another code
    </NuxtLink>
  </div>
</template>
