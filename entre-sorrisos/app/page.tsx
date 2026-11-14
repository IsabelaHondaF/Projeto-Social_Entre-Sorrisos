import Image from "next/image";
import NavbarClaro from "./components/NavbarClaro";
import localFont from "next/font/local";

const gendy = localFont({
  src: "../public/fonts/Gendy.otf",
  weight: "400",
  style: "normal",
  display: "swap",
});

export default function Home() {
  return (
    <div className={`${gendy.className} bg-white h-full w-full`}>
      <main className="h-full w-full">
        <div 
        // div primeira tela (navbar + introdução e imagem do fundador)
        className="h-screen"
        >
          <NavbarClaro></NavbarClaro>
          <div className="bg-[#EBE4FF] w-full flex flex-row justify-end">
            <div className="bg-[#FE914E] opacity-80 w-2/5 p-6 text-[#8B52FE]">
              <div className="aspect-square w-1/2 bg-white content-center rounded-full">
                <Image
                className=""
                src="/logo.png"
                width={888}
                height={500}
                alt=""
                >
              </Image>
              </div>
              <p className="my-4 text-2xl">Compartilhar sorrisos, transbordar amor! 🦷✨</p>
              <p className="my-4 text-lg">Somos uma ONG que leva atendimento odontológico a pessoas vulneráveis.</p>
              <p className="my-4 text-lg">Faça uma doação: leve atendimento a mais pessoas.</p>
              <p className="my-4 text-lg">Seja voluntário: estudantes, dentistas e clínicos gerais são bem-vindos nas nossas ações. 
  Inscreva-se e vamos transformar histórias juntos.</p>
            </div>
            <div className="w-1/2">
              <Image
              className=""
              src="/fundador_dr.arthursilveira.png"
              width={3134}
              height={3708}
              alt=""
              >
              </Image>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
