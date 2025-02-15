import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const inputClasses =
    "peer mt-1 block w-full rounded-lg border-2 border-gray-300 bg-transparent px-4 py-3 placeholder-transparent focus:border-primary focus:ring-0";
  const labelClasses =
    "absolute left-4 -top-3 bg-white px-2 text-sm text-gray-600 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary";

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-purple-50 to-white px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary font-semibold">CONTACT US</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Let's Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Transform your Instagram business with Instaxbot
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    📍
                  </span>
                  <span>Thanjavur, India</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    📧
                  </span>
                  <span>info@techvaseegrah.com</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    📱
                  </span>
                  <span>+91 (XXX) XXX-XXXX</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className={inputClasses}
                  required
                />
                <label htmlFor="name" className={labelClasses}>
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className={inputClasses}
                  required
                />
                <label htmlFor="email" className={labelClasses}>
                  Email
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className={inputClasses}
                  required
                />
                <label htmlFor="subject" className={labelClasses}>
                  Subject
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className={`${inputClasses} resize-none`}
                  required
                />
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center space-x-2 btn-primary relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === "loading" ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ⌛
                  </motion.div>
                ) : status === "success" ? (
                  <CheckCircle className="w-5 h-5" />
                ) : status === "error" ? (
                  <AlertCircle className="w-5 h-5" />
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
