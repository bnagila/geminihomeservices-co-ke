import { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft, Check, X } from "lucide-react";

const WHATSAPP = "https://wa.me/254110879109";

const moods = [
  { id: "restore", label: "Restore", desc: "A quiet reset for body and mind." },
  { id: "celebrate", label: "Celebrate", desc: "Polished and ready for the occasion." },
  { id: "everyday", label: "Everyday", desc: "Effortless care in the rhythm of your week." },
  { id: "reclaim", label: "Reclaim time", desc: "Hand over the small things." },
];

const focuses = [
  { id: "hair-undo", label: "Hair Undo" },
  { id: "wash-leavein", label: "Wash, Conditioning & Leave-In" },
  { id: "straightening", label: "Hair Straightening" },
  { id: "weave-lines", label: "Simple Weave Lines" },
  { id: "twists", label: "Hair Twists" },
  { id: "errands", label: "Errand Running" },
  { id: "shopping", label: "Personal Shopper" },
  { id: "meal-prep", label: "Meal Prep" },
];

export type WizardOpenDetail = { focus?: string };

export function openBookingWizard(detail: WizardOpenDetail = {}) {
  window.dispatchEvent(new CustomEvent("open-booking-wizard", { detail }));
}

export function BookingWizard() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [mood, setMood] = useState<string | null>(null);
  const [focus, setFocus] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [when, setWhen] = useState("");

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<WizardOpenDetail>).detail || {};
      setStep(0);
      setMood(null);
      setFocus(detail.focus ? [detail.focus] : []);
      setName("");
      setWhen("");
      setOpen(true);
    };
    window.addEventListener("open-booking-wizard", onOpen);
    return () => window.removeEventListener("open-booking-wizard", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (!open) return null;

  const toggleFocus = (id: string) =>
    setFocus((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));

  const canNext = (step === 0 && mood) || (step === 1 && focus.length > 0) || step === 2;

  const submit = () => {
    const moodLabel = moods.find((m) => m.id === mood)?.label ?? "—";
    const focusLabels = focus
      .map((id) => focuses.find((f) => f.id === id)?.label)
      .filter(Boolean)
      .join(", ");
    const text = `Hello Gemini — I'm ${name || "(name)"}.
Mood: ${moodLabel}
Focus: ${focusLabels}
Preferred time: ${when || "flexible"}`;
    window.open(`${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
    setOpen(false);
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center px-4 pb-6 pt-20 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Book a slot"
    >
      <div
        className="absolute inset-0 bg-charcoal/30 backdrop-blur-md"
        onClick={() => setOpen(false)}
      />

      <div className="wizard-pop relative w-full max-w-xl overflow-hidden rounded-3xl card-glass shadow-[0_40px_120px_-30px_rgba(0,0,0,0.45)]">
        <button
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 rounded-full p-2 text-charcoal/60 transition-colors hover:bg-white/60 hover:text-charcoal"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-7 pt-8 sm:px-10 sm:pt-10">
          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                  i <= step ? "bg-eucalyptus" : "bg-charcoal/10"
                }`}
              />
            ))}
          </div>
          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-eucalyptus">
            Step {step + 1} of 3
          </p>
        </div>

        <div className="px-7 pb-2 pt-4 sm:px-10">
          {step === 0 && (
            <>
              <h3 className="font-display text-3xl leading-tight tracking-tight text-charcoal sm:text-4xl">
                What would feel right today?
              </h3>
              <p className="mt-3 text-sm text-charcoal/65">
                A quiet question to begin. We'll shape the rest around it.
              </p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {moods.map((m) => {
                  const active = mood === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setMood(m.id)}
                      className={`group rounded-2xl border p-4 text-left transition-all hover:-translate-y-0.5 ${
                        active
                          ? "border-eucalyptus bg-white shadow-[0_18px_40px_-20px_rgba(141,170,160,0.6)]"
                          : "border-charcoal/10 bg-white/50 hover:bg-white"
                      }`}
                    >
                      <div className="font-display text-lg text-charcoal">{m.label}</div>
                      <div className="mt-1 text-xs leading-relaxed text-charcoal/60">{m.desc}</div>
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <h3 className="font-display text-3xl leading-tight tracking-tight text-charcoal sm:text-4xl">
                Where shall we focus?
              </h3>
              <p className="mt-3 text-sm text-charcoal/65">Pick one or several. Mix freely.</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {focuses.map((f) => {
                  const active = focus.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      onClick={() => toggleFocus(f.id)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-all hover:scale-[1.03] ${
                        active
                          ? "border-eucalyptus bg-eucalyptus text-white"
                          : "border-charcoal/15 bg-white/60 text-charcoal hover:bg-white"
                      }`}
                    >
                      {active && <Check className="h-3.5 w-3.5" />}
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="font-display text-3xl leading-tight tracking-tight text-charcoal sm:text-4xl">
                A few quiet details.
              </h3>
              <p className="mt-3 text-sm text-charcoal/65">
                We'll continue the conversation on WhatsApp.
              </p>
              <div className="mt-7 space-y-4">
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.16em] text-charcoal/60">
                    Your name
                  </span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Wanjiku"
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white/70 px-4 py-3 text-sm outline-none transition-all placeholder:text-charcoal/40 focus:border-eucalyptus focus:ring-4 focus:ring-eucalyptus/15"
                  />
                </label>
                <label className="block">
                  <span className="text-xs uppercase tracking-[0.16em] text-charcoal/60">
                    Preferred time
                  </span>
                  <input
                    value={when}
                    onChange={(e) => setWhen(e.target.value)}
                    placeholder="e.g. Saturday morning"
                    className="mt-2 w-full rounded-xl border border-charcoal/15 bg-white/70 px-4 py-3 text-sm outline-none transition-all placeholder:text-charcoal/40 focus:border-eucalyptus focus:ring-4 focus:ring-eucalyptus/15"
                  />
                </label>
              </div>
            </>
          )}
        </div>

        <div className="mt-8 flex items-center justify-between gap-3 border-t border-charcoal/10 bg-white/40 px-7 py-5 sm:px-10">
          <button
            onClick={() => (step === 0 ? setOpen(false) : setStep((s) => s - 1))}
            className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-charcoal/70 transition-colors hover:text-charcoal"
          >
            <ArrowLeft className="h-4 w-4" />
            {step === 0 ? "Close" : "Back"}
          </button>

          {step < 2 ? (
            <button
              disabled={!canNext}
              onClick={() => setStep((s) => s + 1)}
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={submit}
              className="inline-flex items-center gap-2 rounded-full bg-eucalyptus px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-[0_18px_40px_-12px_rgba(141,170,160,0.8)]"
            >
              Send via WhatsApp <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
