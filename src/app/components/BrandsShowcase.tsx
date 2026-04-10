import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const brands = [
  {
    name: "Empire",
    tagline: "The Original Legacy",
    description:
      "Where it all began. Empire has been serving Bengaluru's finest non-vegetarian cuisine since 1966. From our legendary biryani to succulent kebabs, every dish tells a story of tradition and excellence.",
    image: "https://images.unsplash.com/photo-1701540747559-37508cc19a41?q=80&w=1080",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Empire Juice",
    tagline: "Fresh & Refreshing",
    description:
      "Pure, natural, and delicious beverages crafted to perfection. From fresh fruit juices to innovative smoothies, Empire Juice brings refreshment to every moment of your day.",
    image: "https://images.unsplash.com/photo-1557627320-a448c6ae746d?q=80&w=1080",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    name: "EasyBites",
    tagline: "Fast Food, Premium Quality",
    description:
      "Quick doesn't mean compromised. EasyBites delivers fast food with the same commitment to quality that defines Empire. Perfect for those who want premium taste on the go.",
    image: "https://images.unsplash.com/photo-1659275799237-cbc057d97e7f?q=80&w=1080",
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Karama",
    tagline: "Arabic & Punjabi Fusion",
    description:
      "A celebration of two rich culinary traditions. Karama brings together the aromatic spices of Punjabi cuisine and the exotic flavors of Arabic cooking in perfect harmony.",
    image: "https://images.unsplash.com/photo-1701540747691-ad74d630f52f?q=80&w=1080",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Vegetarea",
    tagline: "Pure Vegetarian Excellence",
    description:
      "Vegetarian cuisine elevated to an art form. Vegetarea proves that plant-based dining can be just as indulgent, flavorful, and satisfying as any culinary experience.",
    image: "https://images.unsplash.com/photo-1611280422374-fa3c1110c16e?q=80&w=1080",
    gradient: "from-green-500 to-emerald-500",
  },
];

function BrandCard({ brand, index }: { brand: typeof brands[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, type: "spring", stiffness: 80 }}
      className="flex-shrink-0 w-[90vw] md:w-[500px] lg:w-[600px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative h-[650px] overflow-hidden cursor-pointer bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={brand.image}
            alt={brand.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent" />

        {/* Content Overlay */}
        <motion.div
          className="absolute inset-0 p-10 flex flex-col justify-end"
        >
          {/* Badge */}
          <motion.div
            className={`mb-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${brand.gradient} rounded-full text-white text-xs font-semibold uppercase tracking-wider self-start`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
          >
            <Sparkles className="w-4 h-4" />
            Featured Brand
          </motion.div>

          <motion.h3
            className="text-5xl md:text-6xl mb-3 text-white tracking-tight"
            animate={{
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {brand.name}
          </motion.h3>

          <motion.p
            className={`text-2xl mb-6 bg-gradient-to-r ${brand.gradient} bg-clip-text text-transparent`}
            animate={{
              y: isHovered ? -10 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {brand.tagline}
          </motion.p>

          <motion.p
            className="text-white/90 text-base leading-relaxed mb-8 max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.4 }}
          >
            {brand.description}
          </motion.p>

          <motion.div
            className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${brand.gradient} text-white text-sm font-semibold uppercase tracking-wider self-start rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>

        {/* Bottom Gradient Accent */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${brand.gradient}`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.div>
    </motion.div>
  );
}

export function BrandsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      id="brands"
      ref={ref}
      className="relative py-32 bg-gradient-to-br from-white to-orange-50 overflow-hidden"
      style={{ position: 'relative' }}
    >
      {/* Decorative Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/20 to-transparent rounded-full blur-3xl"
        style={{ y }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-60, 60]) }}
      />

      <div className="px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Our Brands
          </motion.div>

          <h2 className="text-6xl md:text-8xl mb-8 text-slate-900 tracking-tight">
            Five Unique{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            Five distinct culinary experiences, one uncompromising commitment to
            excellence. Each brand crafted to serve a unique palate, united by
            the Empire legacy.
          </p>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-10 px-6 pb-10">
          {brands.map((brand, index) => (
            <BrandCard key={brand.name} brand={brand} index={index} />
          ))}
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12 px-6"
      >
        <motion.p
          className="text-slate-400 text-sm tracking-[0.3em] uppercase flex items-center justify-center gap-4"
          animate={{ x: [-5, 5, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Scroll To Explore
          <ArrowRight className="w-4 h-4" />
        </motion.p>
      </motion.div>
    </section>
  );
}
