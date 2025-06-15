
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

const Index = () => {
  // Placeholder member info
  const member = {
    name: "Alex Johnson",
    chapter: "Detroit",
    tier: "Active Volunteer",
    isLeadership: true, // set to true to show academy, false to hide
    isAdmin: false, // set to true to show admin panel
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-violet-50 to-white flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-7xl space-y-8">
        <WelcomeHeader name={member.name} chapter={member.chapter} />
        <QuickStats />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MemberTiers currentTier={member.tier} />
          <EventsSection />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormsSection />
          {member.isLeadership && <LeadershipAcademy />}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ImpactCenter chapter={member.chapter} />
          <Bulletin />
          <Leaderboard />
        </div>
        <div className="flex flex-col md:flex-row items-stretch gap-8">
          <AccountCard member={member} />
        </div>
      </div>
    </div>
  );
};

export default Index;

