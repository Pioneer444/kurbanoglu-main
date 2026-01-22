<template>
  <section class="bg-white py-10 md:py-12 lg:py-[64px]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
      <div class="flex flex-col items-center gap-6 md:gap-8 lg:gap-[32px]">
        <!-- Icon -->
        <div class="w-[28px] md:w-[32px] h-[35px] md:h-[40px]">
          <img src="~/assets/icons/small-logo.svg" alt="Kurbanoğlu" class="w-full h-full object-contain" />
        </div>

        <!-- Description -->
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#111827] text-center max-w-[1140px] leading-[1.5] lg:leading-[24px]"
          style="font-family: 'Inter', sans-serif;"
        >
          Kurbanoğlu Mühendislik, endüstriyel elektrik taahhüt ve danışmanlık alanında faaliyet gösteren, yüksek teknolojili çözümleriyle enerji verimliliğini ve güvenliği esas alan bir mühendislik firmasıdır.
        </p>

        <!-- More Info Link -->
        <NuxtLink
          to="/hakkimizda"
          class="flex items-center gap-2 px-4 py-3 rounded-[16px] hover:bg-gray-50 transition-colors"
        >
          <span class="text-[14px] font-medium text-[#064a81]" style="font-family: 'Inter', sans-serif;">
            Daha fazla bilgi
          </span>
          <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 text-[#064a81]" />
        </NuxtLink>

        <!-- Partner Logos -->
        <div class="mt-4 md:mt-6 lg:mt-[32px] w-full overflow-hidden">
          <div class="flex items-center gap-4 md:gap-6 lg:gap-[54px] animate-scroll">
            <div 
              v-for="partner in partners" 
              :key="partner.id"
              class="w-[100px] md:w-[120px] lg:w-[142px] h-[32px] md:h-[36px] lg:h-[40px] flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                :src="partner.logo" 
                :alt="partner.name" 
                class="max-h-full w-auto object-contain"
              />
            </div>
            <!-- Duplicate for seamless loop -->
            <div 
              v-for="partner in partners" 
              :key="`duplicate-${partner.id}`"
              class="w-[100px] md:w-[120px] lg:w-[142px] h-[32px] md:h-[36px] lg:h-[40px] flex items-center justify-center flex-shrink-0 hover:opacity-80 transition-opacity duration-300"
            >
              <img 
                :src="partner.logo" 
                :alt="partner.name" 
                class="max-h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Partner } from '~/types'

import haviLogo from '~/assets/images/referanslar/cropped-havi_logo-420x147-2 1.png'
import image4Logo from '~/assets/images/referanslar/image 4.png'
import logo1695 from '~/assets/images/referanslar/logo-1695859177 1.png'
import kaleCareLogo from '~/assets/images/referanslar/logo-kale-care 1.png'
import pngeggLogo from '~/assets/images/referanslar/pngegg 1.png'
import pngwingLogo from '~/assets/images/referanslar/pngwing.com 1.png'

const partners: Partner[] = [
  { id: 'havi', name: 'Havi', logo: haviLogo },
  { id: 'partner-2', name: 'Partner 2', logo: image4Logo },
  { id: 'partner-3', name: 'Partner 3', logo: logo1695 },
  { id: 'kale-care', name: 'Kale Care', logo: kaleCareLogo },
  { id: 'partner-5', name: 'Partner 5', logo: pngeggLogo },
  { id: 'partner-6', name: 'Partner 6', logo: pngwingLogo }
]
</script>
