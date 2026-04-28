---
slug: badenova
client: badenova
client_full: badenova AG & Co. KG (Energieversorger, Süddeutschland)
industry: Energie & Versorgung
period: Seit 2022 (laufend)
status: Aktiv weiterentwickelt — an Storyblok und an der Component Library
positioning_pillar: multi-tenant
disciplines:
  - Design System
  - Component Library
  - Frontend Architecture
  - Multi-Tenant / Multi-Brand
  - Headless CMS
featured_homepage: true
visibility: published
teaser_label: Mit badenova gebaut
teaser_headline: Wir haben das Multi-Tenant-Design-System gebaut, auf dem heute drei Energiemarken laufen.
teaser_body: Seit 2022 entwickelt alm gemeinsam mit der badenova-IT ein themable Design System mit 124 Komponenten — die technische Basis, auf der sparstrom, badenIT und die Stadtwerke Weil am Rhein gemeinsam laufen, ohne dass eine Marke sich technisch neu erfindet.
hero_image: /assets/cases/badenova/cover.jpg
logo: /assets/logos/clients/badenova.svg
metrics:
  - label: Jahre laufende Partnerschaft
    value: "3+"
  - label: Komponenten in der Library
    value: "124"
  - label: Töchter & Marken im System
    value: "3+"
stack:
  - React
  - Next.js
  - Storybook
  - Storyblok
  - Emotion
  - Theming / Design-Tokens
  - TypeScript
  - Webpack
  - GitHub Actions
  - Chromatic
  - Playwright
  - ESLint
  - Prettier
team_alm:
  - Christoph Saile
  - Benjamin Konopka
  - Jonathan Häberle
  - Michael Zoidl
---

## Ausgangslage

badenova ist ein Energie-Konzern mit zahlreichen Tochtergesellschaften und Marken — jede mit eigenem Auftritt, eigener Tonalität und teils eigenen Funktionsanforderungen. Die digitalen Auftritte waren historisch gewachsen, jeder Marken-Relaunch fing technisch fast bei Null an. Das skaliert weder im Maintenance noch in der Markenkonsistenz.

## Auftrag

Eine zentrale Component Library und ein Design System aufbauen, mit dem alle Töchter und Marken arbeiten können — eine technische Basis als Default, mit der Möglichkeit, Themes, Typografien und Markenidentitäten pro Tochter sauber abzubilden. Der Anspruch: ein einziges System, mit dem sowohl der Konzern-Auftritt als auch jede Tochter-Marke laufen kann, ohne dass jede Marke sich technisch neu erfindet.

## Lösung

- **Themable Design System** mit zentralen Design-Tokens, das pro Marke neu eingefärbt werden kann, ohne Komponenten zu duplizieren.
- **Component Library in React + Next.js**, dokumentiert in Storybook, kontinuierlich visuell getestet via Chromatic — heute 124 Komponenten stark.
- **Storyblok als Headless CMS** für die Inhaltspflege durch die Marken-Teams — entkoppelt von der technischen Plattform.
- **Multi-Tenant-fähige Frontend-Architektur**, auf der heute u.a. **sparstrom**, **badenIT** und die **Stadtwerke Weil am Rhein** laufen.
- **Vollständig automatisierte Testpipelines** (Playwright + Chromatic) für Visual Regression und Funktion.

## Ergebnis

- **124 Komponenten** in der Library, kontinuierlich gepflegt und visuell getestet.
- **Drei eigenständige Marken** (sparstrom, badenIT, Stadtwerke Weil am Rhein) auf einer gemeinsamen technischen Plattform.
- **Schmerzfreie Migration**: sparstrom — ursprünglich auf einer eigenen Plattform mit eigenständigen Komponenten gestartet — wurde später vollumfänglich in das badenova-System überführt, ohne dass es im Live-Betrieb bemerkbar war. Ein praktischer Beleg dafür, dass die Multi-Tenant-Architektur trägt, was sie verspricht.
- **3+ Jahre kontinuierliche Partnerschaft** — eines der längsten laufenden alm-Engagements.

TODO Benjamin: Konkrete Vorher/Nachher-Aussage zur Effizienz wäre stark — wenn das interne Feedback was hergibt, gerne hier ergänzen (z.B. "Ein neuer Marken-Auftritt brauchte früher X, heute Y").

## Stack

React · Next.js · TypeScript · Storybook · Storyblok · Emotion · Design-Tokens · Webpack · GitHub Actions · Chromatic · Playwright

## Team & Rolle

alm ist als Lead-Partner für Architektur und Frontend-Entwicklung in die badenova-IT-Organisation eingebettet. Im aktuellen Team: **Christoph Saile**, **Benjamin Konopka**, **Jonathan Häberle** und **Michael Zoidl**.

Die Plattform wird aktiv weiterentwickelt — sowohl auf der Storyblok-Seite (Inhalte, Schemas, Editor-Erfahrung) als auch in der Component Library selbst.
