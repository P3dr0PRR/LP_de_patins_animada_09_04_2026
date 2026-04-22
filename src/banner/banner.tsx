import banner from "../assets/imgs/LP de patins animada (Community)/banner.svg";

export function Banner() {
  return (
    <section className=" overflow-hidden w-full">
      <div className="scroller w-full overflow-hidden py-[20px] md:py-[1rem] bg-gradient-animate animate-bg-gradient-animate">
        <div className="rolling  flex gap-[1.5rem] py-[2rem] animate-bannerSlide ">
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
          <img src={banner} alt="Banner" />
        </div>
      </div>
    </section>
  );
}
