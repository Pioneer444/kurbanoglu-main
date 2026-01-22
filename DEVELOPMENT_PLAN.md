# Kurbanoğlu Mühendislik - Web Sitesi Geliştirme Planı

## 📋 Proje Özeti

**Firma**: Kurbanoğlu Mühendislik  
**Sektör**: Endüstriyel Elektrik Taahhüt ve Danışmanlık  
**Tasarım**: Figma (Anasayfa + 5 alt sayfa)  
**Tech Stack**: Nuxt 3 + Nuxt UI + Tailwind CSS + TypeScript  
**Deployment**: Cloudflare Pages  
**CMS**: WordPress GraphQL

---

## 🎨 Design System (Figma'dan Çıkarılan)

### Renkler

```typescript
// app.config.ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',    // #064a81
      secondary: 'red',   // #e4032e
    }
  }
})
```

| Token | Hex | Kullanım |
|-------|-----|----------|
| `primary` | `#064a81` | Ana marka rengi, butonlar, başlıklar |
| `secondary` | `#e4032e` | Vurgu rengi, bazı başlıklar |
| `dark` | `#111827` | Footer, koyu bölümler, metinler |
| `light` | `#f5f8fe` | Açık arka planlar |
| `white` | `#ffffff` | Kartlar, header arka planı |
| `gray-text` | `#b1b1b1` | Footer alt metinleri |

### Tipografi

| Element | Font | Weight | Size | Usage |
|---------|------|--------|------|-------|
| H1 (Hero) | Almarena Display | Bold | 58px | Hero başlık |
| H2 (Section) | Inter | Medium | 24px | Bölüm başlıkları |
| Body | Inter | Light/Regular | 20px/16px | Paragraflar |
| Button | Inter | Medium | 16-20px | Buton metinleri |
| Small | Poppins/Inter | Regular | 12-14px | Footer, etiketler |

### Spacing & Layout

