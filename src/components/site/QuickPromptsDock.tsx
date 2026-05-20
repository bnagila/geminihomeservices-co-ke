import { Scissors, ShoppingBasket, UtensilsCrossed, Sparkles } from "lucide-react";
import { openBookingWizard } from "./BookingWizard";

const prompts = [
  { id: "wash-leavein", label: "Wash", Icon: Sparkles },
  { id: "straightening", label: "Straighten", Icon: Scissors },
  { id: "shopping", label: "Shopper", Icon: ShoppingBasket },
  { id: "meal-prep", label: "Meal prep", Icon: UtensilsCrossed },
];

export function QuickPromptsDock() {
  return (
    <div className="dock-rise pointer-events-none fixed inset-x-0 bottom-24 z-30 flex justify-center px-4 sm:bottom-28">
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-full card-glass px-2 py-2 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.25)]">
        <span className="hidden pl-3 pr-1 text-[10px] uppercase tracking-[0.2em] text-charcoal/50 sm:inline">
          Quick book
        </span>
        {prompts.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => openBookingWizard({ focus: id })}
            className="group inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium text-charcoal transition-all duration-300 hover:scale-[1.08] hover:bg-white sm:px-4 sm:text-sm"
          >
            <Icon className="h-3.5 w-3.5 text-eucalyptus transition-transform duration-300 group-hover:rotate-6" />
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
