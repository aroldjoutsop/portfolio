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
