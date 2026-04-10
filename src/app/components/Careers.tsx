import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Users, TrendingUp, Award, Heart } from "lucide-react";

export function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  const values = [
    {
      icon: Users,
      title: "3000+ Strong",
      description: "A diverse workforce united by passion for excellence",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Clear career paths and continuous learning programs",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Your contributions are valued and celebrated",
    },
    {
      icon: Heart,
      title: "Culture",
      description: "A family that supports, motivates, and inspires",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-br from-white to-amber-50 overflow-hidden" style={{ position: 'relative' }}>
      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />

      {/* Large Background Text */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-bold text-orange-500/5 whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5 }}
      >
        JOIN US
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
            Join Our Team
          </motion.div>

          <h2 className="text-6xl md:text-8xl mb-8 text-slate-900 tracking-tight leading-[1.1]">
            Building Careers,
            <br />
            Not Just{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Jobs
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join a team where your passion meets purpose, and where every day is
            an opportunity to grow, learn, and make an impact.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group overflow-hidden rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1750810977759-b47cab43daf1?q=80&w=1080"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

              <motion.div
                className="absolute bottom-8 left-8"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mb-3 rounded-full" />
                <p className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent text-xl mb-2 uppercase tracking-wider font-semibold">
                  Teamwork
                </p>
                <p className="text-white text-3xl font-bold">Together We Thrive</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
            className="relative group overflow-hidden rounded-3xl shadow-2xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <motion.img
                src="https://images.unsplash.com/photo-1729992491010-d6b26a1f83d6?q=80&w=1080"
                alt="Professional Growth"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />

              <motion.div
                className="absolute bottom-8 left-8"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mb-3 rounded-full" />
                <p className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent text-xl mb-2 uppercase tracking-wider font-semibold">
                  Excellence
                </p>
                <p className="text-white text-3xl font-bold">Mastering Our Craft</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, type: "spring" }}
              whileHover={{ y: -10, scale: 1.05 }}
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
                    <value.icon className="w-8 h-8 text-orange-500" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>

                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>

                {/* Bottom accent */}
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

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="relative inline-block max-w-5xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -left-8 -top-8 text-9xl text-orange-500/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              "
            </motion.div>

            <blockquote className="text-2xl md:text-3xl text-slate-700 italic px-12 py-8 border-l-4 border-orange-500 bg-gradient-to-r from-orange-50 to-transparent rounded-r-xl relative">
              We don't just hire employees—we build families. Every person who
              joins Empire becomes part of a legacy that spans generations.
            </blockquote>

            <motion.div
              className="absolute -right-8 -bottom-8 text-9xl text-orange-500/20"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              "
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
