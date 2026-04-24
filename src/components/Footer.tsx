import { Instagram, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-3">
          <div className="leading-none">
            <p className="text-display font-bold tracking-tight">URBAN AUTO</p>
            <p className="text-mono-label text-[10px] text-muted-foreground mt-1 tracking-widest">Auto Detailing</p>
          </div>
        </a>
        <p className="text-mono-label text-muted-foreground text-center">
          © {new Date().getFullYear()} Urban Auto — Todos os direitos reservados
        </p>
        <div className="flex items-center gap-5 text-mono-label text-muted-foreground">
          <a
            href="https://instagram.com/urbanlab.detailing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://wa.me/5511980000000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-primary transition-colors"
          >
            <MessageCircle size={18} />
          </a>
          <a href="#agendar" className="hover:text-primary transition-colors">Agendar</a>
        </div>
      </div>
    </footer>
  );
};
