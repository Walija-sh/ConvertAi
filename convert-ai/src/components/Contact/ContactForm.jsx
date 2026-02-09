import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import ContactModal from "./ContactModal";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // fake request delay
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="py-7 px-6 border-gray-2/20 border rounded-xl bg-pastel-3 w-full max-w-[440px] mx-auto flex flex-col gap-6 text-black-2 relative overflow-hidden text-[16px]"
    >
      {/* Full name */}
      <fieldset className="flex flex-col gap-3">
        <label className="text-[14px] lg:text-[15px] xl:text-[16px]">What's your full name? *</label>
        <input
          type="text"
          required
          placeholder="Jane Smith"
          className="p-3 bg-white rounded-[10px] border border-gray-2/20 focus:border-primary outline-none"
        />
      </fieldset>

      {/* Email */}
      <fieldset className="flex flex-col gap-3">
        <label className="text-[14px]  lg:text-[15px] xl:text-[16px]">What's your work email? *</label>
        <input
          type="email"
          required
          placeholder="jane@company.com"
          className="p-3 bg-white rounded-[10px] border border-gray-2/20 focus:border-primary outline-none"
        />
      </fieldset>

      {/* Company */}
      <fieldset className="flex flex-col gap-3">
        <label className="text-[14px]  lg:text-[15px] xl:text-[16px]">What company do you work for?</label>
        <input
          type="text"
          placeholder="Big Tech company"
          className="p-3 bg-white rounded-[10px] border border-gray-2/20 focus:border-primary outline-none"
        />
      </fieldset>

      {/* Size */}
      <fieldset className="flex flex-col gap-3">
        <label className="text-[14px]  lg:text-[15px] xl:text-[16px]">How big is your company? *</label>
        <select
          required
          className="p-3 bg-white rounded-[10px] border border-gray-2/20 focus:border-primary outline-none cursor-pointer"
        >
          <option>1-50</option>
          <option>50-100</option>
          <option>100-500</option>
          <option>500-1000</option>
          <option>1000+</option>
        </select>
      </fieldset>

      {/* Message */}
      <fieldset className="flex flex-col gap-3">
        <label className="text-[14px]  lg:text-[15px] xl:text-[16px]">How can we help? *</label>
        <textarea
          rows={4}
          required
          placeholder="I'm interested in Convert for my team. I'd like to learn more about..."
          className="p-3 bg-white rounded-[10px] border border-gray-2/20 focus:border-primary outline-none resize-none"
        />
      </fieldset>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="text-[16px] lg:text-[17px] xl:text-[18px] flex items-center justify-center gap-1 text-white bg-primary transition-all duration-100 ease-in rounded-lg hover:bg-black cursor-pointer py-2.5 px-5"
      >
        {loading ? (
          <>
          <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
          <GoChevronRight />
          </>
        ) : (
          <>
            <p>Send message</p>
            <GoChevronRight />
          </>
        )}
      </button>

      {/* Modal */}
      {showModal && <ContactModal />}
    </form>
  );
};

export default ContactForm;
