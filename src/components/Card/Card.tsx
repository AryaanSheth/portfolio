import React from "react";
import "./Card.css";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

interface IDCardProps {
  name: string;
  title: string;
  location: string;
  university: string;
  skills: string[];
  image: string;
  github: string;
  linkedin: string;
  stackoverflow: string;
}

const IDCard: React.FC<IDCardProps> = ({
  name,
  title,
  location,
  university,
  skills,
  image,
  github,
  linkedin,
  stackoverflow,
}) => {
  const [role, company] = title.split(" @ ");

  return (
    <div className="card">
      <div className="profile-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <div className="title">
          {role}
          {" @ "}
          <a
            href="https://www.sunlife.ca/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="sun-life-link"
          >
            {company}
          </a>
        </div>
        <div className="location">{location}</div>
        <div className="university">{university}</div>
        <div className="social-links">
          <a href={github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href={stackoverflow} target="_blank" rel="noopener noreferrer">
            <FaStackOverflow className="social-icon" />
          </a>
        </div>
        <div className="skills">
          {skills.map((skill, index) => (
            <span key={index}>{skill}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IDCard;
