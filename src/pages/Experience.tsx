import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Briefcase, Construction } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-12 max-w-4xl mx-auto flex flex-col items-center justify-center text-center min-h-[60vh]">
      <Helmet>
        <title>Parcours — {profile.name}</title>
        <meta
          name="description"
          content="Mon parcours professionnel et mes expériences."
        />
      </Helmet>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="p-8 rounded-full bg-primary/10 text-primary mb-8"
      >
        <Briefcase size={64} />
      </motion.div>

      <h2 className="text-4xl font-bold mb-4">Expériences Professionnelles</h2>
      <p className="text-muted-foreground text-lg max-w-md mb-12">
        Cette section est actuellement en cours de préparation pour refléter au
        mieux mon parcours.
      </p>

      <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 text-sm font-bold uppercase tracking-widest animate-pulse">
        <Construction size={16} /> En construction
      </div>
    </section>
  );
}
