import { MessageCircle, Phone, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { business, navigationItems } from "../../data/business";
import { createWhatsAppUrl } from "../../lib/whatsapp";
import { phoneHref } from "../../lib/display";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden" aria-label="Mobile navigation">
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/40"
        aria-label="Close navigation"
        onClick={onClose}
      />
      <aside
        className="absolute right-0 top-0 flex h-full w-[min(88vw,20rem)] flex-col bg-white px-5 py-5"
        aria-label="Mobile menu"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <span className="section-eyebrow text-teal-700">Menu</span>
          <button
            type="button"
            className="rounded-sm p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav className="py-4" aria-label="Mobile primary navigation">
          <ul className="space-y-0.5">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-sm px-3 py-2.5 text-[0.95rem] font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                      isActive ? "bg-teal-50 text-teal-800" : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto grid gap-2">
          <a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="btn btn-primary w-full" onClick={onClose}>
            <MessageCircle size={16} aria-hidden="true" />
            Enquire on WhatsApp
          </a>
          <a href={phoneHref(business.contact.phone)} className="btn btn-secondary w-full" onClick={onClose}>
            <Phone size={16} aria-hidden="true" />
            Call Us
          </a>
          <Link to="/contact" onClick={onClose} className="btn-link justify-center py-2">
            Contact details
          </Link>
        </div>
      </aside>
    </div>
  );
}

export default MobileMenu;
