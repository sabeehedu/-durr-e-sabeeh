<template>
  <div>
    <HeroSection title="Our Seeds">
      <template #actions />
    </HeroSection>

    <section class="section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
    </section>
  </div>
</template>
