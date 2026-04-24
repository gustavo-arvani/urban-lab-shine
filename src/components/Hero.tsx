import heroCar from "@/assets/hero-car.jpg";
import { ArrowRight, Play } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-hero">
      {/* grid backdrop */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />

      {/* scanline */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 h-px bg-grad-primary opacity-60 animate-scan" />
      </div>

      <div className="container-x relative pt-16 md:pt-24 pb-20">
        {/* top meta strip */}
        <div className="flex items-center justify-between mb-10 text-mono-label text-muted-foreground">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span>Studio aberto • Seg–Sáb</span>
          </div>
          <span className="hidden md:block">N° 001 / Estética Premium</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="text-mono-label text-primary mb-6">— Urban Lab Auto Detailing</p>
            <h1 className="text-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
              Onde o<br />
              <span className="relative">
                <span className="text-primary glow-text">asfalto</span>
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-grad-primary opacity-70" />
              </span>
              <br />
              vira espelho.
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Estética automotiva de alta performance. Vitrificação cerâmica, polimento técnico,
              PPF e cuidado obsessivo por cada detalhe — do farol ao escapamento.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-mono-label hover:shadow-glow transition-smooth"
              >
                Agende sua avaliação
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-border text-foreground text-mono-label hover:border-primary hover:text-primary transition-smooth"
              >
                <Play size={14} /> Ver trabalhos
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "1.2k+", l: "Carros tratados" },
                { n: "9 anos", l: "De estrada" },
                { n: "100%", l: "Garantia" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-display text-2xl md:text-3xl font-bold text-foreground">{s.n}</p>
                  <p className="text-mono-label text-muted-foreground mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-border shadow-card-elev animate-float-slow">
              <img
                src={heroCar}
                alt="Carro esportivo preto na cabine de detalhamento Urban Lab"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* HUD corners */}
              {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((p) => (
                <div key={p} className={`absolute ${p} h-4 w-4 border-primary`} style={{
                  borderTopWidth: p.includes("top") ? 2 : 0,
                  borderBottomWidth: p.includes("bottom") ? 2 : 0,
                  borderLeftWidth: p.includes("left") ? 2 : 0,
                  borderRightWidth: p.includes("right") ? 2 : 0,
                }} />
              ))}

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-mono-label text-primary">Unit / 04</p>
                  <p className="text-display text-lg font-bold">Ceramic Pro 9H</p>
                </div>
                <div className="text-right">
                  <p className="text-mono-label text-muted-foreground">Status</p>
                  <p className="text-mono-label text-primary">● Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
