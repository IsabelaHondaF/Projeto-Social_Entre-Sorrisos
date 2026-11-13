/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import localFont from "next/font/local";

// Fonte Gendy (arquivo em public/fonts/Gendy.otf)
const gendy = localFont({
  src: "../../public/fonts/Gendy.otf",
  weight: "400",
  style: "normal",
  display: "swap",
});

// Duas versões do menu, mesma estrutura e mesmas posições:
//   <Navbar />                    -> escura (página do voluntário)
//   <Navbar variante="claro" />   -> clara (página inicial)
const temas = {
  escuro: {
    fundo: "bg-[#130F1F]",
    link: "text-[#FE8A8A]",
    botaoDoe: "bg-[#FE8A8A]",
  },
  claro: {
    fundo: "bg-[#FFFFFF]",
    link: "text-[#FE914E]",
    botaoDoe: "bg-[#FE914E]",
  },
} as const;

type Props = { variante?: keyof typeof temas };

// Medidas do Figma (tela de 6000px): valor_em_px / 60 = cqw.
// Espaçamento entre letras = 0% no Figma, então não há "tracking" aqui.
export default function NavbarClaro({ variante = "escuro" }: Props) {
  const tema = temas[variante];

  // "Início" é maior que os outros links no Figma (90px).
  // O tamanho de "Sobre nós" e "Nosso time" (1.2cqw = 72px) é uma estimativa:
  // se o Figma mostrar outro valor, troque o 1.2 abaixo (px do Figma / 60).
  const base = `absolute top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap ${tema.link}`;
  const link = `${base} text-[1.2cqw]`;
  const linkInicio = `${base} text-[1.5cqw]`;

  // Versão clara: ocupa a largura toda da tela (página inicial).
  // Versão escura: largura limitada pela altura da janela (página do voluntário).
  const largura =
    variante === "claro" ? "w-full" : "w-[min(100vw,127vh)]";

  return (
    <div
      className={`${gendy.className} ${tema.fundo}`}
      style={{ fontWeight: 400 }}
    >
      <header
        className={`relative mx-auto h-[6.667cqw] ${largura} [container-type:inline-size]`}
      >
        <Link href="/">
          <img
            src="/logo.png"
            alt="Entre Sorrisos"
            className="absolute left-[7.9cqw] top-1/2 w-[14.65cqw] -translate-y-1/2"
          />
        </Link>

        <Link href="/" className={`${linkInicio} left-[35.7cqw]`}>
          Início
        </Link>
        <Link href="/sobre" className={`${link} left-[49.2cqw]`}>
          Sobre nós
        </Link>
        <Link href="/time" className={`${link} left-[63.5cqw]`}>
          Nosso time
        </Link>

        <Link
          href="/voluntario"
          className="absolute left-[72.9cqw] top-1/2 flex h-[3.55cqw] w-[9.8cqw] -translate-y-1/2 items-center justify-center rounded-[0.2cqw] bg-[#8B52FE] text-center text-[1.25cqw] leading-tight text-[#1E1633]"
        >
          Como ser um voluntário
        </Link>
        <Link
          href="/doe"
          className={`absolute left-[86.7cqw] top-1/2 flex h-[3.55cqw] w-[9.8cqw] -translate-y-1/2 items-center justify-center rounded-[0.2cqw] ${tema.botaoDoe} text-[1.333cqw] text-[#1E1633]`}
        >
          Doe agora
        </Link>
      </header>
    </div>
  );
}