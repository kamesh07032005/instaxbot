import React, { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Mail, Lock, User, ArrowRight } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add signup logic here
    console.log("Signup attempt:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputFields = [
    {
      id: "name",
      label: "Full Name",
      type: "text",
      icon: User,
      placeholder: "John Doe",
    },
    {
      id: "email",
      label: "Email address",
      type: "email",
      icon: Mail,
      placeholder: "you@example.com",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      icon: Lock,
      placeholder: "••••••••",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      icon: Lock,
      placeholder: "••••••••",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-white to-white px-4 pt-[65px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-xl"
      >
        {/* Header */}
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4"
          >
            <UserPlus className="w-8 h-8 text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="mt-2 text-gray-600">Start your journey with us</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            {inputFields.map((field, index) => (
              <motion.div
                key={field.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <label
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </label>
                <div className="mt-1 relative">
                  <field.icon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder={field.placeholder}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button
            type="submit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all"
          >
            <span>Create Account</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </form>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-gray-600"
        >
          Already have an account?{" "}
          <a
            href="/login"
            className="font-medium text-primary hover:text-secondary"
          >
            Log in
          </a>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Signup;
