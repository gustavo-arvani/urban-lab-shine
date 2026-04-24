import { Star } from "lucide-react";

const items = [
  {
    name: "Rafael M.",
    car: "Porsche 911 Carrera",
    text: "Meu carro voltou em outro nível. Profundidade de cor que eu nunca tinha visto, nem na concessionária. Atendimento cirúrgico.",
  },
  {
    name: "Camila S.",
    car: "Range Rover Velar",
    text: "A vitrificação manteve o carro impecável por meses. Chove, lava sozinho. Vale cada centavo.",
  },
  {
    name: "Bruno A.",
    car: "BMW M3 Competition",
    text: "Aplicação de PPF perfeita. Cuidado obsessivo com cada esquina e detalhe. Showroom feeling.",
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="relative py-28 md:py-36 border-t border-border bg-card/30">
      <div className="container-x">
        <div className="max-w-2xl mb-16">
          <p className="text-mono-label text-primary mb-4">— 05 / Depoimentos</p>
          <h2 className="text-display text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            O que dizem <br />nossos <span className="text-primary">clientes</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <blockquote
              key={i}
              className="relative p-8 border border-border bg-grad-card hover:border-primary/50 transition-smooth group"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-base text-foreground/90 leading-relaxed mb-8">"{t.text}"</p>
              <footer className="flex items-center justify-between pt-5 border-t border-border">
                <div>
                  <p className="text-display font-bold">{t.name}</p>
                  <p className="text-mono-label text-muted-foreground mt-1">{t.car}</p>
                </div>
                <span className="text-display text-3xl font-bold text-primary/20 group-hover:text-primary/60 transition-colors">
                  ”
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};
