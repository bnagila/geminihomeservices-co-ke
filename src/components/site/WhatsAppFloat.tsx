import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/254110879109"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-eucalyptus px-5 py-3.5 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(141,170,160,0.6)] backdrop-blur transition-all hover:scale-[1.03] hover:shadow-[0_18px_40px_-12px_rgba(141,170,160,0.8)]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
