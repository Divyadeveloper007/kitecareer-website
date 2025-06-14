import { Mail, MapPin, PhoneCall, Clock3 } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import img1 from "../../assets/contact/contact1.jpeg";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (!/^[a-zA-Z]{2,}$/.test(formData.firstName.trim())) {
      newErrors.firstName = "First Name must be at least 2 letters";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (!/^[a-zA-Z]{1,}$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Last Name must be at least 2 letters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (formData.message.trim() && formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.12:8000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(result.message || "Submission failed.");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Something went wrong while submitting the form.");
    }
  };

  return (
    <div className="w-full">
      {/* Top 3 Cards */}
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: PhoneCall,
            title: "Call Us Anytime",
            value: "+91 9498478472",
          },
          {
            icon: Mail,
            title: "Send E-Mail",
            value: "hr@kitecareer.com",
          },
          {
            icon: MapPin, // use Lucide's MapPin icon for location
            title: "Our Location",
            value: "VKR complex, Behind bus stand,\nSurandai - 627859",
          },
        ].map(({ icon: Icon, title, value }, index) => (
          <div
            key={index}
            className="border border-[#09A7F1] rounded-lg p-6 flex items-start space-x-4 transition-all duration-500 hover:bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="text-[#09A7F1] p-3 border border-[#09A7F1] rounded-full">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="text-[#09A7F1] font-semibold whitespace-pre-line">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Heading */}
      <div className="flex flex-col justify-end items-center p-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-[#1BADF2]">
          Let's talk with us
        </h2>
        <p className="text-sm text-gray-500 lg:text-base">
          We’re here to answer your questions!
        </p>
      </div>

      {/* Contact Section */}
      <div className="relative max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white/90 backdrop-blur-md rounded-xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
          {/* Image */}
          <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
            <img
              src={img1}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 bg-white">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number*"
                value={formData.phone}
                onChange={handleChange}
                pattern="\d*"
                inputMode="numeric"
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) e.preventDefault();
                }}
                className="w-full p-3 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}

              <textarea
                name="message"
                rows="4"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              <button
                type="submit"
                className="w-full bg-[#0077b8] hover:bg-[#006bb0] text-white font-semibold py-3 rounded-full transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
