import Jobs from "@/components/Jobs";
import { Wpp } from "@/pages/_app";

import { About } from "../components/About";
import { Features } from "../components/Feature";
import { Footer } from "../components/Footer";
import { Home } from "../components/Home";
import { News } from "../components/New";

export default function App() {
  return (
    <main className="w-full">
      <Wpp />
      <Home />
      <Jobs />
      <About />
      <Features />
      <News />
      <Footer />
    </main>
  );
}
