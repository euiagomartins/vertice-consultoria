import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Solution } from "@/components/landing/Solution";
import { Services } from "@/components/landing/Services";
import { Differentials } from "@/components/landing/Differentials";
import { Testimonials } from "@/components/landing/Testimonials";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

const TITLE = "Vértice Consultoria — Consultoria comercial para clínicas odontológicas";
const DESC = "Treinamento comercial, vendas e performance para clínicas odontológicas. Aumentamos conversão, padronizamos atendimento e estruturamos o crescimento da sua clínica.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "consultoria comercial para clínicas odontológicas, treinamento comercial odontológico, vendas para clínicas odontológicas, performance comercial odontológica" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Vértice Consultoria",
        description: DESC,
        telephone: "+55-48-98834-0105",
        email: "iago@somosvertice.net",
        areaServed: "BR",
        serviceType: "Consultoria comercial para clínicas odontológicas",
      }),
    }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Differentials />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
