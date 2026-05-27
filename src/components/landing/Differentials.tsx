import { Stethoscope, Target, Hammer, HeartHandshake, Gauge, Compass, Flame, Smile } from "lucide-react";

const items = [
  { icon: Stethoscope, title: "Especialização em odontologia", desc: "Conhecemos a fundo o ecossistema de clínicas." },
  { icon: Target, title: "Estratégia aplicada à saúde", desc: "Vendas com ética e respeito ao paciente." },
  { icon: Hammer, title: "Implementação prática", desc: "Mão na operação, junto com a equipe." },
  { icon: HeartHandshake, title: "Desenvolvimento humano", desc: "Pessoas treinadas, processos sustentados." },
  { icon: Gauge, title: "Foco em resultado real", desc: "Indicadores claros, evolução semana a semana." },
  { icon: Compass, title: "Acompanhamento estratégico", desc: "Consultor dedicado por toda a jornada." },
  { icon: Flame, title: "Cultura de performance", desc: "Alta exigência com método e clareza." },
  { icon: Smile, title: "Atendimento humanizado", desc: "Performance que respeita o paciente." },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-28 bg-surface text-surface-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-brand">Diferenciais</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">
            Por que clínicas escolhem a Vértice.
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-surface p-7 hover:bg-brand/5 transition-colors">
              <Icon className="w-7 h-7 text-brand" />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-surface-foreground/65">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
