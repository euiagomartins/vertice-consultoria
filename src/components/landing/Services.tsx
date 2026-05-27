import {
  GraduationCap, TrendingUp, Headset, Workflow, Phone,
  LineChart, Trophy, ClipboardCheck, Sparkles,
} from "lucide-react";

const services = [
  { icon: GraduationCap, title: "Treinamento Comercial", desc: "Capacitação completa para times de vendas dentro da clínica." },
  { icon: TrendingUp, title: "Conversão de Avaliações", desc: "Metodologia para transformar avaliações em tratamentos fechados." },
  { icon: Headset, title: "Desenvolvimento de Recepção", desc: "A recepção como o primeiro vendedor da sua operação." },
  { icon: Workflow, title: "Estruturação de Pré-vendas", desc: "Funil organizado, qualificação e agendamento eficientes." },
  { icon: Phone, title: "Capacitação de CRC", desc: "Central de relacionamento treinada para vender e reativar." },
  { icon: LineChart, title: "Gestão Comercial", desc: "Indicadores, metas e rotinas que geram previsibilidade." },
  { icon: Trophy, title: "Performance de Equipes", desc: "Cultura de alta performance aplicada ao time clínico e comercial." },
  { icon: ClipboardCheck, title: "Padronização de Atendimento", desc: "Experiência consistente do primeiro contato ao pós-tratamento." },
  { icon: Sparkles, title: "Estratégias de Vendas", desc: "Frameworks específicos para clínicas odontológicas." },
];

export function Services() {
  return (
    <section id="servicos" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Serviços</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-balance">
            Tudo o que sua clínica precisa para vender melhor.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Soluções modulares ou integradas — ajustadas ao porte e ao momento da sua clínica.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative p-7 rounded-2xl border border-border bg-card hover:bg-surface hover:text-surface-foreground transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/15 text-foreground group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground group-hover:text-surface-foreground/70 transition-colors">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
