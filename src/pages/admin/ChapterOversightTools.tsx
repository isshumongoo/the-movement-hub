
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const mockChapters = [
  { name: "Detroit", leader: "Alex Johnson", members: 18 },
  { name: "DC", leader: "Jordan Smith", members: 11 },
  { name: "Flint", leader: "Maya Patel", members: 9 },
];

export default function ChapterOversightTools() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Chapter Oversight Tools</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Chapter</TableHead>
            <TableHead>Leader</TableHead>
            <TableHead>Members</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockChapters.map((chapter) => (
            <TableRow key={chapter.name}>
              <TableCell>{chapter.name}</TableCell>
              <TableCell>{chapter.leader}</TableCell>
              <TableCell>{chapter.members}</TableCell>
              <TableCell>
                <Button size="sm" variant="outline">Manage</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
