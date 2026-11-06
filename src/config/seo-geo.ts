// Source unique de l'offre SEO & GEO : utilisée par la page /seo-geo/,
// le JSON-LD (OfferCatalog) et llms.txt. Modifier ici, pas ailleurs.

export const SITE_URL = 'https://aroldjoutsop.tech';
export const PERSON_ID = `${SITE_URL}/#person`;
export const SERVICE_ID = `${SITE_URL}/#seo-geo`;

export const seoGeoServices = [
  {
    id: 'geo-llm',
    name: 'Optimisation GEO et visibilité dans les LLM',
    summary:
      "J'analyse et j'améliore la présence d'une marque dans les réponses générées par les moteurs d'IA et les modèles de langage (ChatGPT, Gemini, Perplexity, Claude, Copilot, Google AI Overviews).",
    deliverables: [
      "Audit de présence : ce que les assistants IA disent de la marque, de ses concurrents et de sa catégorie",
      "Cartographie des sources que les moteurs d'IA citent dans votre secteur",
      "Plan d'action pour devenir une source citée : contenus, mentions tierces, cohérence de l'entité",
    ],
  },
  {
    id: 'contenu-ia',
    name: "Stratégie de contenu adaptée à l'IA",
    summary:
      "J'optimise la structure, la pertinence et la fiabilité des contenus pour que les systèmes d'IA les comprennent, les extraient et les réutilisent facilement.",
    deliverables: [
      "Pages « réponse d'abord » : définition, chiffres et conclusion dès le premier paragraphe",
      "Structure claire (titres en questions, listes, tableaux, FAQ) et sources vérifiables",
      "Signaux de fiabilité : auteur identifié, dates de mise à jour, expérience démontrée",
    ],
  },
  {
    id: 'seo-technique-editorial',
    name: 'Optimisation SEO technique et éditoriale',
    summary:
      "Je réalise des audits, j'identifie les axes d'amélioration et je mets en œuvre les optimisations on-page et off-page.",
    deliverables: [
      'Audit technique : indexation, crawl, performances (Core Web Vitals), rendu JavaScript, maillage',
      'Optimisations on-page : balises, contenus, liens internes, images',
      'Off-page : netlinking qualitatif, citations locales, relations presse numériques',
    ],
  },
  {
    id: 'mots-cles-intentions',
    name: 'Recherche de mots-clés et analyse des intentions',
    summary:
      'J\'identifie les opportunités de positionnement sur les moteurs classiques et sur les interfaces de recherche conversationnelle.',
    deliverables: [
      'Recherche de mots-clés et regroupement par intention (informationnelle, comparative, transactionnelle)',
      'Banque de questions conversationnelles réellement posées aux assistants IA',
      'Priorisation par potentiel business et difficulté',
    ],
  },
  {
    id: 'donnees-structurees',
    name: 'Données structurées et accessibilité des contenus',
    summary:
      "J'optimise le balisage Schema.org et les éléments qui aident les moteurs de recherche et les IA à interpréter les contenus.",
    deliverables: [
      'Balisage JSON-LD : Organization, Person, Product, Service, FAQPage, Article, LocalBusiness…',
      'Fichiers llms.txt, robots.txt et sitemap pensés pour les robots des moteurs d\'IA',
      'HTML sémantique et accessibilité (contenus lisibles sans JavaScript)',
    ],
  },
  {
    id: 'mesure-visibilite',
    name: 'Mesure de la visibilité et des performances',
    summary:
      "Je suis les positions, le trafic organique, les mentions de marque et la présence dans les réponses générées par l'IA.",
    deliverables: [
      'Tableau de bord : Google Search Console, Bing Webmaster Tools, analytics',
      "Suivi mensuel d'un panel de requêtes dans les principaux assistants IA (taux de mention, de citation, sentiment)",
      "Mesure du trafic référent issu des moteurs d'IA",
    ],
  },
  {
    id: 'veille',
    name: 'Veille technologique SEO, LLM et GEO',
    summary:
      "Je suis les évolutions des moteurs de recherche, des modèles de langage et des pratiques GEO pour proposer des stratégies à jour.",
    deliverables: [
      'Note de veille mensuelle adaptée à votre secteur',
      "Ajustement de la stratégie après chaque évolution majeure (mises à jour Google, nouveaux moteurs d'IA)",
    ],
  },
] as const;

