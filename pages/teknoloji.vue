<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[400px] md:h-[477px] flex items-end justify-center overflow-hidden pb-10 md:pb-14 lg:pb-16 bg-[#111827]">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <img 
          src="~/assets/images/technology/Whisk_79338e5ad4440dbb37f43ff4babb1221dr 1.png" 
          alt="Teknoloji"
          class="w-full h-full object-cover opacity-50"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
      </div>
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-[960px] mx-auto">
        <h1 
          class="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold text-white mb-4 md:mb-6"
          style="font-family: 'Inter', sans-serif; letter-spacing: -1.26px; line-height: 1;"
        >
          Geleceği Tasarlayan<br>Akıllı Teknolojiler
        </h1>
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-white max-w-[735px] mx-auto"
          style="font-family: 'Inter', sans-serif; line-height: 1.25;"
        >
          Endüstriyel tesislerden modern yaşam alanlarına kadar, en son teknoloji mühendislik çözümleri ile verimliliği ve güvenliği en üst düzeye çıkarıyoruz.
        </p>
      </div>
    </section>

    <!-- Teknoloji ve Mühendislik Çözümleri Section -->
    <section class="bg-[#f5f8fe] py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <!-- Header -->
        <div class="flex flex-col items-center gap-6 mb-10 md:mb-12 lg:mb-16">
          <span 
            class="px-6 py-2 border border-[#064a81] rounded-[8px] text-[16px] font-medium text-[#111827]"
            style="font-family: 'Inter', sans-serif;"
          >
            Teknoloji ve Mühendislik Çözümleri
          </span>
          <p 
            class="text-[16px] md:text-[18px] font-light text-[#111827] text-center max-w-[836px] leading-[1.6]"
            style="font-family: 'Inter', sans-serif;"
          >
            Güncel teknolojiler ve mühendislik prensipleri doğrultusunda; akıllı otomasyon sistemleri, güvenlik odaklı analiz yöntemleri ve uluslararası standartlara uygun teknik uygulamalar sunuyoruz. <span class="text-[#009BE3] font-semibold">Yenilikçi yaklaşımımızla</span> projelerde verimlilik, güvenlik ve sürdürülebilirliği bir arada sağlıyoruz.
          </p>
        </div>

        <!-- Feature Cards -->
        <div class="space-y-8 md:space-y-10">
          <!-- Akıllı Ev Otomasyon Sistemleri -->
          <div class="grid grid-cols-1 lg:grid-cols-2 rounded-[16px] overflow-hidden bg-[#f5f8fe]">
            <!-- Image -->
            <div class="h-[300px] md:h-[400px] lg:h-[540px]">
              <img 
                src="~/assets/images/technology/Whisk_337bd4f03ba634596d54ae2a739249e3dr 1.png" 
                alt="Akıllı Ev Otomasyon Sistemleri"
                class="w-full h-full object-cover"
              />
            </div>
            <!-- Content -->
            <div class="bg-[#f5f8fe] p-6 md:p-8 lg:p-12 flex flex-col justify-center">
              <h2 
                class="text-[20px] md:text-[24px] font-semibold text-[#064a81] mb-4 md:mb-6"
                style="font-family: 'Inter', sans-serif;"
              >
                Akıllı Ev Otomasyon Sistemleri
              </h2>
              <p 
                class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#111827] leading-relaxed text-justify"
                style="font-family: 'Inter', sans-serif;"
              >
                Akıllı ev otomasyon sistemleri, yaşam alanlarınızı daha konforlu, güvenli ve enerji verimli hale getiren modern teknolojilerdir. Aydınlatma, ısıtma-soğutma, güvenlik, perde, kamera ve elektronik cihazlar tek bir merkezden veya mobil uygulama üzerinden kolayca kontrol edilebilir.
              </p>
              <p 
                class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#111827] leading-relaxed text-justify mt-4"
                style="font-family: 'Inter', sans-serif;"
              >
                Bu sistemler sayesinde evinizi uzaktan yönetebilir, enerji tüketimini optimize edebilir ve günlük yaşamınızı daha pratik hale getirebilirsiniz. Akıllı ev çözümleri hem yeni projelerde hem de mevcut yapılarda uygulanabilir esnek altyapılar sunar.
              </p>
            </div>
          </div>

          <!-- Elektriksel Risk Analizi -->
          <div class="grid grid-cols-1 lg:grid-cols-2 rounded-[16px] overflow-hidden bg-[#f5f8fe]">
            <!-- Content (Left on desktop) -->
            <div class="bg-[#f5f8fe] p-6 md:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <h2 
                class="text-[20px] md:text-[24px] font-semibold text-[#064a81] mb-4 md:mb-6"
                style="font-family: 'Inter', sans-serif;"
              >
                Elektriksel Risk Analizi
              </h2>
              <p 
                class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#111827] leading-relaxed text-justify"
                style="font-family: 'Inter', sans-serif;"
              >
                Elektriksel risk analizi, iş yerlerinde ve tesislerde elektrik kaynaklı tehlikelerin belirlenmesi, değerlendirilmesi ve kontrol altına alınması amacıyla yapılan sistematik bir çalışmadır. Elektrik çarpması, yangın, kısa devre ve ekipman arızaları gibi risklerin önceden tespit edilmesini sağlar.
              </p>
              <p 
                class="text-[16px] md:text-[18px] lg:text-[20px] font-light text-[#111827] leading-relaxed text-justify mt-4"
                style="font-family: 'Inter', sans-serif;"
              >
                Uzman ekipler tarafından gerçekleştirilen elektriksel risk analizi; yürürlükteki iş sağlığı ve güvenliği mevzuatına uygun olarak yapılır ve işletmenizin güvenliğini artırırken yasal yükümlülüklerinizi yerine getirmenize yardımcı olur.
              </p>
            </div>
            <!-- Image (Right on desktop) -->
            <div class="h-[300px] md:h-[400px] lg:h-[540px] order-1 lg:order-2">
              <img 
                src="~/assets/images/technology/Whisk_47e18fb095a00e19b504fdef668d9ffcdr 1.png" 
                alt="Elektriksel Risk Analizi"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Standartlar ve Sertifikalar Section -->
    <section class="bg-[#f5f8fe] py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <!-- Header -->
        <div class="flex flex-col items-center gap-6 mb-10 md:mb-12">
          <span 
            class="px-6 py-2 border border-[#111827] rounded-[10px] text-[16px] md:text-[17px] font-normal text-[#111827]"
            style="font-family: 'Inter', sans-serif;"
          >
            Standartlar ve Sertifikalar
          </span>
          <p 
            class="text-[14px] md:text-[15px] font-normal text-[#4b5563] text-center max-w-[522px]"
            style="font-family: 'Inter', sans-serif;"
          >
            Tüm süreçlerimiz ulusal ve uluslararası kalite standartlarına tam uyumluluk çerçevesinde yönetilmektedir.
          </p>
        </div>

        <!-- Certificates Grid -->
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <div 
            v-for="cert in certificates" 
            :key="cert.code"
            class="bg-white rounded-[16px] p-6 md:p-8 flex flex-col items-center justify-center text-center h-[160px] md:h-[180px] border border-[#e5e7eb] hover:shadow-lg transition-shadow duration-300"
          >
            <span 
              class="text-[24px] md:text-[34px] font-bold text-[#d1d5db] mb-2"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ cert.abbr }}
            </span>
            <span 
              class="text-[14px] md:text-[17px] font-bold text-[#111827] mb-1"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ cert.code }}
            </span>
            <span 
              class="text-[10px] md:text-[11px] font-normal text-[#111827]"
              style="font-family: 'Inter', sans-serif;"
            >
              {{ cert.name }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Teknoloji | Kurbanoğlu Mühendislik',
  description: 'Akıllı ev otomasyon sistemleri, elektriksel risk analizi ve uluslararası standartlara uygun teknolojik çözümler. ISO 9001, IEC 61439, OHSAS 18001 sertifikalı hizmetler.',
  ogTitle: 'Teknoloji | Kurbanoğlu Mühendislik',
  ogDescription: 'Akıllı ev otomasyon sistemleri, elektriksel risk analizi ve uluslararası standartlara uygun teknolojik çözümler.'
})

const certificates = [
  {
    abbr: 'ISO',
    code: 'ISO 9001',
    name: 'Kalite Yönetim Sistemi'
  },
  {
    abbr: 'IEC',
    code: 'IEC 61439',
    name: 'Alçak Gerilim Panoları'
  },
  {
    abbr: 'OHSAS',
    code: 'OHSAS 18001',
    name: 'İş Sağlığı ve Güvenliği'
  },
  {
    abbr: 'TSE',
    code: 'TSE HYB',
    name: 'Hizmet Yeterlilik Belgesi'
  }
]
</script>
