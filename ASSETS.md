# alm.sh — Asset Specifications

All assets live in `/assets/`. Drop files here, then run the wiring step.

---

## /assets/logos/  — Client Logos (SVG)

| Datei | Verwendet in | Anzeigegröße |
|---|---|---|
| `bmw.svg` | index.html → Proof Wall | max 120 × 36 px |
| `prosiebensat1.svg` | index.html → Proof Wall | max 120 × 36 px |
| `roche.svg` | index.html → Proof Wall | max 120 × 36 px |
| `mediamarkt.svg` | index.html → Proof Wall | max 120 × 36 px |
| `allianz.svg` | index.html → Proof Wall | max 120 × 36 px |
| `scout24.svg` | index.html → Proof Wall | max 120 × 36 px |

**SVG Anforderungen:**
- Stroke/Fill auf `currentColor` setzen → reagiert automatisch auf dark/light theme
- Viewbox muss gesetzt sein (kein festes width/height im SVG root)
- Keine eingebetteten Raster-Bilder, keine Schriften (in Pfade umwandeln)
- Ziel: < 8 KB pro Logo

---

## /assets/cases/  — Case Study Visuals (WebP)

| Datei | Case | Anzeigegröße | Export-Auflösung |
|---|---|---|---|
| `bmw.webp` | BMW · Automotive | ~600 × 520 px | **1200 × 1040 px** (2×) |
| `bmw@1x.webp` | BMW · Automotive | ~600 × 520 px | 600 × 520 px (1×) |
| `p7s1.webp` | ProSiebenSat.1 · Media | ~600 × 520 px | **1200 × 1040 px** |
| `p7s1@1x.webp` | | | 600 × 520 px |
| `roche.webp` | Roche · Pharma | ~600 × 520 px | **1200 × 1040 px** |
| `roche@1x.webp` | | | 600 × 520 px |

**Inhalt / Motiv:**
- `bmw.webp` — Dashboard-UI, konfigurator, oder abstraktes Automobil-Interface. Dunkles UI preferred.
- `p7s1.webp` — Streaming Platform / Video-Player Interface, Waveform-Elemente, TV-Brands
- `roche.webp` — Clinical Data Dashboard, Forschungs-Interface, Daten-Visualisierung

