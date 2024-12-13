// src/pages/Experiences.tsx

import React from "react";
import ListCard from "../components/List-Card/List-Card";
import Navbar from "../components/Navbar/Navbar";

const Experiences: React.FC = () => {
  const experiences = [
    {
      name: "CollegeSouk",
      image: "/images/souk.png",
      desc: "Full Stack Developer",
      tags: ["Java", "Spring Boot", "React", "MongoDB"],
      dateRange: "09/2022 - 04/2023",
    },
    {
      name: "ISED Canada",
      image: "/images/ised.jpg",
      desc: "Software Developer Intern",
      tags: ["Java", "Spring Boot", "AWS", "Python", "SQL"],
      dateRange: "05/2023 - 12/2023",
    },
    {
      name: "Sensor Tech Inc.",
      image: "/images/stl.jpg",
      desc: "Software Engineer Intern",
      tags: ["Golang", "C#", "Azure", "Python", "Bash", "Nix", "Docker"],
      dateRange: "05/2024 - 12/2025",
    },
    {
      name: "Sun Life Financial",
      image: "/images/sl.jpg",
      desc: "Cloud Analyst Intern",
      tags: [],
      dateRange: "1/2025 - 4/2025",
    },
  ];

  const parseDate = (dateStr: string) => {
    const [month, year] = dateStr.split("/");
    return new Date(`${year}-${month}-01`);
  };

  const sortedExperiences = [...experiences].sort((a, b) => {
    const aStartDate = parseDate(a.dateRange.split(" - ")[0]);
    const bStartDate = parseDate(b.dateRange.split(" - ")[0]);
    return bStartDate.getTime() - aStartDate.getTime();
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
          key={index}
          name={experience.name}
          image={experience.image}
          desc={experience.desc}
          tags={experience.tags}
          dateRange={experience.dateRange}
        />
      ))}
    </div>
  );
};

export default Experiences;
