// Type definitions for Kurbanoglu project

// Navigation item
export interface NavItem {
  label: string
  to: string
  icon?: string
  children?: NavItem[]
}

// Social media link
export interface SocialLink {
  icon: string
  to: string
  label: string
}

// Service card
export interface Service {
  id: string
  title: string
  description: string
  icon: string
  color?: 'primary' | 'secondary'
  slug: string
}

// Project item
export interface Project {
  id: string
  title: string
  category: string
  image: string
  slug: string
  status: 'completed' | 'ongoing'
  sector?: string
}

// Product item
export interface Product {
  id: string
  title: string
  image: string
  slug: string
  category: string
}

// Partner/Reference logo
export interface Partner {
  id: string
  name: string
  logo: string
  url?: string
}

// Hero section data
export interface HeroData {
  title: string
  subtitle: string
  backgroundImage: string
  primaryButton: {
    label: string
    to: string
    icon?: string
  }
  secondaryButton: {
    label: string
    to: string
    icon?: string
  }
}

// Contact form data
export interface ContactForm {
  name: string
  email: string
  phone?: string
  service?: string
  message: string
}

// WordPress GraphQL response types
export interface WPPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  featuredImage?: {
    node: {
      sourceUrl: string
      altText: string
    }
  }
}

export interface WPPage {
  id: string
  title: string
  slug: string
  content: string
}
