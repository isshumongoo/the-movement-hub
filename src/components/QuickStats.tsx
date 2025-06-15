
const stats = [
  {
    label: "Hours Served",
    value: 126,
    icon: "⏰",
    color: "bg-blue-100 text-blue-700",
  },
  {
    label: "Badges Earned",
    value: 8,
    icon: "🏅",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    label: "Active Programs",
    value: 3,
    icon: "📅",
    color: "bg-fuchsia-100 text-fuchsia-700",
  },
];

const QuickStats = () => (
  <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
    {stats.map((s) => (
      <div
        key={s.label}
        className={`flex flex-col items-center justify-center bg-white/95 border rounded-xl shadow-md py-6 hover:shadow-lg hover:-translate-y-1 transition ${s.color}`}
      >
        <span className="text-3xl md:text-4xl mb-2">{s.icon}</span>
        <div className="text-2xl font-bold">{s.value}</div>
        <div className="text-sm font-medium mt-1">{s.label}</div>
      </div>
    ))}
  </section>
);

export default QuickStats;
