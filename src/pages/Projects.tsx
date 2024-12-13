// src/pages/Projects.tsx

import React from "react";
import ListCard from "../components/List-Card/List-Card";
import Navbar from "../components/Navbar/Navbar";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Project 1",
      image: "https://via.placeholder.com/150",
      desc: "Description of Project 1.",
      tags: ["React", "TypeScript", "CSS"],
    },
    {
      name: "Project 2",
      image: "https://via.placeholder.com/150",
      desc: "Description of Project 2.",
      tags: ["Node.js", "Express", "MongoDB"],
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
      {projects.map((project, index) => (
        <ListCard
          key={index}
          name={project.name}
          image={project.image}
          desc={project.desc}
          tags={project.tags}
        />
      ))}
    </div>
  );
};

export default Projects;
