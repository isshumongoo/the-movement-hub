
import { useState } from "react";

const tiers = [
  {
    label: "General Member",
    benefits: [
      "Access to monthly newsletter",
      "Event & volunteer alerts",
      "TMS merchandise discounts (10%)",
    ],
    color: "border-blue-400 bg-blue-50",
  },
  {
    label: "Active Volunteer",
    benefits: [
      "Track volunteer hours & event impact",
      "Receive digital badges + leadership points",
      "Eligibility for Volunteer of the Month",
    ],
    color: "border-purple-400 bg-purple-50",
  },
  {
    label: "Leadership Cohort",
    benefits: [
      "Early access to Academy opportunities",
      "Digital certificate portfolio",
      "Access to planning toolkits and mentorships",
    ],
    color: "border-yellow-400 bg-yellow-50",
  },
];

const MemberTiers = ({ currentTier }: { currentTier: string }) => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section>
      <h2 className="text-xl font-semibold mb-3 text-primary">Membership Tiers & Benefits</h2>
      <div className="space-y-4">
        {tiers.map((tier, i) => (
          <div
            key={tier.label}
            className={`rounded-lg shadow border-l-8 ${tier.color} px-5 py-4 transition-all relative group`}
          >
            <button
              className="w-full flex items-center justify-between text-lg font-bold focus:outline-none"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`tier-details-${i}`}
            >
              <span>
                {tier.label}
                {currentTier === tier.label && (
                  <span className="ml-2 px-3 py-1 rounded-full text-xs bg-primary text-primary-foreground font-semibold">
                    Your Tier
                  </span>
                )}
              </span>
              <svg
                className={`ml-3 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            <div
              id={`tier-details-${i}`}
              className={`overflow-hidden transition-[max-height] duration-300 ${open === i ? "max-h-40" : "max-h-0"}`}
              aria-hidden={open !== i}
            >
              <ul className="pt-3 space-y-2">
                {tier.benefits.map((b, idx) => (
                  <li
                    key={idx}
                    className="pl-4 relative before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-primary before:rounded-full before:content-['']"
                  >
                    <span className="ml-3">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemberTiers;
