<template>
  <section class="bg-[#f5f8fe] py-10 md:py-12 lg:py-[64px]">
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
      <!-- Header -->
      <div class="flex flex-col items-center gap-4 md:gap-6 lg:gap-[32px] mb-8 md:mb-10 lg:mb-[48px]">
        <!-- Badge -->
        <span 
          class="px-4 py-2 border border-[#064a81] rounded-[8px] text-[14px] md:text-[16px] font-medium text-[#111827]"
          style="font-family: 'Inter', sans-serif;"
        >
          Hizmetler
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
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-[20px] mb-8 md:mb-10 lg:mb-[48px]">
        <!-- Service Card 1 -->
        <div class="group bg-white rounded-[16px] p-6 md:p-8 lg:p-[48px] flex flex-col items-center text-center min-h-[300px] md:min-h-[350px] lg:h-[405px] shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
          <UIcon name="i-heroicons-bolt" class="w-10 h-10 md:w-12 md:h-12 text-[#064a81] group-hover:text-[#009BE3] mb-4 md:mb-6 lg:mb-[32px] transition-colors duration-300" />
          <h3 
            class="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#064a81] group-hover:text-[#009BE3] mb-4 md:mb-6 lg:mb-[32px] leading-[1.2] lg:leading-[29px] transition-colors duration-300"
            style="font-family: 'Inter', sans-serif;"
          >
            Endüstriyel Elektrik<br>Sistemleri
          </h3>
          <p 
            class="text-[16px] lg:text-[18px] font-medium text-[#111827] leading-[1.4] lg:leading-[22px]"
            style="font-family: 'Inter', sans-serif;"
          >
            Yüksek gerilimden kompanzasyona kadar tüm altyapı çözümleri.
          </p>
          <!-- İncele Link - Visible on hover -->
          <NuxtLink
            to="/hizmetlerimiz?tab=endustriyel"
            class="mt-auto flex items-center gap-2 px-4 py-3 rounded-[16px] hover:bg-gray-50 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          >
            <span class="text-[14px] font-medium text-[#009BE3]" style="font-family: 'Inter', sans-serif;">
              İncele
            </span>
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 text-[#009BE3]" />
          </NuxtLink>
        </div>

        <!-- Service Card 2 -->
        <div class="group bg-white rounded-[16px] p-6 md:p-8 lg:p-[48px] flex flex-col items-center text-center min-h-[300px] md:min-h-[350px] lg:h-[405px] shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
          <UIcon name="i-heroicons-arrow-path" class="w-10 h-10 md:w-12 md:h-12 text-[#064a81] group-hover:text-[#009BE3] mb-4 md:mb-6 lg:mb-[32px] transition-colors duration-300" />
          <h3 
            class="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#064a81] group-hover:text-[#009BE3] mb-4 md:mb-6 lg:mb-[32px] leading-[1.2] lg:leading-[29px] transition-colors duration-300"
            style="font-family: 'Inter', sans-serif;"
          >
            Periyodik<br>Kontroller
          </h3>
          <p 
            class="text-[16px] lg:text-[18px] font-medium text-[#111827] leading-[1.4] lg:leading-[22px]"
            style="font-family: 'Inter', sans-serif;"
          >
            Tesis güvenliği ve sürekliliği için ölçüm, test ve denetim hizmetleri.
          </p>
          <!-- İncele Link - Visible on hover -->
          <NuxtLink
            to="/hizmetlerimiz?tab=periyodik"
            class="mt-auto flex items-center gap-2 px-4 py-3 rounded-[16px] hover:bg-gray-50 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          >
            <span class="text-[14px] font-medium text-[#009BE3]" style="font-family: 'Inter', sans-serif;">
              İncele
            </span>
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 text-[#009BE3]" />
          </NuxtLink>
        </div>

        <!-- Service Card 3 -->
        <div class="group bg-white rounded-[16px] p-6 md:p-8 lg:p-[48px] flex flex-col items-center text-center min-h-[300px] md:min-h-[350px] lg:h-[405px] md:col-span-2 lg:col-span-1 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer">
          <UIcon name="i-heroicons-book-open" class="w-10 h-10 md:w-12 md:h-12 text-[#064a81] group-hover:text-[#009BE3] mb-4 md:mb-6 lg:mb-[32px] transition-colors duration-300" />
          <h3 
            class="text-[20px] md:text-[22px] lg:text-[24px] font-medium text-[#064a81] group-hover:text-[#009BE3] mb-4 md:mb-6 lg:mb-[32px] leading-[1.2] lg:leading-[29px] transition-colors duration-300"
            style="font-family: 'Inter', sans-serif;"
          >
            Projelendirme<br>Hizmetleri
          </h3>
          <p 
            class="text-[16px] lg:text-[18px] font-medium text-[#111827] leading-[1.4] lg:leading-[22px]"
            style="font-family: 'Inter', sans-serif;"
          >
            Kuvvetli ve zayıf akım sistemleri, trafo, yangın ve güvenlik projeleri.
          </p>
          <!-- İncele Link - Visible on hover -->
          <NuxtLink
            to="/hizmetlerimiz?tab=projelendirme"
            class="mt-auto flex items-center gap-2 px-4 py-3 rounded-[16px] hover:bg-gray-50 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
          >
            <span class="text-[14px] font-medium text-[#009BE3]" style="font-family: 'Inter', sans-serif;">
              İncele
            </span>
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 text-[#009BE3]" />
          </NuxtLink>
        </div>
      </div>

      <!-- View All Link -->
      <div class="flex justify-center">
        <NuxtLink
          to="/hizmetlerimiz"
          class="flex items-center gap-2 px-4 py-3 rounded-[16px] hover:bg-white transition-colors"
        >
          <span class="text-[14px] font-medium text-[#064a81]" style="font-family: 'Inter', sans-serif;">
            Tümünü Gör
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
