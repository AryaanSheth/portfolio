import React from "react";
import "./List-Card.css";

interface ListCardProps {
  name: string;
  image: string;
  desc: string;
  tags: string[];
}

const ListCard: React.FC<ListCardProps> = ({ name, image, desc, tags }) => {
  return (
    <div className="list-card">
      <div className="list-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="list-card-content">
        <h3>{name}</h3>
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
