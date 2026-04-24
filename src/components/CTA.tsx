import { useState } from "react";
import { ArrowRight, MapPin, Phone, Instagram, Clock } from "lucide-react";

const WHATSAPP_NUMBER = "5511980000000"; // E.164 sem +
const INSTAGRAM_URL = "https://instagram.com/urbanlab.detailing";
const MAPS_URL = "https://maps.google.com/?q=Rua+dos+Detalhes+1200+Sao+Paulo";

export const CTA = () => {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    carro: "",
    servico: "Vitrificação Cerâmica",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Quero agendar uma avaliação na Urban Auto.%0A%0A*Nome:* ${form.nome}%0A*WhatsApp:* ${form.whatsapp}%0A*Carro:* ${form.carro}%0A*Serviço:* ${form.servico}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener");
  };

  const contacts = [
    { icon: MapPin, label: "Endereço", val: "Rua dos Detalhes, 1200 — São Paulo / SP", href: MAPS_URL },
    { icon: Phone, label: "WhatsApp", val: "+55 (11) 9 8000-0000", href: `https://wa.me/${WHATSAPP_NUMBER}` },
    { icon: Clock, label: "Horário", val: "Seg–Sáb · 09h às 19h" },
    { icon: Instagram, label: "Instagram", val: "@urbanlab.detailing", href: INSTAGRAM_URL },
  ];

  return (
    <section id="agendar" className="relative py-28 md:py-36 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-grad-line" />

      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-mono-label text-primary mb-4">— 06 / Agendar</p>
            <h2 className="text-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Pronto para <br />
              <span className="text-primary glow-text">elevar</span> seu carro?
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              Agende uma avaliação gratuita. Em 20 minutos definimos o protocolo ideal
              para a sua pintura — sem pressão, com transparência total.
            </p>

            <div className="mt-10 space-y-5">
              {contacts.map((c) => {
                const Inner = (
                  <>
                    <div className="h-10 w-10 grid place-items-center border border-primary/40 text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <c.icon size={16} />
                    </div>
                    <div>
                      <p className="text-mono-label text-muted-foreground">{c.label}</p>
                      <p className="text-foreground mt-1">{c.val}</p>
                    </div>
                  </>
                );
                return c.href ? (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 hover:text-primary transition-colors"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={c.label} className="flex items-start gap-4">
                    {Inner}
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="border border-border bg-grad-card p-8 md:p-10 shadow-card-elev"
          >
            <p className="text-mono-label text-primary mb-2">Solicitar avaliação</p>
            <h3 className="text-display text-2xl font-bold mb-8">Preencha e enviaremos pelo WhatsApp</h3>

            <div className="space-y-5">
              <Field label="Seu nome" type="text" placeholder="João da Silva"
                value={form.nome} onChange={(v) => setForm({ ...form, nome: v })} required />
              <Field label="WhatsApp" type="tel" placeholder="(11) 9 0000-0000"
                value={form.whatsapp} onChange={(v) => setForm({ ...form, whatsapp: v })} required />
              <Field label="Modelo do carro" type="text" placeholder="Ex: BMW M3 2023"
                value={form.carro} onChange={(v) => setForm({ ...form, carro: v })} required />

              <div>
                <label className="text-mono-label text-muted-foreground block mb-2">Serviço de interesse</label>
                <select
                  value={form.servico}
                  onChange={(e) => setForm({ ...form, servico: e.target.value })}
                  className="w-full bg-background border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                >
                  <option>Vitrificação Cerâmica</option>
                  <option>Polimento Técnico</option>
                  <option>PPF</option>
                  <option>Estética Interior</option>
                  <option>Avaliação completa</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-mono-label hover:shadow-glow transition-smooth"
            >
              Enviar pelo WhatsApp
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label, type, placeholder, value, onChange, required,
}: {
  label: string; type: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean;
}) => (
  <div>
    <label className="text-mono-label text-muted-foreground block mb-2">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
    />
  </div>
);
