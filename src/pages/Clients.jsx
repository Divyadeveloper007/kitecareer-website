import { useEffect, useRef } from "react";
import logo1 from "../assets/clients/athi_bankers.webp";
import logo2 from "../assets/clients/sri_vari.webp";
import logo3 from "../assets/clients/ewig.webp";
import logo11 from "../assets/clients/client8.png";
import logo14 from "../assets/clients/client11.png";
import logo15 from "../assets/clients/client12.png";
import logo16 from "../assets/clients/client13.png";
import logo17 from "../assets/clients/client14.png";
import logo18 from "../assets/clients/client15.png";

const icons = [
  { alt: "Athi Bankers", src: logo1 },
  { alt: "Sri Vari", src: logo2 },
  { alt: "Ewig Energie", src: logo3 },
  { alt: "Reios", src: logo11 },
  { alt: "Iron Temple", src: logo14 },
  { alt: "Nimir", src: logo15 },
  { alt: "LOFTx.ai", src: logo16 },
  { alt: "Kasturi", src: logo17 },
  { alt: "nu-technology", src: logo18 },
];

const Clients = () => {
  const repeatedIcons = [...icons, ...icons]; // loop effect

  return (
    <section id="client" className="py-14 px-4 md:px-10 text-center">
      <h4 className="text-[#00a4f0] font-bold text-lg tracking-wide mb-2">
        Clients
      </h4>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Amazing clients who trust us
      </h1>

      {/* Auto-scrolling section */}
      <div className="overflow-hidden relative">
        <div className="flex w-max animate-scroll gap-8 items-center py-6 px-4">
          {repeatedIcons.map((icon, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[150px] bg-white border rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center p-6"
            >
              <img
                src={icon.src}
                alt={icon.alt}
                className="h-24 w-24 object-contain"
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
