"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Droplets, Brain, Moon, Sparkles } from "lucide-react";

const benefits = [
  {
    title: "Pain Relief",
    description:
      "Reduces cramps, bloating, and discomfort during menstruation with natural ingredients.",
    icon: HeartPulse,
    color: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    title: "Hormonal Balance",
    description:
      "Balances hormones and eases PMS symptoms with raspberry leaf and chaste tree berry.",
    icon: Droplets,
    color: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    title: "Natural Energy",
    description:
      "Boosts energy and mental clarity without caffeine using ashwagandha and B vitamins.",
    icon: Brain,
    color: "bg-yellow-100",
    iconColor: "text-yellow-500",
  },
  {
    title: "Better Sleep",
    description:
      "Improves sleep quality with valerian root, magnesium, and melatonin during your period.",
    icon: Moon,
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    title: "Detoxification",
    description:
      "Helps detox the body and reduce water retention with lemon, ginger, and apple cider vinegar.",
    icon: Sparkles,
    color: "bg-green-100",
    iconColor: "text-green-500",
  },
];

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="benefits" className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Benefits That Make a Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Our carefully crafted formula provides comprehensive support for
            your menstrual cycle
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="benefit-card bg-white rounded-xl p-6 shadow-sm"
            >
              <div
                className={`w-12 h-12 rounded-full ${benefit.color} flex items-center justify-center mb-4`}
              >
                <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
