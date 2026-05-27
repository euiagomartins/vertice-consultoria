import { AlertCircle } from "lucide-react";

const pains = [
  "Baixa conversão de avaliações em tratamentos fechados",
  "Recepção despreparada para o primeiro contato",
  "Pacientes que não fecham e não retornam",
  "Ausência de processo comercial estruturado",
  "Equipe sem treinamento contínuo",
  "Oportunidades perdidas todos os dias",
  "Atendimento inconsistente entre profissionais",
  "Falta de previsibilidade no faturamento",
];

export function Problem() {
  return (
    <section id="problema" className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">O problema</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">
            Sua clínica atrai pacientes — mas perde a maioria deles antes do fechamento.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A maior parte das clínicas odontológicas investe em marketing, atrai avaliações,
            mas não tem estrutura comercial para transformar interesse em receita.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pains.map((p) => (
            <div
              key={p}
              className="group p-6 rounded-xl border border-border bg-card hover:border-foreground/30 transition-colors"
            >
              <AlertCircle className="w-5 h-5 text-brand" />
              <p className="mt-4 text-sm text-card-foreground/80 leading-relaxed">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
