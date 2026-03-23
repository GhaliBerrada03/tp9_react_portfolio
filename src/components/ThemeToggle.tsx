import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-muted-foreground hover:text-foreground relative overflow-hidden"
      onClick={() => setDark(!dark)}
      aria-label="Basculer le thème"
    >
      <motion.div
        initial={false}
        animate={{ y: dark ? 0 : 40 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Moon size={18} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ y: dark ? -40 : -18 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute"
      >
        <Sun size={18} />
      </motion.div>
    </motion.button>
  );
}
