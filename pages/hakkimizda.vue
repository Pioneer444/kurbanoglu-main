<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[477px] flex items-end justify-center overflow-hidden pb-8 md:pb-10 lg:pb-12">
      <div class="absolute inset-0 z-0 bg-[#111827]">
        <img 
          src="~/assets/images/about/hakkımızda-banner.jpg" 
          alt="Hakkımızda"
          class="w-full h-full object-cover opacity-40"
        />
      </div>
      <div class="relative z-10 text-center px-4">
        <h1 
          class="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-white leading-tight mb-4"
          style="font-family: 'Inter', sans-serif;"
        >
          Enerjinin Gücünü<br>Geleceğe Taşıyoruz
        </h1>
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-white max-w-[600px] mx-auto"
          style="font-family: 'Inter', sans-serif;"
        >
          20 yılı aşkın tecrübemizle endüstriyel elektrik, otomasyon ve mühendislik çözümlerinde sektörün öncüsüyüz.
        </p>
      </div>
    </section>

    <!-- Biz Kimiz Section -->
    <section class="bg-white py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="flex flex-col items-center gap-8">
          <!-- Badge -->
          <span 
            class="px-4 py-2 border border-[#064a81] rounded-[8px] text-[16px] font-medium text-[#111827]"
            style="font-family: 'Inter', sans-serif;"
          >
            Biz Kimiz?
          </span>

          <!-- Description -->
          <p 
            class="text-[18px] font-light text-[#111827] text-center max-w-[1140px] leading-[1.6]"
            style="font-family: 'Inter', sans-serif;"
          >
            Endüstriyel elektrik taahhüt ve danışmanlık alanında <span class="text-[#009BE3] font-medium">yüksek teknoloji çözümleriyle</span> enerji verimliliğini ve güvenliği esas alıyoruz. Kurulduğumuz günden bu yana uluslararası standartlarda projelere imza atıyor, uzman kadromuz ve yenilikçi yaklaşımımızla ölçek farketmeksizin sanayi tesislerinin enerji altyapısını en verimli şekilde tasarlıyor, uyguluyor ve kontrollerini sağlıyoruz.
          </p>

          <!-- Stats -->
          <div class="flex flex-wrap justify-center gap-8 md:gap-16 lg:gap-24 mt-4">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <p class="text-[32px] md:text-[36px] font-bold text-sky-500" style="font-family: 'Inter', sans-serif;">
                {{ stat.value }}
              </p>
              <p class="text-[14px] text-[#111827] tracking-wider" style="font-family: 'Inter', sans-serif;">
                {{ stat.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vizyon & Misyon Section -->
    <section class="bg-[#f5f8fe] py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="flex flex-col items-center gap-8 mb-10">
          <!-- Badge -->
          <span 
            class="px-4 py-2 border border-[#064a81] rounded-[8px] text-[16px] font-medium text-[#111827]"
            style="font-family: 'Inter', sans-serif;"
          >
            Vizyon & Misyon
          </span>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <!-- Vizyon Card -->
          <div 
            class="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-[#009BE3]"
          >
            <div class="h-[200px] md:h-[292px] overflow-hidden">
              <img 
                src="~/assets/images/about/vizyon.png" 
                alt="Vizyon"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6 md:p-8">
              <div class="flex items-center gap-3 mb-4">
                <img 
                  :src="vizyonIcon" 
                  alt="Vizyon" 
                  class="w-8 h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
                <h3 class="text-[20px] md:text-[24px] font-bold text-[#111827] group-hover:text-white transition-colors duration-300" style="font-family: 'Inter', sans-serif;">
                  Vizyonumuz
                </h3>
              </div>
              <p class="text-[16px] md:text-[20px] text-[#111827] group-hover:text-white leading-[1.4] transition-colors duration-300" style="font-family: 'Inter', sans-serif;">
                Global ölçekte tanınan, mühendislik etiğine bağlı, çevreye duyarlı ve teknolojik gelişmelere öncülük eden lider bir mühendislik firması olmak. Teknolojinin sınırlarını zorlayarak sürdürülebilir bir gelecek inşa etmek.
              </p>
            </div>
          </div>

          <!-- Misyon Card -->
          <div 
            class="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-[#009BE3]"
          >
            <div class="h-[200px] md:h-[292px] overflow-hidden">
              <img 
                src="~/assets/images/about/misyon.png" 
                alt="Misyon"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-6 md:p-8">
              <div class="flex items-center gap-3 mb-4">
                <img 
                  :src="misyonIcon" 
                  alt="Misyon" 
                  class="w-8 h-8 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
                <h3 class="text-[20px] md:text-[24px] font-bold text-[#111827] group-hover:text-white transition-colors duration-300" style="font-family: 'Inter', sans-serif;">
                  Misyonumuz
                </h3>
              </div>
              <p class="text-[16px] md:text-[20px] text-[#111827] group-hover:text-white leading-[1.4] transition-colors duration-300" style="font-family: 'Inter', sans-serif;">
                Müşterilerimize en güvenilir, verimli ve sürdürülebilir enerji çözümlerini sunarak, endüstriyel alanda katma değer yaratmak.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Temel Değerlerimiz Section -->
    <section class="bg-white py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="flex flex-col items-center gap-8 mb-10">
          <!-- Badge -->
          <span 
            class="px-4 py-2 border border-[#064a81] rounded-[8px] text-[16px] font-medium text-[#111827]"
            style="font-family: 'Inter', sans-serif;"
          >
            Temel Değerlerimiz
          </span>
        </div>

        <!-- Values Grid - Figma: 270x205px cards, 48x48 icons -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <div 
            v-for="value in values" 
            :key="value.title"
            class="group bg-white rounded-[16px] h-[180px] md:h-[205px] flex flex-col items-center justify-center text-center shadow-md hover:shadow-2xl hover:bg-[#009BE3] transition-all duration-300 cursor-pointer"
          >
            <img 
              :src="value.icon" 
              :alt="value.title"
              class="w-10 h-10 md:w-12 md:h-12 mb-4 transition-all duration-300 group-hover:brightness-0 group-hover:invert"
            />
            <h3 class="text-[18px] md:text-[24px] font-medium text-[#111827] group-hover:text-white transition-colors duration-300" style="font-family: 'Inter', sans-serif;">
              {{ value.title }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Tarihçemiz Section -->
    <section class="bg-[#111827] py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="flex flex-col items-center gap-8 mb-10">
          <!-- Badge -->
          <span 
            class="px-4 py-2 border border-white rounded-[8px] text-[16px] font-medium text-white"
            style="font-family: 'Inter', sans-serif;"
          >
            Tarihçemiz
          </span>
        </div>

        <!-- Timeline -->
        <div class="relative max-w-[800px] mx-auto">
          <!-- Vertical Line -->
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent transform md:-translate-x-1/2"></div>

          <!-- Timeline Items -->
          <div class="space-y-8 md:space-y-12">
            <div 
              v-for="(item, index) in timeline" 
              :key="item.year"
              class="relative flex items-start gap-6 md:gap-0"
              :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
            >
              <!-- Dot -->
              <div 
                class="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 bg-[#111827] transform md:-translate-x-1/2 z-10"
                :class="item.highlight ? 'border-[#009BE3]' : 'border-[#064a81]'"
              ></div>

              <!-- Content -->
              <div class="ml-12 md:ml-0 md:w-1/2 md:px-8" :class="index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'">
                <div class="flex items-baseline gap-2" :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">
                  <span class="text-[28px] md:text-[32px] font-bold text-[#f5f8fe]" style="font-family: 'Inter', sans-serif;">
                    {{ item.year }}
                  </span>
                  <span class="text-[18px] md:text-[20px] text-[#f5f8fe]" style="font-family: 'Inter', sans-serif;">
                    {{ item.title }}
                  </span>
                </div>
                <p class="text-[14px] md:text-[15px] text-[#064a81] mt-2" style="font-family: 'Inter', sans-serif;">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Neden Bizi Tercih Etmelisiniz Section -->
    <section class="bg-[#f5f8fe] py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <!-- Content -->
          <div>
            <h2 class="text-[20px] md:text-[24px] font-semibold text-[#064a81] mb-4" style="font-family: 'Inter', sans-serif;">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p class="text-[16px] md:text-[20px] font-light text-[#111827] mb-6 leading-[1.4]" style="font-family: 'Inter', sans-serif;">
              Her biri kendi alanında uzman mühendis kadromuz ve teknik ekiplerimizle, projenizin her aşamasında yanınızdayız. Sorunsuz altyapı, maksimum verimlilik.
            </p>
            
            <!-- List -->
            <ul class="space-y-3 mb-8">
              <li v-for="item in benefits" :key="item" class="flex items-center gap-3">
                <UIcon name="i-heroicons-check-circle" class="w-6 h-6 text-[#064a81] flex-shrink-0" />
                <span class="text-[14px] md:text-[16px] font-light text-[#111827]" style="font-family: 'Inter', sans-serif;">
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
          <div class="rounded-[16px] overflow-hidden">
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
import vizyonIcon from '~/assets/icons/vizyon.svg'
import misyonIcon from '~/assets/icons/misyon.svg'
import shieldTickIcon from '~/assets/icons/shield-tick.svg'
import lampOnIcon from '~/assets/icons/lamp-on.svg'
import treeIcon from '~/assets/icons/tree.svg'
import userIcon from '~/assets/icons/user.svg'

// SEO Meta
useSeoMeta({
  title: 'Hakkımızda | Kurbanoğlu Mühendislik',
  description: 'Kurbanoğlu Mühendislik hakkında - 20 yılı aşkın tecrübemizle endüstriyel elektrik, otomasyon ve mühendislik çözümlerinde sektörün öncüsüyüz.',
  ogTitle: 'Hakkımızda | Kurbanoğlu Mühendislik',
  ogDescription: 'Kurbanoğlu Mühendislik hakkında - 20 yılı aşkın tecrübemizle endüstriyel elektrik, otomasyon ve mühendislik çözümlerinde sektörün öncüsüyüz.'
})

const stats = [
  { value: '500+', label: 'Tamamlanan Proje' },
  { value: '300+', label: 'Periyodik Kontrol' },
  { value: '20+', label: 'Yıllık Tecrübe' }
]

const values = [
  { title: 'Güvenilirlik', icon: shieldTickIcon },
  { title: 'İnovasyon', icon: lampOnIcon },
  { title: 'Çevre', icon: treeIcon },
  { title: 'Müşteri', icon: userIcon }
]

const timeline = [
  {
    year: '2014',
    title: 'Kuruluş',
    description: 'Şirketimiz İstanbul\'da küçük bir mühendislik ofisi olarak kuruldu. İlk adımlar atıldı.',
    highlight: false
  },
  {
    year: '2017',
    title: 'Büyüme',
    description: 'İlk büyük ölçekli endüstriyel otomasyon projemizi tamamladık. Sektörde tanınmaya başladık.',
    highlight: false
  },
  {
    year: '2019',
    title: 'Ulusal Çap',
    description: 'Hizmet ağımızı genişleterek 81 ilde proje yürütmeye başladık.',
    highlight: false
  },
  {
    year: '2026',
    title: 'Global Vizyon',
    description: 'Yurtdışı operasyonlarımız başladı ve AR-GE departmanımız kuruldu.',
    highlight: true
  }
]

const benefits = [
  'Uluslararası kalite standartlarında (ISO) hizmet',
  '7/24 Teknik destek ve bakım hizmetleri',
  'Zamanında teslim ve bütçe dostu çözümler'
]
</script>
