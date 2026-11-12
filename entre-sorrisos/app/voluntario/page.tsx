/* eslint-disable @next/next/no-img-element */
import Navbar from "../components/Navbar";
import { Quicksand } from "next/font/google";

// Fonte provisória, mais "cheinha", até ter o arquivo da Gendy.
// Quando colocar public/fonts/Gendy.ttf, a Gendy passa a ser usada sozinha.
const provisoria = Quicksand({ subsets: ["latin"], weight: "700" });


export default function Voluntario() {
  return (
    <>
    <Navbar />
    <div
      className={`${provisoria.className} flex min-h-screen justify-center bg-[#2B2029] text-white`}
      style={{ fontFamily: `"Gendy", ${provisoria.style.fontFamily}, sans-serif` }}
    >
      <div className="w-[min(100vw,127vh)] [container-type:inline-size]">
        {/* Conteúdo (3708px no Figma = 61.8cqw de altura) */}
        <main
          className="relative h-[61.8cqw] overflow-hidden"
          style={{ fontFamily: '"Gendy", sans-serif', fontWeight: 400 }}
        >
          <h1 className="absolute left-[7cqw] top-[5.6cqw] whitespace-nowrap text-[5cqw] leading-none tracking-[-0.068em]">
            Seja um voluntário
          </h1>

          <p className="absolute left-[7cqw] top-[14.7cqw] text-[1.833cqw] leading-none tracking-[-0.047em]">
            Juntos vamos construir sorrisos e transformar histórias!!
          </p>
          <p className="absolute left-[7cqw] top-[18.3cqw] text-[1.833cqw] leading-none tracking-[-0.047em]">
            Estamos felizes com a sua disposição em fazer parte do nosso time!
          </p>
          <p className="absolute left-[7cqw] top-[23.5cqw] text-[1.833cqw] leading-none tracking-[-0.047em]">
            Recomendações:
          </p>

          <ul className="absolute left-[7cqw] top-[27.2cqw] w-[70cqw] list-disc pl-[3.4cqw] text-[1.833cqw] leading-[1.05] tracking-[-0.03cqw]">
            <li className="mb-[1.4cqw]">
              <span className="text-[2.333cqw] tracking-[-0.04cqw]">Estudante:</span>{" "}
              é interessante que você já esteja cursando disciplinas clínicas,
              assim poderá aproveitar muito mais a experiência durante a Ação.
            </li>
            <li className="mb-[1.4cqw]">
              <span className="text-[2.333cqw] tracking-[-0.04cqw]">Dentista:</span>{" "}
              vagas para especialistas em Dentística, Periodontia, Cirurgia,
              Odontopediatria, Ortodontia (com experiência em escaneamento),
              Endodontia e Protesista.
            </li>
            <li>
              <span className="text-[2.333cqw] tracking-[-0.04cqw]">Clínico Geral:</span>{" "}
              nos conte mais sobre sua experiência clínica.
            </li>
          </ul>

          {/* Botão do formulário: 1414 x 365 no Figma (texto + margens) */}
          <a
            href="#" /* TODO: trocar pelo link do Google Forms */
            className="absolute left-[65.5cqw] top-[46.9cqw] flex h-[6.08cqw] w-[23.57cqw] items-center justify-center bg-[#8B52FE] text-[2.167cqw] tracking-[-0.04em] text-[#1E1633]"
          >
            Link do forms
          </a>

          {/* Sorrisos decorativos (as imagens têm margem transparente em volta) */}
          <img src="/sorriso-1.png" alt="" className="absolute left-[88.5cqw] top-[3.8cqw] w-[10.1cqw]" />
          <img src="/sorriso-2.png" alt="" className="absolute left-[92cqw] top-[15cqw] w-[6.2cqw]" />
          <img src="/sorriso-1.png" alt="" className="absolute left-[2cqw] top-[50.8cqw] w-[13.7cqw]" />
          <img src="/sorriso-2.png" alt="" className="absolute left-[12.3cqw] top-[50.3cqw] w-[6.9cqw]" />
        </main>

        {/* Rodapé rosa */}
        <footer className="h-[10cqw] bg-[#FE8A8A]" />
      </div>
    </div>
    </>
  );
}