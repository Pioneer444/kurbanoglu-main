<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[484px] flex items-end justify-center overflow-hidden pb-10 md:pb-14 lg:pb-16">
      <!-- Background -->
      <div class="absolute inset-0 z-0 bg-[#111827]">
        <img 
          src="~/assets/images/services/Whisk_d646e1fca9fe0109b3047837b22f5d80dr 2.png" 
          alt="Hizmetlerimiz"
          class="w-full h-full object-cover opacity-60"
        />
        <!-- Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-[960px] mx-auto">
        <h1 
          class="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-bold text-white mb-4 md:mb-6"
          style="font-family: 'Inter', sans-serif; letter-spacing: -1.26px; line-height: 1.1;"
        >
          Endüstriyel Elektrik, Projelendirme ve<br> Periyodik Kontrol Hizmetlerimiz
        </h1>
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-white max-w-[800px] mx-auto"
          style="font-family: 'Inter', sans-serif; line-height: 1.25;"
        >
          Endüstriyel elektrikten ölçüm ve kontrollere kadar tüm süreçlerde, güvenli, verimli ve mevzuata uygun çözümler sunarak tesisleriniz için profesyonel hizmet sağlıyoruz.
        </p>
      </div>
    </section>

    <!-- Services Section -->
    <section class="bg-[#111827] py-8 md:py-12 lg:py-16">
      <div class="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8">
        <!-- Tab Navigation -->
        <div class="bg-[#212734] rounded-[12px] p-1 mb-6 md:mb-8">
          <div class="flex flex-col md:flex-row gap-2 md:gap-3 w-full">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              class="w-full md:flex-1 px-4 md:px-6 py-2.5 md:py-3 rounded-[10px] text-[14px] md:text-[16px] font-normal transition-all duration-300 text-center"
              :class="activeTab === tab.id 
                ? 'bg-white text-[#212734]' 
                : 'bg-transparent text-white hover:bg-white/10'"
              style="font-family: 'Poppins', sans-serif;"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Service Cards -->
        <div class="space-y-4 md:space-y-5">
          <NuxtLink
            v-for="service in filteredServices"
            :key="service.id"
            :to="`/hizmetlerimiz/${service.slug}`"
            class="group bg-[#212734] rounded-[16px] p-4 md:p-5 lg:p-[16px] flex flex-col md:flex-row gap-4 md:gap-5 lg:gap-6 cursor-pointer hover:bg-[#2d3444] transition-all duration-300 block"
          >
            <!-- Image -->
            <div class="w-full md:w-[180px] h-[180px] flex-shrink-0 rounded-[8px] overflow-hidden">
              <img 
                :src="service.image" 
                :alt="service.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Content -->
            <div class="flex-1 flex flex-col justify-between">
              <div>
                <h3 
                  class="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-white mb-2 md:mb-3"
                  style="font-family: 'Inter', sans-serif; line-height: 30.43px;"
                >
                  {{ service.title }}
                </h3>
                <p 
                  class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-white leading-[25px] text-justify"
                  style="font-family: 'Inter', sans-serif;"
                >
                  {{ service.description }}
                </p>
              </div>

              <!-- Explore Link -->
              <div class="flex items-center justify-end gap-2 mt-4">
                <span 
                  class="text-[18px] md:text-[20px] font-semibold text-[#2766A7] group-hover:text-[#009BE3] transition-colors"
                  style="font-family: 'Inter', sans-serif; line-height: 30.43px;"
                >
                  İncele
                </span>
                <UIcon name="i-heroicons-arrow-right" class="w-6 h-6 text-[#2766A7] group-hover:text-[#009BE3] transition-colors" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Neden Bizi Tercih Etmelisiniz Section -->
    <section class="bg-white py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <!-- Content -->
          <div>
            <h2 
              class="text-[20px] md:text-[24px] font-semibold text-[#064a81] mb-4"
              style="font-family: 'Inter', sans-serif;"
            >
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p 
              class="text-[16px] md:text-[20px] font-light text-[#111827] mb-6 leading-relaxed"
              style="font-family: 'Inter', sans-serif;"
            >
              Her biri kendi alanında uzman mühendis kadromuz ve teknik ekiplerimizle, projenizin her aşamasında yanınızdayız. Sorunsuz altyapı, maksimum verimlilik.
            </p>
            
            <!-- List -->
            <ul class="space-y-3 mb-8">
              <li 
                v-for="item in benefits" 
                :key="item" 
                class="flex items-center gap-3"
              >
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-[#064a81] flex-shrink-0" />
                <span 
                  class="text-[14px] md:text-[16px] font-light text-[#111827]"
                  style="font-family: 'Inter', sans-serif;"
                >
                  {{ item }}
                </span>
              </li>
            </ul>

            <!-- CTA Button -->
            <NuxtLink 
              to="/iletisim"
              class="inline-flex px-6 py-3 border border-[#064a81] rounded-[8px] text-[16px] text-[#064a81] hover:bg-[#064a81] hover:text-white transition-colors"
              style="font-family: 'Inter', sans-serif;"
            >
              Ekibimizle Tanışın
            </NuxtLink>
          </div>

          <!-- Image -->
          <div class="rounded-[14px] overflow-hidden">
            <img 
              src="~/assets/images/about/team.png" 
              alt="Ekibimiz"
              class="w-full h-[300px] md:h-[400px] lg:h-[547px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Hizmetlerimiz | Kurbanoğlu Mühendislik',
  description: 'Endüstriyel elektrik, projelendirme ve periyodik kontrol hizmetlerimiz. Yüksek gerilim, trafo, pano tasarımı, kompanzasyon sistemleri ve daha fazlası.',
  ogTitle: 'Hizmetlerimiz | Kurbanoğlu Mühendislik',
  ogDescription: 'Endüstriyel elektrik, projelendirme ve periyodik kontrol hizmetlerimiz. Yüksek gerilim, trafo, pano tasarımı, kompanzasyon sistemleri ve daha fazlası.'
})

const route = useRoute()
const { services, serviceCategories } = useServices()
const activeTab = ref(route.query.tab?.toString() || 'endustriyel')

const tabs = serviceCategories.map(cat => ({
  id: cat.id,
  label: cat.label
}))

const filteredServices = computed(() => {
  return services.filter(service => service.category === activeTab.value)
})

const benefits = [
  'Uluslararası kalite standartlarında (ISO) hizmet',
  '7/24 Teknik destek ve bakım hizmetleri',
  'Zamanında teslim ve bütçe dostu çözümler'
]
</script>
