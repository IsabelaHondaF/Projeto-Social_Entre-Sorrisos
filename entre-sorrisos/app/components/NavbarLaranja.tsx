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

// Medidas do Figma (tela de 6000px): valor_em_px / 60 = cqw.
// O menu ocupa a largura toda da tela, igual ao Figma.

// Versão laranja do navbar: links e botão "Doe agora" em #FE9A76.
const base =
  "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[#FE9A76]";
const link = `${base} text-[1.2cqw]`;
const linkInicio = `${base} text-[1.5cqw]`;

export default function NavbarLaranja() {
  return (
    <div
      className={`${gendy.className} bg-[#130F1F]`}
      style={{ fontWeight: 400 }}
    >
      <header className="relative mx-auto h-[6.667cqw] w-full [container-type:inline-size]">
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
          className="absolute left-[86.7cqw] top-1/2 flex h-[3.55cqw] w-[9.8cqw] -translate-y-1/2 items-center justify-center rounded-[0.2cqw] bg-[#FE9A76] text-[1.333cqw] text-[#1E1633]"
        >
          Doe agora
        </Link>
      </header>
    </div>
  );
}