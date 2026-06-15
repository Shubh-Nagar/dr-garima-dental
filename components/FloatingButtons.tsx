import { clinic } from "@/data/clinic";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
      {/* WhatsApp — with continuous pulse ring */}
      <div className="relative">
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <a
          href={`https://wa.me/${clinic.whatsapp}?text=Hi%20${encodeURIComponent(clinic.shortName)},%20I'd%20like%20to%20book%20an%20appointment.`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-card transition hover:scale-110 active:scale-95"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {/* Call button */}
      <a
        href={`tel:${clinic.phone}`}
        aria-label="Call the clinic"
        className="grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-card transition hover:scale-110 active:scale-95"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
