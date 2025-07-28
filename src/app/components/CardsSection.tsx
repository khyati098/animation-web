"use client";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Globe,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function CardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border-purple-500/30">
            Features
          </Badge>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Everything you need to
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              build amazing apps
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Powerful features designed to accelerate your development workflow
            and deliver exceptional user experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-auto lg:h-[800px]">
          {/* Main Feature Card - Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="lg:col-span-2 lg:row-span-2 relative group"
          >
            <div className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg border border-slate-700/50 rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="AI Technology"
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />
              </div>

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-3xl text-white mb-4">
                    AI-Powered Development
                  </h3>
                  <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                    Harness the power of artificial intelligence to automate
                    repetitive tasks, generate code snippets, and optimize your
                    workflow with smart suggestions.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      <span>Live AI Assistant</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      <span>Smart Code Gen</span>
                    </div>
                  </div>

                  <Button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 group">
                    Explore AI Features
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Performance Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="h-full bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur-lg border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full -translate-y-10 translate-x-10" />

              <div className="relative">
                <Zap className="w-8 h-8 text-emerald-400 mb-4" />
                <h4 className="text-white text-xl mb-2">Lightning Fast</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">Load Time</span>
                    <span className="text-emerald-400">0.8s</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300 text-sm">Performance</span>
                    <span className="text-emerald-400">98/100</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "98%" } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Security Badge Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="h-full bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-lg border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full" />

              <div className="relative">
                <Shield className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white text-xl mb-2">Enterprise Security</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Bank-level security with end-to-end encryption
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-green-400 text-sm">
                    Actively Protected
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* User Count Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-2 relative group"
          >
            <div className="h-full bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-lg border border-slate-600/50 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600" />

              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Users className="w-6 h-6 text-purple-400" />
                    <h4 className="text-white text-lg">Global Community</h4>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">
                    Join thousands of developers building the future
                  </p>

                  <div className="flex items-center gap-6">
                    <div>
                      <div className="text-2xl text-white">50K+</div>
                      <div className="text-slate-400 text-xs">Active Users</div>
                    </div>
                    <div>
                      <div className="text-2xl text-white">180+</div>
                      <div className="text-slate-400 text-xs">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl text-white">4.9★</div>
                      <div className="text-slate-400 text-xs">Rating</div>
                    </div>
                  </div>
                </div>

                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className="w-10 h-10 rounded-full border-2 border-slate-700 overflow-hidden"
                    >
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-${
                          1500000000000 + i * 100000000
                        }?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80`}
                        alt={`User ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Deployment Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="h-full bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-lg border border-orange-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-full -translate-y-8 translate-x-8" />

              <div className="relative">
                <Rocket className="w-8 h-8 text-orange-400 mb-4" />
                <h4 className="text-white text-xl mb-2">Rapid Deploy</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Deploy anywhere in seconds with zero configuration
                </p>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-400 text-sm">≤ 30 seconds</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global Scale Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="relative group"
          >
            <div className="h-full bg-gradient-to-br from-indigo-600/20 to-purple-600/20 backdrop-blur-lg border border-indigo-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full" />

              <div className="relative">
                <Globe className="w-8 h-8 text-indigo-400 mb-4" />
                <h4 className="text-white text-xl mb-2">Global Scale</h4>
                <p className="text-slate-300 text-sm mb-4">
                  Worldwide CDN with 99.99% uptime guarantee
                </p>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">99.99% Uptime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white group"
          >
            Start Building Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
