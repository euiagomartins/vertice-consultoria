import heroImg from "@/assets/hero-vertice.jpg";
import { ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-surface text-surface-foreground pt-32 pb-24">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-brand/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-float-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-surface-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
              Consultoria comercial para clínicas odontológicas
            </div>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold text-balance leading-[1.05]">
              Transformamos clínicas odontológicas em{" "}
              <span className="text-shine">operações comerciais</span> de alta performance.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-surface-foreground/70 max-w-2xl">
              Treinamentos, vendas e desenvolvimento comercial para clínicas que desejam aumentar conversão,
              melhorar atendimento e crescer de forma sustentável.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/5548988340105"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-7 h-13 py-4 text-base font-semibold glow-brand hover:brightness-95 transition"
              >
                Solicitar proposta
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a href="#solucao" className="text-sm text-surface-foreground/70 hover:text-brand transition-colors">
                Como funciona →
              </a>
            </div>

            <p className="mt-10 text-sm uppercase tracking-[0.2em] text-brand/90">
              Consultoria de verdade é a que fica até funcionar.
            </p>
          </div>

          <div className="lg:col-span-5 relative animate-float-up [animation-delay:200ms]">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={heroImg}
                alt="Dashboard de performance comercial para clínicas odontológicas"
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-surface/60 via-transparent to-transparent" />
            </div>

            {/* floating metric cards */}
            <div className="absolute -left-6 -bottom-6 bg-white text-foreground rounded-xl p-4 shadow-elegant w-56 hidden md:block">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <TrendingUp className="w-4 h-4 text-brand" /> Conversão de avaliações
              </div>
              <div className="mt-2 flex items-end justify-between">
                <span className="text-3xl font-display font-semibold">+62%</span>
                <span className="text-xs text-emerald-600 font-medium">↑ 12 sem</span>
              </div>
            </div>
            <div className="absolute -right-4 top-8 bg-surface text-surface-foreground rounded-xl p-4 border border-white/10 w-52 hidden md:block">
              <div className="flex items-center gap-2 text-xs text-surface-foreground/60">
                <Users className="w-4 h-4 text-brand" /> Equipes treinadas
              </div>
              <div className="mt-2 text-3xl font-display font-semibold">240+</div>
            </div>
          </div>
        </div>

        {/* metric strip */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {[
            { k: "+180", v: "clínicas atendidas" },
            { k: "62%", v: "média de aumento em conversão" },
            { k: "98%", v: "satisfação dos clientes" },
            { k: "12 anos", v: "de mercado odontológico" },
          ].map((s) => (
            <div key={s.v} className="bg-surface p-6">
              <div className="text-3xl font-display font-semibold text-brand">{s.k}</div>
              <div className="mt-1 text-sm text-surface-foreground/60">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
