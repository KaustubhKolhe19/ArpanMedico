import { MessageCircle, Phone } from "lucide-react";
import { business } from "../../data/business";
import { phoneHref } from "../../lib/display";
import { createWhatsAppUrl } from "../../lib/whatsapp";

const enquiryMessage = `Hello ${business.name}, I would like to enquire about a healthcare supply requirement.`;

type ContactActionsProps = {
  whatsappClassName?: string;
  callClassName?: string;
};

function ContactActions({
  whatsappClassName = "btn btn-primary",
  callClassName = "btn btn-secondary",
}: ContactActionsProps) {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <a
        href={createWhatsAppUrl(enquiryMessage)}
        target="_blank"
        rel="noreferrer"
        className={`${whatsappClassName} min-h-11 w-full px-5 sm:w-auto lg:min-h-12`}
      >
        <MessageCircle size={17} aria-hidden="true" />
        Enquire on WhatsApp
      </a>
      <a href={phoneHref(business.contact.phone)} className={`${callClassName} min-h-11 w-full px-5 sm:w-auto lg:min-h-12`}>
        <Phone size={17} aria-hidden="true" />
        Call Us
      </a>
    </div>
  );
}

export default ContactActions;
