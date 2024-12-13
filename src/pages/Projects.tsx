// src/pages/Projects.tsx

import React from "react";
import ListCard from "../components/List-Card/List-Card";
import Navbar from "../components/Navbar/Navbar";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "gloq",
      image: "/images/gleam.png",
      desc: "Gleam wrapper for interfacing with GroqCloud LLM API",
      link: "https://hex.pm/packages/gloq",
      tags: ["Gleam", "AI/ML", "API"],
    },
    {
      name: "gopsd",
      image: "/images/go.png",
      desc: "Blazingly Fast GPSD Client For Go",
      link: "https://pkg.go.dev/github.com/AryaanSheth/gopsd",
      tags: ["Golang", "Systemd", "Linux", "GPS"],
    },
    {
      name: "Lorenz Waterwheel Simulator",
      image: "/images/lorenz.jpg",
      desc: "Computational model to demonstrate the chaos of the Lorenz equations and their deterministic properties",
      link: "https://github.com/AryaanSheth/Lorenz-Water-Wheel-Simulator",
      tags: ["C++", "Physics", "Simulation", "Scientific Computing"],
    },
    {
      name: "Phishman",
      image: "/images/python.png",
      desc: "Real-time phishing detection system for Discord servers",
      link: "https://github.com/AryaanSheth/phishman",
      tags: ["Python", "API", "Cyber Security"],
    },
    {
      name: "tAIket",
      image: "/images/taiket.jpg",
      desc: "AI Powered Project Management System for Businesses To Optimize Productivity",
      link: "https://devpost.com/software/placeholder-0hbrik",
      tags: ["Python", "NLP", "ML", "Redis"],
    },
  ];

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
      {projects.map((project, index) => (
        <ListCard
          key={index}
          name={project.name}
          image={project.image}
          desc={project.desc}
          tags={project.tags}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
