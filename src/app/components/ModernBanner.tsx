"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ModernBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full max-w-6xl bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-lg border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/20 to-cyan-900/30 opacity-60" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 right-20 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative flex flex-col lg:flex-row items-center p-8 lg:p-12 gap-8 lg:gap-12">
        {/* Content Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center lg:justify-start"
          >
            <Badge className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 text-white border-0 backdrop-blur-sm px-4 py-2">
              <Star className="w-3 h-3 mr-1" />
              New Feature
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h1 className="text-4xl lg:text-6xl text-white leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Digital Experience
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
              Discover the next generation of web applications with cutting-edge
              design, seamless animations, and unparalleled user experience.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-8 py-4"
          >
            <div className="text-center">
              <div className="text-2xl text-white">50K+</div>
              <div className="text-sm text-slate-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-white">99.9%</div>
              <div className="text-sm text-slate-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl text-white">4.9★</div>
              <div className="text-sm text-slate-400">Rating</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-6 text-lg group"
            >
              Get Started
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.div>
            </Button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center px-8 py-6 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-lg transition-colors duration-200 text-lg group"
            >
              <Play className="w-5 h-5 mr-2 text-purple-400" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3 pt-4"
          >
            <Users className="w-5 h-5 text-slate-400" />
            <span className="text-slate-400">Trusted by teams at</span>
            <div className="flex items-center gap-4 ml-2">
              {["Google", "Microsoft", "Apple"].map((company) => (
                <span key={company} className="text-slate-300 opacity-60">
                  {company}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Main Image */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-slate-600/30 shadow-2xl"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Modern workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: -5 }}
              transition={{ delay: 0.8 }}
              whileHover={{ y: -5, rotate: 0 }}
              className="absolute -bottom-6 -left-6 bg-slate-800/90 backdrop-blur-lg border border-slate-600/50 rounded-xl p-4 shadow-xl"
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
                  <div className="text-white text-sm">Live Updates</div>
                  <div className="text-slate-400 text-xs">Real-time sync</div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.1 }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-2 rounded-full text-sm backdrop-blur-sm border border-slate-600/30"
            >
              ✨ AI Powered
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent, rgba(59, 130, 246, 0.1), transparent)",
          backgroundSize: "200% 200%",
          animation: "gradient 4s ease infinite",
        }}
      />

      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </motion.div>
  );
}
