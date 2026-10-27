import Image from "next/image";
import Icon, { Stars } from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(661) 305-9304";
const TEL = "tel:+16613059304";
const SMS = "sms:+16613059304";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Prestige%20Home%20Builders%20Inc&query_place_id=ChIJIVBUOFAbrawRuJhkHsIie8w";
const IG = "https://www.instagram.com/prestige_homes_contracting";

const services = [
  {
    icon: "drop",
    name: "Rain Gutters & Gutter Guards",
    text: "New seamless-look gutters and guards installed before the rains hit. Anthony checks your roofline, downspout placement and where the water needs to go, so it ends up away from your foundation and walkways.",
    featured: true,
  },
  {
    icon: "home",
    name: "Bathroom Remodeling",
    text: "Full bathroom remodels managed by Anthony from first walkthrough to final wipe-down: walk-in showers with glass doors, tile, vanities, lighting and fixtures. You know what is happening each day and what comes next.",
  },
  {
    icon: "grid",
    name: "Fencing",
    text: "New fence installation for backyards and side yards. Everything is explained up front, and the crew hauls off the old material and cleans up so the only thing left behind is the new fence.",
  },
  {
    icon: "hammer",
    name: "Roof & Eave Repair",
    text: "Inspections and repairs for damaged roof sections and eaves, including finding and sealing squirrel and rodent entry points before they turn into a bigger problem in the attic.",
  },
  {
    icon: "sun",
    name: "Bathtub Reglazing",
    text: "Bring a worn or stained tub back to a clean, bright finish without tearing it out. A fast, budget-friendly way to refresh a bathroom when a full remodel isn't needed.",
  },
  {
    icon: "shield",
    name: "Rodent Exclusion",
    text: "Gaps around eaves, vents and rooflines are tracked down and sealed so squirrels and rodents stay outside. Often paired with roof and eave repairs on the same visit.",
  },
];

const reviews = [
  { name: "Pam W.", job: "Roof & eave repair", text: "They found and sealed every single squirrel entrance on the house and repaired the damaged roof sections while they were at it." },
  { name: "Alberto G.", job: "Two-bathroom remodel", text: "Anthony made remodeling two bathrooms painless and worry-free. The finished work is phenomenal." },
  { name: "Christopher S.", job: "Repeat projects + tub reglaze", text: "He has never once tried to upsell us. We came back for a bathtub reglaze and it came out great." },
  { name: "Robin H.", job: "Fencing", text: "Anthony explained everything up front. The crew cleaned up completely, and all that was left was a lovely new fence." },
  { name: "Vivian E.", job: "Gutters + guards", text: "On time, listened to what we wanted, and installed new gutters and guards at a reasonable price." },
  { name: "Tuyet N.", job: "Rain gutters", text: "With a wet winter coming, we researched our options and chose Prestige. Anthony came out himself and handled the install." },
];

const steps = [
  { title: "Call or text Anthony", text: "Tell him what's going on, whether it's overflowing gutters, a dated bathroom or a fence that's leaning. He'll set a time to come look." },
  { title: "Walkthrough & honest advice", text: "Anthony looks at the job in person and tells you what it actually needs. No pressure, and no add-ons you didn't ask for." },
  { title: "Clear written quote", text: "You get the scope and price before anything starts, plus a plain explanation of how the work will go." },
  { title: "The work gets done", text: "The crew shows up when they say they will and keeps you updated as the project moves along." },
  { title: "Clean-up & walk-through", text: "Nails, scraps and trash are picked up before the crew leaves. You walk the finished job together." },
];

const faqs = [
  { q: "What areas do you serve?", a: "Prestige Home Builders works in Palmdale and across the Antelope Valley. If you're nearby and not sure we cover your street, call or text (661) 305-9304 and ask." },
  { q: "Do you give free estimates?", a: "Call to set up a walkthrough. Anthony will look at the job, explain what it needs and give you a clear quote before any work begins." },
  { q: "Will you try to sell me more than I need?", a: "No. Customers mention it again and again in our Google reviews: Anthony recommends what the job needs and nothing more. If a reglaze will do instead of a full remodel, he'll tell you." },
  { q: "When should I get new gutters installed?", a: "Before the rainy season is best. Several customers booked gutters and guards this fall ahead of a wet winter. Call early so your install is done before the first big storm." },
  { q: "Can you fix animal damage on my roof?", a: "Yes. We inspect the roofline and eaves, seal squirrel and rodent entry points and repair the damaged sections in the same project." },
  { q: "What are your hours?", a: "Monday to Friday 8 a.m. to 6 p.m., and Saturday 8 a.m. to 2 p.m. Closed Sunday. Texts are welcome any time and answered during business hours." },
  { q: "Who will I be working with?", a: "Anthony Najera runs every job. He's the one who walks the project with you, answers your questions and checks the finished work." },
];

