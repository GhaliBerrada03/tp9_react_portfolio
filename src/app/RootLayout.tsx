import { Outlet, NavLink } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Home,
} from "lucide-react";
export default function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-x-hidden">
      {" "}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 glass">
        {" "}
        <nav className="mx-auto max-w-6xl flex items-center justify-between p-4 px-6">
          {" "}
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            {" "}
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
              {" "}
              <Home size={18} />{" "}
            </div>{" "}
            <span className="hidden sm:inline">Ghali</span>{" "}
          </NavLink>{" "}
          <div className="flex items-center gap-1 sm:gap-6 text-sm font-medium">
            {" "}
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                "px-3 py-2 rounded-lg transition-all " +
                (isActive
                  ? "bg-white/10 text-primary"
                  : "hover:bg-white/5 text-muted-foreground hover:text-foreground")
              }
            >
              {" "}
              <span className="flex items-center gap-2">
                <Briefcase size={16} />{" "}
                <span className="hidden md:inline">Projets</span>
              </span>{" "}
            </NavLink>{" "}
            <NavLink
              to="/education"
              className={({ isActive }) =>
                "px-3 py-2 rounded-lg transition-all " +
                (isActive
                  ? "bg-white/10 text-primary"
                  : "hover:bg-white/5 text-muted-foreground hover:text-foreground")
              }
            >
              {" "}
              <span className="flex items-center gap-2">
                <GraduationCap size={16} />{" "}
                <span className="hidden md:inline">Formations</span>
              </span>{" "}
            </NavLink>{" "}
            <NavLink
              to="/certifications"
              className={({ isActive }) =>
                "px-3 py-2 rounded-lg transition-all " +
                (isActive
                  ? "bg-white/10 text-primary"
                  : "hover:bg-white/5 text-muted-foreground hover:text-foreground")
              }
            >
              {" "}
              <span className="flex items-center gap-2">
                <Award size={16} />{" "}
                <span className="hidden md:inline">Certifs</span>
              </span>{" "}
            </NavLink>{" "}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                "px-3 py-2 rounded-lg transition-all " +
                (isActive
                  ? "bg-white/10 text-primary"
                  : "hover:bg-white/5 text-muted-foreground hover:text-foreground")
              }
            >
              {" "}
              <span className="flex items-center gap-2">
                <Mail size={16} />{" "}
                <span className="hidden md:inline">Contact</span>
              </span>{" "}
            </NavLink>{" "}
            <div className="h-4 w-[1px] bg-white/10 mx-2 hidden sm:block" />{" "}
            <ThemeToggle />{" "}
          </div>{" "}
        </nav>{" "}
      </header>{" "}
      <main className="mx-auto max-w-6xl p-6 min-h-[calc(100vh-140px)]">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {" "}
          <Outlet />{" "}
        </motion.div>{" "}
      </main>{" "}
      <footer className="border-t border-white/10 py-12 mt-12 bg-white/5 backdrop-blur-sm">
        {" "}
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-2">
          {" "}
          <div>
            {" "}
            <h3 className="text-lg font-semibold mb-4">Ghali Portfolio</h3>{" "}
            <p className="text-muted-foreground text-sm max-w-sm">
              Passionné par l IA, le SIG et le développement Web.
            </p>{" "}
          </div>{" "}
          <div className="flex flex-col items-end gap-4 text-muted-foreground text-xs">
            © 2026 • Marrakech
          </div>{" "}
        </div>{" "}
      </footer>{" "}
    </div>
  );
}