
import { useAuth } from "@/contexts/AuthContext";
import StickyCtaBar from "@/components/dashboard/StickyCtaBar";
import HeroBanner from "@/components/dashboard/HeroBanner";
import DashboardGrid from "@/components/dashboard/DashboardGrid";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center overflow-x-hidden">
      <StickyCtaBar />
      <HeroBanner />
      <DashboardGrid user={user} />
    </div>
  );
};

export default Dashboard;
