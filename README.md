# Ibn Bashir Trading — Website

A modern, professional Next.js 15 website for Ibn Bashir Trading, an Oman-based agriculture and gardening solutions company.

---

## Tech Stack

- **Next.js 15** — App Router
- **TypeScript** — Full type safety
- **Tailwind CSS** — Utility-first styling with custom brand tokens
- **Lucide React** — Clean icon set
- **Vercel** — Recommended deployment

---

## Project Structure

```
ibn-bashir-trading/
├── public/
│   └── images/              ← Replace placeholder images here
│       ├── hero-agriculture.jpg
│       ├── showroom.jpg
│       ├── gardening-tools.jpg
│       ├── irrigation.jpg
│       ├── fertilizers.jpg
│       ├── seeds.jpg
│       ├── pesticides.jpg
│       └── garden-maintenance.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Root layout (Header, Footer, WhatsApp button)
│   │   ├── page.tsx          ← Home page
│   │   ├── about/page.tsx
│   │   ├── services/page.tsx
│   │   ├── products/page.tsx
│   │   ├── showroom/page.tsx
│   │   ├── projects/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   ├── terms-conditions/page.tsx
│   │   └── not-found.tsx     ← 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── WhatsAppFloatingButton.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── ProductCategoryCard.tsx
│   │       ├── CTASection.tsx
│   │       ├── ContactForm.tsx
│   │       ├── MapSection.tsx
│   │       └── ClientTypeCard.tsx
│   ├── lib/
│   │   └── config.ts         ← ⭐ ALL CONTACT INFO LIVES HERE
│   └── styles/
│       └── globals.css
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm run start
```

---

## ⚙️ Customization Guide

### 1. Phone, Email, Address, WhatsApp — Edit ONE file:

```
src/lib/config.ts
```

Update these values:

```ts
export const SITE_CONFIG = {
  phone: '+968 XXXX XXXX',          // ← Your actual phone number
  email: 'info@yourdomain.com',      // ← Your actual email
  address: 'Muscat, Sultanate of Oman',
  addressFull: 'Ibn Bashir Trading, Street Name, Area, Muscat, Sultanate of Oman',
  whatsapp: '96891234567',           // ← Phone number digits only (no + or spaces)
  workingHours: 'Sat – Thu: 8:00 AM – 6:00 PM',
  googleMapsEmbed: 'PASTE_YOUR_EMBED_URL_HERE',  // ← See step 3
}
```

### 2. Replace Images

Add real images to `public/images/` with these names:
- `hero-agriculture.jpg` — Hero background image
- `showroom.jpg` — Showroom section image
- `gardening-tools.jpg` — Product category image
- `irrigation.jpg` — Irrigation product image
- `fertilizers.jpg` — Fertilizers image
- `seeds.jpg` — Seeds image
- `pesticides.jpg` — Pesticides image
- `garden-maintenance.jpg` — Services image

**Recommended image size:** 1200×800px minimum, JPEG quality 80%

To use real images, update the card components to use `<Image>` from Next.js:

```tsx
import Image from 'next/image'

// Replace emoji placeholders in ProductCategoryCard.tsx:
<Image src="/images/gardening-tools.jpg" alt="Gardening Tools" fill className="object-cover" />
```

### 3. Google Maps Embed

1. Go to [maps.google.com](https://maps.google.com)
2. Search for your showroom address
3. Click **Share** → **Embed a map** → Copy the `src` URL from the iframe
4. Paste it into `SITE_CONFIG.googleMapsEmbed` in `src/lib/config.ts`

### 4. Update Logo

Replace the SVG logo in `src/components/layout/Header.tsx` and `Footer.tsx` with your actual logo. You can use:

```tsx
import Image from 'next/image'
<Image src="/images/logo.png" alt="Ibn Bashir Trading" width={120} height={40} />
```

### 5. WhatsApp Number

The WhatsApp number in `config.ts` must be digits only with country code:
- ✅ `96891234567` (Oman: 968 + number)
- ❌ `+968 9123 4567`

---

## 🚀 Deploy to Vercel

### Option A: GitHub + Vercel (Recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **New Project** → Import your GitHub repo
4. Vercel auto-detects Next.js — just click **Deploy**
5. Your site goes live at `your-project.vercel.app`

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Your site will be deployed and you'll get a live URL.

### Custom Domain

In Vercel dashboard:
1. Go to your project → **Settings** → **Domains**
2. Add your domain (e.g., `ibnbashirtrading.com`)
3. Update DNS records as instructed by Vercel

---

## 🎨 Brand Colors

| Name | Hex | Usage |
|------|-----|-------|
| Forest Dark | `#1B4332` | Primary brand, headers, buttons |
| Forest Light | `#2D6A4F` | Hover states |
| Olive | `#606C38` | Accents, secondary |
| Leaf | `#52B788` | Success, nature accents |
| Gold | `#C9A84C` | Highlights, CTAs |
| Cream | `#F5F0E8` | Backgrounds |
| Charcoal | `#2C2C2C` | Body text |

---

## 📦 Pages Included

| Page | Route |
|------|-------|
| Home | `/` |
| About | `/about` |
| Services | `/services` |
| Products | `/products` |
| Showroom | `/showroom` |
| Projects & Clients | `/projects` |
| Contact | `/contact` |
| Privacy Policy | `/privacy-policy` |
| Terms & Conditions | `/terms-conditions` |
| 404 | `not-found.tsx` |

---

## 📞 Support

For technical questions about this codebase, review the Next.js docs at [nextjs.org/docs](https://nextjs.org/docs).
