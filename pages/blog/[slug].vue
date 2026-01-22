<template>
  <div v-if="post">
    <!-- Hero Section -->
    <section class="relative h-[350px] md:h-[450px] lg:h-[500px] flex items-end justify-center overflow-hidden pb-10 md:pb-14 lg:pb-16">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          :src="post.image" 
          :alt="post.title" 
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
        <!-- Category & Date -->
        <div class="flex items-center justify-center gap-3 mb-4">
          <span 
            class="px-3 py-1 bg-[#009BE3] text-white text-[12px] md:text-[13px] font-medium rounded-full"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ post.category }}
          </span>
          <span 
            class="text-[13px] md:text-[14px] text-white/80"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ post.date }}
          </span>
          <span 
            class="text-[13px] md:text-[14px] text-white/80"
            style="font-family: 'Inter', sans-serif;"
          >
            {{ post.readTime }}
          </span>
        </div>
        
        <h1 
          class="text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white mb-4 md:mb-6 leading-tight"
          style="font-family: 'Inter', sans-serif; letter-spacing: -1px;"
        >
          {{ post.title }}
        </h1>
        
        <!-- Author -->
        <div class="flex items-center justify-center gap-3">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
            <img 
              v-if="post.author.avatar" 
              :src="post.author.avatar" 
              :alt="post.author.name"
              class="w-6 h-6 md:w-8 md:h-8"
            />
            <UIcon v-else name="i-heroicons-user-circle" class="w-6 h-6 md:w-8 md:h-8 text-white" />
          </div>
          <div class="text-left">
            <p 
              class="text-[14px] md:text-[15px] font-medium text-white"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ post.author.name }}
            </p>
            <p 
              class="text-[12px] md:text-[13px] text-white/70"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ post.author.role }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="bg-white py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="max-w-[800px] mx-auto">
          <!-- Article Content -->
          <article 
            class="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-[#111827]
              prose-h2:text-[24px] prose-h2:md:text-[28px] prose-h2:mt-10 prose-h2:mb-4
              prose-h3:text-[20px] prose-h3:md:text-[22px] prose-h3:mt-8 prose-h3:mb-3
              prose-h4:text-[18px] prose-h4:md:text-[20px] prose-h4:mt-6 prose-h4:mb-2
              prose-p:text-[16px] prose-p:md:text-[17px] prose-p:text-[#4b5563] prose-p:leading-relaxed prose-p:mb-4
              prose-ul:my-4 prose-ul:pl-6
              prose-ol:my-4 prose-ol:pl-6
              prose-li:text-[16px] prose-li:md:text-[17px] prose-li:text-[#4b5563] prose-li:mb-2
              prose-strong:text-[#111827] prose-strong:font-semibold
              prose-a:text-[#064a81] prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-[#064a81] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-[#6b7280]
              prose-code:bg-[#f5f8fe] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-[#009BE3]
              prose-pre:bg-[#1f2937] prose-pre:text-white prose-pre:rounded-lg
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-[#f5f8fe] prose-th:p-3 prose-th:text-left prose-th:border prose-th:border-gray-200
              prose-td:p-3 prose-td:border prose-td:border-gray-200
            "
            style="font-family: 'Inter', sans-serif;"
            v-html="renderedContent"
          />
          
          <!-- Tags -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <h4 
              class="text-[14px] font-medium text-[#6b7280] mb-4"
              style="font-family: 'Inter', sans-serif;"
            >
              Etiketler
            </h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in post.tags" 
                :key="tag"
                class="px-3 py-1.5 bg-[#f5f8fe] text-[#064a81] text-[13px] font-medium rounded-full"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ tag }}
              </span>
            </div>
          </div>
          
          <!-- Share -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <h4 
              class="text-[14px] font-medium text-[#6b7280] mb-4"
              style="font-family: 'Inter', sans-serif;"
            >
              Paylaş
            </h4>
            <div class="flex gap-3">
              <a 
                :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 flex items-center justify-center bg-[#f5f8fe] rounded-full text-[#064a81] hover:bg-[#064a81] hover:text-white transition-all duration-300"
              >
                <UIcon name="i-heroicons-share" class="w-5 h-5" />
              </a>
              <a 
                :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(post.title)}`"
                target="_blank"
                rel="noopener noreferrer"
                class="w-10 h-10 flex items-center justify-center bg-[#f5f8fe] rounded-full text-[#064a81] hover:bg-[#064a81] hover:text-white transition-all duration-300"
              >
                <UIcon name="i-heroicons-link" class="w-5 h-5" />
              </a>
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

    <!-- Related Posts -->
    <section v-if="relatedPosts.length > 0" class="bg-[#f5f8fe] py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <h2 
          class="text-[24px] md:text-[28px] font-semibold text-[#111827] mb-8 md:mb-10"
          style="font-family: 'Inter', sans-serif;"
        >
          İlgili Yazılar
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <NuxtLink 
            v-for="relatedPost in relatedPosts" 
            :key="relatedPost.id"
            :to="`/blog/${relatedPost.slug}`"
            class="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <!-- Image -->
            <div class="h-[200px] md:h-[220px] overflow-hidden">
              <img 
                :src="relatedPost.image" 
                :alt="relatedPost.title"
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
                  {{ relatedPost.category }}
                </span>
                <span 
                  class="text-[12px] text-[#6b7280]"
                  style="font-family: 'Inter', sans-serif;"
                >
                  {{ relatedPost.date }}
                </span>
              </div>
              <h3 
                class="text-[18px] md:text-[20px] font-semibold text-[#111827] mb-2 group-hover:text-[#064a81] transition-colors line-clamp-2"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ relatedPost.title }}
              </h3>
              <p 
                class="text-[14px] font-light text-[#4b5563] line-clamp-3"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ relatedPost.excerpt }}
              </p>
            </div>
          </NuxtLink>
        </div>
        
        <!-- Back to Blog -->
        <div class="flex justify-center mt-10 md:mt-12">
          <NuxtLink 
            to="/blog"
            class="inline-flex items-center gap-2 px-6 py-3 border border-[#064a81] rounded-[8px] text-[16px] font-medium text-[#064a81] hover:bg-[#064a81] hover:text-white transition-all duration-300"
            style="font-family: 'Inter', sans-serif;"
          >
            <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
            Tüm Yazılar
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="min-h-[60vh] flex items-center justify-center bg-[#f5f8fe]">
    <div class="text-center px-4">
      <UIcon name="i-heroicons-document-magnifying-glass" class="w-20 h-20 text-[#064a81]/30 mx-auto mb-6" />
      <h1 
        class="text-[28px] md:text-[36px] font-bold text-[#111827] mb-4"
        style="font-family: 'Inter', sans-serif;"
      >
        Yazı Bulunamadı
      </h1>
      <p 
        class="text-[16px] md:text-[18px] text-[#6b7280] mb-8"
        style="font-family: 'Inter', sans-serif;"
      >
        Aradığınız blog yazısı mevcut değil veya kaldırılmış olabilir.
      </p>
      <NuxtLink 
        to="/blog"
        class="inline-flex items-center gap-2 px-6 py-3 bg-[#064a81] text-white rounded-[8px] text-[16px] font-medium hover:bg-[#053a66] transition-all duration-300"
        style="font-family: 'Inter', sans-serif;"
      >
        <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
        Blog'a Dön
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlog } from '~/composables/useBlog'

const route = useRoute()
const { getPostBySlug, getRelatedPosts, blogPosts } = useBlog()

const slug = computed(() => route.params.slug as string)
const post = computed(() => getPostBySlug(slug.value))

// Get related posts (same category, excluding current)
const relatedPosts = computed(() => {
  if (!post.value) return []
  return getRelatedPosts(slug.value, 3)
})

// If no related posts in same category, get random posts
const displayedRelatedPosts = computed(() => {
  if (relatedPosts.value.length > 0) return relatedPosts.value
  return blogPosts
    .filter(p => p.slug !== slug.value)
    .slice(0, 3)
})

// Current URL for sharing
const currentUrl = computed(() => {
  if (import.meta.client) {
    return window.location.href
  }
  return ''
})

// Simple markdown to HTML converter
const renderedContent = computed(() => {
  if (!post.value) return ''
  
  let html = post.value.content
    // Headers
    .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Lists
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    // Paragraphs - wrap non-tagged content
    .split('\n\n')
    .map(block => {
      block = block.trim()
      if (!block) return ''
      if (block.startsWith('<h') || block.startsWith('<li') || block.startsWith('<table') || block.startsWith('|')) {
        return block
      }
      // Handle list items
      if (block.includes('<li>')) {
        return `<ul>${block}</ul>`
      }
      return `<p>${block}</p>`
    })
    .join('\n')
    // Tables (basic support)
    .replace(/\|(.+)\|/g, (match) => {
      const cells = match.split('|').filter(c => c.trim())
      if (cells.some(c => c.includes('---'))) return ''
      const isHeader = match.includes('Parametre') || match.includes('Tesis') || match.includes('Teknoloji') || match.includes('Katman')
      const tag = isHeader ? 'th' : 'td'
      return `<tr>${cells.map(c => `<${tag}>${c.trim()}</${tag}>`).join('')}</tr>`
    })
  
  // Wrap tables
  html = html.replace(/(<tr>.*?<\/tr>\s*)+/gs, '<table class="w-full border-collapse my-6">$&</table>')
  
  return html
})

// SEO Meta
useSeoMeta({
  title: () => post.value ? `${post.value.title} | Kurbanoğlu Mühendislik Blog` : 'Yazı Bulunamadı | Kurbanoğlu Mühendislik',
  description: () => post.value?.excerpt || 'Aradığınız blog yazısı bulunamadı.',
  ogTitle: () => post.value?.title || 'Yazı Bulunamadı',
  ogDescription: () => post.value?.excerpt || 'Aradığınız blog yazısı bulunamadı.',
  ogImage: () => post.value?.image || '',
  ogType: 'article',
  articlePublishedTime: () => post.value?.date || '',
  articleAuthor: () => post.value?.author.name || ''
})

// Structured Data for SEO
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => {
        if (!post.value) return ''
        return JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.value.title,
          description: post.value.excerpt,
          image: post.value.image,
          datePublished: post.value.date,
          author: {
            '@type': 'Organization',
            name: post.value.author.name
          },
          publisher: {
            '@type': 'Organization',
            name: 'Kurbanoğlu Mühendislik',
            logo: {
              '@type': 'ImageObject',
              url: '/images/logo.svg'
            }
          }
        })
      })
    }
  ]
})
</script>
