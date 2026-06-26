import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Check, Clock, MapPin, Phone, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import houseCallImg from "@/assets/housecall.jpg";
import lifestyleImg from "@/assets/lifestyle.jpg";
import housekeepingImg from "@/assets/housekeeping.jpg";
import straighteningImg from "@/assets/straightening.jpg";
import weavelinesImg from "@/assets/weavelines.jpg";
import svcErrands from "@/assets/svc-errands.jpg";
import svcShopper from "@/assets/svc-shopper.jpg";
import svcMealprep from "@/assets/svc-mealprep.jpg";
import svcCleaning from "@/assets/svc-cleaning.jpg";
import svcLaundry from "@/assets/svc-laundry.jpg";
import svcLinens from "@/assets/svc-linens.jpg";
import svcKitchen from "@/assets/svc-kitchen.jpg";
import svcCloset from "@/assets/svc-closet.jpg";
import nannyImg from "@/assets/nanny.jpg";
import svcNewborn from "@/assets/svc-newborn.jpg";
import svcPlaytime from "@/assets/svc-playtime.jpg";
import svcHomework from "@/assets/svc-homework.jpg";
import svcMealtime from "@/assets/svc-mealtime.jpg";
import staffHero from "@/assets/staff-hero.jpg";
import staffHousekeeper from "@/assets/staff-housekeeper.jpg";
import staffChef from "@/assets/staff-chef.jpg";
import staffEstate from "@/assets/staff-estate.jpg";
import staffPa from "@/assets/staff-pa.jpg";
import staffChauffeur from "@/assets/staff-chauffeur.jpg";
import staffCaregiver from "@/assets/staff-caregiver.jpg";
import { Nav } from "@/components/site/Nav";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { MeshBackground } from "@/components/site/MeshBackground";
import { BookingWizard, openBookingWizard } from "@/components/site/BookingWizard";
import { useReveal } from "@/hooks/use-reveal";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gemini Home Services — Luxury Home Beauty & Lifestyle Concierge, Nairobi" },
      {
        name: "description",
        content:
          "Premium in-home beauty care and discreet lifestyle assistance in Nairobi. Designed around your schedule. Book a house call today.",
      },
      { property: "og:title", content: "Gemini Home Services — Luxury Concierge, Nairobi" },
      {
        property: "og:description",
        content: "Luxury home beauty and lifestyle assistance designed around your schedule.",
      },
    ],
  }),
  component: Home,
});

const WHATSAPP = "https://wa.me/254110879109";
const PHONE_DISPLAY = "0110 879 109";

const houseCalls: { n: string; title: string; desc: string; img?: string }[] = [
  { n: "01", title: "Hair Undo", desc: "Gentle, careful removal of styles — the quiet first step of every ritual." },
  { n: "02", title: "Hair Wash, Conditioning & Leave-In", desc: "Deep cleanse and nourishment, finished with a featherlight leave-in." },
  { n: "03", title: "Hair Straightening", desc: "Silk-smooth blowouts performed with patience and precision.", img: straighteningImg },
  { n: "04", title: "Simple Weave Lines", desc: "Clean, considered cornrows — laid in calm, even hands.", img: weavelinesImg },
  { n: "05", title: "Simple Hair Twists", desc: "Soft, low-tension twists styled for everyday elegance." },
];

const lifestyle = [
  { title: "Errand Running", desc: "Pickups, drop-offs, and small tasks handled quietly so your day flows.", img: svcErrands },
  { title: "Personal Shopper", desc: "Thoughtfully selected groceries, gifts, and essentials, delivered.", img: svcShopper },
  { title: "Meal Prep Assistance", desc: "A clean kitchen and prepared meals — ready when you are.", img: svcMealprep },
];

const nanny = [
  { title: "Newborn & Infant Care", desc: "Tender, attentive care for your littlest one — feeding, soothing, and safe sleep.", img: svcNewborn },
  { title: "Playtime & Storytime", desc: "Imaginative play, songs, and read-alouds that nurture curious little minds.", img: svcPlaytime },
  { title: "Homework & After-School", desc: "Patient guidance through reading, sums, and the school-day wind-down.", img: svcHomework },
  { title: "Mealtime & Routines", desc: "Healthy meals, gentle naps, and the small rhythms that keep your home calm.", img: svcMealtime },
];

