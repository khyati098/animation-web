import { Navigation } from './components/Navigation';
import { ModernBanner } from './components/ModernBanner';
import { CardsSection } from './components/CardsSection';
import { ContentSection } from './components/ContentSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 dark">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section - Fullscreen */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 50% 0%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)`
          }} />
        </div>
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        {/* Hero Banner */}
        <div className="relative z-10 w-full px-4 lg:px-8">
          <ModernBanner />
        </div>
      </section>
      {/* Features Section */}
      <section id="features">
        <CardsSection />
      </section>
      {/* About/Content Section */}
      <section id="about">
        <ContentSection />
      </section>
      {/* Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      {/* Footer */}
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
} 