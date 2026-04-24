import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import polish from "@/assets/service-polish.jpg";
import ceramic from "@/assets/service-ceramic.jpg";

const items = [
  { img: g3, title: "Sedan Premium", tag: "Vitrificação", span: "md:col-span-2 md:row-span-2" },
  { img: g2, title: "Detalhe Performance", tag: "Polimento" },
  { img: g1, title: "SUV Matte", tag: "PPF" },
  { img: ceramic, title: "Hidrofobia 9H", tag: "Cerâmica" },
  { img: polish, title: "Correção Estágio 3", tag: "Pintura" },
];

export const Gallery = () => {
  return (
    <section id="galeria" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-mono-label text-primary mb-4">— 04 / Galeria</p>
            <h2 className="text-display text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              Trabalhos <span className="text-primary">realizados</span>.
            </h2>
          </div>
          <a href="#agendar" className="text-mono-label text-foreground hover:text-primary transition-colors">
            Ver portfólio completo →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 md:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`relative overflow-hidden border border-border group cursor-pointer ${it.span ?? ""}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-60 transition" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between">
                <div>
                  <p className="text-mono-label text-primary mb-1">{it.tag}</p>
                  <p className="text-display font-bold">{it.title}</p>
                </div>
                <span className="h-8 w-8 grid place-items-center border border-primary/60 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  ↗
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
