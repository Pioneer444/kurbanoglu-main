# Nuxt 3 SSR Projesi

SSR destekli Nuxt 3 projesi.

## Kurulum

```bash
npm install
```

## Geliştirme

```bash
npm run dev
```

Proje http://localhost:3000 adresinde çalışacaktır.

## Cloudflare Pages Deployment

Bu proje Cloudflare Pages için yapılandırılmıştır.

### Cloudflare Pages Dashboard Ayarları

Cloudflare Pages dashboard'da aşağıdaki ayarları yapın:

1. **Build command**: `npm run build`
2. **Build output directory**: `dist` ⚠️ (`.output/public` değil!)
3. **Deploy command**: **MUTLAKA BOŞ BIRAKIN VEYA SİLİN** ❌ (Cloudflare Pages otomatik deploy yapar)

⚠️ **KRİTİK HATA**: Deploy command alanına `npx wrangler deploy` yazmayın! Bu Workers komutudur, Pages için geçersizdir. Cloudflare Pages otomatik olarak deploy eder. Eğer manuel deploy yapmak isterseniz, `wrangler pages deploy dist` komutunu kullanın.

### Environment Variables

Cloudflare Pages dashboard'da aşağıdaki environment variable'ları ayarlayın:

- `WORDPRESS_GRAPHQL_ENDPOINT`: WordPress GraphQL endpoint URL'i
- `NUXT_PUBLIC_SITE_URL`: Site URL'i (varsayılan: `https://kurbanoglu.com.tr`)

### Manuel Deploy (Opsiyonel)

Eğer manuel deploy yapmak isterseniz:

```bash
npm run build
npx wrangler pages deploy dist --project-name=kurbanoglu-main
```

## Yapılandırma

Detaylı geliştirme planı için `start.md` dosyasına bakın.
