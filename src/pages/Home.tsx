import { profile } from "@/data/profile";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Rocket } from "lucide-react";
export default function Home() {
  return (
    <div className="py-12 md:py-24">
      {" "}
      <Helmet>
        {" "}
        <title>{profile.name} — Portfolio</title>{" "}
      </Helmet>{" "}
      <section className="grid gap-12 md:grid-cols-2 items-center">
        {" "}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {" "}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20">
            {" "}
            <Rocket size={14} /> Disponible pour de nouveaux projets{" "}
          </div>{" "}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Design <span className="text-gradient">Innovant</span>
          </h1>{" "}
          <p className="mt-6 text-xl text-muted-foreground max-w-lg">
            Je suis {profile.name}, {profile.role}.
          </p>{" "}
          <div className="mt-10 flex gap-4">
            {" "}
            <Link
              to="/projects"
              className="px-8 py-4 rounded-2xl bg-primary text-white font-bold hover:shadow-lg transition-all"
            >
              Voir mes projets
            </Link>{" "}
          </div>{" "}
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative glass rounded-3xl p-8 flex flex-col items-center justify-center text-center"
        >
          {" "}
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-xl">
            {" "}
            <Cpu size={64} className="text-white animate-pulse" />{" "}
          </div>{" "}
          <h3 className="text-2xl font-bold">Expertise IA & SIG</h3>{" "}
        </motion.div>{" "}
      </section>{" "}
    </div>
  );
}
