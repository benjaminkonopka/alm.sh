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
    slug: "claude-design-tool",
    category: "ai",
    author: "Elena Petrov",
    date: "April 2026",
    readTime: "8 min",
    title: {
      en: "Anthropic is suddenly shipping design software. Figma's stock already noticed.",
      de: "Anthropic baut plötzlich Design-Software. Figmas Aktie hat es schon gemerkt.",
    },
    excerpt: {
      en: "Claude Design turns a prompt into decks, prototypes, and one-pagers — and reads your codebase to apply your design system. This is not another v0 clone. It is the moment Anthropic moved from model vendor to workflow vendor.",
      de: "Claude Design macht aus einem Prompt Decks, Prototypen und One-Pager — und liest deine Codebase, um dein Design-System anzuwenden. Das ist kein weiterer v0-Klon. Das ist der Moment, in dem Anthropic vom Modell-Anbieter zum Workflow-Anbieter wird.",
    },
  },
  {
    slug: "agentic-workflows-agencies",
    category: "ai",
    author: "Marcus Hoffmann",
    date: "April 2026",
    readTime: "8 min",
    title: {
      en: "Agents don't replace agencies. They replace the parts that were already broken.",
      de: "Agenten ersetzen keine Agenturen. Sie ersetzen die Teile, die ohnehin kaputt waren.",
    },
    excerpt: {
      en: "Agentic workflows are the loudest pitch in the industry right now. After shipping a dozen of them with clients, here is what actually works — and what is just a demo dressed up as transformation.",
      de: "Agentische Workflows sind gerade der lauteste Pitch der Branche. Nach einem Dutzend Auslieferungen mit Kunden wissen wir, was wirklich funktioniert — und was nur eine Demo im Transformations-Kostüm ist.",
    },
  },
  {
    slug: "geo-not-seo",
    category: "ai",
    author: "Elena Petrov",
    date: "April 2026",
    readTime: "7 min",
    title: {
      en: "Your homepage isn't ranking on Google anymore. ChatGPT is citing it — or it isn't.",
      de: "Deine Homepage rankt nicht mehr bei Google. ChatGPT zitiert sie — oder eben nicht.",
    },
    excerpt: {
      en: "Generative Engine Optimization is not SEO with a new acronym. The unit of distribution has shifted from blue links to model citations, and the things you optimize for are different.",
      de: "Generative Engine Optimization ist nicht SEO mit neuem Akronym. Die Einheit der Distribution hat sich von blauen Links zu Modell-Zitaten verschoben — und die Dinge, für die man optimiert, sind andere.",
    },
  },
  {
    slug: "ai-media-buying-agencies",
    category: "ai",
    author: "Jonas Weber",
    date: "April 2026",
    readTime: "9 min",
    title: {
      en: "The button-pusher era of media buying is over. So is the easy money.",
      de: "Die Button-Drücker-Ära im Media Buying ist vorbei. Das einfache Geld auch.",
    },
    excerpt: {
      en: "Performance Max, Advantage+, and Koa have absorbed most of the work that used to fill agency timesheets. The agencies that still win are the ones that figured out what the algorithm cannot see.",
      de: "Performance Max, Advantage+ und Koa haben das meiste übernommen, was früher die Agentur-Stundenzettel gefüllt hat. Die Agenturen, die noch gewinnen, haben verstanden, was der Algorithmus nicht sieht.",
    },
  },
  {
    slug: "reasoning-models-cost",
    category: "ai",
    author: "Marcus Hoffmann",
    date: "April 2026",
    readTime: "8 min",
    title: {
      en: "Reasoning models cost 50× more. Here is when they are actually worth it.",
      de: "Reasoning-Modelle kosten 50× mehr. Hier ist, wann sie sich tatsächlich lohnen.",
    },
    excerpt: {
      en: "OpenAI o3 and Claude Opus with extended thinking are not drop-in replacements for GPT-4o. They solve a different shape of problem — and using them on the wrong shape is how you burn a budget.",
      de: "OpenAI o3 und Claude Opus mit Extended Thinking sind kein Drop-in-Ersatz für GPT-4o. Sie lösen eine andere Art von Problem — und wer sie auf der falschen Form einsetzt, verbrennt Budget.",
    },
  },
  {
    slug: "prompt-to-prototype",
    category: "ai",
    author: "Elena Petrov",
    date: "April 2026",
    readTime: "7 min",
    title: {
      en: "Stop pitching mockups. Pitch working software.",
      de: "Hört auf, Mockups zu pitchen. Pitcht funktionierende Software.",
    },
    excerpt: {
      en: "v0, Lovable, and Figma Make have collapsed the distance between an idea and a clickable prototype to about an hour. The agencies still selling static Figma boards are pricing themselves out of the room.",
      de: "v0, Lovable und Figma Make haben den Weg von der Idee zum klickbaren Prototyp auf etwa eine Stunde verkürzt. Wer noch statische Figma-Boards verkauft, preist sich selbst aus dem Raum.",
    },
  },
  {
    slug: "eu-ai-act-brand-safety",
    category: "compliance",
    author: "Jonas Weber",
    date: "April 2026",
    readTime: "9 min",
    title: {
      en: "The EU AI Act doesn't care about your brand guidelines. It cares about your training data.",
      de: "Der EU AI Act interessiert sich nicht für deine Brand Guidelines. Er interessiert sich für deine Trainingsdaten.",
    },
    excerpt: {
      en: "Brand-safety AI used to mean a profanity filter and a logo check. In 2026, it means a documented chain of custody for every model, every dataset, and every output that touches a campaign.",
      de: "Brand-Safety-KI war früher ein Profanity-Filter und ein Logo-Check. 2026 heißt es: dokumentierte Chain of Custody für jedes Modell, jeden Datensatz und jedes Output, das in eine Kampagne fließt.",
    },
  },
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
