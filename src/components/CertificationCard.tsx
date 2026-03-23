import type { Certification } from "@/data/certifications";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
export default function CertificationCard({ c }: { c: Certification }) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      className="border rounded-3xl p-6 glass-card group"
    >
      {" "}
      <div className="p-3 rounded-2xl bg-primary/10 text-primary mb-6 w-fit">
        <Award size={24} />
      </div>{" "}
      <h3 className="font-bold text-lg mb-2">{c.title}</h3>{" "}
      <p className="text-sm text-muted-foreground mb-4">
        {c.issuer} • {c.issueDate}
      </p>{" "}
      {c.credentialUrl && (
        <a
          className="text-primary text-xs font-bold flex items-center gap-1"
          href={c.credentialUrl}
          target="_blank"
          rel="noreferrer"
        >
          Vérifier <ExternalLink size={12} />
        </a>
      )}{" "}
    </motion.article>
  );
}
