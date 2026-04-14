import play from "../assets/imgs/LP de patins animada (Community)/play.svg";
import bag from "../assets/imgs/LP de patins animada (Community)/shopping-bag-01.svg";

export function Hero() {
  return (
    <section className="flex justify-center items-center py-[16px] px-[32px] w-full ">
      <div className="space-y-[3rem]">
        <h1 className="mr-2">
          Snitap, sua vida mais
          <span className=" overflow-hidden h-[1lh] inline-block w-max align-bottom">
            <span className="flex flex-col  animate-slide-words">
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
            className=" flex items-center justify-center gap-[12px] transition-all hover:scale-105 group h-[72px]"
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
      {/* <div></div> */}
    </section>
  );
}
