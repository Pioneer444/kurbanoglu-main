<template>
  <section class="bg-[#f5f8fe] py-10 md:py-12 lg:py-[64px]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
      <!-- Header -->
      <div class="flex flex-col items-center gap-4 md:gap-6 lg:gap-[32px] mb-6 md:mb-8 lg:mb-[32px]">
        <!-- Badge -->
        <span 
          class="px-4 py-2 border border-[#064a81] rounded-[8px] text-[14px] md:text-[16px] font-medium text-[#111827]"
          style="font-family: 'Inter', sans-serif;"
        >
          Ürünler
        </span>

        <!-- Description -->
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#111827] text-center max-w-[1140px] leading-[1.5] lg:leading-[24px]"
          style="font-family: 'Inter', sans-serif;"
        >
          Enerji verimliliği, güvenlik ve sürdürülebilirlik odaklı yaklaşımımızla tesislerinizi güvenle geleceğe taşırız.
          <span class="hidden md:inline"><br></span>
          <span class="md:hidden"> </span>
          Tüm süreçleri uluslararası standartlarda yönetir.
        </p>

        <!-- View All Link -->
        <NuxtLink
          to="/iletisim"
          class="flex items-center gap-2 px-4 py-3 rounded-[16px] hover:bg-white transition-colors"
        >
          <span class="text-[14px] font-medium text-[#064a81]" style="font-family: 'Inter', sans-serif;">
            Bilgi Alın
          </span>
        </NuxtLink>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-[20px]">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div class="overflow-hidden">
            <img 
              :src="product.image"
              :alt="product.title"
              class="w-full h-[160px] sm:h-[180px] lg:h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div class="p-4 lg:p-[16px]">
            <h3 
              class="text-[16px] md:text-[18px] lg:text-[20px] font-medium text-[#064a81] group-hover:text-[#009BE3] text-center leading-[1.3] lg:leading-[24px] transition-colors duration-300"
              style="font-family: 'Inter', sans-serif;"
              v-html="product.title"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import panoImg from '~/assets/images/products/pano-kompanzasyon.png'
import trafoImg from '~/assets/images/products/trafo-jenerator.png'
import guvenlikImg from '~/assets/images/products/guvenlik-kamera.png'
import aydinlatmaImg from '~/assets/images/products/aydinlatma.png'

interface Product {
  id: number
  title: string
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'Pano & Kompanzasyon<br>Malzemeleri',
    image: aydinlatmaImg
  },
  {
    id: 2,
    title: 'Trafo & Jeneratör<br>Sistemleri',
    image: trafoImg
  },
  {
    id: 3,
    title: 'Yangın Algılama Uyarı  & Kamera<br>Sistemleri',
    image: guvenlikImg
  },
  {
    id: 4,
    title: 'Aydınlatma<br>Ürünleri',
    image: panoImg
  }
]
</script>
