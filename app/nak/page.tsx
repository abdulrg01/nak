import Home from "@/components/nak/Home";
import NakLandingPage from "@/components/nak/NakLandingPage";
import WelcomePage from "@/components/nak/WellcomePage";

export default function page() {
  return (
    <div>
      <Home />
      <WelcomePage />
      <NakLandingPage />
    </div>
  );
}
