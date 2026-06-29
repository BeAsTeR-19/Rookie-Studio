# linear DESIGN.md

> Auto-generated design system — reverse-engineered via static analysis by skillui.
> Frameworks: None detected
> Colors: 20 · Fonts: 3 · Components: 7
> Icon library: not detected · State: not detected
> Primary theme: dark · Dark mode toggle: no · Motion: expressive

## Visual Reference

**Match this design exactly** — study colors, fonts, spacing, and component shapes before writing any UI code.

![linear Homepage](../screenshots/homepage.png)

---

## 1. Visual Theme & Atmosphere

This is a **dark-themed** interface with a cool tone. Depth is expressed through layered shadows and subtle surface color variation. Typography pairs **Inter Variable** for display/headings with **Tiempos Headline** for body text, creating clear visual hierarchy through type contrast. Spacing follows a **4px base grid** (compact density), with scale: 2, 4, 6, 8, 10, 12, 14, 16px. The accent color **#7170ff** anchors interactive elements (buttons, links, focus rings). Motion is expressive — spring physics, layout animations, and staggered reveals are part of the visual language.

---

## 2. Color Palette & Roles

| Token | Hex | Role | Use |
|---|---|---|---|
| theme-color | `#080808` | background | Page background, darkest surface |
| tweet-bg-color | `#191d20` | surface | Card and panel backgrounds |
| header-border | `#ffffff` | text-primary | Headings and body text |
| color-text-quaternary | `#6b6b6b` | text-muted | Captions, placeholders, secondary info |
| color-border-secondary | `#383b3f` | text-muted | Captions, placeholders, secondary info |
| color-text-secondary | `#b4bcd0` | text-muted | Captions, placeholders, secondary info |
| color-text-secondary | `#d2d7de` | text-muted | Captions, placeholders, secondary info |
| border | `#585a5c` | border | Dividers, card borders, outlines |
| color-accent | `#7170ff` | accent | CTAs, links, focus rings, active states |
| color-red | `#eb5757` | danger | Error states, destructive actions |
| tweet-color-green-primary | `#00ba7c` | success | Success states, positive indicators |
| color-link-primary | `#818fff` | info | Informational highlights |
| tweet-bg-color-hover | `#1e2732` | unknown | Palette color |
| unknown | `#9c9da1` | unknown | Palette color |
| color-bg-tertiary | `#f4f2f4` | unknown | Palette color |
| color-button-invert-bg | `#e2e4e7` | unknown | Palette color |
| color-teal | `#02b8cc` | unknown | Palette color |
| color-indigo | `#5e6ad2` | unknown | Palette color |
| color-text-tertiary | `#8b93a1` | unknown | Palette color |
| tweet-color-red-primary | `#f91880` | unknown | Palette color |

### CSS Variable Tokens

```css
--header-border: transparent;
--header-border: #ffffff14;
--header-border: #00000014;
--header-border: #ffffff14;
--header-border: #00000014;
--inner-card-border: 1px;
--tweet-border: 1px solid #cfd9de;
--tweet-font-color-secondary: #536471;
--tweet-color-blue-primary: #1d9bf0;
--tweet-color-blue-primary-hover: #1a8cd8;
--tweet-color-blue-secondary: #006fd6;
--tweet-color-blue-secondary-hover: #006fd61a;
--tweet-color-red-primary: #f91880;
--tweet-color-red-primary-hover: #f918801a;
--tweet-color-green-primary: #00ba7c;
--tweet-color-green-primary-hover: #00ba7c1a;
--tweet-border: 1px solid #425364;
--tweet-font-color-secondary: #8b98a5;
--tweet-color-blue-primary: #1d9bf0;
--tweet-color-blue-primary-hover: #1a8cd8;
```


---

## 3. Typography Rules

**Font Stack:**
- **Tiempos Headline** — Heading 1, Heading 2, Heading 3
- **Inter Variable** — Body, Caption
- **Berkeley Mono** — Code

**Font Sources:**

```css
@font-face {
  font-family: "Inter Variable";
  src: url("https://static.linear.app/fonts/InterVariable.woff2?v=4.1") format("woff2");
  font-weight: 100;
}
@font-face {
  font-family: "Berkeley Mono";
  src: url("https://static.linear.app/fonts/Berkeley-Mono-Variable.woff2?v=3.2") format("woff2");
  font-weight: 100;
}
@font-face {
  font-family: "Tiempos Headline";
  src: url("https://static.linear.app/fonts/Tiempos/tiempos-headline-regular.woff2") format("woff2");
  font-weight: 400;
}
```

| Role | Font | Size | Weight |
|---|---|---|---|
| Heading 1 | Tiempos Headline | 40px | 700 |
| Heading 2 | Tiempos Headline | 38px | 700 |
| Heading 3 | Tiempos Headline | 2.25rem | 700 |
| Body | Inter Variable | 14px | 400 |
| Caption | Inter Variable | 13px | 400 |
| Code | Berkeley Mono | 14px | 400 |

**Typographic Rules:**
- Limit to 3 font families max per screen
- Use **Tiempos Headline** for body/UI text, **Inter Variable** for display/headings
- Maintain consistent hierarchy: no more than 3-4 font sizes per screen
- Headings use bold (600-700), body uses regular (400)
- Line height: 1.5 for body text, 1.2 for headings
- Use color and opacity for secondary hierarchy, not additional font sizes


---

## 4. Component Stylings

### Layout (1)

**Footer** — `html`

### Navigation (1)

**Navigation** — `html`

### Data Input (2)

**Button** — `html`
- Animation: 

**Input** — `html`
- State: :focus, :placeholder

### Media (3)

