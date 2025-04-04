"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How often should I drink Flowease?",
    answer:
      "We recommend drinking Flowease 1-2 times daily during your period. You can also start 2-3 days before your period begins for preventative benefits.",
  },
  {
    question: "Are there any side effects?",
    answer:
      "Flowease is made with 100% natural ingredients and is generally well-tolerated. As with any supplement, some individuals may experience mild digestive changes. If you have any concerns, please consult with your healthcare provider.",
  },
  {
    question: "Can I drink Flowease if I'm pregnant or breastfeeding?",
    answer:
      "We recommend consulting with your healthcare provider before using Flowease during pregnancy or while breastfeeding.",
  },
  {
    question: "How long does it take to feel the effects?",
    answer:
      "Many customers report feeling relief within 30-60 minutes of drinking Flowease. For best results, we recommend starting use 2-3 days before your period begins.",
  },
  {
    question: "Is Flowease suitable for vegetarians and vegans?",
    answer:
      "Yes, Flowease is 100% plant-based and suitable for both vegetarians and vegans.",
  },
  {
    question: "How should I store Flowease?",
    answer:
      "Store Flowease in a cool, dry place away from direct sunlight. After opening, keep refrigerated and consume within 7 days for optimal freshness.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="faq" className="py-20 bg-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Find answers to common questions about Flowease
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
