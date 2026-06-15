# Dental Clinic Demo Template (Next.js + Tailwind)

A reusable, data-driven landing page for Indore dental clinics. Built to spin up
a **personalised demo per clinic in under 90 minutes** by editing one file.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

Build for production: `npm run build && npm start`

## The 90-minute swap checklist (do this per clinic)

Everything clinic-specific lives in **`data/clinic.ts`**. You almost never touch
the components. Per demo:

1. **Identity** — `name`, `shortName`, `tagline`, `establishedYear`.
2. **Theme** — set `theme.brand` / `accent` etc. to the clinic's brand colours
   (use `"R G B"` values, e.g. `"13 92 99"`). The whole site recolours.
3. **Contact** — `phone`, `phoneDisplay`, `whatsapp`, `email`, `address`.
   - Map: Google Maps → the clinic → Share → **Embed a map** → copy the `src`
     into `address.mapEmbedSrc`.
4. **Hours**, **social** links.
5. **Hero** headline/sub — keep it about *their* patients, not features.
6. **Services** — trim/reorder to match what the clinic actually offers.
7. **Doctors** — names, roles, credentials.
8. **Testimonials** — paste 3 real Google reviews (highest-trust section).
9. **Images** — drop real photos into `public/images/` with these exact names:
   - `hero.jpg`, `clinic-interior.jpg`
   - `doctor-1.jpg`, `doctor-2.jpg`
   - `case-1-before.jpg`, `case-1-after.jpg` (and 2, 3)
   Pull these from the clinic's Google Business Profile / Instagram for the demo.
   Missing images degrade to a clean branded placeholder, so the page never breaks.

## Deploy a demo (free)

```bash
npx vercel        # or push to GitHub and import at vercel.com
```

You get a live URL like `clinicname.vercel.app` to show on the owner's phone.

## Structure

```
data/clinic.ts        <- the only file you edit per clinic
app/layout.tsx        <- fonts, SEO metadata, theme injection
app/page.tsx          <- section order
components/            <- Header, Hero, Services, About, Doctors, Gallery,
                         Testimonials, Faq, Contact, Footer, FloatingButtons
public/images/         <- clinic photos
```

## Notes

- Built on Next.js 14 (App Router) + Tailwind CSS. Fonts: Fraunces + Plus Jakarta Sans.
- The appointment form opens **WhatsApp prefilled** — the channel Indian patients
  actually use. No backend needed for the demo.
- Floating WhatsApp + Call buttons are always visible on mobile.
