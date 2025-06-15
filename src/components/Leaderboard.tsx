
const topVolunteers = [
  { name: "Alex J.", hours: 36 },
  { name: "Samira R.", hours: 28 },
  { name: "Rafael T.", hours: 21 },
];

const Leaderboard = () => (
  <section>
    <h2 className="text-xl font-semibold mb-3 text-primary">Leaderboard</h2>
    <div className="bg-white border rounded-xl shadow p-4 flex flex-col gap-3">
      <div className="font-medium text-xs text-muted-foreground">Top Volunteers (June)</div>
      <ol className="list-decimal pl-6">
        {topVolunteers.map((v, i) => (
          <li key={i} className="flex items-center gap-2 mb-1">
            <span className="font-semibold">{v.name}</span>
            <span className="ml-auto text-blue-700 font-bold">{v.hours}</span>
            <span className="text-xs ml-1 text-gray-400">hrs</span>
          </li>
        ))}
      </ol>
      <div className="border-t pt-3 flex flex-col gap-2">
        <span className="font-medium text-xs text-muted-foreground">Referral Program</span>
        <div className="flex items-center gap-2">
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs">3 New Referrals</span>
          <span className="text-xs text-gray-400">(Share your code!)</span>
        </div>
      </div>
    </div>
  </section>
);

export default Leaderboard;
