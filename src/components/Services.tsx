import { motion } from 'motion/react';
import { Mic, TrendingUp, Users } from 'lucide-react';

const services = [
  {
    title: 'Keynote Speaking',
    description: 'High-energy, transformative presentations that inspire action and shift organizational culture.',
    icon: Mic,
    color: 'bg-emerald-50',
    iconColor: 'text-primary',
  },
  {
    title: 'Business Coaching',
    description: 'One-on-one strategic partnership designed to accelerate leadership growth and business performance.',
    icon: TrendingUp,
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Workshops & Training',
    description: 'Immersive, hands-on sessions focused on developing specific skills in strategy, mindset, and leadership.',
    icon: Users,
    color: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-zinc-900"
          >
            Tailored Solutions for Growth
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <service.icon className={service.iconColor} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{service.title}</h3>
              <p className="text-zinc-600 leading-relaxed mb-8">
                {service.description}
              </p>
              <a
                href="#book"
                className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all"
              >
                Learn More <TrendingUp size={18} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