**Image** — `html`

**Icon** — `html`

**Map/Canvas** — `html`



---

## 5. Layout Principles

- **Base spacing unit:** 4px
- **Spacing scale:** 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24
- **Border radius:** 6px, inherit, .3em, 1px, 2px, 3px, 4px, 5px, 7px, 8px, 10px, 12px, 14px, 16px, clamp(4px,1cqw,8px), 20px, 22px, 100%, 400px
- **Max content width:** 1280px

**Spacing as Meaning:**
| Spacing | Use |
|---|---|
| 4-8px | Tight: related items within a group |
| 12-16px | Medium: between groups |
| 24-32px | Wide: between sections |
| 48px+ | Vast: major section breaks |


---

## 6. Depth & Elevation

### Flat — subtle depth hints

- `-1px 0 0 0 var(--color),1px 0 0 0 var(--color)`
- `0 1px #0006`
- `0 0 0 1px #00000014,var(--shadow-low)`

### Raised — cards, buttons, interactive elements

- `var(--shadow-medium)`
- `0 0 0 2px var(--color-bg-primary),0 0 0 4px var(--color-brand-bg)`
- `inset 0 0 0 1px #ffffff08,inset 0 1px #ffffff0a,0 0 0 1px #0009,0 4px 4px #0000001a`

### Floating — dropdowns, popovers, modals

- `0 4px 12px #00000026`
- `inset 0 0 12px #0003`

### Overlay — full-screen overlays, top-level dialogs

- `0 8px 32px #08090a`
- `0 8px 32px #08090a0d`
- `0 4px 40px #0000001a,0 3px 20px #00000020,0 3px 12px #00000020,0 2px 8px #00000020,0 1px 1px #00000020`

### Z-Index Scale

`0, 1, 10, 101, 2147483647`



---

## 7. Animation & Motion

This project uses **expressive motion**. Animations are an integral part of the experience.

### CSS Animations

- `@keyframes _5pslva_fadeIn`
- `@keyframes WinFxq_contextMenuIn`
- `@keyframes WinFxq_contextMenuOut`
- `@keyframes TZTsQG_mobileMenuIn`
- `@keyframes TZTsQG_mobileMenuOut`
- `@keyframes TZTsQG_enterFromRight`
- `@keyframes TZTsQG_enterFromLeft`
- `@keyframes TZTsQG_exitToRight`

### Animated Components

- **Button**: 

### Motion Guidelines

- Duration: 150-300ms for micro-interactions, 300-500ms for page transitions
- Easing: `ease-out` for enters, `ease-in` for exits
- Always respect `prefers-reduced-motion`


---

## 8. Do's and Don'ts

### Do's

- Use `#7170ff` for interactive elements (buttons, links, focus rings)
- Use `#080808` as the primary page background
- Pair **Tiempos Headline** (body) with **Inter Variable** (display) — these are the only allowed fonts
- Follow the **4px** spacing grid for all margins, padding, and gaps
- Use the defined shadow tokens for elevation — see Section 6
- Use border-radius from the scale: 6px, inherit, .3em, 1px, 2px
- Reuse existing components from Section 4 before creating new ones

### Don'ts

- Don't introduce colors outside this palette — extend the design tokens first
- Don't introduce additional font families beyond Tiempos Headline and Inter Variable and Berkeley Mono
- Don't use arbitrary spacing values — stick to multiples of 4px
- Don't create custom box-shadow values outside the system tokens
- Don't use arbitrary border-radius values — pick from the defined scale
- Don't duplicate component patterns — check Section 4 first
- Don't use backdrop-blur or blur effects

### Anti-Patterns (detected from codebase)

- No blur or backdrop-blur effects
- No zebra striping on tables/lists


---

## 9. Responsive Behavior

| Name | Value | Source |
|---|---|---|
| sm | 640px | css |
| md | 641px | css |
| md | 768px | css |
| lg | 769px | css |
| lg | 928px | css |
| lg | 1024px | css |
| xl | 1025px | css |
| xl | 1140px | css |
| xl | 1240px | css |
| xl | 1280px | css |
| 2xl | 1281px | css |
| 2xl | 1420px | css |
| 2xl | 1440px | css |
| 2xl | 1536px | css |

**Approach:** Use `@media (min-width: ...)` queries matching the breakpoints above.


---

## 10. Agent Prompt Guide

Use these as starting points when building new UI:

### Build a Card

```
Background: #191d20
Border: 1px solid #585a5c
Radius: 8px
Padding: 16px
Font: Tiempos Headline
Use shadow tokens from Section 6.
```

### Build a Button

```
Primary: bg #7170ff, text white
Ghost: bg transparent, border #585a5c
Padding: 8px 16px
Radius: 8px
Hover: opacity 0.9 or lighter shade
Focus: ring with #7170ff
```

### Build a Page Layout

```
Background: #080808
Max-width: 1280px, centered
Grid: 4px base
Responsive: mobile-first, breakpoints from Section 9
```

### Build a Stats Card

```
Surface: #191d20
Label: #6b6b6b (muted, 12px, uppercase)
Value: #ffffff (primary, 24-32px, bold)
Status: use success/warning/danger from Section 2
```

### Build a Form

```
Input bg: #080808
Input border: 1px solid #585a5c
Focus: border-color #7170ff
Label: #6b6b6b 12px
Spacing: 16px between fields
Radius: 8px
```

### General Component

```
1. Read DESIGN.md Sections 2-6 for tokens
2. Colors: only from palette
3. Font: Tiempos Headline, type scale from Section 3
4. Spacing: 4px grid
5. Components: match patterns from Section 4
6. Elevation: shadow tokens
```
