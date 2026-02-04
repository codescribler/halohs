# Halo Hearing Solutions — Website Redesign Brief

## Instructions for Claude Code

You MUST read and follow `/mnt/skills/public/frontend-design/SKILL.md` before writing any code. This is a prospecting piece — the finished site needs to be so visually impressive and strategically sharp that the business owner immediately sees the value and wants to work with us.

Build this as a **static multi-page site using HTML, CSS, and JavaScript**. You may use any frontend packages that make sense (e.g. GSAP for animation, Swiper for carousels, AOS or ScrollReveal for scroll effects, Google Fonts). Do NOT use React, Next.js, or any JS framework — this is pure HTML/CSS/JS. The site will be converted to Next.js later once the client signs.

---

## 1. Business Context

**Halo Hearing Solutions** is an independent, family-run audiology practice in Hertfordshire, UK. They are NOT a chain. They are NOT an NHS service. They are a premium, private hearing care provider that competes on personal service, clinical expertise, and trust — not on price.

They have **three clinic locations**:
- **Berkhamsted** — flagship, phone: 01442 389949
- **Bovingdon** — phone: 01442 389949 (same number)
- **Chorleywood** — phone: 01923 616818

All locations: Monday–Friday, 9:30–4:30. Closed weekends and bank holidays.

Email: info@halohs.co.uk
Website: halohs.co.uk

They are **HCPC Registered** (Health and Care Professions Council) — this is a significant trust signal.

Their Google reviews are exceptional: **5.0 stars across all three locations** (169 reviews Berkhamsted, 64 Bovingdon, 27 Chorleywood). This social proof is one of their strongest assets and must be featured prominently.

---

## 2. Core Services (in order of commercial priority)

### A. Ear Wax Removal (highest volume, entry-point service)
- Microsuction technique (gentle suction, safest method)
- Uses video otoscope technology for visual assessment
- Follows BSA (British Society of Audiology) practice guidance
- £85 per appointment (covers 1 or 2 ears)
- £30 consultation charge if no wax present
- Home visits available for £135
- Online booking available
- Age 16+ only
- Recommend olive oil (Earol) for 3–4 days prior
- Cancellation fee: £80 within 24 hours

### B. Hearing Assessments (leads to hearing aid sales — highest revenue)
- Professional audiological testing
- In-clinic or home visits available
- Free hearing tests mentioned on some pages
- Diagnoses hearing loss type and severity
- Shapes personalised solutions

### C. Hearing Aids (premium product sales)
- Wide range of hearing aid products
- Fitting, programming, and ongoing adjustment
- No-pressure sales approach (a key differentiator — they emphasise this repeatedly)

### D. Tinnitus Management

### E. Noise Protection & Custom Ear Molds

### F. Reprogramming & Servicing (existing hearing aid users)

---

## 3. Target Audience

The website must speak to these visitor types:

### Primary: Adults 50–80+ experiencing hearing difficulties
- Often visiting on behalf of themselves OR a family member is researching for them
- Emotional state: worried, uncertain, possibly in denial about hearing loss
- They need reassurance, not medical jargon
- Many have avoided addressing hearing loss for years
- Key triggers: can't hear the TV, family complains they're not listening, struggling in group conversations, phone calls are difficult

### Secondary: Adults 25–55 needing ear wax removal
- More transactional — they want fast booking, clear pricing, and trust signals
- Often in discomfort or pain right now
- Searching "ear wax removal near me" or "microsuction Berkhamsted/Hertfordshire"

### Tertiary: Family members researching on behalf of elderly parents
- They're looking for quality, professionalism, home visit options, and kindness
- The reviews mentioning patience with elderly patients and special needs clients are gold for this audience

---

## 4. Desired Visitor Actions (Conversion Goals)

In priority order:

1. **Book an ear wax removal appointment** — This is the quick-win, high-volume action. There should be a prominent, persistent CTA for this throughout the site. Link to: `https://halohs.co.uk/appointment-booking/`
2. **Call to book or enquire** — Berkhamsted/Bovingdon: 01442 389949, Chorleywood: 01923 616818. Phone numbers must be click-to-call on mobile and prominent on desktop.
3. **Request a hearing assessment** — This is the higher-value lead. A simple contact/enquiry form that captures name, phone, email, preferred location, and brief description of their hearing concern.
4. **Email the practice** — info@halohs.co.uk as a fallback contact method.

---

## 5. Site Architecture

Build the following pages:

