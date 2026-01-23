<template>
  <footer class="bg-[#111827] relative overflow-hidden app-footer">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] py-8 md:py-10 lg:py-[32px]">
      <!-- Mobile & Tablet Layout -->
      <div class="flex flex-col lg:hidden gap-8 items-center text-center">
        <!-- Logo -->
        <NuxtLink to="/" class="w-[180px] h-[44px]">
          <img src="~/assets/icons/footer-logo.svg" alt="Kurbanoğlu Mühendislik" class="h-full w-auto" />
        </NuxtLink>

        <!-- Navigation -->
        <nav class="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <NuxtLink
            v-for="item in footerNav"
            :key="item.to"
            :to="item.to"
            class="text-[14px] md:text-[15px] text-[#f5f8fe] hover:text-[#009BE3] transition-colors duration-300"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Social Media -->
        <div class="flex gap-3 justify-center footer-social">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.to"
            target="_blank"
            class="w-10 h-10 hover:scale-110 transition-transform duration-300"
            :aria-label="social.label"
          >
            <img 
              :src="social.icon" 
              :alt="social.label" 
              class="w-full h-full" 
            />
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-[11px] md:text-[12px] text-[#b1b1b1]" style="font-family: 'Poppins', sans-serif;">
          © 2026 — Kurbanoğlu Mühendislik, Her hakkı saklıdır.
        </p>
      </div>

      <!-- Desktop Layout -->
      <div class="hidden lg:flex justify-between items-start">
        <!-- Left Block: Logo & Social -->
        <div class="flex flex-col gap-[72px]">
          <!-- Logo -->
          <NuxtLink to="/" class="w-[200px] h-[48px]">
            <img src="~/assets/icons/footer-logo.svg" alt="Kurbanoğlu Mühendislik" class="h-full w-auto" />
          </NuxtLink>

          <!-- Social Media -->
          <div class="flex gap-[10px] footer-social">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.to"
              target="_blank"
              class="w-[40px] h-[40px] hover:scale-110 transition-transform duration-300"
              :aria-label="social.label"
            >
              <img 
                :src="social.icon" 
                :alt="social.label" 
                class="w-full h-full" 
              />
            </a>
          </div>
        </div>

        <!-- Right Block: Navigation & Copyright -->
        <div class="flex flex-col gap-[120px] items-end">
          <!-- Navigation -->
          <nav class="flex gap-[32px]">
            <NuxtLink
              v-for="item in footerNav"
              :key="item.to"
              :to="item.to"
              class="text-[16px] text-[#f5f8fe] hover:text-[#009BE3] transition-colors duration-300"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>

          <!-- Copyright -->
          <p class="text-[12px] text-[#b1b1b1]" style="font-family: 'Poppins', sans-serif;">
            © 2026 — Kurbanoğlu Mühendislik, Her hakkı saklıdır.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import linkedinIcon from '~/assets/icons/linkedin.svg'
import instagramIcon from '~/assets/icons/ınstagram.svg'
import facebookIcon from '~/assets/icons/facebook.svg'

const footerNav = [
  { label: 'Hakkımızda', to: '/hakkimizda' },
  { label: 'Hizmetler', to: '/hizmetlerimiz' },
  { label: 'Projeler', to: '/projeler' },
  { label: 'Teknoloji', to: '/teknoloji' },
  { label: 'Blog', to: '/blog' },
  { label: 'İletişim', to: '/iletisim' }
]

const socialLinks = [
  { icon: linkedinIcon, to: 'https://www.linkedin.com/in/baycanak%C3%BCz%C3%BCm/', label: 'LinkedIn' },
  { icon: instagramIcon, to: 'https://instagram.com', label: 'Instagram' },
  { icon: facebookIcon, to: 'https://facebook.com', label: 'Facebook' }
]
</script>
