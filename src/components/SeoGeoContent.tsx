'use client';

import Link from 'next/link';
import { useLanguage } from '@/i18n/LanguageContext';
import {
  seoGeoServices,
  seoGeoServicesEn,
  seoGeoFaq,
  seoGeoFaqEn,
  seoGeoPageText,
} from '@/config/seo-geo';

// Rendu côté serveur en français (langue par défaut), donc lisible sans
// JavaScript par Google et les robots d'IA ; bascule en anglais côté client.

const UPDATED = '2026-11-06';

export default function SeoGeoContent() {
  const { lang } = useLanguage();
  const txt = seoGeoPageText[lang];
  const services = lang === 'en' ? seoGeoServicesEn : seoGeoServices;
  const faq = lang === 'en' ? seoGeoFaqEn : seoGeoFaq;

  const h2 = 'text-2xl font-semibold text-neutral-900 dark:text-white';

  return (
    <article className="relative z-10 mx-auto w-full max-w-3xl px-4 pt-28 pb-20 text-neutral-800 dark:text-neutral-200">
      <nav aria-label="Breadcrumb" className="text-sm text-neutral-500">
        <Link href="/" className="hover:underline">{txt.breadcrumbHome}</Link> / <span>{txt.breadcrumbPage}</span>
      </nav>

      <header className="mt-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-neutral-900 dark:text-white">{txt.h1}</h1>
        <p className="mt-5 text-lg leading-8">
          {txt.leadBefore}
          <strong>Arol Djoutsop</strong>
          {txt.leadAfter}
        </p>
        <p className="mt-3 text-sm text-neutral-500">
          {txt.byline}
          <time dateTime={UPDATED}>{txt.updated}</time>
        </p>
      </header>

      <section className="mt-12">
        <h2 className={h2}>{txt.whatTitle}</h2>
        <p className="mt-4 leading-7">{txt.whatBody}</p>
      </section>

      <section className="mt-12">
        <h2 className={h2}>{txt.servicesTitle}</h2>
        <ol className="mt-6 space-y-10">
          {services.map((s, i) => (
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
        <h2 className={h2}>{txt.methodTitle}</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-2 leading-7">
          {txt.method.map(([title, rest]) => (
            <li key={title}>
              <strong>{title}</strong> {rest}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12">
        <h2 className={h2}>{txt.devTitle}</h2>
        <p className="mt-4 leading-7">{txt.devBody}</p>
      </section>

      <section className="mt-12" id="faq">
        <h2 className={h2}>{txt.faqTitle}</h2>
        <div className="mt-4 space-y-6">
          {faq.map((f) => (
            <div key={f.q}>
              <h3 className="font-semibold text-neutral-900 dark:text-white">{f.q}</h3>
              <p className="mt-1 leading-7">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 text-center">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">{txt.ctaTitle}</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">{txt.ctaBody}</p>
        <Link
          href="/#contact"
          className="mt-5 inline-flex items-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600"
        >
          {txt.ctaButton}
        </Link>
      </section>
    </article>
  );
}
