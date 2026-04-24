const brands = [
  "PORSCHE", "BMW", "AUDI", "MERCEDES", "FERRARI", "LAMBORGHINI", "RANGE ROVER", "TESLA",
];

export const Marquee = () => {
  return (
    <section className="border-y border-border bg-card/40 py-6 overflow-hidden">
      <div className="flex items-center gap-4 mb-4 container-x">
        <span className="text-mono-label text-muted-foreground">Confiança de quem dirige</span>
        <div className="h-px flex-1 bg-grad-line" />
      </div>
      <div className="relative">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...brands, ...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="text-display text-3xl md:text-4xl font-bold text-muted-foreground/40 hover:text-primary transition-colors"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
