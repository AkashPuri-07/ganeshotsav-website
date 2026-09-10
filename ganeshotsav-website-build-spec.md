# Build Spec — Sarvajanik Shri Ganesh Utsav Mandal Website

**For:** Claude Code
**Owner:** Akash "Akki" Puri
**Deadline pressure:** Ganesh Chaturthi 2026 starts **Monday, Sept 14, 2026**. Festival runs through **Sept 25, 2026** (11 days, ending Anant Chaturdashi). Site needs to be live and tested well before Sept 14.

---

## 1. How to work with me on this (please read first)

- Go **slow, step-by-step** — confirm with me before moving to the next step. Don't combine multiple actions or jump ahead.
- **Explain changes in plain English** before making them — I want to understand *why*, not just see it done.
- **Always ask before committing or pushing to GitHub.**
- I'm on **Windows 11**, using Command Prompt, and I use **Claude Code as a desktop app** (not CLI).
- My GitHub username is **AkashPuri-07**.
- Please set these up as standing rules in a `CLAUDE.md` file at the start, so I don't have to repeat them every session.
- I'd like results/preview shown before anything goes live.

---

## 2. Tech stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Hosting:** GitHub Pages (static export)
- **Domain:** `belgaumbhagyavidhata.com` (already purchased via Hostinger, 1 year, need DNS pointed to GitHub Pages)
- **Images:** Next.js image optimization; lazy-load anything heavy (especially the live aarti embed) to keep the static site fast
- **No database needed** — daily updates and content can be simple markdown/JSON files in the repo

---

## 3. Design direction

**Colors:**
- Ink (text): `#1c1410`
- Marigold: `#e2792a`
- Marigold deep: `#c8611c`
- Vermilion (accent/headings): `#a13d2b`
- Ivory (background): `#faf3e6`
- Ivory warm: `#f3e6d0`
- Leaf green (small accents): `#3f5d3a`
- Gold (dividers): `#c99a3d`

**Fonts:** "Yatra One" for display/headlines (festive, Devanagari-inspired), "Karla" for body text. Both via Google Fonts.

**Hero section:** Marigold gradient background (keep this — confirmed, not white). Split layout: tagline/text on one side, this year's Ganpati photo on the other (placeholder until photo is available closer to Sept 14). Stacks vertically on mobile.

