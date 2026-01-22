<template>
  <header class="bg-white sticky top-0 z-50 shadow-sm app-header">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] h-[70px] md:h-[90px] flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="w-[150px] md:w-[200px] h-[36px] md:h-[48px] flex items-center cursor-pointer hover:opacity-80 transition-opacity">
        <img src="~/assets/icons/header-logo.svg" alt="Kurbanoğlu Mühendislik" class="h-full w-auto" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-4 xl:gap-[32px]">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          class="text-[14px] xl:text-[16px] font-normal transition-colors whitespace-nowrap"
          :class="isActiveRoute(item.to) ? 'text-[#009BE3]' : 'text-[#111827] hover:text-[#064a81]'"
          style="font-family: 'Inter', sans-serif;"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <!-- Desktop CTA Button (only on large screens) -->
      <NuxtLink
        to="/iletisim"
        class="hidden lg:flex px-[14px] lg:px-[18px] py-[6px] lg:py-[8px] border border-[#064a81] rounded-[8px] text-[14px] lg:text-[16px] text-[#064a81] hover:bg-[#064a81] hover:text-white transition-colors"
        style="font-family: 'Inter', sans-serif;"
      >
        Teklif Al
      </NuxtLink>

      <!-- Mobile Menu Button -->
      <button 
        class="lg:hidden p-2 text-[#111827] hover:text-[#064a81] transition-colors"
        @click="mobileMenuOpen = !mobileMenuOpen"
        aria-label="Menü"
      >
        <UIcon 
          :name="mobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" 
          class="w-6 h-6" 
        />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div 
        v-if="mobileMenuOpen" 
        class="lg:hidden bg-white border-t border-gray-100 shadow-lg"
      >
        <nav class="flex flex-col px-4 py-4">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.to"
            :to="item.to"
            class="py-3 text-[16px] font-normal transition-colors border-b border-gray-100 last:border-b-0"
            :class="isActiveRoute(item.to) ? 'text-[#009BE3]' : 'text-[#111827] hover:text-[#064a81]'"
            style="font-family: 'Inter', sans-serif;"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          
          <!-- Mobile CTA Button -->
          <NuxtLink
            to="/iletisim"
            class="mt-4 py-3 px-4 bg-[#064a81] rounded-[8px] text-[16px] text-white text-center hover:bg-[#053a68] transition-colors"
            style="font-family: 'Inter', sans-serif;"
            @click="mobileMenuOpen = false"
          >
            Teklif Al
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)
const route = useRoute()

const isActiveRoute = (path: string) => {
  return route.path === path || route.path.startsWith(path + '/')
}

const navigationItems = [
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Hizmetler', to: '/hizmetlerimiz' },
  { label: 'Projeler', to: '/projeler' },
  { label: 'Teknoloji', to: '/teknoloji' },
  { label: 'Risk Hesabı', to: '/yildirim-risk-hesabi' },
  { label: 'Blog', to: '/blog' },
  { label: 'İletişim', to: '/iletisim' }
]

// Close mobile menu on route change
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
