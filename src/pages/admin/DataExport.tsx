
import { Button } from "@/components/ui/button";

export default function DataExport() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Data Export</h2>
      <p className="mb-4 text-muted-foreground">Export member or participation data as CSV. (Demo download below)</p>
      <Button variant="default" onClick={() => alert("CSV exported! (demo)")}>Export CSV</Button>
    </div>
  );
}
