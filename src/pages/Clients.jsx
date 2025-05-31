import { useRef, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import logo1 from "../assets/clients/duvaraha_builders.webp";
import logo2 from "../assets/clients/athi_bankers.webp";
import logo3 from "../assets/clients/sri_vari.webp";
import logo4 from "../assets/clients/ewig.webp";
import logo5 from "../assets/clients/freeze.webp";

const clients = [
  { name: "Duvaraha Builders", logo: logo1 },
  { name: "Athi Bankers", logo: logo2 },
  { name: "Sri Vari", logo: logo3 },
  { name: "Ewig Energie", logo: logo4 },
  { name: "Freeze Service", logo: logo5 },
];

const Clients = () => {
  const scrollRef = useRef(null);

  const itemWidth = 180 + 32; // 180px + mx-4 (16px left & right)

  // ✅ Infinite scroll logic (click-based)
  const handleScrollRight = () => {
    if (!scrollRef.current) return;
    const scrollElement = scrollRef.current;

    scrollElement.scrollBy({ left: itemWidth, behavior: "smooth" });

    // After scroll animation, check if we've reached second set, then reset
    setTimeout(() => {
      const halfWidth = scrollElement.scrollWidth / 2;
      if (scrollElement.scrollLeft >= halfWidth) {
        scrollElement.scrollLeft = scrollElement.scrollLeft - halfWidth;
      }
    }, 350); // smooth scroll duration
  };

  // ✅ On mount, set scrollLeft to 0
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section
      id="client"
      className="bg-[#f2f2f2] py-14 px-4 md:px-10 items-center text-center relative"
    >
      <h4 className="text-[#00a4f0] font-bold text-lg tracking-wide mb-2">
        Clients
      </h4>
      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        Amazing clients who trust us
      </h1>

      {/* Chevron Right */}
      <button
        onClick={handleScrollRight}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:scale-110 transition hidden md:inline-block"
        aria-label="Scroll clients right"
      >
        <ChevronRight className="text-blue-600 w-5 h-5" />
      </button>

      {/* Client scroll container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide whitespace-nowrap scroll-smooth"
        onScroll={() => {
          const el = scrollRef.current;
          if (!el) return;
          const halfWidth = el.scrollWidth / 2;
          if (el.scrollLeft >= halfWidth) {
            el.scrollLeft = el.scrollLeft - halfWidth;
          } else if (el.scrollLeft <= 0) {
            el.scrollLeft = el.scrollLeft + halfWidth;
          }
        }}
      >
        {/* Clients repeated twice for infinite loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="inline-block min-w-[180px] mx-4 shrink-0"
          >
            <img
              src={client.logo}
              alt={client.name}
              className="h-20 object-contain mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
