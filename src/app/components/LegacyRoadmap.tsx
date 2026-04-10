import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Award, Globe, Droplets, MapPin } from "lucide-react";

const milestones = [
  {
    icon: Award,
    label: "Establishing a Centre of Excellence for growth and innovation",
  },
  {
    icon: Globe,
    label: "Overseas expansion",
  },
  {
    icon: Droplets,
    label: "Setting up our own Mineral Water Plant",
  },
  {
    icon: MapPin,
    label: "Outlets along Karnataka highways",
  },
];

export function LegacyRoadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 px-6 bg-white overflow-hidden"
      style={{ position: "relative" }}
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(15, 23, 42, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15, 23, 42, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top divider line that draws in */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent w-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "center" }}
      />

      <div className="max-w-7xl mx-auto relative">

        {/* Section label */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            What's Next
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {milestones.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, type: "spring", stiffness: 90 }}
              className="group relative flex flex-col items-center text-center px-6 py-8"
            >
              {/* Vertical divider between items */}
              {index > 0 && (
                <motion.div
                  className="absolute left-0 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.4 }}
                />
              )}

              {/* Icon container */}
              <motion.div
                className="relative mb-6"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Glow ring on hover */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-orange-400/20 blur-xl scale-150"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:from-orange-50 group-hover:to-amber-50 border border-slate-100 group-hover:border-orange-100 transition-all duration-400"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon
                    className="w-9 h-9 text-slate-400 group-hover:text-orange-500 transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Animated ring pulse */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-orange-400/0 group-hover:border-orange-400/30"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Label */}
              <motion.p
                className="text-slate-500 text-sm leading-relaxed max-w-[150px] group-hover:text-slate-700 transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
              >
                {item.label}
              </motion.p>

              {/* Underline accent on hover */}
              <motion.div
                className="mt-4 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
                initial={{ width: 0 }}
                whileHover={{ width: 40 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent w-full"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        style={{ transformOrigin: "center" }}
      />
    </section>
  );
}
