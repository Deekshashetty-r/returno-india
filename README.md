# Returno India — Production Website

Built with Next.js 14, Tailwind CSS, TypeScript. Deploy-ready for Vercel.

---

## PROJECT STRUCTURE

```
returno-india/
├── app/
│   ├── layout.tsx          ← Root layout (navbar, footer, SEO metadata)
│   ├── globals.css         ← All base styles, fonts, animations
│   ├── page.tsx            ← Home page
│   ├── sitemap.ts          ← Auto-generated SEO sitemap
│   ├── about/page.tsx      ← About page
│   ├── services/page.tsx   ← Services page
│   ├── portfolio/page.tsx  ← Portfolio page (filterable)
│   ├── team/page.tsx       ← Team page
│   └── contact/page.tsx    ← Contact page (with form)
├── components/
│   ├── Navbar.tsx          ← Sticky navbar with mobile menu
│   └── Footer.tsx          ← Full footer with links & social
├── lib/
│   └── useScrollReveal.ts  ← Scroll animation hook
├── public/
│   └── robots.txt
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── vercel.json
```

---

## STEP 1 — LOCAL SETUP

### Prerequisites
- Node.js 18+ installed (https://nodejs.org)
- Git installed (https://git-scm.com)
- A free GitHub account (https://github.com)
- A free Vercel account (https://vercel.com) — sign up with GitHub

### Install and run locally

```bash
# 1. Enter the project folder
cd returno-india

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open http://localhost:3000 in your browser. You should see the website.

---

## STEP 2 — CONNECT CONTACT FORM (Required before launch)

The contact form currently simulates sending. You need to connect a real email service.

### Option A: Formspree (Easiest — Free)
1. Go to https://formspree.io and create an account
2. Create a new form → get your Form ID (looks like `xabc1234`)
3. In `app/contact/page.tsx`, find `handleSubmit` and replace the demo code:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setStatus('sending')

  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })

  if (res.ok) {
    setStatus('sent')
  } else {
    setStatus('error')
  }
}
```

### Option B: EmailJS (No backend needed — Free)
1. Go to https://emailjs.com → create account
2. Add email service (Gmail) → create email template
3. Install: `npm install @emailjs/browser`
4. Use EmailJS `sendForm` in the submit handler

---

## STEP 3 — CUSTOMIZE CONTENT

### Update team member names
Edit `app/team/page.tsx` → update the `team` array with real names, roles, bios.

### Add real portfolio images
Edit `app/portfolio/page.tsx` → add Next.js `<Image>` tags with real photos.

Example for each portfolio card:
```tsx
import Image from 'next/image'

// Inside the card:
<Image
  src="/portfolio/project1.jpg"  // place image in /public/portfolio/
  alt="Project Name"
  fill
  className="object-cover"
/>
```

Place images in: `public/portfolio/filename.jpg`

### Update sitemap domain
Edit `app/sitemap.ts` → replace `returnoindia.com` with your actual domain.

### Update robots.txt
Edit `public/robots.txt` → replace `yourdomain.com` with your actual domain.

---

## STEP 4 — DEPLOY TO VERCEL

### A. Push to GitHub

```bash
# Inside the returno-india folder:
git init
git add .
git commit -m "Initial commit — Returno India website"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/returno-india.git
git branch -M main
git push -u origin main
```

### B. Deploy on Vercel

1. Go to https://vercel.com → click **Add New Project**
2. Click **Import Git Repository** → select `returno-india`
3. Vercel auto-detects Next.js → click **Deploy**
4. Wait ~2 minutes → your site is live at `your-project.vercel.app`

That's it. Every time you `git push`, Vercel auto-redeploys.

---

## STEP 5 — CUSTOM DOMAIN (Optional but recommended)

### On Vercel:
1. Go to your project → **Settings** → **Domains**
2. Add your domain (e.g., `returnoindia.com`)
3. Vercel gives you DNS records to add

### On your domain registrar (GoDaddy, Namecheap, etc.):
Add the DNS records Vercel provides:
- Type: `A`, Value: `76.76.21.21`
- Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

SSL certificate is auto-managed by Vercel (free HTTPS).

---

## STEP 6 — SEO SETUP (After domain is live)

1. **Google Search Console**: https://search.google.com/search-console
   - Add your domain → verify ownership
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Update metadata** in `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'), // ← Add this
  ...
}
```

---

## QUICK CUSTOMIZATION REFERENCE

| What to change | File |
|---|---|
| Hero headline | `app/page.tsx` |
| About story | `app/about/page.tsx` |
| Services list | `app/services/page.tsx` |
| Portfolio works | `app/portfolio/page.tsx` |
| Team members | `app/team/page.tsx` |
| Contact details | `app/contact/page.tsx` & `components/Footer.tsx` |
| Colors & fonts | `app/globals.css` & `tailwind.config.js` |
| SEO title/desc | `app/layout.tsx` |
| Nav links | `components/Navbar.tsx` |

---

## PERFORMANCE TIPS

- All images: use Next.js `<Image>` component for automatic optimization
- Keep images under 500KB (use https://squoosh.app to compress)
- The build will score 90+ on Google PageSpeed automatically

---

## SUPPORT

Need help with deployment or customization? Contact:
kishakumar062006@gmail.com | +91 87925 47821
