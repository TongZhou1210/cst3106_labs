# Tong Zhou — Portfolio / Resume Design System (Lab 04)

Course: CST3106 – Web Programming  
Project: Lab 4  
Author: Tong Zhou

---

## 1. Introduction
This document describes the design system used for my resume/portfolio mockup. It explains the color palette, typography, spacing, and the core components (header, section cards, lists, links). All examples match the HTML/CSS in `mockups/`.

---

## 2. Color Palette

| Token           | Color Name     | Hex      | Usage                                                                 |
|-----------------|----------------|----------|-----------------------------------------------------------------------|
| `--navy-900`    | Deep Navy      | `#0B1F3A`| Primary brand color; header background; strong headings; icons        |
| `--navy-700`    | Navy 700       | `#123B6B`| Subheadings, strong links on light background                         |
| `--beige-50`    | Soft Beige     | `#F5F1E8`| Page background for calm, print-friendly feeling                      |
| `--beige-100`   | Warm Gray      | `#EAE6DD`| Section separators / subtle fills                                     |
| `--gray-700`    | Slate Text     | `#374151`| Main body text on light background                                    |
| `--gray-500`    | Muted Text     | `#6B7280`| Secondary information: dates, captions                                |
| `--yellow-400`  | Accent Yellow  | `#F7C948`| Small accents: bullets, dividers, hover details                       |
| `--border`      | Hairline       | `#E5E7EB`| Card/section borders                                                  |
| `--link`        | Deep Link Blue | `#345C9C`| Default link color on light backgrounds                               |

**Contrast notes**
•	Deep Navy (#0B1F3A) on Soft Beige (#F5F1E8) provides high contrast, suitable for large headings and the site header.
•	Link color #345C9C remains readable on the beige background; add underline on hover to improve affordance.
•	Accent Yellow should be used sparingly as small highlights to avoid readability issues with large filled areas.


---

## 3. Typography

We balance a gentle, editorial feeling with a professional tone.

| Element                      | Font Family                              | Size         | Weight/Style                           | Purpose                                   |
|-----------------------------|-------------------------------------------|--------------|----------------------------------------|-------------------------------------------|
| Display Name (h1)           | **Cormorant Garamond**, serif             | 34–36px      | 600–700                                | Elegant, formal presence                  |
| Section Heading (h2)        | Cormorant Garamond, serif                 | 22–24px      | 600                                    | Clear hierarchy                           |
| Subheading / Item title h3  | Cormorant Garamond, serif                 | 18–20px      | 600                                    | School/company names                      |
| Body text / Lists           | **Inter**, "Segoe UI", Roboto, sans-serif | 16px / 1.6lh | 400 (bold for emphasis)                | Readability and modern clarity            |
| Meta (dates, captions)      | Inter, sans-serif                         | 14–15px      | 500, color=muted gray                  | Secondary info                            |

**Why these fonts?**  
Cormorant Garamond conveys a gentle yet formal, print-like character that feels elegant. Inter provides modern clarity and excellent on-screen readability. Together they balance warmth with professionalism—ideal for resumes and portfolios.

---

## 4. Layout & Spacing

- **Page width**：`max-width: 960px`，horizontal padding `20px`，centered.
- **Section rhythm**：card blocks  `margin: 24px 0; padding: 20px;`，with consistent border radius and very subtle shadow.
- **Two-column**：some areas （Projects / Activities）are side-by-side on desktop；switch to a single column on mobile (≤768px).
- **Header**：deep navy background with light text for contrast; a thin yellow line below acts as a subtle anchor.

---

## 5. Components

### 5.1 Site Header
- 	Background:  `--navy-900`，headings and subtitle are white, with subtitle opacity ≤80%.
- Contacts displayed inline without bullets; links use `--link`， underline on hover.
- Bottom border: 2px `--yellow-400` as a subtle accent.



### 5.2 Section Card
-  White background with light `--border`；headings use Cormorant bold with bottom border in `--beige-100`。
- Meta info (dates) styled via `.meta`，in `--gray-500`.


### 5.3 List
- Line height `1.6`，vertical spacing `8px`；Small yellow dots or thin yellow lines can be used for emphasis.
  
### 5.4 Links
-Default:`--link`；hover：Hover: underline and/or slight darkening while maintaining accessibility contrast.


---

## 6. CSS Tokens (excerpt)

```css
:root{
  --navy-900:#0B1F3A; --navy-700:#123B6B;
  --beige-50:#F5F1E8; --beige-100:#EAE6DD;
  --gray-700:#374151; --gray-500:#6B7280;
  --yellow-400:#F7C948;
  --border:#E5E7EB; --link:#345C9C;
  --radius:14px; --shadow:0 1px 2px rgba(0,0,0,.04);
  --space-1:8px; --space-2:12px; --space-3:16px; --space-4:20px; --space-6:24px;
}