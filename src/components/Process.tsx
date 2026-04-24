const steps = [
  { n: "01", title: "Diagnóstico", desc: "Avaliação técnica da pintura sob luz especializada e medidor de espessura." },
  { n: "02", title: "Plano de tratamento", desc: "Definimos o protocolo ideal, prazo e investimento — sem surpresas." },
  { n: "03", title: "Execução", desc: "Cabine controlada, equipe certificada e produtos de origem auditada." },
  { n: "04", title: "Entrega assinada", desc: "Inspeção final, garantia formal e orientações de manutenção." },
];

export const Process = () => {
  return (
    <section id="processo" className="relative py-28 md:py-36 border-t border-border bg-card/30">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <p className="text-mono-label text-primary mb-4">— 03 / Processo</p>
          <h2 className="text-display text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Nosso método em <span className="text-primary">quatro etapas.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-border">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="bg-background p-8 md:p-10 group hover:bg-card transition-smooth relative"
            >
              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-display text-5xl md:text-6xl font-bold text-primary/20 group-hover:text-primary transition-colors">
                  {s.n}
                </span>
                <span className="h-px flex-1 bg-border group-hover:bg-primary/40 transition-colors" />
              </div>
              <h3 className="text-display text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