export const seoGeoFaq = [
  {
    q: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
    a: "Le GEO regroupe les pratiques qui augmentent les chances qu'une marque soit mentionnée, recommandée ou citée comme source dans les réponses des moteurs d'IA générative comme ChatGPT, Gemini, Perplexity, Claude ou les AI Overviews de Google.",
  },
  {
    q: 'Quelle est la différence entre SEO et GEO ?',
    a: "Le SEO vise à bien classer des pages dans une liste de résultats. Le GEO vise à faire entrer la marque dans une réponse rédigée par une IA. Les deux se complètent : un site bien référencé, clair et cité par des sources fiables a plus de chances d'être repris par les IA.",
  },
  {
    q: "Comment mesurer la présence d'une marque dans les réponses des IA ?",
    a: "On définit un panel de questions que vos clients posent, on les soumet régulièrement aux principaux assistants, et on suit le taux de mention, le taux de citation de votre site, la position dans la réponse et le ton employé. On complète avec le trafic référent venant des moteurs d'IA.",
  },
  {
    q: 'Combien de temps faut-il pour voir des résultats ?',
    a: "Les corrections techniques et le balisage agissent en quelques semaines. Les gains de visibilité dans les moteurs d'IA dépendent des mentions et contenus publiés et se mesurent généralement sur trois à six mois.",
  },
  {
    q: "Travaillez-vous avec des entreprises hors du Cameroun ?",
    a: "Oui. Je suis basé à Yaoundé et je travaille à distance avec des clients en Afrique, en Europe et ailleurs, en français et en anglais.",
  },
] as const;

// ---- Version anglaise (affichée quand le visiteur bascule en EN) ----

export const seoGeoServicesEn = [
  {
    id: 'geo-llm',
    name: 'GEO and LLM visibility optimization',
    summary:
      'I analyze and improve how a brand appears in answers generated by AI engines and language models (ChatGPT, Gemini, Perplexity, Claude, Copilot, Google AI Overviews).',
    deliverables: [
      'Presence audit: what AI assistants say about the brand, its competitors and its category',
      'Map of the sources AI engines cite in your industry',
      'Action plan to become a cited source: content, third-party mentions, entity consistency',
    ],
  },
  {
    id: 'contenu-ia',
    name: 'AI-ready content strategy',
    summary:
      'I optimize the structure, relevance and reliability of content so AI systems can easily understand, extract and reuse it.',
    deliverables: [
      'Answer-first pages: definition, figures and conclusion in the first paragraph',
      'Clear structure (question headings, lists, tables, FAQ) and verifiable sources',
      'Trust signals: named author, update dates, demonstrated experience',
    ],
  },
  {
    id: 'seo-technique-editorial',
    name: 'Technical and editorial SEO',
    summary:
      'I run audits, identify areas for improvement and implement on-page and off-page optimizations.',
    deliverables: [
      'Technical audit: indexing, crawling, performance (Core Web Vitals), JavaScript rendering, internal linking',
      'On-page optimization: tags, content, internal links, images',
      'Off-page: quality link building, local citations, digital PR',
    ],
  },
  {
    id: 'mots-cles-intentions',
    name: 'Keyword research and search intent analysis',
    summary:
      'I identify ranking opportunities on traditional search engines and on conversational search interfaces.',
    deliverables: [
      'Keyword research grouped by intent (informational, comparative, transactional)',
      'A bank of conversational questions people actually ask AI assistants',
      'Prioritization by business potential and difficulty',
    ],
  },
  {
    id: 'donnees-structurees',
    name: 'Structured data and content accessibility',
    summary:
      'I optimize Schema.org markup and the elements that help search engines and AI interpret your content.',
    deliverables: [
      'JSON-LD markup: Organization, Person, Product, Service, FAQPage, Article, LocalBusiness…',
      'llms.txt, robots.txt and sitemap files designed for AI crawlers',
      'Semantic HTML and accessibility (content readable without JavaScript)',
    ],
  },
  {
    id: 'mesure-visibilite',
    name: 'Visibility and performance tracking',
    summary:
      'I track rankings, organic traffic, brand mentions and presence in AI-generated answers.',
    deliverables: [
      'Dashboard: Google Search Console, Bing Webmaster Tools, analytics',
      'Monthly tracking of a query panel in the main AI assistants (mention rate, citation rate, sentiment)',
      'Measurement of referral traffic from AI engines',
    ],
  },
  {
    id: 'veille',
    name: 'SEO, LLM and GEO monitoring',
    summary:
      'I follow changes in search engines, language models and GEO practices to keep your strategy up to date.',
    deliverables: [
      'Monthly monitoring note tailored to your industry',
      'Strategy adjustments after each major change (Google updates, new AI engines)',
    ],
  },
] as const;

export const seoGeoFaqEn = [
  {
    q: 'What is GEO (Generative Engine Optimization)?',
    a: 'GEO covers the practices that increase the chances of a brand being mentioned, recommended or cited as a source in the answers of generative AI engines such as ChatGPT, Gemini, Perplexity, Claude or Google AI Overviews.',
  },
  {
    q: 'What is the difference between SEO and GEO?',
    a: 'SEO aims to rank pages in a list of results. GEO aims to get the brand into an answer written by an AI. They work together: a site that ranks well, is clear and is cited by trusted sources is more likely to be picked up by AI.',
  },
  {
    q: "How do you measure a brand's presence in AI answers?",
    a: 'We define a panel of questions your customers ask, submit them regularly to the main assistants, and track mention rate, how often your site is cited, position in the answer and tone. We add referral traffic from AI engines.',
  },
  {
    q: 'How long does it take to see results?',
    a: 'Technical fixes and markup take effect within a few weeks. Visibility gains in AI engines depend on the mentions and content published and are usually measured over three to six months.',
  },
  {
    q: 'Do you work with companies outside Cameroon?',
    a: 'Yes. I am based in Yaoundé and work remotely with clients in Africa, Europe and elsewhere, in French and English.',
  },
] as const;

