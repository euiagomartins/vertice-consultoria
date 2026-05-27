import solutionImg from "@/assets/solution-vertice.jpg";
import { Check } from "lucide-react";

const points = [
  "Acompanhamento próximo, semana a semana",
  "Implementação prática — não apenas teoria",
  "Foco obsessivo em resultado mensurável",
  "Treinamento aplicado ao dia a dia da clínica",
  "Crescimento sustentável e previsível",
];

export function Solution() {
  return (
    <section id="solucao" className="relative py-28 bg-surface text-surface-foreground overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-xs uppercase tracking-[0.25em] text-brand">A solução</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">
            A Vértice entra dentro da operação até o método funcionar.
          </h2>
          <p className="mt-5 text-lg text-surface-foreground/70">
            Desenvolvemos equipes comerciais, processos e estratégias para transformar clínicas
            odontológicas em operações mais organizadas, eficientes e lucrativas.
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand text-brand-foreground">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span className="text-surface-foreground/85">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 p-6 rounded-2xl border border-brand/30 bg-brand/5">
            <p className="text-xl md:text-2xl font-display font-medium">
              “Não entregamos relatório. <span className="text-brand">Entregamos transformação.</span>”
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-elegant">
            <img
              src={solutionImg}
              alt="Reunião estratégica com equipe comercial de clínica odontológica"
              width={1280}
              height={896}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-brand text-brand-foreground rounded-xl p-5 w-64 shadow-glow hidden md:block">
            <div className="text-xs font-medium uppercase tracking-wide opacity-80">Método Vértice</div>
            <div className="mt-1 text-lg font-display font-semibold leading-snug">
              Diagnóstico, implementação e acompanhamento contínuo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
