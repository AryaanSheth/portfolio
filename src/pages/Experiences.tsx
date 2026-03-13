import React from "react";
import ListCard from "../components/List-Card/List-Card";
import Navbar from "../components/Navbar/Navbar";

interface Experience {
  name: string;
  image: string;
  desc: string;
  tags: string[];
  dateRange: string;
  link?: string;
  location?: string;
}

const Experiences: React.FC = () => {
  React.useEffect(() => {
    document.title = "Experience – Aryaan Sheth";
  }, []);
  const experiences: Experience[] = [
    {
      name: "PromptLint",
      image: "/images/promptlint.png",
      desc: "Founder · LLM prompt linting CLI & VS Code extension",
      tags: ["Python", "CLI"],
      dateRange: "Feb 2026 – Present",
      link: "https://promptlint.dev",
    },
    {
      name: "Sun Life Financial",
      image: "/images/sl.jpg",
      desc: "DevOps Intern · OPA & Terraform policy automation",
      tags: ["Terraform", "AWS"],
      dateRange: "May 2025 – Aug 2025",
      location: "Toronto",
    },
    {
      name: "Sun Life Financial",
      image: "/images/sl.jpg",
      desc: "Cloud Analyst · AWS monitoring & cost automation",
      tags: ["AWS", "Lambda"],
      dateRange: "Jan 2025 – Apr 2025",
      location: "Waterloo",
    },
    {
      name: "Sensor Technology Ltd",
      image: "/images/stl.jpg",
      desc: "Software Intern · C# hardware interfacing & Azure",
      tags: ["C#", "Azure"],
      dateRange: "May 2024 – Dec 2024",
      location: "Collingwood",
    },
    {
      name: "ISED Canada",
      image: "/images/ised.jpg",
      desc: "Software Intern · AWS migrations & ML pipelines",
      tags: ["AWS", "SageMaker"],
      dateRange: "May 2023 – Dec 2023",
      location: "Ottawa",
    },
  ];

  const parseDate = (dateStr: string) => {
    const part = dateStr.split(" – ")[0] || dateStr.split(" - ")[0];
    const monthMap: Record<string, string> = {
      Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
      Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
    };
    const [month, year] = part.split(" ");
    return new Date(`${year}-${monthMap[month] || "01"}-01`);
  };

  const sortedExperiences = [...experiences].sort((a, b) => {
    try {
      const aStart = parseDate(a.dateRange);
      const bStart = parseDate(b.dateRange);
      return bStart.getTime() - aStart.getTime();
    } catch {
      return 0;
    }
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
      {sortedExperiences.map((experience, index) => (
        <ListCard
          key={`${experience.name}-${experience.dateRange}-${index}`}
          name={experience.name}
          image={experience.image}
          desc={experience.desc}
          tags={experience.tags}
          dateRange={experience.dateRange}
          link={experience.link}
          location={experience.location}
        />
      ))}
    </div>
  );
};

export default Experiences;
