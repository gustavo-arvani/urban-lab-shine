import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Galeria", href: "#galeria" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Agendar", href: "#agendar" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#" className="flex items-center group">
          <div className="leading-none">
            <p className="text-display text-lg font-bold tracking-tight">URBAN AUTO</p>
            <p className="text-mono-label text-[10px] text-muted-foreground mt-1 tracking-widest">Auto Detailing</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs text-mono-label bg-primary text-primary-foreground hover:shadow-glow transition-smooth"
        >
          Agendar
        </a>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-5 py-3 text-xs text-mono-label bg-primary text-primary-foreground"
            >
              Agendar
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
