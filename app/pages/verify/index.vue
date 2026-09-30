<script setup lang="ts">
const code = ref('')
const router = useRouter()

function go() {
  if (!code.value.trim()) return
  router.push(`/verify/${code.value.trim().toUpperCase()}`)
}
</script>

<template>
  <div>
    <HeroSection title="Verify Your Seed" subtitle="Enter the code printed on your bag, or scan its QR code.">
      <template #actions />
    </HeroSection>

    <section class="section max-w-lg">
      <form class="card space-y-4" @submit.prevent="go">
        <div>
          <label class="text-sm font-medium">Bag code</label>
          <input
            v-model="code"
            placeholder="e.g. DS-WHT-26-001"
            class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 uppercase"
          />
        </div>
        <button type="submit" class="btn-primary w-full">Verify</button>
      </form>
      <p class="mt-3 text-xs text-gray-500">
        Try <code class="rounded bg-gray-100 px-1">DS-WHT-26-001</code> or
        <code class="rounded bg-gray-100 px-1">DS-RIC-26-014</code> for a working demo.
      </p>
    </section>
  </div>
</template>
