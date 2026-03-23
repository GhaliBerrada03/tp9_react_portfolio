import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
export default function Projects() {
  return (
    <section className="py-12">
      {" "}
      <Helmet>
        {" "}
        <title>Projets — {profile.name}</title>{" "}
      </Helmet>{" "}
      <div className="mb-12">
        {" "}
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
          {" "}
        </h2>{" "}
        <p className="text-muted-foreground text-lg">
          Sélection d applications et recherches innovantes.
        </p>{" "}
      </div>{" "}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-3xl glass-card p-6"
          >
            {" "}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
              {" "}
            </div>{" "}
            <div className="relative z-10 h-full flex flex-col">
              {" "}
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>{" "}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {p.summary}
              </p>{" "}
              <div className="mt-auto flex gap-4">
                {" "}
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-2 text-xs font-semibold"
                  >
                  </a>
                )}{" "}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary transition-colors flex items-center gap-2 text-xs font-semibold"
                  >
                  </a>
                )}{" "}
              </div>{" "}
            </div>{" "}
          </motion.article>
        ))}{" "}
      </div>{" "}
    </section>
  );
}
