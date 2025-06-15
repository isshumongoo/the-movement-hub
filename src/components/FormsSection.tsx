
const forms = [
  {
    label: "Volunteer Registration",
    url: "#",
    status: "Submitted",
  },
  {
    label: "Campus Chapter Launch Form",
    url: "#",
    status: "Under Review",
  },
  {
    label: "TMS Leadership Academy Application",
    url: "#",
    status: "Approved",
  },
];

const statusColor = {
  Submitted: "bg-blue-100 text-blue-800",
  "Under Review": "bg-yellow-100 text-yellow-800",
  Approved: "bg-green-100 text-green-800",
};

const FormsSection = () => (
  <section>
    <h2 className="text-xl font-semibold mb-3 text-primary">Forms & Applications</h2>
    <ul className="space-y-3">
      {forms.map((form, i) => (
        <li
          key={i}
          className="flex items-center bg-white border rounded-lg px-4 py-3 shadow hover:bg-purple-50 transition"
        >
          <span className="font-semibold">{form.label}</span>
          <span
            className={`ml-4 px-3 py-1 rounded-full text-xs font-semibold ${statusColor[form.status as keyof typeof statusColor]}`}
          >
            {form.status}
          </span>
          <a
            href={form.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-4 py-1 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition"
          >
            Open Form
          </a>
        </li>
      ))}
    </ul>
  </section>
);

export default FormsSection;
