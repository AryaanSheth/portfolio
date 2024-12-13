// src/pages/Experiences.tsx

import React from "react";
import ListCard from "../components/List-Card/List-Card";
import Navbar from "../components/Navbar/Navbar";

const Experiences: React.FC = () => {
  const experiences = [
    {
      name: "CollegeSouk",
      image:
        "https://play-lh.googleusercontent.com/aAXTaFLKQ0uIBV7TnXWF1LYCNy3cw5EyNF06H3hT548J09bLmYk-GU6fclnUwv3mBTgR=w240-h480",
      desc: "Full Stack Developer",
      tags: ["Java", "Spring Boot", "React", "MongoDB"],
      dateRange: "09/2022 - 04/2023",
    },
    {
      name: "ISED Canada",
      image:
        "https://media.licdn.com/dms/image/v2/C4D0BAQFgZi3KQ5BXAQ/company-logo_200_200/company-logo_200_200/0/1631313875611?e=2147483647&v=beta&t=UNShdFR0Z17J8BCI_SWf4vpMtwbMjM3JIFECN-BwT4o",
      desc: "Software Developer Intern",
      tags: ["Java", "Spring Boot", "AWS", "Python", "SQL"],
      dateRange: "05/2023 - 12/2023",
    },
    {
      name: "Sensor Tech Inc.",
      image:
        "https://media.licdn.com/dms/image/v2/C4D0BAQEGkg-dWbAhAQ/company-logo_200_200/company-logo_200_200/0/1631644299217/sensor_technology_ltd_canada_logo?e=2147483647&v=beta&t=Gu5S8b6g3XZocnnVeN5BYKH85dlXb3IWUOgXQUnqSy8",
      desc: "Software Engineer Intern",
      tags: ["Golang", "C#", "Azure", "Python", "Bash", "Nix", "Docker"],
      dateRange: "05/2024 - 12/2025",
    },
    {
      name: "Sun Life Financial",
      image:
        "https://www.sunlife.ca/content/dam/sunlife/regional/canada/images/cxo/logo_yellowbkgrd_bluelogo_1200x1200_E.jpg",
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
