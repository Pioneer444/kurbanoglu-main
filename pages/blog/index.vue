<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[484px] flex items-end justify-center overflow-hidden pb-10 md:pb-14 lg:pb-16">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="~/assets/images/blog/Whisk_c97cce2bdd16dc388a246eaf5cc0db46eg.png" 
          alt="Blog" 
          class="w-full h-full object-cover"
        />
        <!-- Gradient Overlay -->
        <div 
          class="absolute inset-0"
          style="background: linear-gradient(180deg, rgba(17, 24, 39, 0.3) 0%, rgba(17, 24, 39, 0.7) 60%, #111827 100%);"
        ></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-[960px] mx-auto">
        <h1 
          class="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-white mb-4 md:mb-6"
          style="font-family: 'Inter', sans-serif; letter-spacing: -1.26px; line-height: 1.1;"
        >
          Haberler ve Makaleler
        </h1>
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-white/90 max-w-[700px] mx-auto"
          style="font-family: 'Inter', sans-serif; line-height: 1.5;"
        >
          Endüstriyel elektrik, otomasyon ve mühendislik alanındaki güncel gelişmeler, teknik bilgiler ve sektör haberleri.
        </p>
      </div>
    </section>

    <!-- Categories -->
    <section class="bg-[#f5f8fe] py-6 md:py-8 border-b border-gray-200">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="flex flex-wrap justify-center gap-3 md:gap-4">
          <button 
            v-for="category in blogCategories" 
            :key="category.id"
            class="px-4 md:px-6 py-2 rounded-full text-[14px] md:text-[15px] font-medium transition-all duration-300"
            :class="activeCategory === category.id 
              ? 'bg-[#064a81] text-white' 
              : 'bg-white text-[#111827] hover:bg-[#064a81] hover:text-white'"
            style="font-family: 'Inter', sans-serif;"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="bg-[#f5f8fe] py-12 md:py-16">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <NuxtLink 
          :to="`/blog/${featuredPost.slug}`"
          class="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-[20px] overflow-hidden shadow-lg group"
        >
          <!-- Image -->
          <div class="h-[250px] md:h-[350px] lg:h-full overflow-hidden">
            <img 
              :src="featuredPost.image" 
              :alt="featuredPost.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <!-- Content -->
          <div class="p-6 md:p-8 lg:p-12 flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-4">
              <span 
                class="px-3 py-1 bg-[#009BE3] text-white text-[12px] font-medium rounded-full"
                style="font-family: 'Inter', sans-serif;"
              >
                Öne Çıkan
              </span>
              <span 
                class="text-[14px] text-[#6b7280]"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ featuredPost.date }}
              </span>
            </div>
            <h2 
              class="text-[24px] md:text-[28px] lg:text-[32px] font-bold text-[#111827] mb-4 leading-tight group-hover:text-[#064a81] transition-colors"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ featuredPost.title }}
            </h2>
            <p 
              class="text-[16px] md:text-[18px] font-light text-[#4b5563] mb-6 leading-relaxed"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ featuredPost.excerpt }}
            </p>
            <span
              class="inline-flex items-center gap-2 text-[16px] font-medium text-[#064a81] group-hover:text-[#009BE3] transition-colors"
              style="font-family: 'Inter', sans-serif;"
            >
              Devamını Oku
              <UIcon name="i-heroicons-arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="bg-[#f5f8fe] py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <!-- Section Header -->
        <div class="flex items-center justify-between mb-8 md:mb-10">
          <h2 
            class="text-[24px] md:text-[28px] font-semibold text-[#111827]"
            style="font-family: 'Inter', sans-serif;"
          >
            Son Yazılar
          </h2>
        </div>

        <!-- Posts Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <NuxtLink 
            v-for="post in displayedPosts" 
            :key="post.id"
            :to="`/blog/${post.slug}`"
            class="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <!-- Image -->
            <div class="h-[200px] md:h-[220px] overflow-hidden">
              <img 
                :src="post.image" 
                :alt="post.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <!-- Content -->
            <div class="p-5 md:p-6">
              <div class="flex items-center gap-3 mb-3">
                <span 
                  class="px-2 py-1 bg-[#f5f8fe] text-[#064a81] text-[12px] font-medium rounded"
                  style="font-family: 'Inter', sans-serif;"
                >
                  {{ post.category }}
                </span>
                <span 
                  class="text-[12px] text-[#6b7280]"
                  style="font-family: 'Inter', sans-serif;"
                >
                  {{ post.date }}
                </span>
              </div>
              <h3 
                class="text-[18px] md:text-[20px] font-semibold text-[#111827] mb-2 group-hover:text-[#064a81] transition-colors line-clamp-2"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ post.title }}
              </h3>
              <p 
                class="text-[14px] font-light text-[#4b5563] line-clamp-3"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ post.excerpt }}
              </p>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty State -->
        <div v-if="filteredPosts.length === 0" class="text-center py-12">
          <UIcon name="i-heroicons-document-text" class="w-16 h-16 text-[#064a81]/30 mx-auto mb-4" />
          <p 
            class="text-[18px] text-[#6b7280]"
            style="font-family: 'Inter', sans-serif;"
          >
            Bu kategoride henüz yazı bulunmuyor.
          </p>
        </div>

        <!-- Load More / Show Less Button -->
        <div v-if="filteredPosts.length > 3" class="flex justify-center mt-10 md:mt-12">
          <button 
            class="px-8 py-3 border border-[#064a81] rounded-[8px] text-[16px] font-medium text-[#064a81] hover:bg-[#064a81] hover:text-white transition-all duration-300 flex items-center gap-2"
            style="font-family: 'Inter', sans-serif;"
            @click="showAll = !showAll"
          >
            <span>{{ showAll ? 'Daha Az Göster' : 'Daha Fazla Göster' }}</span>
            <UIcon 
              :name="showAll ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" 
              class="w-5 h-5 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useBlog, featuredPost, blogCategories } from '~/composables/useBlog'

// SEO Meta
useSeoMeta({
  title: 'Blog | Kurbanoğlu Mühendislik',
  description: 'Endüstriyel elektrik, otomasyon ve mühendislik alanındaki güncel gelişmeler, teknik bilgiler ve sektör haberleri.',
  ogTitle: 'Blog | Kurbanoğlu Mühendislik',
  ogDescription: 'Endüstriyel elektrik, otomasyon ve mühendislik alanındaki güncel gelişmeler, teknik bilgiler ve sektör haberleri.'
})

const { getPostsByCategory } = useBlog()

const activeCategory = ref('all')
const showAll = ref(false)

// Reset showAll when category changes
watch(activeCategory, () => {
  showAll.value = false
})

const filteredPosts = computed(() => {
  return getPostsByCategory(activeCategory.value)
})

const displayedPosts = computed(() => {
  if (showAll.value) {
    return filteredPosts.value
  }
  return filteredPosts.value.slice(0, 3)
})
</script>
