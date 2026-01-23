<template>
  <div v-if="project">
    <!-- Hero Section -->
    <section class="relative h-[350px] md:h-[450px] lg:h-[500px] flex items-end justify-center overflow-hidden pb-10 md:pb-14 lg:pb-16">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 bg-[#111827]">
        <img 
          :src="project.image" 
          :alt="project.title" 
          class="w-full h-full object-cover opacity-60"
        />
        <!-- Gradient Overlay -->
        <div 
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(17, 24, 39, 0.3) 0%, rgba(17, 24, 39, 0.7) 60%, #111827 100%);"
        ></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-[960px] mx-auto">
        <!-- Status Badge -->
        <div class="flex items-center justify-center gap-3 mb-4">
          <span 
            :class="[
              'px-3 py-1 text-white text-[12px] md:text-[13px] font-medium rounded-full',
              project.status === 'completed' ? 'bg-green-600' : 'bg-[#009BE3]'
            ]"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ project.status === 'completed' ? 'Tamamlandı' : 'Devam Ediyor' }}
          </span>
          <span 
            class="px-3 py-1 bg-white/20 text-white text-[12px] md:text-[13px] font-medium rounded-full"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ project.sector }}
          </span>
        </div>
        
        <h1 
          class="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white mb-4 md:mb-6 leading-tight"
          style="font-family: 'Inter', sans-serif; letter-spacing: -1px;"
        >
          {{ project.title }}
        </h1>
        
        <p 
          class="text-[16px] md:text-[18px] text-white/90 max-w-[800px] mx-auto"
          style="font-family: 'Inter', sans-serif;"
        >
          {{ project.category }}
        </p>
      </div>
    </section>

    <!-- Breadcrumb -->
    <section class="bg-white py-4 border-b border-gray-200">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <nav class="flex items-center gap-2 text-sm">
          <NuxtLink to="/" class="text-[#064a81] hover:text-[#009BE3] transition-colors">Ana Sayfa</NuxtLink>
          <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" />
          <NuxtLink to="/projeler" class="text-[#064a81] hover:text-[#009BE3] transition-colors">Projeler</NuxtLink>
          <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" />
          <span class="text-gray-600">{{ project.title }}</span>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <section class="bg-white py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <!-- Project Image -->
            <div class="mb-8 rounded-[16px] overflow-hidden">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>

            <!-- Project Details -->
            <div class="space-y-6">
              <div>
                <h2 
                  class="text-[20px] md:text-[24px] font-semibold text-[#111827] mb-4"
                  style="font-family: 'Inter', sans-serif;"
                >
                  Proje Detayları
                </h2>
                <p 
                  class="text-[16px] md:text-[18px] font-light text-[#111827] leading-relaxed"
                  style="font-family: 'Inter', sans-serif;"
                >
                  {{ project.title }} projesi kapsamında {{ project.category }} hizmetleri başarıyla tamamlanmıştır. 
                  Proje, endüstriyel standartlara uygun olarak gerçekleştirilmiş ve müşteri memnuniyeti sağlanmıştır.
                </p>
              </div>

              <!-- Category Breakdown -->
              <div>
                <h3 
                  class="text-[18px] md:text-[20px] font-semibold text-[#111827] mb-3"
                  style="font-family: 'Inter', sans-serif;"
                >
                  Hizmet Kategorileri
                </h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="(cat, index) in categoryList" 
                    :key="index"
                    class="px-3 py-1.5 bg-[#f5f8fe] text-[#064a81] text-[14px] font-medium rounded-full"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    {{ cat }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- Project Info Card -->
            <div class="bg-[#f5f8fe] rounded-[16px] p-6 md:p-8 mb-8">
              <h3 
                class="text-[20px] font-semibold text-[#064a81] mb-6"
                style="font-family: 'Inter', sans-serif;"
              >
                Proje Bilgileri
              </h3>
              
              <div class="space-y-4">
                <div>
                  <p 
                    class="text-[12px] font-medium text-[#6b7280] mb-1"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    Durum
                  </p>
                  <p 
                    :class="[
                      'text-[16px] font-semibold',
                      project.status === 'completed' ? 'text-green-600' : 'text-[#009BE3]'
                    ]"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    {{ project.status === 'completed' ? 'Tamamlandı' : 'Devam Ediyor' }}
                  </p>
                </div>
                
                <div>
                  <p 
                    class="text-[12px] font-medium text-[#6b7280] mb-1"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    Sektör
                  </p>
                  <p 
                    class="text-[16px] font-semibold text-[#111827]"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    {{ project.sector }}
                  </p>
                </div>
              </div>
            </div>

            <!-- CTA Card -->
            <div class="bg-[#064a81] rounded-[16px] p-6 md:p-8">
              <h3 
                class="text-[20px] font-semibold text-white mb-4"
                style="font-family: 'Inter', sans-serif;"
              >
                Benzer Projeler İçin
              </h3>
              <p 
                class="text-[14px] font-light text-white/90 mb-6 leading-relaxed"
                style="font-family: 'Inter', sans-serif;"
              >
                Bu projeye benzer çalışmalar için bizimle iletişime geçin.
              </p>
              <NuxtLink 
                to="/iletisim"
                class="inline-flex items-center justify-center w-full px-6 py-3 bg-white text-[#064a81] rounded-[8px] text-[16px] font-medium hover:bg-[#f5f8fe] transition-colors"
                style="font-family: 'Inter', sans-serif;"
              >
                İletişime Geçin
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
              </NuxtLink>
            </div>

            <!-- Related Projects -->
            <div v-if="relatedProjects.length > 0" class="mt-8">
              <h3 
                class="text-[18px] font-semibold text-[#111827] mb-4"
                style="font-family: 'Inter', sans-serif;"
              >
                İlgili Projeler
              </h3>
              <div class="space-y-4">
                <NuxtLink
                  v-for="relatedProject in relatedProjects"
                  :key="relatedProject.id"
                  :to="`/projeler/${relatedProject.slug}`"
                  class="block bg-white border border-gray-200 rounded-[12px] p-4 hover:border-[#064a81] hover:shadow-md transition-all"
                >
                  <div class="h-[120px] rounded-[8px] overflow-hidden mb-3">
                    <img 
                      :src="relatedProject.image" 
                      :alt="relatedProject.title"
                      class="w-full h-full object-cover"
                    />
                  </div>
                  <h4 
                    class="text-[16px] font-semibold text-[#111827] mb-2 line-clamp-2"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    {{ relatedProject.title }}
                  </h4>
                  <p 
                    class="text-[13px] font-light text-gray-600 line-clamp-2"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    {{ relatedProject.category }}
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#064a81] py-12 md:py-16">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="max-w-[800px] mx-auto text-center">
          <h2 
            class="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-white mb-4"
            style="font-family: 'Inter', sans-serif;"
          >
            Projeleriniz İçin Profesyonel Destek
          </h2>
          <p 
            class="text-[16px] md:text-[18px] text-white/90 mb-6"
            style="font-family: 'Inter', sans-serif;"
          >
            Endüstriyel elektrik ve otomasyon ihtiyaçlarınız için uzman ekibimizle iletişime geçin.
          </p>
          <NuxtLink 
            to="/iletisim"
            class="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#064a81] rounded-[8px] text-[16px] font-medium hover:bg-[#f5f8fe] transition-all duration-300"
            style="font-family: 'Inter', sans-serif;"
          >
            İletişime Geçin
            <UIcon name="i-heroicons-arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 Error -->
  <div v-else class="min-h-screen flex items-center justify-center bg-white">
    <div class="text-center px-4">
      <h1 
        class="text-[32px] md:text-[48px] font-bold text-[#111827] mb-4"
        style="font-family: 'Inter', sans-serif;"
      >
        404
      </h1>
      <p 
        class="text-[18px] md:text-[20px] font-light text-gray-600 mb-8"
        style="font-family: 'Inter', sans-serif;"
      >
        Proje bulunamadı
      </p>
      <NuxtLink 
        to="/projeler"
        class="inline-flex items-center px-6 py-3 bg-[#064a81] text-white rounded-[8px] text-[16px] font-medium hover:bg-[#053a6a] transition-colors"
        style="font-family: 'Inter', sans-serif;"
      >
        Projeler Sayfasına Dön
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjects } from '~/composables/useProjects'

