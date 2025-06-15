import { BookOpen, GraduationCap, Book, BookUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";

const modules = [
  {
    name: "Service",
    icon: GraduationCap,
    progress: 100,
    description: "Foster a spirit of service and hands-on leadership through projects and mentorship.",
    resources: [
      { name: "Service Handbook", url: "#" },
      { name: "Volunteer Guidelines", url: "#" },
    ],
    reflectionPrompt: "Describe a time you led a team in service and the impact you created.",
  },
  {
    name: "Strategy",
    icon: BookOpen,
    progress: 60,
    description: "Develop critical thinking, goal setting, and organizational strategy for chapter advancement.",
    resources: [
      { name: "Strategy Playbook", url: "#" },
      { name: "Planning Templates", url: "#" },
    ],
    reflectionPrompt: "What is one strategy that you would implement to improve your chapter?",
  },
  {
    name: "Social Impact",
    icon: BookUser,
    progress: 85,
    description: "Create positive social impact and community outreach through advocacy, events, and partnerships.",
    resources: [
      { name: "Impact Toolkit", url: "#" },
      { name: "Community Partners List", url: "#" },
    ],
    reflectionPrompt: "Describe a social impact initiative you admire and how you might adapt it.",
  },
  {
    name: "Storytelling",
    icon: Book,
    progress: 45,
    description: "Learn how to communicate vision, inspire others, and tell compelling stories as a leader.",
    resources: [
      { name: "Storytelling Guide", url: "#" },
      { name: "Public Speaking Tips", url: "#" },
    ],
    reflectionPrompt: "Share a leadership story from your own experience.",
  },
];

export default function LeadershipAcademyPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-yellow-50 via-violet-50 to-white px-2 py-8 flex justify-center">
      <div className="w-full max-w-3xl space-y-10">

        {/* Back to Portal Button */}
        <div className="flex justify-start">
          <button
            className="flex items-center gap-2 px-5 py-2 rounded-xl font-bold uppercase tracking-wide bg-[#FF6200] text-white shadow-lg hover:bg-[#ff8c42] transition animate-fade-in"
            onClick={() => navigate("/dashboard")}
          >
            ← Back to Portal
          </button>
        </div>

        {/* Header */}
        <div className="flex flex-col items-center text-center animate-fade-in">
          <GraduationCap size={44} className="text-yellow-700 mb-2" />
          <h1 className="text-3xl font-bold text-yellow-700 mb-1">TMS ASSEMBLY Academy & Events</h1>
          <p className="text-md text-gray-600 max-w-xl">
            Welcome! The Academy & Events space is open to <span className="font-semibold text-fuchsia-700">all TMS members</span> to discover and participate in transformative opportunities: leadership modules, seminars, skill-building workshops, community meetings, and conferences. Track your progress and access exclusive resources below!
          </p>
        </div>
        {/* Progress Overview */}
        <div className="bg-white border rounded-xl shadow-md p-5 animate-fade-in">
          <h2 className="text-lg font-semibold mb-4 flex gap-2 items-center text-fuchsia-700">
            <BookOpen className="text-fuchsia-700" size={20} />
            Your Leadership Modules Progress
          </h2>
          <div className="flex flex-col gap-5">
            {modules.map((mod) => (
              <div key={mod.name}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-base font-medium">
                    <mod.icon className="text-yellow-600" size={20}/>
                    <span>{mod.name}</span>
                  </div>
                  <span className="text-gray-500">{mod.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                  <div
                    className="h-2 rounded-full transition-all"
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
        </div>
        {/* Tabs: Modules, Resources, Submit Reflection, FAQs */}
        <Tabs defaultValue={modules[0].name}>
          <TabsList className="mb-3">
            {modules.map((mod) => (
              <TabsTrigger key={mod.name} value={mod.name}>
                {mod.name}
              </TabsTrigger>
            ))}
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
          </TabsList>
          {/* Module Details */}
          {modules.map((mod) => (
            <TabsContent key={mod.name} value={mod.name}>
              <div className="bg-white border rounded-lg shadow p-5 mb-4 animate-fade-in">
                <div className="flex items-center gap-2 mb-2">
                  <mod.icon className="text-fuchsia-700" size={20} />
                  <span className="font-semibold text-lg">{mod.name}</span>
                </div>
                <p className="mb-4 text-gray-700">{mod.description}</p>
                <div className="mb-2">
                  <h3 className="font-semibold mb-1">Resources:</h3>
                  <ul className="pl-4 list-disc space-y-1">
                    {mod.resources.map((r) => (
                      <li key={r.name}>
                        <a href={r.url} className="story-link text-blue-700" target="_blank" rel="noopener noreferrer">
                          {r.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold mb-1">Reflection Prompt:</h3>
                  <p className="mb-2 text-gray-600">{mod.reflectionPrompt}</p>
                  <Button className="bg-fuchsia-700" disabled>
                    Submit Reflection (Coming Soon)
                  </Button>
                </div>
              </div>
            </TabsContent>
          ))}
          {/* FAQs Tab */}
          <TabsContent value="faqs">
            <div className="bg-white border rounded-lg shadow p-5 animate-fade-in">
              <h3 className="font-semibold mb-3 flex items-center gap-1"><BookOpen className="text-yellow-700" size={18}/>Frequently Asked Questions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <span className="font-semibold">Who can access the Academy & Events?</span>
                  <br/>
                  All TMS members can participate in the Academy, seminars, workshops, community meetings, and conferences.
                </li>
                <li>
                  <span className="font-semibold">How is progress tracked?</span>
                  <br/>
                  Progress is tracked as you complete module activities and submit reflections (full tracking coming soon!).
                </li>
                <li>
                  <span className="font-semibold">Can I download materials?</span>
                  <br/>
                  Yes. All module guides and handbooks are downloadable.
                </li>
                <li>
                  <span className="font-semibold">Where do I submit reflections?</span>
                  <br/>
                  Reflection submissions will open soon. Stay tuned for email updates!
                </li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
        {/* Media Carousel (optional): Placeholder images */}
        <div className="bg-white border rounded-lg shadow p-5 mt-8 animate-fade-in">
          <h3 className="font-semibold mb-3">Academy Moments</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80"
              alt="Academy Session"
              className="rounded-lg h-36 object-cover w-full md:w-1/3"
            />
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&q=80"
              alt="Working Together"
              className="rounded-lg h-36 object-cover w-full md:w-1/3"
            />
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80"
              alt="Leadership Development"
              className="rounded-lg h-36 object-cover w-full md:w-1/3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
