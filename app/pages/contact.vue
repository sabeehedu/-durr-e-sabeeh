<script setup lang="ts">
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
        <p class="text-gray-700">info@duresabeeh.com</p>
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
