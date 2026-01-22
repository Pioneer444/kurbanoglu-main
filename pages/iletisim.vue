<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[500px] md:h-[657px] flex items-end justify-center overflow-hidden pb-12 md:pb-16 lg:pb-20">
      <!-- Background -->
      <div class="absolute inset-0 z-0">
        <img 
          src="~/assets/images/contact/Whisk_d646e1fca9fe0109b3047837b22f5d80dr 1.png" 
          alt="İletişim"
          class="w-full h-full object-cover"
        />
        <!-- Linear Gradient Overlay -->
        <div 
          class="absolute inset-0 z-[1]"
          style="background: linear-gradient(180deg, rgba(245, 248, 254, 0) 0%, rgba(245, 248, 254, 0.8) 52.88%, #F5F8FE 99.99%);"
        ></div>
      </div>
      
      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-[960px] mx-auto">
        <h1 
          class="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[58px] font-bold text-[#111827] mb-4 md:mb-6"
          style="font-family: 'Inter', sans-serif; letter-spacing: -1.26px; line-height: 0.87;"
        >
          Projeleriniz İçin<br>Çözüm Ortağınız Olalım
        </h1>
        <p 
          class="text-[14px] md:text-[15px] font-normal text-[#111827] max-w-[535px] mx-auto"
          style="font-family: 'Inter', sans-serif; line-height: 1.4;"
        >
          Endüstriyel elektrik, otomasyon ve mühendislik ihtiyaçlarınız için uzman kadromuzla yanınızdayız. Sorularınız ve teklif talepleriniz için bize ulaşın.
        </p>
      </div>
    </section>

    <!-- Contact Info Cards Section -->
    <section class="bg-[#f5f8fe] py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <!-- Contact Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mb-12 md:mb-16">
          <!-- Telefon Card -->
          <div class="bg-white rounded-[16px] p-6 md:p-8">
            <div class="w-7 h-7 bg-[#f5f8fe] rounded-[8px] flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-phone" class="w-5 h-5 text-[#009BE3]" />
            </div>
            <h3 
              class="text-[18px] font-bold text-[#111827] mb-2"
              style="font-family: 'Inter', sans-serif;"
            >
              Telefon
            </h3>
            <p 
              class="text-[14px] font-light text-[#3d445c] mb-4 leading-[1.4]"
              style="font-family: 'Inter', sans-serif;"
            >
              Hafta içi 09:00 - 18:00 arası<br>bize ulaşabilirsiniz.
            </p>
            <a 
              href="tel:+902626463699"
              class="text-[16px] font-light text-[#111827] hover:text-[#009BE3] transition-colors"
              style="font-family: 'Inter', sans-serif;"
            >
              Tel: 0 (262) 646 36 99
            </a>
            <p 
              class="text-[14px] font-light text-[#3d445c] mt-1"
              style="font-family: 'Inter', sans-serif;"
            >
              Fax: 0 (262) 646 36 99
            </p>
          </div>

          <!-- E-Posta Card -->
          <div class="bg-white rounded-[16px] p-6 md:p-8">
            <div class="w-7 h-7 bg-[#f5f8fe] rounded-[8px] flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-[#009BE3]" />
            </div>
            <h3 
              class="text-[18px] font-bold text-[#111827] mb-2"
              style="font-family: 'Inter', sans-serif;"
            >
              E-Posta
            </h3>
            <p 
              class="text-[14px] font-light text-[#3d445c] mb-4"
              style="font-family: 'Inter', sans-serif;"
            >
              Teklif talepleriniz için mail atabilirsiniz.
            </p>
            <a 
              href="mailto:info@kurbanoglumuhendislik.com.tr"
              class="text-[16px] font-light text-[#111827] hover:text-[#009BE3] transition-colors"
              style="font-family: 'Inter', sans-serif;"
            >
              info@kurbanoglumuhendislik.com.tr
            </a>
          </div>

          <!-- Merkez Ofis Card -->
          <div class="bg-white rounded-[16px] p-6 md:p-8">
            <div class="w-7 h-7 bg-[#f5f8fe] rounded-[8px] flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-[#009BE3]" />
            </div>
            <h3 
              class="text-[18px] font-bold text-[#111827] mb-2"
              style="font-family: 'Inter', sans-serif;"
            >
              Merkez Ofis
            </h3>
            <p 
              class="text-[14px] font-light text-[#3d445c] mb-4"
              style="font-family: 'Inter', sans-serif;"
            >
              Gebze, Kocaeli
            </p>
            <p 
              class="text-[16px] font-light text-[#111827] leading-[1.6]"
              style="font-family: 'Inter', sans-serif;"
            >
              öşklü Çeşme, 549. Sk. No:10A, 41400 Gebze/Kocaeli
            </p>
          </div>
        </div>

        <!-- Form & Map Section -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          <!-- Contact Form -->
          <div>
            <p 
              class="text-[14px] font-light text-[#009BE3] tracking-wider mb-2"
              style="font-family: 'Inter', sans-serif;"
            >
              İletişim Formu
            </p>
            <h2 
              class="text-[24px] md:text-[28px] font-semibold text-[#111827] mb-6"
              style="font-family: 'Inter', sans-serif;"
            >
              Bize Yazın
            </h2>
            
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div>
                <label 
                  class="block text-[14px] font-light text-[#111827] mb-2"
                  style="font-family: 'Inter', sans-serif;"
                >
                  E-Posta
                </label>
                <input 
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full h-[40px] px-4 bg-white rounded-[8px] border border-gray-200 focus:border-[#064a81] focus:outline-none text-[14px]"
                  style="font-family: 'Inter', sans-serif;"
                  placeholder="ornek@email.com"
                />
              </div>
              
              <div>
                <label 
                  class="block text-[14px] font-light text-[#111827] mb-2"
                  style="font-family: 'Inter', sans-serif;"
                >
                  Mesajınız
                </label>
                <textarea 
                  v-model="form.message"
                  required
                  rows="8"
                  class="w-full px-4 py-3 bg-white rounded-[8px] border border-gray-200 focus:border-[#064a81] focus:outline-none text-[14px] resize-none"
                  style="font-family: 'Inter', sans-serif;"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>
              
              <button 
                type="submit"
                class="w-full h-[40px] md:h-[44px] bg-[#2766A7] rounded-[8px] text-[14px] font-medium text-white hover:bg-sky-500 transition-colors"
                style="font-family: 'Inter', sans-serif;"
              >
                Mesajı Gönder
              </button>
            </form>
          </div>

          <!-- Map -->
          <div>
            <p 
              class="text-[14px] font-light text-[#009BE3] tracking-wider mb-2"
              style="font-family: 'Inter', sans-serif;"
            >
              Konum
            </p>
            <h2 
              class="text-[24px] md:text-[28px] font-semibold text-[#111827] mb-6"
              style="font-family: 'Inter', sans-serif;"
            >
              Ofisimizi Ziyaret Edin
            </h2>
            
            <div class="w-full h-[300px] md:h-[360px] rounded-[16px] overflow-hidden">
              <iframe 
                src="https://www.google.com/maps?q=%C3%B6%C5%9Fkl%C3%BC%20%C3%87e%C5%9Fme%2C%20549.%20Sk.%20No%3A10A%2C%2041400%20Gebze%2FKocaeli&output=embed"
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-white py-12 md:py-16 lg:py-20">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[150px]">
        <!-- Header -->
        <div class="flex justify-center mb-10 md:mb-12">
          <span 
            class="px-6 py-2 border border-[#111827] rounded-[10px] text-[16px] md:text-[17px] font-normal text-[#111827]"
            style="font-family: 'Inter', sans-serif;"
          >
            SSS
          </span>
        </div>

        <!-- FAQ Items -->
        <div class="space-y-2">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="group"
          >
            <button 
              class="w-full flex items-center justify-between text-left py-4 md:py-5 active:scale-[0.99] transition-transform duration-150"
              @click="toggleFaq(index)"
            >
              <span 
                class="text-[18px] md:text-[20px] transition-all duration-300 transform"
                :class="activeFaq === index ? 'text-[#111827] font-bold translate-x-1' : 'text-[#8693af] font-medium hover:text-[#111827] hover:translate-x-1'"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ faq.question }}
              </span>
              <div 
                class="w-[30px] h-[30px] border-2 border-[#111827] rounded-[6px] flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300"
                :class="activeFaq === index ? 'bg-[#111827] rotate-0' : 'bg-transparent hover:bg-[#111827]/10'"
              >
                <UIcon 
                  :name="activeFaq === index ? 'i-heroicons-minus' : 'i-heroicons-plus'" 
                  class="w-5 h-5 transition-all duration-300"
                  :class="activeFaq === index ? 'text-white' : 'text-[#111827]'"
                />
              </div>
            </button>
            
            <!-- Answer with smooth height animation -->
            <div 
              class="overflow-hidden transition-all duration-500 ease-in-out"
              :class="activeFaq === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'"
            >
              <p 
                class="pb-6 text-[18px] md:text-[20px] font-normal text-[#111827] leading-[1.8] pr-12 transform transition-all duration-300"
                :class="activeFaq === index ? 'translate-y-0' : '-translate-y-2'"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ faq.answer }}
              </p>
            </div>
            
            <!-- Divider -->
            <div class="h-px bg-gray-200 transition-colors duration-300" :class="activeFaq === index ? 'bg-[#111827]/20' : ''"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'İletişim | Kurbanoğlu Mühendislik',
  description: 'Kurbanoğlu Mühendislik ile iletişime geçin. Endüstriyel elektrik, otomasyon ve mühendislik ihtiyaçlarınız için uzman kadromuzla yanınızdayız.',
  ogTitle: 'İletişim | Kurbanoğlu Mühendislik',
  ogDescription: 'Kurbanoğlu Mühendislik ile iletişime geçin. Sorularınız ve teklif talepleriniz için bize ulaşın.'
})

