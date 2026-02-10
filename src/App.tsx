import {
  useEffect,
  useMemo,
  useState,
  type ComponentProps,
  type FormEvent,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";
import { useInView } from "@/hooks/useInView";
import {
  IconArrowRight,
  IconLayout,
  IconMail,
  IconMenu,
  IconPenTool,
  IconPhone,
  IconRefresh,
  IconRocket,
  IconSearch,
  IconSparkles,
  IconStar,
  IconX,
} from "@/components/Icons";

const WHATSAPP_ICON_URL = "https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.png";

function WhatsAppIconImg({ className, size = 20 }: { className?: string; size?: number }) {
  return (
    <img
      src={WHATSAPP_ICON_URL}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      referrerPolicy="no-referrer"
      className={cn("object-contain", className)}
    />
  );
}

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">{children}</div>;
}

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "scroll-mt-24 py-16 sm:py-20",
        inView ? "animate-fade-up" : "opacity-0"
      )}
    >
      <Container>
        <div className="mb-10 sm:mb-12">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-[#9CA3AF]">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
            <span>{eyebrow}</span>
          </div>
          <h2 className="text-balance text-2xl font-bold tracking-tight text-[#E5E7EB] sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 max-w-2xl text-pretty text-sm leading-relaxed text-[#9CA3AF] sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

function PrimaryButton(props: ComponentProps<"a"> & { href: string }) {
  const { className, children, ...rest } = props;
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950",
        "shadow-[0_10px_30px_rgba(56,189,248,0.18)] transition",
        "hover:bg-sky-300 hover:shadow-[0_14px_34px_rgba(56,189,248,0.22)]",
        "focus:outline-none focus:ring-2 focus:ring-sky-400/40 focus:ring-offset-0",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

function SecondaryButton(props: ComponentProps<"a"> & { href: string }) {
  const { className, children, ...rest } = props;
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-[#E5E7EB]",
        "transition hover:bg-white/10 hover:border-white/15",
        "focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:ring-offset-0",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
}

function AvatarIllustration() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-sky-400/15 via-transparent to-transparent blur-2xl" />
      <div className="rounded-[28px] border border-white/10 bg-[#111827]/80 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-rose-400/80" />
            <div className="h-2 w-2 rounded-full bg-amber-300/80" />
            <div className="h-2 w-2 rounded-full bg-emerald-300/80" />
          </div>
          <div className="text-xs font-medium text-[#9CA3AF]">Design Preview</div>
        </div>

        <div className="mt-5 grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-4">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-sky-400/20 to-white/5 ring-1 ring-white/10" />
              <div className="min-w-0 flex-1">
                <div className="h-2.5 w-40 max-w-full rounded-full bg-white/10" />
                <div className="mt-2 h-2.5 w-28 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
              <div className="h-16 rounded-xl bg-white/5 ring-1 ring-white/10" />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0F172A] p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#E5E7EB]">
                <IconSparkles className="h-4 w-4 text-sky-400" />
                UI/UX Quality
              </div>
              <div className="text-xs text-[#9CA3AF]">Premium</div>
            </div>
            <div className="mt-4">
              <div className="h-2.5 w-full rounded-full bg-white/10" />
              <div className="-mt-2.5 h-2.5 w-[78%] rounded-full bg-sky-400/70" />
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="h-10 rounded-xl bg-white/5 ring-1 ring-white/10" />
                <div className="h-10 rounded-xl bg-white/5 ring-1 ring-white/10" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-[#E5E7EB]">Prajjawal</div>
            <div className="text-xs text-[#9CA3AF]">Website Designer</div>
          </div>
          <div className="mt-3 h-8 rounded-xl bg-white/5 ring-1 ring-white/10" />
        </div>
      </div>
    </div>
  );
}

export function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const logoShareUrl = "https://photos.app.goo.gl/GmGB2RTZ7B3cphU97";
  // Fallback direct image (used if the share link cannot be resolved / hotlinked)
  const logoFallbackUrl = "https://operational-brown-jr9nfg5gm1.edgeone.app/IMG-20260209-WA0009.jpg";

  const [logoImgSrc, setLogoImgSrc] = useState<string>(logoFallbackUrl);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function resolveGooglePhotosOgImage() {
      try {
        // Google Photos share links are not direct image URLs.
        // Resolve the share page via a CORS-safe proxy and extract the og:image URL.
        const res = await fetch(`https://r.jina.ai/${logoShareUrl}`, { cache: "force-cache" });
        if (!res.ok) return;

        const html = await res.text();
        const m1 = html.match(/property=["']og:image["'][^>]*content=["']([^"']+)["']/i);
        const m2 = html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
        const url = (m1?.[1] ?? m2?.[1])?.trim();

        if (!cancelled && url) {
          setLogoError(false);
          setLogoImgSrc(url);
        }
      } catch {
        // ignore; fallback logo will remain
      }
    }

    resolveGooglePhotosOgImage();

    return () => {
      cancelled = true;
    };
  }, []);

  const designPreviewUrl = "https://019c3ccd-2743-7534-917c-d3a703df1062.arena.site/";

  const nav = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Preview", href: "#preview" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Skills", href: "#skills" },
      { label: "Testimonials", href: "#testimonials" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const services = useMemo(
    () => [
      {
        title: "Website Design",
        icon: IconLayout,
        desc: "Professional, corporate layouts built to earn trust and convert. Clean grids, modern typography, strong hierarchy.",
      },
      {
        title: "UI/UX Design",
        icon: IconPenTool,
        desc: "User-first flows and interfaces with consistent components, clear interactions, and premium polish.",
      },
      {
        title: "Landing Page Design",
        icon: IconRocket,
        desc: "High-converting landing pages focused on messaging, visual clarity, and strong calls-to-action.",
      },
      {
        title: "Website Redesign",
        icon: IconRefresh,
        desc: "Upgrade outdated websites with improved visuals, structure, accessibility, and conversion-focused content.",
      },
      {
        title: "Performance & SEO Optimization",
        icon: IconSearch,
        desc: "Faster load times, mobile-first best practices, and SEO basics to support organic discovery.",
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        name: "Aurum Consulting",
        image:
          "https://img.freepik.com/free-psd/connecting-people-app-web-template_23-2149052065.jpg",
        goal: "Build trust for a premium B2B consultancy and increase lead inquiries.",
        solution: "Designed a dark, corporate website with clear service positioning and conversion-first sections.",
        approach: "Typography-led layout, streamlined navigation, and CTA placement for higher intent actions.",
        tags: ["Website Design", "UI/UX", "Lead Gen"],
      },
      {
        name: "Northwind Studio",
        image: "https://colorlib.com/wp/wp-content/uploads/sites/2/videograph-free-template-408x322.jpg",
        goal: "Showcase an agency portfolio with a modern, minimal identity.",
        solution: "Created project cards and a case-study style structure with refined spacing and hierarchy.",
        approach: "Component-based design system for consistent visuals across pages.",
        tags: ["UI System", "Portfolio", "Responsive"],
      },
      {
        name: "Bluecrest Landing",
        image:
          "https://themewagon.com/wp-content/uploads/2022/03/screencapture-technext-github-io-startup2-index-html-2022-03-07-10_56_37-1.png",
        goal: "Increase conversions for a product launch campaign.",
        solution: "Crafted a focused landing page with benefit-driven sections and testimonial proof.",
        approach: "Optimized content flow: problem → solution → proof → CTA.",
        tags: ["Landing Page", "Conversion", "SEO Basics"],
      },
    ],
    []
  );

  const skills = useMemo(
    () => [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "WordPress",
      "Figma",
      "Responsive Design",
      "SEO Basics",
    ],
    []
  );

  const testimonials = useMemo(
    () => [
      {
        quote:
          "Prajjawal delivered a clean, premium design with excellent spacing and clarity. The final site feels corporate and trustworthy.",
        name: "Aarav Mehta",
        role: "Founder, B2B Consultancy",
      },
      {
        quote:
          "Great UI/UX thinking—every section had a purpose. The website is fast, modern, and looks high-end across devices.",
        name: "Neha Sharma",
        role: "Marketing Lead",
      },
      {
        quote:
          "Professional communication and strong design execution. The landing page structure improved engagement and inquiries.",
        name: "Rohit Verma",
        role: "Product Owner",
      },
    ],
    []
  );

  function closeMobile() {
    setMobileOpen(false);
  }

  async function copyPhone() {
    try {
      await navigator.clipboard.writeText("9509610832");
    } catch {
      // no-op
    }
  }

  const whatsappNumber = "919509610832";

  const handleLogoImgError = () => {
    // Try a direct fallback image first, then gracefully degrade to the minimal dot.
    if (logoImgSrc !== logoFallbackUrl) {
      setLogoImgSrc(logoFallbackUrl);
      return;
    }
    setLogoError(true);
  };

  const whatsappHref = useMemo(() => {
    const msg = "Hi Prajjawal, I’m interested in a professional website design. Can we discuss my project?";
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }, []);

  const whatsappHrefFromForm = useMemo(() => {
    const parts = [
      "Hi Prajjawal, I’d like to discuss a website design project.",
      formState.name.trim() ? `Name: ${formState.name.trim()}` : "",
      formState.email.trim() ? `Email: ${formState.email.trim()}` : "",
      formState.message.trim() ? `Message: ${formState.message.trim()}` : "",
    ].filter(Boolean);

    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(parts.join("\n"))}`;
  }, [formState.email, formState.message, formState.name]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nameOk = formState.name.trim().length >= 2;
    const emailOk = /.+@.+\..+/.test(formState.email.trim());
    const msgOk = formState.message.trim().length >= 10;

    if (!nameOk || !emailOk || !msgOk) {
      setFormStatus("error");
      return;
    }

    setFormStatus("success");
    setFormState({ name: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[#111827] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#E5E7EB] focus:ring-2 focus:ring-sky-400/40"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0F172A]/70 backdrop-blur">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="group inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5">
                {logoError ? (
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
                ) : (
                  <img
                    src={logoImgSrc}
                    alt="Prajjawal logo"
                    className="h-full w-full object-cover"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={handleLogoImgError}
                  />
                )}
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold tracking-tight text-[#E5E7EB]">Prajjawal</div>
                <div className="text-xs text-[#9CA3AF]">Website Designer</div>
              </div>
            </a>

            <nav className="hidden items-center gap-6 md:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-[#9CA3AF] transition hover:text-[#E5E7EB]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-[#E5E7EB] transition hover:bg-white/10"
              >
                Hire Me
                <IconArrowRight className="h-4 w-4 text-sky-400" />
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setMobileOpen((s) => !s)}
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-[#E5E7EB] transition hover:bg-white/10 md:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
            </button>
          </div>

          {mobileOpen ? (
            <div className="pb-4 md:hidden">
              <div className="grid gap-2 rounded-2xl border border-white/10 bg-[#111827]/60 p-3">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={closeMobile}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-[#E5E7EB] transition hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </header>

      <main id="content">
        {/* Hero */}
        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#9CA3AF]">
                  <IconSparkles className="h-4 w-4 text-sky-400" />
                  Professional Website Designer & UI/UX Designer
                </div>

                <h1 className="text-balance text-4xl font-extrabold tracking-tight text-[#E5E7EB] sm:text-5xl lg:text-6xl">
                  Professional <span className="text-sky-400">Website Designer</span>
                </h1>

                <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#9CA3AF] sm:text-lg">
                  I design modern, fast and high-converting websites for businesses.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <PrimaryButton href="#portfolio">
                    View Portfolio
                    <IconArrowRight className="h-4 w-4" />
                  </PrimaryButton>
                  <SecondaryButton href="#contact">
                    Hire Me
                    <IconArrowRight className="h-4 w-4 text-sky-400" />
                  </SecondaryButton>
                </div>

                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {[
                    { label: "Premium UI", value: "Clean & corporate" },
                    { label: "Performance", value: "Fast loading" },
                    { label: "Results", value: "Conversion-focused" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-[#111827]/60 p-4 transition hover:bg-[#111827]/70"
                    >
                      <div className="text-xs font-medium text-[#9CA3AF]">{item.label}</div>
                      <div className="mt-1 text-sm font-semibold text-[#E5E7EB]">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:justify-self-end">
                <AvatarIllustration />
              </div>
            </div>
          </Container>
        </section>

        {/* About */}
        <Section
          id="about"
          eyebrow="About"
          title="Design that looks premium — and works hard for your business"
          description="Hi, I’m Prajjawal, a professional website designer focused on creating clean, user-friendly and conversion-focused websites. I prioritize quality, speed, and measurable business results."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#111827]/60 p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-[#E5E7EB]">What you can expect</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#9CA3AF]">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                  Clear page structure and strong visual hierarchy for serious, corporate brands.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                  Mobile-first, responsive design with consistent spacing and typography.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                  Smooth, minimal animations (fade-in + tasteful hover states).
                </li>
              </ul>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Quality-first execution",
                  desc: "Pixel-level attention with a premium finish—no flashy colors, only clean, confident design.",
                },
                {
                  title: "Speed with consistency",
                  desc: "Reusable UI components and structured layouts that scale smoothly across pages.",
                },
                {
                  title: "Result-focused approach",
                  desc: "Design decisions guided by clarity, trust, and conversion goals—not trends.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-white/10 bg-[#111827]/40 p-6 transition hover:bg-[#111827]/60"
                >
                  <div className="text-sm font-semibold text-[#E5E7EB]">{card.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Design Preview */}
        <Section
          id="preview"
          eyebrow="Design"
          title="Design Preview — premium UI/UX in one glance"
          description="A realistic mini layout preview showing how I structure modern websites: clean hierarchy, glass-like surfaces, and conversion-ready sections."
        >
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#111827]/45 p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-[#E5E7EB]">What this preview demonstrates</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                Premium, corporate layout decisions: strong header structure, hero with visual blocks,
                section rhythm, and clean cards—designed for trust and clarity.
              </p>

              <div className="mt-5 grid gap-3">
                {[
                  {
                    title: "Glassmorphism surfaces",
                    desc: "Soft blur, subtle glow and controlled contrast—professional, not flashy.",
                  },
                  {
                    title: "Minimal motion",
                    desc: "Only fade-in and hover elevation for a premium feel.",
                  },
                  {
                    title: "Business-ready hierarchy",
                    desc: "Clear headings, readable body text and purposeful CTAs.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <div className="text-sm font-semibold text-[#E5E7EB]">{item.title}</div>
                    <div className="mt-1 text-sm text-[#9CA3AF]">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
                <PrimaryButton
                  href={designPreviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  Open Live Preview
                  <IconArrowRight className="h-4 w-4" />
                </PrimaryButton>
                <span className="text-xs text-[#9CA3AF]">Opens in a new tab</span>
              </div>
            </div>

            <div className="relative lg:justify-self-end">
              <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-sky-400/20 via-cyan-400/10 to-transparent blur-2xl" />

              <div
                className={cn(
                  "group relative overflow-hidden rounded-[28px] border border-white/10",
                  "bg-gradient-to-br from-[#062033]/70 via-[#0F172A]/75 to-[#031829]/60",
                  "shadow-[0_22px_70px_rgba(0,0,0,0.55)]",
                  "backdrop-blur-xl",
                  "animate-soft-float"
                )}
              >
                {/* Soft glow border */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-sky-400/18" />

                {/* Title */}
                <div className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#E5E7EB] backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Design Preview
                </div>

                <div className="p-6 sm:p-7">
                  {/* Top: mini website mockup */}
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220]/60">
                    <div className="pointer-events-none absolute inset-0 opacity-25 [background:linear-gradient(to_right,rgba(56,189,248,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B1220]/80" />

                    {/* mockup chrome */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
                        <span className="ml-3 text-xs font-semibold text-[#E5E7EB]">Homepage</span>
                      </div>
                      <div className="hidden items-center gap-2 sm:flex">
                        {Array.from({ length: 4 }).map((_, i) => (
                          <span
                            key={i}
                            className="h-2.5 w-14 rounded-full bg-white/10"
                          />
                        ))}
                        <span className="ml-1 inline-flex h-7 w-20 items-center justify-center rounded-full bg-sky-400/15 text-[11px] font-semibold text-sky-200 ring-1 ring-sky-400/20">
                          CTA
                        </span>
                      </div>
                    </div>

                    {/* mockup content (image-based) */}
                    <div className="p-4 sm:p-5">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-[#0B1220]/60">
                        <img
                          src="https://goodmockups.com/wp-content/uploads/2021/05/Free-Website-Presentation-Mockup-PSD.jpg"
                          alt="High-converting business website preview"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className={cn(
                            "h-full w-full object-cover",
                            "animate-preview-scroll",
                            "brightness-[0.85] contrast-[1.05] saturate-[1.05]"
                          )}
                        />
                        {/* Dark navy / teal grading overlay */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-transparent" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220]/80 via-[#0B1220]/10 to-transparent" />
                        {/* Caption overlay */}
                        <div className="pointer-events-none absolute bottom-3 left-3 right-3 rounded-xl border border-white/10 bg-[#0B1220]/65 px-3 py-2 backdrop-blur">
                          <div className="text-xs font-semibold text-[#E5E7EB]">High-Converting Business Website</div>
                          <div className="mt-0.5 text-[11px] font-medium text-[#9CA3AF]">Modern • Fast • Responsive</div>
                        </div>
                        {/* Subtle grid to match site style */}
                        <div className="pointer-events-none absolute inset-0 opacity-25 [background:linear-gradient(to_right,rgba(56,189,248,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
                      </div>
                    </div>

                    {/* subtle motion feel */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                      <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
                      <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full bg-sky-400/12 blur-3xl" />
                    </div>
                  </div>

                  {/* Middle: feature blocks */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {[
                      {
                        title: "Responsive Design",
                        desc: "Mobile, Tablet, Desktop",
                        icon: IconLayout,
                      },
                      {
                        title: "Modern UI",
                        desc: "Clean & Premium Look",
                        icon: IconSparkles,
                      },
                      {
                        title: "Fast Performance",
                        desc: "Optimized Code",
                        icon: IconRocket,
                      },
                    ].map((f) => {
                      const Icon = f.icon;
                      return (
                        <div
                          key={f.title}
                          className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-sm font-semibold text-[#E5E7EB]">{f.title}</div>
                              <div className="mt-1 text-xs font-medium text-[#9CA3AF]">{f.desc}</div>
                            </div>
                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[#0B1220]/40">
                              <Icon className="h-4 w-4 text-sky-300" />
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quality */}
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-sm font-semibold text-[#E5E7EB]">UI/UX Quality</div>
                      <div className="text-xs font-semibold text-sky-300">Premium</div>
                    </div>
                    <div className="mt-3 h-2.5 w-full rounded-full bg-white/10">
                      <div className="h-2.5 w-[90%] rounded-full bg-gradient-to-r from-sky-400 to-cyan-300 shadow-[0_0_18px_rgba(56,189,248,0.25)]" />
                    </div>
                    <div className="mt-2 text-xs text-[#9CA3AF]">90%</div>
                  </div>

                  {/* Bottom: Tools + Features */}
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
                      <div className="text-sm font-semibold text-[#E5E7EB]">Tools Used</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["HTML", "CSS", "JavaScript", "WordPress", "Elementor"].map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-[#0B1220]/40 px-3 py-1 text-xs font-medium text-[#9CA3AF]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-4">
                      <div className="text-sm font-semibold text-[#E5E7EB]">Features</div>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["SEO Friendly", "Fast Loading", "Easy Navigation"].map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-[#0B1220]/40 px-3 py-1 text-xs font-medium text-[#9CA3AF]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 flex items-center gap-2 text-xs text-[#9CA3AF]">
                        <IconSearch className="h-3.5 w-3.5 text-sky-300" />
                        Built with best-practice SEO basics
                      </div>
                    </div>
                  </div>

                  {/* Footer branding */}
                  <div className="mt-6 rounded-2xl border border-white/10 bg-[#0B1220]/35 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-medium text-[#9CA3AF]">Name</div>
                        <div className="text-sm font-semibold text-[#E5E7EB]">Prajjawal</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-medium text-[#9CA3AF]">Role</div>
                        <div className="text-sm font-semibold text-[#E5E7EB]">Website Designer</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* bottom glow */}
                <div className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-sky-400/15 blur-3xl" />
              </div>
            </div>
          </div>
        </Section>

        {/* Services */}
        <Section
          id="services"
          eyebrow="Services"
          title="Professional design services for serious brands"
          description="Everything you need to launch, redesign, or optimize a premium website—built for clarity, performance, and conversion."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className={cn(
                    "group rounded-3xl border border-white/10 bg-[#111827]/50 p-6",
                    "transition hover:-translate-y-0.5 hover:bg-[#111827]/70",
                    "hover:shadow-[0_18px_45px_rgba(0,0,0,0.40)]"
                  )}
                >
                  <div className="flex items-start gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-sky-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-[#E5E7EB]">{s.title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Portfolio */}
        <Section
          id="portfolio"
          eyebrow="Portfolio"
          title="Selected work — modern, corporate, conversion-focused"
          description="A curated set of projects showing how I approach client goals, design solutions, and result-oriented structure."
        >
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.name}
                className={cn(
                  "rounded-3xl border border-white/10 bg-[#111827]/50 p-5",
                  "transition hover:-translate-y-0.5 hover:bg-[#111827]/70",
                  "hover:shadow-[0_18px_45px_rgba(0,0,0,0.40)]"
                )}
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0F172A]">
                  <img
                    src={p.image}
                    alt={`${p.name} website mockup`}
                    loading="lazy"
                    className="h-52 w-full object-cover sm:h-56"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-400/10 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0F172A] to-transparent opacity-80" />
                </div>

                <div className="mt-5">
                  <h3 className="text-base font-semibold text-[#E5E7EB]">{p.name}</h3>

                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#9CA3AF]">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-[#E5E7EB]/80">
                        Client goal
                      </div>
                      <div className="mt-1">{p.goal}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-[#E5E7EB]/80">
                        Design solution
                      </div>
                      <div className="mt-1">{p.solution}</div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wide text-[#E5E7EB]/80">
                        Approach
                      </div>
                      <div className="mt-1">{p.approach}</div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#9CA3AF]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section
          id="skills"
          eyebrow="Skills"
          title="Core skills & tools"
          description="A practical toolkit for designing and building modern, responsive websites with strong UI/UX fundamentals."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#111827]/60 p-6">
              <h3 className="text-lg font-semibold text-[#E5E7EB]">Skill set</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                Strong design fundamentals with implementation awareness—so designs stay consistent when built.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-[#0F172A]/60 px-3 py-1.5 text-xs font-medium text-[#E5E7EB] transition hover:border-sky-400/30"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#111827]/40 p-6">
              <h3 className="text-lg font-semibold text-[#E5E7EB]">How I work</h3>
              <div className="mt-4 grid gap-3">
                {[
                  { title: "Discovery", desc: "Understand your business, audience, and goals." },
                  { title: "Wireframe", desc: "Structure the content for clarity and flow." },
                  { title: "Design", desc: "Premium UI with clean typography and spacing." },
                  { title: "Refine", desc: "Polish details and align with conversion goals." },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-semibold text-[#E5E7EB]">{step.title}</div>
                      <span className="text-xs font-medium text-sky-400">Process</span>
                    </div>
                    <div className="mt-2 text-sm text-[#9CA3AF]">{step.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section
          id="testimonials"
          eyebrow="Testimonials"
          title="Professional feedback"
          description="Client-style testimonials written in a clean, corporate tone to highlight experience and outcomes."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl border border-white/10 bg-[#111827]/50 p-6 transition hover:bg-[#111827]/70"
              >
                <div className="flex items-center gap-1 text-sky-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-[#E5E7EB]">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-white/10 pt-4">
                  <div className="text-sm font-semibold text-[#E5E7EB]">{t.name}</div>
                  <div className="text-xs text-[#9CA3AF]">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          eyebrow="Contact"
          title="Let’s build something professional together"
          description="Share your project details and I’ll respond with next steps."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-[#111827]/60 p-6 sm:p-7">
              <h3 className="text-lg font-semibold text-[#E5E7EB]">Send a message</h3>
              <p className="mt-2 text-sm text-[#9CA3AF]">
                Tell me what you’re building, the timeline, and what success looks like.
              </p>

              <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#E5E7EB]">Name</span>
                  <input
                    value={formState.name}
                    onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                    className={cn(
                      "h-11 w-full rounded-xl border bg-[#0F172A]/60 px-4 text-sm text-[#E5E7EB]",
                      "border-white/10 placeholder:text-[#9CA3AF]",
                      "focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                    )}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#E5E7EB]">Email</span>
                  <input
                    value={formState.email}
                    onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                    className={cn(
                      "h-11 w-full rounded-xl border bg-[#0F172A]/60 px-4 text-sm text-[#E5E7EB]",
                      "border-white/10 placeholder:text-[#9CA3AF]",
                      "focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                    )}
                    placeholder="you@company.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-[#E5E7EB]">Message</span>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    className={cn(
                      "min-h-[120px] w-full rounded-xl border bg-[#0F172A]/60 px-4 py-3 text-sm text-[#E5E7EB]",
                      "border-white/10 placeholder:text-[#9CA3AF]",
                      "focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                    )}
                    placeholder="Project goals, pages, style reference, timeline..."
                  />
                </label>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-xl bg-sky-400 px-4 py-2.5 text-sm font-semibold text-slate-950",
                        "transition hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-400/40"
                      )}
                    >
                      Send Message
                      <IconArrowRight className="h-4 w-4" />
                    </button>

                    <a
                      href={whatsappHrefFromForm}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-[#E5E7EB]",
                        "transition hover:bg-white/10 hover:border-white/15",
                        "focus:outline-none focus:ring-2 focus:ring-sky-400/30 focus:ring-offset-0"
                      )}
                    >
                      WhatsApp
                      <WhatsAppIconImg size={16} className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="text-sm">
                    {formStatus === "success" ? (
                      <span className="text-emerald-300">Message prepared. I’ll get back to you soon.</span>
                    ) : formStatus === "error" ? (
                      <span className="text-rose-300">
                        Please enter a valid name, email and a detailed message.
                      </span>
                    ) : (
                      <span className="text-[#9CA3AF]">Typically responds within 24–48 hours.</span>
                    )}
                  </div>
                </div>
              </form>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-[#111827]/40 p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-[#E5E7EB]">Direct contact</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">
                  Prefer a direct conversation? Reach out using the details below.
                </p>

                <div className="mt-5 grid gap-3">
                  <button
                    type="button"
                    onClick={copyPhone}
                    className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0F172A]/60">
                        <IconPhone className="h-5 w-5 text-sky-400" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-[#E5E7EB]">Phone</div>
                        <div className="text-sm text-[#9CA3AF]">9509610832</div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-sky-400">Copy</span>
                  </button>

                  <a
                    href="mailto:prajjawaltailor09@gmail.com"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0F172A]/60">
                        <IconMail className="h-5 w-5 text-sky-400" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-[#E5E7EB]">Email</div>
                        <div className="text-sm text-[#9CA3AF]">prajjawaltailor09@gmail.com</div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-sky-400">Write</span>
                  </a>

                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0F172A]/60">
                        <WhatsAppIconImg size={20} className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-sm font-semibold text-[#E5E7EB]">WhatsApp</div>
                        <div className="text-sm text-[#9CA3AF]">9509610832</div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-sky-400">Chat</span>
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-400/10 via-white/5 to-transparent p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#E5E7EB]">Project-ready</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">
                      If you want a premium website with clean UI/UX and a corporate feel, I’m ready to help.
                    </p>
                  </div>
                  <IconSparkles className="h-6 w-6 text-sky-400" />
                </div>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <PrimaryButton href="#services" className="w-full sm:w-auto">
                    View Services
                    <IconArrowRight className="h-4 w-4" />
                  </PrimaryButton>
                  <SecondaryButton href="#portfolio" className="w-full sm:w-auto">
                    See Work
                    <IconArrowRight className="h-4 w-4 text-sky-400" />
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={cn(
          "fixed bottom-6 right-6 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full",
          "border border-white/10 bg-[#111827]/80 text-[#E5E7EB] backdrop-blur",
          "shadow-[0_18px_45px_rgba(0,0,0,0.50)] transition",
          "hover:-translate-y-0.5 hover:bg-[#111827] hover:border-white/15",
          "focus:outline-none focus:ring-2 focus:ring-sky-400/35"
        )}
      >
        <WhatsAppIconImg size={22} className="h-5 w-5" />
      </a>

      <footer className="border-t border-white/10 py-10">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-[#E5E7EB]">Prajjawal</div>
              <div className="text-sm text-[#9CA3AF]">Professional Website Designer & UI/UX Designer</div>
            </div>
            <div className="text-sm text-[#9CA3AF]">© {new Date().getFullYear()} Prajjawal. All rights reserved.</div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
