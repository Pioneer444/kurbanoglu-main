<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[484px] flex items-end justify-center overflow-hidden pb-10 md:pb-14 lg:pb-16">
      <!-- Background -->
      <div class="absolute inset-0 z-0 bg-[#111827]">
        <img 
          src="/images/projects/banner.png" 
          alt="Projeler"
          class="w-full h-full object-cover opacity-60"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-[960px] mx-auto">
        <h1 
          class="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-white mb-4 md:mb-6"
          style="font-family: 'Inter', sans-serif; letter-spacing: -1.26px; line-height: 1;"
        >
          Tamamlanan ve Devam<br>Eden Projeler
        </h1>
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-white max-w-[735px] mx-auto"
          style="font-family: 'Inter', sans-serif; line-height: 1.25;"
        >
          Her biri farklı sektörlerde hayata geçirilen çalışmalar, enerji altyapılarında güvenilir, verimli ve uzun ömürlü çözümler üretme yetkinliğimizi yansıtır.
        </p>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="bg-[#111827] py-8 md:py-12 lg:py-16 border-b border-[#212734]">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <!-- Tab Menu -->
        <div class="mb-8 md:mb-10 lg:mb-12">
          <div class="bg-[#212734] rounded-[12px] p-[4px] flex flex-col md:flex-row gap-2">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              :class="[
                'w-full md:flex-1 py-2.5 md:py-3 px-4 md:px-6 rounded-[10px] text-[14px] md:text-[16px] transition-all duration-300 text-center',
                activeTab === tab.id ? 'bg-white text-[#212734]' : 'text-white hover:bg-white/10'
              ]"
              style="font-family: 'Poppins', sans-serif;"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-[20px]">
          <NuxtLink 
            v-for="project in filteredProjects" 
            :key="project.id"
            :to="`/projeler/${project.slug}`"
            class="group bg-[#212734] rounded-[20px] md:rounded-[24px] lg:rounded-[32px] p-4 md:p-5 lg:p-[22px] pb-5 lg:pb-[24px] hover:bg-[#2d3444] transition-all duration-300 cursor-default"
          >
            <div class="overflow-hidden rounded-[10px] mb-4 lg:mb-[20px]">
              <img 
                :src="project.image"
                :alt="project.title"
                class="w-full h-[200px] sm:h-[280px] md:h-[300px] lg:h-[354px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 
              class="text-[22px] md:text-[24px] lg:text-[28px] font-bold text-[#f5f8fe] leading-[1.2] tracking-[-0.32px]"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ project.title }}
            </h3>
            <p 
              class="text-[14px] md:text-[15px] lg:text-[16px] font-medium text-[#f5f8fe] leading-[1.5] tracking-[-0.32px]"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ project.category }}
            </p>
          </NuxtLink>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useProjects } from '~/composables/useProjects'

// SEO Meta
useSeoMeta({
  title: 'Projeler | Kurbanoğlu Mühendislik',
  description: 'Kurbanoğlu Mühendislik olarak tamamladığımız ve devam eden projelerimiz. Endüstriyel elektrik, otomasyon ve mühendislik çözümlerinde referanslarımız.',
  ogTitle: 'Projeler | Kurbanoğlu Mühendislik',
  ogDescription: 'Kurbanoğlu Mühendislik olarak tamamladığımız ve devam eden projelerimiz.'
})

const { projects } = useProjects()

const activeTab = ref('hepsi')

const tabs = [
  { id: 'hepsi', label: 'Hepsi' },
  { id: 'tamamlanan', label: 'Tamamlananlar' },
  { id: 'devam', label: 'Devam Edenler' }
]


const filteredProjects = computed(() => {
  switch (activeTab.value) {
    case 'hepsi':
      return projects
    case 'tamamlanan':
      return projects.filter(p => p.status === 'completed')
    case 'devam':
      return projects.filter(p => p.status === 'ongoing')
    default:
      return projects
  }
})
</script>
