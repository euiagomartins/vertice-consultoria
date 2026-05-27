const items = [
  {
    quote: "Em 90 dias dobramos a conversão das avaliações. A equipe finalmente entendeu que atender é vender com cuidado.",
    name: "Dra. Mariana Coelho",
    role: "Sócia-fundadora",
    clinic: "Clínica Orallis — Florianópolis",
  },
  {
    quote: "A Vértice estruturou nossa pré-venda do zero. Hoje temos previsibilidade de agenda e faturamento.",
    name: "Rafael Albuquerque",
    role: "Gestor comercial",
    clinic: "Rede SorrisoMax — 4 unidades",
  },
  {
    quote: "Saí da rotina de apagar incêndios. Tenho indicadores, rituais e um time treinado de verdade.",
    name: "Dra. Camila Bertolini",
    role: "Diretora clínica",
    clinic: "Bertolini Odontologia",
  },
  {
    quote: "O que mais me impressionou foi a permanência. Eles ficam até funcionar — não entregam relatório e somem.",
    name: "Lucas Meireles",
    role: "CEO",
    clinic: "Grupo OdontoPlus",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Cases</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">
            Clínicas que decidiram crescer com método.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((t) => (
            <figure
              key={t.name}
              className="p-8 rounded-2xl border border-border bg-card flex flex-col justify-between min-h-[260px] hover:shadow-elegant transition-shadow"
            >
              <blockquote className="text-lg leading-relaxed text-card-foreground">
                <span className="text-brand text-3xl font-display leading-none mr-1">“</span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center font-display font-semibold text-brand-foreground">
                  {t.name.split(" ").slice(-2).map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.clinic}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
