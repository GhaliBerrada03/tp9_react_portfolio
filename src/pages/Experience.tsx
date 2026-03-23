import { profile } from "@/data/profile";
import { Helmet } from "react-helmet-async";

export default function Experience() {
  return (
    <section>
      <Helmet>
        <title>Parcours — {profile.name}</title>
        <meta
          name="description"
          content="Mon parcours professionnel et mes expériences."
        />
      </Helmet>

      <h2 className="text-2xl font-semibold">Parcours</h2>
      <p className="text-muted-foreground mt-2">Ajouter expériences ici.</p>
    </section>
  );
}
