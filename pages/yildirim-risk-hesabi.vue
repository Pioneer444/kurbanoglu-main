<template>
  <div class="min-h-screen bg-[#111827]">
    <!-- Hero Section -->
    <section class="relative py-12 md:py-16 lg:py-20 bg-gradient-to-b from-[#064a81] to-[#111827]">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h1 
          class="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white mb-4"
          style="font-family: 'Inter', sans-serif;"
        >
          YILDIRIM RİSK HESABI
        </h1>
        <p 
          class="text-[16px] md:text-[18px] lg:text-[20px] text-white/80"
          style="font-family: 'Inter', sans-serif;"
        >
          ( Koruma Seviyesi Seçimi - NFC 17-102 Standardı )
        </p>
      </div>
    </section>

    <!-- Calculator Section -->
    <section class="py-8 md:py-12 lg:py-16">
      <div class="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <div v-if="!showResults" class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Left Column -->
          <div class="space-y-6">
            <!-- Yapı Boyutları -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h2 class="text-[16px] md:text-[18px] font-semibold text-white" style="font-family: 'Inter', sans-serif;">
                  YAPI BOYUTLARI
                </h2>
              </div>
              <div class="p-5 space-y-4">
                <div class="flex items-center justify-between gap-4">
                  <label class="text-[14px] md:text-[16px] text-white/80 flex-1">Yapının Boyu</label>
                  <span class="text-white/60 w-8">L</span>
                  <input 
                    v-model.number="formData.L" 
                    type="number" 
                    class="w-24 px-3 py-2 bg-[#1a1f2e] border border-[#374151] rounded-lg text-white text-right focus:border-[#009BE3] focus:outline-none"
                  />
                  <span class="text-white/60 w-8">m</span>
                </div>
                <div class="flex items-center justify-between gap-4">
                  <label class="text-[14px] md:text-[16px] text-white/80 flex-1">Yapının Eni</label>
                  <span class="text-white/60 w-8">W</span>
                  <input 
                    v-model.number="formData.W" 
                    type="number" 
                    class="w-24 px-3 py-2 bg-[#1a1f2e] border border-[#374151] rounded-lg text-white text-right focus:border-[#009BE3] focus:outline-none"
                  />
                  <span class="text-white/60 w-8">m</span>
                </div>
                <div class="flex items-center justify-between gap-4">
                  <label class="text-[14px] md:text-[16px] text-white/80 flex-1">Yapının Yüksekliği</label>
                  <span class="text-white/60 w-8">H</span>
                  <input 
                    v-model.number="formData.H" 
                    type="number" 
                    class="w-24 px-3 py-2 bg-[#1a1f2e] border border-[#374151] rounded-lg text-white text-right focus:border-[#009BE3] focus:outline-none"
                  />
                  <span class="text-white/60 w-8">m</span>
                </div>
              </div>
            </div>

            <!-- C1 Faktörü -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h2 class="text-[16px] md:text-[18px] font-semibold text-white" style="font-family: 'Inter', sans-serif;">
                  C1 FAKTÖRÜ - Çevresel Katsayı
                </h2>
              </div>
              <div class="p-5 space-y-3">
                <label v-for="option in c1Options" :key="option.value" class="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    v-model="formData.C1" 
                    :value="option.value"
                    class="w-5 h-5 accent-[#009BE3]"
                  />
                  <span class="text-[14px] text-white/80 flex-1 group-hover:text-white transition-colors">{{ option.label }}</span>
                  <span class="text-[14px] text-[#009BE3] font-medium">{{ option.value }}</span>
                </label>
              </div>
            </div>

            <!-- C2 Faktörü -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h2 class="text-[16px] md:text-[18px] font-semibold text-white" style="font-family: 'Inter', sans-serif;">
                  C2 FAKTÖRÜ - Yapısal Katsayılar
                </h2>
              </div>
              <div class="p-5">
                <div class="overflow-x-auto">
                  <table class="w-full text-[14px]">
                    <thead>
                      <tr class="text-white/60 border-b border-[#374151]">
                        <th class="py-2 text-left">Çatı / Yapı</th>
                        <th class="py-2 text-center">Metal</th>
                        <th class="py-2 text-center">Tuğla, Beton</th>
                        <th class="py-2 text-center">Tutuşabilir</th>
                      </tr>
                    </thead>
                    <tbody class="text-white/80">
                      <tr v-for="(row, rowKey) in c2Matrix" :key="rowKey" class="border-b border-[#374151]/50">
                        <td class="py-3">{{ row.label }}</td>
                        <td v-for="(value, colKey) in row.values" :key="colKey" class="py-3 text-center">
                          <label class="cursor-pointer">
                            <input 
                              type="radio" 
                              :value="`${rowKey}-${colKey}-${value}`"
                              :name="`c2-${rowKey}`"
                              @change="handleC2Change($event, value, rowKey, colKey)"
                              :checked="formData.C2Row === rowKey && formData.C2Col === colKey"
                              class="w-4 h-4 accent-[#009BE3]"
                            />
                            <span class="ml-1">{{ value }}</span>
                          </label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-6">
            <!-- C3 Faktörü -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h2 class="text-[16px] md:text-[18px] font-semibold text-white" style="font-family: 'Inter', sans-serif;">
                  C3 FAKTÖRÜ - Yapısal Katsayılar
                </h2>
              </div>
              <div class="p-5 space-y-3">
                <label v-for="option in c3Options" :key="option.value" class="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    v-model="formData.C3" 
                    :value="option.value"
                    class="w-5 h-5 accent-[#009BE3]"
                  />
                  <span class="text-[14px] text-white/80 flex-1 group-hover:text-white transition-colors">{{ option.label }}</span>
                  <span class="text-[14px] text-[#009BE3] font-medium">{{ option.value }}</span>
                </label>
              </div>
            </div>

            <!-- C4 Faktörü -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h2 class="text-[16px] md:text-[18px] font-semibold text-white" style="font-family: 'Inter', sans-serif;">
                  C4 FAKTÖRÜ - Yapılarda İnsan Durumu
                </h2>
              </div>
              <div class="p-5 space-y-3">
                <label v-for="option in c4Options" :key="option.value" class="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    v-model="formData.C4" 
                    :value="option.value"
                    class="w-5 h-5 accent-[#009BE3]"
                  />
                  <span class="text-[14px] text-white/80 flex-1 group-hover:text-white transition-colors">{{ option.label }}</span>
                  <span class="text-[14px] text-[#009BE3] font-medium">{{ option.value }}</span>
                </label>
              </div>
            </div>

            <!-- C5 Faktörü -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h2 class="text-[16px] md:text-[18px] font-semibold text-white" style="font-family: 'Inter', sans-serif;">
                  C5 FAKTÖRÜ - Yapının Çevredeki Önemi
                </h2>
              </div>
              <div class="p-5 space-y-3">
                <label v-for="option in c5Options" :key="option.value" class="flex items-center gap-3 cursor-pointer group">
                  <input 
                    type="radio" 
                    v-model="formData.C5" 
                    :value="option.value"
                    class="w-5 h-5 accent-[#009BE3]"
                  />
                  <span class="text-[14px] text-white/80 flex-1 group-hover:text-white transition-colors">{{ option.label }}</span>
                  <span class="text-[14px] text-[#009BE3] font-medium">{{ option.value }}</span>
                </label>
              </div>
            </div>

            <!-- Orajlı Gün Sayısı -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h2 class="text-[16px] md:text-[18px] font-semibold text-white" style="font-family: 'Inter', sans-serif;">
                  ORAJLI GÜN SAYISI
                </h2>
              </div>
              <div class="p-5">
                <div class="flex items-center gap-4">
                  <label class="text-[14px] text-white/80 flex-1">
                    Orajlı Gün Sayısı
                    <a href="https://www.mgm.gov.tr" target="_blank" class="text-[#009BE3] hover:underline ml-1">(Türkiye Oraj Haritası)</a>
                  </label>
                  <input 
                    v-model.number="formData.Td" 
                    type="number" 
                    class="w-24 px-3 py-2 bg-[#1a1f2e] border border-[#374151] rounded-lg text-white text-right focus:border-[#009BE3] focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Results Section -->
        <div v-else class="space-y-8">
          <!-- Header -->
          <div class="bg-[#212734] rounded-[16px] p-6 md:p-8 pdf-header-only">
            <div class="flex flex-col md:flex-row justify-between items-start gap-6">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 logo-container">
                  <svg width="60" height="14" viewBox="0 0 200 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
                    <g clip-path="url(#clip0_424_214)">
                      <path d="M128.123 24.9587H122.213C121.542 24.9587 120.92 24.6145 120.56 24.041C120.2 23.4674 120.183 22.7463 120.478 22.1564L129.858 3.55615C121.346 4.06418 114.602 11.1273 114.602 19.7801C114.602 27.2202 119.611 33.4967 126.42 35.4141L128.106 24.9751L128.123 24.9587Z" fill="#2766A7"/>
                      <path d="M135.26 4.12967L133.557 14.6015H139.466C140.138 14.6015 140.76 14.9456 141.12 15.5192C141.48 16.0928 141.496 16.8139 141.202 17.4038L131.838 35.9713C140.334 35.4632 147.078 28.4001 147.078 19.7473C147.078 12.3072 142.086 6.03066 135.26 4.11328V4.12967Z" fill="#2766A7"/>
                      <path d="M22.1475 48.0002V40.1177H23.6371L27.3529 44.8865L30.9869 40.1177H32.4601V48.0002H30.7577V43.133C30.7577 43.0347 30.7577 42.92 30.7741 42.7725C30.7904 42.625 30.8068 42.4611 30.8232 42.2809C30.725 42.4775 30.6431 42.6578 30.5613 42.7889C30.4794 42.92 30.414 43.0347 30.3648 43.1167L27.402 47.0497H27.0419L24.079 43.1003C23.9645 42.9528 23.8826 42.8053 23.8008 42.6742C23.7189 42.5431 23.6534 42.412 23.6043 42.2973C23.6043 42.4611 23.6371 42.6086 23.6371 42.7397C23.6371 42.8708 23.6371 43.0019 23.6371 43.133V48.0002H22.1475Z" fill="#111827"/>
                      <path d="M41.463 40.1177V46.5089H46.6848V40.1177H48.5018V46.132C48.5018 46.8531 48.3709 47.3447 48.0926 47.6069C47.8307 47.8691 47.3068 48.0002 46.5375 48.0002H41.5612C40.8082 48.0002 40.2844 47.8691 40.0225 47.6069C39.7442 47.3447 39.6133 46.8531 39.6133 46.132V40.1177H41.4466H41.463ZM43.3127 41.8384V40.1341H44.8351V41.8384H43.3127Z" fill="#111827"/>
                      <path d="M55.9014 48.0002V40.1177H57.7347V43.1822H63.464V40.1177H65.3137V48.0002H63.464V44.6079H57.7347V48.0002H55.9014Z" fill="#111827"/>
                      <path d="M72.6797 48.0002V40.1177H80.7334V41.4615H74.513V43.215H78.147V44.5588H74.513V46.5089H80.8152V48.0002H72.6797Z" fill="#111827"/>
                      <path d="M87.543 48.0002V40.1177H88.787L94.3362 44.7718C94.5327 44.9193 94.6964 45.0668 94.8273 45.2143C94.9746 45.3454 95.1056 45.4929 95.2202 45.6404C95.1874 45.1979 95.1711 44.8865 95.1547 44.7063C95.1383 44.526 95.1547 44.3785 95.1547 44.2802V40.1341H96.808V48.0166H95.5639L89.7856 43.1494C89.6382 43.0183 89.5237 42.92 89.4254 42.8217C89.3272 42.7233 89.229 42.625 89.1308 42.5103C89.1635 42.7561 89.1799 42.9856 89.1799 43.1986C89.1799 43.4116 89.1963 43.6083 89.1963 43.7558V48.0166H87.543V48.0002Z" fill="#111827"/>
                      <path d="M104.174 48.0002V40.1177H109.232C110.672 40.1177 111.786 40.4618 112.571 41.1337C113.341 41.8056 113.734 42.7725 113.734 44.018C113.734 44.7554 113.586 45.411 113.275 46.0009C112.981 46.5909 112.539 47.0497 111.998 47.3939C111.655 47.6069 111.229 47.7708 110.722 47.8527C110.214 47.9347 109.559 48.0002 108.774 48.0002H104.174ZM106.007 46.5253H108.381C109.641 46.5253 110.541 46.3287 111.065 45.9354C111.589 45.5421 111.851 44.8865 111.851 43.9852C111.851 43.1822 111.638 42.5759 111.196 42.1498C110.754 41.7401 110.116 41.527 109.265 41.527H106.024V46.5089L106.007 46.5253Z" fill="#111827"/>
                      <path d="M120.461 41.9367V40.1177H122.295V41.1173L120.461 41.9203V41.9367Z" fill="#111827"/>
                      <path d="M136.487 41.5109H131.331V43.1988H136.242C137.011 43.1988 137.535 43.3299 137.797 43.5921C138.075 43.8543 138.206 44.346 138.206 45.067V46.1486C138.206 46.8697 138.075 47.3613 137.797 47.6235C137.518 47.8857 137.011 48.0168 136.242 48.0168H131.38C130.61 48.0168 130.087 47.8857 129.825 47.6235C129.546 47.3613 129.416 46.8697 129.416 46.1486V45.9356L131.036 45.6078V46.5419H136.602V44.7393H131.691C130.922 44.7393 130.414 44.6082 130.136 44.346C129.874 44.0837 129.727 43.5921 129.727 42.871V42.0025C129.727 41.2814 129.858 40.7898 130.136 40.5276C130.398 40.2654 130.922 40.1343 131.691 40.1343H136.16C136.896 40.1343 137.404 40.2654 137.698 40.5112C137.993 40.757 138.124 41.2159 138.124 41.855V42.0189L136.503 42.3958V41.4945L136.487 41.5109Z" fill="#111827"/>
                      <path d="M145.359 48.0002V40.1177H147.192V46.5089H153.102V48.0002H145.359Z" fill="#111827"/>
                      <path d="M168.358 48.0002V40.1177H170.208V43.4116L174.578 40.1177H177.23L172.008 43.8377L177.868 48.0002H174.922L170.208 44.526V48.0002H168.358Z" fill="#111827"/>
                      <path d="M120.461 48.0004V42.8218L122.295 42.0024V48.0004H120.461Z" fill="#111827"/>
                      <path d="M159.142 41.9367V40.1177H160.975V41.1173L159.142 41.9203V41.9367Z" fill="#111827"/>
                      <path d="M159.142 48.0004V42.8218L160.975 42.0024V48.0004H159.142Z" fill="#111827"/>
                      <path d="M16.1565 10.8651L8.7412 19.5179C11.2948 22.3366 14.2413 25.6305 16.7785 28.5312V28.8425H10.3781L5.15633 22.7463V28.8425H0V10.5537H5.1727V16.568C6.74415 14.6343 8.43018 12.4875 9.9689 10.5537H16.1565V10.8651Z" fill="#111827"/>
                      <path d="M35.3084 10.5703V20.7963C35.3411 26.2043 32.0509 29.2361 26.6981 29.2361C21.3454 29.2361 18.0879 26.3354 18.0879 20.7472V10.5867H23.2278V20.7472C23.2278 23.615 24.6029 24.8277 26.6981 24.8277C28.7934 24.8277 30.1684 23.5659 30.1684 20.7963V10.5703H35.3084Z" fill="#111827"/>
                      <path d="M55.6719 28.8425H49.9754L45.7194 22.9101H43.9188V28.8425H38.7461V10.5537H47.6674C52.3326 10.5537 54.7716 13.5527 54.7716 16.8466C54.7716 19.0918 53.9859 21.0092 50.9085 22.353L55.6556 28.5148V28.8262L55.6719 28.8425ZM43.9188 14.6834V19.0754H47.7328C49.0915 19.0754 49.6972 18.0593 49.6972 16.9614C49.6972 15.8634 49.0424 14.6834 47.6837 14.6834H43.9188Z" fill="#111827"/>
                      <path d="M67.3273 10.5537C70.9777 10.5537 73.9569 12.1761 73.9569 15.6831C73.9569 17.0761 73.5477 18.5018 71.9435 19.2393C73.6459 20.157 74.4807 21.8449 74.4807 23.5001C74.4807 27.5971 70.7485 28.8262 67.4092 28.8589H57.9805V10.5537H67.3273ZM63.0713 17.5349H67.1964C68.2604 17.5349 68.8333 16.9941 68.8333 16.1747C68.8333 15.3553 68.2604 14.7326 67.2455 14.7326H63.0713V17.5349ZM63.0713 24.8275H67.4256C68.7351 24.8275 69.3571 24.1228 69.3571 23.1068C69.3571 22.0908 68.7024 21.3533 67.4256 21.3533H63.0713V24.8275Z" fill="#111827"/>
                      <path d="M89.5564 25.8436H81.3881L80.1932 28.8425H74.7095L82.9105 10.5537H88.1323L96.3006 28.8425H90.7677L89.5728 25.8436H89.5564ZM85.4968 15.6667L83.1397 21.5008H87.8049L85.4805 15.6667H85.4968Z" fill="#111827"/>
                      <path d="M172.238 10.5537V24.4506H180.979V28.8425H167.065V10.5537H172.238Z" fill="#111827"/>
                      <path d="M200 10.5703V20.7963C200.033 26.2043 196.742 29.2361 191.39 29.2361C186.037 29.2361 182.779 26.3354 182.779 20.7472V10.5867H187.919V20.7472C187.919 23.615 189.311 24.8277 191.39 24.8277C193.468 24.8277 194.86 23.5659 194.86 20.7963V10.5703H200Z" fill="#111827"/>
                      <path d="M114.683 28.8425C113.144 26.1386 112.261 23.0249 112.261 19.6981C112.261 16.3714 113.144 13.2577 114.683 10.5537H109.707V16.8303C109.74 17.5349 109.74 18.3707 109.871 20.5667L102.144 10.5537H97.7573V28.8425H102.979V22.9921L102.897 18.9935L110.525 28.8425H114.7H114.683Z" fill="#111827"/>
                      <path d="M155.214 17.6333V21.6811H159.83V24.0246C158.782 24.7784 157.276 24.9587 156.31 24.9587C152.627 24.9587 151.4 22.058 151.4 19.6982C151.4 16.1256 153.331 14.3394 156.31 14.3394C157.538 14.3394 159.159 14.6835 160.485 15.929L163.48 12.9464C161.074 10.521 158.831 9.99658 156.31 9.99658C152.595 9.99658 149.976 11.4387 148.355 13.5364C149.026 15.4537 149.419 17.5186 149.419 19.6654C149.419 21.8122 149.026 23.9426 148.322 25.942C149.894 27.9413 152.464 29.3178 156.294 29.3178C159.814 29.3178 163.006 28.056 164.151 25.7453V17.6169H155.23L155.214 17.6333Z" fill="#111827"/>
                      <path d="M149.19 7.68578L151.367 9.86536C152.693 9.29179 154.314 8.88209 156.327 8.88209C157.849 8.88209 159.453 9.04597 161.14 9.83259L163.268 7.70217C160.73 6.22726 158.308 5.98145 156.343 5.98145C153.364 5.98145 151.023 6.68612 149.206 7.66939L149.19 7.68578Z" fill="#111827"/>
                      <path d="M122.213 23.0249C126.142 15.2243 129.988 7.60396 133.819 0C133.868 0 133.917 0.0327757 133.966 0.0491635C133.082 5.50632 132.198 10.9471 131.298 16.5517H139.482C135.554 24.3359 131.723 31.9399 127.893 39.5439C127.844 39.5275 127.795 39.5111 127.746 39.4947C128.63 34.0703 129.497 28.6296 130.414 23.0413H122.229L122.213 23.0249Z" fill="#009BE3"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_424_214">
                        <rect width="200" height="48" fill="white"/>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h2 class="text-[20px] md:text-[24px] font-bold text-white mb-2">KORUMA GEREKLİLİĞİ VE KORUMA SEVİYESİ TAYİNİ</h2>
                  <p class="text-white/60">NFC 17-102 Standardı</p>
                </div>
              </div>
              <div class="text-right text-white/60 text-[11px] leading-tight">
                <p class="font-semibold text-white mb-1">Kurbanoğlu İnş. Mühendislik Elektrik Taş. Hafr. San. Ve Tic. Ltd. Şti.</p>
                <p class="text-[9px] mb-0.5">Köşklü Çeşme, 549. Sk. No:10A, 41400 Gebze/Kocaeli</p>
                <p class="text-[9px] mb-0.5">E-Posta: info@kurbanoglumuhendislik.com.tr</p>
                <p class="text-[9px]">Web: www.kurbanoglumuhendislik.com.tr</p>
              </div>
            </div>
          </div>

          <!-- Calculation Results -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Etkili Eşdeğer Alan -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#009BE3] px-5 py-3">
                <h3 class="text-[16px] font-semibold text-white">ETKİLİ EŞDEĞER ALAN</h3>
              </div>
              <div class="p-5">
                <div class="bg-[#1a1f2e] rounded-lg p-4 mb-4">
                  <p class="text-white/60 text-[14px] mb-2">Formül (Dörtgen Alanlar İçin):</p>
                  <p class="text-white font-mono text-[14px]">Ae = LW + 6H(L+W) + 9πH²</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-white/60 text-[14px]">L = {{ formData.L }} m</p>
                    <p class="text-white/60 text-[14px]">W = {{ formData.W }} m</p>
                    <p class="text-white/60 text-[14px]">H = {{ formData.H }} m</p>
                  </div>
                  <div class="text-right">
                    <p class="text-[#009BE3] text-[18px] font-bold">Ae = {{ results.Ae.toFixed(4) }} m²</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Beklenen Yıldırım Darbe Sayısı -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#009BE3] px-5 py-3">
                <h3 class="text-[16px] font-semibold text-white">BEKLENEN YILDIRIM DARBE SAYISI</h3>
              </div>
              <div class="p-5">
                <div class="bg-[#1a1f2e] rounded-lg p-4 mb-4">
                  <p class="text-white/60 text-[14px] mb-2">Formüller:</p>
                  <p class="text-white font-mono text-[14px]">Ng = 0,04 × Td<sup>1.25</sup></p>
                  <p class="text-white font-mono text-[14px]">Nd = Ng × Ae × C1 × 10<sup>-6</sup></p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-white/60 text-[14px]">Td = {{ formData.Td }}</p>
                    <p class="text-white/60 text-[14px]">C1 = {{ formData.C1 }}</p>
                    <p class="text-white/60 text-[14px]">Ng = {{ results.Ng.toFixed(4) }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-[#009BE3] text-[18px] font-bold">Nd = {{ results.Nd.toFixed(4) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Onaylı Yıldırım Darbe Sayısı -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#009BE3] px-5 py-3">
                <h3 class="text-[16px] font-semibold text-white">ONAYLI YILDIRIM DARBE SAYISI</h3>
              </div>
              <div class="p-5">
                <div class="bg-[#1a1f2e] rounded-lg p-4 mb-4">
                  <p class="text-white/60 text-[14px] mb-2">Formüller:</p>
                  <p class="text-white font-mono text-[14px]">C = C2 × C3 × C4 × C5</p>
                  <p class="text-white font-mono text-[14px]">Nc = 5,5 × 10<sup>-3</sup> / C</p>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div>
                    <p class="text-white/60 text-[14px]">C2 = {{ formData.C2 }}</p>
                    <p class="text-white/60 text-[14px]">C3 = {{ formData.C3 }}</p>
                    <p class="text-white/60 text-[14px]">C4 = {{ formData.C4 }}</p>
                    <p class="text-white/60 text-[14px]">C5 = {{ formData.C5 }}</p>
                    <p class="text-white/60 text-[14px]">C = {{ results.C.toFixed(2) }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-[#009BE3] text-[18px] font-bold">Nc = {{ results.Nc.toFixed(4) }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sonuç -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div :class="results.protectionRequired ? 'bg-[#dc2626]' : 'bg-[#16a34a]'" class="px-5 py-3">
                <h3 class="text-[16px] font-semibold text-white">SONUÇ</h3>
              </div>
              <div class="p-5">
                <div v-if="results.protectionRequired" class="space-y-4">
                  <div class="bg-[#dc2626]/20 border border-[#dc2626] rounded-lg p-4">
                    <p class="text-white font-semibold">Nd > Nc → KORUMA GEREKLİDİR</p>
                    <p class="text-white/80 text-[14px] mt-2">Etkinlik formülü: E = 1 - (Nc/Nd)</p>
                  </div>
                  <div class="text-center">
                    <p class="text-white/60 text-[14px] mb-2">Hesaplanan Etkinlik</p>
                    <p class="text-[#009BE3] text-[32px] font-bold">E = {{ results.E.toFixed(2) }}</p>
                  </div>
                  <div class="bg-[#1a1f2e] rounded-lg p-4">
                    <p class="text-white font-semibold mb-2">Koruma Seviyesi:</p>
                    <p class="text-[#009BE3] text-[20px] font-bold">{{ results.protectionLevel }}</p>
                  </div>
                </div>
                <div v-else class="bg-[#16a34a]/20 border border-[#16a34a] rounded-lg p-4">
                  <p class="text-white font-semibold">Nd ≤ Nc → KORUMA İSTEĞE BIRAKILIR</p>
                  <p class="text-white/80 text-[14px] mt-2">Bu yapı için yıldırımdan korunma sistemi zorunlu değildir.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Protection Level Tables -->
          <div v-if="results.protectionRequired" class="space-y-6">
            <!-- Etkinlik Tablosu -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h3 class="text-[16px] font-semibold text-white">KORUMA SEVİYESİ TAYİNİ</h3>
              </div>
              <div class="p-5 overflow-x-auto">
                <table class="w-full text-[14px]">
                  <thead>
                    <tr class="text-white/60 border-b border-[#374151]">
                      <th class="py-3 text-left">Hesaplanan Etkinlik</th>
                      <th class="py-3 text-center">Aktif Paratoner Koruma Seviyeleri</th>
                      <th class="py-3 text-center">Faraday Kafesi Koruma Seviyeleri</th>
                    </tr>
                  </thead>
                  <tbody class="text-white/80">
                    <tr v-for="(level, index) in protectionLevels" :key="index" 
                        :class="{'bg-[#009BE3]/20': isCurrentLevel(level.range)}"
                        class="border-b border-[#374151]/50">
                      <td class="py-3">{{ level.range }}</td>
                      <td class="py-3 text-center font-semibold" :class="isCurrentLevel(level.range) ? 'text-[#009BE3]' : ''">{{ level.active }}</td>
                      <td class="py-3 text-center font-semibold" :class="isCurrentLevel(level.range) ? 'text-[#009BE3]' : ''">{{ level.faraday }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Faraday Kafesi Kriterleri -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-[#212734] rounded-[16px] overflow-hidden">
                <div class="bg-[#064a81] px-5 py-3">
                  <h3 class="text-[14px] font-semibold text-white">Faraday Kafesi İniş İletkeni Aralıkları</h3>
                </div>
                <div class="p-5">
                  <table class="w-full text-[14px]">
                    <thead>
                      <tr class="text-white/60 border-b border-[#374151]">
                        <th class="py-2 text-left">Koruma Seviyesi</th>
                        <th class="py-2 text-right">Aralık (m)</th>
                      </tr>
                    </thead>
                    <tbody class="text-white/80">
                      <tr 
                        v-for="item in faradaySpacing" 
                        :key="item.level" 
                        :class="[
                          'border-b border-[#374151]/50',
                          results.activeLevel === item.level ? 'bg-[#009BE3]/20' : ''
                        ]"
                      >
                        <td class="py-2" :class="results.activeLevel === item.level ? 'font-semibold text-[#009BE3]' : ''">{{ item.level }}</td>
                        <td class="py-2 text-right font-semibold" :class="results.activeLevel === item.level ? 'text-[#009BE3]' : 'text-white'">{{ item.spacing }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="bg-[#212734] rounded-[16px] overflow-hidden">
                <div class="bg-[#064a81] px-5 py-3">
                  <h3 class="text-[14px] font-semibold text-white">Küre Yarıçapı ve Kafes Boyutu</h3>
                </div>
                <div class="p-5">
                  <table class="w-full text-[14px]">
                    <thead>
                      <tr class="text-white/60 border-b border-[#374151]">
                        <th class="py-2 text-left">Seviye</th>
                        <th class="py-2 text-center">Küre (m)</th>
                        <th class="py-2 text-right">Kafes</th>
                      </tr>
                    </thead>
                    <tbody class="text-white/80">
                      <tr 
                        v-for="item in sphereData" 
                        :key="item.level" 
                        :class="[
                          'border-b border-[#374151]/50',
                          results.activeLevel === item.level ? 'bg-[#009BE3]/20' : ''
                        ]"
                      >
                        <td class="py-2">{{ item.level }}</td>
                        <td class="py-2 text-center font-semibold" :class="results.activeLevel === item.level ? 'text-[#009BE3]' : 'text-white'">{{ item.sphere }}</td>
                        <td class="py-2 text-right font-semibold" :class="results.activeLevel === item.level ? 'text-[#009BE3]' : 'text-white'">{{ item.mesh }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- Piezoelektrik Kristalli Aktif Paratoner Seçim Tablosu -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h3 class="text-[16px] font-semibold text-white">Piezoelektrik Kristalli Aktif Paratoner Seçim Tablosu</h3>
              </div>
              <div class="p-5 overflow-x-auto">
                <table class="w-full text-[14px] text-white/80">
                  <thead>
                    <tr class="border-b border-[#374151] text-white">
                      <th class="py-2 text-left">R<span class="align-super text-[10px]">p</span></th>
                      <th class="py-2 text-center" colspan="4">ΔT=15μs</th>
                      <th class="py-2 text-center" colspan="4">ΔT=30μs</th>
                      <th class="py-2 text-center" colspan="4">ΔT=45μs</th>
                      <th class="py-2 text-center" colspan="4">ΔT=60μs</th>
                    </tr>
                    <tr class="text-white/60 border-b border-[#374151]">
                      <th class="py-2 text-left">H (m)</th>
                      <th class="py-2 text-center">I</th>
                      <th class="py-2 text-center">II</th>
                      <th class="py-2 text-center">III</th>
                      <th class="py-2 text-center">IV</th>
                      <th class="py-2 text-center">I</th>
                      <th class="py-2 text-center">II</th>
                      <th class="py-2 text-center">III</th>
                      <th class="py-2 text-center">IV</th>
                      <th class="py-2 text-center">I</th>
                      <th class="py-2 text-center">II</th>
                      <th class="py-2 text-center">III</th>
                      <th class="py-2 text-center">IV</th>
                      <th class="py-2 text-center">I</th>
                      <th class="py-2 text-center">II</th>
                      <th class="py-2 text-center">III</th>
                      <th class="py-2 text-center">IV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">2</td>
                      <td class="py-2 text-center">13</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">15</td>
                      <td class="py-2 text-center">18</td>
                      <td class="py-2 text-center">20</td>
                      <td class="py-2 text-center">19</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">22</td>
                      <td class="py-2 text-center">25</td>
                      <td class="py-2 text-center">28</td>
                      <td class="py-2 text-center">25</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">28</td>
                      <td class="py-2 text-center">32</td>
                      <td class="py-2 text-center">36</td>
                      <td class="py-2 text-center">31</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">35</td>
                      <td class="py-2 text-center">39</td>
                      <td class="py-2 text-center">43</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">4</td>
                      <td class="py-2 text-center">25</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">30</td>
                      <td class="py-2 text-center">36</td>
                      <td class="py-2 text-center">41</td>
                      <td class="py-2 text-center">38</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">44</td>
                      <td class="py-2 text-center">51</td>
                      <td class="py-2 text-center">57</td>
                      <td class="py-2 text-center">51</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">57</td>
                      <td class="py-2 text-center">64</td>
                      <td class="py-2 text-center">72</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">69</td>
                      <td class="py-2 text-center">78</td>
                      <td class="py-2 text-center">85</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">5</td>
                      <td class="py-2 text-center">32</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">37</td>
                      <td class="py-2 text-center">45</td>
                      <td class="py-2 text-center">51</td>
                      <td class="py-2 text-center">48</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">55</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center">71</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">71</td>
                      <td class="py-2 text-center">81</td>
                      <td class="py-2 text-center">89</td>
                      <td class="py-2 text-center">79</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">86</td>
                      <td class="py-2 text-center">97</td>
                      <td class="py-2 text-center">107</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">6</td>
                      <td class="py-2 text-center">32</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">38</td>
                      <td class="py-2 text-center">46</td>
                      <td class="py-2 text-center">52</td>
                      <td class="py-2 text-center">48</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">55</td>
                      <td class="py-2 text-center">64</td>
                      <td class="py-2 text-center">72</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">71</td>
                      <td class="py-2 text-center">81</td>
                      <td class="py-2 text-center">90</td>
                      <td class="py-2 text-center">79</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">87</td>
                      <td class="py-2 text-center">97</td>
                      <td class="py-2 text-center">107</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">8</td>
                      <td class="py-2 text-center">33</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">39</td>
                      <td class="py-2 text-center">47</td>
                      <td class="py-2 text-center">54</td>
                      <td class="py-2 text-center">49</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">56</td>
                      <td class="py-2 text-center">65</td>
                      <td class="py-2 text-center">73</td>
                      <td class="py-2 text-center">64</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">72</td>
                      <td class="py-2 text-center">82</td>
                      <td class="py-2 text-center">91</td>
                      <td class="py-2 text-center">79</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">87</td>
                      <td class="py-2 text-center">98</td>
                      <td class="py-2 text-center">108</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">10</td>
                      <td class="py-2 text-center">34</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">40</td>
                      <td class="py-2 text-center">49</td>
                      <td class="py-2 text-center">56</td>
                      <td class="py-2 text-center">49</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">57</td>
                      <td class="py-2 text-center">66</td>
                      <td class="py-2 text-center">75</td>
                      <td class="py-2 text-center">64</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">72</td>
                      <td class="py-2 text-center">83</td>
                      <td class="py-2 text-center">92</td>
                      <td class="py-2 text-center">79</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">88</td>
                      <td class="py-2 text-center">99</td>
                      <td class="py-2 text-center">109</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">20</td>
                      <td class="py-2 text-center">35</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">44</td>
                      <td class="py-2 text-center">55</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center">50</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">59</td>
                      <td class="py-2 text-center">71</td>
                      <td class="py-2 text-center">81</td>
                      <td class="py-2 text-center">65</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">74</td>
                      <td class="py-2 text-center">86</td>
                      <td class="py-2 text-center">97</td>
                      <td class="py-2 text-center">80</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">89</td>
                      <td class="py-2 text-center">102</td>
                      <td class="py-2 text-center">113</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">30</td>
                      <td class="py-2 text-center">35</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">45</td>
                      <td class="py-2 text-center">58</td>
                      <td class="py-2 text-center">69</td>
                      <td class="py-2 text-center">50</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">60</td>
                      <td class="py-2 text-center">73</td>
                      <td class="py-2 text-center">85</td>
                      <td class="py-2 text-center">65</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">75</td>
                      <td class="py-2 text-center">89</td>
                      <td class="py-2 text-center">101</td>
                      <td class="py-2 text-center">80</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">90</td>
                      <td class="py-2 text-center">104</td>
                      <td class="py-2 text-center">116</td>
                    </tr>
                    <tr>
                      <td class="py-2">60</td>
                      <td class="py-2 text-center">35</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">45</td>
                      <td class="py-2 text-center">60</td>
                      <td class="py-2 text-center">75</td>
                      <td class="py-2 text-center">50</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">60</td>
                      <td class="py-2 text-center">75</td>
                      <td class="py-2 text-center">90</td>
                      <td class="py-2 text-center">65</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">75</td>
                      <td class="py-2 text-center">90</td>
                      <td class="py-2 text-center">105</td>
                      <td class="py-2 text-center">80</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">90</td>
                      <td class="py-2 text-center">105</td>
                      <td class="py-2 text-center">120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Elektrostatik Aktif Paratoner için Seçim Tablosu -->
            <div class="bg-[#212734] rounded-[16px] overflow-hidden">
              <div class="bg-[#064a81] px-5 py-3">
                <h3 class="text-[16px] font-semibold text-white">Elektrostatik Aktif Paratoner için Seçim Tablosu</h3>
              </div>
              <div class="p-5 overflow-x-auto">
                <table class="w-full text-[14px] text-white/80">
                  <thead>
                    <tr class="border-b border-[#374151] text-white">
                      <th class="py-2 text-left">R<span class="align-super text-[10px]">p</span></th>
                      <th class="py-2 text-center" colspan="4">ΔT=30μs</th>
                      <th class="py-2 text-center" colspan="4">ΔT=45μs</th>
                      <th class="py-2 text-center" colspan="4">ΔT=60μs</th>
                    </tr>
                    <tr class="text-white/60 border-b border-[#374151]">
                      <th class="py-2 text-left">H (m)</th>
                      <th class="py-2 text-center">I</th>
                      <th class="py-2 text-center">II</th>
                      <th class="py-2 text-center">III</th>
                      <th class="py-2 text-center">IV</th>
                      <th class="py-2 text-center">I</th>
                      <th class="py-2 text-center">II</th>
                      <th class="py-2 text-center">III</th>
                      <th class="py-2 text-center">IV</th>
                      <th class="py-2 text-center">I</th>
                      <th class="py-2 text-center">II</th>
                      <th class="py-2 text-center">III</th>
                      <th class="py-2 text-center">IV</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">2</td>
                      <td class="py-2 text-center">19</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">22</td>
                      <td class="py-2 text-center">25</td>
                      <td class="py-2 text-center">28</td>
                      <td class="py-2 text-center">25</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">28</td>
                      <td class="py-2 text-center">32</td>
                      <td class="py-2 text-center">36</td>
                      <td class="py-2 text-center">31</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">35</td>
                      <td class="py-2 text-center">39</td>
                      <td class="py-2 text-center">43</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">4</td>
                      <td class="py-2 text-center">38</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">44</td>
                      <td class="py-2 text-center">51</td>
                      <td class="py-2 text-center">57</td>
                      <td class="py-2 text-center">51</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">57</td>
                      <td class="py-2 text-center">64</td>
                      <td class="py-2 text-center">72</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">69</td>
                      <td class="py-2 text-center">78</td>
                      <td class="py-2 text-center">85</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">5</td>
                      <td class="py-2 text-center">48</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">55</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center">71</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">71</td>
                      <td class="py-2 text-center">81</td>
                      <td class="py-2 text-center">89</td>
                      <td class="py-2 text-center">79</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">86</td>
                      <td class="py-2 text-center">97</td>
                      <td class="py-2 text-center">107</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">6</td>
                      <td class="py-2 text-center">48</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">55</td>
                      <td class="py-2 text-center">64</td>
                      <td class="py-2 text-center">72</td>
                      <td class="py-2 text-center">63</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">71</td>
                      <td class="py-2 text-center">81</td>
                      <td class="py-2 text-center">90</td>
                      <td class="py-2 text-center">79</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">87</td>
                      <td class="py-2 text-center">97</td>
                      <td class="py-2 text-center">107</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">8</td>
                      <td class="py-2 text-center">49</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">56</td>
                      <td class="py-2 text-center">65</td>
                      <td class="py-2 text-center">73</td>
                      <td class="py-2 text-center">64</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">72</td>
                      <td class="py-2 text-center">82</td>
                      <td class="py-2 text-center">91</td>
                      <td class="py-2 text-center">79</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">87</td>
                      <td class="py-2 text-center">98</td>
                      <td class="py-2 text-center">108</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">10</td>
                      <td class="py-2 text-center">49</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">57</td>
                      <td class="py-2 text-center">66</td>
                      <td class="py-2 text-center">75</td>
                      <td class="py-2 text-center">64</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">72</td>
                      <td class="py-2 text-center">83</td>
                      <td class="py-2 text-center">92</td>
                      <td class="py-2 text-center">79</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">88</td>
                      <td class="py-2 text-center">99</td>
                      <td class="py-2 text-center">109</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">20</td>
                      <td class="py-2 text-center">50</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">59</td>
                      <td class="py-2 text-center">71</td>
                      <td class="py-2 text-center">81</td>
                      <td class="py-2 text-center">65</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">74</td>
                      <td class="py-2 text-center">86</td>
                      <td class="py-2 text-center">97</td>
                      <td class="py-2 text-center">80</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">89</td>
                      <td class="py-2 text-center">102</td>
                      <td class="py-2 text-center">113</td>
                    </tr>
                    <tr class="border-b border-[#374151]/50">
                      <td class="py-2">30</td>
                      <td class="py-2 text-center">50</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">60</td>
                      <td class="py-2 text-center">73</td>
                      <td class="py-2 text-center">85</td>
                      <td class="py-2 text-center">65</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">75</td>
                      <td class="py-2 text-center">89</td>
                      <td class="py-2 text-center">101</td>
                      <td class="py-2 text-center">80</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">90</td>
                      <td class="py-2 text-center">104</td>
                      <td class="py-2 text-center">116</td>
                    </tr>
                    <tr>
                      <td class="py-2">60</td>
                      <td class="py-2 text-center">50</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">60</td>
                      <td class="py-2 text-center">75</td>
                      <td class="py-2 text-center">90</td>
                      <td class="py-2 text-center">65</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">75</td>
                      <td class="py-2 text-center">90</td>
                      <td class="py-2 text-center">105</td>
                      <td class="py-2 text-center">80</td>
                      <td class="py-2 text-center font-semibold" :class="results.activeLevel === 'II' ? 'text-[#009BE3]' : 'text-white/80'">90</td>
                      <td class="py-2 text-center">105</td>
                      <td class="py-2 text-center">120</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <template v-if="!showResults">
            <button 
              @click="clearForm"
              class="px-6 py-3 bg-[#374151] text-white rounded-lg hover:bg-[#4b5563] transition-colors flex items-center gap-2"
            >
              <UIcon name="i-heroicons-trash" class="w-5 h-5" />
              Temizle
            </button>
            <button 
              @click="loadExample"
              class="px-6 py-3 bg-[#064a81] text-white rounded-lg hover:bg-[#053a68] transition-colors flex items-center gap-2"
            >
              <UIcon name="i-heroicons-document-text" class="w-5 h-5" />
              Örnek Hesaplama
            </button>
            <button 
              @click="calculate"
              class="px-8 py-3 bg-[#009BE3] text-white rounded-lg hover:bg-[#0085c7] transition-colors flex items-center gap-2 font-semibold"
            >
              <UIcon name="i-heroicons-calculator" class="w-5 h-5" />
              Hesapla
            </button>
          </template>
          <template v-else>
            <button 
              @click="showResults = false"
              class="px-6 py-3 bg-[#374151] text-white rounded-lg hover:bg-[#4b5563] transition-colors flex items-center gap-2"
            >
              <UIcon name="i-heroicons-arrow-left" class="w-5 h-5" />
              Geri
            </button>
            <button 
              @click="printResults"
              class="px-6 py-3 bg-[#009BE3] text-white rounded-lg hover:bg-[#0085c7] transition-colors flex items-center gap-2"
            >
              <UIcon name="i-heroicons-document-arrow-down" class="w-5 h-5" />
              PDF Olarak Yazdır
            </button>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Yıldırım Risk Hesabı | Kurbanoğlu Mühendislik',
  description: 'NFC 17-102 Standardına göre yıldırım risk hesaplama aracı. Koruma seviyesi seçimi ve paratoner hesaplama.',
  ogTitle: 'Yıldırım Risk Hesabı | Kurbanoğlu Mühendislik',
  ogDescription: 'NFC 17-102 Standardına göre yıldırım risk hesaplama aracı. Koruma seviyesi seçimi ve paratoner hesaplama.'
})

const showResults = ref(false)

const formData = reactive({
  L: 50,
  W: 30,
  H: 15,
  C1: 1,
  C2: 0.5,
  C2Row: null, // Hangi satırda seçim yapıldığını takip etmek için
  C2Col: null, // Hangi sütunda seçim yapıldığını takip etmek için
  C3: 1,
  C4: 1,
  C5: 5,
  Td: 30
})

// C2 değişikliğini handle et
const handleC2Change = (event: Event, value: number, rowKey: string, colKey: string) => {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    formData.C2 = value
    formData.C2Row = rowKey
    formData.C2Col = colKey
  }
}

const results = reactive({
  Ae: 0,
  Ng: 0,
  Nd: 0,
  C: 0,
  Nc: 0,
  E: 0,
  protectionRequired: false,
  protectionLevel: '',
  activeLevel: '' // I, II, III, IV
})

const c1Options = [
  { label: 'Yapı, aynı veya daha yüksek ağaç ya da yapılar içinde ise', value: 0.25 },
  { label: 'Yapı, yüksekliği daha az olan yapılar ile çevrili ise', value: 0.5 },
  { label: 'En yakın yapıya uzaklık, yapı yüksekliğinin 3 katı (3H) ise', value: 1 },
  { label: 'Yapı, bulunduğu bölgede en yüksekte ise', value: 2 }
]

const c2Matrix = {
  metal: { label: 'Metal', values: { metal: 0.5, concrete: 1, flammable: 2 } },
  tile: { label: 'Kiremit', values: { metal: 1, concrete: 1, flammable: 2.5 } },
  flammable: { label: 'Tutuşabilir', values: { metal: 2, concrete: 2.5, flammable: 3 } }
}

const c3Options = [
  { label: 'Değersiz, yanıcı olmayan', value: 0.5 },
  { label: 'Normal değer, yanıcı', value: 1 },
  { label: 'Değerli, alev alıcı', value: 2 },
  { label: 'Çok değerli, parlayıcı ve patlayıcı', value: 3 }
]

const c4Options = [
  { label: 'Personelsiz bina', value: 0.5 },
  { label: 'Normal kalabalık', value: 1 },
  { label: 'Panik rizikolu, tahliye zorluğu', value: 3 }
]

const c5Options = [
  { label: 'Sürekli kullanımı yok, çevrede değersiz', value: 1 },
  { label: 'Sürekli kullanımda, çevrede değersiz', value: 5 },
  { label: 'Çevrede değerli', value: 10 }
]

const protectionLevels = [
  { range: 'E > 0,98', active: 'SEVİYE I + EK ÖNLEMLER', faraday: 'I' },
  { range: '0,95 < E ≤ 0,98', active: 'SEVİYE I', faraday: 'I' },
  { range: '0,90 < E ≤ 0,95', active: 'SEVİYE II', faraday: 'II' },
  { range: '0,80 < E ≤ 0,90', active: 'SEVİYE III', faraday: 'III' },
  { range: '0 < E ≤ 0,80', active: 'SEVİYE IV', faraday: 'IV' }
]

const faradaySpacing = [
  { level: 'I', spacing: 10 },
  { level: 'II', spacing: 10 },
  { level: 'III', spacing: 15 },
  { level: 'IV', spacing: 20 }
]

const sphereData = [
  { level: 'I', sphere: 20, mesh: '5x5' },
  { level: 'II', sphere: 30, mesh: '10x10' },
  { level: 'III', sphere: 45, mesh: '15x15' },
  { level: 'IV', sphere: 60, mesh: '20x20' }
]

function calculate() {
  // Sayısal garanti için katsayıları Number() ile dönüştür
  const C1 = Number(formData.C1)
  const C2 = Number(formData.C2)
  const C3 = Number(formData.C3)
  const C4 = Number(formData.C4)
  const C5 = Number(formData.C5)

  // Ae = LW + 6H(L+W) + 9πH²
  results.Ae = formData.L * formData.W + 6 * formData.H * (formData.L + formData.W) + 9 * Math.PI * Math.pow(formData.H, 2)
  
  // Ng = 0.04 × Td^1.25
  results.Ng = 0.04 * Math.pow(formData.Td, 1.25)
  
  // Nd = Ng × Ae × C1 × 10^-6
  results.Nd = results.Ng * results.Ae * C1 * Math.pow(10, -6)
  
  // C = C2 × C3 × C4 × C5
  results.C = C2 * C3 * C4 * C5
  
  // Nc = 5.5 × 10^-3 / C
  results.Nc = 5.5 * Math.pow(10, -3) / results.C
  
  // Protection required if Nd > Nc
  results.protectionRequired = results.Nd > results.Nc
  
  if (results.protectionRequired) {
    // E = 1 - (Nc/Nd)
    results.E = 1 - (results.Nc / results.Nd)
    
    // Determine protection level
    if (results.E > 0.98) {
      results.protectionLevel = 'SEVİYE I + EK ÖNLEMLER'
      results.activeLevel = 'I'
    } else if (results.E > 0.95) {
      results.protectionLevel = 'SEVİYE I'
      results.activeLevel = 'I'
    } else if (results.E > 0.90) {
      results.protectionLevel = 'SEVİYE II'
      results.activeLevel = 'II'
    } else if (results.E > 0.80) {
      results.protectionLevel = 'SEVİYE III'
      results.activeLevel = 'III'
    } else {
      results.protectionLevel = 'SEVİYE IV'
      results.activeLevel = 'IV'
    }
  }
  
  showResults.value = true
}

function clearForm() {
  formData.L = 0
  formData.W = 0
  formData.H = 0
  formData.C1 = 1
  formData.C2 = 0.5
  formData.C3 = 1
  formData.C4 = 1
  formData.C5 = 1
  formData.Td = 30
}

function loadExample() {
  formData.L = 50
  formData.W = 30
  formData.H = 15
  formData.C1 = 1
  formData.C2 = 0.5
  formData.C3 = 1
  formData.C4 = 1
  formData.C5 = 5
  formData.Td = 30
}

function isCurrentLevel(range: string): boolean {
  if (!results.protectionRequired) return false
  
  const E = results.E
  if (range === 'E > 0,98' && E > 0.98) return true
  if (range === '0,95 < E ≤ 0,98' && E > 0.95 && E <= 0.98) return true
  if (range === '0,90 < E ≤ 0,95' && E > 0.90 && E <= 0.95) return true
  if (range === '0,80 < E ≤ 0,90' && E > 0.80 && E <= 0.90) return true
  if (range === '0 < E ≤ 0,80' && E > 0 && E <= 0.80) return true
  return false
}

function printResults() {
  window.print()
}
</script>

<style scoped>
/* PDF header - normal görünümde gizle */
.pdf-header-only {
  display: none;
}

@media print {
  /* PDF header - print'te göster */
  .pdf-header-only {
    display: block !important;
  }

  /* Reset page */
  @page {
    size: A4 portrait;
    margin: 5mm;
  }

  /* Hide non-essential elements */
  button,
  .no-print,
  header,
  footer,
  nav {
    display: none !important;
  }

  /* Reset backgrounds for print */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Main container */
  .min-h-screen {
    min-height: auto !important;
    background: white !important;
    font-size: 8px !important;
    line-height: 1.2 !important;
    padding: 0 !important;
  }

  /* Hero section - başlık olarak göster */
  section:first-child {
    padding: 3px 0 !important;
    margin-bottom: 5px !important;
    background: white !important;
  }

  section:first-child h1 {
    font-size: 12px !important;
    font-weight: bold !important;
    text-align: center !important;
    margin: 2px 0 !important;
    color: #000 !important;
  }

  section:first-child p {
    font-size: 9px !important;
    text-align: center !important;
    margin: 1px 0 !important;
    color: #000 !important;
  }

  /* Cards - tablo formatı */
  .bg-\[\#212734\] {
    background: white !important;
    border: 1px solid #000 !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    padding: 3px 4px !important;
    margin: 2px 0 !important;
    page-break-inside: avoid;
  }

  /* Headers in cards - mavi arka plan */
  .bg-\[\#009BE3\] {
    background: #0ea5e9 !important;
    color: white !important;
    border-bottom: 2px solid #000 !important;
    padding: 3px 4px !important;
    font-weight: bold !important;
    font-size: 9px !important;
  }

  .bg-\[\#064a81\] {
    background: #075985 !important;
    color: white !important;
    border-bottom: 2px solid #000 !important;
    padding: 3px 4px !important;
    font-weight: bold !important;
    font-size: 9px !important;
  }

  .bg-\[\#dc2626\] {
    background: #dc2626 !important;
  }

  .bg-\[\#16a34a\] {
    background: #16a34a !important;
  }

  /* Text colors for print */
  .text-white {
    color: white !important;
  }

  .text-white\/80,
  .text-white\/60 {
    color: #374151 !important;
  }

  /* Önemli değerler - mavi renk */
  .text-\[\#009BE3\] {
    color: #0284c7 !important;
    font-weight: bold !important;
  }

  /* II sütunlarındaki değerler - mavi arka plan ve kalın yazı */
  td.font-semibold.text-\[\#009BE3\] {
    background: #dbeafe !important;
    color: #1e40af !important;
    font-weight: bold !important;
    border: 2px solid #3b82f6 !important;
  }

  /* Formula boxes */
  .bg-\[\#1a1f2e\] {
    background: #f1f5f9 !important;
    border: 1px solid #cbd5e1 !important;
    padding: 3px 4px !important;
    margin: 2px 0 !important;
  }

  .bg-\[\#1a1f2e\] .text-white {
    color: #1e293b !important;
  }

  .bg-\[\#1a1f2e\] .font-mono {
    color: #075985 !important;
    font-weight: bold !important;
  }

  /* LOGO - Print'te kesinlikle görünür olmalı (SVG inline) */
  .logo-container {
    display: block !important;
    visibility: visible !important;
    width: 160px !important;
    height: auto !important;
    flex-shrink: 0 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .logo-svg {
    width: 160px !important;
    height: auto !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .logo-svg text {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Tables - Excel benzeri sıkı format (yukarıdaki daha spesifik kurallar geçerli) */

  /* Highlighted row */
  .bg-\[\#009BE3\]\/20 {
    background: #e0f2fe !important;
  }

  /* Result boxes */
  .bg-\[\#dc2626\]\/20 {
    background: #fef2f2 !important;
    border-color: #dc2626 !important;
  }

  .bg-\[\#dc2626\]\/20 .text-white {
    color: #991b1b !important;
  }

  .bg-\[\#16a34a\]\/20 {
    background: #f0fdf4 !important;
  }

  .bg-\[\#16a34a\]\/20 .text-white {
    color: #166534 !important;
  }

  /* Grid layout - 2 sütunlu göster */
  .grid.grid-cols-1.lg\:grid-cols-2.gap-6 {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 3px !important;
  }

  /* Tek sütunlu grid'ler */
  .grid.grid-cols-1:not(.lg\:grid-cols-2) {
    display: block !important;
  }

  /* Max-width kaldır */
  .max-w-\[1200px\],
  .max-w-\[1440px\] {
    max-width: 100% !important;
    padding: 0 !important;
  }

  /* Spacing - optimize et */
  .space-y-4 > * + * {
    margin-top: 2px !important;
  }

  .space-y-6 > * + * {
    margin-top: 1px !important;
  }

  .space-y-8 > * + * {
    margin-top: 2px !important;
  }

  .gap-4 {
    gap: 2px !important;
  }

  .gap-6 {
    gap: 3px !important;
  }

  .gap-8 {
    gap: 4px !important;
  }

  /* Section padding'leri kaldır */
  section {
    padding: 0 !important;
    margin: 0 !important;
  }

  /* Padding'leri optimize et */
  .p-4 {
    padding: 3px !important;
  }

  .p-5 {
    padding: 4px !important;
  }

  .p-6, .p-8 {
    padding: 5px !important;
  }

  .px-4, .px-5, .px-6, .px-8 {
    padding-left: 4px !important;
    padding-right: 4px !important;
  }

  .py-4, .py-5, .py-6, .py-8 {
    padding-top: 3px !important;
    padding-bottom: 3px !important;
  }

  .py-12, .py-16 {
    padding-top: 5px !important;
    padding-bottom: 5px !important;
  }

  .mb-4 {
    margin-bottom: 3px !important;
  }

  .mb-6, .mb-8 {
    margin-bottom: 4px !important;
  }

  .mt-4 {
    margin-top: 3px !important;
  }

  .mt-6, .mt-8 {
    margin-top: 4px !important;
  }

  /* Excel benzeri tablo formatı */
  table {
    font-size: 6px !important;
    border-collapse: collapse !important;
    width: 100% !important;
    margin: 1px 0 !important;
    page-break-inside: avoid;
  }

  /* Piezoelektrik ve Elektrostatik tabloları için özel optimizasyon */
  .bg-\[\#212734\].rounded-\[16px\] {
    margin-bottom: 2px !important;
    page-break-inside: avoid;
  }

  .bg-\[\#212734\].rounded-\[16px\] .p-5 {
    padding: 2px !important;
  }

  .bg-\[\#212734\].rounded-\[16px\] .px-5 {
    padding-left: 2px !important;
    padding-right: 2px !important;
  }

  .bg-\[\#212734\].rounded-\[16px\] .py-3 {
    padding-top: 1px !important;
    padding-bottom: 1px !important;
  }

  th, td {
    padding: 1px 2px !important;
    border: 1px solid #000 !important;
    font-size: 6px !important;
    line-height: 1.1 !important;
    text-align: center !important;
  }

  th {
    background: #e5e7eb !important;
    font-weight: bold !important;
    color: #000 !important;
  }

  td {
    background: white !important;
    color: #000 !important;
  }

  /* Rp için üst simge düzeltmesi */
  .align-super {
    vertical-align: super !important;
    font-size: 4px !important;
    line-height: 0 !important;
  }

  /* II sütunları vurgula - mavi arka plan ve kalın yazı */
  td.font-semibold.text-\[\#009BE3\],
  td:has(.font-semibold.text-\[\#009BE3\]) {
    background: #dbeafe !important;
    color: #1e40af !important;
    font-weight: bold !important;
    border: 2px solid #3b82f6 !important;
  }

  /* Hesaplama formu grid'ini gizle */
  .grid.grid-cols-1.lg\:grid-cols-2.gap-6.lg\:gap-8 {
    display: none !important;
  }

  /* Tüm hesaplama kartlarını göster - örnek PDF'de hepsi var */
  .space-y-8 > div {
    display: block !important;
  }

  /* space-y-8 spacing'ini azalt - tek sayfaya sığdırmak için */
  .space-y-8 > * + * {
    margin-top: 2px !important;
  }

  /* Grid layout - 2 sütunlu göster */
  .grid.grid-cols-1.lg\:grid-cols-2.gap-6 {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 3px !important;
  }

  /* Faraday ve Küre tablolarını yan yana göster */
  .grid.grid-cols-1.md\:grid-cols-2.gap-6 {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 3px !important;
    width: 100% !important;
  }

  /* Alt taraftaki aksiyon butonlarını zaten genel button kuralı gizliyor, ek önlem: */
  .mt-8.flex.flex-wrap.justify-center.gap-4 {
    display: none !important;
  }

  /* Page breaks */
  .rounded-\[16px\] {
    page-break-inside: avoid;
  }

  /* Piezoelektrik ve Elektrostatik tabloları için page break kontrolü */
  .bg-\[\#212734\].rounded-\[16px\] {
    page-break-inside: avoid;
    break-inside: avoid;
    margin-bottom: 1px !important;
  }

  /* Tablo başlıkları için font boyutu optimizasyonu */
  .bg-\[\#212734\].rounded-\[16px\] h3 {
    font-size: 7px !important;
    padding: 1px 2px !important;
    margin: 0 !important;
  }

  /* Company header for print - sağa hizalı, küçük ve düzenli */
  /* Header container'ı sağa hizala */
  .bg-\[\#212734\] .flex.flex-col.md\:flex-row.justify-between {
    justify-content: space-between !important;
    display: flex !important;
    flex-direction: row !important;
  }

  /* Logo container'ı için print stili */
  .bg-\[\#212734\] .flex.items-start.gap-4 {
    display: flex !important;
    flex-direction: row !important;
    align-items: flex-start !important;
    gap: 4px !important;
  }

  /* Logo container'ının görünürlüğünü garanti et */
  .bg-\[\#212734\] .flex.items-start.gap-4 .logo-container {
    display: block !important;
    visibility: visible !important;
    width: 160px !important;
    height: auto !important;
    margin-right: 4px !important;
  }

  .bg-\[\#212734\] .flex.items-start.gap-4 .logo-container .logo-svg {
    width: 160px !important;
    height: auto !important;
    display: block !important;
    visibility: visible !important;
  }

  /* Logo için print stili - kesinlikle görünür olmalı */
  .logo-container {
    display: block !important;
    visibility: visible !important;
    width: 160px !important;
    height: auto !important;
    flex-shrink: 0 !important;
  }

  .logo-svg {
    width: 160px !important;
    height: auto !important;
    display: block !important;
    visibility: visible !important;
    opacity: 1 !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .logo-svg text {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  /* Başlığı ve NFC standardı kısmını PDF'den kaldır */
  .bg-\[\#212734\] h2 {
    display: none !important;
  }

  /* NFC standardı paragrafını gizle - h2'nin hemen altındaki p elementi */
  .bg-\[\#212734\] .flex.items-start.gap-4 > div:last-child p.text-white\/60 {
    display: none !important;
  }

  .bg-\[\#212734\] .flex.flex-col.md\:flex-row.justify-between > div:last-child {
    margin-left: auto !important;
    text-align: right !important;
    width: auto !important;
    flex-shrink: 0 !important;
  }

  .text-right.text-white\/60 {
    color: #374151 !important;
    font-size: 7px !important;
    line-height: 1.2 !important;
    text-align: right !important;
    margin-left: auto !important;
  }

  .text-right .font-semibold.text-white {
    color: #000 !important;
    font-size: 7px !important;
    font-weight: bold !important;
    margin-bottom: 1px !important;
    text-align: right !important;
    line-height: 1.2 !important;
  }

  /* Sol taraftaki başlık için print stili */
  .bg-\[\#212734\] h2 {
    color: #000 !important;
    font-size: 10px !important;
    font-weight: bold !important;
    margin-bottom: 1px !important;
    line-height: 1.2 !important;
  }

  .bg-\[\#212734\] .text-white\/60 {
    color: #666 !important;
    font-size: 7px !important;
  }

  .text-right p {
    margin: 0.5px 0 !important;
    color: #374151 !important;
    font-size: 7px !important;
    line-height: 1.2 !important;
    text-align: right !important;
  }

  .text-right .text-\[10px\] {
    font-size: 7px !important;
    text-align: right !important;
  }

  .text-right .text-\[9px\] {
    font-size: 6px !important;
    text-align: right !important;
  }

  .text-right .mb-1 {
    margin-bottom: 1px !important;
  }

  .text-right .mb-2 {
    margin-bottom: 2px !important;
  }

  .text-right .mb-0\.5 {
    margin-bottom: 0.5px !important;
  }

  /* Başlıklar */
  h1 {
    color: #000 !important;
    font-size: 12px !important;
    font-weight: bold !important;
    margin: 3px 0 !important;
    padding: 0 !important;
  }

  h2 {
    color: #000 !important;
    font-size: 10px !important;
    font-weight: bold !important;
    margin: 3px 0 !important;
    padding: 0 !important;
  }

  h3 {
    color: white !important;
    font-size: 9px !important;
    font-weight: bold !important;
    margin: 0 !important;
    padding: 0 !important;
  }

  /* Formül kutuları */
  .bg-\[\#1a1f2e\] {
    background: #f9fafb !important;
    border: 1px solid #000 !important;
    padding: 1px 2px !important;
    margin: 1px 0 !important;
    font-size: 6px !important;
  }

  /* Rounded köşeleri kaldır */
  .rounded-\[16px\],
  .rounded-\[12px\],
  .rounded-lg {
    border-radius: 0 !important;
  }

  /* Overflow gizle */
  .overflow-x-auto,
  .overflow-hidden {
    overflow: visible !important;
  }
}</style>
