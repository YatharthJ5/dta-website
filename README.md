# D.T.A. — Delhi Teaching Academy Website

Premium single-page website built with **React + Vite + TypeScript + Tailwind CSS v4**. No animation library: motion uses CSS transitions/keyframes and IntersectionObserver, and respects `prefers-reduced-motion`.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build
```bash
npm run build      # type-checks, then outputs to dist/
npm run preview    # serve the built site locally
```

## Deploy to GitHub Pages
The build uses a relative base (`base: './'` in `vite.config.ts`), so it works on **any** repository name or a user site with no changes.

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.
4. Your site appears at `https://<username>.github.io/<repository>/`.

Alternative (manual): run `npm run build` and publish the contents of `dist/`.

## Where to edit content
| What | File |
|---|---|
| Phone, email, address, courses, faculty, FAQ, admission steps | `src/data/site.ts` |
| Free Education Initiative | `src/components/FreeEducation.tsx` |
| Learning-environment panels / real photos | `src/data/environment.ts` |
| Results & achievements (empty until verified data exists) | `RESULTS` array in `src/components/Results.tsx` |
| Faculty photographs | `src/assets/aditya-pandey.jpg`, `src/assets/adarsh-pandey-sir.png` |
| Logo / favicon | `src/assets/dta-logo.jpg`, `public/favicon*.png`, `public/og-image.jpg` |
| Colours & fonts | `@theme` block in `src/index.css` |

Photo mapping: `aditya-pandey.jpg` = Aditya Pandey Sir (Science); `adarsh-pandey-sir.png` = Adarsh Pandey Sir (Mathematics).

## Enquiry form
There is no backend. The form validates input, then opens **WhatsApp** (+91 7011194901) with a prefilled message, or the visitor's email app. Nothing is stored and nothing is sent automatically. To use a form service later, replace the `submit` function in `src/components/Contact.tsx`.

## Information still to confirm / supply
- Confirm whether the exam is **DSSSB**; change `dsssbLabel` in `src/data/site.ts` (currently "DSSB / DSSSB").
- Confirm the email spelling `dtadelhiteachingacadmy6316@gmail.com` (as supplied, "acadmy").
- Verified results, toppers and testimonials (none published).
- Real photographs of the classrooms and labs.
- Google Maps is embedded in the Contact section using the institute address; the directions link opens Google Maps.
- Instagram: [@d.t.a_26](https://www.instagram.com/d.t.a_26/).
- Director's photograph, if desired.
