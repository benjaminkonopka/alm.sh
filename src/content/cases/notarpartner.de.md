---
slug: notarpartner
client: NotarPartner
client_full: NotarPartner — B2B-Software für Notariate
industry: Legal-Tech · Notariat
period: 2025 – heute (laufend)
status: Vor Rollout — laufende Entwicklung & Maintenance
featured_homepage: false
positioning_pillar: multi-tenant
disciplines:
  - Architektur & Lead-Entwicklung
  - Design System
  - Custom Templating-Engine
  - Web-WYSIWYG-Editor
  - B2B-Software
visibility: published
hero_image: /assets/cases/notarpartner/cover.jpg
logo: /assets/logos/clients/notarpartner.svg
metrics:
  - label: Engagement-Dauer (initial)
    value: "6 Monate"
  - label: Templating-Output
    value: Word + PDF
stack:
  - React
  - Next.js
  - Supabase
  - Zustand
  - REST
  - TipTap
  - TypeScript
  - Node.js
  - LibreOffice
  - Playwright
  - Tailwind
  - Custom Handlebars-Compiler
team_alm:
  - Michael Zoidl (Lead Architect)
  - Nico Weingärtner (Lead Dev)
  - Christoph Saile (Lead Dev)
---

## Ausgangslage

NotarPartner liefert seit Jahren Software für die Arbeit in Notariaten — eine Branche, in der Dokumenten-Erstellung, Vertrags-Templates und rechtssichere Outputs (Word, PDF) keine Komfort-Funktion sind, sondern das Kerngeschäft. Die bestehende Software hatte das geleistet, war aber technologisch in einer Generation, in der jede neue Funktion teurer wird als ihr Wert.

Statt punktuell zu modernisieren, fiel die Entscheidung für eine Nachfolge-Plattform — eine, in der die Templating-Logik, der Editor und die Output-Pfade neu gedacht werden, ohne den Anspruch der Vorgängerin zu verlieren.

## Auftrag

alm hat die Architektur und Lead-Entwicklung dieser Nachfolge-Plattform übernommen — über sechs Monate als initiale Phase. Zwei Schwerpunkte: ein **Design System** als technische Basis und eine **eigene Handlebars-basierte Templating-Engine**, die Web-Editor-Inhalte direkt in Word- und PDF-Outputs übersetzt — ohne den Web-WYSIWYG-Charakter zu verlieren.

## Lösung

- **Custom Handlebars-Templating-Engine**: kompiliert Inhalte direkt in Word- und PDF-Dokumente, während im Frontend ein vollwertiger WYSIWYG-Editor (TipTap-basiert) für die Bearbeitung erhalten bleibt.
- **LibreOffice im Backend** für die Word-Generierung — eine bewusst pragmatische Wahl gegenüber proprietären Lösungen.
- **Modernes Frontend-Stack**: React, Next.js, Tailwind, Zustand für State-Management.
- **Supabase als Backend**: schnellerer Entwicklungs-Loop, klare REST-Schnittstellen.
- **End-to-End-Tests mit Playwright** für die Output-Pfade — wo Word- und PDF-Output rechtsverbindlich sind, muss das Verhalten reproduzierbar sein.
- **Design System** parallel zur Funktional-Entwicklung, damit Konsistenz in der wachsenden Plattform gegeben ist.

## Ergebnis

Eine Nachfolge-Plattform, die in sechs Monaten von Architektur bis lauffähigem Templating-Kern aufgebaut wurde — mit der Eigenschaft, dass das Notariat-Team weiterhin in einem WYSIWYG-Editor arbeitet, die Outputs aber direkt rechtsverbindlich in Word und PDF kompiliert werden.

Die initiale Phase ist abgeschlossen; alm-Team und Kunde sind in der laufenden Entwicklung. Der **Rollout der Plattform steht in den nächsten Wochen an**.

## Stack

React · Next.js · Tailwind · TypeScript · Zustand · TipTap · Supabase · REST · LibreOffice · Custom Handlebars-Compiler · Playwright · Node.js

## Team & Rolle

**Michael Zoidl** als Lead Architect, **Nico Weingärtner** und **Christoph Saile** als Lead-Developer. Drei-Personen-Aufstellung mit klarer Rollen-Trennung zwischen Architektur und Implementierung — eingebettet in das Produkt-Team von NotarPartner.
