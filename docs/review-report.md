# Review Report: Matariki Massage & Wellness
**Status: FAIL**
**Live URL:** https://matariki-massage-wellness.vercel.app

## Checklist
- [x] Site is live and accessible
- [x] Content matches brief
- [x] All pages exist and render
- [x] SEO baseline met (meta tags, schema)
- [ ] No placeholder text

## Issues Found
- `/home/bob/workspace/matariki-massage-wellness/site/app/contact/page.tsx:70-90` — The contact page includes a static enquiry form with no action, handler, or visible submission flow. This presents as a real booking/enquiry form on the live site, but it does not submit anywhere, which leaves a key conversion path broken.
- `/home/bob/workspace/matariki-massage-wellness/site/app/contact/page.tsx:73,77,81,85` — Placeholder copy remains in the visible form fields (`Your name`, `you@example.com`, `Optional`, and the textarea prompt). Per review rules, visible placeholder text counts as unresolved placeholder content.
- `/home/bob/workspace/matariki-massage-wellness/site/app/treatments/page.tsx:115-170` — The Treatments page is missing the FAQ section called for in the brief/design spec.
- `/home/bob/workspace/matariki-massage-wellness/site/app/gift-vouchers/page.tsx:97-134` — The Gift Vouchers page is missing both the “How it works” and FAQ sections required by the design spec.
- `/home/bob/workspace/matariki-massage-wellness/site/app/contact/page.tsx:95-141` — The Contact / Book page is missing the map or map-style visit panel specified in the design spec; it currently shows only imagery and text.
- `/home/bob/workspace/matariki-massage-wellness/site/app/layout.tsx:194-201` — Mobile navigation does not collapse to a hamburger below 960px as specified. It becomes a horizontal scroll list instead.

## Verdict
The site is live, polished, and broadly aligned with the brand brief, and core pages render with a solid SEO baseline. However, it does not pass final QA because a primary conversion element is non-functional, visible placeholder text remains, and several required sections from the design spec are missing. Rework the contact flow so enquiries can actually be sent, remove placeholder copy from the live experience, and add the missing FAQ/how-it-works/map elements before resubmitting for review.
