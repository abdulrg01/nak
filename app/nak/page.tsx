import Home from "@/components/nak/Home";
import NakLandingPage from "@/components/nak/NakLandingPage";
import WelcomePage from "@/components/nak/WellcomePage";
// import NakProducts from "@/components/nak/NakProducts";
import { SparklesPreview } from "@/components/SparklesPreview";

export default function page() {
  return (
    <div>
      <Home />
      <WelcomePage />
      {/* <NakProducts /> */}
      <NakLandingPage />
      <SparklesPreview />
    </div>
  );
}
