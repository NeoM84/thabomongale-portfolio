import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-4/5 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Thabo Profile Picture.jpg"
                alt="Thabo Mongale"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold mb-1">10+</p>
              <p className="text-sm uppercase tracking-wider opacity-80">Years of Impact</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">
              Meet Thabo Mongale
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight">
              A Visionary Leader for the Modern Business Landscape
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
              <p>
                Thabo Mongale is a recognized professional speaker and business coach dedicated to transforming the way organizations think and operate. With over 10 years of experience in leadership development and strategic growth, he helps businesses navigate complex challenges.
              </p>
              <p>
                His mission is simple: to bridge the gap between potential and performance. Thabo's unique approach combines psychological insights and legal insight with practical business strategies, ensuring that every session leaves a lasting impact on both the individual and the organization.
              </p>
              <p>
                Whether he's addressing a room of thousands or coaching a C-suite executive, Thabo brings an unparalleled level of energy, clarity, and actionable wisdom to the table.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-zinc-100 pt-12">
              <div>
                <h4 className="text-zinc-900 font-bold text-xl mb-2">Multi-Sector Experience</h4>
                <p className="text-zinc-500 text-sm">From MC To Board Level Training.</p>
              </div>
              <div>
                <h4 className="text-zinc-900 font-bold text-xl mb-2">Proven Results</h4>
                <p className="text-zinc-500 text-sm">98% client satisfaction rate across all programs.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
