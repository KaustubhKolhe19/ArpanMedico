import { Menu, MessageCircle, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { business, navigationItems } from "../../data/business";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)]">
      <div className="site-container flex h-[3.75rem] items-center justify-between gap-4">
        <NavLink
          to="/"
          className="group flex min-w-0 items-center gap-2.5 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
          aria-label={`${business.name} home`}
        >
          <span className="flex size-7 shrink-0 items-center justify-center bg-teal-700 text-xs font-bold text-white">
            AM
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[0.9rem] font-semibold tracking-tight text-slate-950 sm:text-[0.95rem]">
              {business.name}
            </span>
            <span className="hidden text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:block">
              {business.address.city}
            </span>
          </span>
        </NavLink>

        <nav className="hidden lg:block" aria-label="Primary navigation">
          <ul className="flex items-center">
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-sm px-2.5 py-1.5 text-[0.8125rem] font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 xl:px-3 ${
                      isActive ? "text-teal-800" : "text-slate-600 hover:text-slate-950"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className={isActive ? "border-b-2 border-teal-600 pb-[3px]" : "pb-[3px]"}>
                      {item.label}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link to="/contact" className="btn btn-secondary min-h-8 min-w-[7.5rem] px-3 py-1.5 text-[0.8125rem]">
            <Phone size={14} aria-hidden="true" />
            Contact us
          </Link>
          <Link to="/contact" className="btn btn-primary min-h-8 min-w-[7.5rem] px-3.5 py-1.5 text-[0.8125rem]">
            <MessageCircle size={15} aria-hidden="true" />
            Enquiry
          </Link>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-slate-700 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 lg:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>
      <div id="mobile-navigation">
        <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
