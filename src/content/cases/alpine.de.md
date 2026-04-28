---
slug: alpine
client: ALPINE
client_full: ALPINE Electronics — Automotive-Audio & In-Car-Systeme
industry: Automotive · Consumer Electronics
period: 2019 – 2020
status: Abgeschlossen
positioning_pillar: multi-tenant
disciplines:
  - Component Library
  - Frontend Engineering
  - Backend (Node.js)
  - Build- & Test-Pipelines
featured_homepage: false
visibility: published
hero_image: /assets/cases/alpine/cover.jpg
logo: /assets/logos/clients/alpine.svg
metrics:
  - label: Engagement-Dauer
    value: "12 Monate"
  - label: alm-Team-Stärke
    value: "6"
stack:
  - React
  - React Hooks
  - GraphQL
  - Webpack
  - Babel
  - Jest
  - Storybook
  - Storyshots
  - SASS
  - Apollo
  - SVGO
  - Node.js
  - Formik
  - GitHub Actions
team_alm:
  - Michael Zoidl
  - Nico Weingärtner
  - Silvana Zinngräbe
  - Jonathan Häberle
  - Jan Aman
  - Benjamin Konopka
---

## Ausgangslage

ALPINE Electronics entwickelt Audio- und In-Car-Systeme für Automotive — eine Branche, in der interne Werkzeuge oft genauso komplex sind wie das, was am Endkunden ankommt. Konfiguratoren, interne Dashboards, Tools für Produktion und Vertrieb laufen über mehrere Jahre und müssen dabei einheitlich, wartbar und schnell erweiterbar bleiben.

Statt jedes interne Werkzeug von Null zu denken, wurde der Bedarf nach einer **gemeinsamen Komponenten-Basis** klar — eine, die in mehreren internen Tools wiederverwendet werden kann, mit zentralen Build- und Test-Standards.

## Auftrag

alm hat über zwölf Monate die Entwicklung einer Component Library für die internen Tools übernommen — kombiniert mit einem Teil der Backend-Entwicklung in Node.js und der Verantwortung für Setup, Compiler-Customizations, Test-Umgebung und Deployment.

## Lösung

- **Component Library auf React-Hooks-Basis**, dokumentiert in Storybook, mit Storyshots als visuelle Regressionsabsicherung.
- **Apollo + GraphQL**-Integration für die Anbindung an die Bestand-Backends.
- **Custom Compiler-Setups in Webpack** für die spezifischen Anforderungen der internen Tool-Landschaft (SASS, SVGO, Formik, Internationalisierung).
- **Backend-Anteile in Node.js** dort, wo neue Endpunkte oder Services nötig waren.
- **Test-Umgebung & CI**: Jest, Storyshots, GitHub Actions — sauberes Setup als Voraussetzung für Maintenance ohne Reibung.

## Ergebnis

Eine Component Library, die nach Engagement-Ende durch interne ALPINE-Teams weitergeführt werden konnte — der explizite Erfolgsfaktor: das alm-Setup war von Anfang an darauf ausgelegt, übergebbar zu sein.

ALPINE war das erste größere Engagement nach der alm-Gründung — und gleichzeitig die Vorlage für viele spätere Component-Library- und Design-System-Projekte (badenova, NotarPartner).

## Stack

React · React Hooks · GraphQL · Apollo · Webpack · Babel · Jest · Storybook · Storyshots · SASS · SVGO · Node.js · Formik · GitHub Actions

## Team & Rolle

Sechs Personen aus alm haben das ALPINE-Engagement getragen: **Michael Zoidl**, **Nico Weingärtner**, **Silvana Zinngräbe**, **Jonathan Häberle**, **Jan Aman** und **Benjamin Konopka**. Für das damals junge alm — gerade ein Jahr nach Gründung — war das eines der ersten größeren Engagements und gleichzeitig der Beleg, dass die Aufstellung auch substanzielle, langlaufende Projekte tragen kann.

Vieles aus dem ALPINE-Setup ist später in Folgeprojekten weitergewachsen — die methodischen Grundlagen für Component Libraries, Design Systems und Storybook-getriebene Entwicklung, die heute in Engagements wie badenova und NotarPartner zum Standard gehören.
