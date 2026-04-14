export function Hero() {
  return (
    <section className="flex justify-center items-center py-16 px-24 md:p-0 w-full bg-purple-300">
      <div>
        <h1 className="mr-2">
          Snitap, sua vida mais
          <span className=" overflow-hidden h-[1lh] inline-block w-max align-bottom">
            <span className="flex flex-col bg-red-200 animate-slide-words">
              <span className="text-snitap-sky-mid">Radical</span>
              <span className="text-snitap-joy-mid">Divertida</span>
              <span className="text-snitap-leaf-mid">Saudável</span>
              <span className="text-snitap-sky-mid">Radical</span>
            </span>
          </span>
        </h1>
      </div>
      {/* <div></div> */}
    </section>
  );
}
