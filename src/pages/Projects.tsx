import React, { useEffect } from "react";
import ListCard from "../components/List-Card/List-Card";
import Navbar from "../components/Navbar/Navbar";

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = "Projects – Aryaan Sheth";
    return () => { document.title = "Aryaan Sheth – DevOps & Software Engineer"; };
  }, []);
  const projects = [
    {
      name: "PromptLint",
      image: "/images/promptlint.png",
      desc: "LLM prompt linting for CLI & VS Code",
      link: "https://promptlint.dev",
      tags: ["Python", "CLI"],
    },
    {
      name: "HFT Arbitrage Bot",
      image: "/images/go.png",
      desc: "Real-time arbitrage simulation across exchanges",
      link: "https://github.com/AryaanSheth",
      tags: ["Go", "WebSockets"],
    },
    {
      name: "Flight Delay Prediction",
      image: "/images/python.png",
      desc: "ML pipeline for aviation delay severity",
      link: "https://github.com/AryaanSheth",
      tags: ["Python", "PyTorch"],
    },
    {
      name: "Beyonds Cloud",
      image: "https://avatars.githubusercontent.com/u/199815102?s=48&v=4",
      desc: "AI-augmented mapping",
      link: "https://beyonds.cloud",
      tags: ["GCP", "React"],
    },
    {
      name: "gopsd",
      image: "/images/go.png",
      desc: "GPSD client for Go",
      link: "https://pkg.go.dev/github.com/AryaanSheth/gopsd",
      tags: ["Go"],
    },
    {
      name: "gloq",
      image: "/images/gleam.png",
      desc: "Gleam wrapper for Groq API",
      link: "https://hex.pm/packages/gloq",
      tags: ["Gleam"],
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
