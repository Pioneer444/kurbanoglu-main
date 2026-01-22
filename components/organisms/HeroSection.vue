<template>
  <section class="relative min-h-[500px] md:min-h-[600px] lg:h-[800px] flex items-center overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="~/assets/images/home/home-banner.png" 
        alt="Kurbanoğlu Mühendislik - Endüstriyel Elektrik Çözümleri"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Content -->
    <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px] relative z-10 w-full py-12 md:py-16 lg:py-0">
      <div class="max-w-full md:max-w-[500px] lg:max-w-[599px]">
        <!-- Title -->
        <h1 
          class="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[58px] font-normal text-white mb-4 md:mb-6 lg:mb-[32px] leading-[1.1] lg:leading-[56px] tracking-tight"
          style="font-family: 'Inter', sans-serif;"
        >
          Enerjiyle Güçlenen Endüstriyel Çözümler
        </h1>

        <!-- Subtitle -->
        <p 
          class="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium text-white mb-6 md:mb-8 lg:mb-[32px] leading-[1.5] lg:leading-[35px]"
          style="font-family: 'Inter', sans-serif;"
        >
          Endüstriyel elektrik, otomasyon ve projelendirme alanlarında yenilikçi mühendislik hizmetleri.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-[32px]">
          <!-- Keşfet Button -->
          <NuxtLink
            to="/hizmetlerimiz"
            class="group h-[48px] sm:h-[52px] lg:h-[56px] px-6 lg:px-[32px] bg-white rounded-[12px] lg:rounded-[16px] flex items-center justify-center sm:justify-start gap-3 lg:gap-[16px] hover:bg-[#009BE3] transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img src="~/assets/icons/kesfet.svg" alt="Keşfet" class="w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
            <span class="text-[16px] lg:text-[20px] font-medium text-[#064a81] group-hover:text-white transition-colors duration-300" style="font-family: 'Inter', sans-serif;">
              Keşfet
            </span>
          </NuxtLink>

          <!-- Teklif Al Button -->
          <NuxtLink
            to="/iletisim"
            class="group h-[48px] sm:h-[52px] lg:h-[56px] px-6 lg:px-[32px] bg-white rounded-[12px] lg:rounded-[16px] flex items-center justify-center sm:justify-start gap-3 lg:gap-[16px] hover:bg-[#009BE3] transition-all duration-300 ease-in-out hover:scale-105"
          >
            <img src="~/assets/icons/phone.svg" alt="Telefon" class="w-5 h-5 lg:w-6 lg:h-6 transition-all duration-300 group-hover:brightness-0 group-hover:invert" />
            <span class="text-[16px] lg:text-[20px] font-medium text-[#064a81] group-hover:text-white transition-colors duration-300" style="font-family: 'Inter', sans-serif;">
              Teklif Al
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
