import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, Send, ShieldCheck } from "lucide-react";
import { business } from "../../data/business";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xjyvlrjz";

const categoryOptions = [
  "Wholesale Medicines & Injectables",
  "Surgical Sutures & Cannulas",
  "IV Fluids & Hospital Consumables",
  "Medical Equipment & Diagnostic Devices",
  "General Wholesale Inquiry",
  "Others",
];

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    category: categoryOptions[0],
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Medical Inquiry from ${formData.name} (${formData.organization || "Independent"})`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          organization: "",
          category: categoryOptions[0],
          message: "",
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit form. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Formspree submission error:", err);
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please call or WhatsApp us directly.");
    }
  };

  return (
    <div id="contact-form" className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl shadow-slate-200/50 scroll-mt-24">
      
      {/* Header */}
      <div className="border-b border-slate-100 pb-5">
        <div className="inline-flex items-center gap-2 rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-teal-800 border border-teal-200/60">
          <ShieldCheck size={14} className="text-teal-600" />
          <span>Direct B2B Inquiry Form</span>
        </div>
        <h3 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
          Send a Wholesale Requirement
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Fill out the form below to receive a bulk quotation from {business.name}.
        </p>
      </div>

      {/* Success State */}
      {status === "success" ? (
        <div className="my-8 rounded-xl bg-teal-50 border border-teal-200/80 p-6 text-center">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-teal-600 text-white shadow-md">
            <CheckCircle2 size={24} />
          </div>
          <h4 className="mt-4 text-lg font-bold text-teal-950">Inquiry Sent Successfully!</h4>
          <p className="mt-2 text-xs leading-relaxed text-teal-800 max-w-md mx-auto">
            Thank you for reaching out to <strong>{business.name}</strong>. Your inquiry has been received, and our wholesale distribution team will contact you shortly.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-teal-700 px-4 py-2 text-xs font-semibold text-white hover:bg-teal-800 transition-colors"
          >
            Send Another Requirement
          </button>
        </div>
      ) : (
        /* Contact Form */
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >
          {/* Error Banner */}
          {status === "error" && (
            <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3.5 text-xs text-red-800">
              <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-600" />
              <div>
                <p className="font-bold">Submission Failed</p>
                <p className="mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Dr. Rahul Sharma"
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
              />
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="doctor@hospital.com"
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-slate-700">
                Phone / WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
              />
            </div>

            {/* Organization / Clinic Name */}
            <div>
              <label htmlFor="organization" className="block text-xs font-semibold text-slate-700">
                Hospital / Pharmacy / Clinic Name
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="City Multi-Specialty Hospital"
                className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
              />
            </div>
          </div>

          {/* Category Dropdown */}
          <div>
            <label htmlFor="category" className="block text-xs font-semibold text-slate-700">
              Product Category Requirement <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              required
              value={formData.category}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 transition focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
            >
              {categoryOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-700">
              Requirement Details / Product Specifications <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please specify product list, quantities, brand preferences (e.g. Ethicon sutures, Nipro cannulas, IV fluids), or delivery location..."
              className="mt-1.5 w-full rounded-lg border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 transition focus:border-teal-600 focus:bg-white focus:outline-none focus:ring-1 focus:ring-teal-600"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-teal-600 hover:shadow-lg active:scale-[0.99] disabled:opacity-75"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Sending Requirement...</span>
              </>
            ) : (
              <>
                <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
                <span>Submit Wholesale Inquiry</span>
              </>
            )}
          </button>
          <p className="text-center text-[0.68rem] text-slate-400">
            Powered by Formspree • Direct notification sent to {business.contact.email}
          </p>
        </form>
      )}
    </div>
  );
}

export default ContactForm;
