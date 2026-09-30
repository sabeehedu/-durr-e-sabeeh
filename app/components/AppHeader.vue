<script setup lang="ts">
const open = ref(false)

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Seeds',
    to: '/seeds',
    children: [
      { label: 'Wheat', to: '/seeds/wheat' },
      { label: 'Rice', to: '/seeds/rice' },
      { label: 'Other Crops', to: '/seeds/other-crops' }
    ]
  },
  { label: 'R&D', to: '/research' },
  { label: 'Farmers', to: '/farmers' },
  { label: 'Dealers', to: '/dealers' },
  { label: 'News', to: '/news' },
  { label: 'Contact', to: '/contact' }
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-black/5 bg-[var(--color-brand-cream)]/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <NuxtLink to="/" class="flex items-center gap-2 font-bold text-[var(--color-brand-green)]">
        <Icon name="mdi:sprout" size="28" />
        <span class="text-lg leading-tight">
          Dur E Sabeeh<br class="hidden sm:block" />
          <span class="text-xs font-normal text-gray-500">Seed Corporation</span>
        </span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 lg:flex">
        <div v-for="item in nav" :key="item.label" class="group relative">
          <NuxtLink
            :to="item.to"
            class="text-sm font-medium text-gray-700 hover:text-[var(--color-brand-green)]"
          >
            {{ item.label }}
          </NuxtLink>
          <div
            v-if="item.children"
            class="invisible absolute left-0 top-full mt-2 w-44 rounded-lg border border-black/5 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100"
          >
            <NuxtLink
              v-for="child in item.children"
              :key="child.to"
              :to="child.to"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              {{ child.label }}
            </NuxtLink>
          </div>
        </div>
      </nav>

      <NuxtLink to="/verify" class="btn-primary hidden lg:inline-flex">
        <Icon name="mdi:qrcode-scan" class="mr-2" />
        Verify Seed
      </NuxtLink>

      <button class="lg:hidden" @click="open = !open">
        <Icon :name="open ? 'mdi:close' : 'mdi:menu'" size="28" />
      </button>
    </div>

    <div v-if="open" class="border-t border-black/5 bg-white px-6 py-4 lg:hidden">
      <div v-for="item in nav" :key="item.label" class="py-1">
        <NuxtLink :to="item.to" class="block py-1 font-medium text-gray-700" @click="open = false">
          {{ item.label }}
        </NuxtLink>
        <div v-if="item.children" class="pl-4">
          <NuxtLink
            v-for="child in item.children"
            :key="child.to"
            :to="child.to"
            class="block py-1 text-sm text-gray-600"
            @click="open = false"
          >
            {{ child.label }}
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/verify" class="btn-primary mt-3 w-full" @click="open = false">
        Verify Seed
      </NuxtLink>
    </div>
  </header>
</template>
