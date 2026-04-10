import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function BrandPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const words = ["Food.", "Innovation.", "Always."];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-br from-slate-50 to-white overflow-hidden" style={{ position: 'relative' }}>
      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"
        style={{ y: y2 }}
      />

      {/* Large Background Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-orange-500/5 whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        PHILOSOPHY
      </motion.div>

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              What Drives Us
            </motion.div>

            <h2 className="text-5xl md:text-7xl mb-16 text-slate-900 tracking-tight">
              Our Philosophy
            </h2>
          </motion.div>

          {/* Word-by-word reveal */}
          <div className="text-6xl md:text-8xl lg:text-9xl mb-20 flex flex-wrap justify-center gap-6 md:gap-8 leading-[0.9]">
            {words.map((word, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className={`cursor-default ${
                  index === words.length - 1
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent"
                    : "text-slate-900"
                }`}
              >
                {word}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-10 text-slate-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              At NKP Empire, we believe that food is more than sustenance—it's
              an experience that brings people together, creates memories, and
              celebrates culture.
            </motion.p>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {["Quality", "Consistency", "Innovation"].map((value, index) => (
                <motion.div
                  key={value}
                  className="relative p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  />

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                      {value}
                    </h3>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {value === "Quality" && "From sourcing to serving, excellence in every detail"}
                      {value === "Consistency" && "The same exceptional experience, every time"}
                      {value === "Innovation" && "Cutting-edge techniques honoring tradition"}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="pt-6"
            >
              Every brand under the NKP Empire umbrella is designed to deliver
              exceptional customer experiences—whether it's the rich flavors of
              Empire, the refreshing beverages of Empire Juice, the quick
              satisfaction of EasyBites, the authentic tastes of Karama, or the
              wholesome offerings of Vegetarea.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
