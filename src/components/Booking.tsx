import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Booking() {
  return (
    <section id="book" className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-primary p-12 lg:p-16 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">Book Thabo</h2>
              <p className="text-white/70 text-lg mb-12">
                Ready to elevate your next event or transform your business? Let's start a conversation about how Thabo can help you achieve your goals.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm uppercase tracking-wider">Email Us</p>
                    <p className="font-medium">thabomongale@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm uppercase tracking-wider">Call Us</p>
                    <p className="font-medium">+27 (0) 684627522  </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm uppercase tracking-wider">Location</p>
                    <p className="font-medium">Kimberley, South Africa</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-sm text-white/40 italic">
                "The best way to predict the future is to create it."
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12 lg:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Company</label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-700">Event Type</label>
                  <select className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                    <option>Keynote Speech</option>
                    <option>Business Coaching</option>
                    <option>Workshop / Training</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-700">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your event or coaching needs..."
                  className="w-full px-6 py-4 bg-zinc-50 border border-zinc-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all"
              >
                Send Booking Request <Send size={20} />
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
