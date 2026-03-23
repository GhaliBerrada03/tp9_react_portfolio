import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { certifications } from "@/data/certifications";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Home() {
  const eduLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    alumniOf: education.map(e => ({
      "@type": "CollegeOrUniversity",
      name: e.school
    }))
  };

  const certLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    hasCredential: (certifications ?? []).map(c => ({
      "@type": "EducationalOccupationalCredential",
      name: c.title,
      recognizedBy: { "@type": "Organization", name: c.issuer },
      validFrom: c.issueDate,
      validUntil: c.expiryDate,
      url: c.credentialUrl
    }))
  };

  return (
    <section className="grid gap-6 md:grid-cols-2 items-center">
      <Helmet>
        <title>{profile.name} — Portfolio</title>
        <meta
          name="description"
          content="Portfolio : IA, SIG, DevSecOps, Android."
        />
        <script type="application/ld+json">{JSON.stringify(eduLd)}</script>
        <script type="application/ld+json">{JSON.stringify(certLd)}</script>
      </Helmet>


      <div>
        <h1 className="text-4xl md:text-5xl font-bold">{profile.name}</h1>
        <p className="mt-2 text-xl">{profile.role}</p>

        <p className="mt-4 text-muted-foreground">{profile.about}</p>

        <div className="mt-6 flex gap-3">
          <Link to="/projects" className="underline">
            Voir les projets
          </Link>
          <Link to="/contact" className="underline">
            Contact
          </Link>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-2 text-sm"
          aria-label="badges de parcours"
        >
          Master IA (2025) AWS SAA
        </div>
      </div>

      <div
        className="aspect-square rounded-2xl border"
        role="img"
        aria-label="illustration de profil"
      />
    </section>
  );
}
