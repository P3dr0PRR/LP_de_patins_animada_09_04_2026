import img1 from "../imgs/LP de patins animada (Community)/image 01.png";
import img2 from "../imgs/LP de patins animada (Community)/image 02.png";
import img3 from "../imgs/LP de patins animada (Community)/image 03.png";
import img4 from "../imgs/LP de patins animada (Community)/image 04.png";

import person from "../imgs/LP de patins animada (Community)/person.png";

export function Gallery() {
  return (
    <section className="px-6  pt-6 md:pt-10 flex flex-col justify-center items-center">
      <header className=" flex flex-col justify-center items-center">
        <span>Galeria de fotos</span>
        <h2>#usesnitap por aí</h2>
      </header>
      <div
        id="Content"
        className="grid grid-cols-1 md:[grid-template-areas:'A_B_B'_'C_C_D'] md:grid-cols-3 gap-10"
      >
        <figure className="[grid-area:A] relative rounded-[2.5rem] overflow-hidden">
          <img
            src={img1}
            alt="Desc da img"
            className="w-full h-[25rem] object-cover  hover:scale-110 transition-transform duration-300 "
          />
          <figcaption className="flex items-center translate-y-0 justify-end absolute w-full bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent gap-2">
            <img
              src={person}
              alt="Foto de perfil"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className="text-white text-sm">@laviniapereira</span>
          </figcaption>
        </figure>

        {/* <figure className="[grid-area:B]">
          <img
            src={img2}
            alt="Desc da img"
            className="w-full h-[25rem] object-cover rounded-[2.5rem]"
          />
          <figcaption className="flex items-center ">
            <img src={person} alt="Foto de perfil" />
            <span>@laviniapereira</span>
          </figcaption>
        </figure>

        <figure className="[grid-area:C]">
          <img
            src={img3}
            alt="Desc da img"
            className="w-full h-[25rem] object-cover rounded-[2.5rem]"
          />
          <figcaption className="flex items-center ">
            <img src={person} alt="Foto de perfil" />
            <span>@laviniapereira</span>
          </figcaption>
        </figure>

        <figure className="[grid-area:D]">
          <img
            src={img4}
            alt="Desc da img"
            className="w-full h-[25rem] object-cover rounded-[2.5rem]"
          />
          <figcaption className="flex items-center ">
            <img src={person} alt="Foto de perfil" />
            <span>@laviniapereira</span>
          </figcaption>
        </figure> */}
      </div>
    </section>
  );
}
