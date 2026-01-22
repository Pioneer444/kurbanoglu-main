// Blog post interface
export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  category: string
  categoryId: string
  slug: string
  author: {
    name: string
    role: string
    avatar?: string
  }
  readTime: string
  tags: string[]
}

// Categories
export const blogCategories = [
  { id: 'all', name: 'Tümü' },
  { id: 'endustriyel', name: 'Endüstriyel Elektrik' },
  { id: 'otomasyon', name: 'Otomasyon' },
  { id: 'enerji', name: 'Enerji Verimliliği' },
  { id: 'guvenlik', name: 'İş Güvenliği' },
  { id: 'teknoloji', name: 'Teknoloji' }
]

// Featured post
export const featuredPost: BlogPost = {
  id: 1,
  title: 'Endüstriyel Tesislerde Enerji Verimliliği: 2026 Trendleri',
  excerpt: 'Enerji maliyetlerinin artmasıyla birlikte endüstriyel tesislerde verimlilik her zamankinden daha önemli hale geldi. Bu yazıda 2026 yılının enerji verimliliği trendlerini ve uygulanabilir çözümleri inceliyoruz.',
  content: `
## Giriş

Enerji maliyetlerinin sürekli artması ve çevresel sürdürülebilirlik hedefleri, endüstriyel tesislerde enerji verimliliğini her zamankinden daha kritik bir konu haline getirdi. 2026 yılında, bu alandaki yenilikler ve trendler, işletmelerin operasyonel maliyetlerini düşürürken çevresel etkilerini de minimize etmelerine olanak tanıyor.

## 1. Akıllı Enerji Yönetim Sistemleri

Modern enerji yönetim sistemleri, yapay zeka ve makine öğrenimi algoritmaları kullanarak enerji tüketimini gerçek zamanlı olarak optimize ediyor. Bu sistemler:

- **Anlık izleme ve analiz**: Tüm enerji tüketim noktalarının sürekli takibi
- **Tahmine dayalı bakım**: Ekipman arızalarını önceden tespit ederek enerji kayıplarını önleme
- **Otomatik optimizasyon**: Üretim programlarına göre enerji kullanımının dinamik ayarlanması

## 2. Güneş Enerjisi Entegrasyonu

Endüstriyel tesislerde çatı üstü güneş panelleri ve güneş enerjisi depolama sistemleri giderek yaygınlaşıyor. 2026 yılında:

- Panel verimlilikleri %25'in üzerine çıktı
- Batarya depolama maliyetleri %40 azaldı
- Hibrit sistemler ile kesintisiz enerji sağlanıyor

## 3. Reaktif Güç Kompanzasyonu

Reaktif güç kompanzasyonu, enerji verimliliğinin en temel yapı taşlarından biri olmaya devam ediyor. Doğru kompanzasyon ile:

- Enerji kayıpları %15-20 oranında azaltılabiliyor
- Trafo kapasiteleri daha verimli kullanılıyor
- Elektrik faturaları önemli ölçüde düşüyor

## 4. LED Aydınlatma ve Akıllı Kontrol

LED teknolojisindeki gelişmeler ve akıllı aydınlatma kontrol sistemleri ile:

- Aydınlatma enerji tüketimi %70'e kadar azaltılabiliyor
- Hareket sensörleri ve gün ışığı sensörleri ile otomatik kontrol
- Uzaktan izleme ve yönetim imkanı

## 5. Değişken Hız Sürücüleri (VSD)

Motor sistemlerinde değişken hız sürücüleri kullanımı artık standart haline geldi:

- Motor verimliliği %30'a kadar artırılabiliyor
- Yumuşak başlatma ile mekanik aşınma azalıyor
- Proses kontrolü iyileşiyor

## Sonuç

2026 yılında enerji verimliliği, sadece maliyet tasarrufu değil, aynı zamanda rekabet avantajı ve sürdürülebilirlik hedeflerine ulaşmanın anahtarı haline geldi. Kurbanoğlu Mühendislik olarak, müşterilerimize bu trendleri takip eden ve uygulayan çözümler sunmaya devam ediyoruz.

**Enerji verimliliği projeniz için bizimle iletişime geçin.**
  `,
  image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80',
  date: '15 Ocak 2026',
  category: 'Enerji Verimliliği',
  categoryId: 'enerji',
  slug: 'endustriyel-tesislerde-enerji-verimliligi-2026-trendleri',
  author: {
    name: 'Kurbanoğlu Mühendislik',
    role: 'Teknik Ekip',
    avatar: '/images/logo.svg'
  },
  readTime: '8 dk okuma',
  tags: ['Enerji Verimliliği', 'Endüstriyel Elektrik', 'Sürdürülebilirlik', '2026 Trendleri']
}

