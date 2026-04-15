export type Category = "ai" | "compliance" | "infra";

export type Article = {
  slug: string;
  category: Category;
  author: string;
  date: string;
  readTime: string;
  title: { en: string; de: string };
  excerpt: { en: string; de: string };
};

export const ARTICLES: Article[] = [
  {
    slug: "dsgvo-ai-2026",
    category: "compliance",
    author: "Elena Petrov",
    date: "April 2026",
    readTime: "11 min",
    title: {
      en: "DSGVO-compliant AI: What companies need to know in 2026 before going to production.",
      de: "DSGVO-konformes KI: Was Unternehmen 2026 wissen müssen, bevor sie deployen.",
    },
    excerpt: {
      en: "Between Article 22, the EU AI Act, and the first GDPR fines for AI systems, the regulatory landscape for enterprise AI has changed dramatically. A practical guide for software teams.",
      de: "Zwischen Artikel 22, dem EU AI Act und den ersten DSGVO-Bußgeldern wegen KI-Systemen hat sich die regulatorische Landschaft für Enterprise-KI dramatisch verändert. Ein praktischer Leitfaden für Softwareteams.",
    },
  },
  {
    slug: "ai-deployment-enterprise",
    category: "ai",
    author: "Marcus Hoffmann",
    date: "March 2026",
    readTime: "9 min",
    title: {
      en: "AI pilots don't fail on the model. They fail on deployment.",
      de: "KI-Piloten scheitern nicht am Modell. Sie scheitern beim Deployment.",
    },
    excerpt: {
      en: "We've reviewed dozens of enterprise AI projects in the last 18 months. The pattern is always the same: the model works fine in the PoC. Then reality shows up.",
      de: "Wir haben Dutzende Enterprise-KI-Projekte in den letzten 18 Monaten begleitet. Das Muster ist immer dasselbe: Das Modell funktioniert gut im PoC. Dann kommt die Realität.",
    },
  },
  {
    slug: "eu-cloud-hosting",
    category: "infra",
    author: "Jonas Weber",
    date: "March 2026",
    readTime: "8 min",
    title: {
      en: "Why European companies need to rethink their cloud strategy now.",
      de: "Warum europäische Unternehmen ihre Cloud-Strategie jetzt überdenken müssen.",
    },
    excerpt: {
      en: "Schrems II was just the beginning. The EU AI Act is the next step. Data sovereignty is no longer a compliance checkbox — it is a competitive advantage.",
      de: "Schrems II war der Anfang. Der EU AI Act ist der nächste Schritt. Datensouveränität ist kein Compliance-Checkbox mehr — es ist ein Wettbewerbsvorteil.",
    },
  },
];

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
