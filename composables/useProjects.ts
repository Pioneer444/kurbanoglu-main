// Project interface
export interface Project {
  id: number
  title: string
  category: string
  image: string
  status: 'completed' | 'ongoing'
  sector: string
  slug: string
}

// All projects
export const projects: Project[] = [
  // Tamamlanan Projeler
  {
    id: 1,
    title: 'Macaristan - Tiszaujvaros - Mol Betro Kimya',
    category: 'Topraklama Sistemleri',
    image: '/images/projects/tamamlanan/1.jpeg',
    status: 'completed',
    sector: 'Kimya',
    slug: 'mol-betro-kimya-tiszaujvaros'
  },
  {
    id: 2,
    title: 'Endüstriyel Tesis - Dilovası/İMES OSB',
    category: 'Alçak Gerilim Tesisatı - Yüksek Gerilim Tesisatı',
    image: '/images/projects/tamamlanan/2.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'dilovasi-imes-osb'
  },
  {
    id: 3,
    title: 'Endüstriyel Tesis - Dilovası/İMES',
    category: 'Alçak Gerilim Tesisatı - Yangın Algılama ve Uyarı Sistemleri',
    image: '/images/projects/tamamlanan/3.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'dilovasi-imes'
  },
  {
    id: 4,
    title: 'Endüstriyel Tesis - Düzce',
    category: 'Alçak Gerilim Tesisatı - Yangın Algılama ve Uyarı Sistemleri - Kamera Sistemleri - Kartlı Geçiş Sistemleri - Yıldırımdan Korunma Sistemleri',
    image: '/images/projects/tamamlanan/4.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'duzce-endustriyel-tesis'
  },
  {
    id: 5,
    title: 'Endüstriyel Tesis - Gebze/GOSB',
    category: 'Alçak Gerilim Tesisatı - Periyodik Kontrol - Yüksek Gerilim Sistemleri - Müşavirlik Hizmetleri',
    image: '/images/projects/tamamlanan/5.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'gebze-gosb-tesisat'
  },
  {
    id: 6,
    title: 'Endüstriyel Tesis - Gebze/GOSB',
    category: 'Yıldırımdan Korunma Sistemleri - Müşavirlik Hizmetleri',
    image: '/images/projects/tamamlanan/6.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'gebze-gosb-yildirim-koruma'
  },
  {
    id: 7,
    title: 'Endüstriyel Tesis - Düzce',
    category: 'Yangın Algılama ve Uyarı Sistem Kontrolleri',
    image: '/images/projects/tamamlanan/7.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'duzce-yangin-kontrol'
  },
  {
    id: 8,
    title: 'Endüstriyel Tesis - Konya',
    category: 'Yangın Algılama ve Uyarı Sistemleri Projelendirme ve Keşif Listesi Hazırlama',
    image: '/images/projects/tamamlanan/8.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'konya-yangin-projelendirme'
  },
  {
    id: 9,
    title: 'Endüstriyel Tesis - Kayseri',
    category: 'Yangın Algılama ve Uyarı Sistemleri Projelendirme ve Keşif Listesi Hazırlama',
    image: '/images/projects/tamamlanan/9.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'kayseri-yangin-projelendirme'
  },
  {
    id: 10,
    title: 'Endüstriyel Tesis - Ankara',
    category: 'Yangın Algılama ve Uyarı Sistemleri Projelendirme ve Keşif Listesi Hazırlama',
    image: '/images/projects/tamamlanan/10.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'ankara-yangin-projelendirme'
  },
  {
    id: 11,
    title: 'Endüstriyel Tesis - Düzce',
    category: 'Yangın Algılama ve Uyarı Sistemleri Projelendirme ve Keşif Listesi Hazırlama',
    image: '/images/projects/tamamlanan/1.jpeg',
    status: 'completed',
    sector: 'Endüstriyel',
    slug: 'duzce-yangin-projelendirme'
  },
  // Devam Eden Projeler
  {
    id: 12,
    title: 'Endüstriyel Tesis - Çayırova/Kocaeli',
    category: 'Alçak Gerilim Sistemleri, Pano Tasarım ve İmalatı, Projelendirme',
    image: '/images/projects/devam-eden/1.jpeg',
    status: 'ongoing',
    sector: 'Endüstriyel',
    slug: 'cayirova-kocaeli'
  },
  {
    id: 13,
    title: 'Villa - İstanbul/Çekmeköy',
    category: 'Akıllı Ev Otomasyon Sistemleri, Pano Tasarım ve İmalatı, Alçak Gerilim Sistemleri, Zayıf Akım Sistemleri, Kamera Sistemleri',
    image: '/images/projects/devam-eden/villa.jpeg',
    status: 'ongoing',
    sector: 'Konut',
    slug: 'istanbul-cekmekoy-villa'
  },
  {
    id: 14,
    title: 'Makine İhtisas OSB - Dilovası',
    category: '1600 A Busbar Sistem Montajı, Pano Tasarım ve İmalatı, Alçak Gerilim Tesisatı',
    image: '/images/projects/devam-eden/2.jpeg',
    status: 'ongoing',
    sector: 'Endüstriyel',
    slug: 'dilovasi-makine-ihtisas-osb'
  },
  {
    id: 15,
    title: 'Endüstriyel Tesis - Gebze/Kocaeli',
    category: '250 A Busbar Sistem Montajı',
    image: '/images/projects/devam-eden/3.jpeg',
    status: 'ongoing',
    sector: 'Endüstriyel',
    slug: 'gebze-kocaeli-busbar'
  },
  {
    id: 16,
    title: 'Endüstriyel Tesis - Tuzla/İstanbul',
    category: 'Elektrik İç Tesisat Projelendirme',
    image: '/images/projects/devam-eden/4.jpeg',
    status: 'ongoing',
    sector: 'Endüstriyel',
    slug: 'tuzla-istanbul-projelendirme'
  }
]

// Composable function
export const useProjects = () => {
  const getProjectBySlug = (slug: string): Project | undefined => {
    return projects.find(project => project.slug === slug)
  }

  const getProjectsByStatus = (status: 'completed' | 'ongoing'): Project[] => {
    return projects.filter(project => project.status === status)
  }

  const getRelatedProjects = (currentSlug: string, limit: number = 3): Project[] => {
    const currentProject = getProjectBySlug(currentSlug)
    if (!currentProject) return []

    return projects
      .filter(project => project.slug !== currentSlug && project.sector === currentProject.sector)
      .slice(0, limit)
  }

  return {
    projects,
    getProjectBySlug,
    getProjectsByStatus,
    getRelatedProjects
  }
}
