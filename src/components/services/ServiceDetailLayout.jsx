import { FolderOpen, MoveRight, CheckCircle2, Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetailLayout = ({ services }) => {
  const { slug } = useParams();
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const found = services.find((s) => s.slug === slug);
    setActiveService(found);
  }, [slug, services]);

  if (!activeService) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600 text-xl">Service not found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Left: Details */}
      <div className="lg:col-span-3 space-y-6">
        {/* Service Card */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-[#0075B7] shadow">
              {activeService.icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              {activeService.title}
            </h2>
          </div>

          <img
            src={activeService.image}
            alt={activeService.title}
            className="w-full rounded-xl mb-6"
          />

          <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
            {activeService.content}
          </p>
        </div>
        {/* Highlights Section */}
        {Array.isArray(activeService.highlights) &&
          activeService.highlights.length > 0 && (
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-[#041735]">
                Highlights
              </h3>
              <ul className="list-none space-y-3">
                {activeService.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Star size={18} className="text-yellow-500 mt-1" />
                    <span className="text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        {/* Benefits Section */}
        {Array.isArray(activeService.benefits) &&
          activeService.benefits.length > 0 && (
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md mt-8">
              <h3 className="text-xl font-semibold mb-4 text-[#041735]">
                Benefits
              </h3>
              <ul className="list-none space-y-3">
                {activeService.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-green-500 mt-1" />
                    <span className="text-gray-800">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
      </div>

      {/* Right: Category List */}
      <div className="bg-[#f5f7fd] p-6 rounded-xl shadow-md w-full max-w-[320px] mx-auto lg:mx-0">
        <h3 className="text-lg font-semibold text-[#041735] mb-4 border-b pb-2">
          Categories
        </h3>

        <div className="space-y-3">
          {services.map((service) => {
            const isActive = service.slug === slug;
            return (
              <Link
                to={`/services/${service.slug}`}
                key={service.slug}
                className={`relative group flex items-center justify-between overflow-hidden px-5 py-3 rounded-lg text-sm font-medium shadow-sm transition-all duration-300 w-full
                  ${
                    isActive
                      ? "bg-[#0075B7] text-white"
                      : "bg-white text-gray-800 hover:text-white border border-gray-200"
                  }`}
              >
                {/* Hover Background */}
                {!isActive && (
                  <span className="absolute left-0 top-0 h-full  w-0 group-hover:w-full bg-[#0075B7] transition-all duration-300 ease-in-out z-0" />
                )}

                <div className="flex items-center gap-3 relative z-10">
                  <FolderOpen size={20} />
                  {service.title}
                </div>

                <span className="relative z-10">
                  {isActive && <MoveRight size={20} />}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailLayout;
