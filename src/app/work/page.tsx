type Experience = {
  company: string;
  role: string;
  date: string;
  description: string[];
  link?: string;
};

const work: Experience[] = [
  {
    company: "Nyalazone",
    role: "Software Developer Intern",
    date: "2025/03 – 2025/07 (Noida, India)",
    link: "https://nyalazone.ai",
    description: [
      "Built a full-stack real-time chat system using Flask, Angular, WebSockets, Redis Pub/Sub, and PostgreSQL.",
      "Deployed an on-prem object storage cluster using MinIO and tuned erasure coding for high availability.",
    ],
  },
  {
    company: "Dalhousie University",
    role: "MITACS Globalink Research Intern",
    date: "2024/06 – 2024/09 (Halifax, Canada)",
    link: "https://www.mitacs.ca/our-programs/globalink-research-internship-students/",
    description: [
      "Worked on phylogenetic algorithms to analyze pathogen origins including COVID-19.",
      "Implemented a new data structure in C++ for the Phylogenetic Topographer project improving analysis performance.",
    ],
  },
];

export default function Work() {
  return (
    <>
      {work.map((job, i) => (
        <div key={i} className="space-y-4">
          {/* Company + Role */}
          <h2 className="text-xl font-semibold">
            <a
              href={job.link}
              className="underline decoration-red-200 underline-offset-4"
            >
              {job.company}
            </a>{" "}
            » {job.role}
          </h2>

          {/* Date */}
          <p className="italic text-neutral-600">{job.date}</p>

          {/* Description */}
          <div className="space-y-3 text-neutral-700 leading-relaxed">
            {job.description.map((line, j) => (
              <p key={j}>{line}</p>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
