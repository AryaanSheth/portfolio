import React from "react";
import "./List-Card.css";

interface ListCardProps {
  name: string;
  image: string;
  desc: string;
  tags: string[];
  link?: string;
  dateRange?: string; // Optional date range (e.g., "01/2023 - 06/2023")
}

const ListCard: React.FC<ListCardProps> = ({
  name,
  image,
  desc,
  tags,
  link,
  dateRange,
}) => {
  return (
    <div className="list-card">
      <div className="list-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="list-card-content">
        <div className="title-and-date">
          {link ? (
            <h3>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </h3>
          ) : (
            <h3>{name}</h3>
          )}
          {dateRange && <span className="date-range">{dateRange}</span>}
        </div>
        <p>{desc}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListCard;
