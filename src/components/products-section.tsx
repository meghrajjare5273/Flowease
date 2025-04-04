"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    name: "Herbal Menstrual Support Drink",
    description: "A calming blend of chamomile and lemon with a touch of honey for pain relief and bloating reduction.",
    price: 24.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Hormonal Balance Period Drink",
    description: "A mildly sweet berry or hibiscus flavor with a touch of vanilla for hormonal balance.",
    price: 26.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Caffeine-Free Energy Drink",
    description: "Lightly flavored with ginger, mint, or green tea for a refreshing experience that boosts energy.",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Calming Sleep Drink for Periods",
    description: "A soothing lavender and chamomile blend with honey for a relaxing bedtime drink.",
    price: 25.99,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export function ProductsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="products" className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Product Collection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Discover our range of specialized drinks designed to support your menstrual cycle
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-4 bg-accent/30 flex items-center justify-center">
                <div className="w-48 h-48 relative">
                  <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-contain" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${product.price}</span>
                  <Button size="sm" className="rounded-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

