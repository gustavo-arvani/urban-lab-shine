export const Footer = () => {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 grid place-items-center bg-grad-primary">
            <span className="text-display font-bold text-primary-foreground text-xs">U</span>
          </div>
          <p className="text-display font-bold tracking-tight">URBAN LAB</p>
        </div>
        <p className="text-mono-label text-muted-foreground">
          © {new Date().getFullYear()} Urban Lab — Todos os direitos reservados
        </p>
        <div className="flex gap-6 text-mono-label text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
          <a href="#" className="hover:text-primary transition-colors">Termos</a>
        </div>
      </div>
    </footer>
  );
};
