import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaCommentDots } from "react-icons/fa";

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);

  const phoneNumber = "9498478472";
  const prefilledMessage = "Hi, I'm interested in your services!";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;
  const telLink = `tel:+91${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3">
      {open && (
        <div className="flex flex-col items-end space-y-3 transition-all duration-300 animate-fadeIn">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-green-400 to-green-600 p-4 rounded-full shadow-2xl text-white transition-transform hover:scale-110"
          >
            <FaWhatsapp className="w-6 h-6" />
          </a>
          <a
            href={telLink}
            className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-full shadow-2xl text-white transition-transform hover:scale-110"
          >
            <FaPhoneAlt className="w-6 h-6" />
          </a>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full shadow-2xl text-white transition-transform hover:scale-110"
      >
        <FaCommentDots className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
