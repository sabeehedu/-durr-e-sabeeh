<template>
  <footer class="mt-16 bg-[var(--color-brand-green-dark)] text-white">
    <div class="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <p class="text-lg font-bold">Dur E Sabeeh Seed Corporation</p>
        <p class="mt-2 text-sm text-white/70">
          Certified wheat, rice and crop seed for Punjab, backed by research, testing and traceability.
        </p>
      </div>
      <div>
        <p class="font-semibold">Seeds</p>
        <ul class="mt-2 space-y-1 text-sm text-white/70">
          <li><NuxtLink to="/seeds/wheat" class="hover:text-white">Wheat</NuxtLink></li>
          <li><NuxtLink to="/seeds/rice" class="hover:text-white">Rice</NuxtLink></li>
          <li><NuxtLink to="/seeds/other-crops" class="hover:text-white">Other Crops</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="font-semibold">Company</p>
        <ul class="mt-2 space-y-1 text-sm text-white/70">
          <li><NuxtLink to="/about" class="hover:text-white">About</NuxtLink></li>
          <li><NuxtLink to="/research" class="hover:text-white">Research &amp; Development</NuxtLink></li>
          <li><NuxtLink to="/dealers" class="hover:text-white">Dealers</NuxtLink></li>
          <li><NuxtLink to="/news" class="hover:text-white">News &amp; Updates</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="font-semibold">Contact</p>
        <ul class="mt-2 space-y-1 text-sm text-white/70">
          <li>Punjab, Pakistan</li>
          <li><a href="mailto:sabeehedu@gmail.com" class="hover:text-white">sabeehedu@gmail.com</a></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/10 py-4 text-center text-xs text-white/50">
      © {{ new Date().getFullYear() }} Dur E Sabeeh Seed Corporation. All rights reserved.
    </div>
  </footer>
</template>
