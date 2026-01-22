<template>
  <section class="bg-[#111827] py-10 md:py-12 lg:py-[64px]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
      <!-- Header -->
      <div class="flex flex-col items-center gap-4 md:gap-6 lg:gap-[32px] mb-6 md:mb-8 lg:mb-[32px]">
        <!-- Badge -->
        <span 
          class="px-4 py-2 border border-white rounded-[8px] text-[14px] md:text-[16px] font-medium text-white"
          style="font-family: 'Inter', sans-serif;"
        >
          Projeler
        </span>

        <!-- Description -->
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#f5f8fe] text-center max-w-[1140px] leading-[1.5] lg:leading-[24px]"
          style="font-family: 'Inter', sans-serif;"
        >
          Her biri farklı sektörlerde hayata geçirilen çalışmalar, enerji altyapılarında güvenilir, verimli
          <span class="hidden md:inline"><br></span>
          <span class="md:hidden"> </span>
          ve uzun ömürlü çözümler üretme yetkinliğimizi yansıtır.
        </p>
      </div>

      <!-- Tab Menu - Scrollable on mobile -->
      <div class="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0 mb-6 md:mb-8 lg:mb-[32px]">
        <div class="bg-[#212734] rounded-[12px] p-[4px] flex min-w-max md:min-w-0">
          <button
            v-for="(tab, index) in tabs"
            :key="tab"
            :class="[
              'flex-1 py-2 md:py-[8px] px-3 md:px-4 rounded-[10px] text-[13px] md:text-[14px] lg:text-[16px] transition-colors whitespace-nowrap',
              activeTab === index ? 'bg-white text-[#212734]' : 'text-white hover:bg-[#374151]'
            ]"
            style="font-family: 'Poppins', sans-serif;"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-[20px] mb-8 md:mb-10 lg:mb-[48px]">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          class="group bg-[#212734] rounded-[20px] md:rounded-[24px] lg:rounded-[32px] p-4 md:p-5 lg:p-[22px] pb-5 lg:pb-[24px] cursor-pointer hover:bg-[#2d3444] transition-all duration-300"
          :class="{ 'md:col-span-2 lg:col-span-1': index === 2 && filteredProjects.length === 3 }"
        >
          <img 
            :src="project.image"
            :alt="project.title"
            class="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[354px] object-cover rounded-[10px] mb-4 lg:mb-[20px] group-hover:scale-[1.02] transition-transform duration-300"
          />
          <h3 
            class="text-[22px] md:text-[24px] lg:text-[28px] font-bold text-[#f5f8fe] leading-[1.2] lg:leading-[34px] tracking-[-0.32px]"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ project.title }}
          </h3>
          <p 
            class="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#f5f8fe] leading-[1.5] lg:leading-[24px] tracking-[-0.32px]"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ project.category }}
          </p>
        </div>
      </div>

      <!-- View All Link -->
      <div class="flex justify-center">
        <NuxtLink
          to="/projeler"
          class="flex items-center gap-2 px-4 py-3 rounded-[16px] hover:bg-[#212734] transition-colors"
        >
          <span class="text-[14px] font-medium text-[#f5f8fe]" style="font-family: 'Inter', sans-serif;">
            Tümünü Gör
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import asterImg from '~/assets/images/projects/tamamlanan/1.jpeg'
import dhlImg from '~/assets/images/projects/tamamlanan/2.jpeg'
import pimtasImg from '~/assets/images/projects/tamamlanan/3.jpeg'
import ongoingImg1 from '~/assets/images/projects/devam-eden/1.jpeg'
import ongoingImg2 from '~/assets/images/projects/devam-eden/2.jpeg'
import ongoingImg3 from '~/assets/images/projects/devam-eden/3.jpeg'
// Note: Project images remain in projects/ folder

const activeTab = ref(0) // "Hepsi" selected by default
const tabs = ['Hepsi', 'Tamamlananlar', 'Devam Edenler']

interface Project {
  id: number
  title: string
  category: string
  image: string
  status: 'completed' | 'ongoing'
  sector: string
}

const projects: Project[] = [
  // Tamamlanan Projeler
  {
    id: 1,
    title: 'Aster Tekstil',
    category: 'Elektrik Tesisatı',
    image: asterImg,
    status: 'completed',
    sector: 'Tekstil'
  },
  {
    id: 2,
    title: 'DHL',
    category: 'Yangın Ekipmanları',
    image: dhlImg,
    status: 'completed',
    sector: 'Lojistik'
  },
  {
    id: 3,
    title: 'Pimtaş',
    category: 'Pano İmalatları',
    image: pimtasImg,
    status: 'completed',
    sector: 'Üretim'
  },
  // Devam Eden Projeler
  {
    id: 4,
    title: 'Bosch Türkiye',
    category: 'Otomasyon Sistemleri',
    image: ongoingImg1,
    status: 'ongoing',
    sector: 'Otomotiv'
  },
  {
    id: 5,
    title: 'Arçelik Fabrika',
    category: 'Kompanzasyon Sistemleri',
    image: ongoingImg2,
    status: 'ongoing',
    sector: 'Üretim'
  },
  {
    id: 6,
    title: 'THY Teknik',
    category: 'Aydınlatma Projeleri',
    image: ongoingImg3,
    status: 'ongoing',
    sector: 'Havacılık'
  }
]

const filteredProjects = computed(() => {
  switch (activeTab.value) {
    case 0: // Hepsi
      return projects.slice(0, 6)
    case 1: // Tamamlananlar
      return projects.filter(p => p.status === 'completed')
    case 2: // Devam Edenler
      return projects.filter(p => p.status === 'ongoing')
    default:
      return projects.slice(0, 6)
  }
})
</script>