const form = ref({
  email: '',
  message: ''
})

const activeFaq = ref<number | null>(0)

const faqs = [
  {
    question: 'Hizmetlerimizde kaliteyi nasıl sağlıyoruz?',
    answer: 'Kullandığımız ürünlerden uygulama süreçlerine kadar tüm aşamalarda kalite standartlarını ve mevzuatları titizlikle esas alıyoruz.'
  },
  {
    question: 'Projelere nasıl yaklaşıyoruz?',
    answer: 'Her projeyi benzersiz olarak ele alıyor, müşteri ihtiyaçlarını detaylı analiz ederek özelleştirilmiş çözümler sunuyoruz.'
  },
  {
    question: 'Anahtar teslim çözümler sunuyor muyuz?',
    answer: 'Evet, projelerinizi baştan sona yönetiyor ve anahtar teslim çözümler sunuyoruz.'
  },
  {
    question: 'Enerji verimliliğini nasıl artırıyoruz?',
    answer: 'Modern teknolojiler ve akıllı sistemler kullanarak enerji tüketimini optimize ediyor, maliyetlerinizi düşürüyoruz.'
  },
  {
    question: 'Satış sonrası destek hizmeti veriyor muyuz?',
    answer: '7/24 teknik destek ekibimizle satış sonrası hizmet sağlıyor, bakım ve onarım işlemlerini gerçekleştiriyoruz.'
  }
]

const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const handleSubmit = () => {
  // Form submission logic
  console.log('Form submitted:', form.value)
  alert('Mesajınız başarıyla gönderildi!')
  form.value = { email: '', message: '' }
}
</script>
