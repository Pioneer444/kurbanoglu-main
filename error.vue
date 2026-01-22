<template>
  <div class="min-h-screen flex flex-col bg-[#f5f8fe]">
    <!-- Header -->
    <header class="bg-white sticky top-0 z-50 shadow-sm">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] h-[70px] md:h-[90px] flex items-center justify-between">
        <NuxtLink to="/" class="w-[150px] md:w-[200px] h-[36px] md:h-[48px] flex items-center">
          <img src="~/assets/icons/header-logo.svg" alt="Kurbanoğlu Mühendislik" class="h-full w-auto" />
        </NuxtLink>
        <NuxtLink
          to="/"
          class="px-[14px] lg:px-[18px] py-[6px] lg:py-[8px] border border-[#064a81] rounded-[8px] text-[14px] lg:text-[16px] text-[#064a81] hover:bg-[#064a81] hover:text-white transition-colors"
          style="font-family: 'Inter', sans-serif;"
        >
          Ana Sayfa
        </NuxtLink>
      </div>
    </header>

    <!-- Error Content -->
    <main class="flex-1 flex items-center justify-center px-4 py-12 md:py-20">
      <div class="text-center max-w-[600px]">
        <!-- Error Code -->
        <div class="relative mb-6 md:mb-8">
          <span 
            class="text-[120px] md:text-[180px] lg:text-[220px] font-bold text-[#064a81]/10 leading-none"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ errorCode }}
          </span>
          <div class="absolute inset-0 flex items-center justify-center">
            <UIcon 
              :name="errorIcon" 
              class="w-16 h-16 md:w-24 md:h-24 text-[#009BE3]" 
            />
          </div>
        </div>

        <!-- Error Title -->
        <h1 
          class="text-[24px] md:text-[32px] lg:text-[40px] font-semibold text-[#111827] mb-4"
          style="font-family: 'Inter', sans-serif;"
        >
          {{ errorTitle }}
        </h1>

        <!-- Error Description -->
        <p 
          class="text-[16px] md:text-[18px] text-[#6b7280] mb-8 md:mb-10 leading-relaxed"
          style="font-family: 'Inter', sans-serif;"
        >
          {{ errorDescription }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/"
            class="w-full sm:w-auto px-8 py-3 bg-[#064a81] rounded-[8px] text-[16px] font-medium text-white hover:bg-[#053a68] transition-colors flex items-center justify-center gap-2"
            style="font-family: 'Inter', sans-serif;"
            @click="handleError"
          >
            <UIcon name="i-heroicons-home" class="w-5 h-5" />
            Ana Sayfaya Dön
          </NuxtLink>
          
          <NuxtLink
            to="/iletisim"
            class="w-full sm:w-auto px-8 py-3 border border-[#064a81] rounded-[8px] text-[16px] font-medium text-[#064a81] hover:bg-[#064a81] hover:text-white transition-colors flex items-center justify-center gap-2"
            style="font-family: 'Inter', sans-serif;"
            @click="handleError"
          >
            <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
            İletişime Geç
          </NuxtLink>
        </div>

        <!-- Quick Links -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <p 
            class="text-[14px] text-[#6b7280] mb-4"
            style="font-family: 'Inter', sans-serif;"
          >
            Belki şu sayfalar işinize yarar:
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            <NuxtLink
              v-for="link in quickLinks"
              :key="link.to"
              :to="link.to"
              class="text-[14px] md:text-[16px] text-[#064a81] hover:text-[#009BE3] transition-colors"
              style="font-family: 'Inter', sans-serif;"
              @click="handleError"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-[#111827] py-6">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4">
          <NuxtLink to="/" class="w-[150px] h-[36px]">
            <img src="~/assets/icons/footer-logo.svg" alt="Kurbanoğlu Mühendislik" class="h-full w-auto" />
          </NuxtLink>
          <p class="text-[12px] text-[#b1b1b1]" style="font-family: 'Poppins', sans-serif;">
            © 2026 — Kurbanoğlu Mühendislik, Her hakkı saklıdır.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
interface NuxtError {
  statusCode: number
  message?: string
}

const props = defineProps<{
  error: NuxtError
}>()

const errorCode = computed(() => props.error?.statusCode || 404)

const errorTitle = computed(() => {
  switch (errorCode.value) {
    case 404:
      return 'Sayfa Bulunamadı'
    case 500:
      return 'Sunucu Hatası'
    case 403:
      return 'Erişim Engellendi'
    default:
      return 'Bir Hata Oluştu'
  }
})

const errorDescription = computed(() => {
  switch (errorCode.value) {
    case 404:
      return 'Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. Endişelenmeyin, sizi doğru yere yönlendirelim.'
    case 500:
      return 'Sunucumuzda beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin veya bizimle iletişime geçin.'
    case 403:
      return 'Bu sayfaya erişim izniniz bulunmamaktadır. Eğer bu bir hata olduğunu düşünüyorsanız bizimle iletişime geçin.'
    default:
      return 'Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.'
  }
})

const errorIcon = computed(() => {
  switch (errorCode.value) {
    case 404:
      return 'i-heroicons-magnifying-glass'
    case 500:
      return 'i-heroicons-server-stack'
    case 403:
      return 'i-heroicons-lock-closed'
    default:
      return 'i-heroicons-exclamation-triangle'
  }
})

const quickLinks = [
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Hizmetler', to: '/hizmetlerimiz' },
  { label: 'Projeler', to: '/projeler' },
  { label: 'İletişim', to: '/iletisim' }
]

const handleError = () => {
  clearError({ redirect: '/' })
}

// SEO
useSeoMeta({
  title: `${errorCode.value} - ${errorTitle.value} | Kurbanoğlu Mühendislik`,
  description: errorDescription.value,
  robots: 'noindex, nofollow'
})
</script>