**Gallery:** Photos shown with a slight polaroid-style tilt and white border, straighten + lift on hover. No year-tabs for now (photos aren't sorted by year yet — add later).

**Sponsor cards:** Small icon per sponsor matched to their industry (e.g. car icon for travel agency, diamond for jewellery, bread for bakery), full details (name, category, address, phone) visible by default — not hidden behind a tap.

**Team section:** Executive committee shown as visible, prominent cards (not hidden). Other departments (Prasad, Mandap Decoration, Procession, Sports) shown as an accordion — tap a department to expand and see all members.

**Navigation:** Single-page site. "See today's update" and "Watch live aarti" buttons scroll to the relevant section on the same page (not separate pages).

---

## 4. Site sections

### 4.1 Home
- Hero: tagline "Belgaum cha भाग्यविधाता" (Belgaum cha Bhagyavidhata), mandal name, festival dates (Sept 14–25, 2026), "49th year" badge
- This year's Ganpati photo (placeholder until available)
- Two CTA buttons: "See today's update" → scrolls to Daily Updates; "Watch live aarti" → scrolls to Live Aarti section
- Quick links to all sections

### 4.2 Daily Updates
- One entry per festival day (Day 1 through Day 11)
- Each entry: day number, short title, 2-3 line write-up, photos, a "highlight" tag (e.g. "Idol arrival," "Cultural program")
- Reverse chronological — latest day on top
- **Important: no self-service form/admin page.** I will message the update (photos + text) each day directly in chat, and it should be straightforward for me (via Claude in chat) to add/edit that day's entry in the repo — e.g. one simple markdown or JSON file per day.

### 4.3 Gallery — "Moments we've kept"
- Old photos pulled from this Google Drive folder: `https://drive.google.com/drive/folders/1s6wAsIF23d79LDXdeWo7VbjN6YxIiepf?usp=sharing`
- ~28 photos currently in the folder, more may be added later by two other contributors who have edit access
- No year-sorting for now — just a grid, polaroid hover style as described above
- Design so year-tabs can be added later without restructuring

### 4.4 About
- Mandal history: **Sarvajanik Shri Ganesh Utsav Mandal**, Hajjugiri, Bhagyanagar 1st Cross, Anagol, Belgaum. Established **1978**. 2026 is the **49th year**.
- Banner tagline reference: "Belgaum cha Bhagyavidhata" (adapted from the mandal's own banner, which says "Bhagyanagarcha Bhagyavidhata" — we've widened it to "Belgaum cha" for the website's broader audience)
- **Thank You section** (warm prose, not the formal printed version, no rupee figures ever):

> Every year, our Ganeshotsav comes alive because of the generosity of our own community — a beautifully sculpted idol, a pandal built with care, a tractor for the procession, and so much more given with love.
>
> We're especially grateful to **Shri Abhijit Puri**, who has sponsored our Ganpati idol for **10 consecutive years** — a true reflection of his devotion and generosity. Our heartfelt thanks also to our idol sculptor **Shri Vinayak J. Patil**, and to **Shri Digambar M. Raul, Shri Prakash Medar, Shri Shridhar Bhandurge,** and **Gangaram Seva Trust (Santosh Plastic)** for their support this year.
>
> We also remember and honor **Late Shri Dattaji Keroji Shenavi**, in whose loving memory a lamp was lit for our Ganpati this year.
>
> And to every advertiser, member, donor, volunteer, and devotee who helped in ways big and small — thank you for making this festival ours, together.

- **Do not** include any donation amounts/figures anywhere on the site.

### 4.5 Our Team
Executive Committee (show as visible cards, not hidden):
- President: Shri Digambar Raul
- Secretary: Shri Arun Puri
- Vice Secretary: Shri Shantaram Chougule
- Treasurer: Shri Babal Shenavi
- Vice Treasurers: Shri Mahadev Dhegaskar, Shri Rajaram Chougule
- Auditors: Shri Krishna Gawde (Patil), Shri Vasant Dandekar
- Coordinators/Invitees: Shri Adv. Mukund Halpannavar, Shri Kundan Chougule, Shri Chandrakant Patil
- Vice President: Shri Anand Barge
- Advisory Members: Shri Mahadev Appaji Chougule, Shri Mallappa Anandache, Shri Sudhir Mutgekar, Shri Ramchandra Sukhaye, Shri A. L. Gurav, Shri Madhusudan Gurav, Shri V. B. Patil, Shri Mahesh Anandache, Shri Shivaji Patil, Shri Subhash Chougule, Shri V. K. Kulkarni, Shri Sachin Chandgadkar

Other departments (accordion — expand to show full list):

**Prasad Committee** — President: Shri Vasudev Chougule, VP: Shri Amit Chougule
Members: Shri Jitesh Puri, Shri Balkrishna Yadav, Shri Ravindra Murkute, Shri Amol Desai, Kum. Nikhil Raul, Kum. Deepak Nitturkar, Kum. Madhusudan Bhandurge, Shri Amol Chougule, Shri Hemant Gurav, Shri Mahesh More, Shri Nitin Nikam, Kum. Pratik Khade, Shri Sushant Chavan, Kum. Nishant Hegde, Shri Abhijeet Puri, Shri Prashant Shinde, Shri Anand Patil, Kum. Abhishek Shinde, Shri Shubham Patil, Kum. Kartik Chougule, Kum. Piyush Bongale

**Mandap Decoration Committee** — President: Shri Sanjay Vaze, VP: Shri Vinayak Gawde
Members: Shri Avdhut Samant, Shri Yogesh Gholse, Shri Vinayak Raul, Shri Mahesh Chougule, Shri Siddharth More, Shri Sunil Raul, Shri Amit Puri, Kum. Dinesh Mane, Kum. Anuj Shenavi, Kum. Prashant Chavan, Shri Manoj Raul, Shri Anil Dhamanekar, Shri Dinesh Anandache, Shri Amol Gawde (Patil), Shri Shivaji More, Shri Vijay Mane, Shri Shridhar Bhandurge, Shri Kushal Shenavi, Shri Amol Barge, Shri Sachin Raul, Shri Shivaji Shenavi, Shri Sunil Gawde, Shri Parshuram Patil, Shri Raju Betigar, Shri Muralidhar Patil, Shri Shekhar Kondekar, Shri Pravin Shinde, Shri Girish Raul, Shri Darshan Shinde, Shri Rajesh Mane

**Procession Committee (Mirvanuk)** — President: Shri Rajaram Bhandurge, VP: Shri Deepak Gawde
Members: Shri Santosh Shenavi, Shri Suresh Phatak, Shri Sanjay Gawde, Shri Gajanan Bhandurge, Shri Ajit Datta Gawde, Kum. Sudarshan Shinde, Kum. Ashish Shenavi, Kum. Shubham Gawde, Shri Jogesh Nikam, Kum. Sagar Shenavi, Shri Ramchandra Mhatungade, Shri Maruti Patil, Shri Sandeep Patil, Shri Pranav Chougule, Shri Shivanand Kamule, Shri Anil Bhandurge, Shri V. B. Patil, Shri Sachin Gilbile, Kum. Shailesh Malvankar, Shri Aniket Puri, Shri Vitthal Chougule, Shri Raju Chougule, Shri Manohar Bhandurge, Shri Deepak Suryavanshi, Shri Omkar Kulkarni, Shri Pavan Khade, Shri Satish Mutgekar, Kum. Ashish Chougule, Kum. Swapnil Khade, Kum. Aditya Chougule

**Sports Committee** — President: Shri Gajanan Anandache, VP: Shri Rushikesh Shenavi
Members: Shri Dhondiram Divate, Kum. Subhash Nitturkar, Shri Shantaram Chougule, Shri Akash Puri, Shri Sandeep Asogekar

> ⚠️ **Names need a final accuracy check before going live** — several similar-sounding surnames repeat (Chougule, Patil, Raul). Flag this to Akki before publishing.

### 4.6 Sponsors (27 total)
Show as cards: icon (matched to industry) + name + category + address + phone, all visible by default.

1. Shri Swami Samarth Tours & Travels — Tata Winger/Vista, all vehicle types. Bhagyanagar 3rd Cross, Angol, Belgaum-07. Dinesh Mane, 8050474062 / 7899001647
2. Rajashree Bakery, Sweets & General Stores — Est. 1964, Golden Jubilee 62 years. Raghunath Peth, Anagol (2nd branch Harinagar, Bhagyanagar Cross No. 1). S.S. Chandgadkar, 8073727852 / 8722338854
3. Shri Ganesh Jewellery Works — Gold & silver ornaments. Bhagya Nagar, 1st Cross, Belgaum. Nitin V. Gaonkar, 9731610882
4. Yash Farsan House — Poha, chirmure, shenga, farsan, futane. Opp Apollo Pharmacy, Anagol Main Road, Belgaum-590006. Vishwaraj Hadimani, 74118 63155
5. Shree Datta Mirchi Kandap — Chilli/turmeric powder, garam masala, wet masala. 747, Shree Datta Niwas, Anagol Mal, Belgaum. Sau. Sanjivani Shenavi, Sau. Nandini Shenavi, 8867293264 / 9538609395
6. M/s. Shree Daneshwari Medicals & General Stores — Chintamani Plaza, Angol Main Road, Belgaum-6. Amit N. Attimarad, 9632539960
7. Shri Pant Prakash Agency — Agarbatti, perfumes, pooja items. 726/2A, Mauli Apartment, Anagol Road, Belgaum-06. 9663069466
8. Mauli Stores — Grains & groceries. 9448814682
9. Mauli Fataki Center — Fireworks wholesale. 618, Anagol Road, Belgaum. Gondadkar & Sons, 9448814682
10. Sai Air-Con — Car AC installation/repair/servicing. H. No. 744/4, Bhagyanagar 1st Cross, Angol, Belgaum-590006. Abhishik Shinde, 7846876384
11. Kalyanshetti Medicals & General Stores — 52, Omkar Apartment, Angol Road, near Hari Mandir, Belgaum-6. 2481155 / 4201855
12. New Amantran Deluxe Ice Cream Parlour — Ice cream, milkshake, juices, lassi. Near Hari Mandir, Angol Road, Belgaum. Mallappa J. Patil, Sanjay M. Patil, 9945787089 / 9902895957
13. Bhagya Samuhik Varshik Fund — Community savings fund. Bhagyanagar 2nd Cross, Anagol, Belgaum.
14. Bamane Fabrication Work — SS/glass railing, MS grill, gates, aluminum work. Ganesh Peth Galli & Bhagyanagar 1st Cross, Angol. Deepak, 9606701215
15. Suraj Communication — Mobile accessories. Kavale Hostel Building, Khanapur Road, Tilakwadi, Belgaum. 740 680 7777
16. Desai Auto Garage & Servicing Centre — Two-wheeler repair/servicing. Sumitra Towers, Angol Road, Tilakwadi, Belgaum-590006. Prabhakar Desai, 9448420751
17. Sai Construction — Civil contractors, architecture, consultants. Shop 1, Anapurna Home's Appt., Bhagyanagar 1st Cross, Belgaum-590006. Jogesh Nitin Nikam, 8050215365
18. Hegade Catering — Outdoor catering, all functions. Angol Main Road, Angol, Belgaum. Ravi Hegade, 7483815709 / 7829572986
19. Mansi Mobile Store — Mobile hardware/software. Shop 737, Renuka Kunj, Angol Main Road, Belgaum. 9742440220
20. Shiva Travels & Car Washing Center + Shiva Ambulance Service (24x7) — Taxi, all types. Bhagya Nagar 1st Cross, near Datta Mandir, Angol, Belgaum. 9731896634 / 8618140313
21. Patil Construction & Interior's — Construction, architecture, interior design. Bhagya Nagar, Belagavi-590006. Pratik D. Patil 6364607990, Prajwal Patil 9632150834
22. Krishna Laundry — Washing, processing, dry cleaning. Bhagyanagar 3rd Cross, Angol, Belgaum-07. Kallappa Parit, 7350792751
23. Sunny Digital Color Lab — Photo enlargements, lamination, frames. Bhagyanagar 2nd Cross, Angol, Belgaum-07. Gajanan M. Bhatkande, 9844233978 / 9035072473
24. M/s. Abhijeet Jawalkar — Contractor, builder, developer. 2nd Cross, Bhagyanagar, Belgaum-590006. 0831-4216319 / 97413 96228
25. Siddhakala Building Material Suppliers — Sand, aggregates, bricks, cement. Omkar Desai, 7411368185
26. The Adarsh Multipurpose Co-op Society Ltd. — Savings/deposits. Anagol Cross, Tilakwadi, Belgaum. 8694941721
27. The Dragon Wok — Restaurant (veg/non-veg: Manchurian, rice, biryani, noodles, momos). Opp Avon Bakers, Angol Main Road, Belgaum. Ashwini Avinash Chougule, 9900987330
28. Sadguru Sweets & Bakers — All functions/party orders, wholesale. 733/3, Near Hari Mandir, Angol Main Road, Belgaum. Ankur 7411286126, Omkar 6360111121, Siddharth 6360956525

> Note: numbering shows 28 lines above because of a duplicate check done earlier (Mansi Mobile Store appears once, correctly, as #19) — treat this as the final list of 27 unique sponsors.

### 4.7 Location & Contact
- Pandal address: **1st Cross Road, Bhagya Nagar, Angol, Belagavi, Karnataka 590006** (Google Maps-friendly format)
- Full formal address: Sarvajanik Shri Ganesh Utsav Mandal, Hajjugiri, Bhagyanagar 1st Cross, Angol, Belgaum – 590006
- Google Maps embed using the address above
- **Aarti timings: TBD — placeholder for now, Akki will provide**
- **Contact number/email for site: TBD — placeholder for now**

### 4.8 Live Aarti
- Embed a YouTube Live player (lazy-loaded — show a "tap to load live stream" thumbnail rather than auto-loading the iframe, to keep the static GitHub Pages site fast)
- Before aarti starts: show "Aarti today at [time]" placeholder text
- During aarti: live YouTube stream
- After aarti: automatically becomes the YouTube replay (same embed)
- **Streaming source still being decided** — either (a) a dedicated YouTube channel for the mandal, streamed via phone during aarti, or (b) an existing CCTV camera pushed to YouTube via RTMP (Akki is checking if the CCTV brand/app supports this). Build the embed to work with a YouTube video ID/channel ID either way — source mechanism doesn't change the website code.

---

## 5. SEO requirements

- Proper meta tags per page (title, description) — include mandal name, "Bhagyavidhata," "Belgaum," "Ganeshotsav," "Anagol"
- Server-side rendering / static generation (Next.js default) so content is crawlable
- Structured data: mark up as an **Event** (schema.org) — dates Sept 14–25, 2026, location = pandal address
- Clean URLs (e.g. `/day-3`, not query strings)
- `sitemap.xml` and `robots.txt`
- Fast load — optimize images, lazy-load the live aarti embed
- Alt text on all images
- Open Graph tags for WhatsApp/social share previews — when the link is shared, it should show a nice image + caption automatically (this matters a lot since sharing will mostly happen via WhatsApp)
- Once live: Akki will verify the site in **Google Search Console** and submit the sitemap — flag this as a follow-up step after deployment, don't need to build anything special for it beyond a valid sitemap.xml

---

## 6. Explicit exclusions (do not add these)

- ❌ No donation list or donation amounts/figures anywhere on the site
- ❌ No self-service admin/form for posting daily updates — Akki will provide daily content via chat, and updates should be easy to add via simple file edits in the repo
- ❌ No logo yet — skip for now, can be added later
- ❌ No multi-language toggle, e-seva booking, or other "big temple trust" features — keep this to the scope above

---

## 7. Outstanding items (placeholders needed, to be filled in before launch)

- [ ] Aarti timings (morning/evening)
- [ ] Any special programs planned for 2026
- [ ] Contact number/email for the site
- [ ] This year's Ganpati photo (once idol arrives, close to Sept 14)
- [ ] Final decision + setup on live streaming source (YouTube channel vs CCTV RTMP)
- [ ] Final name-accuracy check across committee/sponsor lists

---

## 8. Timeline note

Today is roughly a week before Sept 14. Please prioritize getting the **structure, design system, and core sections (Home, About, Team, Sponsors, Location)** built and deployed first, since those don't depend on the outstanding items above. Daily Updates and Live Aarti sections should be functionally ready (even if empty/placeholder) before Sept 14, since they'll be used starting Day 1 of the festival.