- **Container Max Width**: 1140px (Figma'da görülen)
- **Section Padding**: 64px (vertical)
- **Card Border Radius**: 16px
- **Button Border Radius**: 8px (small), 16px (large)

---

## 🏗️ Atomic Design Yapısı

### Atoms (Temel Yapı Taşları)

```
components/atoms/
├── AppLogo.vue           # Şirket logosu (SVG)
├── SectionBadge.vue      # "Hizmetler", "Projeler" badge'leri
├── ArrowLink.vue         # "Detaylı İncele →" link stili
└── SocialIcon.vue        # Sosyal medya ikonları
```

### Molecules (Bileşik Yapılar)

```
components/molecules/
├── ServiceCard.vue       # Hizmet kartı (ikon, başlık, açıklama)
├── ProjectCard.vue       # Proje kartı (görsel, başlık, kategori)
├── ProductCard.vue       # Ürün kartı (görsel, başlık)
├── PartnerLogo.vue       # Partner/referans logosu
└── NavLink.vue           # Navigation link item
```

### Organisms (Organizmalar)

```
components/organisms/
├── AppHeader.vue         # Site header (logo, nav, CTA)
├── AppFooter.vue         # Site footer
├── HeroSection.vue       # Hero bölümü
├── AboutSection.vue      # Hakkımızda/Tanıtım bölümü
├── ServicesSection.vue   # Hizmetler bölümü (3 kart)
├── ProjectsSection.vue   # Projeler bölümü (tab + kartlar)
├── ProductsSection.vue   # Ürünler bölümü (4 kart)
└── CtaSection.vue        # Call-to-action bölümü
```

### Templates (Şablonlar)

```
layouts/
├── default.vue           # Ana layout (Header + Main + Footer)
└── page.vue              # İç sayfa layout'u
```

### Pages (Sayfalar)

```
pages/
├── index.vue             # Anasayfa
├── hakkimizda.vue        # Hakkımızda
├── hizmetler/
│   ├── index.vue         # Hizmetler listesi
│   └── [slug].vue        # Hizmet detay
├── projeler/
│   ├── index.vue         # Projeler listesi
│   └── [slug].vue        # Proje detay
├── teknoloji.vue         # Teknoloji
├── blog/
│   ├── index.vue         # Blog listesi
│   └── [slug].vue        # Blog detay
└── iletisim.vue          # İletişim
```

---

## 🧩 Nuxt UI Bileşen Eşleştirmesi

| Figma Bölümü | Nuxt UI Bileşeni | Özelleştirme |
|--------------|------------------|--------------|
| Header | `UHeader` | Logo slot, navigation items, CTA button |
| Footer | `UFooter` | Columns, social links, copyright |
| Hero | `UPageHero` | Custom background image, buttons |
| Section Wrapper | `UPageSection` | Title, description, slot |
| Hizmet Kartları | `UPageCard` veya `UCard` | Icon, title, description |
| Proje Kartları | `UCard` | Image, overlay, title |
| Ürün Kartları | `UCard` | Image, title |
| Partner Logoları | `UPageLogos` | Grayscale effect |
| Tab Filter | `UTabs` | Custom styling |
| Buttons | `UButton` | Primary/Secondary variants |
| Navigation | `UNavigationMenu` | Horizontal items |

---

## 📁 Dosya Yapısı

```
kurbanoglu/
├── app.config.ts              # UI tema yapılandırması
├── app.vue                    # Ana uygulama
├── nuxt.config.ts             # Nuxt yapılandırması
├── tailwind.config.ts         # Tailwind özelleştirmeleri
├── assets/
│   ├── css/
│   │   └── main.css           # Global stiller, font imports
│   ├── fonts/
│   │   └── almarena/          # Özel font dosyaları
│   └── images/
│       ├── logo.svg
│       ├── hero-bg.jpg
│       └── projects/
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── composables/
│   ├── useServices.ts         # Hizmet verileri
│   ├── useProjects.ts         # Proje verileri
│   ├── useProducts.ts         # Ürün verileri
│   └── useWordPress.ts        # WordPress GraphQL
├── layouts/
│   └── default.vue
├── locales/
│   ├── tr.json
│   └── en.json
├── pages/
├── public/
│   └── favicon.ico
├── server/
│   └── api/
│       └── contact.post.ts    # İletişim formu API
├── types/
│   ├── index.ts
│   ├── service.ts
│   ├── project.ts
│   └── product.ts
└── utils/
    └── formatters.ts
```

---

## 🚀 Geliştirme Aşamaları

### Faz 1: Temel Kurulum ✅ → ⏳

- [x] Nuxt 3 projesi oluşturma
- [x] `.cursorrules` yapılandırması
- [x] Cloudflare Pages nitro preset
- [ ] Nuxt UI kurulumu
- [ ] Tailwind CSS yapılandırması
- [ ] Font dosyaları ekleme
- [ ] app.config.ts renk tanımları
- [ ] TypeScript type definitions

### Faz 2: Atoms & Molecules

- [ ] AppLogo.vue
- [ ] SectionBadge.vue
- [ ] ArrowLink.vue
- [ ] SocialIcon.vue
- [ ] ServiceCard.vue
- [ ] ProjectCard.vue
- [ ] ProductCard.vue
- [ ] PartnerLogo.vue

### Faz 3: Layout & Organisms

- [ ] default.vue layout
- [ ] AppHeader.vue
- [ ] AppFooter.vue
- [ ] HeroSection.vue
- [ ] AboutSection.vue
- [ ] ServicesSection.vue
- [ ] ProjectsSection.vue
- [ ] ProductsSection.vue

### Faz 4: Pages

- [ ] index.vue (Anasayfa)
- [ ] hakkimizda.vue
- [ ] hizmetler/index.vue
- [ ] hizmetler/[slug].vue
- [ ] projeler/index.vue
- [ ] projeler/[slug].vue
- [ ] teknoloji.vue
- [ ] iletisim.vue

### Faz 5: i18n Entegrasyonu

- [ ] @nuxtjs/i18n kurulumu
- [ ] tr.json / en.json oluşturma
- [ ] Locale-aware routing
- [ ] Language switcher

### Faz 6: WordPress GraphQL

- [ ] @nuxtjs/apollo kurulumu
- [ ] GraphQL queries tanımlama
- [ ] useWordPress composable
- [ ] Blog/içerik entegrasyonu

### Faz 7: SEO Optimizasyonu

- [ ] @nuxtjs/seo kurulumu
- [ ] Meta tags yapılandırması
- [ ] Sitemap
- [ ] robots.txt
- [ ] Schema.org JSON-LD

### Faz 8: Test & Deploy

- [ ] Responsive test
- [ ] Performance optimizasyonu
- [ ] Cloudflare Pages deploy
- [ ] DNS yapılandırması

---

## 📐 Figma → Kod Eşleştirmesi (Anasayfa)

### 1. Header (Frame 2608289)
```
Genişlik: 1440px, Yükseklik: 90px
Arka plan: #ffffff
Logo: Sol (150px padding)
Nav Items: Kurumsal, Hakkımızda, Hizmetler, Projeler, Teknoloji, Blog, İletişim
CTA: "Teklif Al" butonu (border: #064a81, radius: 8px)
```

### 2. Hero Section (Group 1000006389)
```
Yükseklik: 800px
Arka plan: Görsel (image 1)
Başlık: "Enerjiyle Güçlenen Endüstriyel Çözümler"
  - Font: Almarena Display Bold, 58px
  - Renk: #ffffff
Alt metin: "Endüstriyel elektrik, otomasyon..."
  - Font: Inter Medium, 24px
Butonlar:
  - "Keşfet" (beyaz bg, #064a81 text, icon: search)
  - "Teklif Al" (beyaz bg, #064a81 text, icon: call)
  - Border radius: 16px, padding: 16px 32px
```

### 3. About Section (Frame 2608386)
```
Arka plan: #ffffff
Yükseklik: 395px
Logo ikon: Ortada
Açıklama: Inter Light, 20px, #111827
Link: "Daha fazla bilgi →"
Partner logoları: 6 adet, grayscale
```

### 4. Services Section (Frame 2608389)
```
Arka plan: #f5f8fe
Badge: "Hizmetler" (border: #064a81)
3 Kart grid:
  - Endüstriyel Elektrik Sistemleri (#064a81)
  - Periyodik Kontroller (#e4032e)
  - Projelendirme Hizmetleri (#064a81)
Kart: bg: #ffffff, radius: 16px
  - Icon (48x48)
  - Başlık: Inter Medium, 24px
  - Açıklama: Inter Medium, 18px
```

### 5. Projects Section (Group 30)
```
Arka plan: #111827
Badge: "Projeler" (border: #ffffff)
Tab filter:
  - Hepsi, Tamamlananlar, Devam Edenler, Sektörlere Göre
  - Active: #ffffff bg, #212734 text
  - Inactive: transparent, #ffffff text
Proje kartları: 3 adet
  - Görsel (radius: 10px)
  - Başlık: Inter Bold, 28px, #f5f8fe
  - Kategori: Inter Medium, 16px, #f5f8fe
```

### 6. Products Section (Frame 2608390 - products)
```
Arka plan: #f5f8fe
Badge: "Ürünler"
4 Kart grid:
  - Pano & Kompanzasyon Malzemeleri
  - Trafo & Jeneratör Sistemleri
  - Güvenlik & Kamera Sistemleri
  - Aydınlatma Ürünleri
Kart: bg: #ffffff, radius: 16px
  - Görsel (200px height)
  - Başlık: Inter Medium, 20px, #064a81
```

### 7. Footer (footer frame)
```
Arka plan: #111827
Yükseklik: 227px
Sol: Logo + Sosyal medya ikonları
Sağ: Nav links + Copyright
Copyright: "© 2026 —Kurbanoğlu Mühendislik, Her hakkı saklıdır."
```

---

## 🎯 Öncelik Sırası (Bir Sonraki Adımlar)

1. **Nuxt UI Kurulumu** - `npx nuxi module add @nuxt/ui`
2. **Tailwind Yapılandırması** - Özel renkler ve fontlar
3. **app.config.ts** - Tema ayarları
4. **Layout Oluşturma** - default.vue
5. **Header Bileşeni** - AppHeader.vue
6. **Hero Section** - HeroSection.vue
7. **Anasayfa** - pages/index.vue

---

## 📝 Notlar

- Figma'daki "Almarena Display Bold" fontu özel bir font, Google Fonts'ta yok. Inter veya benzeri bir font ile değiştirilebilir veya font dosyası eklenebilir.
- Görseller WordPress'ten gelecek, placeholder kullanılacak.
- Responsive breakpoints: sm (640), md (768), lg (1024), xl (1280)
- Mobile-first yaklaşım benimsenecek.
- Tüm metinler i18n için hazırlanacak.

---

**Son Güncelleme**: Ocak 2026  
**Hazırlayan**: AI Assistant (Figma + Nuxt UI MCP analizi)
