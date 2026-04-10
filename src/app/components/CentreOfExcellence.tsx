import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Zap, Beaker, TrendingUp, Globe } from "lucide-react";

export function CentreOfExcellence() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const features = [
    {
      icon: Zap,
      title: "Automation & Efficiency",
      description:
        "State-of-the-art automated systems ensure consistency and speed across all operations.",
    },
    {
      icon: Beaker,
      title: "Research & Development",
      description:
        "Dedicated R&D labs where culinary innovation meets food science and technology.",
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description:
        "Infrastructure designed to support rapid expansion while maintaining quality standards.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description:
        "International food safety protocols and quality assurance at every step.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-br from-slate-50 to-white overflow-hidden" style={{ position: 'relative' }}>
      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-40, 40]) }}
      />

      {/* Large Background Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-bold text-orange-500/5 whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
      >
        70,000 SQ FT
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Innovation Hub
          </motion.div>

          <h2 className="text-6xl md:text-8xl mb-6 text-slate-900 tracking-tight">
            Centre of{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-4">
            A 70,000 sq ft innovation hub where tradition meets technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="aspect-[4/3]"
                initial={{ scale: 1.2 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1761095596765-c8abe01d3aea?q=80&w=1080"
                  alt="Centre of Excellence"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute -top-8 -right-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-10 py-8 rounded-2xl shadow-2xl z-10"
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ type: "spring", duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <p className="text-5xl font-bold">70K</p>
              <p className="text-sm tracking-widest uppercase opacity-90">Square Feet</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Our Centre of Excellence represents the future of food
                production and innovation. This cutting-edge facility combines
                automated systems, advanced R&D capabilities, and scalable
                infrastructure to support our growing operations.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                From recipe development to quality control, every aspect of our
                culinary process is refined here. Our dedicated teams work
                tirelessly to ensure that every dish meets the exacting
                standards that have defined Empire for over 50 years.
              </motion.p>

              <motion.div
                className="relative pl-6 py-6 border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent rounded-r-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <p className="text-orange-600 italic text-xl font-medium">
                  Innovation doesn't mean abandoning tradition—it means honoring
                  it with excellence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1, type: "spring" }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              <motion.div
                className="relative bg-white rounded-3xl p-8 h-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                />

                <div className="relative z-10">
                  <motion.div
                    className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-100 to-amber-100 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-orange-500" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Bottom Line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"
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

// ── Dark-navy NKP Centre of Excellence (5 cards) ──────────────────────────────

const nkpFeatures = [
  {
    emoji: "⚙️",
    title: "Powering Automation",
    description:
      "We use advanced technologies and intelligent systems to optimize efficiency, reduce costs, and maintain quality.",
  },
  {
    emoji: "🏅",
    title: "Ensuring Unmatched Quality",
    description:
      "We ensure adherence to high standards throughout the entire process.",
  },
  {
    emoji: "🔬",
    title: "Driving Research and Development",
    description:
      "Our teams collaborate with experts to pioneer new flavours, textures, and experiences.",
  },
  {
    emoji: "🤝",
    title: "Enabling Backward Integration",
    description:
      "We partner with farmers, suppliers, and producers to control sourcing and production processes.",
  },
  {
    emoji: "📈",
    title: "Scalability",
    description:
      "We combine technology, efficient systems, and robust standards to minimise intermediaries, reduce costs, and scale our operations.",
  },
];

export function NKPCentreFeatures() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e2d4a 0%, #0f1e35 100%)", position: "relative" }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-widest mb-4"
            style={{ color: "#c9941d" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            THE NKP CENTRE OF EXCELLENCE
          </motion.h2>
          <motion.p
            className="text-white/80 text-lg mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            70,000 sq feet dedicated to fueling innovation
          </motion.p>
          <motion.p
            className="text-white/50 text-sm max-w-3xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Our state-of-the-art facility is a hub of creativity and ingenuity, where culinary
            boundaries are pushed and new possibilities are explored.
          </motion.p>
        </motion.div>

        {/* 5-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {nkpFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 90 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/95 rounded-3xl p-7 h-full flex flex-col gap-4 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                  style={{ background: "linear-gradient(135deg, #f59e0b22, #f59e0b11)" }}
                  whileHover={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <span
                    style={{ filter: "sepia(1) saturate(5) hue-rotate(10deg) brightness(0.75)" }}
                  >
                    {feature.emoji}
                  </span>
                </motion.div>

                {/* Title */}
                <h3
                  className="font-bold text-base leading-snug"
                  style={{ color: "#1e2d4a" }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed flex-1">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <motion.div
                  className="h-0.5 rounded-full"
                  style={{ background: "linear-gradient(to right, #f59e0b, #fb923c)", transformOrigin: "left" }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
