/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";
import localFont from "next/font/local";

// Fonte Gendy (arquivo em public/fonts/Gendy.otf)
const gendy = localFont({
  src: "../../public/fonts/Gendy.otf",
  weight: "400",
  style: "normal",
  display: "swap",
});

export default function Voluntario() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Fundo escuro de largura total (conteúdo + rodapé).
          flex-1 faz o fundo ocupar só o que sobra depois do navbar,
          assim o rodapé fica colado no fim da página. */}
      <div
        className={`${gendy.className} flex flex-1 flex-col bg-[#2B2029] text-white`}
      >
        {/* Container que mantém a proporção do Figma (só o conteúdo fica aqui) */}
        <div className="mx-auto w-[min(100vw,127vh)] flex-1 [container-type:inline-size]">
          {/* Conteúdo (3708px no Figma = 61.8cqw de altura) */}
          <main
            className="relative h-[61.8cqw] overflow-hidden"
            style={{ fontFamily: `${gendy.style.fontFamily}, sans-serif`, fontWeight: 400 }}
          >
            <h1 className="absolute left-[7cqw] top-[5.6cqw] whitespace-nowrap text-[5cqw] leading-none">
              Seja um voluntário
            </h1>

            <p className="absolute left-[7cqw] top-[14.7cqw] text-[1.833cqw] leading-none">
              Juntos vamos construir sorrisos e transformar histórias!!
            </p>
            <p className="absolute left-[7cqw] top-[18.3cqw] text-[1.833cqw] leading-none">
              Estamos felizes com a sua disposição em fazer parte do nosso time!
            </p>
            <p className="absolute left-[7cqw] top-[23.5cqw] text-[1.833cqw] leading-none">
              Recomendações:
            </p>

            <ul className="absolute left-[7cqw] top-[27.2cqw] w-[70cqw] list-disc pl-[3.4cqw] text-[1.833cqw] leading-[1.05]">
              <li className="mb-[1.4cqw]">
                <span className="text-[2.333cqw]">Estudante:</span>{" "}
                é interessante que você já esteja cursando disciplinas clínicas,
                assim poderá aproveitar muito mais a experiência durante a Ação.
              </li>
              <li className="mb-[1.4cqw]">
                <span className="text-[2.333cqw]">Dentista:</span>{" "}
                vagas para especialistas em Dentística, Periodontia, Cirurgia,
                Odontopediatria, Ortodontia (com experiência em escaneamento),
                Endodontia e Protesista.
              </li>
              <li>
                <span className="text-[2.333cqw]">Clínico Geral:</span>{" "}
                nos conte mais sobre sua experiência clínica.
              </li>
            </ul>

            {/* Botão do formulário: 1414 x 365 no Figma (texto + margens) */}
            <a
              href="#" /* TODO: trocar pelo link do Google Forms */
              className="absolute left-[65.5cqw] top-[46.9cqw] flex h-[6.08cqw] w-[23.57cqw] items-center justify-center bg-[#8B52FE] text-[2.167cqw] text-[#1E1633]"
            >
              Link do forms
            </a>

            {/* Sorrisos decorativos (as imagens têm margem transparente em volta) */}
            <img src="/sorriso-1.png" alt="" className="absolute left-[88.5cqw] top-[3.8cqw] w-[10.1cqw]" />
            <img src="/sorriso-2.png" alt="" className="absolute left-[92cqw] top-[15cqw] w-[6.2cqw]" />
            <img src="/sorriso-1.png" alt="" className="absolute left-[2cqw] top-[50.8cqw] w-[13.7cqw]" />
            <img src="/sorriso-2.png" alt="" className="absolute left-[12.3cqw] top-[50.3cqw] w-[6.9cqw]" />
          </main>
        </div>

        {/* Rodapé rosa: fora do container, ocupa a largura toda da tela.
            Altura = 10% da largura do container (min(100vw,127vh)) */}
        <footer className="h-[min(10vw,12.7vh)] w-full bg-[#FE8A8A]" />
      </div>
    </div>
  );
}