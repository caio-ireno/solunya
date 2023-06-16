import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Home } from "@/components/Home";
import { News } from "@/components/News";

export default function App() {
  return (
    <main className="w-full">
      <Home />
      <About />
      <Features />
      <News />
      <Footer />
    </main>
  );
}
