import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-secondary">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-800px h-800px bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-600px h-600px bg-primary/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-primary font-semibold tracking-widest uppercase text-sm mb-6">
            Speaker • Coach • Strategist
          </span>
          <h1 className="text-5xl md:text-8xl font-bold text-zinc-900 tracking-tight leading-[1.1] mb-8">
            Transforming Minds.<br />
            <span className="text-primary">Elevating Businesses.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Thabo Mongale empowers leaders and organizations to unlock their full potential through high-impact keynote speaking and strategic business coaching.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#book"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
            >
              Book Thabo <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ backgroundColor: "rgba(46, 89, 69, 0.05)" }}
              className="px-10 py-4 rounded-full font-medium text-zinc-900 border border-zinc-200 transition-all"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-zinc-300 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
