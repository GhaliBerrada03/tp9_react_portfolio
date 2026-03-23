import { projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Projects() {
  return (
    <section className="grid gap-6">
      <Helmet>
        <title>Projets — {profile.name}</title>
        <meta
          name="description"
          content="Découvrez mes projets en IA, SIG et développement logiciel."
        />
      </Helmet>

      <h2 className="text-2xl font-semibold">Projets</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="border rounded-2xl p-4 hover:shadow"
          >
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.summary}</p>

            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="mt-4 flex gap-3 text-sm">
              {p.link && (
                <a
                  className="underline"
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              )}
              {p.repo && (
                <a
                  className="underline"
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
