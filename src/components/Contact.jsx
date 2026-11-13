import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import LazyMount from "./LazyMount";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { SOCIAL_LINKS } from "../constants";

// Optional: set VITE_FORMSPREE_ID in a .env file to send messages through
// Formspree (https://formspree.io). Without it the form falls back to mailto:.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

const EMPTY_FORM = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(EMPTY_FORM);
  // idle | sending | success | mailto | error
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState("idle"); // idle | ok | failed

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    if (FORMSPREE_ID) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        setForm(EMPTY_FORM);
        setStatus("success");
      } catch {
        setStatus("error");
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name} <${form.email}>`);
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
    setStatus("mailto");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SOCIAL_LINKS.email);
      setCopied("ok");
    } catch {
      // Clipboard API needs HTTPS and user permission; show the address instead.
      setCopied("failed");
    }
    setTimeout(() => setCopied("idle"), 2500);
  };

  const statusMessage = {
    success: "Thanks! Your message was sent.",
    mailto: `Your email app should open now. If nothing happens, email me at ${SOCIAL_LINKS.email}.`,
    error: `Something went wrong. Please try again or email ${SOCIAL_LINKS.email}.`,
  }[status];

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-[#232631]"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
            />
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-tertiary disabled:opacity-60 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary border border-secondary/20 hover:border-[#915EFF] transition-colors"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            <button
              type="button"
              onClick={copyEmail}
              className="bg-tertiary py-3 px-6 rounded-xl outline-none text-secondary hover:text-white font-medium border border-secondary/20 transition-colors"
            >
              {copied === "ok" ? "Email Copied!" : copied === "failed" ? SOCIAL_LINKS.email : "Copy Email"}
            </button>

            <a
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] hover:bg-[#4752C4] py-3 px-6 rounded-xl outline-none text-white font-medium transition-colors"
            >
              Discord Community
            </a>
          </div>

          <p
            role="status"
            aria-live="polite"
            className={`min-h-[1.5rem] text-sm ${status === "error" ? "text-red-400" : "text-secondary"}`}
          >
            {statusMessage}
          </p>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <LazyMount className="relative w-full h-full">
          <EarthCanvas />
        </LazyMount>
      </motion.div>
    </div>
  );
};

const ContactSection = SectionWrapper(Contact, "contact");

export default ContactSection;