**WebP Anforderungen:**
- Format: WebP (Qualität 82–87)
- Dunkel, moody Ästhetik — passend zum near-black Background (#09090b)
- Aspect Ratio: ~7:6 (breiter als hoch)
- Max Dateigröße: 2× ≤ 180 KB, 1× ≤ 80 KB

---

## /assets/team/  — Team-Fotos (WebP)

| Datei | Person | Verwendung |
|---|---|---|
| `marcus-hoffmann.webp` | Marcus Hoffmann, Principal Engineer | blog.html cards + blog/ai-deployment article |
| `jonas-weber.webp` | Jonas Weber, Cloud Architect | blog.html cards + blog/eu-cloud article |
| `elena-petrov.webp` | Elena Petrov, Compliance Lead | blog.html cards + blog/dsgvo article |
| `simon-larsson.webp` | Simon Larsson, AI Research | blog.html cards |

**WebP Anforderungen:**
- Export: **160 × 160 px** (angezeigt bei 40 px, 80 px auf 2× Retina-Displays)
- Format: WebP Qualität 85, kreisförmig oder quadratisch freigestellt
- Max Dateigröße: ≤ 15 KB pro Foto
- Hintergrund: am besten einheitlich dunkel oder transparent

---

## /assets/blog/  — Blog Card Images (WebP)

| Datei | Artikel | Anzeigegröße | Export |
|---|---|---|---|
| `ai-deployment.webp` | AI Deployment Enterprise | ~400 × 240 px | **800 × 480 px** (2×) |
| `eu-cloud.webp` | EU Cloud Hosting | ~400 × 240 px | **800 × 480 px** |
| `dsgvo-ai.webp` | DSGVO + AI 2026 | ~400 × 240 px | **800 × 480 px** |
| `llm-production.webp` | LLMs in Production | ~400 × 240 px | **800 × 480 px** |
| `eu-ai-act.webp` | EU AI Act Breakdown | ~400 × 240 px | **800 × 480 px** |
| `infrastructure-ai.webp` | AI Infrastructure | ~400 × 240 px | **800 × 480 px** |
| `accessibility.webp` | EAA / Accessibility | ~400 × 240 px | **800 × 480 px** |
| `ci-cd.webp` | CI/CD for AI | ~400 × 240 px | **800 × 480 px** |

**Inhalt:**
- Abstrakte Tech-Visualisierungen, Code-Ausschnitte, Infrastruktur-Diagramme
- Dunkel, moody — passend zum editorial Stil
- Aspect Ratio: 5:3
- Max Dateigröße: ≤ 70 KB pro Karte (lazy loaded)

---

## /assets/hero/  — Hero Section (Video + Fallback)

| Datei | Typ | Verwendung |
|---|---|---|
| `hero-loop.mp4` | MP4 H.264 | Primäres Video — alle Browser |
| `hero-loop.webm` | WebM VP9 | Modernere Browser (30% kleiner) |
| `hero-poster.webp` | WebP | Platzhalter bis Video geladen |

**Video Anforderungen:**
- Auflösung: **1920 × 1080 px** (16:9)
- Dauer: **6–15 Sekunden** Loop (nahtloser Loop = kein sichtbarer Schnitt)
- Codec MP4: H.264, Baseline/Main Profile, keine Audio-Spur
- Codec WebM: VP9
- Max Dateigröße: MP4 ≤ 6 MB, WebM ≤ 4 MB
- HTML Attribute: `autoplay muted loop playsinline` — kein JS nötig
- Inhalt-Idee: abstrakte dunkle Geometrie, Datenpunkte, Netzwerk-Nodes, oder Munich Büro-Shots

**Poster (WebP):**
- Erster Frame des Videos oder ähnliches Still
- 1920 × 1080 px, Qualität 80, max ≤ 200 KB

---

## /assets/og/  — Social Preview Images (JPG)

| Datei | Verwendung | Größe |
|---|---|---|
| `og-home.jpg` | index.html meta og:image | 1200 × 630 px |
| `og-blog.jpg` | blog.html | 1200 × 630 px |
| `og-ai-deployment.jpg` | blog/ai-deployment-enterprise.html | 1200 × 630 px |
| `og-eu-cloud.jpg` | blog/eu-cloud-hosting.html | 1200 × 630 px |
| `og-dsgvo.jpg` | blog/dsgvo-ai-2026.html | 1200 × 630 px |

**Anforderungen:**
- Format: **JPG** (nicht WebP — Twitter/Crawler-Kompatibilität)
- Qualität: 85, progressiv
- Inhalt: alm. Logo + Headline + Subline auf dunklem Hintergrund
- Max: ≤ 200 KB

---

## Optimierungs-Befehle (optional, wenn du imagemagick/ffmpeg hast)

```bash
# WebP aus JPG/PNG konvertieren (Qualität 85)
cwebp -q 85 input.jpg -o output.webp

# WebP resizen + konvertieren
cwebp -q 85 -resize 1200 1040 input.jpg -o bmw.webp

# Team-Avatar: quadratisch croppen + WebP
convert input.jpg -gravity Center -crop 160x160+0+0 +repage -quality 85 output.webp

# Video: MP4 aus Source-Video (kein Audio)
ffmpeg -i input.mov -vf scale=1920:1080 -c:v libx264 -profile:v main -crf 23 -an hero-loop.mp4

# Video: WebM aus MP4
ffmpeg -i hero-loop.mp4 -c:v libvpx-vp9 -crf 33 -b:v 0 -an hero-loop.webm
```
