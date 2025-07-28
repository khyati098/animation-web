"use client";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export function ModernCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="relative w-96 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 pointer-events-none" />

      {/* Header Image */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Abstract digital art"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4"
        >
          <Badge className="bg-green-500/90 text-white border-0 backdrop-blur-sm">
            Active
          </Badge>
        </motion.div>
      </div>

      {/* Profile Section */}
      <div className="relative p-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center space-x-4 mb-4"
        >
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/50"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900" />
          </div>
          <div>
            <h3 className="text-white">Alex Chen</h3>
            <p className="text-slate-400 text-sm">Digital Artist</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <h2 className="text-xl text-white mb-2">Cosmic Abstractions</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Exploring the intersection of technology and art through generative
            algorithms and digital creativity.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center mb-6 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30"
        >
          <div className="text-center">
            <div className="text-lg text-white">2.4k</div>
            <div className="text-xs text-slate-400">Views</div>
          </div>
          <div className="text-center">
            <div className="text-lg text-white">156</div>
            <div className="text-xs text-slate-400">Likes</div>
          </div>
          <div className="text-center">
            <div className="text-lg text-white">23</div>
            <div className="text-xs text-slate-400">Comments</div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex justify-between items-center"
        >
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-slate-700/50 hover:bg-red-500/20 text-slate-300 hover:text-red-400 rounded-lg transition-colors duration-200"
            >
              <Heart className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-slate-700/50 hover:bg-blue-500/20 text-slate-300 hover:text-blue-400 rounded-lg transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-slate-700/50 hover:bg-green-500/20 text-slate-300 hover:text-green-400 rounded-lg transition-colors duration-200"
            >
              <Share className="w-4 h-4" />
            </motion.button>
          </div>

          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-6">
            Follow
          </Button>
        </motion.div>
      </div>

      {/* Animated border */}
      <div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent, rgba(59, 130, 246, 0.1), transparent)",
          backgroundSize: "200% 200%",
          animation: "gradient 3s ease infinite",
        }}
      />

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  );
}
