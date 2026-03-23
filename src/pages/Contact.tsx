import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-12 max-w-4xl mx-auto">
      <Helmet>
        <title>Contact — {profile.name}</title>
        <meta
          name="description"
          content="N'hésitez pas à me contacter via mes réseaux sociaux ou par email."
        />
      </Helmet>

      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <Mail className="text-primary" /> Parlons de votre projet
        </h2>
        <p className="text-muted-foreground text-lg">
          Contactez-moi pour toute collaboration ou opportunité.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card rounded-3xl p-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">
                  Email
                </div>
                <div className="font-semibold">{profile.email}</div>
              </div>
            </div>
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold">{s.label}</span>
                </div>
                <Send
                  size={18}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center gap-6"
        >
          <div className="p-4 rounded-full bg-secondary/10 text-secondary">
            <MessageSquare size={48} />
          </div>
          <h3 className="text-xl font-bold">Disponibilité</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Je réponds généralement sous 24h. <br />
            Basé à Marrakech, Maroc 🇲🇦
          </p>
          <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95">
            Envoyer un message direct
          </button>
        </motion.div>
      </div>
    </section>
  );
}
