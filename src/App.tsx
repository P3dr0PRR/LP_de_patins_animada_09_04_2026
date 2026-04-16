import { Header } from "./header/header";
import { Hero } from "./hero/hero";
import { Banner } from "./banner/banner";

function App() {
  return (
    <main className="min-h-screen bg-bg-base">
      <Header />
      <Hero />
      <Banner />
    </main>
  );
}

export default App;
