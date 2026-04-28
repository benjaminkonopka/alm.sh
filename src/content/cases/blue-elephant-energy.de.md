---
slug: blue-elephant-energy
client: Blue Elephant Energy
client_full: Blue Elephant Energy GmbH (Photovoltaik-Asset-Manager)
industry: Erneuerbare Energien · Photovoltaik
period: 2024
status: Abgeschlossen — Pipeline läuft eigenständig im Live-Betrieb
positioning_pillar: ai-in-production
disciplines:
  - AI Engineering
  - Web-Crawling
  - OCR / Dokumenten-Verarbeitung
  - LLM-Pipelines
  - Datenextraktion & -anreicherung
  - Frontend
featured_homepage: false
visibility: published
hero_image: /assets/cases/blue-elephant-energy/cover.jpg
logo: /assets/logos/clients/blue-elephant-energy.svg
metrics:
  - label: Durchsuchte Quell-Websites
    value: Millionen
  - label: KI-Pipeline-Stufen
    value: "3 (Crawl → OCR → LLM)"
stack:
  - React
  - Next.js
  - Tailwind
  - TypeScript
  - Node.js
  - AWS Textract
  - OpenAI
  - LangChain
  - Docker
team_alm:
  - Michael Zoidl (Lead, solo)
---

## Ausgangslage

Blue Elephant Energy akquiriert großflächige Photovoltaik-Parks europaweit. Ein wesentlicher Teil dieser Akquisition läuft über öffentliche Bekanntmachungen — Ausschreibungen, Veröffentlichungen, behördliche Mitteilungen, die im Web verstreut, in unterschiedlichsten Formaten und teilweise als gescannte PDFs verfügbar sind.

Manuell durchforstet kommt das Akquisitions-Team der Menge an relevanten Veröffentlichungen nicht hinterher; gleichzeitig entscheiden gerade die Details, die in solchen Dokumenten stecken, über die Bewertung eines Parks.

## Auftrag

Eine durchgängige Pipeline aufbauen, die das Web nach relevanten Bekanntmachungen scannt, die gefundenen Dokumente maschinell lesbar macht und sie in einer Form aufbereitet, mit der das interne Akquisitions-Team effizient bewerten kann — statt sie zu sammeln.

## Lösung

- **Web-Crawler-Architektur**: parallele, hochperformante API-Extraktionsprozesse, die Millionen von Websites nach relevanten Veröffentlichungen durchsuchen.
- **OCR-Stufe mit AWS Textract**: gescannte oder PDF-basierte Bekanntmachungen werden in maschinenlesbaren Text überführt — Voraussetzung dafür, dass nachgelagerte LLM-Stufen damit arbeiten können.
- **Vor-Sortierung per Algorithmus**: regelbasierte Filter eliminieren offensichtliche Falschtreffer, bevor LLM-Kosten anfallen.
- **LLM-Stufe für inhaltliche Auswertung**: ein Sprachmodell extrahiert die für die Akquisition relevanten Informationen aus den verbleibenden Dokumenten und strukturiert sie für die Bewertung durch das Team.
- **Frontend / Akquisitions-Werkzeug** (React + Next.js + Tailwind), in dem das Team mit den aufbereiteten Daten arbeitet.

## Ergebnis

Das Akquisitions-Team kann heute Bekanntmachungen in einer Größenordnung verarbeiten, die manuell nicht erreichbar wäre. Die Pipeline läuft seit Projektabschluss eigenständig im Live-Betrieb — alm ist nicht mehr aktiv beteiligt, das System wurde sauber an den Kunden übergeben.

TODO Benjamin: Konkrete Anzahl an Parks pro Monat / Jahr klärst du noch mit Michi — sobald die Zahl da ist, hier ergänzen.

## Stack

React · Next.js · Tailwind · TypeScript · Node.js · AWS Textract · OpenAI · LangChain · Docker

## Team & Rolle

Solo-Engagement: **Michael Zoidl** als Lead Architect & Developer, drei Monate in 2024. Ein Beleg dafür, dass eine durchdachte Architektur und ein erfahrener Engineer mehr Wert liefern können als ein großes Team — wenn das Problem klar geschnitten ist.
