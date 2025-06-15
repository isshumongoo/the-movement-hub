
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GoogleFormsIntegration() {
  const [formUrl, setFormUrl] = useState("");

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Google Forms Integration</h2>
      <form
        className="space-y-3"
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Linked Google Form: ${formUrl} (demo)`);
        }}
      >
        <input
          className="border rounded px-3 py-2 w-full"
          type="url"
          required
          placeholder="Paste Google Form URL here"
          value={formUrl}
          onChange={(e) => setFormUrl(e.target.value)}
        />
        <Button type="submit" variant="default">Link Form</Button>
      </form>
    </div>
  );
}
