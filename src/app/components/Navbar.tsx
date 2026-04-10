import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"]
  );

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "backdrop-blur-md shadow-lg border-b border-slate-200/50"
          : ""
      }`}
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="relative group cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img 
            src="https://nkpempire.com/wp-content/uploads/2023/12/NKP-Ventures-logo.png" 
            alt="NKP Empire Ventures PVT LTD" 
            className="h-[56px] w-auto object-contain drop-shadow-md" 
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/250x100/1e293b/f59e0b?text=NKP+Empire+Ventures';
            }}
          />
        </motion.a>

        {/* Desktop Menu */}
        <motion.div
          className="hidden md:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.a
            href="#brands"
            className="text-slate-600 hover:text-orange-500 transition-colors relative group text-sm font-medium"
            whileHover={{ y: -2 }}
          >
            <span>Brands</span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-orange-500"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="mailto:info@hotelempire.in"
            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden bg-white border-t border-slate-200"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-6 py-4 space-y-4">
          <motion.a
            href="#brands"
            className="block text-slate-600 hover:text-orange-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            whileTap={{ scale: 0.98 }}
          >
            Brands
          </motion.a>
          <motion.a
            href="mailto:info@hotelempire.in"
            className="block px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
            whileTap={{ scale: 0.98 }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
}