export const seoGeoPageText = {
  fr: {
    breadcrumbHome: 'Accueil',
    breadcrumbPage: 'SEO & GEO',
    h1: 'Consultant SEO & GEO : rendre votre marque visible sur Google et dans les réponses des IA',
    leadBefore: 'Je suis ',
    leadAfter:
      ", ingénieur logiciel et consultant SEO & GEO basé à Yaoundé (Cameroun). J'aide les entreprises à être trouvées sur Google et à être mentionnées, recommandées et citées comme source par les moteurs d'IA générative (ChatGPT, Gemini, Perplexity, Claude, Copilot, AI Overviews de Google). Je travaille à distance, en français et en anglais.",
    byline: 'Par Arol Djoutsop · Mis à jour le ',
    updated: '6 novembre 2026',
    whatTitle: "Qu'est-ce que le GEO ?",
    whatBody:
      "Le GEO (Generative Engine Optimization) est l'ensemble des pratiques qui augmentent les chances qu'une marque apparaisse dans une réponse rédigée par une IA. Là où le SEO cherche à classer une page dans une liste de liens, le GEO cherche à faire de votre marque la réponse — ou la source citée. Les deux reposent sur la même base : un site techniquement sain, des contenus clairs et fiables, et des mentions dans des sources tierces reconnues.",
    servicesTitle: 'Mes services',
    methodTitle: 'Ma méthode',
    method: [
      ['Diagnostic', ': audit SEO technique et éditorial, et état des lieux de ce que les IA disent de vous.'],
      ['Priorités', ': mots-clés, questions conversationnelles et pages à créer ou corriger, classés par impact.'],
      ['Mise en œuvre', ': corrections techniques, contenus, balisage Schema.org, mentions externes. Développeur, je peux intervenir directement dans le code.'],
      ['Mesure', ': suivi mensuel des positions, du trafic organique et de la présence dans les réponses des IA.'],
    ],
    devTitle: 'Pourquoi un développeur pour le SEO et le GEO ?',
    devBody:
      'Une grande partie des blocages vient du code : contenus rendus uniquement en JavaScript, balisage absent, pages lentes, robots bloqués. En tant que développeur full-stack (React, Next.js, Node.js, Flutter), je diagnostique et je corrige ces problèmes moi-même, sans intermédiaire.',
    faqTitle: 'Questions fréquentes',
    ctaTitle: 'Voyons ce que les IA disent de votre marque',
    ctaBody: 'Premier échange gratuit, réponse sous 24 h.',
    ctaButton: 'Me contacter',
  },
  en: {
    breadcrumbHome: 'Home',
    breadcrumbPage: 'SEO & GEO',
    h1: 'SEO & GEO consultant: making your brand visible on Google and in AI answers',
    leadBefore: "I'm ",
    leadAfter:
      ', a software engineer and SEO & GEO consultant based in Yaoundé, Cameroon. I help businesses get found on Google and get mentioned, recommended and cited as a source by generative AI engines (ChatGPT, Gemini, Perplexity, Claude, Copilot, Google AI Overviews). I work remotely, in French and English.',
    byline: 'By Arol Djoutsop · Updated ',
    updated: 'November 6, 2026',
    whatTitle: 'What is GEO?',
    whatBody:
      'GEO (Generative Engine Optimization) is the set of practices that increase the chances of a brand appearing in an answer written by an AI. Where SEO aims to rank a page in a list of links, GEO aims to make your brand the answer — or the cited source. Both rest on the same foundation: a technically sound site, clear and reliable content, and mentions in recognized third-party sources.',
    servicesTitle: 'My services',
    methodTitle: 'My approach',
    method: [
      ['Diagnosis', ': technical and editorial SEO audit, plus a review of what AI says about you.'],
      ['Priorities', ': keywords, conversational questions and pages to create or fix, ranked by impact.'],
      ['Implementation', ': technical fixes, content, Schema.org markup, external mentions. As a developer, I can work directly in the code.'],
      ['Measurement', ': monthly tracking of rankings, organic traffic and presence in AI answers.'],
    ],
    devTitle: 'Why a developer for SEO and GEO?',
    devBody:
      'Many blockers come from the code: content rendered only in JavaScript, missing markup, slow pages, blocked crawlers. As a full-stack developer (React, Next.js, Node.js, Flutter), I diagnose and fix these issues myself, with no middleman.',
    faqTitle: 'Frequently asked questions',
    ctaTitle: "Let's see what AI says about your brand",
    ctaBody: 'Free first call, reply within 24 hours.',
    ctaButton: 'Contact me',
  },
} as const;