// All blog posts
export const blogPosts: BlogPost[] = [
  featuredPost,
  {
    id: 2,
    title: 'Kompanzasyon Sistemlerinde Doğru Seçim Nasıl Yapılır?',
    excerpt: 'Reaktif güç kompanzasyonu için doğru sistem seçimi, enerji tasarrufu ve ekipman ömrü açısından kritik öneme sahiptir.',
    content: `
## Kompanzasyon Nedir?

Kompanzasyon, elektrik sistemlerinde reaktif gücün dengelenmesi işlemidir. Endüstriyel tesislerde motorlar, transformatörler ve diğer indüktif yükler reaktif güç tüketir. Bu reaktif güç, elektrik şebekesine ek yük bindirerek enerji kayıplarına ve maliyet artışlarına neden olur.

## Neden Kompanzasyon Gerekli?

### 1. Enerji Tasarrufu
Reaktif güç kompanzasyonu ile:
- Trafo ve kablo kayıpları azalır
- Gerilim düşümleri minimize edilir
- Sistem kapasitesi artar

### 2. Maliyet Azaltma
- Reaktif enerji ceza ücretlerinden kurtulma
- Daha küçük kesitli kablo kullanımı
- Trafo kapasitesinin verimli kullanımı

### 3. Ekipman Ömrü
- Aşırı akım stresinin azalması
- Motor ve trafo ömrünün uzaması
- Bakım maliyetlerinin düşmesi

## Kompanzasyon Sistemi Seçimi

### Sabit Kompanzasyon
**Uygun olduğu durumlar:**
- Sabit yüklü tesisler
- Reaktif güç değişiminin az olduğu sistemler
- Düşük bütçeli projeler

### Otomatik Kompanzasyon
**Uygun olduğu durumlar:**
- Değişken yüklü tesisler
- Reaktif güç değişiminin yüksek olduğu sistemler
- Hassas güç faktörü kontrolü gereken uygulamalar

### Harmonik Filtreli Kompanzasyon
**Uygun olduğu durumlar:**
- Harmonik kirliliğin yüksek olduğu tesisler
- Değişken hız sürücüleri olan sistemler
- Hassas ekipmanların bulunduğu ortamlar

## Doğru Kondansatör Seçimi

### Kapasite Hesabı
Gerekli reaktif güç miktarı şu formülle hesaplanır:

**Qc = P × (tan φ1 - tan φ2)**

Burada:
- Qc: Gerekli kondansatör kapasitesi (kVAr)
- P: Aktif güç (kW)
- φ1: Mevcut güç faktörü açısı
- φ2: Hedef güç faktörü açısı

### Gerilim Seviyesi
- Alçak gerilim (400V): En yaygın uygulama
- Orta gerilim: Büyük kapasiteli tesisler için

## Kurulum ve Bakım

### Kurulum Önerileri
1. Kondansatör panosunun uygun yere konumlandırılması
2. Yeterli havalandırma sağlanması
3. Sigorta ve kontaktör seçiminde dikkatli olunması

### Periyodik Bakım
- 6 ayda bir kontaktör kontrolü
- Yıllık kondansatör kapasitesi ölçümü
- Reaktif güç kontrol rölesi ayar kontrolü

## Sonuç

Doğru kompanzasyon sistemi seçimi, uzun vadeli enerji tasarrufu ve ekipman güvenilirliği için kritik öneme sahiptir. Profesyonel bir mühendislik analizi, en uygun çözümün belirlenmesine yardımcı olacaktır.

**Kompanzasyon sistemi ihtiyaçlarınız için uzman ekibimizle iletişime geçin.**
    `,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80',
    date: '12 Ocak 2026',
    category: 'Endüstriyel Elektrik',
    categoryId: 'endustriyel',
    slug: 'kompanzasyon-sistemlerinde-dogru-secim',
    author: {
      name: 'Kurbanoğlu Mühendislik',
      role: 'Teknik Ekip',
      avatar: '/images/logo.svg'
    },
    readTime: '6 dk okuma',
    tags: ['Kompanzasyon', 'Reaktif Güç', 'Enerji Tasarrufu', 'Endüstriyel Elektrik']
  },
  {
    id: 3,
    title: 'Akıllı Ev Otomasyonunda Güvenlik Önlemleri',
    excerpt: 'Akıllı ev sistemlerinde siber güvenlik ve fiziksel güvenlik önlemlerinin önemi giderek artıyor.',
    content: `
## Akıllı Ev Sistemleri ve Güvenlik

Akıllı ev teknolojileri hayatımızı kolaylaştırırken, beraberinde yeni güvenlik risklerini de getiriyor. Bu yazıda, akıllı ev sistemlerinde dikkat edilmesi gereken güvenlik önlemlerini inceliyoruz.

## Siber Güvenlik Riskleri

### 1. Ağ Güvenliği
Akıllı ev cihazları genellikle Wi-Fi üzerinden çalışır ve bu da potansiyel güvenlik açıkları oluşturur:

- **Zayıf şifreler**: Varsayılan şifrelerin değiştirilmemesi
- **Güncellenmeyen yazılımlar**: Güvenlik yamalarının uygulanmaması
- **Şifrelenmemiş iletişim**: Veri aktarımının korunmaması

### 2. Cihaz Güvenliği
- Güvenilir marka ve üreticilerin tercih edilmesi
- Düzenli firmware güncellemeleri
- İki faktörlü kimlik doğrulama kullanımı

## Fiziksel Güvenlik Önlemleri

### Akıllı Kilit Sistemleri
- Mekanik yedek kilit bulundurulması
- Pil ömrünün düzenli kontrol edilmesi
- Geçici erişim kodlarının yönetimi

### Güvenlik Kameraları
- Yerel kayıt seçeneği bulundurulması
- Bulut depolama güvenliği
- Gizlilik bölgelerinin tanımlanması

### Alarm Sistemleri
- Yedek güç kaynağı
- Kesinti durumunda bildirim
- Profesyonel izleme hizmetleri

## Ağ Güvenliği Önerileri

### 1. Router Güvenliği
- Güçlü WPA3 şifreleme kullanımı
- Varsayılan yönetici şifresinin değiştirilmesi
- Misafir ağı oluşturulması

### 2. Ağ Segmentasyonu
Akıllı ev cihazlarını ayrı bir ağda tutmak:
- IoT cihazları için ayrı VLAN
- Ana bilgisayarlardan izolasyon
- Trafik izleme ve filtreleme

### 3. Güvenlik Duvarı
- Gelen bağlantıların sınırlandırılması
- Şüpheli trafiğin engellenmesi
- Log kayıtlarının tutulması

## Gizlilik Koruması

### Veri Minimizasyonu
- Yalnızca gerekli verilerin toplanması
- Yerel işleme tercih edilmesi
- Bulut bağımlılığının azaltılması

### Mikrofon ve Kamera Kontrolü
- Fiziksel kapatma mekanizmaları
- Kullanılmadığında devre dışı bırakma
- Kayıt göstergelerinin kontrolü

## En İyi Uygulamalar

1. **Düzenli Güvenlik Denetimleri**
   - Aylık cihaz ve yazılım kontrolü
   - Erişim günlüklerinin incelenmesi
   - Kullanılmayan cihazların kaldırılması

2. **Yedekleme Planı**
   - Manuel kontrol seçenekleri
   - Kesinti durumunda prosedürler
   - Önemli ayarların yedeklenmesi

3. **Aile Eğitimi**
   - Güvenli kullanım alışkanlıkları
   - Şüpheli durumların bildirilmesi
   - Acil durum prosedürleri

## Sonuç

Akıllı ev sistemleri doğru güvenlik önlemleri ile birlikte kullanıldığında hem konfor hem de güvenlik sağlar. Profesyonel kurulum ve düzenli bakım, güvenli bir akıllı ev deneyiminin anahtarıdır.

**Güvenli akıllı ev sistemi kurulumu için bizimle iletişime geçin.**
    `,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80',
    date: '10 Ocak 2026',
    category: 'Otomasyon',
    categoryId: 'otomasyon',
    slug: 'akilli-ev-otomasyonunda-guvenlik-onlemleri',
    author: {
      name: 'Kurbanoğlu Mühendislik',
      role: 'Teknik Ekip',
      avatar: '/images/logo.svg'
    },
    readTime: '7 dk okuma',
    tags: ['Akıllı Ev', 'Otomasyon', 'Siber Güvenlik', 'IoT']
  },
  {
    id: 4,
    title: 'Periyodik Kontrollerin Önemi ve Yasal Zorunluluklar',
    excerpt: 'Elektrik tesisatlarında periyodik kontroller hem güvenlik hem de yasal uyumluluk açısından vazgeçilmezdir.',
    content: `
## Periyodik Kontrol Nedir?

Periyodik kontrol, elektrik tesisatlarının ve ekipmanlarının belirli aralıklarla denetlenmesi, test edilmesi ve güvenlik standartlarına uygunluğunun doğrulanması işlemidir.

## Yasal Zorunluluklar

### İlgili Mevzuat
- **Elektrik İç Tesisleri Yönetmeliği**: Tüm elektrik tesisatları için geçerli
- **İş Sağlığı ve Güvenliği Kanunu**: İşyerlerinde zorunlu
- **Elektrik Tesisleri Proje Yönetmeliği**: Proje onayı gereksinimleri

### Kontrol Periyotları
| Tesis Türü | Periyot |
|------------|---------|
| İşyerleri | 1 yıl |
| Konutlar | 5 yıl |
| Topraklama | 1 yıl |
| Paratoner | 1 yıl |

## Neler Kontrol Edilir?

### 1. Görsel Muayene
- Kablo ve bağlantı durumları
- Pano ve şalter kontrolleri
- Koruma elemanları
- İşaretleme ve etiketleme

### 2. Ölçümler
- **Topraklama direnci**: Güvenlik için kritik
- **İzolasyon direnci**: Kaçak akım riski
- **Döngü empedansı**: Koruma koordinasyonu
- **RCD test**: Kaçak akım rölesi çalışması

### 3. Fonksiyonel Testler
- Koruma elemanlarının açma testleri
- Acil durum sistemleri
- Yedek güç kaynakları

## Periyodik Kontrol Süreci

### Aşama 1: Hazırlık
1. Mevcut projelerin incelenmesi
2. Önceki kontrol raporlarının değerlendirilmesi
3. Kontrol planının oluşturulması

### Aşama 2: Saha Çalışması
1. Görsel muayene
2. Ölçüm ve testler
3. Bulguların kayıt altına alınması

### Aşama 3: Raporlama
1. Kontrol raporunun hazırlanması
2. Tespit edilen uygunsuzlukların listelenmesi
3. Öneri ve tavsiyelerin belirtilmesi

## Sık Karşılaşılan Uygunsuzluklar

### Topraklama Sorunları
- Yetersiz topraklama direnci
- Kopuk veya hasarlı topraklama iletkenleri
- Eksik eşpotansiyel bağlantıları

### İzolasyon Sorunları
- Düşük izolasyon direnci
- Hasarlı kablo izolasyonları
- Nemli ortamda izolasyon bozulması

### Koruma Koordinasyonu
- Yanlış sigorta seçimi
- Eksik veya çalışmayan RCD
- Uyumsuz koruma elemanları

## Periyodik Kontrolün Faydaları

### 1. Güvenlik
- Elektrik kazalarının önlenmesi
- Yangın riskinin azaltılması
- Çalışan güvenliğinin sağlanması

### 2. Yasal Uyumluluk
- Cezai yaptırımlardan korunma
- Sigorta geçerliliği
- İşyeri ruhsatı gereksinimleri

### 3. Ekonomik Faydalar
- Arıza kaynaklı üretim kayıplarının önlenmesi
- Ekipman ömrünün uzaması
- Enerji verimliliği iyileştirmeleri

## Kontrol Sonrası Yapılacaklar

### Uygunsuzluk Durumunda
1. Kritik uygunsuzlukların acil giderilmesi
2. Düzeltici faaliyet planı oluşturulması
3. Takip kontrolünün planlanması

### Uygunluk Durumunda
1. Kontrol raporunun arşivlenmesi
2. Bir sonraki kontrol tarihinin planlanması
3. Bakım prosedürlerinin gözden geçirilmesi

## Sonuç

Periyodik kontroller, hem yasal zorunluluk hem de güvenlik açısından vazgeçilmezdir. Profesyonel ve yetkili kuruluşlar tarafından yapılan kontroller, tesislerinizin güvenli çalışmasını sağlar.

**Periyodik kontrol hizmetlerimiz hakkında bilgi almak için bizimle iletişime geçin.**
    `,
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1200&q=80',
    date: '8 Ocak 2026',
    category: 'İş Güvenliği',
    categoryId: 'guvenlik',
    slug: 'periyodik-kontrollerin-onemi',
    author: {
      name: 'Kurbanoğlu Mühendislik',
      role: 'Teknik Ekip',
      avatar: '/images/logo.svg'
    },
    readTime: '9 dk okuma',
    tags: ['Periyodik Kontrol', 'İş Güvenliği', 'Yasal Zorunluluk', 'Elektrik Tesisatı']
  },
  {
    id: 5,
    title: 'Trafo Bakımında Dikkat Edilmesi Gerekenler',
    excerpt: 'Trafo sistemlerinin uzun ömürlü ve verimli çalışması için düzenli bakım prosedürlerinin uygulanması şarttır.',
    content: `
## Trafo Bakımının Önemi

Transformatörler, elektrik dağıtım sistemlerinin en kritik bileşenlerinden biridir. Düzgün bakım yapılmadığında ciddi arızalara, üretim kayıplarına ve güvenlik risklerine neden olabilir.

## Trafo Türleri ve Özellikleri

### Yağlı Trafolar
- Büyük güç kapasiteleri
- İyi soğutma özellikleri
- Düzenli yağ bakımı gerektirir

### Kuru Tip Trafolar
- Yangın riski düşük
- Kapalı alanlarda kullanıma uygun
- Daha az bakım gereksinimi

## Periyodik Bakım İşlemleri

### Günlük Kontroller
- Ses ve titreşim takibi
- Sıcaklık göstergelerinin okunması
- Yağ seviye kontrolü (yağlı trafolarda)

### Aylık Kontroller
- Bağlantı sıkılıklarının kontrolü
- Havalandırma sistemlerinin temizliği
- Koruma rölelerinin fonksiyon testi

### Yıllık Bakım
- Kapsamlı görsel muayene
- Yağ analizi (yağlı trafolarda)
- İzolasyon direnci ölçümü
- Sargı direnci ölçümü

## Yağ Bakımı (Yağlı Trafolar)

### Yağ Analizi Parametreleri
| Parametre | Kabul Edilebilir Değer |
|-----------|------------------------|
| Kırılma Gerilimi | >30 kV/2.5mm |
| Nem İçeriği | <30 ppm |
| Asit Sayısı | <0.2 mg KOH/g |
| Renk | 0-3 (yeni: 0-1) |

### Yağ Filtrasyon
- Nem ve partiküllerin uzaklaştırılması
- Yağ ömrünün uzatılması
- Izolasyon performansının korunması

### Çözünmüş Gaz Analizi (DGA)
- Erken arıza tespiti
- Hata türü belirleme
- Bakım planlaması için kritik veri

## Termal İzleme

### Sıcaklık Kontrolü
- Sargı sıcaklığı
- Yağ üst sıcaklığı
- Ortam sıcaklığı

### Termal Görüntüleme
- Bağlantı noktalarında ısınma tespiti
- Yük dengesizliklerinin belirlenmesi
- Soğutma sistemi verimliliği

## Elektriksel Testler

### İzolasyon Testleri
1. **İzolasyon Direnci**: Megger testi
2. **Polarizasyon İndeksi**: Izolasyon durumu
3. **Dielektrik Absorpsiyon**: Nem göstergesi

### Sargı Testleri
- Sargı direnci ölçümü
- Dönüştürme oranı testi
- Kısa devre empedansı

### Koruma Testleri
- Buchholz rölesi testi
- Aşırı akım koruma
- Topraklama koruma

## Koruyucu Bakım Stratejileri

### Zaman Bazlı Bakım
- Sabit periyotlarla bakım
- Tüm trafolara eşit yaklaşım
- Basit planlama

### Durum Bazlı Bakım
- Gerçek duruma göre bakım
- Kaynakların verimli kullanımı
- İleri izleme sistemleri gerektirir

### Tahmine Dayalı Bakım
- Veri analizi ve yapay zeka
- Arıza tahmini
- Optimize edilmiş bakım zamanlaması

## Acil Durum Prosedürleri

### Buchholz Rölesi Alarmı
1. Trafoya yük verilmemesi
2. Gaz analizi yapılması
3. Uzman değerlendirmesi

### Aşırı Sıcaklık
1. Yükün azaltılması
2. Soğutma sisteminin kontrolü
3. Gerekirse trafonun devre dışı bırakılması

### Yağ Kaçağı
1. Kaçak noktasının tespiti
2. Yağ seviyesinin izlenmesi
3. Acil onarım planlaması

## Bakım Kayıtları

### Tutulması Gereken Kayıtlar
- Tüm bakım işlemleri
- Test sonuçları ve trendler
- Arıza ve onarım geçmişi
- Yedek parça değişimleri

### Kayıtların Önemi
- Trend analizi
- Yaşlandırma takibi
- Bakım optimizasyonu
- Yasal uyumluluk

## Sonuç

Düzenli ve sistematik trafo bakımı, güvenilir elektrik tedariği ve uzun ekipman ömrü için vazgeçilmezdir. Profesyonel bakım hizmetleri, maliyetli arızaları önler ve tesis güvenliğini sağlar.

**Trafo bakım ve test hizmetlerimiz için bizimle iletişime geçin.**
    `,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    date: '5 Ocak 2026',
    category: 'Endüstriyel Elektrik',
    categoryId: 'endustriyel',
    slug: 'trafo-bakiminda-dikkat-edilmesi-gerekenler',
    author: {
      name: 'Kurbanoğlu Mühendislik',
      role: 'Teknik Ekip',
      avatar: '/images/logo.svg'
    },
    readTime: '10 dk okuma',
    tags: ['Trafo', 'Bakım', 'Endüstriyel Elektrik', 'Yağ Analizi']
  },
  {
    id: 6,
    title: 'Yenilenebilir Enerji Entegrasyonu: Adım Adım Rehber',
    excerpt: 'Endüstriyel tesislerde güneş ve rüzgar enerjisi entegrasyonu için kapsamlı bir yol haritası.',
    content: `
## Yenilenebilir Enerji ve Endüstri

Yenilenebilir enerji kaynakları, endüstriyel tesislerin enerji maliyetlerini düşürmesi ve karbon ayak izini azaltması için önemli fırsatlar sunuyor. Bu rehberde, başarılı bir entegrasyon için izlenmesi gereken adımları ele alıyoruz.

## Neden Yenilenebilir Enerji?

### Ekonomik Faydalar
- Enerji maliyetlerinde %30-50 tasarruf
- 5-7 yıl arasında yatırım geri dönüşü
- Enerji fiyat dalgalanmalarından korunma

### Çevresel Faydalar
- Karbon emisyonlarının azaltılması
- Sürdürülebilirlik hedeflerine katkı
- Yeşil sertifikasyon imkanı

### Kurumsal Faydalar
- Marka değerinin artması
- Müşteri beklentilerinin karşılanması
- Rekabet avantajı

## Adım 1: Fizibilite Çalışması

### Enerji Analizi
- Mevcut tüketim profili
- Yük dağılımı analizi
- Pik talep süreleri

### Lokasyon Değerlendirmesi
- Güneş ışınımı potansiyeli
- Rüzgar hızı verileri
- Alan uygunluğu

### Ekonomik Analiz
- Yatırım maliyeti hesabı
- Geri ödeme süresi
- Net bugünkü değer (NPV)

## Adım 2: Sistem Tasarımı

### Güneş Enerjisi Sistemi

#### Panel Seçimi
- Monokristal: Yüksek verimlilik (%20-22)
- Polikristal: Ekonomik seçenek (%17-19)
- İnce film: Düşük ışıkta performans

#### İnvertör Seçimi
- String invertör: Küçük-orta sistemler
- Merkezi invertör: Büyük sistemler
- Mikro invertör: Gölgeleme olan alanlar

### Rüzgar Enerjisi Sistemi
- Küçük ölçekli türbinler: 1-100 kW
- Orta ölçekli türbinler: 100-500 kW
- Hibrit sistemler: Güneş + Rüzgar

## Adım 3: Şebeke Entegrasyonu

### Bağlantı Tipleri
1. **On-Grid**: Şebekeye bağlı
   - Fazla enerji satışı
   - Şebeke yedeklemesi
   
2. **Off-Grid**: Şebekeden bağımsız
   - Batarya depolama gerekli
   - Tam enerji bağımsızlığı
   
3. **Hibrit**: Her iki sistemin avantajları
   - Kesintisiz enerji
   - Optimize edilmiş maliyet

### Teknik Gereksinimler
- Şebeke bağlantı sözleşmesi
- Koruma koordinasyonu
- Güç kalitesi standartları

## Adım 4: Enerji Depolama

### Batarya Teknolojileri
| Teknoloji | Ömür | Verimlilik | Maliyet |
|-----------|------|------------|---------|
| Lityum-iyon | 10-15 yıl | %90-95 | Yüksek |
| Kurşun-asit | 5-8 yıl | %80-85 | Düşük |
| Flow batarya | 15-20 yıl | %75-80 | Orta |

### Depolama Stratejileri
- Pik talep yönetimi
- Enerji arbitrajı
- Yedek güç kaynağı

## Adım 5: İzleme ve Optimizasyon

### SCADA Entegrasyonu
- Gerçek zamanlı izleme
- Performans analizi
- Arıza tespiti

### Yapay Zeka Uygulamaları
- Üretim tahmini
- Tüketim optimizasyonu
- Tahmine dayalı bakım

## Teşvikler ve Destekler

### Devlet Teşvikleri
- YEKDEM: Yenilenebilir enerji alım garantisi
- KOSGEB destekleri
- Vergi indirimleri

### Finansman Seçenekleri
- Banka kredileri
- Leasing modelleri
- ESCO (Enerji Hizmet Şirketleri)

## Yaygın Hatalar ve Çözümleri

### Hata 1: Yetersiz Fizibilite
**Çözüm**: Kapsamlı analiz ve profesyonel destek

### Hata 2: Düşük Kaliteli Ekipman
**Çözüm**: Sertifikalı ve garantili ürünler

### Hata 3: Yetersiz Bakım Planı
**Çözüm**: Düzenli bakım ve izleme

## Başarı Hikayeleri

### Örnek Proje: Tekstil Fabrikası
- 500 kWp güneş enerjisi sistemi
- Yıllık 750.000 kWh üretim
- %45 enerji maliyeti tasarrufu
- 4.5 yıl geri ödeme süresi

## Sonuç

Yenilenebilir enerji entegrasyonu, doğru planlama ve profesyonel uygulama ile hem ekonomik hem de çevresel faydalar sağlar. Her tesis için özelleştirilmiş çözümler, maksimum verimlilik ve getiri sağlar.

**Yenilenebilir enerji projeleriniz için uzman ekibimizle iletişime geçin.**
    `,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
    date: '3 Ocak 2026',
    category: 'Enerji Verimliliği',
    categoryId: 'enerji',
    slug: 'yenilenebilir-enerji-entegrasyonu-rehber',
    author: {
      name: 'Kurbanoğlu Mühendislik',
      role: 'Teknik Ekip',
      avatar: '/images/logo.svg'
    },
    readTime: '12 dk okuma',
    tags: ['Yenilenebilir Enerji', 'Güneş Enerjisi', 'Rüzgar Enerjisi', 'Enerji Depolama']
  },
  {
    id: 7,
    title: 'SCADA Sistemleri: Endüstri 4.0 Uygulamaları',
    excerpt: 'Modern SCADA sistemleri ve Endüstri 4.0 ile entegrasyonunun sağladığı avantajlar.',
    content: `
## SCADA Nedir?

SCADA (Supervisory Control and Data Acquisition - Denetleyici Kontrol ve Veri Toplama), endüstriyel süreçlerin uzaktan izlenmesi ve kontrolü için kullanılan bir sistemdir.

## SCADA'nın Temel Bileşenleri

### 1. RTU (Remote Terminal Unit)
- Saha verilerinin toplanması
- Yerel kontrol işlevleri
- Haberleşme gateway

### 2. PLC (Programmable Logic Controller)
- Proses kontrolü
- Mantıksal operasyonlar
- Hızlı tepki süreleri

### 3. HMI (Human Machine Interface)
- Operatör arayüzü
- Görselleştirme
- Alarm yönetimi

### 4. Haberleşme Altyapısı
- Ethernet/IP
- Modbus
- Profibus/Profinet

## Endüstri 4.0 ve SCADA

### Dijital Dönüşüm
Endüstri 4.0, üretim süreçlerinin dijitalleşmesini ve akıllı fabrika konseptini temsil eder. SCADA sistemleri bu dönüşümün temel altyapısını oluşturur.

### Entegrasyon Alanları
1. **IoT Sensörleri**: Daha fazla veri noktası
2. **Bulut Bilişim**: Merkezi veri yönetimi
3. **Yapay Zeka**: Akıllı karar destek
4. **Büyük Veri Analizi**: Trend ve optimizasyon

## Modern SCADA Özellikleri

### Web Tabanlı Erişim
- Her yerden erişim
- Platform bağımsızlık
- Düşük bakım maliyeti

### Mobil Uygulamalar
- Anlık bildirimler
- Uzaktan izleme
- Hızlı müdahale

### Siber Güvenlik
- Şifreli haberleşme
- Erişim kontrolü
- Güvenlik denetimi

## SCADA Uygulama Alanları

### Enerji Sektörü
- Elektrik dağıtım şebekeleri
- Yenilenebilir enerji santralleri
- Trafo merkezleri

### Su ve Atık Su
- Pompa istasyonları
- Arıtma tesisleri
- Dağıtım şebekeleri

### Üretim
- Proses kontrolü
- Üretim takibi
- Kalite yönetimi

## SCADA ve Yapay Zeka

### Tahmine Dayalı Bakım
- Arıza önceden tespiti
- Bakım planlaması
- Duruş süresinin azaltılması

### Proses Optimizasyonu
- Enerji verimliliği
- Üretim kalitesi
- Hammadde optimizasyonu

### Anomali Tespiti
- Normal dışı davranış algılama
- Erken uyarı sistemleri
- Otomatik tepki

## SCADA Projesinde Dikkat Edilecekler

### Planlama Aşaması
1. Gereksinim analizi
2. Sistem mimarisi tasarımı
3. Teknoloji seçimi

### Uygulama Aşaması
1. Donanım kurulumu
2. Yazılım konfigürasyonu
3. Haberleşme testi

### Devreye Alma
1. Fonksiyonel testler
2. Entegrasyon testleri
3. Operatör eğitimi

## SCADA Güvenliği

### Katmanlı Güvenlik
| Katman | Önlem |
|--------|-------|
| Fiziksel | Erişim kontrolü, kilitli kabinler |
| Ağ | Firewall, VLAN, VPN |
| Uygulama | Kimlik doğrulama, yetkilendirme |
| Veri | Şifreleme, yedekleme |

### Güvenlik Standartları
- IEC 62443
- NIST Cybersecurity Framework
- ISO 27001

## Gelecek Trendleri

### Edge Computing
- Yerel veri işleme
- Düşük gecikme
- Bant genişliği optimizasyonu

### Dijital İkiz
- Sanal simülasyon
- Senaryo analizi
- Optimizasyon

### 5G Entegrasyonu
- Yüksek hız
- Düşük gecikme
- Yoğun cihaz desteği

## Başarılı SCADA Projesi İçin İpuçları

1. **Net Hedefler Belirleyin**: Ölçülebilir KPI'lar
2. **Doğru Partner Seçin**: Deneyimli entegratör
3. **Ölçeklenebilir Tasarım**: Gelecek ihtiyaçları düşünün
4. **Eğitime Yatırım Yapın**: Operatör yetkinliği kritik
5. **Sürekli İyileştirme**: Düzenli gözden geçirme

## Sonuç

SCADA sistemleri, Endüstri 4.0 çağında rekabet avantajı sağlamanın anahtarıdır. Doğru tasarlanmış ve uygulanan bir SCADA sistemi, operasyonel mükemmellik ve sürekli iyileştirme için temel oluşturur.

**SCADA ve otomasyon projeleriniz için bizimle iletişime geçin.**
    `,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
    date: '1 Ocak 2026',
    category: 'Teknoloji',
    categoryId: 'teknoloji',
    slug: 'scada-sistemleri-endustri-4-uygulamalari',
    author: {
      name: 'Kurbanoğlu Mühendislik',
      role: 'Teknik Ekip',
      avatar: '/images/logo.svg'
    },
    readTime: '11 dk okuma',
    tags: ['SCADA', 'Endüstri 4.0', 'Otomasyon', 'IoT']
  }
]

// Composable function
export const useBlog = () => {
  const getPostBySlug = (slug: string): BlogPost | undefined => {
    return blogPosts.find(post => post.slug === slug)
  }

  const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
    const currentPost = getPostBySlug(currentSlug)
    if (!currentPost) return []

    return blogPosts
      .filter(post => post.slug !== currentSlug && post.categoryId === currentPost.categoryId)
      .slice(0, limit)
  }

  const getPostsByCategory = (categoryId: string): BlogPost[] => {
    if (categoryId === 'all') return blogPosts.filter(post => post.id !== featuredPost.id)
    return blogPosts.filter(post => post.categoryId === categoryId && post.id !== featuredPost.id)
  }

  return {
    blogPosts,
    featuredPost,
    blogCategories,
    getPostBySlug,
    getRelatedPosts,
    getPostsByCategory
  }
}
