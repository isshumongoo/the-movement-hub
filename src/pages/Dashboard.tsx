
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
import { Settings } from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center overflow-x-hidden">
      {/* Sticky Top CTA Bar */}
      <div className="sticky top-0 z-50 w-full bg-[#FF6200] text-white text-center font-bold py-2 tracking-widest text-xs md:text-sm uppercase shadow animate-fade-in">
        Become a TMS Volunteer or Team Member!
      </div>
      {/* Hero Banner */}
      <div className="w-full relative flex items-center justify-center min-h-[300px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&q=80"
          alt="Volunteer hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="relative text-center py-16 md:py-28 z-10 w-full flex flex-col items-center">
          <h1 className="font-sans text-4xl md:text-6xl font-black text-white uppercase tracking-tight drop-shadow-lg mb-4 animate-fade-in">
            Ignite Change.
            <br className="hidden md:block"/>
            Join The Movement.
          </h1>
          <p className="max-w-xl mx-auto mb-6 text-lg md:text-2xl text-gray-100 font-semibold animate-fade-in">
            Hands-on service, real community. <span className="hidden sm:inline">Make your mark with The Movement Street.</span>
          </p>
          <a
            href="/signup"
            className="inline-block bg-[#FF6200] hover:bg-orange-600 transition text-white font-extrabold px-8 py-3 rounded-full uppercase tracking-widest shadow-lg text-lg animate-fade-in"
          >
            Start Volunteering
          </a>
        </div>
      </div>
      <div className="w-full max-w-7xl space-y-8 px-2 pt-10 md:pt-14">
        {/* Show Admin Board link only for admins */}
        {user.isAdmin && (
          <div className="mb-2 flex justify-end">
            <a
              href="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg border bg-[#FF6200] text-white border-orange-600 hover:bg-orange-700 shadow transition uppercase tracking-wide"
            >
              <Settings size={18} className="inline mb-[2px]" />
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
    </div>
  );
};

export default Dashboard;
