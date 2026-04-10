import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function FounderStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 px-6 bg-white overflow-hidden" style={{ position: 'relative' }}>
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent" />

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-orange-200/20 to-amber-200/20 rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              className="relative aspect-[3/4]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src="/founder.png"
                alt="Late Mr. Abdul Rahim Haji - Founder"
                className="w-full h-full object-contain"
                style={{ mixBlendMode: "multiply" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/400x500/1e293b/f59e0b?text=Please+add+founder.png+to+public+folder';
                }}
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-6 rounded-2xl shadow-2xl"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
              whileHover={{ rotate: 3, scale: 1.05 }}
            >
              <p className="text-5xl font-bold">1966</p>
              <p className="text-sm font-medium opacity-90">Established</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              Our Legacy
            </motion.div>

            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="text-slate-900">A Journey of</span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Passion & Vision
              </span>
            </motion.h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                In 1966, <strong className="text-slate-900">Late Mr. Abdul Rahim Haji</strong> embarked on
                a journey that would transform Bengaluru's culinary landscape.
                Returning from Malaysia with a vision and an unwavering
                commitment to quality, he opened the first Empire restaurant.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                What began as a small eatery driven by passion has evolved into
                a multi-brand hospitality empire, serving millions across India
                and the Middle East. His legacy lives on in every dish we
                prepare, every customer we serve, and every innovation we
                pursue.
              </motion.p>

              <motion.div
                className="relative pl-6 py-6 border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent rounded-r-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <p className="text-orange-600 italic text-xl font-medium">
                  "Food is not just sustenance—it's an experience, a memory, a
                  connection."
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
