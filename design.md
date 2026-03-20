# Design System: Purple & Pink Frost

## 1. Creative Vision & Aesthetic
The "Purple & Pink Frost" aesthetic is a modern, light-mode interpretation of Glassmorphism. It balances the ethereal quality of frosted glass with a vibrant, professional energy through soft purple and pink mesh gradients.

**Core Principles:**
- **Translucency:** Use of multi-layered background blurs to create depth.
- **Vibrancy:** Infusing neutral layouts with soft rose and violet tones.
- **Clarity:** High-contrast typography (Inter) ensuring accessibility despite the visual layers.
- **Precision:** Thin, bright white borders to define interactive "glass" boundaries.

## 2. Color Palette

### Background Mesh
- **Base:** `#FAFAFB` (Near-white)
- **Accent 1 (Rose):** `#FCE7F3`
- **Accent 2 (Violet):** `#EDE9FE`
- **Accent 3 (Sky Blue):** `#E0F2FE` (Used sparingly for highlights)

### Glass Elements
- **Surface:** `rgba(255, 255, 255, 0.7)`
- **Border:** `1px solid rgba(255, 255, 255, 0.5)`
- **Backdrop Blur:** `20px` to `40px`

### Typography & Actions
- **Primary Text:** `#0F172A` (Slate 900)
- **Secondary Text:** `#475569` (Slate 600)
- **Primary Action:** `#2563EB` (Electric Blue) -> used for contrast against the warm bg.
- **Hover States:** `#4F46E5` (Indigo)

## 3. Typography
- **Primary Font:** Inter (Sans-serif)
- **Headings:** Semibold to Bold, tight tracking (`-0.025em`) to feel modern and "editorial."
- **Body:** Regular, generous line height (`1.6`) for readability over frosted backgrounds.

## 4. UI Components & Interactions

### Glass Cards
- Rounded corners: `1.5rem` (24px)
- Subtle outer glow instead of heavy shadows: `0 8px 32px 0 rgba(31, 38, 135, 0.07)`

### Timeline (Resume)
- Thin electric blue vertical lines.
- Circular milestone markers with internal glows.

### Buttons
- Primary: Solid blue with white text for maximum "pop."
- Secondary/Glass: Frosted background with blue text and a scaling hover effect.

## 5. Implementation Notes
When coding, ensure `backdrop-filter: blur(...)` is supported or provided with a fallback semi-opaque background color. The mesh background should be implemented as a series of absolute-positioned, blurred SVG or CSS shapes to maintain performance.