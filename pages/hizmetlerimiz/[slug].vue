<template>
  <div v-if="service">
    <!-- Hero Section -->
    <section class="relative h-[300px] md:h-[400px] flex items-end justify-center overflow-hidden pb-8 md:pb-12">
      <!-- Background -->
      <div class="absolute inset-0 z-0 bg-[#111827]">
        <img 
          :src="service.image" 
          :alt="service.title"
          class="w-full h-full object-cover opacity-60"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-[960px] mx-auto">
        <h1 
          class="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-bold text-white mb-3 md:mb-4"
          style="font-family: 'Inter', sans-serif; letter-spacing: -1px; line-height: 1.1;"
        >
          {{ service.title }}
        </h1>
      </div>
    </section>

    <!-- Breadcrumb -->
    <section class="bg-white py-4 border-b border-gray-200">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <nav class="flex items-center gap-2 text-sm">
          <NuxtLink to="/" class="text-[#064a81] hover:text-[#009BE3] transition-colors">Ana Sayfa</NuxtLink>
          <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" />
          <NuxtLink to="/hizmetlerimiz" class="text-[#064a81] hover:text-[#009BE3] transition-colors">Hizmetlerimiz</NuxtLink>
          <UIcon name="i-heroicons-chevron-right" class="w-4 h-4 text-gray-400" />
          <span class="text-gray-600">{{ service.title }}</span>
        </nav>
      </div>
    </section>

    <!-- Main Content -->
    <section class="bg-white py-8 md:py-12 lg:py-16">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <!-- Content (Detailed) -->
            <div v-if="service.content" class="mb-8">
              <div 
                class="text-[16px] md:text-[18px] font-light text-[#111827] leading-relaxed"
                style="font-family: 'Inter', sans-serif;"
                v-html="formatContent(service.content)"
              ></div>
            </div>

            <!-- Applications -->
            <div v-if="service.applications && service.applications.length > 0" class="mb-8">
              <h2 
                class="text-[20px] md:text-[24px] font-semibold text-[#111827] mb-4"
                style="font-family: 'Inter', sans-serif;"
              >
                Uygulama Alanları
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div 
                  v-for="application in service.applications" 
                  :key="application"
                  class="flex items-center gap-3 bg-gray-50 p-3 rounded-[8px]"
                >
                  <UIcon name="i-heroicons-building-office" class="w-5 h-5 text-[#064a81] flex-shrink-0" />
                  <span 
                    class="text-[15px] font-light text-[#111827]"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    {{ application }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="lg:col-span-1">
            <!-- CTA Card -->
            <div class="bg-[#f5f8fe] rounded-[16px] p-6 md:p-8 mb-8">
              <h3 
                class="text-[20px] font-semibold text-[#064a81] mb-4"
                style="font-family: 'Inter', sans-serif;"
              >
                Hizmet Hakkında Bilgi Alın
              </h3>
              <p 
                class="text-[14px] font-light text-[#111827] mb-6 leading-relaxed"
                style="font-family: 'Inter', sans-serif;"
              >
                Bu hizmetimiz hakkında detaylı bilgi almak ve teklif talebinde bulunmak için bizimle iletişime geçin.
              </p>
              <NuxtLink 
                to="/iletisim"
                class="inline-flex items-center justify-center w-full px-6 py-3 bg-[#064a81] text-white rounded-[8px] text-[16px] font-medium hover:bg-[#053a6a] transition-colors"
                style="font-family: 'Inter', sans-serif;"
              >
                İletişime Geçin
                <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 ml-2" />
              </NuxtLink>
            </div>

            <!-- Related Services -->
            <div v-if="relatedServices.length > 0">
              <h3 
                class="text-[18px] font-semibold text-[#111827] mb-4"
                style="font-family: 'Inter', sans-serif;"
              >
                İlgili Hizmetler
              </h3>
              <div class="space-y-4">
                <NuxtLink
                  v-for="relatedService in relatedServices"
                  :key="relatedService.id"
                  :to="`/hizmetlerimiz/${relatedService.slug}`"
                  class="block bg-white border border-gray-200 rounded-[12px] p-4 hover:border-[#064a81] hover:shadow-md transition-all"
                >
                  <h4 
                    class="text-[16px] font-semibold text-[#111827] mb-2"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    {{ relatedService.title }}
                  </h4>
                  <p 
                    class="text-[14px] font-light text-gray-600 line-clamp-2"
                    style="font-family: 'Inter', sans-serif;"
                  >
                    {{ relatedService.description }}
                  </p>
                </NuxtLink>
              </div>
            </div>
          </div>
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
        Hizmet bulunamadı
      </p>
      <NuxtLink 
        to="/hizmetlerimiz"
        class="inline-flex items-center px-6 py-3 bg-[#064a81] text-white rounded-[8px] text-[16px] font-medium hover:bg-[#053a6a] transition-colors"
        style="font-family: 'Inter', sans-serif;"
      >
        Hizmetler Sayfasına Dön
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { getServiceBySlug, getRelatedServices } = useServices()

const slug = computed(() => {
  const param = route.params.slug
  if (Array.isArray(param)) {
    return param[0] as string
  }
  return param as string
})

const service = computed(() => {
  const slugValue = slug.value
  if (!slugValue) {
    return undefined
  }
  
  const found = getServiceBySlug(slugValue)
  return found
})
const relatedServices = computed(() => {
  if (!service.value) return []
  return getRelatedServices(slug.value, 3)
})

// Format content to HTML - preserve line breaks and format lists
const formatContent = (content: string): string => {
  if (!content) return ''
  
  try {
    // Split by lines and process
    const lines = content.split('\n')
    let html = ''
    let inList = false
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]
      
      // Skip empty lines but close list if open
      if (!line.trim()) {
        if (inList) {
          html += '</ul>'
          inList = false
        }
        html += '<br>'
        continue
      }
      
      // Trim line for processing
      line = line.trim()
      
      // Check if line ends with comma (list item)
      if (line.endsWith(',')) {
        if (!inList) {
          html += '<ul class="list-disc list-inside space-y-2 mb-4 ml-4">'
          inList = true
        }
        const itemText = line.slice(0, -1).trim() // Remove comma
        html += `<li class="text-[16px] font-light text-[#111827] mb-2" style="font-family: 'Inter', sans-serif;">${escapeHtml(itemText)}</li>`
      } else {
        // Regular paragraph
        if (inList) {
          html += '</ul>'
          inList = false
        }
        html += `<p class="text-[16px] md:text-[18px] font-light text-[#111827] leading-relaxed mb-4" style="font-family: 'Inter', sans-serif;">${escapeHtml(line)}</p>`
      }
    }
    
    // Close list if still open
    if (inList) {
      html += '</ul>'
    }
    
    return html
  } catch (error) {
    console.error('Error formatting content:', error)
    return `<p class="text-[16px] md:text-[18px] font-light text-[#111827] leading-relaxed" style="font-family: 'Inter', sans-serif;">${escapeHtml(content)}</p>`
  }
}

// Escape HTML to prevent XSS
const escapeHtml = (text: string): string => {
  if (typeof window === 'undefined') {
    // Server-side: use string replacement
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  } else {
    // Client-side: use DOM
    const div = document.createElement('div')
    div.textContent = text
    return div.innerHTML
  }
}

// SEO Meta
useSeoMeta({
  title: service.value ? `${service.value.title} | Kurbanoğlu Mühendislik` : 'Hizmet Bulunamadı | Kurbanoğlu Mühendislik',
  description: service.value ? service.value.description : 'Aradığınız hizmet bulunamadı.',
  ogTitle: service.value ? `${service.value.title} | Kurbanoğlu Mühendislik` : 'Hizmet Bulunamadı',
  ogDescription: service.value ? service.value.description : 'Aradığınız hizmet bulunamadı.',
  ogImage: service.value ? service.value.image : undefined
})
</script>
