import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Tighter, non-overlapping opacity windows — no ghosting
  const opacity1 = useTransform(scrollYProgress, [0.05, 0.2, 0.35, 0.45], [0, 1, 1, 0]);
  const y1       = useTransform(scrollYProgress, [0.05, 0.45], [40, -40]);

  const opacity2 = useTransform(scrollYProgress, [0.42, 0.54, 0.64, 0.74], [0, 1, 1, 0]);
  const y2       = useTransform(scrollYProgress, [0.42, 0.74], [40, -40]);

  const opacity3 = useTransform(scrollYProgress, [0.70, 0.82, 1.0, 1.0], [0, 1, 1, 1]);
  const y3       = useTransform(scrollYProgress, [0.70, 1.0], [40, -10]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const slides = [
    {
      opacity: opacity1,
      y: y1,
      title: "Every Detail",
      highlight: "Matters",
      body: "From ingredient sourcing to final presentation, we obsess over every element of the dining experience.",
    },
    {
      opacity: opacity2,
      y: y2,
      title: "Crafted with",
      highlight: "Precision",
      body: "Our chefs combine traditional techniques with modern culinary science to create unforgettable flavors.",
    },
    {
      opacity: opacity3,
      y: y3,
      title: "Served with",
      highlight: "Pride",
      body: "Every meal is an opportunity to create a memory, to bring joy, and to celebrate the art of food.",
    },
  ];

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-slate-50 to-orange-50" style={{ position: "relative" }}>
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ position: "sticky" }}>

        {/* Background image with slow zoom */}
        <motion.div className="absolute inset-0" style={{ scale }}>
          <img
            src="https://images.unsplash.com/photo-1775513153018-0c7ac7899751?q=80&w=1080"
            alt="Culinary Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-orange-900/60" />
        </motion.div>

        {/* Orange grid overlay */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(249, 115, 22, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249, 115, 22, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }} />
        </div>

        {/* Slides */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              style={{ opacity: slide.opacity, y: slide.y }}
              className="absolute inset-0 flex items-center justify-center px-6"
            >
              <div>
                {/* Accent bar */}
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mb-8 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />

                <h3 className="text-6xl md:text-8xl text-white mb-8 tracking-tight leading-[1.1]">
                  {slide.title}
                  <br />
                  <motion.span
                    className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent"
                    animate={{ opacity: [1, 0.85, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {slide.highlight}
                  </motion.span>
                </h3>

                <p className="text-xl md:text-2xl text-white/85 max-w-2xl mx-auto leading-relaxed">
                  {slide.body}
                </p>

                {/* Dot indicators */}
                <div className="flex gap-2 justify-center mt-10">
                  {slides.map((_, di) => (
                    <div
                      key={di}
                      className={`h-2 rounded-full transition-all duration-300 ${di === i ? "bg-orange-400 w-6" : "bg-white/30 w-2"}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
