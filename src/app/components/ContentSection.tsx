"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Check, ArrowRight, Play } from "lucide-react";

export function ContentSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const contentBlocks = [
    {
      badge: "Analytics",
      title: "Real-time insights that drive growth",
      description:
        "Get actionable insights from your data with our advanced analytics dashboard. Track user behavior, monitor performance, and make data-driven decisions.",
      features: [
        "Live data visualization",
        "Custom reporting tools",
        "Advanced filtering options",
        "Export & sharing capabilities",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cta: "View Analytics",
      reverse: false,
    },
    {
      badge: "Automation",
      title: "Automate your workflow like never before",
      description:
        "Save time and reduce errors with intelligent automation. Set up custom workflows that adapt to your business needs and scale automatically.",
      features: [
        "Smart trigger system",
        "Conditional logic builder",
        "Multi-step workflows",
        "Integration marketplace",
      ],
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cta: "Start Automating",
      reverse: true,
    },
    {
      badge: "Collaboration",
      title: "Teams that work together, succeed together",
      description:
        "Enhance team productivity with real-time collaboration tools. Share ideas, track progress, and achieve goals faster with seamless team integration.",
      features: [
        "Real-time editing",
        "Comment & review system",
        "Task management",
        "Video conferencing",
      ],
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      cta: "Join Teams",
      reverse: false,
    },
  ];

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto space-y-32">
        {contentBlocks.map((block, index) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className={`flex flex-col ${
              block.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16`}
          >
            {/* Content */}
            <div className="flex-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: block.reverse ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
              >
                <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border-purple-500/30">
                  {block.badge}
                </Badge>
                <h3 className="text-3xl lg:text-4xl text-white leading-tight mb-6">
                  {block.title}
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed mb-8">
                  {block.description}
                </p>
              </motion.div>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                className="space-y-4"
              >
                {block.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: block.reverse ? 30 : -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.3 + 0.6 + featureIndex * 0.1,
                    }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.3 + 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group">
                  {block.cta}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </Button>
                <Button
                  variant="outline"
                  className="text-white border-slate-600 hover:bg-slate-800 group"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: block.reverse ? -50 : 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.3 }}
              className="flex-1 relative"
            >
              <div className="relative group">
                {/* Main Image */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl"
                >
                  <ImageWithFallback
                    src={block.image}
                    alt={block.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-xl"
                />
                <motion.div
                  animate={{
                    y: [0, 15, 0],
                    x: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl"
                />

                {/* Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, rotate: -5 }}
                  animate={isInView ? { opacity: 1, y: 0, rotate: -5 } : {}}
                  transition={{ delay: index * 0.3 + 1 }}
                  whileHover={{ y: -5, rotate: 0 }}
                  className={`absolute ${
                    block.reverse ? "-left-8" : "-right-8"
                  } bottom-8 bg-slate-800/90 backdrop-blur-lg border border-slate-600/50 rounded-xl p-4 shadow-xl`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-2 h-2 bg-white rounded-full"
                      />
                    </div>
                    <div>
                      <div className="text-white text-sm">99.9% Uptime</div>
                      <div className="text-slate-400 text-xs">Last 30 days</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
