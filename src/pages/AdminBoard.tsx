
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings, Users, CheckSquare, Download, FileText, MapPinned } from "lucide-react";
// Import all admin tools
import MemberManagement from "./admin/MemberManagement";
import HoursVerification from "./admin/HoursVerification";
import DataExport from "./admin/DataExport";
import GoogleFormsIntegration from "./admin/GoogleFormsIntegration";
import ChapterOversightTools from "./admin/ChapterOversightTools";

const TABS = [
  { id: "member", label: "Member Management", icon: Users },
  { id: "hours", label: "Hours Verification", icon: CheckSquare },
  { id: "export", label: "Data Export", icon: Download },
  { id: "forms", label: "Google Forms Integration", icon: FileText },
  { id: "chapters", label: "Chapter Oversight", icon: MapPinned },
];

const AdminBoard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState("member");

  // Protect against non-admins (in case route guard fails)
  if (!user?.isAdmin) {
    navigate("/");
    return null;
  }

  function renderTabContent() {
    switch (tab) {
      case "member":
        return <MemberManagement />;
      case "hours":
        return <HoursVerification />;
      case "export":
        return <DataExport />;
      case "forms":
        return <GoogleFormsIntegration />;
      case "chapters":
        return <ChapterOversightTools />;
      default:
        return null;
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white border rounded-2xl shadow-xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="text-primary" size={32} />
          <h1 className="text-2xl font-bold text-primary">Admin Board</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-8 border-b pb-2 md:pb-3">
          {TABS.map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant={tab === id ? "default" : "outline"}
              size="sm"
              className="flex items-center gap-2"
              onClick={() => setTab(id)}
            >
              <Icon size={16} className="mb-[1px]" />
              {label}
            </Button>
          ))}
        </div>
        <div className="mb-8 animate-fade-in">
          {renderTabContent()}
        </div>
        <div className="flex gap-3">
          <Link to="/dashboard">
            <Button variant="outline">← Back to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminBoard;
