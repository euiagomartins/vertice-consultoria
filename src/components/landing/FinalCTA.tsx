import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-28 bg-surface text-surface-foreground relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand/15 blur-[140px]" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold text-balance leading-[1.05]">
          Seu problema não é falta de pacientes.{" "}
          <span className="text-brand">É falta de estrutura comercial.</span>
        </h2>
        <p className="mt-6 text-lg md:text-xl text-surface-foreground/70 max-w-2xl mx-auto">
          A Vértice ajuda sua clínica a vender melhor, atender melhor e crescer com previsibilidade.
        </p>
        <div className="mt-10">
          <a
            href="https://wa.me/5548988340105"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-8 py-4 text-base font-semibold glow-brand hover:brightness-95 transition"
          >
            Solicitar proposta
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
        <p className="mt-8 text-sm uppercase tracking-[0.2em] text-surface-foreground/50">
          Resposta em até 24 horas úteis
        </p>
      </div>
    </section>
  );
}
