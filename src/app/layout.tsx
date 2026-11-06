import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google";
import ThemeProvider from '@/components/ThemeProvider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import ScrollProgress from '@/components/ScrollProgress'
import { LanguageProvider } from '@/i18n/LanguageContext'
import WhatsAppButton from '@/components/WhatsAppButton'
import { SITE_URL, PERSON_ID, SERVICE_ID, seoGeoServices } from '@/config/seo-geo'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Arol Djoutsop — Software Engineer & Développeur Full-Stack (Web & Mobile)',
    template: '%s | Arol Djoutsop',
  },
  description:
    "Arol Djoutsop (aussi connu sous Arol Dejesus) — Software Engineer, développeur full-stack web & mobile (React, Node.js, Flutter, DevOps), consultant SEO & GEO (visibilité dans les moteurs d'IA) et co-fondateur de FOLIO DISTICARET.",
  keywords: [
    'Arol Djoutsop',
    'Arol Dejesus',
    'Arol Sorelle Djoutsop',
    'Software Engineer',
    'ingénieur logiciel',
    'développeur full-stack',
    'développeur web',
    'développeur mobile',
    'React',
    'Node.js',
    'Flutter',
    'DevOps',
    'entrepreneur technologique',
    'FOLIO DISTICARET',
    'référencement SEO',
    'consultant SEO',
    'GEO',
    'Generative Engine Optimization',
    'visibilité dans les LLM',
    'optimisation pour les moteurs IA',
    'données structurées Schema.org',
    'référencement web',
    'visibilité en ligne',
    'Cameroun',
    'portfolio',
  ],
  authors: [{ name: 'Arol Djoutsop', url: SITE_URL }],
  creator: 'Arol Djoutsop',
  publisher: 'Arol Djoutsop',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'Arol Djoutsop',
    title: 'Arol Djoutsop — Software Engineer & Développeur Full-Stack',
    description:
      "Software Engineer et développeur full-stack web & mobile (React, Node.js, Flutter). Découvre mes projets et contacte-moi.",
    locale: 'fr_FR',
    images: [{ url: '/assets/images/og.png', width: 1200, height: 630, alt: 'Arol Djoutsop — Développeur Full-Stack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arol Djoutsop — Software Engineer & Full-Stack Developer',
    description:
      "Software Engineer & développeur full-stack web & mobile (React, Node.js, Flutter).",
    images: ['/assets/images/og.png'],
  },
  icons: {
    icon: '/assets/images/favicon.png',
    shortcut: '/assets/images/favicon.png',
    apple: '/assets/images/favicon.png',
  },
  verification: {
    google: ['MRtmgXOSvObc60CS3Q5r50DGSBdEIucd4n3cvP6QXP0', 'SEtfwPRbNV2XC7iSpiIL8VnFEOIhhVIRoeqfafy13_k'],
  },
};

// Graphe d'entités : une seule source de vérité pour Google et les moteurs d'IA.
// Les @id relient la personne, le site et l'offre entre eux.
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Arol Djoutsop',
      givenName: 'Arol',
      familyName: 'Djoutsop',
      alternateName: ['Arol Sorelle Djoutsop', 'Arol Dejesus'],
      url: SITE_URL,
      mainEntityOfPage: SITE_URL,
      image: `${SITE_URL}/assets/images/about/arol.jpg`,
      jobTitle: ['Software Engineer', 'Développeur Full-Stack (Web & Mobile)', 'Consultant SEO & GEO', 'Entrepreneur technologique'],
      description:
        "Software Engineer et développeur full-stack basé à Yaoundé (Cameroun). Je conçois des applications web (React, Next.js, Node.js) et mobiles (Flutter), et j'aide les marques à être visibles sur Google et dans les réponses des moteurs d'IA (SEO et GEO). Co-fondateur de FOLIO DISTICARET.",
      disambiguatingDescription:
        "Arol Djoutsop (Arol Sorelle Djoutsop, aussi connu sous Arol Dejesus), ingénieur logiciel, développeur full-stack et consultant SEO/GEO basé à Yaoundé, Cameroun.",
      address: { '@type': 'PostalAddress', addressLocality: 'Yaoundé', addressCountry: 'CM' },
      email: 'mailto:aroldjoutsop19@gmail.com',
      knowsLanguage: ['fr', 'en'],
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Institut Africain d\'Informatique (IAI-Cameroun)',
      },
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        name: 'Licence en Génie Logiciel',
        credentialCategory: 'degree',
        recognizedBy: { '@type': 'CollegeOrUniversity', name: 'IAI-Cameroun' },
      },
      worksFor: [
        { '@type': 'Organization', name: 'FOLIO DISTICARET', url: 'https://foliotr.com' },
        { '@type': 'Organization', name: 'FOLIOTSA', url: 'https://foliotsa.net' },
      ],
      knowsAbout: [
        'React', 'Next.js', 'Node.js', 'TypeScript', 'Flutter', 'React Native', 'DevOps', 'CI/CD',
        'Mobile Money', 'UI/UX Design',
        'Search Engine Optimization', 'Generative Engine Optimization',
        'Visibilité des marques dans les LLM', 'Schema.org', 'Données structurées',
        'Recherche de mots-clés', 'Entrepreneuriat',
      ],
      makesOffer: { '@id': SERVICE_ID },
      sameAs: [
        'https://www.wikidata.org/wiki/Q141694776',
        'https://github.com/aroldjoutsop',
        'https://www.linkedin.com/in/arol-djoutsop-5175182a2',
        'https://www.facebook.com/share/1UgVtAeYqP/',
        'https://www.pinterest.com/aroldjoutsop',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Arol Djoutsop',
      alternateName: 'Arol Dejesus — Portfolio',
      inLanguage: ['fr', 'en'],
      publisher: { '@id': PERSON_ID },
      about: { '@id': PERSON_ID },
    },
    {
      '@type': 'ProfessionalService',
      '@id': SERVICE_ID,
      name: 'Arol Djoutsop — SEO, GEO & développement web/mobile',
      url: `${SITE_URL}/seo-geo/`,
      image: `${SITE_URL}/assets/images/og.png`,
      founder: { '@id': PERSON_ID },
      address: { '@type': 'PostalAddress', addressLocality: 'Yaoundé', addressCountry: 'CM' },
      areaServed: ['Cameroun', 'Afrique', 'Europe', 'Worldwide'],
      availableLanguage: ['fr', 'en'],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Services SEO & GEO',
        itemListElement: seoGeoServices.map((s) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            '@id': `${SITE_URL}/seo-geo/#${s.id}`,
            name: s.name,
            description: s.summary,
            provider: { '@id': PERSON_ID },
          },
        })),
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>
            <ScrollProgress />
            <Analytics />
            <SpeedInsights />
            <div className="relative h-screen">
              <div className="relative z-10 flex flex-col h-full">
                {children}
                <WhatsAppButton />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
} 