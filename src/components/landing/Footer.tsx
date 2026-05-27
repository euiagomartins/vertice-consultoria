import { Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface text-surface-foreground border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-7 h-7 rounded-md bg-brand" />
            <span className="font-display font-semibold text-lg">Vértice Consultoria</span>
          </div>
          <p className="mt-4 text-sm text-surface-foreground/60 max-w-xs">
            Consultoria de verdade é a que fica até funcionar.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-surface-foreground/50">Contato</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+5548988340105" className="inline-flex items-center gap-2 hover:text-brand transition-colors">
                <Phone className="w-4 h-4 text-brand" /> (48) 98834-0105
              </a>
            </li>
            <li>
              <a href="mailto:iago@somosvertice.net" className="inline-flex items-center gap-2 hover:text-brand transition-colors">
                <Mail className="w-4 h-4 text-brand" /> iago@somosvertice.net
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5548988340105"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-brand" /> WhatsApp direto
              </a>
            </li>
          </ul>
        </div>

        <div className="md:text-right">
          <div className="text-xs uppercase tracking-[0.25em] text-surface-foreground/50">Atendimento</div>
          <p className="mt-4 text-sm text-surface-foreground/70">
            Clínicas odontológicas em todo o Brasil.<br />
            Atuação presencial e remota.
          </p>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-surface-foreground/50">
          <span>© {new Date().getFullYear()} Vértice Consultoria. Todos os direitos reservados.</span>
          <span>CNPJ · contato comercial via WhatsApp</span>
        </div>
      </div>
    </footer>
  );
}
