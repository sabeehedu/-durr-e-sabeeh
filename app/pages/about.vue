<template>
  <div>
    <HeroSection title="About Dur E Sabeeh Seed Corporation">
      <template #actions />
    </HeroSection>

    <section class="section grid gap-10 lg:grid-cols-2">
      <div>
        <h2 class="text-xl font-bold text-[var(--color-brand-green)]">Our Purpose</h2>
        <p class="mt-3 text-gray-700">
          Dur E Sabeeh Seed Corporation supplies certified wheat and rice seed to farmers across Punjab.
          Our focus is on tested, traceable seed rather than broad, unverified claims.
        </p>
      </div>
      <div>
        <h2 class="text-xl font-bold text-[var(--color-brand-green)]">How We Work</h2>
        <p class="mt-3 text-gray-700">
          Every variety we sell goes through selection, germination testing and certification before it
          reaches a dealer. Lot-level records mean a farmer can verify exactly what they bought.
        </p>
      </div>
    </section>

    <section class="bg-white">
      <div class="section">
        <h2 class="text-xl font-bold text-[var(--color-brand-green)]">Why Trust Matters More Than Slogans</h2>
        <p class="mt-3 max-w-3xl text-gray-700">
          We avoid unverifiable claims like "No. 1 seed company" or "highest yield guaranteed." Instead
          we publish real variety information, certification status and trial data — see each
          <NuxtLink to="/seeds" class="text-[var(--color-brand-green)] underline">seed page</NuxtLink>
          and our <NuxtLink to="/research" class="text-[var(--color-brand-green)] underline">R&amp;D</NuxtLink> page.
        </p>
      </div>
    </section>
  </div>
</template>
