/* ── alm.sh i18n engine ─────────────────────────────────────────────────
   Usage: include this file, then call window.setLang('en'|'de').
   The lang toggle in the nav fires setLang automatically.
   Preference is persisted to localStorage under 'alm-lang'.
   ─────────────────────────────────────────────────────────────────────── */

const TRANSLATIONS = {
  en: {
    nav: {
      work:         'Work',
      industries:   'Industries',
      perspectives: 'Perspectives',
      about:        'About',
      careers:      'Careers',
      cta:          "Let's talk"
    },
    hero: {
      eyebrow: 'Digital Engineering · Munich',
      headline: 'The engineering<br>partner <em>Europe\'s</em><br>enterprises<br>build with.',
      subline:  'We ship the software, AI and digital products that European brands like Roche, BMW and ProSiebenSat.1 run their business on.',
      cta1:     'Our work',
      cta2:     'How we work',
      meta1:    'Munich',
      meta2:    'Berlin',
      meta3:    'Independent',
      meta4:    'European by design',
      scroll:   'Scroll',
      geo:      'Engineering. Precision.'
    },
    proof: {
      kicker: "Trusted by Europe's most demanding brands",
      stat1:  'Years engineering<br>European enterprises',
      stat2:  'Shipped products<br>in production',
      stat3:  'European markets<br>served',
      stat4:  'Engineers, designers<br>and AI specialists'
    },
    cases: {
      title: 'Selected work.',
      link:  'All case studies',
      c1: {
        num:      '01 / 03',
        client:   'Built with BMW',
        headline: 'We engineered the EV charging experience for 2.4M+ European drivers.',
        body:     "In partnership with BMW's digital unit, alm delivered a unified charging and payment flow that replaced three legacy systems across 8 European markets.",
        m1l: 'Active users', m2l: 'Support tickets', m3l: 'Markets launched',
        link: 'Read the story'
      },
      c2: {
        num:      '02 / 03',
        client:   'Built with ProSiebenSat.1',
        headline: 'We rebuilt the streaming infrastructure that 12M+ Europeans rely on monthly.',
        body:     'A complete re-engineering of the content delivery platform — from monolith to event-driven architecture — handling peak loads across five broadcasting brands simultaneously.',
        m1l: 'Monthly active users', m2l: 'Uptime achieved', m3l: 'Brands migrated',
        link: 'Read the story'
      },
      c3: {
        num:      '03 / 03',
        client:   'Built with Roche',
        headline: 'We shipped the clinical data platform 4,000+ researchers depend on.',
        body:     'A regulated, IEC 62304-compliant platform for clinical data management — engineered to meet the strictest EU MDR requirements while remaining fast enough for daily research workflows.',
        m1l: 'Active researchers', m2l: 'Compliant', m3l: 'Data retrieval time',
        link: 'Read the story'
      }
    },
    industries: {
      title: 'Industry practices.',
      link:  'All industries',
      i1: { name: 'Automotive<br>&amp; Mobility',           desc: "Connected vehicles, EV charging, fleet management, and in-car digital experiences for Europe's automotive leaders.",               client: 'Recent: BMW' },
      i2: { name: 'Media &amp;<br>Entertainment',           desc: 'Streaming platforms, content ops, and audience technology at broadcast scale.',                                                      client: 'Recent: ProSiebenSat.1' },
      i3: { name: 'Pharma &amp;<br>Life Sciences',          desc: 'Regulated software, clinical tools, and patient-facing platforms under EU MDR and IEC 62304.',                                      client: 'Recent: Roche' },
      i4: { name: 'Insurance &amp;<br>Financial Services',  desc: 'Digital claims, broker platforms, compliance tooling, and customer portals at enterprise scale.',                                    client: 'Recent: Allianz' },
      i5: { name: 'Retail &amp;<br>Commerce',               desc: 'Store technology, loyalty platforms, omnichannel commerce, and POS integrations.',                                                  client: 'Recent: MediaMarkt' },
      i6: { name: 'Classifieds &amp;<br>Marketplaces',      desc: 'Platform engineering, trust and safety, search infrastructure, and growth tooling for marketplace leaders.',                        client: 'Recent: Scout24' }
    },
    capabilities: {
      title: 'Capabilities.',
      c1: { name: 'Digital Products',   desc: 'Scalable, secure web and mobile applications engineered for European enterprise requirements — from MVP to mission-critical production.' },
      c2: { name: 'AI Engineering',     desc: 'Custom LLM integrations, RAG architectures, and intelligent agents that ship into regulated production environments — not just PoCs.' },
      c3: { name: 'Design &amp; Research', desc: 'User research, UX strategy, and systems-level UI design that serves both end users and enterprise governance requirements.' },
      c4: { name: 'Media Production',   desc: 'Video, podcasts, and content for enterprise brands — produced to broadcast quality, distributed for digital-first audiences.' }
    },
    eaa: {
      label:     'An alm initiative',
      title:     'The EAA Compliance Checker.',
      body:      'The European Accessibility Act came into force in June 2025. We built a free tool that helps European companies assess where they stand — and what it takes to get compliant before enforcement begins.',
      statLabel: 'companies have checked<br>their compliance so far',
      cta1:      'Try the tool',
      cta2:      'Read the report',
      barLabel:  'EAA Compliance Score',
      barOverall:'Overall · Partial Compliance'
    },
    perspectives: {
      title: 'Perspectives.',
      link:  'All articles',
      p1: { tag: 'Engineering · AI',   title: "Why European automotive needs its own AI stack — and why importing one from Silicon Valley won't work.", date: 'March 2026' },
      p2: { tag: 'Product',            title: "AI pilots don't fail on the model. They fail on deployment.",                                           date: 'February 2026' },
      p3: { tag: 'Compliance · EAA',  title: 'The hidden cost of non-compliance under the EAA — and who is most exposed.',                            date: 'January 2026' }
    },
    about: {
      title: 'An independent engineering firm.<br>Headquartered in Munich.',
      body:  'alm is not a creative agency. We are an engineering partner — independent from holdings, embedded in European enterprise reality, and accountable to outcomes that ship into production and stay there.',
      badge: 'Independent · No holding, no compromise',
      s1: 'Year founded,<br>Munich',
      s2: 'Engineers, designers<br>&amp; AI specialists',
      s3: 'Products shipped<br>into production',
      s4: 'European markets<br>served'
    },
    careers: {
      title:    'Open positions.',
      sub:      "We're growing our engineering, design,<br>and AI teams. Munich, Berlin, and remote.",
      r1: { name: 'Senior Backend Engineer', meta: 'Munich · Full-time',          tag: 'Engineering' },
      r2: { name: 'AI/ML Engineer',          meta: 'Munich / Remote · Full-time', tag: 'AI' },
      r3: { name: 'Senior UX Designer',      meta: 'Munich · Full-time',          tag: 'Design' },
      r4: { name: 'Engineering Lead',        meta: 'Munich · Full-time',          tag: 'Leadership' },
      allRoles: 'All 8 open roles'
    },
    footer: {
      tagline: "The engineering partner Europe's enterprises build with. Independent. Munich-born. European by design.",
      address: 'alm engineering GmbH<br>Munich, Germany',
      col1:    'Work',      col2: 'Services',  col3: 'Company',
      links1:  ['Automotive &amp; Mobility','Media &amp; Entertainment','Pharma &amp; Life Sciences','Insurance &amp; Finance','Retail &amp; Commerce','Classifieds &amp; Marketplaces'],
      links2:  ['Digital Products','AI Engineering','Design &amp; Research','Media Production','EAA Checker'],
      links3:  ['About alm','Perspectives','Careers','Press','GitHub','LinkedIn'],
      legal:   '© 2026 alm engineering GmbH · Engineered in Europe. For Europe.',
      imprint: 'Imprint', privacy: 'Privacy', terms: 'Terms'
    },
    blog: {
      eyebrow:  'Perspectives — alm engineering',
      title:    'The<br>hard<br>stuff.',
      desc:     'Deep technical writing on AI engineering, DSGVO compliance, European cloud infrastructure, and what it actually takes to ship software that European enterprises run on.',
      countL1:  'Articles', countL2: 'Topics', countL3: 'Authors',
      filterAll: 'All', filterAI: 'AI Engineering', filterCompliance: 'Compliance', filterInfra: 'Infrastructure',
      featured: {
        tag:      'Compliance · AI',
        title:    'DSGVO-compliant AI: What companies need to know in 2026 before going to production.',
        excerpt:  'Between Article 22, the EU AI Act, and the first GDPR fines for AI systems, the regulatory landscape for enterprise AI has changed dramatically. A practical guide for software teams.',
        date:     'April 2026 · 11 min read',
        link:     'Read article'
      },
      a1: { tag: 'AI Engineering',    title: "AI pilots don't fail on the model. They fail on deployment.", excerpt: "We've reviewed dozens of enterprise AI projects in the last 18 months. The pattern is always the same: the model works fine in the PoC. Then reality shows up.", date: 'March 2026 · 9 min' },
      a2: { tag: 'Infrastructure',    title: "Why European companies need to rethink their cloud strategy now.", excerpt: 'Schrems II was just the beginning. The EU AI Act is the next step. Data sovereignty is no longer a compliance checkbox — it is a competitive advantage.', date: 'March 2026 · 8 min' },
      a3: { tag: 'AI Engineering',    title: 'RAG vs. Fine-Tuning: The right tool for enterprise AI — and why the question is usually framed wrong.', excerpt: "Most discussions about RAG vs. Fine-Tuning miss the real point. It's not about the technology. It's about which data must be available at inference time — and which compliance rules apply.", date: 'Feb 2026 · 12 min' },
      a4: { tag: 'Compliance · EAA', title: 'The hidden cost of non-compliance under the European Accessibility Act.', excerpt: 'The EAA came into force in June 2025. Enforcement starts in 2026. Most enterprise web applications are not ready — and the consequences extend beyond fines.', date: 'Jan 2026 · 7 min' },
      a5: { tag: 'Compliance · AI Act', title: 'The EU AI Act: What developers and product teams need to do now.', excerpt: 'The EU AI Act is not an abstract regulatory document. It defines requirements for documentation, testing, monitoring and transparency that software teams must now build into their development processes.', date: 'Jan 2026 · 10 min' },
      a6: { tag: 'AI Engineering · Automotive', title: 'Why European automotive companies need their own AI stack.', excerpt: 'Tesla trains on petabytes of its own data. European OEMs have the same data — but barely use it. This is not a technical question. It is a strategic one.', date: 'Dec 2025 · 8 min' },
      a7: { tag: 'Infrastructure · Strategy', title: 'Data sovereignty as a strategic competitive advantage: What really counts after Schrems II.', excerpt: 'European companies still treat data sovereignty as a compliance obligation. The smartest ones treat it as a product feature. The difference is enormous.', date: 'Nov 2025 · 9 min' },
      a8: { tag: 'AI Engineering · LLM', title: 'LLM observability in production: Why classic API monitoring is not enough.', excerpt: 'When a REST endpoint returns bad results, you see it immediately in the error log. When an LLM delivers bad answers, you might not know for weeks — unless you build the right monitoring.', date: 'Oct 2025 · 11 min' },
      newsletter: {
        title:   'Deep reads, no noise.',
        sub:     'We publish when we have something worth saying. New articles on AI engineering, European compliance, and enterprise infrastructure — to your inbox.',
        placeholder: 'your@company.com',
        btn:     'Subscribe',
        note:    'No frequency commitment. Unsubscribe anytime. DSGVO-compliant.'
      }
    },
    article: {
      back:       '← All perspectives',
      related:    'Further reading',
      cta:        'Start a conversation →'
    }
  },

  de: {
    nav: {
      work:         'Projekte',
      industries:   'Branchen',
      perspectives: 'Perspektiven',
      about:        'Über uns',
      careers:      'Karriere',
      cta:          'Kontakt'
    },
    hero: {
      eyebrow: 'Digital Engineering · München',
      headline: 'Der Engineering-<br>Partner, mit dem<br><em>Europas</em><br>Unternehmen bauen.',
      subline:  'Wir liefern die Software, KI-Systeme und digitalen Produkte, auf denen europäische Marken wie Roche, BMW und ProSiebenSat.1 ihr Geschäft aufbauen.',
      cta1:     'Unsere Projekte',
      cta2:     'Wie wir arbeiten',
      meta1:    'München',
      meta2:    'Berlin',
      meta3:    'Unabhängig',
      meta4:    'Europäisch durch Prinzip',
      scroll:   'Scrollen',
      geo:      'Engineering. Präzision.'
    },
    proof: {
      kicker: 'Das Vertrauen der anspruchsvollsten Marken Europas',
      stat1:  'Jahre Engineering für<br>europäische Unternehmen',
      stat2:  'Produkte erfolgreich<br>in Produktion gebracht',
      stat3:  'Europäische Märkte<br>betreut',
      stat4:  'Engineers, Designer<br>und KI-Spezialisten'
    },
    cases: {
      title: 'Ausgewählte Projekte.',
      link:  'Alle Case Studies',
      c1: {
        num:      '01 / 03',
        client:   'Mit BMW gebaut',
        headline: 'Wir haben die EV-Ladeerfahrung für 2,4 Mio.+ europäische Fahrer entwickelt.',
        body:     'In Partnerschaft mit der Digitaleinheit von BMW lieferte alm einen einheitlichen Lade- und Zahlungsflow, der drei Legacy-Systeme in 8 europäischen Märkten ablöste.',
        m1l: 'Aktive Nutzer', m2l: 'Weniger Support-Tickets', m3l: 'Märkte gelauncht',
        link: 'Case Study lesen'
      },
      c2: {
        num:      '02 / 03',
        client:   'Mit ProSiebenSat.1 gebaut',
        headline: 'Wir haben die Streaming-Infrastruktur neu aufgebaut, auf die monatlich 12 Mio.+ Europäer setzen.',
        body:     'Ein vollständiges Re-Engineering der Content-Delivery-Plattform — von Monolith zu event-getriebener Architektur — mit gleichzeitiger Peak-Last für fünf Broadcasting-Marken.',
        m1l: 'Monatlich aktive Nutzer', m2l: 'Uptime erreicht', m3l: 'Marken migriert',
        link: 'Case Study lesen'
      },
      c3: {
        num:      '03 / 03',
        client:   'Mit Roche gebaut',
        headline: 'Wir haben die klinische Datenplattform geliefert, auf die 4.000+ Forscher täglich angewiesen sind.',
        body:     'Eine regulierte, IEC-62304-konforme Plattform für das klinische Datenmanagement — entwickelt für die strengsten EU-MDR-Anforderungen, dabei schnell genug für den täglichen Forschungsalltag.',
        m1l: 'Aktive Forscher', m2l: 'EU MDR-konform', m3l: 'Schnellere Datenabrufe',
        link: 'Case Study lesen'
      }
    },
    industries: {
      title: 'Branchen-Expertise.',
      link:  'Alle Branchen',
      i1: { name: 'Automotive<br>&amp; Mobilität',          desc: 'Connected Vehicles, EV-Laden, Flottenmanagement und In-Car-Digitalerfahrungen für Europas Automobilhersteller.',                   client: 'Aktuell: BMW' },
      i2: { name: 'Medien &amp;<br>Entertainment',          desc: 'Streaming-Plattformen, Content-Operations und Audience-Technologie in Broadcast-Qualität.',                                          client: 'Aktuell: ProSiebenSat.1' },
      i3: { name: 'Pharma &amp;<br>Life Sciences',          desc: 'Regulierte Software, klinische Tools und patientenseitige Plattformen nach EU MDR und IEC 62304.',                                   client: 'Aktuell: Roche' },
      i4: { name: 'Versicherung &amp;<br>Financial Services',desc: 'Digitale Schadensmeldungen, Maklersysteme, Compliance-Tools und Kundenportale in Enterprise-Qualität.',                             client: 'Aktuell: Allianz' },
      i5: { name: 'Handel &amp;<br>Commerce',               desc: 'Store-Technologie, Loyalty-Plattformen, Omnichannel-Commerce und POS-Integrationen.',                                                client: 'Aktuell: MediaMarkt' },
      i6: { name: 'Classified &amp;<br>Marktplätze',        desc: 'Platform Engineering, Trust &amp; Safety, Such-Infrastruktur und Growth-Tools für Marktplatz-Leader.',                              client: 'Aktuell: Scout24' }
    },
    capabilities: {
      title: 'Leistungen.',
      c1: { name: 'Digitale Produkte',    desc: 'Skalierbare, sichere Web- und Mobile-Anwendungen für europäische Enterprise-Anforderungen — vom MVP bis zur mission-kritischen Produktion.' },
      c2: { name: 'KI Engineering',       desc: 'Individuelle LLM-Integrationen, RAG-Architekturen und intelligente Agenten, die in regulierten Produktionsumgebungen laufen — nicht nur als PoC.' },
      c3: { name: 'Design &amp; Research',desc: 'User Research, UX-Strategie und systemseitiges UI-Design für Endnutzer und Enterprise-Governance-Anforderungen gleichermaßen.' },
      c4: { name: 'Media Production',     desc: 'Video, Podcasts und Content für Enterprise-Marken — in Broadcast-Qualität produziert, für digitale Kanäle distribuiert.' }
    },
    eaa: {
      label:     'Eine alm-Initiative',
      title:     'Der EAA Compliance Checker.',
      body:      'Der European Accessibility Act trat im Juni 2025 in Kraft. Wir haben ein kostenloses Tool entwickelt, mit dem europäische Unternehmen ihren Stand prüfen — und erfahren, was für eine vollständige Konformität nötig ist.',
      statLabel: 'Unternehmen haben ihre<br>Konformität bereits geprüft',
      cta1:      'Tool ausprobieren',
      cta2:      'Bericht lesen',
      barLabel:  'EAA Compliance Score',
      barOverall:'Gesamt · Teilweise konform'
    },
    perspectives: {
      title: 'Perspektiven.',
      link:  'Alle Artikel',
      p1: { tag: 'Engineering · KI',  title: 'Warum europäische Automobilhersteller einen eigenen KI-Stack brauchen — und warum ein Import aus dem Silicon Valley nicht funktioniert.', date: 'März 2026' },
      p2: { tag: 'Produkt',           title: 'KI-Piloten scheitern nicht am Modell. Sie scheitern beim Deployment.',                                                                    date: 'Februar 2026' },
      p3: { tag: 'Compliance · EAA', title: 'Die versteckten Kosten der Nicht-Konformität unter dem EAA — und wer am stärksten betroffen ist.',                                        date: 'Januar 2026' }
    },
    about: {
      title: 'Ein unabhängiges Engineering-Unternehmen.<br>Mit Sitz in München.',
      body:  'alm ist keine Kreativagentur. Wir sind ein Engineering-Partner — unabhängig von Holdings, eingebettet in die europäische Enterprise-Realität und verantwortlich für Ergebnisse, die in die Produktion gehen und dort bleiben.',
      badge: 'Unabhängig · Kein Konzern, kein Kompromiss',
      s1: 'Gründungsjahr,<br>München',
      s2: 'Engineers, Designer<br>&amp; KI-Spezialisten',
      s3: 'Produkte in die<br>Produktion gebracht',
      s4: 'Europäische Märkte<br>betreut'
    },
    careers: {
      title:    'Offene Stellen.',
      sub:      'Wir wachsen in Engineering, Design<br>und KI. München, Berlin und Remote.',
      r1: { name: 'Senior Backend Engineer', meta: 'München · Vollzeit',          tag: 'Engineering' },
      r2: { name: 'KI/ML Engineer',          meta: 'München / Remote · Vollzeit', tag: 'KI' },
      r3: { name: 'Senior UX Designer',      meta: 'München · Vollzeit',          tag: 'Design' },
      r4: { name: 'Engineering Lead',        meta: 'München · Vollzeit',          tag: 'Leadership' },
      allRoles: 'Alle 8 offenen Stellen'
    },
    footer: {
      tagline: 'Der Engineering-Partner, mit dem Europas Unternehmen bauen. Unabhängig. In München gegründet. Europäisch durch Prinzip.',
      address: 'alm engineering GmbH<br>München, Deutschland',
      col1:    'Projekte',    col2: 'Leistungen', col3: 'Unternehmen',
      links1:  ['Automotive &amp; Mobilität','Medien &amp; Entertainment','Pharma &amp; Life Sciences','Versicherung &amp; Finance','Handel &amp; Commerce','Classified &amp; Marktplätze'],
      links2:  ['Digitale Produkte','KI Engineering','Design &amp; Research','Media Production','EAA Checker'],
      links3:  ['Über alm','Perspektiven','Karriere','Presse','GitHub','LinkedIn'],
      legal:   '© 2026 alm engineering GmbH · Entwickelt in Europa. Für Europa.',
      imprint: 'Impressum', privacy: 'Datenschutz', terms: 'AGB'
    },
    blog: {
      eyebrow:  'Perspektiven — alm engineering',
      title:    'Das<br>Wesentliche.',
      desc:     'Fundierte Beiträge zu KI Engineering, DSGVO-Konformität, europäischer Cloud-Infrastruktur und allem, was es wirklich braucht, um Software zu liefern, auf der europäische Unternehmen aufbauen.',
      countL1:  'Artikel', countL2: 'Themen', countL3: 'Autoren',
      filterAll: 'Alle', filterAI: 'KI Engineering', filterCompliance: 'Compliance', filterInfra: 'Infrastruktur',
      featured: {
        tag:     'Compliance · KI',
        title:   'DSGVO-konformes KI: Was Unternehmen 2026 wissen müssen, bevor sie deployen.',
        excerpt: 'Zwischen Artikel 22, dem EU AI Act und den ersten DSGVO-Bußgeldern wegen KI-Systemen hat sich die regulatorische Landschaft für Enterprise-KI dramatisch verändert. Ein praktischer Leitfaden für Softwareteams.',
        date:    'April 2026 · 11 Min. Lesezeit',
        link:    'Artikel lesen'
      },
      a1: { tag: 'KI Engineering',       title: 'KI-Piloten scheitern nicht am Modell. Sie scheitern beim Deployment.', excerpt: 'Wir haben Dutzende Enterprise-KI-Projekte in den letzten 18 Monaten begleitet. Das Muster ist immer dasselbe: Das Modell funktioniert gut im PoC. Dann kommt die Realität.', date: 'März 2026 · 9 Min.' },
      a2: { tag: 'Infrastruktur',         title: 'Warum europäische Unternehmen ihre Cloud-Strategie jetzt überdenken müssen.', excerpt: 'Schrems II war der Anfang. Der EU AI Act ist der nächste Schritt. Datensouveränität ist kein Compliance-Checkbox mehr — es ist ein Wettbewerbsvorteil.', date: 'März 2026 · 8 Min.' },
      a3: { tag: 'KI Engineering',        title: 'RAG vs. Fine-Tuning: Das richtige Werkzeug für Enterprise-KI — und warum die Frage meist falsch gestellt wird.', excerpt: 'Die meisten Diskussionen über RAG vs. Fine-Tuning verfehlen den eigentlichen Punkt. Es geht nicht um die Technologie. Es geht darum, welche Daten zur Inferenzzeit verfügbar sein müssen.', date: 'Feb 2026 · 12 Min.' },
      a4: { tag: 'Compliance · EAA',     title: 'Die versteckten Kosten der Nicht-Konformität unter dem European Accessibility Act.', excerpt: 'Der EAA trat im Juni 2025 in Kraft. Die Durchsetzung beginnt 2026. Die meisten Enterprise-Web-Anwendungen sind nicht bereit — und die Folgen gehen über Bußgelder hinaus.', date: 'Jan 2026 · 7 Min.' },
      a5: { tag: 'Compliance · AI Act',  title: 'Der EU AI Act: Was Entwickler und Produktteams jetzt konkret tun müssen.', excerpt: 'Der EU AI Act ist kein abstraktes Regulierungsdokument. Er definiert Anforderungen an Dokumentation, Testing, Monitoring und Transparenz, die Softwareteams jetzt einbauen müssen.', date: 'Jan 2026 · 10 Min.' },
      a6: { tag: 'KI Engineering · Automotive', title: 'Warum europäische Automobilhersteller ihren eigenen KI-Stack brauchen.', excerpt: 'Tesla trainiert auf Petabytes eigener Daten. Die europäischen OEMs haben dieselben Daten — aber nutzen sie kaum. Das ist keine technische Frage. Es ist eine strategische.', date: 'Dez 2025 · 8 Min.' },
      a7: { tag: 'Infrastruktur · Strategie', title: 'Datensouveränität als strategischer Wettbewerbsvorteil: Was nach Schrems II wirklich zählt.', excerpt: 'Europäische Unternehmen behandeln Datensouveränität noch immer als Compliance-Pflicht. Die klügsten behandeln sie als Produktmerkmal. Der Unterschied ist enorm.', date: 'Nov 2025 · 9 Min.' },
      a8: { tag: 'KI Engineering · LLM', title: 'LLM-Observability in Produktion: Warum klassisches API-Monitoring nicht reicht.', excerpt: 'Wenn ein REST-Endpoint schlechte Ergebnisse liefert, sieht man es sofort im Error-Log. Wenn ein LLM schlechte Antworten liefert, sieht man es erst Wochen später — es sei denn, man baut das richtige Monitoring.', date: 'Okt 2025 · 11 Min.' },
      newsletter: {
        title:       'Substanz statt Lärm.',
        sub:         'Wir publizieren, wenn wir etwas Relevantes zu sagen haben. Neue Artikel zu KI Engineering, europäischer Compliance und Enterprise-Infrastruktur — direkt in Ihr Postfach.',
        placeholder: 'ihre@firma.de',
        btn:         'Abonnieren',
        note:        'Keine feste Frequenz. Jederzeit kündbar. DSGVO-konform.'
      }
    },
    article: {
      back:    '← Alle Perspektiven',
      related: 'Weitere Artikel',
      cta:     'Gespräch anfragen →'
    }
  }
};

