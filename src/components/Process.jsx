import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Planning",
    description:
      "Discuss project goals, scope, and requirements with the client.",
  },
  {
    title: "Design",
    description:
      "Create wireframes, mockups, and design prototypes for approval.",
  },
  {
    title: "Development",
    description:
      "Build and code the project using the latest technologies and best practices.",
  },
  // Add more steps here
];

const Process = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
