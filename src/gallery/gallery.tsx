import img1 from "../assets/imgs/LP de patins animada (Community)/image 01.png";
import img2 from "../assets/imgs/LP de patins animada (Community)/image 02.png";
import img3 from "../assets/imgs/LP de patins animada (Community)/image 03.png";
import img4 from "../assets/imgs/LP de patins animada (Community)/image 04.png";
import person from "../assets/imgs/LP de patins animada (Community)/person.png";

export function Gallery() {
  return (
    <section className="px-6 pt-6 md:pt-10 flex flex-col justify-center items-center space-y-6">
      <header className=" flex flex-col justify-center items-center">
        <span>Galeria de fotos</span>
        <h2>#usesnitap por aí</h2>
      </header>
      <div
        id="Content"
        className="grid grid-cols-1 md:[grid-template-areas:'A_B_B'_'C_C_D'] md:grid-cols-3 gap-6 md:gap-10"
      >
        <figure className="w-full md:[grid-area:A] relative rounded-[2.5rem] overflow-hidden group animate-image-appear [animation-fill-mode:both] [animation-timeline:view()] [animation-range:entry_40%_entry_100%]">
          <img
            src={img1}
            alt="Desc da img"
            className="w-full h-[18rem] md:h-[25rem] object-cover hover:scale-110 transition-transform duration-300"
          />
          <figcaption className="flex items-center justify-end absolute w-full bottom-0 p-6 bg-linear-to-t from-black/90 to-transparent gap-2 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500">
            <img
              src={person}
              alt="Foto de perfil"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className="text-white text-sm">@laviniapereira</span>
          </figcaption>
        </figure>

        <figure className="w-full md:[grid-area:B] relative rounded-[2.5rem] overflow-hidden group animate-image-appear [animation-fill-mode:both] [animation-timeline:view()] [animation-range:entry_40%_entry_100%]">
          <img
            src={img2}
            alt="Desc da img"
            className="w-full h-[18rem] md:h-[25rem] object-cover hover:scale-110 transition-transform duration-300 "
          />
          <figcaption className="flex items-center justify-end absolute w-full bottom-0 p-6 bg-linear-to-t from-black/90 to-transparent gap-2 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500">
            <img
              src={person}
              alt="Foto de perfil"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className="text-white text-sm">@laviniapereira</span>
          </figcaption>
        </figure>

        <figure className="w-full md:[grid-area:C] relative rounded-[2.5rem] overflow-hidden group animate-image-appear [animation-fill-mode:both] [animation-timeline:view()] [animation-range:entry_40%_entry_100%]">
          <img
            src={img3}
            alt="Desc da img"
            className="w-full h-[18rem] md:h-[25rem] object-cover  hover:scale-110 transition-transform duration-300 "
          />
          <figcaption className="flex items-center justify-end absolute w-full bottom-0 p-6 bg-linear-to-t from-black/90 to-transparent gap-2 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500">
            <img
              src={person}
              alt="Foto de perfil"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className="text-white text-sm">@laviniapereira</span>
          </figcaption>
        </figure>

        <figure className=" w-full md:[grid-area:D] relative rounded-[2.5rem] overflow-hidden group animate-image-appear [animation-fill-mode:both] [animation-timeline:view()] [animation-range:entry_40%_entry_100%]">
          <img
            src={img4}
            alt="Desc da img"
            className="w-full h-[18rem] md:h-[25rem] object-cover  hover:scale-110 transition-transform duration-300 "
          />
          <figcaption className="flex items-center justify-end absolute w-full bottom-0 p-6 bg-linear-to-t from-black/90 to-transparent gap-2 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500">
            <img
              src={person}
              alt="Foto de perfil"
              className="w-8 h-8 object-cover rounded-full"
            />
            <span className="text-white text-sm">@laviniapereira</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
