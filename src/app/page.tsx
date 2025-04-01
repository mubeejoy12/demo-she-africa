import ContentSection from "./components/ContentSection";
import { Hero } from "./components/Hero";
import ImpactSection from "./components/ImpactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ContentSection />
      <ImpactSection/>
    </main>
  );
}
