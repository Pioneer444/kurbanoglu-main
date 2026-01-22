// App configuration for Nuxt UI theme customization
// Based on Figma design analysis

export default defineAppConfig({
  ui: {
    // Primary color from Figma: #064a81
    colors: {
      primary: 'blue',
      neutral: 'gray'
    },

    // Button customization
    button: {
      defaultVariants: {
        color: 'primary'
      }
    },

    // Card customization
    card: {
      slots: {
        root: 'rounded-2xl' // 16px border-radius from Figma
      }
    }
  },

  // Site metadata
  site: {
    name: 'Kurbanoğlu Mühendislik',
    description: 'Endüstriyel Elektrik Taahhüt ve Danışmanlık',
    url: 'https://kurbanoglu.com.tr'
  },

  // Navigation items
  navigation: {
    header: [
      { label: 'Kurumsal', to: '/kurumsal' },
      { label: 'Hakkımızda', to: '/hakkimizda' },
      { label: 'Hizmetler', to: '/hizmetler' },
      { label: 'Projeler', to: '/projeler' },
      { label: 'Teknoloji', to: '/teknoloji' },
      { label: 'Blog', to: '/blog' },
      { label: 'İletişim', to: '/iletisim' }
    ],
    footer: [
      { label: 'Kurumsal', to: '/kurumsal' },
      { label: 'Hizmetler', to: '/hizmetler' },
      { label: 'Ürünler', to: '/urunler' },
      { label: 'Projeler', to: '/projeler' },
      { label: 'Teknoloji', to: '/teknoloji' },
      { label: 'İletişim', to: '/iletisim' }
    ]
  },

  // Social media links
  social: [
    { icon: 'i-simple-icons-linkedin', to: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'i-simple-icons-instagram', to: 'https://instagram.com', label: 'Instagram' },
    { icon: 'i-simple-icons-x', to: 'https://x.com', label: 'X' }
  ]
})
