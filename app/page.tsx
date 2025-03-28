import HeroSection from "@/components/Home";
import { SparklesPreview } from "@/components/SparklesPreview";
import WelcomePage from "@/components/WellcomePage";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WelcomePage />
      <SparklesPreview />
    </div>
  );
}