const route = useRoute()
const { getProjectBySlug, getRelatedProjects } = useProjects()

const slug = computed(() => {
  const param = route.params.slug
  if (Array.isArray(param)) {
    return param[0] as string
  }
  return param as string
})

const project = computed(() => {
  const slugValue = slug.value
  if (!slugValue) {
    return undefined
  }
  
  return getProjectBySlug(slugValue)
})

const relatedProjects = computed(() => {
  if (!project.value) return []
  return getRelatedProjects(slug.value, 3)
})

// Split category string into array
const categoryList = computed(() => {
  if (!project.value) return []
  return project.value.category.split(' - ').filter(cat => cat.trim())
})

// SEO Meta
useSeoMeta({
  title: project.value ? `${project.value.title} | Kurbanoğlu Mühendislik` : 'Proje Bulunamadı | Kurbanoğlu Mühendislik',
  description: project.value ? `${project.value.title} - ${project.value.category}` : 'Aradığınız proje bulunamadı.',
  ogTitle: project.value ? `${project.value.title} | Kurbanoğlu Mühendislik` : 'Proje Bulunamadı',
  ogDescription: project.value ? `${project.value.title} - ${project.value.category}` : 'Aradığınız proje bulunamadı.',
  ogImage: project.value ? project.value.image : undefined
})
</script>
