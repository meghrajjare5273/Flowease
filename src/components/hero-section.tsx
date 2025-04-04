"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 hero-gradient">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Your Monthly Flow, <span className="text-primary">Perfected</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">Because your period deserves to be easy</p>
            </div>
            <p className="text-base md:text-lg">
              A soothing blend of ginger, turmeric, cinnamon, and peppermint to help with cramps, bloating, and
              discomfort during menstruation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full">
                Shop Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Learn More
              </Button>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=32&width=32`}
                      alt="Customer"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-medium">500+</span> happy customers
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative z-10"
            >
              <div className="circle-image w-[280px] h-[280px] md:w-[400px] md:h-[400px] mx-auto">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Flowease Herbal Drink"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute top-1/2 -right-12 md:right-0 transform -translate-y-1/2"
            >
              <div className="bg-white rounded-xl shadow-lg p-4 w-[180px]">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold">100%</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Natural Ingredients</p>
                    <p className="text-xs text-muted-foreground">Organic & Pure</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-0 -left-12 md:left-0"
            >
              <div className="bg-white rounded-xl shadow-lg p-4 w-[180px]">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-accent/50 flex items-center justify-center">
                    <span className="text-accent-foreground font-bold">5★</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Customer Rating</p>
                    <p className="text-xs text-muted-foreground">Trusted by many</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl -z-10" />
    </section>
  )
}

