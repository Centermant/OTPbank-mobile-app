import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { BalanceCard } from "../components/BalanceCard";
import { QuickActions } from "../components/QuickActions";
import { GoalsSlider } from "../components/GoalsSlider";
import { RecommendationsSlider } from "../components/RecommendationsSlider";

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchBar />
      <BalanceCard />
      <QuickActions />
      <GoalsSlider />
      <RecommendationsSlider />
    </div>
  );
}
