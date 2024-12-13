// src/pages/Experiences.tsx

import React from "react";
import ListCard from "../components/List-Card/List-Card";
import Navbar from "../components/Navbar/Navbar";

const Experiences: React.FC = () => {
  const experiences = [
    {
      name: "Experience 1",
      image: "https://via.placeholder.com/150",
      desc: "Description of Experience 1.",
      tags: ["Java", "Spring Boot", "AWS"],
    },
    {
      name: "Experience 2",
      image: "https://via.placeholder.com/150",
      desc: "Description of Experience 2.",
      tags: ["Python", "Flask", "Docker"],
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start", // Align items to the top of the screen
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Navbar />
      {experiences.map((experience, index) => (
        <ListCard
          key={index}
          name={experience.name}
          image={experience.image}
          desc={experience.desc}
          tags={experience.tags}
        />
      ))}
    </div>
  );
};

export default Experiences;
