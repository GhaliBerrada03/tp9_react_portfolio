import { certifications } from "@/data/certifications";
import { profile } from "@/data/profile";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Helmet } from "react-helmet-async";
import { Search, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificationsPage() {
  const [q, setQ] = useState("");
  const list = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? [])]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase()),
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q],
  );

  return (
    <section className="py-12">
      <Helmet>
        <title>Certifications — {profile.name}</title>
        <meta
          name="description"
          content="Certifications AWS, Kubernetes et plus."
        />
      </Helmet>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <Award className="text-primary" /> Certifications
          </h2>
          <p className="text-muted-foreground text-lg">
            Reconnaissances professionnelles et expertises validées.
          </p>
        </div>

        <div className="relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors"
            size={18}
          />
          <input
            placeholder="Rechercher (ex: AWS, Kubernetes)"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3 w-full md:w-80 outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
            aria-label="Filtrer les certifications"
          />
        </div>
      </div>

      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((c) => (
          <CertificationCard key={c.title + c.issueDate} c={c} />
        ))}
        {list.length === 0 && (
          <div className="col-span-full py-20 text-center opacity-50">
            Aucun résultat trouvé pour "{q}".
          </div>
        )}
      </motion.div>
    </section>
  );
}
