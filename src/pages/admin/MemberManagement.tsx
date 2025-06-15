
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const mockMembers = [
  { name: "Alex Johnson", email: "alex@tms.org", chapter: "Detroit", tier: "Active Volunteer", isLeadership: true },
  { name: "Jordan Smith", email: "admin@tms.org", chapter: "DC", tier: "Leadership Cohort", isLeadership: true },
  { name: "Maya Patel", email: "maya@tms.org", chapter: "Flint", tier: "General Member", isLeadership: false },
];

export default function MemberManagement() {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Member Management</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Chapter</TableHead>
            <TableHead>Tier</TableHead>
            <TableHead>Leadership</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockMembers.map((member) => (
            <TableRow key={member.email}>
              <TableCell>{member.name}</TableCell>
              <TableCell>{member.email}</TableCell>
              <TableCell>{member.chapter}</TableCell>
              <TableCell>{member.tier}</TableCell>
              <TableCell>{member.isLeadership ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button size="sm" variant="secondary">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
