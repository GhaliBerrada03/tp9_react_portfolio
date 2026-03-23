import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, BookOpen, Star } from "lucide-react";

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  return `${m}/${y}`;
}

export default function EducationPage() {
  return (
    <section className="py-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Formations — {profile.name}</title>
        <meta
          name="description"
          content="Mon cursus académique en Intelligence Artificielle et SIG."
        />
      </Helmet>

      <div className="mb-16 text-center">
        <div className="inline-block p-4 rounded-3xl bg-primary/10 text-primary mb-6">
          <GraduationCap size={48} />
        </div>
        <h2 className="text-4xl font-bold mb-4">Parcours Académique</h2>
        <p className="text-muted-foreground text-lg">
          Mon cheminement dans le monde de l'IA et de la Tech.
        </p>
      </div>

      <div className="relative border-s-2 border-dashed border-white/10 ms-4">
        {education.map((e, i) => (
          <motion.div
            key={e.school + e.start}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="ms-10 relative pb-16 last:pb-0"
          >
            <div className="absolute -start-[51px] top-0 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary" />
            </div>

            <div className="glass-card rounded-3xl p-8 hover:bg-white/[0.07]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {e.degree} <span className="text-primary">—</span> {e.field}
                  </h3>
                  <div className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                    <span className="flex items-center gap-1 uppercase tracking-wider">
                      <Star size={14} className="text-accent" /> {e.school}
                    </span>
                    {e.location && (
                      <span className="flex items-center gap-1 border-s border-white/10 ps-3">
                        <MapPin size={14} /> {e.location}
                      </span>
                    )}
                  </div>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold whitespace-nowrap flex items-center gap-2">
                  <Calendar size={14} className="text-primary" />
                  {fmt(e.start)} — {fmt(e.end)}
                </div>
              </div>

              {e.courses?.length ? (
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-3">
                    <BookOpen size={14} /> Cours Principaux
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {e.courses.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-foreground/80"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}

              {e.highlights?.length ? (
                <ul className="space-y-3 mt-4">
                  {e.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      </div>
                      {h}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
