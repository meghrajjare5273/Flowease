"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ingredients = [
  {
    name: "Ginger",
    benefits: "Helps with cramps and nausea",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Turmeric",
    benefits: "Anti-inflammatory properties",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Cinnamon",
    benefits: "Reduces menstrual pain",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Peppermint",
    benefits: "Soothes digestive discomfort",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Chamomile",
    benefits: "Calming and relaxing",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    name: "Raspberry Leaf",
    benefits: "Supports uterine health",
    image: "/placeholder.svg?height=120&width=120",
  },
];

export function IngredientsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="ingredients" className="py-20 bg-pink-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Natural Ingredients for Natural Relief
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground mb-8"
            >
              We carefully select each ingredient for its proven benefits in
              supporting menstrual health. Our formula is 100% natural, organic,
              and free from artificial additives.
            </motion.p>

            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {ingredients.map((ingredient, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <Image
                      src={ingredient.image || "/placeholder.svg"}
                      alt={ingredient.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{ingredient.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {ingredient.benefits}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="aspect-square relative">
                <Image
                  src="/placeholder.svg?height=500&width=500"
                  alt="Flowease Ingredients"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-semibold">
                  100% Organic Certified
                </h3>
                <p className="text-muted-foreground">
                  Our ingredients are sourced from trusted organic farms and
                  undergo rigorous quality testing.
                </p>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-2xl bg-pink-200/50 blur-xl -z-10 animate-float" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
