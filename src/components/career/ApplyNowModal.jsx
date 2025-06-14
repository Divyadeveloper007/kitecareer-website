import React, { useState } from "react";
import { toast } from "react-toastify";

const ApplyNowPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applyFor: "internship",
    experience: "",
    position: "",
    skills: "",
    linkedIn: "",
    github: "",
    resume: null,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (formData.applyFor === "job") {
      if (!formData.position) newErrors.position = "Position is required.";
      if (!formData.experience)
        newErrors.experience = "Experience is required.";
      if (!formData.skills) newErrors.skills = "Skills are required.";
    }

    if (!formData.resume) newErrors.resume = "Resume is required.";
    else if (
      formData.resume.type !== "application/pdf" ||
      formData.resume.size > 5 * 1024 * 1024
    ) {
      newErrors.resume = "Only PDF under 5MB allowed.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const formPayload = new FormData();
    formPayload.append("full_name", formData.fullName);
    formPayload.append("email", formData.email);
    formPayload.append("phone_number", formData.phone);
    formPayload.append("apply_for", formData.applyFor);
    formPayload.append("resume", formData.resume);
    formPayload.append("message", formData.message);

    if (formData.applyFor === "job") {
      formPayload.append("position", formData.position);
      formPayload.append("experience", formData.experience);
      formPayload.append("skills", formData.skills);
      formPayload.append("linkedin", formData.linkedIn);
      formPayload.append("github", formData.github);
    }

    try {
      const response = await fetch(
        "http://192.168.1.12:8000/api/job-application",
        {
          method: "POST",
          body: formPayload,
        }
      );

      if (!response.ok) {
        toast.error("Submission failed. Please check the form.");
        return;
      }

      toast.success("Application submitted!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        applyFor: "internship",
        experience: "",
        position: "",
        skills: "",
        linkedIn: "",
        github: "",
        resume: null,
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF] py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-[#1BADF2] mb-10">
          Apply Now
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Floating Label Input */}
          {[
            { name: "fullName", label: "Full Name", type: "text" },
            { name: "email", label: "Email Address", type: "email" },
            { name: "phone", label: "Phone Number", type: "text" },
          ].map(({ name, label, type }) => (
            <div className="relative group" key={name}>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder=" "
                className="w-full px-4 pt-6 pb-2 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1BADF2]">
                {label}
              </label>
              {errors[name] && (
                <p className="text-red-500 text-sm mt-1">{errors[name]}</p>
              )}
            </div>
          ))}

          {/* Select Option */}
          <div className="relative">
            <span className="absolute left-4 top-2 text-sm text-gray-500 pointer-events-none transition-all peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#1BADF2]">
              Applying For
            </span>
            <select
              name="applyFor"
              value={formData.applyFor}
              onChange={handleChange}
              className="w-full px-4 pt-6 pb-2 border border-gray-300 bg-[#fafafa] rounded-lg peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2] appearance-none"
            >
              <option value="internship">Internship</option>
              <option value="job">Job</option>
            </select>
          </div>

          {/* Conditional Job Fields */}
          {formData.applyFor === "job" && (
            <>
              <div className="relative group">
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  placeholder=" "
                  className="w-full px-4 pt-6 pb-2 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
                />
                <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1BADF2]">
                  Position
                </label>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder=" "
                  className="w-full px-4 pt-6 pb-2 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
                />
                <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1BADF2]">
                  Experience
                </label>
              </div>

              <div className="md:col-span-2 relative group">
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder=" "
                  className="w-full px-4 pt-6 pb-2 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
                />
                <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1BADF2]">
                  Skills (comma-separated)
                </label>
              </div>
            </>
          )}

          {/* LinkedIn & GitHub */}
          {["linkedIn", "github"].map((name) => (
            <div className="relative group" key={name}>
              <input
                type="text"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder=" "
                className="w-full px-4 pt-6 pb-2 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1BADF2]">
                {name === "linkedIn" ? "LinkedIn Profile" : "GitHub Profile"}
              </label>
            </div>
          ))}

          {/* Resume */}
          {/* Resume Upload Field - Alternate Style */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-600">
              Resume <span className="text-gray-400">(PDF only)</span>
            </label>

            <div className="relative w-full">
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                onChange={handleChange}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
              />
              <div className="border-2 border-dashed border-[#1BADF2] rounded-md p-4 flex flex-col items-center justify-center text-center  bg-[#fafafa] transition hover:shadow-lg hover:border-[#17a2e2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-[#1BADF2] mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <p className="text-sm text-gray-600">
                  Drag & drop or{" "}
                  <span className="text-[#1BADF2] font-semibold">browse</span>{" "}
                  to upload your resume
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  Only PDF format, max 5MB
                </p>
              </div>
              {formData.resume?.name && (
                <p className="mt-2 text-sm text-gray-700 truncate">
                  Selected File:{" "}
                  <span className="font-medium">{formData.resume.name}</span>
                </p>
              )}
              {errors.resume && (
                <p className="text-red-500 text-sm mt-1">{errors.resume}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="md:col-span-2 relative group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder=" "
              className="w-full px-4 pt-6 pb-2 border border-gray-300 bg-[#fafafa] rounded-lg  peer focus:outline-none focus:ring-1 focus:ring-[#1BADF2]"
            />
            <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1BADF2]">
              Message / Cover Letter
            </label>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#1BADF2] hover:bg-[#17a2e2] text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyNowPage;
