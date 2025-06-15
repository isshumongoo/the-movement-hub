
import WelcomeHeader from "@/components/WelcomeHeader";
import QuickStats from "@/components/QuickStats";
import MemberTiers from "@/components/MemberTiers";
import EventsSection from "@/components/EventsSection";
import FormsSection from "@/components/FormsSection";
import LeadershipAcademy from "@/components/LeadershipAcademy";
import ImpactCenter from "@/components/ImpactCenter";
import Bulletin from "@/components/Bulletin";
import Leaderboard from "@/components/Leaderboard";
import AccountCard from "@/components/AccountCard";
import { useAuth } from "@/contexts/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-violet-50 to-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-7xl space-y-8">
        <WelcomeHeader name={user.name} chapter={user.chapter} />
        <QuickStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MemberTiers currentTier={user.tier} />
          <EventsSection />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormsSection />
          {user.isLeadership && <LeadershipAcademy />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactCenter chapter={user.chapter} />
          <Bulletin />
          <Leaderboard />
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <AccountCard member={user} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
