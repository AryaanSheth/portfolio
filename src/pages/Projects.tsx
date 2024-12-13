// src/pages/Projects.tsx

import React from "react";
import ListCard from "../components/List-Card/List-Card";
import Navbar from "../components/Navbar/Navbar";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "gloq",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/58/Gleam_Lucy.png",
      desc: "Gleam wrapper for interfacing with GroqCloud LLM API",
      link: "https://hex.pm/packages/gloq",
      tags: ["Gleam", "AI/ML", "API"],
    },
    {
      name: "gopsd",
      image: "https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png",
      desc: "Blazingly Fast GPSD Client For Go",
      link: "https://pkg.go.dev/github.com/AryaanSheth/gopsd",
      tags: ["Golang", "Systemd", "Linux", "GPS"],
    },
    {
      name: "Lorenz Waterwheel Simulator",
      image:
        "https://homepages.math.uic.edu/~kjerland/Lorenz/butterflyblue.jpg",
      desc: "Computational model to demonstrate the chaos of the Lorenz equations and their deterministic properties",
      link: "https://github.com/AryaanSheth/Lorenz-Water-Wheel-Simulator",
      tags: ["C++", "Physics", "Simulation", "Scientific Computing"],
    },
    {
      name: "Phishman",
      image:
        "https://image.similarpng.com/very-thumbnail/2021/12/Python-programming-logo-on-transparent-background-PNG.png",
      desc: "Real-time phishing detection system for Discord servers",
      link: "https://github.com/AryaanSheth/phishman",
      tags: ["Python", "API", "Cyber Security"],
    },
    {
      name: "tAIket",
      image:
        "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/719/304/datas/gallery.jpg",
      desc: "AI Powered Project Management System for Businesses To Optimize Productivity",
      link: "https://devpost.com/software/placeholder-0hbrik",
      tags: ["Python", "NLP", "ML", "Redis"],
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
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;
