export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-surface/70 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-surface-foreground">
          <span className="inline-block w-7 h-7 rounded-md bg-brand" />
          <span className="font-display font-semibold tracking-tight text-lg">Vértice</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-surface-foreground/70">
          <a href="#problema" className="hover:text-brand transition-colors">Problema</a>
          <a href="#solucao" className="hover:text-brand transition-colors">Solução</a>
          <a href="#servicos" className="hover:text-brand transition-colors">Serviços</a>
          <a href="#diferenciais" className="hover:text-brand transition-colors">Diferenciais</a>
          <a href="#depoimentos" className="hover:text-brand transition-colors">Cases</a>
        </nav>
        <a
          href="https://wa.me/5548988340105"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-5 h-10 text-sm font-medium hover:brightness-95 transition"
        >
          Solicitar proposta
        </a>
      </div>
    </header>
  );
}
