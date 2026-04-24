import polish from "@/assets/service-polish.jpg";
import ceramic from "@/assets/service-ceramic.jpg";
import interior from "@/assets/service-interior.jpg";
import ppf from "@/assets/gallery-1.jpg";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Vitrificação Cerâmica",
    desc: "Proteção 9H de alta durabilidade com brilho profundo e efeito hidrofóbico extremo.",
    img: ceramic,
  },
  {
    n: "02",
    title: "Polimento Técnico",
    desc: "Correção de pintura em múltiplos estágios para devolver profundidade e nitidez.",
    img: polish,
  },
  {
    n: "03",
    title: "PPF — Película de Proteção",
    desc: "Filme transparente autorregenerativo contra riscos, pedras e desgaste do dia a dia.",
    img: ppf,
  },
  {
    n: "04",
    title: "Estética Interior",
    desc: "Higienização profunda, hidratação de couro e revitalização de plásticos e tecidos.",
    img: interior,
  },
];

export const Services = () => {
  return (
    <section id="servicos" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-mono-label text-primary mb-4">— 02 / Serviços</p>
            <h2 className="text-display text-4xl md:text-6xl font-bold leading-tight tracking-tight max-w-2xl">
              Cada serviço é uma <span className="text-primary">obsessão</span> técnica.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Procedimentos calibrados, produtos premium e um padrão de execução que respeita o tempo de cada veículo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <article
              key={s.n}
              className="group relative overflow-hidden border border-border bg-grad-card hover:border-primary/60 transition-smooth"
            >
              <div className="grid grid-cols-5 min-h-[280px]">
                <div className="col-span-3 p-8 md:p-10 flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <span className="text-mono-label text-primary">{s.n}</span>
                    <ArrowUpRight
                      size={22}
                      className="text-muted-foreground group-hover:text-primary group-hover:rotate-45 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-display text-2xl md:text-3xl font-bold leading-tight mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="col-span-2 relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-card/60" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-grad-primary group-hover:w-full transition-all duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
