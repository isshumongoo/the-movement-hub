
// Stats data
const stats = [
  {
    label: "HOURS SERVED",
    value: "126",
  },
  {
    label: "BADGES EARNED",
    value: "8",
  },
  {
    label: "ACTIVE PROGRAMS",
    value: "3",
  },
];

const QuickStats = () => (
  <section className="w-full flex flex-col md:flex-row gap-6 justify-between bg-black rounded-2xl py-8 px-3 md:px-12 shadow-lg mb-8 animate-fade-in">
    {stats.map((s) => (
      <div
        key={s.label}
        className="flex-1 flex flex-col items-center justify-center text-center"
      >
        <div className="text-white text-5xl md:text-6xl font-black font-sans tracking-tight mb-1 drop-shadow-lg">{s.value}+</div>
        <div className="uppercase text-[#FF6200] text-lg font-bold tracking-widest font-sans">{s.label}</div>
      </div>
    ))}
  </section>
);

export default QuickStats;
