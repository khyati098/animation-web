"use client"
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "CTO at TechFlow",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      company: "TechFlow",
      rating: 5,
      text: "This platform completely transformed our development workflow. We shipped 40% faster and our team productivity skyrocketed. The AI-powered features are game-changing.",
      metrics: { value: "40%", label: "Faster deployment" }
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Lead Developer at InnovateCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      company: "InnovateCorp",
      rating: 5,
      text: "The best investment we made this year. The automation features saved us countless hours, and the analytics gave us insights we never had before. Simply outstanding.",
      metrics: { value: "200+", label: "Hours saved monthly" }
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Product Manager at StartupLab",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      company: "StartupLab",
      rating: 5,
      text: "Our team collaboration improved dramatically. The real-time features and intuitive interface made remote work seamless. Couldn't imagine working without it now.",
      metrics: { value: "95%", label: "Team satisfaction" }
    },
    {
      id: 4,
      name: "David Kim",
      title: "Engineering Director at CloudSystems",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      company: "CloudSystems",
      rating: 5,
      text: "Security was our biggest concern, but this platform exceeded all expectations. Enterprise-grade security with zero compromises on usability. Perfect for our needs.",
      metrics: { value: "Zero", label: "Security incidents" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border-purple-500/30">
            Testimonials
          </Badge>
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Loved by developers
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              worldwide
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Join thousands of teams who have transformed their workflow with our platform.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          {/* Main Testimonial */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative max-w-4xl mx-auto"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-lg">
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                      {/* Quote */}
                      <div className="flex-1">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="mb-6"
                        >
                          <Quote className="w-8 h-8 text-purple-400 mb-4" />
                          <p className="text-xl text-slate-200 leading-relaxed">
                            "{testimonials[currentIndex].text}"
                          </p>
                        </motion.div>

                        {/* Rating */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="flex items-center gap-1 mb-6"
                        >
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + i * 0.1 }}
                            >
                              <Star className="w-5 h-5 text-yellow-400 fill-current" />
                            </motion.div>
                          ))}
                        </motion.div>

                        {/* Author */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex items-center gap-4"
                        >
                          <div className="relative">
                            <ImageWithFallback
                              src={testimonials[currentIndex].avatar}
                              alt={testimonials[currentIndex].name}
                              className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/50"
                            />
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800" />
                          </div>
                          <div>
                            <div className="text-white">{testimonials[currentIndex].name}</div>
                            <div className="text-slate-400 text-sm">
                              {testimonials[currentIndex].title}
                            </div>
                            <div className="text-purple-400 text-sm">
                              {testimonials[currentIndex].company}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Metric Card */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6 text-center"
                      >
                        <div className="text-3xl text-white mb-2">
                          {testimonials[currentIndex].metrics.value}
                        </div>
                        <div className="text-purple-300 text-sm">
                          {testimonials[currentIndex].metrics.label}
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="flex justify-center items-center gap-4 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-full border border-slate-600/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600' 
                      : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-full border border-slate-600/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "99.9%", label: "Uptime" },
            { value: "50M+", label: "API Calls/Month" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl lg:text-3xl text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}