### Page 1: Home
- Hero section with confident, emotive headline (NOT the generic "Welcome to..." — something that speaks to the visitor's situation)
- Quick-access CTA buttons: "Book Wax Removal" and "Book a Hearing Test"
- Brief value proposition: why Halo vs NHS or chains (personal, independent, HCPC registered, 5-star rated, no pressure)
- Services overview with links to detail pages
- Social proof section: Google rating badges for all 3 locations + 2–3 standout review quotes
- "Our Promise" section (they already have great copy about warm welcome, honest advice, no pressure to buy, best equipment, long-term care)
- Locations summary with addresses and a map or map links
- Persistent header with phone numbers and "Book Now" button

### Page 2: Ear Wax Removal
- Clear explanation of what microsuction is and why it's safe
- Pricing transparency: £85 appointment, £30 if no wax, £135 home visit
- What to expect at the appointment (step-by-step)
- Preparation advice (olive oil/Earol for 3–4 days)
- Prominent "Book Now" CTA
- FAQ section addressing common concerns

### Page 3: Hearing Loss & Hearing Aids
- Empathetic, educational content about hearing loss
- Signs you may have hearing loss (the checklist they already have is good)
- How a hearing assessment works
- Overview of hearing aid technology (no pressure, just information)
- CTA: "Book a Free Hearing Assessment"

### Page 4: About Us
- The story of Halo — independent, family values, community-focused
- HCPC registration badge/mention
- The team (placeholder content is fine — use generic "Meet our experienced audiologists" messaging)
- The three locations with opening hours
- Their values/promise

### Page 5: Reviews
- Showcase the 5-star Google ratings
- Curate 8–12 of the best review quotes across all locations
- Organised by service type if possible (wax removal reviews, hearing aid reviews, general service reviews)

### Page 6: Contact
- Contact form (name, email, phone, preferred location dropdown, message)
- All three locations with addresses, phone numbers, and opening hours
- Embedded Google Maps or map links for each location
- Email address

---

## 6. Design Direction

### Aesthetic Vision
This is a **premium healthcare practice**, not a budget high-street chain. The design should feel:
- **Warm and trustworthy** — like walking into a well-appointed private clinic
- **Clean and sophisticated** — not clinical/cold, not overly playful
- **Confident and established** — they've been doing this for years and they're excellent at it
- **Accessible** — large text options, high contrast, easy navigation (remember the audience is often 60+)

### Brand Colours
The existing brand uses:
- **Teal/green** (#009B8D or similar — from their logo) as the primary accent
- **Dark charcoal/grey** for text
- **White/light grey** backgrounds
- The logo features "HALO" in dark text with a teal heartbeat/audio wave line and green arch above

Evolve this palette — keep the teal as an anchor but make it feel more premium. Consider adding a warm neutral (cream, warm grey) to soften it, and perhaps a subtle gold or copper accent for premium touches.

### Typography
Choose fonts that feel:
- Professional yet warm (not cold/corporate)
- Highly legible at all sizes (critical for this audience)
- A distinctive serif or refined sans-serif for headings
- Clean, readable sans-serif for body at minimum 16px, ideally 18px

### Key Design Principles
- **Generous whitespace** — the current site feels cluttered
- **Clear visual hierarchy** — the most important actions must be unmissable
- **Photo-quality imagery** — use high-quality stock photos of: older adults smiling and socialising, close-up of modern hearing aids (they're tiny and discreet now), warm clinic/consultation environments, friendly professional interactions. Use Unsplash or similar placeholder images.
- **Mobile-first** — many older users are on tablets or phones, and family members researching will be on mobile
- **Smooth, subtle animations** — nothing flashy, just polished. Gentle fade-ins on scroll, smooth transitions, subtle hover states.
- **Accessibility** — WCAG AA minimum. Good colour contrast, focus states, semantic HTML, skip-to-content link.

---

## 7. Key Messaging & Copy Tone

### Tone of Voice
- Warm, reassuring, professional
- Speak to people like a trusted friend who happens to be an expert
- Never patronising, never clinical/scary
- Acknowledge the emotional difficulty of hearing loss
- Emphasise: "you're not alone", "it's more common than you think", "we're here to help, not to sell"

### Critical Messages to Convey
1. **"Hearing connects you to the people you love"** — lead with emotional benefit, not features
2. **"Independent and personal"** — not a chain, not the NHS, genuinely caring
3. **"No pressure, ever"** — they repeatedly emphasise no pressure to buy. This is a huge trust differentiator.
4. **"5-star rated by your neighbours"** — local social proof
5. **"HCPC Registered professionals"** — clinical credibility
6. **"Three convenient Hertfordshire locations"** — local and accessible
7. **Wax removal is quick, painless, and you'll hear the difference immediately** — from the reviews, instant relief is a common theme

---

## 8. Technical Requirements

- Pure HTML, CSS, JavaScript (no frameworks)
- Responsive: mobile, tablet, desktop breakpoints
- Fast loading — optimise for performance
- Semantic HTML5 throughout
- CSS custom properties for theming
- Smooth scroll behaviour
- Lazy-loaded images
- Click-to-call phone links on mobile
- Google Fonts loaded efficiently
- All links to external booking/contact use the real URLs provided
- Form on contact page should be functional HTML (action can be a placeholder)
- Include structured data (LocalBusiness schema) in the head for SEO
- Meta tags and Open Graph tags on each page
- Favicon placeholder

---

## 9. What "Success" Looks Like

When the business owner sees this site, they should think:
- "This looks far more professional than what we have now"
- "This actually makes me want to book an appointment — and I own the place"
- "The reviews and trust signals are front and centre"
- "It's so easy to find how to book or call us"
- "This feels like US — warm, professional, trustworthy"
- "I need this built properly — where do I sign?"

The site should be **demonstrably better** than the current WordPress site in every way: faster, cleaner, more conversion-focused, more visually polished, and more emotionally resonant.

---

## 10. File Structure

```
halo-hearing-solutions/
├── index.html
├── ear-wax-removal.html
├── hearing-loss.html
├── about.html
├── reviews.html
├── contact.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    └── (placeholder images / SVG assets)
```

Build all six pages as fully complete, production-quality HTML files with shared CSS and JS. Every page should feel finished, not like a template or wireframe.