const housekeeping = [
  { title: "Deep Home Cleaning", desc: "A thorough, room-by-room refresh — floors, surfaces, and every corner touched with care.", img: svcCleaning },
  { title: "Laundry & Ironing", desc: "Wash, fold, and press. Clothes returned crisp and ready to wear.", img: svcLaundry },
  { title: "Bed Linen Refresh", desc: "Fresh sheets, fluffed pillows, and a bed made to feel like a hotel.", img: svcLinens },
  { title: "Kitchen Deep Clean", desc: "Appliances, cabinets, and workspaces — scrubbed, sanitized, and sparkling.", img: svcKitchen },
  { title: "Closet & Wardrobe Organizing", desc: "Neatly arranged, season-sorted, and easy to navigate every morning.", img: svcCloset },
];

const reasons = [
  "Convenience at your doorstep",
  "Trusted and discreet service",
  "Flexible scheduling",
  "Time-saving solutions",
  "Professional care",
  "Personalized experience",
];

const testimonials = [
  {
    quote:
      "It feels like having a quiet, capable friend on call. My Saturdays are mine again.",
    name: "Wanjiru K.",
    role: "Entrepreneur, Westlands",
  },
  {
    quote:
      "Everything is handled with such grace. The wash was the best I've had — and it was in my own bathroom.",
    name: "Aisha M.",
    role: "Mother of two, Kilimani",
  },
  {
    quote:
      "Discreet, professional, and on time, every time. Gemini has become part of my routine.",
    name: "Linda O.",
    role: "Consultant, Lavington",
  },
];

function Home() {
  useReveal();
  return (
    <div id="home" className="relative text-foreground">
      <MeshBackground />
      <Nav />
      <BookingWizard />
      <WhatsAppFloat />
      <Hero />
      <HouseCalls />
      <Lifestyle />
      <Housekeeping />
      <Nanny />
      <WhyUs />
      <Testimonials />
      <Hours />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Serene vanity bathed in soft morning light"
          width={1920}
          height={1280}
          className="float-soft h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-eucalyptus/20 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-sage/40 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 glass px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-eucalyptus" /> Nairobi · Concierge & Home Beauty
        </p>
        <h1 className="reveal font-display text-5xl leading-[1.02] tracking-tight text-balance text-charcoal sm:text-7xl md:text-[5.5rem]">
          Elevate Your <em className="font-normal italic text-eucalyptus">Every</em> Day.
        </h1>
        <p className="reveal mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Luxury home beauty and lifestyle assistance, designed quietly around your schedule.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center gap-3">
          <button
            onClick={() => openBookingWizard()}
            className="group inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-4 text-sm font-medium text-white transition-all hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)]"
          >
            Book a House Call
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-7 py-4 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-white"
          >
            Explore Services
          </a>
        </div>

        <div className="reveal mt-20 flex flex-wrap items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-eucalyptus" /> Same-day availability</div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-eucalyptus" /> Krishna Plaza, Nairobi</div>
          <div className="hidden h-4 w-px bg-border sm:block" />
          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-eucalyptus" /> {PHONE_DISPLAY}</div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs uppercase tracking-[0.22em] text-eucalyptus">
      {children}
    </span>
  );
}

