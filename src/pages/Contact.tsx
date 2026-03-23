import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section>
      <Helmet>
        <title>Contact — {profile.name}</title>
        <meta
          name="description"
          content="N'hésitez pas à me contacter via mes réseaux sociaux ou par email."
        />
      </Helmet>

      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="text-muted-foreground mt-2">
        Page de contact en cours de construction.
      </p>
    </section>
  );
}
