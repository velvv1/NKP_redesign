import { motion, useInView, useMotionValue, useSpring, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export function LegacyStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    { value: 3000, suffix: "+", label: "Dedicated Employees" },
    { value: 50, suffix: "+", label: "Outlets Across India & Middle East" },
    { value: 100000, suffix: "+", label: "Daily Customers Served" },
    { value: 15, suffix: "+", label: "Cloud Kitchen Operations" },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-br from-slate-50 to-white overflow-hidden" style={{ position: 'relative' }}>
      {/* Decorative Background */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"
        style={{ y }}
      />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Our Journey
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-slate-900">Our </span>
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Legacy
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From a single eatery to a multi-brand empire, our journey has been
            defined by consistent growth, unwavering quality, and an expanding
            presence across borders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group h-full"
            >
              <motion.div
                className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"
                />

                <div className="relative z-10 flex flex-col flex-1">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent leading-tight break-all"
                    initial={{ scale: 0.5 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 200, delay: index * 0.1 + 0.3 }}
                  >
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </motion.div>

                  <p className="text-slate-600 text-sm font-medium leading-relaxed mt-auto">
                    {stat.label}
                  </p>
                </div>

                {/* Bottom Accent */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
