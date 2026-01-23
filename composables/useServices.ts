// Service interface
export interface Service {
  id: number
  title: string
  description: string
  fullDescription?: string
  image: string
  slug: string
  category: string
  features?: string[]
  benefits?: string[]
  applications?: string[]
  content?: string
}

// Service categories
export const serviceCategories = [
  { id: 'endustriyel', label: 'Endüstriyel Elektrik' },
  { id: 'periyodik', label: 'Periyodik Kontroller' },
  { id: 'projelendirme', label: 'Projelendirme' }
]

// All services
export const services: Service[] = [
  // Endüstriyel Elektrik
  {
    id: 1,
    title: 'Yüksek Gerilim & Trafo Hizmetleri',
    description: 'Firmamız, enerji iletim ve dağıtım sistemlerinde güvenli, sürdürülebilir ve yüksek verimli çözümler sunmak amacıyla yüksek gerilim ve trafo hizmetleri alanında uçtan uca mühendislik hizmetleri sağlamaktadır. Tüm çalışmalarımız ulusal ve uluslararası standartlara uygun olarak gerçekleştirilmektedir...',
    fullDescription: 'Firmamız, enerji iletim ve dağıtım sistemlerinde güvenli, sürdürülebilir ve yüksek verimli çözümler sunmak amacıyla yüksek gerilim ve trafo hizmetleri alanında uçtan uca mühendislik hizmetleri sağlamaktadır. Tüm çalışmalarımız; TEDAŞ Teknik Şartnameleri, IEC, TS EN ve ilgili Elektrik Kuvvetli Akım Tesisleri Yönetmeliği başta olmak üzere yürürlükteki ulusal ve uluslararası standartlara uygun olarak gerçekleştirilmektedir. Hizmet kapsamımızda; trafo merkezi tasarımı ve projelendirilmesi, YG/AG trafo montajı ve devreye alma işlemleri, yüksek gerilim kablolama ve saha uygulamaları, YG hücreler, kesiciler, ayırıcılar ve koruma ekipmanlarının kurulumu, topraklama ve yıldırımdan korunma sistemlerinin tasarımı ve ölçümleri, röle koordinasyonu, kısa devre ve yük hesapları, trafo ve yüksek gerilim sistemleri için teknik müşavirlik ve kontrollük hizmetleri profesyonel mühendis kadromuz tarafından titizlikle yürütülmektedir. Yüksek gerilim kablolama ve bağlantı çalışmalarında; kablo güzergâh planlaması, minimum kayıp prensibi, mekanik ve termik zorlanmalar, izolasyon seviyeleri ve işletme sürekliliği esas alınmaktadır. Trafo seçiminde ise güç ihtiyacı, kısa devre dayanımı, verim sınıfı ve işletme koşulları dikkate alınarak optimum ve uzun ömürlü çözümler sunulmaktadır. Ayrıca, trafo merkezleri ve yüksek gerilim tesisleri için geçici ve kesin kabul süreçlerine teknik destek, test ve ölçüm organizasyonları, işletme öncesi risk analizleri ve saha denetimleri de hizmetlerimiz arasında yer almaktadır. Amaç; tesislerin maksimum güvenlik, yüksek işletme sürekliliği ve minimum arıza riski ile devreye alınmasını sağlamaktır. Firmamız, yüksek gerilim ve trafo projelerinde yalnızca bugünün ihtiyaçlarını değil, gelecekteki yük artışlarını ve işletme gereksinimlerini de göz önünde bulundurarak mühendislik odaklı, standartlara tam uyumlu ve güvenilir çözümler üretmektedir.',
    image: '/images/endüstriyel-elektrik/yg-trafo-hizmetleri.jpeg',
    slug: 'yuksek-gerilim-trafo',
    category: 'endustriyel',
    features: [
      'Trafo merkezi tasarımı ve projelendirilmesi',
      'YG/AG trafo montajı ve devreye alma işlemleri',
      'Yüksek gerilim kablolama ve saha uygulamaları',
      'YG hücreler, kesiciler, ayırıcılar ve koruma ekipmanlarının kurulumu',
      'Topraklama ve yıldırımdan korunma sistemlerinin tasarımı ve ölçümleri',
      'Röle koordinasyonu, kısa devre ve yük hesapları',
      'Trafo ve yüksek gerilim sistemleri için teknik müşavirlik ve kontrollük hizmetleri'
    ],
    benefits: [
      'Enerji iletim ve dağıtımında güvenlik ve süreklilik',
      'Ulusal ve uluslararası standartlara tam uyum',
      'Yüksek verimli ve uzun ömürlü trafo sistemleri',
      'Maliyet etkin çözümler ve operasyonel optimizasyon'
    ],
    applications: [
      'Endüstriyel Tesisler',
      'Enerji Santralleri',
      'Büyük Ticari Binalar',
      'Altyapı Projeleri'
    ],
    content: `Firmamız, enerji iletim ve dağıtım sistemlerinde güvenli, sürdürülebilir ve yüksek verimli çözümler sunmak amacıyla Yüksek Gerilim İşletme Sorumluluğu & Müşavirlik Hizmetleri başta olmak üzere yüksek gerilim ve trafo tesislerine yönelik uçtan uca mühendislik hizmetleri sağlamaktadır. Tüm faaliyetlerimiz; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, TEDAŞ Teknik Şartnameleri, IEC, TS EN ve ilgili ulusal ve uluslararası standartlara tam uyumlu olarak yürütülmektedir.

Yüksek Gerilim İşletme Sorumluluğu & Müşavirlik Hizmetleri kapsamında; bölgemizde bulunan yüksek gerilim tesislerinin işletme sorumluluğu, trafo sorumluluğu ve yasal yükümlülükleri uzman mühendis kadromuz tarafından titizlikle takip edilmektedir. Aylık periyodik kontroller, test, ölçüm ve raporlama çalışmaları düzenli olarak gerçekleştirilmekte; olası riskler önceden tespit edilerek işletme sürekliliği ve tesis güvenliği sağlanmaktadır. Arıza ve acil durumlarda hızlı ve etkin müdahale ile yüksek gerilim tesislerinin güvenli işletilmesi temin edilmektedir.

Firmamızın sunduğu Yüksek Gerilim İşletme Sorumluluğu & Müşavirlik Hizmetleri, yalnızca işletme aşamasıyla sınırlı olmayıp, yüksek gerilim tesislerinin tasarım, kurulum ve devreye alma süreçlerini de kapsamaktadır. Bu doğrultuda hizmet kapsamımızda;

Trafo merkezi tasarımı ve projelendirilmesi

YG/AG trafo montajı ve devreye alma işlemleri

Yüksek gerilim kablolama ve saha uygulamaları

YG hücreler, kesiciler, ayırıcılar ve koruma ekipmanlarının kurulumu

Topraklama ve yıldırımdan korunma sistemlerinin tasarımı ve ölçümleri

Röle koordinasyonu, kısa devre ve yük hesapları

Trafo ve yüksek gerilim sistemleri için teknik müşavirlik ve kontrollük hizmetleri

profesyonel mühendis kadromuz tarafından mevzuata ve mühendislik esaslarına uygun şekilde yürütülmektedir.

Yüksek gerilim kablolama ve bağlantı çalışmalarında; kablo güzergâh planlaması, minimum kayıp prensibi, mekanik ve termik zorlanmalar, izolasyon seviyeleri ve işletme sürekliliği öncelikli kriterler olarak ele alınmaktadır. Trafo seçiminde ise güç ihtiyacı, kısa devre dayanımı, verim sınıfı ve işletme koşulları dikkate alınarak uzun ömürlü ve güvenilir çözümler sunulmaktadır.

Ayrıca, Yüksek Gerilim İşletme Sorumluluğu & Müşavirlik Hizmetleri kapsamında trafo merkezleri ve yüksek gerilim tesisleri için geçici ve kesin kabul süreçlerine teknik destek verilmekte; test ve ölçüm organizasyonları, işletme öncesi risk analizleri ve saha denetimleri gerçekleştirilmektedir. Bu sayede tesislerin maksimum güvenlik, yüksek işletme sürekliliği ve minimum arıza riski ile devreye alınması sağlanmaktadır.

Firmamız, Yüksek Gerilim İşletme Sorumluluğu & Müşavirlik Hizmetleri alanında yalnızca bugünün ihtiyaçlarını değil, gelecekteki yük artışlarını ve işletme gereksinimlerini de göz önünde bulundurarak; mühendislik odaklı, sürdürülebilir, standartlara tam uyumlu ve güvenilir çözümler üretmeyi ilke edinmiştir.`
  },
  {
    id: 2,
    title: 'Pano Tasarımı ve İmalatı',
    description: 'Firmamız, endüstriyel tesisler ve enerji altyapıları için alçak gerilim pano tasarımı ve imalatı alanında, mühendislik hesaplarına dayalı, güvenli ve uzun ömürlü çözümler sunmaktadır. Tüm pano tasarım ve üretim süreçleri ulusal ve uluslararası standartlara uygun olarak yürütülmektedir...',
    fullDescription: 'Firmamız, endüstriyel tesisler ve enerji altyapıları için alçak gerilim pano tasarımı ve imalatı alanında, mühendislik hesaplarına dayalı, güvenli ve uzun ömürlü çözümler sunmaktadır. Tüm pano tasarım ve üretim süreçleri; TS EN 61439, IEC 61439, IEC 60947, Elektrik İç Tesisleri Yönetmeliği ve ilgili ulusal/uluslararası standartlara uygun olarak yürütülmektedir. Mühendislik tabanlı pano tasarımı, ekipman seçimi ve yerleşim, pano imalatı ve montaj, test, kontrol ve devreye alma hizmetleri sunuyoruz. Her pano projesi için eksiksiz teknik dokümantasyon sağlanmakta ve pano mühendisliği müşavirlik hizmetleri sunulmaktadır.',
    image: '/images/endüstriyel-elektrik/ag-pano-tasarimi.jpeg',
    slug: 'pano-tasarimi-imalati',
    category: 'endustriyel',
    features: [
      'Alçak ve orta gerilim pano tasarımı',
      'Özel pano imalatı',
      'Kompanzasyon panoları',
      'Dağıtım panoları',
      'Kontrol panoları'
    ],
    benefits: [
      'Standartlara uygun tasarım',
      'Yüksek kalite malzeme',
      'Güvenli ve dayanıklı yapı',
      'Kolay bakım ve erişim'
    ],
    applications: [
      'Endüstriyel tesisler',
      'Ticari binalar',
      'Konut projeleri',
      'Altyapı projeleri'
    ],
    content: `Firmamız, endüstriyel tesisler ve enerji altyapıları için alçak gerilim pano tasarımı ve imalatı alanında, mühendislik hesaplarına dayalı, güvenli ve uzun ömürlü çözümler sunmaktadır. Tüm pano tasarım ve üretim süreçleri; TS EN 61439, IEC 61439, IEC 60947, Elektrik İç Tesisleri Yönetmeliği ve ilgili ulusal/uluslararası standartlara uygun olarak yürütülmektedir.

Mühendislik Tabanlı Pano Tasarımı

Pano tasarım sürecinde;

Yük analizleri ve güç dağılım senaryoları,

Kısa devre akımı ve termik dayanım hesapları,

Gerilim düşümü, selektivite ve koruma koordinasyonu,

Süreklilik ve işletme güvenliği kriterleri
esas alınarak projeye özel pano mimarisi oluşturulmaktadır. Ana dağıtım panoları (MDP), tali dağıtım panoları (SDP), MCC panoları, kompanzasyon panoları ve otomasyon panoları; sistem ihtiyaçlarına göre detaylı olarak projelendirilmektedir.

Ekipman Seçimi ve Yerleşim

Pano içerisinde kullanılacak şalt ve koruma ekipmanları; anma akımı, kesme kapasitesi, kullanım kategorisi ve çevresel koşullar dikkate alınarak seçilmektedir. Bara kesitleri ve bağlantı noktaları; kısa devre ve sıcaklık artışı limitleri gözetilerek hesaplanmakta, pano içi yerleşim ise ısı dağılımı, bakım erişilebilirliği ve genişleme ihtiyacı göz önünde bulundurularak tasarlanmaktadır.

Pano İmalatı ve Montaj

Pano imalatında;

Standartlara uygun sac kalınlıkları ve koruma sınıfları (IP, IK),

Bara ve kablo bağlantılarında mekanik ve elektriksel süreklilik,

Etiketleme, numaralandırma ve dokümantasyon düzeni
titizlikle uygulanmaktadır. Tüm bağlantılar tork kontrollü olarak yapılmakta, pano içi kablolama düzenli ve izlenebilir olacak şekilde gerçekleştirilmektedir.

Test, Kontrol ve Devreye Alma

İmalat tamamlandıktan sonra;

Görsel ve mekanik kontroller,

İzolasyon ve süreklilik testleri,

Fonksiyon testleri ve koruma ekipmanlarının doğrulanması
gerçekleştirilerek panolar devreye hazır hale getirilmektedir. İstenmesi halinde saha montajı, devreye alma ve sistem entegrasyonu da mühendislerimiz tarafından yürütülmektedir.

Teknik Dokümantasyon ve Müşavirlik

Her pano projesi için; tek hat şemaları, yerleşim planları, kablo listeleri ve test raporlarını içeren eksiksiz teknik dokümantasyon sağlanmaktadır. Ayrıca, proje inceleme, revizyon ve saha kontrollüğü kapsamında pano mühendisliği müşavirlik hizmetleri sunulmaktadır.

Firmamız, pano tasarımı ve imalatında; yalnızca standartlara uygunluğu değil, aynı zamanda işletme sürekliliğini, bakım kolaylığını ve sistem güvenliğini ön planda tutarak mühendislik odaklı çözümler üretmektedir.`
  },
  {
    id: 3,
    title: 'Kompanzasyon Sistemleri',
    description: 'Firmamız, enerji kalitesini artırmak ve reaktif güç kaynaklı kayıpları minimize etmek amacıyla kompanzasyon sistemleri için mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar ilgili standartlara uygun olarak yürütülmektedir...',
    fullDescription: 'Firmamız, enerji kalitesini artırmak ve reaktif güç kaynaklı kayıpları minimize etmek amacıyla kompanzasyon sistemleri için mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar; Elektrik İç Tesisleri Yönetmeliği, EPDK mevzuatı, IEC 60831, IEC 61921 ve ilgili standartlara uygun olarak yürütülmektedir. Kompanzasyon sistemleri; tesisin yük profili ve işletme karakteristiğine bağlı olarak sabit, otomatik, harmonik filtreli (detuned) veya dinamik kompanzasyon (SVC / SVG) çözümleri şeklinde projelendirilmektedir. Harmonikli yüklerin bulunduğu tesislerde; rezonans riskleri ve THD değerleri analiz edilerek uygun reaktör oranlı filtre sistemleri tasarlanmaktadır. Ani ve hızlı yük değişimlerinin söz konusu olduğu uygulamalarda ise SVC / SVG tabanlı sistemler tercih edilerek, reaktif gücün milisaniyeler mertebesinde regülasyonu sağlanmakta ve güç katsayısı kararlı şekilde kontrol altında tutulmaktadır. Kompanzasyon panoları TS EN 61439 standardına uygun olarak imal edilmekte, devreye alma sürecinde cosφ ayarları ve sistem performans testleri gerçekleştirilerek tesisin optimum ve güvenli işletimi sağlanmaktadır.',
    image: '/images/endüstriyel-elektrik/reaktif-guc-kompanzasyon.jpeg',
    slug: 'kompanzasyon-sistemleri',
    category: 'endustriyel',
    features: [
      'Reaktif güç analizi',
      'Otomatik kompanzasyon sistemleri',
      'Harmonik filtreli kompanzasyon',
      'Dinamik kompanzasyon',
      'Kontrol ve izleme sistemleri'
    ],
    benefits: [
      'Enerji maliyetlerinde %15-30 tasarruf',
      'Reaktif enerji cezalarından kurtulma',
      'Trafo kapasitesinin verimli kullanımı',
      'Güç kalitesi iyileştirmesi'
    ],
    applications: [
      'Endüstriyel tesisler',
      'Ticari binalar',
      'Alışveriş merkezleri',
      'Hastaneler'
    ],
    content: `Firmamız, enerji kalitesini artırmak ve reaktif güç kaynaklı kayıpları minimize etmek amacıyla kompanzasyon sistemleri için mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar; Elektrik İç Tesisleri Yönetmeliği, EPDK mevzuatı, IEC 60831, IEC 61921 ve ilgili standartlara uygun olarak yürütülmektedir.

Kompanzasyon sistemleri; tesisin yük profili ve işletme karakteristiğine bağlı olarak sabit, otomatik, harmonik filtreli (detuned) veya dinamik kompanzasyon (SVC / SVG) çözümleri şeklinde projelendirilmektedir. Harmonikli yüklerin bulunduğu tesislerde; rezonans riskleri ve THD değerleri analiz edilerek uygun reaktör oranlı filtre sistemleri tasarlanmaktadır.

Ani ve hızlı yük değişimlerinin söz konusu olduğu uygulamalarda ise SVC / SVG tabanlı sistemler tercih edilerek, reaktif gücün milisaniyeler mertebesinde regülasyonu sağlanmakta ve güç katsayısı kararlı şekilde kontrol altında tutulmaktadır.

Kompanzasyon panoları TS EN 61439 standardına uygun olarak imal edilmekte, devreye alma sürecinde cosφ ayarları ve sistem performans testleri gerçekleştirilerek tesisin optimum ve güvenli işletimi sağlanmaktadır.`
  },
  {
    id: 4,
    title: 'Aydınlatma Sistemleri',
    description: 'Firmamız, endüstriyel ve özel amaçlı tesisler için aydınlatma sistemlerinin projelendirilmesi, uygulaması ve devreye alınması konularında mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar ilgili standartlara uygun olarak gerçekleştirilmektedir...',
    fullDescription: 'Firmamız, endüstriyel ve özel amaçlı tesisler için aydınlatma sistemlerinin projelendirilmesi, uygulaması ve devreye alınması konularında mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar; TS EN 12464-1 / 12464-2, IEC 60598, Elektrik İç Tesisleri Yönetmeliği ve ilgili standartlara uygun olarak gerçekleştirilmektedir. Aydınlatma tasarımında; endüstriyel üretim alanları, depo ve saha uygulamaları için gerekli aydınlık düzeyleri (lux), kamaşma sınırları (UGR) ve renk geri verim indeksi (CRI) hesaplanarak LED tabanlı, yüksek verimli armatürler seçilmektedir. Patlayıcı ortamlar için Ex-proof / ATEX sertifikalı aydınlatma sistemleri, risk analizlerine uygun şekilde projelendirilmektedir. Acil aydınlatma ve yönlendirme sistemleri, ilgili yönetmelikler doğrultusunda kaçış yollarını kapsayacak şekilde tasarlanmakta ve test edilmektedir. Ayrıca, DALI, KNX ve otomasyon entegrasyonlu aydınlatma çözümleri ile enerji tüketimi optimize edilmekte ve işletme sürekliliği artırılmaktadır. Amaç; görsel konforu, enerji verimliliğini ve iş güvenliğini birlikte sağlayan, sürdürülebilir aydınlatma altyapıları oluşturmaktır.',
    image: '/images/endüstriyel-elektrik/led-aydinlatma-sistemleri.jpeg',
    slug: 'aydinlatma-sistemleri',
    category: 'endustriyel',
    features: [
      'LED aydınlatma sistemleri',
      'Akıllı aydınlatma kontrolü',
      'Endüstriyel aydınlatma',
      'Dış mekân aydınlatması',
      'Acil durum aydınlatması'
    ],
    benefits: [
      '%70\'e kadar enerji tasarrufu',
      'Uzun ömür ve düşük bakım',
      'Yüksek görüş kalitesi',
      'Çevre dostu çözümler'
    ],
    applications: [
      'Endüstriyel tesisler',
      'Ofis binaları',
      'Park ve bahçeler',
      'Spor tesisleri',
      'Yol aydınlatması'
    ],
    content: `Firmamız, endüstriyel ve özel amaçlı tesisler için aydınlatma sistemlerinin projelendirilmesi, uygulaması ve devreye alınması konularında mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar; TS EN 12464-1 / 12464-2, IEC 60598, Elektrik İç Tesisleri Yönetmeliği ve ilgili standartlara uygun olarak gerçekleştirilmektedir.

Aydınlatma tasarımında; endüstriyel üretim alanları, depo ve saha uygulamaları için gerekli aydınlık düzeyleri (lux), kamaşma sınırları (UGR) ve renk geri verim indeksi (CRI) hesaplanarak LED tabanlı, yüksek verimli armatürler seçilmektedir. Patlayıcı ortamlar için Ex-proof / ATEX sertifikalı aydınlatma sistemleri, risk analizlerine uygun şekilde projelendirilmektedir.

Acil aydınlatma ve yönlendirme sistemleri, ilgili yönetmelikler doğrultusunda kaçış yollarını kapsayacak şekilde tasarlanmakta ve test edilmektedir. Ayrıca, DALI, KNX ve otomasyon entegrasyonlu aydınlatma çözümleri ile enerji tüketimi optimize edilmekte ve işletme sürekliliği artırılmaktadır.

Amaç; görsel konforu, enerji verimliliğini ve iş güvenliğini birlikte sağlayan, sürdürülebilir aydınlatma altyapıları oluşturmaktır.`
  },
  {
    id: 5,
    title: 'Arıza ve Bakım',
    description: 'Firmamız, endüstriyel tesislerde enerji sürekliliğini sağlamak amacıyla elektrik sistemlerine yönelik arıza tespiti, bakım ve iyileştirme hizmetleri sunmaktadır. Tüm çalışmalar ilgili standartlara uygun olarak yürütülmektedir...',
    fullDescription: 'Firmamız, endüstriyel tesislerde enerji sürekliliğini sağlamak amacıyla elektrik sistemlerine yönelik arıza tespiti, bakım ve iyileştirme hizmetleri sunmaktadır. Tüm çalışmalar; Elektrik İç Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı ve ilgili standartlara uygun olarak, planlı ve kayıt altına alınmış süreçler ile yürütülmektedir. Arıza tespit çalışmalarında; alçak ve yüksek gerilim sistemleri, pano ve MCC yapıları, kompanzasyon ve aydınlatma altyapıları detaylı olarak analiz edilmekte, ölçüm ve test cihazları kullanılarak kök neden analizi yapılmaktadır. Plansız duruşlara sebep olan tekrarlayan arızalar için mühendislik temelli kalıcı çözümler üretilmektedir. Bakım hizmetleri kapsamında; periyodik, önleyici ve kestirimci bakım uygulamaları ile izolasyon, bağlantı, termal ve koruma elemanları kontrolleri gerçekleştirilmektedir. Gerekli durumlarda sistem revizyonları yapılarak tesisin güvenli, verimli ve sürdürülebilir şekilde işletilmesi sağlanmaktadır. Amaç; endüstriyel tesislerde üretim kayıplarını minimize eden, arıza risklerini azaltan ve ekipman ömrünü uzatan bakım stratejileri oluşturmaktır.',
    image: '/images/endüstriyel-elektrik/elektrik-ariza-bakim.jpeg',
    slug: 'ariza-bakim',
    category: 'endustriyel',
    features: [
      '7/24 acil müdahale',
      'Arıza tespiti ve analizi',
      'Önleyici bakım programları',
      'Ekipman onarımı',
      'Yedek parça temini'
    ],
    benefits: [
      'Kesintisiz operasyon',
      'Hızlı müdahale süresi',
      'Uzun ekipman ömrü',
      'Düşük bakım maliyetleri'
    ],
    applications: [
      'Tüm elektrik tesisleri',
      'Endüstriyel tesisler',
      'Ticari binalar',
      'Altyapı sistemleri'
    ],
    content: `Firmamız, endüstriyel tesislerde enerji sürekliliğini sağlamak amacıyla elektrik sistemlerine yönelik arıza tespiti, bakım ve iyileştirme hizmetleri sunmaktadır. Tüm çalışmalar; Elektrik İç Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı ve ilgili standartlara uygun olarak, planlı ve kayıt altına alınmış süreçler ile yürütülmektedir.

Arıza tespit çalışmalarında; alçak ve yüksek gerilim sistemleri, pano ve MCC yapıları, kompanzasyon ve aydınlatma altyapıları detaylı olarak analiz edilmekte, ölçüm ve test cihazları kullanılarak kök neden analizi yapılmaktadır. Plansız duruşlara sebep olan tekrarlayan arızalar için mühendislik temelli kalıcı çözümler üretilmektedir.

Bakım hizmetleri kapsamında; periyodik, önleyici ve kestirimci bakım uygulamaları ile izolasyon, bağlantı, termal ve koruma elemanları kontrolleri gerçekleştirilmektedir. Gerekli durumlarda sistem revizyonları yapılarak tesisin güvenli, verimli ve sürdürülebilir şekilde işletilmesi sağlanmaktadır.

Amaç; endüstriyel tesislerde üretim kayıplarını minimize eden, arıza risklerini azaltan ve ekipman ömrünü uzatan bakım stratejileri oluşturmaktır.`
  },
  {
    id: 6,
    title: 'Kuvvetli Akım Sistemleri',
    description: 'Firmamız, endüstriyel tesislerin enerji altyapıları için kuvvetli akım sistemlerinin projelendirilmesi, uygulaması ve devreye alınması alanında mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar ilgili standartlara uygun olarak gerçekleştirilmektedir...',
    fullDescription: 'Firmamız, endüstriyel tesislerin enerji altyapıları için kuvvetli akım sistemlerinin projelendirilmesi, uygulaması ve devreye alınması alanında mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Elektrik İç Tesisleri Yönetmeliği, TS EN ve IEC standartları doğrultusunda gerçekleştirilmektedir. Kuvvetli akım sistemleri kapsamında; ana ve tali enerji dağıtımı, alçak ve orta gerilim beslemeleri, kablolama altyapıları, pano ve şalt sistemleri mühendislik hesaplarına dayalı olarak tasarlanmaktadır. Kablo kesitleri, kısa devre dayanımı, gerilim düşümü ve selektivite kriterleri dikkate alınarak sistem güvenliği ve sürekliliği sağlanmaktadır. Saha uygulamaları ve devreye alma süreçlerinde; montaj, test ve ölçümler standartlara uygun şekilde yürütülmekte, sistemler işletmeye güvenli ve verimli olarak teslim edilmektedir. Amaç; endüstriyel tesislerde yüksek işletme sürekliliği, enerji güvenliği ve uzun ömürlü altyapılar oluşturmaktır.',
    image: '/images/endüstriyel-elektrik/endustriyel-kuvvetli-akim.jpeg',
    slug: 'kuvvetli-akim-sistemleri',
    category: 'endustriyel',
    features: [
      'Güç dağıtım sistemleri',
      'Kablo tesisatı',
      'Topraklama sistemleri',
      'Koruma sistemleri',
      'Enerji ölçüm sistemleri'
    ],
    benefits: [
      'Güvenli enerji dağıtımı',
      'Yüksek verimlilik',
      'Standartlara uygunluk',
      'Uzun ömürlü çözümler'
    ],
    applications: [
      'Endüstriyel tesisler',
      'Ticari binalar',
      'Altyapı projeleri',
      'Büyük ölçekli tesisler'
    ],
    content: `Firmamız, endüstriyel tesislerin enerji altyapıları için kuvvetli akım sistemlerinin projelendirilmesi, uygulaması ve devreye alınması alanında mühendislik temelli çözümler sunmaktadır. Tüm çalışmalar; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Elektrik İç Tesisleri Yönetmeliği, TS EN ve IEC standartları doğrultusunda gerçekleştirilmektedir.

Kuvvetli akım sistemleri kapsamında; ana ve tali enerji dağıtımı, alçak ve orta gerilim beslemeleri, kablolama altyapıları, pano ve şalt sistemleri mühendislik hesaplarına dayalı olarak tasarlanmaktadır. Kablo kesitleri, kısa devre dayanımı, gerilim düşümü ve selektivite kriterleri dikkate alınarak sistem güvenliği ve sürekliliği sağlanmaktadır.

Saha uygulamaları ve devreye alma süreçlerinde; montaj, test ve ölçümler standartlara uygun şekilde yürütülmekte, sistemler işletmeye güvenli ve verimli olarak teslim edilmektedir. Amaç; endüstriyel tesislerde yüksek işletme sürekliliği, enerji güvenliği ve uzun ömürlü altyapılar oluşturmaktır.`
  },
  // Periyodik Kontroller
  {
    id: 7,
    title: 'Topraklama Periyodik Kontrolleri',
    description: 'Firmamız, endüstriyel tesislerde can ve işletme güvenliğinin sürekliliğini sağlamak amacıyla topraklama sistemlerine yönelik periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm kontroller ilgili standartlar doğrultusunda gerçekleştirilmektedir...',
    fullDescription: 'Firmamız, endüstriyel tesislerde can ve işletme güvenliğinin sürekliliğini sağlamak amacıyla topraklama sistemlerine yönelik periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm kontroller; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Elektrik İç Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı, TS EN 50522 ve ilgili standartlar doğrultusunda gerçekleştirilmektedir. Periyodik kontroller kapsamında; tesis genel topraklama direnci, eş potansiyel baralar, pano ve makine topraklamaları düzenli olarak ölçülmekte ve değerlendirilmektedir. Ölçüm sonuçları, adım ve dokunma gerilimleri açısından analiz edilerek sistemin güvenli işletimi doğrulanmaktadır. Kontrol ve ölçüm sonuçları teknik rapor haline getirilmekte, mevzuata aykırı veya risk oluşturan durumlar için iyileştirme ve revizyon önerileri sunulmaktadır. Amaç; endüstriyel tesislerde yasal yükümlülükleri karşılayan, sürdürülebilir ve güvenli topraklama altyapıları oluşturmaktır.',
    image: '/images/periyodik-kontroller/topraklama-olcumleri.jpeg',
    slug: 'topraklama-periyodik-kontrolleri',
    category: 'periyodik',
    features: [
      'Topraklama direnci ölçümü',
      'Eşpotansiyel bağlantı kontrolü',
      'Topraklama sistem analizi',
      'Yönetmelik uygunluk raporu',
      'Öneri ve iyileştirmeler'
    ],
    benefits: [
      'Güvenli elektrik tesisatı',
      'Yasal uyumluluk',
      'Erken arıza tespiti',
      'Can ve mal güvenliği'
    ],
    applications: [
      'Tüm elektrik tesisleri',
      'Endüstriyel tesisler',
      'Ticari binalar',
      'Konut projeleri'
    ],
    content: `Firmamız, endüstriyel tesislerde can ve işletme güvenliğinin sürekliliğini sağlamak amacıyla topraklama sistemlerine yönelik periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm kontroller; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Elektrik İç Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı, TS EN 50522 ve ilgili standartlar doğrultusunda gerçekleştirilmektedir.

Periyodik kontroller kapsamında; tesis genel topraklama direnci, eş potansiyel baralar, pano ve makine topraklamaları düzenli olarak ölçülmekte ve değerlendirilmektedir. Ölçüm sonuçları, adım ve dokunma gerilimleri açısından analiz edilerek sistemin güvenli işletimi doğrulanmaktadır.

Kontrol ve ölçüm sonuçları teknik rapor haline getirilmekte, mevzuata aykırı veya risk oluşturan durumlar için iyileştirme ve revizyon önerileri sunulmaktadır. Amaç; endüstriyel tesislerde yasal yükümlülükleri karşılayan, sürdürülebilir ve güvenli topraklama altyapıları oluşturmaktır.`
  },
  {
    id: 8,
    title: 'Yıldırımdan Korunma Sistemleri Periyodik Kontrolleri',
    description: 'Firmamız, endüstriyel tesislerde can ve mal güvenliğini sağlamak amacıyla yıldırımdan korunma sistemlerinin periyodik kontrol ve ölçüm hizmetlerini sunmaktadır. Tüm kontroller ilgili standartlar doğrultusunda gerçekleştirilmektedir...',
    fullDescription: 'Firmamız, endüstriyel tesislerde can ve mal güvenliğini sağlamak amacıyla yıldırımdan korunma sistemlerinin periyodik kontrol ve ölçüm hizmetlerini sunmaktadır. Tüm kontroller; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Elektrik İç Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı, TS EN 62305 ve ilgili standartlar doğrultusunda gerçekleştirilmektedir. Periyodik kontroller kapsamında; paratoner ve yakalama uçları, iniş iletkenleri, bağlantı noktaları ve topraklama sürekliliği detaylı olarak incelenmektedir. Ölçümler, yıldırım akımının güvenli şekilde toprağa iletilmesini sağlayacak kriterler doğrultusunda değerlendirilmekte, mekanik ve elektriksel süreklilik kontrolleri yapılmaktadır. Kontrol sonuçları teknik rapor haline getirilmekte, standartlara ve mevzuata aykırı durumlar için iyileştirme ve revizyon önerileri sunulmaktadır. Amaç; endüstriyel tesislerde yasal gereklilikleri karşılayan, güvenilir ve sürdürülebilir yıldırımdan korunma altyapıları oluşturmaktır.',
    image: '/images/periyodik-kontroller/yildirim-koruma-periyodik-kontrol.jpeg',
    slug: 'yildirimdan-korunma-sistemleri-periyodik-kontrolleri',
    category: 'periyodik',
    features: [
      'Paratoner ve yakalama uçları kontrolü',
      'İniş iletkenleri kontrolü',
      'Bağlantı noktaları kontrolü',
      'Topraklama sürekliliği ölçümü',
      'Mekanik ve elektriksel süreklilik kontrolleri'
    ],
    benefits: [
      'Yıldırım hasarından korunma',
      'Yasal uyumluluk',
      'Can ve mal güvenliği',
      'Sigorta geçerliliği'
    ],
    applications: [
      'Yüksek binalar',
      'Endüstriyel tesisler',
      'Hastaneler',
      'Okullar',
      'Tüm yüksek yapılar'
    ],
    content: `Firmamız, endüstriyel tesislerde can ve mal güvenliğini sağlamak amacıyla yıldırımdan korunma sistemlerinin periyodik kontrol ve ölçüm hizmetlerini sunmaktadır. Tüm kontroller; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Elektrik İç Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı, TS EN 62305 ve ilgili standartlar doğrultusunda gerçekleştirilmektedir.

Periyodik kontroller kapsamında; paratoner ve yakalama uçları, iniş iletkenleri, bağlantı noktaları ve topraklama sürekliliği detaylı olarak incelenmektedir. Ölçümler, yıldırım akımının güvenli şekilde toprağa iletilmesini sağlayacak kriterler doğrultusunda değerlendirilmekte, mekanik ve elektriksel süreklilik kontrolleri yapılmaktadır.

Kontrol sonuçları teknik rapor haline getirilmekte, standartlara ve mevzuata aykırı durumlar için iyileştirme ve revizyon önerileri sunulmaktadır. Amaç; endüstriyel tesislerde yasal gereklilikleri karşılayan, güvenilir ve sürdürülebilir yıldırımdan korunma altyapıları oluşturmaktır.`
  },
  {
    id: 9,
    title: 'Elektrik İç Tesisat Kontrolleri',
    description: 'Firmamız, endüstriyel tesislerde elektrik iç tesisatlarının güvenli ve mevzuata uygun işletilmesini sağlamak amacıyla periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm kontroller ilgili standartlar doğrultusunda gerçekleştirilmektedir...',
    fullDescription: 'Firmamız, endüstriyel tesislerde elektrik iç tesisatlarının güvenli ve mevzuata uygun işletilmesini sağlamak amacıyla periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm kontroller; Elektrik İç Tesisleri Yönetmeliği, Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı, TS HD 60364 ve ilgili standartlar doğrultusunda gerçekleştirilmektedir. Kontroller kapsamında; panolar, enerji dağıtım hatları, priz ve aydınlatma devreleri, kaçak akım koruma röleleri ve koruma elemanları detaylı olarak incelenmektedir. Ölçüm ve testler ile izolasyon durumu, süreklilik, faz dengesi ve koruma etkinliği değerlendirilerek tesisin güvenli işletimi doğrulanmaktadır. Kontrol sonuçları teknik rapor haline getirilmekte, mevzuata aykırı veya risk oluşturan durumlar için iyileştirme ve revizyon önerileri sunulmaktadır. Amaç; endüstriyel tesislerde yasal yükümlülükleri karşılayan, güvenli ve sürdürülebilir elektrik iç tesisatları oluşturmaktır.',
    image: '/images/periyodik-kontroller/ic-tesisat-periyodik-kontrol.jpeg',
    slug: 'elektrik-ic-tesisat-kontrolleri',
    category: 'periyodik',
    features: [
      'Pano kontrolleri',
      'Enerji dağıtım hatları kontrolü',
      'Priz ve aydınlatma devreleri kontrolü',
      'Kaçak akım koruma röleleri testi',
      'Koruma elemanları kontrolü'
    ],
    benefits: [
      'Güvenli çalışma ortamı',
      'Yasal uyumluluk',
      'Erken arıza tespiti',
      'Yangın riskinin azaltılması'
    ],
    applications: [
      'İşyerleri',
      'Ticari binalar',
      'Endüstriyel tesisler',
      'Konutlar'
    ],
    content: `Firmamız, endüstriyel tesislerde elektrik iç tesisatlarının güvenli ve mevzuata uygun işletilmesini sağlamak amacıyla periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm kontroller; Elektrik İç Tesisleri Yönetmeliği, Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı, TS HD 60364 ve ilgili standartlar doğrultusunda gerçekleştirilmektedir.

Kontroller kapsamında; panolar, enerji dağıtım hatları, priz ve aydınlatma devreleri, kaçak akım koruma röleleri ve koruma elemanları detaylı olarak incelenmektedir. Ölçüm ve testler ile izolasyon durumu, süreklilik, faz dengesi ve koruma etkinliği değerlendirilerek tesisin güvenli işletimi doğrulanmaktadır.

Kontrol sonuçları teknik rapor haline getirilmekte, mevzuata aykırı veya risk oluşturan durumlar için iyileştirme ve revizyon önerileri sunulmaktadır. Amaç; endüstriyel tesislerde yasal yükümlülükleri karşılayan, güvenli ve sürdürülebilir elektrik iç tesisatları oluşturmaktır.`
  },
  {
    id: 10,
    title: 'Diğer Periyodik Kontroller',
    description: 'Firmamız, endüstriyel tesislerde elektrik sistemlerinin güvenli, verimli ve mevzuata uygun işletilmesini sağlamak amacıyla farklı disiplinleri kapsayan periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm çalışmalar ilgili standartlara uygun olarak gerçekleştirilmektedir...',
    fullDescription: 'Firmamız, endüstriyel tesislerde elektrik sistemlerinin güvenli, verimli ve mevzuata uygun işletilmesini sağlamak amacıyla farklı disiplinleri kapsayan periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm çalışmalar; Elektrik İç Tesisleri Yönetmeliği, Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı, TS EN ve IEC standartları doğrultusunda gerçekleştirilmektedir. Periyodik kontroller kapsamında; termal kamera ölçümleri ile pano, bara ve bağlantı noktalarındaki aşırı ısınmalar tespit edilmekte, kaçak akım koruma rölesi testleri ile koruma elemanlarının işlevselliği doğrulanmaktadır. Ayrıca, harmonik ve enerji analiz ölçümleri ile enerji kalitesi, yük dağılımı ve sistem performansı değerlendirilmektedir. Endüstriyel tesislerde; katodik koruma ölçümleri ile metal yapıların korozyona karşı korunma durumu incelenmekte, izolasyon direnci ölçümleri ile kablo ve ekipmanların yalıtım seviyeleri kontrol edilmektedir. Patlayıcı ortamlara sahip alanlarda ise Ex-proof tesisat periyodik kontrolleri, ATEX direktifleri ve ilgili standartlara uygun olarak gerçekleştirilmektedir. Tüm ölçüm ve test sonuçları teknik rapor haline getirilmekte, tespit edilen riskler için iyileştirme ve önleyici bakım önerileri sunulmaktadır. Amaç; endüstriyel tesislerde işletme sürekliliğini artıran, arıza ve riskleri minimize eden kapsamlı kontrol süreçleri oluşturmaktır.',
    image: '/images/periyodik-kontroller/elektrik-periyodik-olcumler.jpeg',
    slug: 'diger-periyodik-kontroller',
    category: 'periyodik',
    features: [
      'Termal kamera ölçümleri',
      'Kaçak akım koruma rölesi testleri',
      'Harmonik ve enerji analiz ölçümleri',
      'Katodik koruma ölçümleri',
      'İzolasyon direnci ölçümleri',
      'Ex-proof tesisat periyodik kontrolleri'
    ],
    benefits: [
      'İşletme sürekliliğini artırma',
      'Arıza ve riskleri minimize etme',
      'Yasal uyumluluk',
      'Önleyici bakım'
    ],
    applications: [
      'Endüstriyel tesisler',
      'Elektrik panoları',
      'Trafo merkezleri',
      'Patlayıcı ortamlar',
      'Tüm elektrik tesisleri'
    ],
    content: `Firmamız, endüstriyel tesislerde elektrik sistemlerinin güvenli, verimli ve mevzuata uygun işletilmesini sağlamak amacıyla farklı disiplinleri kapsayan periyodik kontrol ve ölçüm hizmetleri sunmaktadır. Tüm çalışmalar; Elektrik İç Tesisleri Yönetmeliği, Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, İş Sağlığı ve Güvenliği mevzuatı, TS EN ve IEC standartları doğrultusunda gerçekleştirilmektedir.

Periyodik kontroller kapsamında; termal kamera ölçümleri ile pano, bara ve bağlantı noktalarındaki aşırı ısınmalar tespit edilmekte, kaçak akım koruma rölesi testleri ile koruma elemanlarının işlevselliği doğrulanmaktadır. Ayrıca, harmonik ve enerji analiz ölçümleri ile enerji kalitesi, yük dağılımı ve sistem performansı değerlendirilmektedir.

Endüstriyel tesislerde; katodik koruma ölçümleri ile metal yapıların korozyona karşı korunma durumu incelenmekte, izolasyon direnci ölçümleri ile kablo ve ekipmanların yalıtım seviyeleri kontrol edilmektedir. Patlayıcı ortamlara sahip alanlarda ise Ex-proof tesisat periyodik kontrolleri, ATEX direktifleri ve ilgili standartlara uygun olarak gerçekleştirilmektedir.

Tüm ölçüm ve test sonuçları teknik rapor haline getirilmekte, tespit edilen riskler için iyileştirme ve önleyici bakım önerileri sunulmaktadır. Amaç; endüstriyel tesislerde işletme sürekliliğini artıran, arıza ve riskleri minimize eden kapsamlı kontrol süreçleri oluşturmaktır.`
  },
  // Projelendirme
  {
    id: 11,
    title: 'Kuvvetli Akım Projeleri',
    description: 'Firmamız, endüstriyel tesislerin enerji altyapıları için kuvvetli akım projelerinin tasarımı, hesaplanması ve uygulamaya esas dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler ilgili standartlar doğrultusunda hazırlanmaktadır...',
    fullDescription: 'Firmamız, endüstriyel tesislerin enerji altyapıları için kuvvetli akım projelerinin tasarımı, hesaplanması ve uygulamaya esas dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Elektrik İç Tesisleri Yönetmeliği, TS EN ve IEC standartları doğrultusunda hazırlanmaktadır. Projelendirme sürecinde; yük ve talep hesapları, kısa devre akımı analizleri, gerilim düşümü, selektivite ve koruma koordinasyonu mühendislik hesapları ile değerlendirilmektedir. Ana ve tali dağıtım sistemleri, pano yerleşimleri, kablo güzergâhları ve topraklama yapıları tesisin mevcut ve gelecekteki işletme koşulları dikkate alınarak tasarlanmaktadır. Hazırlanan kuvvetli akım projeleri; saha uygulamalarına uygun, denetlenebilir ve revizyona açık olacak şekilde düzenlenmekte, gerekli durumlarda kontrollük ve müşavirlik hizmetleri ile desteklenmektedir. Amaç; endüstriyel tesislerde güvenli, sürdürülebilir ve işletme sürekliliği yüksek enerji altyapıları oluşturmaktır.',
    image: '/images/projelendirme/endustriyel-enerji-projeleri.jpeg',
    slug: 'kuvvetli-akim-projeleri',
    category: 'projelendirme',
    features: [
      'Enerji dağıtım projeleri',
      'Güç tesisatı projeleri',
      'Trafo merkezi projeleri',
      'Kablo tesisatı projeleri',
      'Koruma koordinasyonu'
    ],
    benefits: [
      'Yönetmeliklere uygun tasarım',
      'Maliyet optimizasyonu',
      'Verimli enerji dağıtımı',
      'Güvenli sistem tasarımı'
    ],
    applications: [
      'Endüstriyel tesisler',
      'Ticari binalar',
      'Altyapı projeleri',
      'Büyük ölçekli projeler'
    ],
    content: `Firmamız, endüstriyel tesislerin enerji altyapıları için kuvvetli akım projelerinin tasarımı, hesaplanması ve uygulamaya esas dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler; Elektrik Kuvvetli Akım Tesisleri Yönetmeliği, Elektrik İç Tesisleri Yönetmeliği, TS EN ve IEC standartları doğrultusunda hazırlanmaktadır.

Projelendirme sürecinde; yük ve talep hesapları, kısa devre akımı analizleri, gerilim düşümü, selektivite ve koruma koordinasyonu mühendislik hesapları ile değerlendirilmektedir. Ana ve tali dağıtım sistemleri, pano yerleşimleri, kablo güzergâhları ve topraklama yapıları tesisin mevcut ve gelecekteki işletme koşulları dikkate alınarak tasarlanmaktadır.

Hazırlanan kuvvetli akım projeleri; saha uygulamalarına uygun, denetlenebilir ve revizyona açık olacak şekilde düzenlenmekte, gerekli durumlarda kontrollük ve müşavirlik hizmetleri ile desteklenmektedir. Amaç; endüstriyel tesislerde güvenli, sürdürülebilir ve işletme sürekliliği yüksek enerji altyapıları oluşturmaktır.`
  },
  {
    id: 12,
    title: 'Zayıf Akım Projeleri',
    description: 'Firmamız, endüstriyel tesislerin güvenlik, iletişim ve otomasyon altyapıları için zayıf akım sistemlerinin projelendirilmesi ve teknik dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler ilgili standartlar doğrultusunda hazırlanmaktadır...',
    fullDescription: 'Firmamız, endüstriyel tesislerin güvenlik, iletişim ve otomasyon altyapıları için zayıf akım sistemlerinin projelendirilmesi ve teknik dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler; Elektrik İç Tesisleri Yönetmeliği, ilgili TS EN ve IEC standartları ile yürürlükteki yönetmelikler doğrultusunda hazırlanmaktadır. Projelendirme sürecinde; yangın algılama ve ihbar sistemleri, CCTV, kartlı geçiş ve çevre güvenliği sistemleri, data ve fiber altyapıları, acil anons ve saat sistemleri tesisin kullanım amacı ve risk analizleri doğrultusunda tasarlanmaktadır. Kablo güzergâhları, cihaz yerleşimleri ve sistem entegrasyonları mühendislik hesapları ve saha koşulları dikkate alınarak planlanmaktadır. Hazırlanan zayıf akım projeleri; uygulamaya uygun, denetlenebilir ve genişlemeye açık olacak şekilde düzenlenmekte, ihtiyaç halinde kontrollük ve müşavirlik hizmetleri ile desteklenmektedir. Amaç; endüstriyel tesislerde güvenilir, ölçeklenebilir ve sürdürülebilir zayıf akım altyapıları oluşturmaktır.',
    image: '/images/projelendirme/zayif-akim-sistemleri.jpeg',
    slug: 'zayif-akim-projeleri',
    category: 'projelendirme',
    features: [
      'Data ve telefon sistemleri',
      'Güvenlik sistemleri',
      'Yangın algılama projeleri',
      'Kamera sistemleri',
      'Erişim kontrol sistemleri'
    ],
    benefits: [
      'Entegre sistem tasarımı',
      'Modern teknoloji',
      'Güvenli iletişim',
      'Ölçeklenebilir yapı'
    ],
    applications: [
      'Ticari binalar',
      'Endüstriyel tesisler',
      'Konut projeleri',
      'Altyapı projeleri'
    ],
    content: `Firmamız, endüstriyel tesislerin güvenlik, iletişim ve otomasyon altyapıları için zayıf akım sistemlerinin projelendirilmesi ve teknik dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler; Elektrik İç Tesisleri Yönetmeliği, ilgili TS EN ve IEC standartları ile yürürlükteki yönetmelikler doğrultusunda hazırlanmaktadır.

Projelendirme sürecinde; yangın algılama ve ihbar sistemleri, CCTV, kartlı geçiş ve çevre güvenliği sistemleri, data ve fiber altyapıları, acil anons ve saat sistemleri tesisin kullanım amacı ve risk analizleri doğrultusunda tasarlanmaktadır. Kablo güzergâhları, cihaz yerleşimleri ve sistem entegrasyonları mühendislik hesapları ve saha koşulları dikkate alınarak planlanmaktadır.

Hazırlanan zayıf akım projeleri; uygulamaya uygun, denetlenebilir ve genişlemeye açık olacak şekilde düzenlenmekte, ihtiyaç halinde kontrollük ve müşavirlik hizmetleri ile desteklenmektedir. Amaç; endüstriyel tesislerde güvenilir, ölçeklenebilir ve sürdürülebilir zayıf akım altyapıları oluşturmaktır.`
  },
  {
    id: 13,
    title: 'Yangın Algılama ve Uyarı Sistemleri',
    description: 'Firmamız, endüstriyel tesislerde erken yangın tespiti ve etkin uyarı sağlamak amacıyla yangın algılama ve uyarı sistemlerinin projelendirilmesi, kurulumu ve devreye alınması hizmetlerini sunmaktadır. Tüm çalışmalar ilgili standartlar doğrultusunda gerçekleştirilmektedir...',
    fullDescription: 'Firmamız, endüstriyel tesislerde erken yangın tespiti ve etkin uyarı sağlamak amacıyla yangın algılama ve uyarı sistemlerinin projelendirilmesi, kurulumu ve devreye alınması hizmetlerini sunmaktadır. Tüm çalışmalar; Binaların Yangından Korunması Hakkında Yönetmelik, TS EN 54 serisi, Elektrik İç Tesisleri Yönetmeliği ve ilgili standartlar doğrultusunda gerçekleştirilmektedir. Sistem tasarımında; tesisin kullanım amacı, risk sınıfı ve alan özellikleri dikkate alınarak adresli ve konvansiyonel yangın algılama sistemleri, duman, ısı ve alev dedektörleri mühendislik esaslarına göre konumlandırılmaktadır. Sesli ve görsel uyarı elemanları, kaçış ve tahliye senaryolarını destekleyecek şekilde planlanmaktadır. Kurulum ve devreye alma süreçlerinde; kablolama, cihaz testleri, senaryo doğrulamaları ve fonksiyon kontrolleri standartlara uygun olarak yapılmakta, sistemin güvenilir ve sürekli çalışması sağlanmaktadır. Amaç; endüstriyel tesislerde can güvenliğini artıran, mevzuata uyumlu ve sürdürülebilir yangın algılama altyapıları oluşturmaktır.',
    image: '/images/projelendirme/yangin-alarm-sistemleri.jpeg',
    slug: 'yangin-algilama-uyari-sistemleri',
    category: 'projelendirme',
    features: [
      'Adresli yangın algılama sistemleri',
      'Konvansiyonel yangın algılama sistemleri',
      'Duman, ısı ve alev dedektörleri',
      'Sesli ve görsel uyarı elemanları',
      'Kurulum ve devreye alma'
    ],
    benefits: [
      'Erken yangın tespiti',
      'Can güvenliği',
      'Mevzuata uyumluluk',
      'Sürdürülebilir altyapı'
    ],
    applications: [
      'Endüstriyel tesisler',
      'Ticari binalar',
      'Hastaneler',
      'Okullar',
      'Konut projeleri'
    ],
    content: `Firmamız, endüstriyel tesislerde erken yangın tespiti ve etkin uyarı sağlamak amacıyla yangın algılama ve uyarı sistemlerinin projelendirilmesi, kurulumu ve devreye alınması hizmetlerini sunmaktadır. Tüm çalışmalar; Binaların Yangından Korunması Hakkında Yönetmelik, TS EN 54 serisi, Elektrik İç Tesisleri Yönetmeliği ve ilgili standartlar doğrultusunda gerçekleştirilmektedir.

Sistem tasarımında; tesisin kullanım amacı, risk sınıfı ve alan özellikleri dikkate alınarak adresli ve konvansiyonel yangın algılama sistemleri, duman, ısı ve alev dedektörleri mühendislik esaslarına göre konumlandırılmaktadır. Sesli ve görsel uyarı elemanları, kaçış ve tahliye senaryolarını destekleyecek şekilde planlanmaktadır.

Kurulum ve devreye alma süreçlerinde; kablolama, cihaz testleri, senaryo doğrulamaları ve fonksiyon kontrolleri standartlara uygun olarak yapılmakta, sistemin güvenilir ve sürekli çalışması sağlanmaktadır. Amaç; endüstriyel tesislerde can güvenliğini artıran, mevzuata uyumlu ve sürdürülebilir yangın algılama altyapıları oluşturmaktır.`
  },
  {
    id: 14,
    title: 'Güvenlik Sistemleri Projeleri',
    description: 'Firmamız, endüstriyel tesislerde tesis güvenliği, erişim kontrolü ve izleme altyapılarının oluşturulmasına yönelik güvenlik sistemleri projelerinin tasarımı ve teknik dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler ilgili standartlar doğrultusunda hazırlanmaktadır...',
    fullDescription: 'Firmamız, endüstriyel tesislerde tesis güvenliği, erişim kontrolü ve izleme altyapılarının oluşturulmasına yönelik güvenlik sistemleri projelerinin tasarımı ve teknik dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler; Elektrik İç Tesisleri Yönetmeliği, ilgili TS EN standartları ve yürürlükteki mevzuatlar doğrultusunda hazırlanmaktadır. Projelendirme sürecinde; kartlı geçiş ve personel takip sistemleri, kamera (CCTV / IP CCTV) sistemleri, çevre güvenliği ve kayıt altyapıları tesisin kullanım amacı ve güvenlik seviyesine göre tasarlanmaktadır. Kamera yerleşimleri, görüş açıları, kayıt süreleri ve ağ altyapısı mühendislik hesapları ve saha koşulları dikkate alınarak planlanmaktadır. Kartlı geçiş sistemleri; yetkilendirme senaryoları, giriş–çıkış kontrol noktaları ve vardiya düzenleri doğrultusunda projelendirilmekte, kamera sistemleri ile entegre çalışacak şekilde yapılandırılmaktadır. Hazırlanan güvenlik projeleri; uygulanabilir, ölçeklenebilir ve gelecekteki genişlemelere açık olacak şekilde düzenlenmektedir. Amaç; endüstriyel tesislerde kontrollü erişim, etkin izleme ve sürdürülebilir güvenlik altyapıları oluşturmaktır.',
    image: '/images/projelendirme/tesis-guvenligi-projeleri.jpeg',
    slug: 'guvenlik-sistemleri-projeleri',
    category: 'projelendirme',
    features: [
      'Kartlı geçiş sistemleri',
      'Personel takip sistemleri',
      'CCTV / IP CCTV kamera sistemleri',
      'Çevre güvenliği sistemleri',
      'Kayıt altyapıları'
    ],
    benefits: [
      'Kontrollü erişim',
      'Etkin izleme',
      'Ölçeklenebilir yapı',
      'Sürdürülebilir altyapı'
    ],
    applications: [
      'Endüstriyel tesisler',
      'Ticari binalar',
      'Hastaneler',
      'Okullar',
      'Konut projeleri'
    ],
    content: `Firmamız, endüstriyel tesislerde tesis güvenliği, erişim kontrolü ve izleme altyapılarının oluşturulmasına yönelik güvenlik sistemleri projelerinin tasarımı ve teknik dokümantasyonunun hazırlanması alanında mühendislik hizmetleri sunmaktadır. Tüm projeler; Elektrik İç Tesisleri Yönetmeliği, ilgili TS EN standartları ve yürürlükteki mevzuatlar doğrultusunda hazırlanmaktadır.

Projelendirme sürecinde; kartlı geçiş ve personel takip sistemleri, kamera (CCTV / IP CCTV) sistemleri, çevre güvenliği ve kayıt altyapıları tesisin kullanım amacı ve güvenlik seviyesine göre tasarlanmaktadır. Kamera yerleşimleri, görüş açıları, kayıt süreleri ve ağ altyapısı mühendislik hesapları ve saha koşulları dikkate alınarak planlanmaktadır.

Kartlı geçiş sistemleri; yetkilendirme senaryoları, giriş–çıkış kontrol noktaları ve vardiya düzenleri doğrultusunda projelendirilmekte, kamera sistemleri ile entegre çalışacak şekilde yapılandırılmaktadır. Hazırlanan güvenlik projeleri; uygulanabilir, ölçeklenebilir ve gelecekteki genişlemelere açık olacak şekilde düzenlenmektedir.

Amaç; endüstriyel tesislerde kontrollü erişim, etkin izleme ve sürdürülebilir güvenlik altyapıları oluşturmaktır.`
  }
]

// Composable function
export const useServices = () => {
  const getServiceBySlug = (slug: string): Service | undefined => {
    return services.find(service => service.slug === slug)
  }

  const getServicesByCategory = (category: string): Service[] => {
    return services.filter(service => service.category === category)
  }

  const getRelatedServices = (currentSlug: string, limit: number = 3): Service[] => {
    const currentService = getServiceBySlug(currentSlug)
    if (!currentService) return []

    return services
      .filter(service => service.slug !== currentSlug && service.category === currentService.category)
      .slice(0, limit)
  }

  return {
    services,
    serviceCategories,
    getServiceBySlug,
    getServicesByCategory,
    getRelatedServices
  }
}