function HouseCalls() {
  return (
    <section id="services" className="relative bg-sage/40 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="reveal md:col-span-5">
            <SectionLabel>House Calls</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
              Beauty, brought home.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70 md:text-lg">
              Professional beauty care delivered to your doorstep — with comfort, convenience, and quiet attention to detail.
            </p>
            <div className="mt-10 overflow-hidden rounded-2xl">
              <img
                src={houseCallImg}
                alt="Hands gently styling long hair"
                loading="lazy"
                width={1080}
                height={1600}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <ul className="md:col-span-7">
            {houseCalls.map((s, i) => (
              <li
                key={s.n}
                className="reveal group grid grid-cols-[auto_1fr_auto] items-start gap-6 border-t border-charcoal/15 py-8 transition-colors first:border-t-0 md:py-10"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <span className="font-display text-2xl text-eucalyptus md:text-3xl">{s.n}</span>
                <div>
                  <h3 className="font-display text-2xl tracking-tight text-charcoal md:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-charcoal/65 md:text-base">
                    {s.desc}
                  </p>
                  {s.img && (
                    <div className="mt-5 overflow-hidden rounded-2xl">
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="aspect-[4/3] w-full max-w-lg object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                </div>
                <a
                  href={WHATSAPP}
                  className="hidden translate-y-1 self-center rounded-full border border-charcoal/20 bg-white/60 px-5 py-2.5 text-xs font-medium text-charcoal opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 md:inline-flex"
                >
                  Book Now
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Lifestyle() {
  return (
    <section id="lifestyle" className="bg-cream/70 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <SectionLabel>Lifestyle Assistance</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
            The quiet hand behind your week.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/65 md:text-lg">
            Discreet, dependable help with the small things that take up the day — handled with care and returned to you as time.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {lifestyle.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl card-glass p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_60px_-30px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_30px_80px_-30px_rgba(0,0,0,0.25)] md:p-10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-8 overflow-hidden rounded-2xl ring-1 ring-charcoal/10">
                <img src={s.img} alt={s.title} loading="lazy" width={768} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="font-display text-2xl tracking-tight text-charcoal md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{s.desc}</p>
              <a
                href={WHATSAPP}
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-eucalyptus transition-colors hover:text-charcoal"
              >
                Request <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 overflow-hidden rounded-3xl">
          <img
            src={lifestyleImg}
            alt="Linen tote with fresh produce and flowers"
            loading="lazy"
            width={1400}
            height={900}
            className="h-[360px] w-full object-cover md:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

function Housekeeping() {
  return (
    <section id="housekeeping" className="bg-sage/30 py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <SectionLabel>Housekeeping</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
            A home that breathes.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/65 md:text-lg">
            Meticulous care for the spaces you live in — cleaned, organized, and restored to calm.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {housekeeping.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl card-glass p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_60px_-30px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_30px_80px_-30px_rgba(0,0,0,0.25)] md:p-10"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-8 overflow-hidden rounded-2xl ring-1 ring-charcoal/10">
                <img src={s.img} alt={s.title} loading="lazy" width={768} height={768} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="font-display text-2xl tracking-tight text-charcoal md:text-3xl">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/65">{s.desc}</p>
              <a
                href={WHATSAPP}
                className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-eucalyptus transition-colors hover:text-charcoal"
              >
                Request <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-16 overflow-hidden rounded-3xl">
          <img
            src={housekeepingImg}
            alt="A serene, sunlit bedroom with fresh white linens"
            loading="lazy"
            width={1400}
            height={900}
            className="h-[360px] w-full object-cover md:h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

function Nanny() {
  return (
    <section id="nanny" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-blush/40 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-eucalyptus/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-end gap-12 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <SectionLabel>Nanny Services</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] tracking-tight text-charcoal md:text-6xl">
              Warm hands. <span className="italic text-eucalyptus">Calm homes.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/65 md:text-lg">
              Trusted, vetted nannies who treat your little ones with the patience and joy they deserve — so you can step out, breathe deep, or simply rest.
            </p>
          </div>
          <div className="reveal md:col-span-5">
            <div className="overflow-hidden rounded-3xl ring-1 ring-charcoal/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)]">
              <img
                src={nannyImg}
                alt="A nanny smiling with two joyful toddlers in a sunlit Nairobi living room"
                loading="lazy"
                width={1408}
                height={896}
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {nanny.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative overflow-hidden rounded-3xl card-glass p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_20px_60px_-30px_rgba(0,0,0,0.18)] transition-all hover:-translate-y-1 hover:shadow-[0_1px_2px_rgba(0,0,0,0.04),0_30px_80px_-30px_rgba(0,0,0,0.25)]"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-6 overflow-hidden rounded-2xl ring-1 ring-charcoal/10">
                <img src={s.img} alt={s.title} loading="lazy" width={768} height={576} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              </div>
              <h3 className="font-display text-xl tracking-tight text-charcoal md:text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/65">{s.desc}</p>
              <a
                href={WHATSAPP}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-eucalyptus transition-colors hover:text-charcoal"
              >
                Request <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>

        <div className="reveal mt-14 flex flex-col items-start gap-4 rounded-3xl card-glass p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <div className="font-display text-2xl tracking-tight text-charcoal md:text-3xl">Every nanny, carefully chosen.</div>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal/65">Background-checked, reference-verified, and trained in gentle, modern childcare. Daily, weekly, or live-in arrangements.</p>
          </div>
          <button
            onClick={() => openBookingWizard()}
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition-all hover:bg-charcoal/90 hover:shadow-lg"
          >
            Request a Nanny <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const metrics = [
    { value: "Same-day", label: "availability" },
    { value: "7 days", label: "flexible bookings" },
    { value: "100%", label: "client satisfaction" },
  ];
  return (
    <section className="bg-transparent py-28 md:py-40">

      <div className="mx-auto grid max-w-7xl gap-20 px-6 md:grid-cols-2 md:px-10">
        <div className="reveal">
          <SectionLabel>Why Gemini</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
            Considered, every step.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Built for the people whose time is full and whose standards are quiet — but exact.
          </p>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-y border-border py-10">
            {metrics.map((m) => (
              <div key={m.label}>
                <dt className="font-display text-3xl text-charcoal md:text-4xl">{m.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ul className="reveal grid grid-cols-1 gap-px self-center bg-border sm:grid-cols-2">
          {reasons.map((r) => (
            <li key={r} className="flex items-center gap-3 bg-background p-6">
              <Check className="h-4 w-4 shrink-0 text-eucalyptus" />
              <span className="text-sm text-foreground md:text-base">{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="bg-charcoal py-28 text-white md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="reveal max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.22em] text-eucalyptus">
            In their words
          </span>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            Trusted in the homes of Nairobi.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-10"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <blockquote className="font-display text-xl leading-snug text-white/90 md:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm">
                <div className="text-white">{t.name}</div>
                <div className="text-white/50">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hours() {
  return (
    <section className="bg-transparent py-28 md:py-40">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="reveal text-center">
          <SectionLabel>Hours & Availability</SectionLabel>
          <h2 className="mt-5 font-display text-4xl tracking-tight text-charcoal md:text-5xl">
            Booking, on your terms.
          </h2>
        </div>

        <div className="reveal mt-14 overflow-hidden rounded-3xl border border-border">
          <div className="grid divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="p-10 md:p-14">
              <div className="text-xs uppercase tracking-[0.18em] text-eucalyptus">Weekdays</div>
              <div className="mt-3 font-display text-3xl text-charcoal md:text-4xl">Monday — Friday</div>
              <p className="mt-3 text-muted-foreground">Standard booking, throughout the day.</p>
            </div>
            <div className="bg-cream/50 p-10 md:p-14">
              <div className="text-xs uppercase tracking-[0.18em] text-eucalyptus">Weekends</div>
              <div className="mt-3 font-display text-3xl text-charcoal md:text-4xl">Saturday — Sunday</div>
              <p className="mt-3 text-muted-foreground">By special arrangement only.</p>
            </div>
          </div>
        </div>
        <p className="reveal mt-6 text-center text-sm text-muted-foreground">
          Weekend bookings are handled privately based on availability.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-sage/40 py-28 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:px-10">
        <div className="reveal">
          <SectionLabel>Contact</SectionLabel>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-charcoal md:text-6xl">
            Let us bring comfort to your day.
          </h2>
          <p className="mt-6 max-w-md text-base text-charcoal/70 md:text-lg">
            Reach us directly, or send a quick note — we respond personally, often within the hour.
          </p>

          <dl className="mt-12 space-y-6 text-charcoal">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-charcoal/60">Phone & WhatsApp</dt>
              <dd className="mt-1 font-display text-2xl">{PHONE_DISPLAY}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-charcoal/60">Studio</dt>
              <dd className="mt-1 text-base">Krishna Plaza, Nairobi, Kenya</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-charcoal/60">Hours</dt>
              <dd className="mt-1 text-base">Mon–Fri standard · Sat–Sun by arrangement</dd>
            </div>
          </dl>

          <div className="mt-10 overflow-hidden rounded-2xl border border-charcoal/10">
            <iframe
              title="Krishna Plaza, Nairobi"
              src="https://www.google.com/maps?q=Krishna+Plaza+Nairobi&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form
          className="reveal rounded-3xl card-glass p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.3)] md:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const data = new FormData(form);
            const name = data.get("name");
            const service = data.get("service");
            const message = data.get("message");
            const text = `Hello Gemini — I'm ${name}. I'd like to enquire about ${service}. ${message ?? ""}`;
            window.open(`${WHATSAPP}?text=${encodeURIComponent(String(text))}`, "_blank");
          }}
        >
          <h3 className="font-display text-2xl text-charcoal md:text-3xl">Quick Enquiry</h3>
          <p className="mt-2 text-sm text-muted-foreground">Sends straight to WhatsApp.</p>

          <div className="mt-8 space-y-5">
            <Field label="Your name" name="name" placeholder="Jane Wanjiku" />
            <Field label="Phone" name="phone" placeholder="07XX XXX XXX" />
            <Field label="Service of interest" name="service" placeholder="Hair Wash · Errand · Other" />
            <div>
              <label className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Message</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your day…"
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-eucalyptus focus:ring-4 focus:ring-eucalyptus/15"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-sm font-medium text-white transition-all hover:shadow-lg"
            >
              Send Enquiry <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, placeholder }: { label: string; name: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{label}</label>
      <input
        name={name}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-all placeholder:text-muted-foreground/60 focus:border-eucalyptus focus:ring-4 focus:ring-eucalyptus/15"
      />
    </div>
  );
}

function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-transparent py-32 md:py-48">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/40 blur-3xl" />
      </div>
      <div className="reveal mx-auto max-w-4xl px-6 text-center md:px-10">
        <SectionLabel>One call away</SectionLabel>
        <h2 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight text-balance text-charcoal md:text-7xl">
          Luxury convenience starts with one call.
        </h2>
        <a
          href={`tel:0110879109`}
          className="mt-12 inline-block font-display text-5xl tracking-tight text-eucalyptus transition-colors hover:text-charcoal md:text-7xl"
        >
          0110 879 109
        </a>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <a
            href={WHATSAPP}
            className="rounded-full bg-eucalyptus px-7 py-4 text-sm font-medium text-white transition-all hover:shadow-[0_18px_50px_-20px_rgba(141,170,160,0.8)]"
          >
            WhatsApp Now
          </a>
          <a
            href="#contact"
            className="rounded-full border border-charcoal/20 bg-white px-7 py-4 text-sm font-medium text-charcoal transition-colors hover:bg-charcoal hover:text-white"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-white">Gemini Home Services</div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Premium home beauty and lifestyle assistance, quietly designed around your schedule.
          </p>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.18em] text-white/50">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">House Calls</a></li>
            <li><a href="#lifestyle" className="hover:text-white">Lifestyle</a></li>
            <li><a href="#housekeeping" className="hover:text-white">Housekeeping</a></li>
            <li><a href="#nanny" className="hover:text-white">Nanny</a></li>
            <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-xs uppercase tracking-[0.18em] text-white/50">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>{PHONE_DISPLAY}</li>
            <li>Krishna Plaza, Nairobi</li>
            <li className="flex gap-3 pt-2 text-white/60">
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">TikTok</a>
              <a href={WHATSAPP} className="hover:text-white">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-white/40 md:flex-row md:px-10">
          <div>© {new Date().getFullYear()} Gemini Home Services. Crafted in Nairobi.</div>
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
