import logo from "../assets/imgs/LP de patins animada (Community)/Logo.svg";
import instagram from "../assets/imgs/LP de patins animada (Community)/mdi_instagram.svg";
import facebook from "../assets/imgs/LP de patins animada (Community)/ic_baseline-facebook.svg";
import youtube from "../assets/imgs/LP de patins animada (Community)/mdi_youtube.svg";
import tiktok from "../assets/imgs/LP de patins animada (Community)/ic_baseline-tiktok.svg";

export function Footer() {
  return (
    <section className="flex flex-col items-center mb-4">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 px-8 py-16 md:p-10 w-full ">
        <div className="flex gap-3 items-center">
          <a href="#">
            <img
              src={logo}
              title="Logo"
              className="w-[2rem] h-[2rem] transition-transform duration-300 hover:rotate-90"
            />
          </a>
          <h3>Snitap</h3>
        </div>

        <nav className="flex items-center flex-col md:flex-row gap-6 md:gap-10">
          <a
            href="#"
            className="button-label relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-snitap-sky-mid after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-all after:duration-300"
          >
            Sobre
          </a>
          <a
            href="#"
            className="button-label relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-snitap-sky-mid after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-all after:duration-300"
          >
            Nossas lojas
          </a>
          <a
            href="#"
            className="button-label relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-snitap-sky-mid after:scale-x-0 hover:after:scale-x-100 after:origin-center after:transition-all after:duration-300"
          >
            Política de privacidade
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="relative p-2 after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-0 hover:after:scale-100 after:origin-center after:bg-snitap-sun after:transition-all after:duration-300"
          >
            <img src={instagram} alt="Instagram" className="relative z-10" />
          </a>
          <a
            href="#"
            className="relative p-2 after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-0 hover:after:scale-100 after:origin-center after:bg-snitap-sun after:transition-all after:duration-300"
          >
            <img src={facebook} alt="Facebook" className="relative z-10" />
          </a>
          <a
            href="#"
            className="relative p-2 after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-0 hover:after:scale-100 after:origin-center after:bg-snitap-sun after:transition-all after:duration-300"
          >
            <img src={youtube} alt="YouTube" className="relative z-10" />
          </a>
          <a
            href="#"
            className="relative p-2 after:content-[''] after:absolute after:inset-0 after:rounded-full after:scale-0 hover:after:scale-100 after:origin-center after:bg-snitap-sun after:transition-all after:duration-300"
          >
            <img src={tiktok} alt="TikTok" className="relative z-10" />
          </a>
        </div>
      </div>
      <h3 className="text-center">
        Desenvolvido por Pedro Paulo <br></br>em 2026
      </h3>
    </section>
  );
}
