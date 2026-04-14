import logo from "../assets/imgs/LP de patins animada (Community)/Logo.svg";
import bag from "../assets/imgs/LP de patins animada (Community)/shopping-bag-01.svg";

export function Header() {
  return (
    <nav className="flex justify-between items-center py-[12px] px-[32px]">
      <a href="#" className="">
        <img
          src={logo}
          title="Logo"
          className="w-[2rem] h-[2rem] transition-transform duration-300 hover:rotate-90"
        />
      </a>
      <a href="#" className="relative inline-block">
        <img
          src={bag}
          title="Shopping Bag"
          className="w-[2rem] h-[2rem] transition-transform duration-300 hover:-rotate-[30deg]"
        />
        <span className="absolute top-0 right-0 bg-snitap-sun rounded-full w-4 h-4 flex items-center justify-center font-Inter">
          1
        </span>
      </a>
    </nav>
  );
}
