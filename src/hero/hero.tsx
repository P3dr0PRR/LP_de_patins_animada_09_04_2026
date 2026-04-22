import play from "../assets/imgs/LP de patins animada (Community)/play.svg";
import bag from "../assets/imgs/LP de patins animada (Community)/shopping-bag-01.svg";

import elipse from "../assets/imgs/LP de patins animada (Community)/Ellipse.svg";
import patins from "../assets/imgs/LP de patins animada (Community)/patins-image.png";
import stars1 from "../assets/imgs/LP de patins animada (Community)/Stars 1.svg";
import stars2 from "../assets/imgs/LP de patins animada (Community)/Stars 2.svg";

export function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-between items-center py-[16px] px-[32px] w-full">
      <div className="space-y-[3rem]">
        <h1 className="mr-2">
          Snitap, sua vida mais
          <span className="overflow-hidden h-[1lh] inline-block w-max align-bottom">
            <span className="flex flex-col animate-slide-words">
              <span className="text-snitap-sky-mid">Radical</span>

              <span className="text-snitap-joy-mid">Divertida</span>
              <span className="text-snitap-leaf-mid">Saudável</span>
              <span className="text-snitap-sky-mid">Radical</span>
            </span>
          </span>
        </h1>
        <div className="flex flex-col-reverse gap-6 md:flex-row md:gap-[3.1rem] items-start">
          <a
            href="#"
            className="group w-[283px] h-[72px] flex items-center justify-center gap-3 rounded-full bg-snitap-sun transition-all hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <img src={bag} title="Sacola" className="h-[1em]" />
            <p className="button-label">Comprar agora</p>
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-[12px] transition-all hover:scale-105 group h-[72px]"
          >
            <img
              src={play}
              title="Play"
              className="h-[72px] bg-bg-base rounded-full p-[24px] shadow-lg transition-all group-hover:shadow-xl"
            />
            <p className="button-label">Veja em ação</p>
          </a>
        </div>
      </div>
      <div className="w-full md:shrink-0 h-[26rem] md:h-[30.5rem] md:w-[30.5rem]  overflow-hidden">
        <div className="relative w-full h-full">
          <img
            src={elipse}
            title="Elipse"
            className="absolute w-[94%] top-[3%] left-[3%] animate-slideIn"
          />
          <img
            src={stars1}
            title="Stars 1"
            className="absolute w-[5.5rem] top-[15%] z-0 animate-slideIn"
            style={{ animationDelay: "800ms" }}
          />
          <img
            src={stars2}
            title="Stars 2"
            className="absolute w-[2.5rem] right-0 bottom-[53%] animate-slideIn"
          />
          <img
            src={patins}
            title="Patins"
            className="absolute w-full z-[1] animate-slideIn"
            style={{ animationDelay: "200ms" }}
          />
        </div>
      </div>
    </section>
  );
}
