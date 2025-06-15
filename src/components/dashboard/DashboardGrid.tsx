
import QuickStats from "@/components/QuickStats";
import MemberTiers from "@/components/MemberTiers";
import EventsSection from "@/components/EventsSection";
import FormsSection from "@/components/FormsSection";
import LeadershipAcademy from "@/components/LeadershipAcademy";
import ImpactCenter from "@/components/ImpactCenter";
import Bulletin from "@/components/Bulletin";
import Leaderboard from "@/components/Leaderboard";
import AccountCard from "@/components/AccountCard";

interface DashboardGridProps {
  user: any;
}

const DashboardGrid = ({ user }: DashboardGridProps) => (
  <div className="w-full max-w-7xl space-y-8 px-2 pt-10 md:pt-14">
    {/* Show Admin Board link only for admins */}
    {user.isAdmin && (
      <div className="mb-2 flex justify-end">
        <a
          href="/admin"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg border bg-[#FF6200] text-white border-orange-600 hover:bg-orange-700 shadow transition uppercase tracking-wide"
        >
          <svg width={18} height={18} className="inline mb-[2px]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><circle cx="19.4" cy="15.6" r="1.5" /><circle cx="4.6" cy="15.6" r="1.5" /><circle cx="12" cy="4.6" r="1.5" /><path d="M12 2v2.6"/><path d="M19.4 8.4l-1.8 1"/><path d="M21.353 12h-2.603"/><path d="M15.6 19.4l-1-1.8"/><path d="M8.4 19.4l1-1.8"/><path d="M2.647 12h2.603"/><path d="M4.6 8.4l1.8 1"/></svg>
          Admin Board
        </a>
      </div>
    )}
    {/* QuickStats: White-on-black impact metrics */}
    <QuickStats />
    {/* Stacked white rounded cards as sections */}
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
);

export default DashboardGrid;
