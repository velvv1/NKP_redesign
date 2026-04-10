import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 border-t-4 border-orange-500 py-20 px-6 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3
              className="text-4xl mb-6 tracking-tight cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent inline-block"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                NKP
              </motion.span>{" "}
              <motion.span
                className="text-white inline-block"
                whileHover={{ rotateX: 180 }}
                transition={{ duration: 0.6 }}
              >
                Empire
              </motion.span>
            </motion.h3>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mb-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              style={{ transformOrigin: "left" }}
            />

            <p className="text-white/70 mb-6 text-lg leading-relaxed">
              Food. Innovation. Always.
            </p>

            <motion.div
              className="inline-block px-4 py-2 border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/10 to-amber-500/10 text-orange-400 text-sm uppercase tracking-widest hover:border-orange-500 transition-all duration-300 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              Since 1966
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white text-2xl mb-8 font-semibold">Contact Us</h4>
            <div className="space-y-5">
              <motion.a
                href="mailto:info@hotelempire.in"
                className="flex items-center gap-4 text-white/70 hover:text-orange-400 transition-colors group"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl border-2 border-white/10 bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mail className="w-5 h-5 group-hover:text-white" />
                </motion.div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-base">info@hotelempire.in</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+918040414041"
                className="flex items-center gap-4 text-white/70 hover:text-orange-400 transition-colors group"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl border-2 border-white/10 bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-500 transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Phone className="w-5 h-5 group-hover:text-white" />
                </motion.div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-base">+91-80404-14041</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 text-white/70 group"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl border-2 border-white/10 bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center transition-all"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-5 h-5" />
                </motion.div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Location</p>
                  <p className="text-base">Bengaluru, India</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Careers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white text-2xl mb-8 font-semibold">Join Our Team</h4>
            <p className="text-white/70 mb-8 text-base leading-relaxed">
              Be part of our growing family of 3000+ professionals shaping the
              future of hospitality
            </p>

            <motion.a
              href="mailto:info@hotelempire.in?subject=Career Opportunity"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden group text-sm font-semibold uppercase tracking-wider"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Explore Careers</span>
              <ArrowRight className="w-5 h-5 relative z-10" />
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} NKP Empire Ventures Pvt. Ltd. All rights reserved.
          </p>

          <motion.div
            className="flex items-center gap-2 text-orange-400/70 text-sm"
            whileHover={{ gap: 12 }}
          >
            <span>Crafted with</span>
            <motion.span
              className="text-orange-500"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ♥
            </motion.span>
            <span>in Bengaluru</span>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