const gallery = [
  { src: "/images/p1.jpg", alt: "Remodeled bathroom with sliding barn door, white double vanity and lit mirror" },
  { src: "/images/p3.jpg", alt: "Walk-in shower with frameless sliding glass door and black fixtures" },
  { src: "/images/p2.jpg", alt: "New roof shingles being installed on a single-story home" },
  { src: "/images/p4.jpg", alt: "White vanity with quartz top and matte black faucet" },
  { src: "/images/p5.jpg", alt: "White wood patio cover with decorative brackets" },
  { src: "/images/p6.jpg", alt: "Bathroom with LED-backlit mirror, white vanity and new toilet" },
  { src: "/images/p8.jpg", alt: "Finished bathroom with wall-hung fixtures and wood-look floor" },
  { src: "/images/p9.jpg", alt: "Barn door opening onto a remodeled bathroom with vanity" },
  { src: "/images/p10.jpg", alt: "Completed gray asphalt shingle roof section" },
  { src: "/images/p11.jpg", alt: "Marble-look tile shower with recessed niche and window" },
  { src: "/images/p12.jpg", alt: "Glass shower enclosure with built-in shelf niche" },
];

const area = ["Palmdale", "Antelope Valley"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Prestige Home Builders Inc.",
  telephone: "+1-661-305-9304",
  url: "https://prestige-home-builders-inc.growlocalvisibility.com",
  image: "/images/p7.jpg",
  founder: { "@type": "Person", name: "Anthony Najera" },
  areaServed: area,
  address: { "@type": "PostalAddress", addressLocality: "Palmdale", addressRegion: "CA", addressCountry: "US" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: 4.8, reviewCount: 14 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "14:00" },
  ],
  sameAs: [IG],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <div className="hidden bg-brand-deep text-sm text-white/85 md:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
          <span className="inline-flex items-center gap-2"><Icon name="pin" className="h-4 w-4" /> Palmdale &amp; the Antelope Valley</span>
          <span className="inline-flex items-center gap-2"><Icon name="clock" className="h-4 w-4" /> Mon–Fri 8–6 · Sat 8–2</span>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Prestige Home Builders Inc. home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="home" className="h-6 w-6" /></span>
            <span className="leading-tight">
              <span className="block font-heading text-lg font-extrabold text-brand-deep">Prestige Home Builders</span>
              <span className="block text-xs font-semibold text-muted">General Contractor · Palmdale, CA</span>
            </span>
          </a>
          <nav className="hidden items-center gap-7 font-semibold text-ink lg:flex" aria-label="Main">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="ring-phone hidden items-center gap-2 font-bold text-brand-deep md:inline-flex"><Icon name="phone" className="h-5 w-5" />{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex">Call Now</a>
            <a href={TEL} className="grid h-11 w-11 place-items-center rounded-lg bg-cta text-ink sm:hidden" aria-label={`Call ${PHONE}`}><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-tint">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand shadow-sm">
                <Icon name="drop" className="h-4 w-4" /> Now booking gutter installs before winter rains
              </p>
              <h1 className="text-[clamp(2.3rem,5vw,3.9rem)] text-brand-deep">
                Rain Gutters, Bathroom Remodels &amp; Home Repairs in Palmdale and the Antelope Valley
              </h1>
              <p className="mt-5 max-w-[60ch] text-lg text-muted md:text-xl">
                Anthony Najera and his crew handle the projects homeowners keep putting off, from gutters and guards to full bathroom remodels, fencing and roof repair. Straight answers, no upselling, and a clean job site when they leave.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={TEL} className="btn btn-cta ring-phone text-lg"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost text-lg"><Icon name="text" className="h-5 w-5" />Text Anthony</a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[15px] font-semibold text-ink">
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand">
                  <Stars className="h-5 w-5" /> 4.8 · 14 Google reviews
                </a>
                <span className="inline-flex items-center gap-1.5"><Icon name="user" className="h-5 w-5 text-brand" /> Owner on every job</span>
                <span className="inline-flex items-center gap-1.5"><Icon name="thumb" className="h-5 w-5 text-brand" /> No upselling</span>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_oklch(0.27_0.08_262/0.55)]">
                <Image src="/images/p7.jpg" alt="Walk-in shower with marble-look tile and sliding glass door, remodeled by Prestige Home Builders" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 left-4 right-4 rounded-xl border border-line bg-white p-4 shadow-lg sm:left-auto sm:right-[-12px] sm:w-72">
                <Stars className="h-4 w-4" />
                <p className="mt-2 text-[15px] leading-snug text-ink">&ldquo;Anthony made remodeling two bathrooms painless and worry-free.&rdquo;</p>
                <p className="mt-1 text-sm font-semibold text-muted">Alberto G. · Bathroom remodel</p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="bg-brand text-white" aria-label="Why homeowners trust us">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-9 md:grid-cols-4 md:px-6">
            {[
              { icon: "thumb", big: "4.8 ★", small: "14 Google reviews" },
              { icon: "user", big: "Anthony Najera", small: "Owner-run, start to finish" },
              { icon: "tag", big: "Honest quotes", small: "No upselling, ever" },
              { icon: "trash", big: "Clean job sites", small: "No nails or trash left behind" },
            ].map((t) => (
              <div key={t.big} className="flex items-start gap-3">
                <span className="mt-1 text-cta"><Icon name={t.icon} className="h-7 w-7" /></span>
                <div>
                  <p className="font-heading text-xl font-extrabold leading-tight">{t.big}</p>
                  <p className="text-sm text-white/80">{t.small}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="max-w-2xl">
              <p className="font-semibold text-brand">What we do</p>
              <h2 className="mt-2 text-3xl md:text-5xl text-brand-deep">Home improvement services in the Antelope Valley</h2>
              <p className="mt-4 text-muted">One call covers the outside of the house and the inside. These are the jobs Palmdale homeowners hire Prestige for most.</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift relative flex flex-col rounded-2xl border bg-white p-6 ${s.featured ? "border-brand ring-2 ring-brand/15" : "border-line"}`}>
                  {s.featured && <span className="absolute -top-3 left-6 rounded-full bg-cta px-3 py-0.5 text-xs font-bold text-ink">Most requested this fall</span>}
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} className="h-6 w-6" /></span>
                  <h3 className="mt-4 text-xl text-brand-deep">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[17px] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:gap-2.5 transition-all">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-semibold text-brand">Reviews</p>
                <h2 className="mt-2 text-3xl md:text-5xl text-brand-deep">Rated 4.8 from 14 Google reviews</h2>
                <p className="mt-3 max-w-xl text-muted">The same three things come up over and over: Anthony is honest, he communicates clearly, and his crews leave the place spotless.</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost shrink-0">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <figure className="reveal mt-10 rounded-2xl bg-brand-deep p-8 text-white md:p-12">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-4 font-heading text-2xl font-bold leading-snug md:text-4xl">&ldquo;He has never once tried to upsell us. We keep coming back.&rdquo;</blockquote>
              <figcaption className="mt-4 text-white/80">Christopher S. · repeat customer, most recently a bathtub reglaze</figcaption>
            </figure>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl border border-line bg-white p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[17px]">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-4 border-t border-line pt-3 text-sm"><span className="font-bold">{r.name}</span> <span className="text-muted">· {r.job}</span></figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:order-2">
              <Image src="/images/p2.jpg" alt="Prestige crew installing new roof shingles on a Palmdale-area home" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <div>
              <p className="font-semibold text-brand">About Prestige</p>
              <h2 className="mt-2 text-3xl md:text-5xl text-brand-deep">Anthony runs every job himself</h2>
              <p className="mt-5">Prestige Home Builders Inc. is a local general contractor led by Anthony Najera. When you call, you talk to Anthony. He comes out, looks at the job, and tells you what it really needs, even when that's the smaller, cheaper fix.</p>
              <p className="mt-4">That's why so many customers hire Prestige more than once. A gutter install turns into a fence the next spring, and a bathroom remodel turns into a tub reglaze for the second bath. People come back because they trust the advice and like how the job site looks when the crew is done.</p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "thumb", t: "No upselling", d: "You pay for what the job needs. Nothing extra." },
                  { icon: "chat", t: "Clear communication", d: "Everything explained before work starts." },
                  { icon: "clock", t: "Shows up on time", d: "Crews arrive when they say they will." },
                  { icon: "trash", t: "Spotless cleanup", d: "No nails, scraps or trash left in your yard." },
                ].map((d) => (
                  <li key={d.t} className="flex gap-3">
                    <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={d.icon} className="h-5 w-5" /></span>
                    <span><span className="block font-bold">{d.t}</span><span className="text-[16px] text-muted">{d.d}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <p className="font-semibold text-brand">How it works</p>
            <h2 className="mt-2 max-w-2xl text-3xl md:text-5xl text-brand-deep">From first call to final walk-through</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-5">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-heading text-lg font-extrabold text-white">{i + 1}</span>
                  <h3 className="mt-4 text-lg text-brand-deep">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Gallery */}
        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="font-semibold text-brand">Our work</p>
                <h2 className="mt-2 text-3xl md:text-5xl text-brand-deep">Recent bathrooms, roofs and outdoor projects</h2>
              </div>
              <a href={IG} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold text-brand"><Icon name="instagram" className="h-5 w-5" /> More on Instagram</a>
            </div>
            <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
              {gallery.map((g) => (
                <div key={g.src} className="reveal mb-4 overflow-hidden rounded-xl break-inside-avoid">
                  <Image src={g.src} alt={g.alt} width={810} height={1080} sizes="(min-width: 1024px) 25vw, 50vw" className="h-auto w-full transition-transform duration-300 hover:scale-[1.03]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-brand">Service area</p>
              <h2 className="mt-2 text-3xl md:text-5xl text-brand-deep">Serving Palmdale and the Antelope Valley</h2>
              <p className="mt-4 text-muted">Based in Palmdale, we take on gutter, remodeling, fencing and roof jobs throughout the Antelope Valley. Don&apos;t see your town? Give us a call.</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {area.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[15px] font-semibold"><Icon name="pin" className="h-4 w-4 text-brand" />{a}</li>
                ))}
              </ul>
              <dl className="mt-8 grid gap-3 rounded-2xl border border-line bg-white p-6 text-[16px]">
                <div className="flex justify-between gap-4"><dt className="font-semibold">Monday – Friday</dt><dd className="text-muted">8 a.m. – 6 p.m.</dd></div>
                <div className="flex justify-between gap-4"><dt className="font-semibold">Saturday</dt><dd className="text-muted">8 a.m. – 2 p.m.</dd></div>
                <div className="flex justify-between gap-4"><dt className="font-semibold">Sunday</dt><dd className="text-muted">Closed</dd></div>
              </dl>
            </div>
            <div className="min-h-[340px] overflow-hidden rounded-2xl border border-line">
              <iframe title="Map of Palmdale and the Antelope Valley" src="https://maps.google.com/maps?q=Palmdale%2C%20CA&z=10&output=embed" className="h-full min-h-[340px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <p className="font-semibold text-brand">FAQ</p>
            <h2 className="mt-2 text-3xl md:text-5xl text-brand-deep">Questions homeowners ask before they call</h2>
            <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group px-6 py-5">
                  <summary className="flex items-center justify-between gap-4 text-lg font-bold">{f.q}<span className="plus text-brand"><Icon name="plus" className="h-5 w-5" /></span></summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-3xl text-white md:text-5xl">Ready to get started? Call Anthony.</h2>
              <p className="mt-3 text-white/80">Mon–Fri 8 a.m.–6 p.m. · Sat 8 a.m.–2 p.m. · Texts welcome</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={TEL} className="btn btn-cta ring-phone text-lg"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
              <a href={SMS} className="btn border-[1.5px] border-white/40 text-lg text-white hover:border-white"><Icon name="text" className="h-5 w-5" />Text us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-heading text-xl font-extrabold text-brand-deep">Prestige Home Builders Inc.</p>
            <p className="mt-2 max-w-sm text-[16px] text-muted">Honest home improvements, no upselling. Gutters, remodels and repairs by Anthony Najera in Palmdale and the Antelope Valley.</p>
            <a href={IG} target="_blank" rel="noopener noreferrer" aria-label="Prestige Home Builders on Instagram" className="mt-4 inline-grid h-11 w-11 place-items-center rounded-lg border border-line text-brand hover:border-brand"><Icon name="instagram" className="h-5 w-5" /></a>
          </div>
          <div className="text-[16px]">
            <p className="font-bold">Contact</p>
            <p className="mt-2"><a href={TEL} className="font-semibold text-brand">{PHONE}</a></p>
            <p className="mt-1 text-muted">Palmdale, CA</p>
            <p className="mt-1 text-muted">Mon–Fri 8–6 · Sat 8–2 · Sun closed</p>
            <p className="mt-1"><a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-brand underline">Google listing</a></p>
          </div>
          <div className="text-[16px]">
            <p className="font-bold">Services</p>
            <ul className="mt-2 space-y-1 text-muted">{services.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-5 text-sm text-muted md:px-6">© {new Date().getFullYear()} Prestige Home Builders Inc. · Serving {area.join(", ")}.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white p-2.5 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5" />Text</a>
      </div>
    </>
  );
}
