import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Banner } from "./banner/banner";
import { Gallery } from "./gallery/gallery";
import { Footer } from "./footer/footer";

function App() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Header />
      <Hero />
      <Banner />
      <Gallery />
      <Footer />
    </main>
  );
}

export default App;
