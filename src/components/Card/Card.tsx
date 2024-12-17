import React, { useState, useEffect } from "react";
import "./Card.css";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaDownload,
} from "react-icons/fa";

interface IDCardProps {
  name: string;
  title: string;
  location: string;
  university: string;
  description: string;
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
  description,
  image,
  github,
  linkedin,
  stackoverflow,
}) => {
  const [role, company] = title.split(" @ ");
  const [transformStyle, setTransformStyle] = useState<string>(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)",
  );
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const card = event.currentTarget as HTMLElement;
    const { left, top, width, height } = card.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const deltaX = (mouseX - centerX) / width;
    const deltaY = (mouseY - centerY) / height;

    setTransformStyle(
      `perspective(1000px) rotateX(${deltaY * 10}deg) rotateY(${deltaX * -10}deg)`,
    );
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    if (!isHovering) {
      const timer = setTimeout(() => {
        setTransformStyle("perspective(1000px) rotateX(0deg) rotateY(0deg)");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isHovering]);

  return (
    <div
      className="card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
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
        <div className="description">{description}</div>
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
      </div>
      <div className="resume-button">
        <a href="docs/AryaanSheth_Resume.pdf" download>
          Resume <FaDownload />
        </a>
      </div>
    </div>
  );
};

export default IDCard;
