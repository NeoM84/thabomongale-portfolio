import { motion } from 'motion/react';

const topics = [
  {
    title: 'Adaptive Leadership',
    description: 'Leading through uncertainty and driving change in a volatile world.',
  },
  {
    title: 'The Growth Mindset',
    description: 'Unlocking personal and professional potential through cognitive shifts.',
  },
  {
    title: 'Strategic Execution',
    description: 'Moving from vision to reality with precision and accountability.',
  },
  {
    title: 'Future-Proofing Business',
    description: 'Building resilient organizations that thrive in the digital age.',
  },
];

export default function SpeakingTopics() {
  return (
    <section id="topics" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block"
            >
              Speaking Topics
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-zinc-900 mb-6"
            >
              Insights that Drive Impact
            </motion.h2>
            <p className="text-zinc-600 text-lg">
              Thabo covers a wide range of topics designed to challenge status quo thinking and provide practical frameworks for success.
            </p>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 border border-zinc-100 rounded-2xl hover:border-primary/20 'hover:bg-primary/[0.02] transition-all"
              >
                <span className="text-primary/40 font-mono text-sm mb-4 block">0{index + 1}</span>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{topic.title}</h3>
                <p className="text-zinc-500">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
