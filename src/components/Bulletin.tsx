
const shoutouts = [
  {
    name: "Jordan P. (DC)",
    text: "Led the Neighborhood Food Drive—Thank you!",
  },
  {
    name: "Sasha K. (Flint)",
    text: "Designed our beautiful new newsletter.",
  },
];

const Bulletin = () => (
  <section>
    <h2 className="text-xl font-semibold mb-3 text-primary">Community Bulletin</h2>
    <div className="bg-white border rounded-xl shadow p-4 flex flex-col gap-4">
      <div>
        <div className="font-semibold text-sm mb-1 text-fuchsia-700">Member Shoutouts</div>
        <ul className="space-y-1">
          {shoutouts.map((s, i) => (
            <li key={i} className="pl-2 border-l-4 border-fuchsia-400">
              <span className="font-bold">{s.name}</span>: {s.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t pt-3">
        <div className="font-semibold text-sm mb-1 text-blue-700">Monthly Challenge</div>
        <p className="mb-1">🏆{" "}Submit your story for a chance to be featured in July!</p>
        <button className="bg-fuchsia-500 text-white px-4 py-1 rounded hover:scale-105 transition">Submit Announcement</button>
      </div>
      <div className="border-t pt-3">
        <div className="font-semibold text-sm mb-1 text-yellow-700">Chapter Spotlight</div>
        <p className="mb-1">Detroit hosted a Wellness Walk—90+ members joined!</p>
      </div>
    </div>
  </section>
);

export default Bulletin;
