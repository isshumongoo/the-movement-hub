
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const initialHours = [
  { name: "Maya Patel", chapter: "Flint", hours: 12, verified: false },
  { name: "Alex Johnson", chapter: "Detroit", hours: 20, verified: true },
];

export default function HoursVerification() {
  const [hoursData, setHoursData] = useState(initialHours);

  const handleMarkVerified = (idx: number) => {
    const updated = hoursData.map((entry, i) =>
      i === idx ? { ...entry, verified: true } : entry
    );
    setHoursData(updated);
    toast({
      title: "Success",
      description: `Hours verified for ${hoursData[idx].name}!`,
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Hours Verification</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Chapter</TableHead>
            <TableHead>Hours</TableHead>
            <TableHead>Status</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hoursData.map((entry, idx) => (
            <TableRow key={entry.name}>
              <TableCell>{entry.name}</TableCell>
              <TableCell>{entry.chapter}</TableCell>
              <TableCell>{entry.hours}</TableCell>
              <TableCell>
                {entry.verified ? (
                  <span className="text-green-600 font-medium">Verified</span>
                ) : (
                  <span className="text-yellow-500 font-medium">Pending</span>
                )}
              </TableCell>
              <TableCell>
                {!entry.verified && (
                  <Button
                    size="sm"
                    variant="default"
                    onClick={() => handleMarkVerified(idx)}
                  >
                    Mark Verified
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
