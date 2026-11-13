"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Navbar from "../components/NavbarLaranja";
import localFont from "next/font/local";

// Fonte Gendy (arquivo em public/fonts/Gendy.otf)
const gendy = localFont({
  src: "../../public/fonts/Gendy.otf",
  weight: "400",
  style: "normal",
  display: "swap",
});

// Pix Copia e Cola (estático, sem valor definido: o doador escolhe quanto doar)
const PIX_CODE =
  "00020101021126360014br.gov.bcb.pix0114551303440001075204000053039865802BR5918KALUNGA SORRIDENTE6009SAO PAULO622905251KF9DVGM63Y46HB4J9V2YCGBH63049E09";

export default function Doe() {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(PIX_CODE);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      // se o navegador bloquear, o usuário ainda pode copiar manualmente
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Fundo escuro de largura total (conteúdo + rodapé) */}
      <div
        className={`${gendy.className} flex flex-1 flex-col bg-[#2B2029] text-white`}
      >
        {/* Container que mantém a proporção do Figma */}
        <div className="mx-auto w-[min(100vw,127vh)] flex-1 [container-type:inline-size]">
          <main
            className="relative h-[62cqw] overflow-hidden"
            style={{ fontFamily: `${gendy.style.fontFamily}, sans-serif`, fontWeight: 400 }}
          >
            {/* Título */}
            <h1 className="absolute left-[10cqw] top-[10.6cqw] whitespace-nowrap text-[4.4cqw] leading-[1.05] tracking-[0.01em]">
              Apoie o<br />
              Projeto Entre<br />
              Sorrisos
            </h1>

            {/* Texto */}
            <div className="absolute left-[10cqw] top-[29.3cqw] whitespace-nowrap text-[1.6cqw] leading-[1.1] tracking-[0.02em]">
              <p className="mb-[1.8cqw]">
                Ajude a levar saúde bucal, cuidado e<br />
                acolhimento a quem mais precisa.
              </p>
              <p className="mb-[1.8cqw]">
                Para muitas pessoas, ir ao dentista ainda<br />
                é um privilégio. O Entre Sorrisos acredita<br />
                que saúde bucal é direito de todos.
              </p>
              <p>
                Com a sua doação, levamos atendimento<br />
                odontológico social, informação e<br />
                acolhimento a quem mais precisa.
              </p>
            </div>

            {/* Card do Pix */}
            <div
              className="absolute left-[56.4cqw] top-[9.3cqw] h-[41.1cqw] w-[32.5cqw] overflow-hidden rounded-[1.1cqw] bg-[#262626]"
              style={{ fontFamily: "Arial, Helvetica, sans-serif", fontWeight: 400 }}
            >
              <p className="absolute left-0 top-[1.6cqw] w-full px-[3cqw] text-center text-[1.75cqw] leading-[1.3]">
                Leia o QR Code ou copie o código abaixo no app do seu banco para
                fazer o pagamento:
              </p>

              {/* QR Code gerado a partir do próprio código Pix */}
              <div className="absolute left-1/2 top-[10cqw] -translate-x-1/2 bg-white p-[0.6cqw]">
                <QRCodeSVG
                  value={PIX_CODE}
                  level="M"
                  className="block h-[14.4cqw] w-[14.4cqw]"
                />
              </div>

              {/* Pix copia e cola */}
              <div className="absolute left-[1.5cqw] top-[29.4cqw] flex h-[5.25cqw] w-[29.4cqw] flex-col justify-center rounded-[0.6cqw] border border-[#444] bg-[#2B2B2B] px-[1cqw]">
                <div className="flex items-center justify-between">
                  <span className="text-[0.9cqw] font-bold">Pix Copia e Cola</span>
                  <button type="button" onClick={copiar} aria-label="Copiar código">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[1cqw] w-[1cqw] fill-none stroke-[#bbb] stroke-2"
                    >
                      <rect x="9" y="9" width="11" height="11" rx="2" />
                      <path d="M5 15V6a2 2 0 0 1 2-2h9" />
                    </svg>
                  </button>
                </div>
                <p className="mt-[0.4cqw] truncate text-[0.9cqw] text-[#ddd]">{PIX_CODE}</p>
              </div>

              {/* Botão copiar */}
              <button
                type="button"
                onClick={copiar}
                className="absolute bottom-0 left-0 flex h-[3.3cqw] w-full items-center justify-center bg-gradient-to-r from-[#F7F366] to-[#EEDB3B] text-[1.2cqw] text-black"
              >
                {copiado ? "Código copiado!" : "Copiar código"}
              </button>
            </div>

            {/* Sorrisos decorativos */}
            <img src="/sorriso-1.png" alt="" className="absolute left-[88.5cqw] top-[4cqw] w-[10cqw]" />
            <img src="/sorriso-2.png" alt="" className="absolute left-[93.5cqw] top-[14.5cqw] w-[6cqw]" />
            <img src="/sorriso-1.png" alt="" className="absolute left-[1cqw] top-[50cqw] w-[11cqw]" />
            <img src="/sorriso-2.png" alt="" className="absolute left-[10.5cqw] top-[49.5cqw] w-[7cqw]" />
          </main>
        </div>

        {/* Rodapé laranja, largura total */}
        <footer className="h-[min(10vw,12.7vh)] w-full bg-[#FF9966]" />
      </div>
    </div>
  );
}