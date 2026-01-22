# Kurbanoğlu Mühendislik - Web Sitesi Geliştirme Planı

## Proje Bilgileri
- **Firma**: Kurbanoğlu Mühendislik
- **Sektör**: Endüstriyel Elektrik Taahhüt ve Danışmanlık
- **Framework**: Nuxt 3 (v3.16+) SSR destekli
- **UI Framework**: Nuxt UI + Tailwind CSS
- **Deployment**: Cloudflare Pages
- **CMS**: WordPress GraphQL
- **Port**: 3000 (development)
- **Tarih**: Ocak 2026

## Tasarım Kaynağı
- **Figma**: Bağlı (Channel: 69qbkr2h)
- **Sayfalar**: Anasayfa, Hakkımızda, Hizmetlerimiz, Projeler, Teknoloji, İletişim

## Kurulum Aşaması (Şu An)

### 1. Proje Oluşturma
- Nuxt 3 starter template ile proje oluşturulacak
- En güncel Nuxt 3 versiyonu kullanılacak (v3.16+)
- TypeScript desteği aktif olacak
- Port 3000'de çalışacak şekilde yapılandırılacak

### 2. Temel Yapılandırma
- `nuxt.config.ts` dosyası yapılandırılacak
- SSR modu aktif olacak
- Gerekli klasör yapısı oluşturulacak

## Sonraki Geliştirme Adımları

### 3. i18n (Uluslararasılaştırma) Desteği
**Kullanılacak Modül**: `@nuxtjs/i18n`

**Özellikler**:
- Vue I18n entegrasyonu
- Otomatik route oluşturma (locale prefix'li)
- SEO optimizasyonu (locale bazlı meta tag'ler)
- Lazy-loading translation desteği
- Locale-aware yönlendirme
- Locale-specific domain desteği

**Kurulum**:
```bash
npx nuxi@latest module add i18n
```

**Yapılandırma**:
- Varsayılan dil: Türkçe (tr)
- Desteklenen diller: Türkçe, İngilizce
- Strategy: `prefix_except_default`
- Translation dosyaları `locales/` klasöründe organize edilecek

### 4. GraphQL Entegrasyonu
**Kullanılacak Modül**: `@nuxtjs/apollo`

**Özellikler**:
- Apollo Client entegrasyonu
- SSR uyumlu GraphQL sorguları
- Otomatik composable'lar (`useAsyncQuery`, `useMutation`)
- Authentication token yönetimi
- Multiple client desteği

**Kurulum**:
```bash
npm install -D @nuxtjs/apollo@next
```

**Yapılandırma**:
- GraphQL endpoint yapılandırması
- Authentication header yönetimi
- Error handling mekanizması

### 5. SEO Optimizasyonu
**Kullanılacak Modül**: `@nuxtjs/seo`

**Özellikler**:
- Otomatik robots.txt oluşturma
- Sitemap generation
- Schema.org JSON-LD desteği
- Open Graph image oluşturma
- Broken link kontrolü
- Canonical URL yönetimi
- Meta tag optimizasyonu

**Kurulum**:
```bash
npx nuxi@latest module add seo
```

**Yapılandırma**:
- Site metadata yapılandırması
- Locale bazlı SEO ayarları
- Social media preview ayarları

## Teknik Detaylar

### Klasör Yapısı
```
/
├── assets/          # CSS, görseller, fontlar
├── components/      # Vue bileşenleri
├── composables/     # Composable fonksiyonlar
├── layouts/         # Layout şablonları
├── locales/         # i18n translation dosyaları
├── middleware/      # Route middleware'leri
├── pages/           # Sayfa route'ları
├── plugins/         # Nuxt plugin'leri
├── public/          # Statik dosyalar
├── server/          # Server-side kod
│   ├── api/         # API route'ları
│   └── middleware/  # Server middleware
└── utils/           # Yardımcı fonksiyonlar
```

### Önemli Notlar
- Nuxt 3, Ocak 2026'da EOL olacak, gelecekte Nuxt 4'e geçiş değerlendirilebilir
- Tüm modüller en güncel versiyonlarıyla kurulacak
- TypeScript strict mode aktif olacak
- ESLint ve Prettier yapılandırması eklenecek
- Git repository başlatılacak

## Geliştirme Sırası
1. ✅ Proje oluşturma ve temel yapılandırma
2. ⏳ i18n modülü entegrasyonu
3. ⏳ GraphQL entegrasyonu
4. ⏳ SEO optimizasyonu
5. ⏳ Test ve optimizasyon

## Bağımlılıklar
- Nuxt 3 (v3.16+)
- @nuxtjs/i18n
- @nuxtjs/apollo
- @nuxtjs/seo
- Vue 3
- TypeScript
