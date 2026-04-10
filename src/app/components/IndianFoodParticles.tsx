import { motion } from "motion/react";

const FOOD_EMOJIS = ["🍛", "🥘", "🌶️", "🌿", "🍋", "🧄"];

export function IndianFoodParticles({ count = 12 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(count)].map((_, i) => {
        const emoji = FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)];
        
        // Calculate safe x zones (left 30% or right 30% of the screen avoiding the center)
        const isLeft = Math.random() > 0.5;
        const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
        const initialX = isLeft ? Math.random() * (width * 0.3) : width * 0.7 + Math.random() * (width * 0.3);
        const animateX = isLeft ? Math.random() * (width * 0.3) - 50 : width * 0.7 + Math.random() * (width * 0.3) + 50;

        return (
          <motion.div
            key={i}
            className="absolute text-3xl opacity-20 drop-shadow-md"
            style={{
              filter: "sepia(1) saturate(5) hue-rotate(5deg) brightness(0.8)",
            }}
            initial={{
              x: initialX,
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) + 200,
              rotate: Math.random() * 360,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -100 - 100],
              x: [null, animateX],
              rotate: [null, Math.random() * 360 + 360],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * -20,
            }}
          >
            {emoji}
          </motion.div>
        );
      })}
    </div>
  );
}
