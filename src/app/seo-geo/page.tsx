import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL, PERSON_ID, SERVICE_ID, seoGeoServices, seoGeoFaq } from '@/config/seo-geo';

// Page serveur, contenu statique en HTML : lisible par Google et par les robots
// des moteurs d'IA sans exécuter de JavaScript.

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

      <article className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-28 pb-20 text-neutral-800 dark:text-neutral-200">
        <nav aria-label="Fil d'Ariane" className="text-sm text-neutral-500">
          <Link href="/" className="hover:underline">Accueil</Link> / <span>SEO & GEO</span>
        </nav>

        <header className="mt-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">
            Consultant SEO & GEO : rendre votre marque visible sur Google et dans les réponses des IA
          </h1>
          {/* Réponse d'abord : qui, quoi, où, pour qui — en un paragraphe extractible */}
          <p className="mt-5 text-lg leading-8">
            Je suis <strong>Arol Djoutsop</strong>, ingénieur logiciel et consultant SEO & GEO basé à
            Yaoundé (Cameroun). J&apos;aide les entreprises à être trouvées sur Google et à être
            mentionnées, recommandées et citées comme source par les moteurs d&apos;IA générative
            (ChatGPT, Gemini, Perplexity, Claude, Copilot, AI Overviews de Google). Je travaille à
            distance, en français et en anglais.
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            Par Arol Djoutsop · Mis à jour le <time dateTime={UPDATED}>6 novembre 2026</time>
          </p>
        </header>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Qu&apos;est-ce que le GEO ?
          </h2>
          <p className="mt-4 leading-7">
            Le <strong>GEO (Generative Engine Optimization)</strong> est l&apos;ensemble des pratiques
            qui augmentent les chances qu&apos;une marque apparaisse dans une réponse rédigée par une
            IA. Là où le SEO cherche à classer une page dans une liste de liens, le GEO cherche à
            faire de votre marque la réponse — ou la source citée. Les deux reposent sur la même base :
            un site techniquement sain, des contenus clairs et fiables, et des mentions dans des
            sources tierces reconnues.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Mes services</h2>
          <ol className="mt-6 space-y-10">
            {seoGeoServices.map((s, i) => (
              <li key={s.id} id={s.id} className="scroll-mt-28">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {i + 1}. {s.name}
                </h3>
                <p className="mt-2 leading-7">{s.summary}</p>
                <ul className="mt-3 list-disc pl-6 space-y-1 text-neutral-700 dark:text-neutral-300">
                  {s.deliverables.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Ma méthode</h2>
          <ol className="mt-4 list-decimal pl-6 space-y-2 leading-7">
            <li><strong>Diagnostic</strong> : audit SEO technique et éditorial, et état des lieux de ce que les IA disent de vous.</li>
            <li><strong>Priorités</strong> : mots-clés, questions conversationnelles et pages à créer ou corriger, classés par impact.</li>
            <li><strong>Mise en œuvre</strong> : corrections techniques, contenus, balisage Schema.org, mentions externes. Développeur, je peux intervenir directement dans le code.</li>
            <li><strong>Mesure</strong> : suivi mensuel des positions, du trafic organique et de la présence dans les réponses des IA.</li>
          </ol>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
            Pourquoi un développeur pour le SEO et le GEO ?
          </h2>
          <p className="mt-4 leading-7">
            Une grande partie des blocages vient du code : contenus rendus uniquement en JavaScript,
            balisage absent, pages lentes, robots bloqués. En tant que développeur full-stack
            (React, Next.js, Node.js, Flutter), je diagnostique et je corrige ces problèmes moi-même,
            sans intermédiaire.
          </p>
        </section>

        <section className="mt-12" id="faq">
          <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">Questions fréquentes</h2>
          <div className="mt-4 space-y-6">
            {seoGeoFaq.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-neutral-900 dark:text-white">{f.q}</h3>
                <p className="mt-1 leading-7">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 text-center">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Voyons ce que les IA disent de votre marque
          </h2>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Premier échange gratuit, réponse sous 24 h.
          </p>
          <Link
            href="/#contact"
            className="mt-5 inline-flex items-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Me contacter
          </Link>
        </section>
      </article>

      <Footer />
    </main>
  );
}
