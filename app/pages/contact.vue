<script setup lang="ts">
const contacts = [
  { name: 'Muhammad Abrar Sheikh', phone: '+923004430041' },
  { name: 'Muhammad Irfan Sheikh', phone: '+923006942217' }
]
const form = reactive({ name: '', phone: '', message: '' })
const submitted = ref(false)

function submit() {
  // Wire this up to a server/api/contact.ts route once you're ready to
  // receive real messages (email via a provider, or save to a DB table).
  submitted.value = true
}
</script>

<template>
  <div>
    <HeroSection title="Contact Us">
      <template #actions />
    </HeroSection>

    <section class="section grid gap-10 lg:grid-cols-2">
      <div>
        <h2 class="text-xl font-bold text-[var(--color-brand-green)]">Get in Touch</h2>
        <p class="mt-3 text-gray-700">Punjab, Pakistan</p>
        <p class="text-gray-700">sabeehedu@gmail.com</p>
        <div class="mt-6 space-y-4">
  <a
    v-for="c in contacts"
    :key="c.phone"
    :href="`tel:${c.phone}`"
    class="card flex items-center gap-4 !p-4 hover:border-[var(--color-brand-green)]"
  >
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)]">
      <Icon name="mdi:phone" size="20" />
    </div>
    <div>
      <p class="font-semibold text-gray-800">{{ c.name }}</p>
      <p class="text-sm text-gray-600">{{ c.phone }}</p>
    </div>
  </a>
</div>
      </div>

      <form class="card space-y-4" @submit.prevent="submit">
        <div v-if="submitted" class="rounded-md bg-green-50 p-3 text-sm text-green-700">
          Thanks — this is a demo form. Wire it to /api/contact to receive real messages.
        </div>
        <div>
          <label class="text-sm font-medium">Name</label>
          <input v-model="form.name" class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label class="text-sm font-medium">Phone</label>
          <input v-model="form.phone" class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <div>
          <label class="text-sm font-medium">Message</label>
          <textarea v-model="form.message" rows="4" class="mt-1 w-full rounded-md border border-gray-300 px-3 py-2" />
        </div>
        <button type="submit" class="btn-primary w-full">Send</button>
      </form>
    </section>
  </div>
</template>
