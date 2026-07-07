import SectionHeading from "@/components/SectionHeading";

export const metadata = { title: "Work" };

type Experience = {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string[];
  link?: string;
};

const work: Experience[] = [

  {
    company: "Tiger Analytics",
    role: "Analyst Trainee",
    date: "2026/04 – Present (Chennai, India)",
    link: "https://tigeranalytics.com",
},

  {
    company: "Nyalazone",
    role: "Software Developer Intern",
    date: "Mar 2025 – Jul 2025",
    location: "Noida, India",
    link: "https://nyalazone.ai",
    description: [
      "Built a full-stack real-time chat system using Flask, Angular, WebSockets, Redis Pub/Sub, and PostgreSQL.",
      "Deployed an on-prem object storage cluster using MinIO and tuned erasure coding for high availability.",
    ],
  },
  {
    company: "Dalhousie University",
    role: "MITACS Globalink Research Intern",
    date: "Jun 2024 – Sep 2024",
    location: "Halifax, Canada",
    link: "https://www.mitacs.ca/our-programs/globalink-research-internship-students/",
    description: [
      "Worked on phylogenetic algorithms to analyze pathogen origins including COVID-19.",
      "Implemented a new data structure in C++ for the Phylogenetic Topographer project improving analysis performance.",
    ],
  },
];

export default function Work() {
  return (
    <div className="rise">
      <SectionHeading>work</SectionHeading>
      <div className="space-y-10">
        {work.map((job, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-lg font-semibold">
                <a
                  href={job.link}
                  target="_blank"
                  className="hover:text-accent transition-colors"
                >
                  {job.company}
                </a>
                <span className="text-faded font-normal">
                  {" "}
                  · {job.role}
                </span>
              </h3>
              <span className="shrink-0 font-mono text-xs text-faded">
                {job.date}
              </span>
            </div>

            <p className="font-mono text-xs text-faded mt-0.5">
              {job.location}
            </p>

            <ul className="mt-3 space-y-2 leading-relaxed">
              {job.description.map((line, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-accent select-none">–</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
