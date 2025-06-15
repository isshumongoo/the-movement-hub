
import { useNavigate } from "react-router-dom";

const modules = [
  { name: "Service", progress: 100 },
  { name: "Strategy", progress: 60 },
  { name: "Social Impact", progress: 85 },
  { name: "Storytelling", progress: 45 },
];

const LeadershipAcademy = () => {
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="text-xl font-semibold mb-3 text-yellow-700 flex items-center gap-2">
        🎓 TMS ASSEMBLY Series
      </h2>
      <div className="bg-white border rounded-xl shadow-md p-4 mb-3">
        <div className="text-sm text-muted-foreground mb-2">
          For Leadership Cohort members. Track your modules below.
        </div>
        <div className="space-y-2">
          {modules.map((mod) => (
            <div key={mod.name}>
              <div className="flex justify-between text-sm font-medium mb-1">
                <span>{mod.name}</span>
                <span className="text-gray-500">{mod.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all`}
                  style={{
                    width: `${mod.progress}%`,
                    background:
                      mod.progress === 100
                        ? "linear-gradient(90deg,#D97706 50%,#F59E42 100%)"
                        : "linear-gradient(90deg,#6366f1 30%,#a21caf 85%)",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <button
            className="px-4 py-1 bg-fuchsia-600 text-white rounded shadow hover:scale-105 transition"
            onClick={() => window.open("https://tms.org/resource-library", "_blank")}
          >
            Resource Library
          </button>
          <button
            className="px-4 py-1 bg-blue-600 text-white rounded shadow hover:scale-105 transition"
            onClick={() => navigate("/leadership-academy")}
          >
            Explore Academy
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipAcademy;
