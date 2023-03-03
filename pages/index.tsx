import NavBar from "@/components/home/NavBar";
import { TextSection, AboutSection } from "@/components/home/middleSection";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="mx-[40px]">
        <TextSection />
        <AboutSection />
      </div>
    </div>
  );
}
