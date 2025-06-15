
const ImpactCenter = ({ chapter }: { chapter: string }) => (
  <section>
    <h2 className="text-xl font-semibold mb-3 text-primary">Impact Center</h2>
    <div className="bg-white border rounded-xl shadow p-4 flex flex-col gap-3">
      <div>
        <div className="font-medium text-sm text-muted-foreground mb-1">Your stats</div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-green-700 font-bold">126</span>
          <span className="text-gray-600 text-sm">hours served</span>
          <span className="text-yellow-700 font-bold">9</span>
          <span className="text-gray-600 text-sm">events attended</span>
          <span className="text-blue-700 font-bold">6</span>
          <span className="text-gray-600 text-sm">reflection entries</span>
        </div>
      </div>
      <div>
        <div className="font-medium text-sm text-muted-foreground mb-1">{chapter} Chapter</div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-bold text-fuchsia-700">520</span>
          <span className="text-gray-600 text-sm">hours served</span>
          <span className="font-bold text-yellow-700">112</span>
          <span className="text-gray-600 text-sm">badges</span>
          <span className="font-bold text-blue-800">23</span>
          <span className="text-gray-600 text-sm">top contributors</span>
        </div>
      </div>
      <button
        className="mt-2 px-4 py-1 bg-primary text-primary-foreground rounded shadow hover:scale-105 transition"
      >
        Download Service Transcript
      </button>
    </div>
  </section>
);

export default ImpactCenter;
