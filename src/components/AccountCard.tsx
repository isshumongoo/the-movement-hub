
import { LogOut, Settings, User } from "lucide-react";

const AccountCard = ({ member }: { member: { name: string; chapter: string; isAdmin: boolean } }) => (
  <section className="w-full md:w-1/2 max-w-xl mb-10">
    <div className="bg-white border rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-br from-indigo-500 to-fuchsia-500 rounded-full w-14 h-14 flex items-center justify-center text-white text-3xl">
          <User size={36} />
        </div>
        <div>
          <div className="font-bold text-lg">{member.name}</div>
          <div className="text-sm text-muted-foreground">{member.chapter} Chapter</div>
        </div>
      </div>
      <div className="flex gap-2">
        <button className="flex items-center gap-1 px-4 py-1 bg-blue-600 text-white rounded hover:scale-105 transition text-sm shadow">
          <Settings size={16} /> Settings
        </button>
        <button className="flex items-center gap-1 px-4 py-1 bg-gray-200 text-gray-800 rounded hover:scale-105 transition text-sm shadow">
          <LogOut size={16} /> Log out
        </button>
      </div>
    </div>
    {member.isAdmin && (
      <div className="mt-4 bg-yellow-50 border border-yellow-300 text-yellow-900 rounded-xl p-4 shadow flex items-center gap-3">
        <span className="font-bold">Admin Panel:</span>
        <span>
          Member management, hours verification, data export, and Google Forms integration dashboard coming soon!
        </span>
      </div>
    )}
    <div className="text-xs text-muted-foreground mt-4 italic text-center">
      "Innovate. Activate. Elevate."
    </div>
  </section>
);

export default AccountCard;
