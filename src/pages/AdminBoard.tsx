
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

const AdminBoard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Protect against non-admins (in case route guard fails)
  if (!user?.isAdmin) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-violet-50 to-white flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl bg-white border rounded-2xl shadow-xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="text-primary" size={32} />
          <h1 className="text-2xl font-bold text-primary">Admin Board</h1>
        </div>
        <p className="text-muted-foreground mb-6">
          Welcome, <b>{user.name}</b>! This is your admin dashboard for The Movement Street.
        </p>
        <ul className="space-y-3 mb-8">
          <li>⬜️ Member Management (coming soon)</li>
          <li>⬜️ Hours Verification (coming soon)</li>
          <li>⬜️ Data Export (coming soon)</li>
          <li>⬜️ Google Forms Integration (coming soon)</li>
          <li>⬜️ Chapter Oversight Tools (coming soon)</li>
        </ul>
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
