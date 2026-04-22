import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Banner } from "./banner/banner";
import { Gallery } from "./assets/gallery/gallery";

function App() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Header />
      <Hero />
      <Banner />
      <Gallery />
    </main>
  );
}

export default App;