/* ── Engine ────────────────────────────────────────────────────────────── */
(function () {
  function get(lang, path) {
    return path.split('.').reduce((o, k) => (o || {})[k], TRANSLATIONS[lang]) ?? '';
  }
  function txt(sel, lang, key) {
    const el = document.querySelector(sel);
    if (el) el.textContent = get(lang, key);
  }
  function html(sel, lang, key) {
    const el = document.querySelector(sel);
    if (el) el.innerHTML = get(lang, key);
  }
  function btn(sel, lang, key) {
    // Sets text + preserves existing .arrow span
    const el = document.querySelector(sel);
    if (!el) return;
    const arrow = el.querySelector('.arrow');
    el.textContent = get(lang, key);
    if (arrow) el.appendChild(arrow);
  }

  window.setLang = function (lang) {
    if (!TRANSLATIONS[lang]) return;
    const t = TRANSLATIONS[lang];

    /* ── Nav ── */
    const navLinks = document.querySelectorAll('.nav-links a');
    const navKeys = ['nav.work','nav.industries','nav.perspectives','nav.about','nav.careers'];
    navLinks.forEach((a, i) => { if (navKeys[i]) a.textContent = get(lang, navKeys[i]); });
    btn('.nav-cta', lang, 'nav.cta');

    /* ── Hero ── */
    txt('.hero-eyebrow span', lang, 'hero.eyebrow');
    html('.hero-headline', lang, 'hero.headline');
    txt('.hero-subline', lang, 'hero.subline');
    btn('.hero-actions .btn-primary', lang, 'hero.cta1');
    btn('.hero-actions .btn-ghost',   lang, 'hero.cta2');
    const metaItems = document.querySelectorAll('.hero-meta-item');
    ['hero.meta1','hero.meta2','hero.meta3','hero.meta4'].forEach((k, i) => {
      if (metaItems[i]) metaItems[i].textContent = get(lang, k);
    });
    txt('.scroll-text', lang, 'hero.scroll');
    txt('.geo-label',   lang, 'hero.geo');

    /* ── Proof ── */
    txt('.proof-kicker .label', lang, 'proof.kicker');
    const statLabels = document.querySelectorAll('.proof-stat-label');
    ['proof.stat1','proof.stat2','proof.stat3','proof.stat4'].forEach((k, i) => {
      if (statLabels[i]) statLabels[i].innerHTML = get(lang, k);
    });

    /* ── Cases ── */
    txt('.cases .section-title', lang, 'cases.title');
    btn('.cases .section-link', lang, 'cases.link');
    document.querySelectorAll('.case-item').forEach((item, i) => {
      const c = t.cases['c' + (i + 1)];
      if (!c) return;
      const q = (s, v) => { const el = item.querySelector(s); if (el) el.textContent = v; };
      const qb = (s, v) => { const el = item.querySelector(s); if (el) { const ar = el.querySelector('.arrow'); el.textContent = v; if (ar) el.appendChild(ar); } };
      q('.case-number', c.num);
      q('.case-client', c.client);
      q('.case-headline', c.headline);
      q('.case-body', c.body);
      const ml = item.querySelectorAll('.case-metric-label');
      if (ml[0]) ml[0].textContent = c.m1l;
      if (ml[1]) ml[1].textContent = c.m2l;
      if (ml[2]) ml[2].textContent = c.m3l;
      qb('.case-link', c.link);
    });

    /* ── Industries ── */
    txt('.industries .section-title', lang, 'industries.title');
    btn('.industries .section-link', lang, 'industries.link');
    document.querySelectorAll('.ind-card').forEach((card, i) => {
      const ind = t.industries['i' + (i + 1)];
      if (!ind) return;
      const name = card.querySelector('.ind-name');
      const desc = card.querySelector('.ind-desc');
      const client = card.querySelector('.ind-client');
      if (name) name.innerHTML = ind.name;
      if (desc) desc.textContent = ind.desc;
      if (client) client.textContent = ind.client;
    });

    /* ── Capabilities ── */
    txt('.capabilities .section-title', lang, 'capabilities.title');
    document.querySelectorAll('.cap-card').forEach((card, i) => {
      const c = t.capabilities['c' + (i + 1)];
      if (!c) return;
      const name = card.querySelector('.cap-name');
      const desc = card.querySelector('.cap-desc');
      if (name) name.innerHTML = c.name;
      if (desc) desc.textContent = c.desc;
    });

    /* ── EAA ── */
    txt('.eaa-label .label', lang, 'eaa.label');
    txt('.eaa-title', lang, 'eaa.title');
    txt('.eaa-body',  lang, 'eaa.body');
    const eaaStatLabel = document.querySelector('.eaa-stat-label');
    if (eaaStatLabel) eaaStatLabel.innerHTML = get(lang, 'eaa.statLabel');
    const eaaBtns = document.querySelectorAll('.eaa-actions a');
    if (eaaBtns[0]) { const ar = eaaBtns[0].querySelector('.arrow'); eaaBtns[0].textContent = get(lang, 'eaa.cta1'); if (ar) eaaBtns[0].appendChild(ar); }
    if (eaaBtns[1]) { const ar = eaaBtns[1].querySelector('.arrow'); eaaBtns[1].textContent = get(lang, 'eaa.cta2'); if (ar) eaaBtns[1].appendChild(ar); }

    /* ── Perspectives ── */
    txt('.perspectives .section-title', lang, 'perspectives.title');
    btn('.perspectives .section-link', lang, 'perspectives.link');
    document.querySelectorAll('.perspective-card').forEach((card, i) => {
      const p = t.perspectives['p' + (i + 1)];
      if (!p) return;
      const tag = card.querySelector('.perspective-tag');
      const title = card.querySelector('.perspective-title');
      const date = card.querySelector('.perspective-date');
      if (tag)   tag.textContent   = p.tag;
      if (title) title.textContent = p.title;
      if (date)  date.textContent  = p.date;
    });

    /* ── About ── */
    html('.about-title', lang, 'about.title');
    txt('.about-body',  lang, 'about.body');
    txt('.about-badge', lang, 'about.badge');
    const aboutStatLabels = document.querySelectorAll('.about-stat-label');
    ['about.s1','about.s2','about.s3','about.s4'].forEach((k, i) => {
      if (aboutStatLabels[i]) aboutStatLabels[i].innerHTML = get(lang, k);
    });

    /* ── Careers ── */
    txt('.careers-title', lang, 'careers.title');
    html('.careers-sub',  lang, 'careers.sub');
    const roleItems = document.querySelectorAll('.role-item');
    let roleIdx = 0;
    roleItems.forEach(item => {
      const r = t.careers['r' + (roleIdx + 1)];
      if (!r) return;
      const name = item.querySelector('.role-name');
      const meta = item.querySelector('.role-meta');
      const tag  = item.querySelector('.role-tag');
      if (name && meta && tag) {
        name.textContent = r.name;
        meta.textContent = r.meta;
        tag.textContent  = r.tag;
        roleIdx++;
      }
    });
    btn('.careers .section-link', lang, 'careers.allRoles');

    /* ── Footer ── */
    txt('.footer-tagline', lang, 'footer.tagline');
    const footerAddr = document.querySelector('.footer-address');
    if (footerAddr) footerAddr.innerHTML = get(lang, 'footer.address') + '<br><a href="mailto:hello@alm.sh" style="color:var(--text-2);transition:color 0.2s" onmouseover="this.style.color=\'white\'" onmouseout="this.style.color=\'\'">hello@alm.sh</a>';
    const colTitles = document.querySelectorAll('.footer-col-title');
    [null,'footer.col1','footer.col2','footer.col3'].forEach((k, i) => {
      if (k && colTitles[i]) colTitles[i].textContent = get(lang, k);
    });
    [['footer.links1', 2], ['footer.links2', 3], ['footer.links3', 4]].forEach(([k, colIdx]) => {
      const links = document.querySelectorAll(`.footer-top > div:nth-child(${colIdx}) .footer-links a`);
      (get(lang, k) || []).forEach((txt, i) => { if (links[i]) links[i].innerHTML = txt; });
    });
    txt('.footer-legal', lang, 'footer.legal');
    const bottomLinks = document.querySelectorAll('.footer-bottom-links a');
    if (bottomLinks[0]) bottomLinks[0].textContent = get(lang, 'footer.imprint');
    if (bottomLinks[1]) bottomLinks[1].textContent = get(lang, 'footer.privacy');
    if (bottomLinks[2]) bottomLinks[2].textContent = get(lang, 'footer.terms');

    /* ── Blog listing page ── */
    txt('.blog-eyebrow .label', lang, 'blog.eyebrow');
    html('.blog-title', lang, 'blog.title');
    txt('.blog-desc', lang, 'blog.desc');
    const countLabels = document.querySelectorAll('.blog-count-label');
    ['blog.countL1','blog.countL2','blog.countL3'].forEach((k, i) => {
      if (countLabels[i]) countLabels[i].textContent = get(lang, k);
    });
    const filterBtns = document.querySelectorAll('.filter-btn');
    const filterKeys = ['blog.filterAll','blog.filterAI','blog.filterCompliance','blog.filterInfra'];
    filterBtns.forEach((b, i) => {
      if (!filterKeys[i]) return;
      const countSpan = b.querySelector('.filter-count');
      b.textContent = get(lang, filterKeys[i]);
      if (countSpan) b.appendChild(countSpan);
    });
    // Featured article
    const feat = document.querySelector('.article-featured-tag .tag-text');
    if (feat) feat.textContent = get(lang, 'blog.featured.tag');
    html('.article-featured-title', lang, 'blog.featured.title');
    txt('.article-featured-excerpt', lang, 'blog.featured.excerpt');
    txt('.article-featured-content .article-dateline', lang, 'blog.featured.date');
    btn('.read-link', lang, 'blog.featured.link');
    // Article cards
    document.querySelectorAll('.article-card').forEach((card, i) => {
      const a = t.blog['a' + (i + 1)];
      if (!a) return;
      const tagEl    = card.querySelector('.tag-text');
      const titleEl  = card.querySelector('.article-title');
      const excerpEl = card.querySelector('.article-excerpt');
      const readEl   = card.querySelector('.article-readtime');
      if (tagEl)    tagEl.textContent    = a.tag;
      if (titleEl)  titleEl.textContent  = a.title;
      if (excerpEl) excerpEl.textContent = a.excerpt;
      if (readEl)   readEl.textContent   = a.date;
    });
    // Newsletter
    txt('.newsletter-title', lang, 'blog.newsletter.title');
    txt('.newsletter-sub',   lang, 'blog.newsletter.sub');
    const newsInput = document.querySelector('.newsletter-input');
    if (newsInput) newsInput.placeholder = get(lang, 'blog.newsletter.placeholder');
    txt('.newsletter-btn',  lang, 'blog.newsletter.btn');
    txt('.newsletter-note', lang, 'blog.newsletter.note');

    /* ── Article pages chrome ── */
    btn('.nav-back', lang, 'article.back');
    txt('.related-title', lang, 'article.related');

    /* ── Lang toggle active state ── */
    document.querySelectorAll('.lang-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });

    /* ── html[lang] attribute ── */
    document.documentElement.lang = lang;

    /* ── Persist ── */
    localStorage.setItem('alm-lang', lang);
  };

  /* Init on DOMContentLoaded */
  const initLang = localStorage.getItem('alm-lang')
    || (navigator.language && navigator.language.startsWith('de') ? 'de' : 'en');

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.setLang(initLang));
  } else {
    window.setLang(initLang);
  }
})();
