import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SeoGeoContent from '@/components/SeoGeoContent';
import { SITE_URL, PERSON_ID, SERVICE_ID, seoGeoServices, seoGeoFaq } from '@/config/seo-geo';

// Le contenu est pré-rendu en HTML (français par défaut) : lisible par Google et
// les robots d'IA sans JavaScript ; le sélecteur de langue bascule en anglais.

const PAGE_URL = `${SITE_URL}/seo-geo/`;
const UPDATED = '2026-11-06';

export const metadata: Metadata = {
  title: 'Consultant SEO & GEO — visibilité sur Google et dans les moteurs d’IA',
  description:
    "Arol Djoutsop, consultant SEO et GEO basé à Yaoundé : audit, stratégie de contenu pour l'IA, Schema.org et suivi de la présence de votre marque dans ChatGPT, Gemini, Perplexity et Google.",
  alternates: { canonical: '/seo-geo/' },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: 'Consultant SEO & GEO — Arol Djoutsop',
    description:
      "Rendre votre marque visible sur Google et citée dans les réponses des moteurs d'IA.",
    images: [{ url: '/assets/images/og.png', width: 1200, height: 630 }],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'Consultant SEO & GEO — Arol Djoutsop',
      inLanguage: 'fr',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': SERVICE_ID },
      author: { '@id': PERSON_ID },
      dateModified: UPDATED,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'SEO & GEO', item: PAGE_URL },
      ],
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: seoGeoFaq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

export default function SeoGeoPage() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <SeoGeoContent />

      <Footer />
    </main>
  );
}
