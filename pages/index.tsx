import NavBar from "@/components/home/NavBar";
import { TextSection, AboutSection } from "@/components/home/middleSection";
export default function Home() {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(112, 172, 242, 0.6) 100%)",
      }}
    >
      <NavBar />
      <TextSection />
      <AboutSection />
    </div>
  );
}
