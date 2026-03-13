import React, { useState, useEffect } from "react";
import "./Card.css";
import { FaGithub, FaLinkedin, FaDownload, FaEnvelope, FaGlobe } from "react-icons/fa";

interface IDCardProps {
  name: string;
  title: string;
  companyLink?: string;
  location: string;
  university: string;
  graduationDate?: string;
  description: string;
  image: string;
  github: string;
  linkedin: string;
  website?: string;
  email?: string;
}

const IDCard: React.FC<IDCardProps> = ({
  name,
  title,
  companyLink,
  location,
  university,
  graduationDate,
  description,
  image,
  github,
  linkedin,
  website,
  email,
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

  const educationLine = graduationDate
    ? `${university} · ${graduationDate}`
    : university;

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
          {companyLink ? (
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="company-link"
            >
              {company}
            </a>
          ) : (
            <span>{company}</span>
          )}
        </div>
        <div className="location">{location}</div>
        <div className="education-line">{educationLine}</div>
        <div className="description">{description}</div>
        <div className="links-row">
          <a href={github} target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub className="social-icon" />
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin className="social-icon" />
          </a>
          {website && (
            <a
              href={website.startsWith("http") ? website : `https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              title={website}
            >
              <FaGlobe className="social-icon" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} title={email}>
              <FaEnvelope className="social-icon" />
            </a>
          )}
        </div>
        <div className="action-links">
          <a href="https://aryaansheth.github.io/resume/" download>
            Resume <FaDownload />
          </a>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
