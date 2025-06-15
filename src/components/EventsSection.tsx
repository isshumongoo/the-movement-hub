
const events = [
  {
    date: "2025-06-20",
    title: "Community Clean-Up",
    chapter: "Detroit",
    type: "In-Person",
  },
  {
    date: "2025-06-25",
    title: "Virtual Leadership Workshop",
    chapter: "All Chapters",
    type: "Virtual",
  },
  {
    date: "2025-07-02",
    title: "Wellness Walk",
    chapter: "Flint",
    type: "In-Person",
  },
];

const EventsSection = () => (
  <section>
    <h2 className="text-xl font-semibold mb-3 text-primary">Upcoming Events</h2>
    <div className="flex flex-wrap gap-2 mb-2">
      <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-xs">In-Person</span>
      <span className="px-3 py-1 rounded-full bg-fuchsia-200 text-fuchsia-800 text-xs">Virtual</span>
      <span className="px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 text-xs">Chapter-Specific</span>
    </div>
    <ul className="space-y-3">
      {events.map((evt, i) => (
        <li
          key={i}
          className="flex items-center gap-4 bg-white border rounded-lg px-4 py-3 shadow hover:bg-blue-50 transition"
        >
          <span className="font-mono text-gray-500 min-w-[90px]">{evt.date}</span>
          <span className="font-semibold">{evt.title}</span>
          <span className={`ml-auto px-2 py-1 rounded text-xs font-bold ${
            evt.type === "Virtual"
              ? "bg-fuchsia-200 text-fuchsia-700"
              : "bg-blue-100 text-blue-700"
          }`}>
            {evt.type}
          </span>
          <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">{evt.chapter}</span>
          <button className="ml-4 px-4 py-1 text-white bg-primary rounded-lg hover:scale-105 transition">
            RSVP
          </button>
        </li>
      ))}
    </ul>
  </section>
);

export default EventsSection;
