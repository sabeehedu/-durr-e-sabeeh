<template>
  <div>
    <HeroSection title="For Farmers" subtitle="Sowing guidance, seed rate advice and support for growers.">
      <template #actions />
    </HeroSection>

    <section class="section grid gap-6 sm:grid-cols-2">
      <div class="card">
        <h3 class="font-semibold text-[var(--color-brand-green)]">Sowing Guidance</h3>
        <p class="mt-2 text-sm text-gray-600">
          Add crop-specific sowing windows, seed rate and spacing recommendations here.
        </p>
      </div>
      <div class="card">
        <h3 class="font-semibold text-[var(--color-brand-green)]">Feedback</h3>
        <p class="mt-2 text-sm text-gray-600">
          Add a feedback form here later (wired to <code class="rounded bg-gray-100 px-1">/api/feedback</code>)
          so farmers can report field results directly.
        </p>
      </div>
    </section>
  </div>
</template>
