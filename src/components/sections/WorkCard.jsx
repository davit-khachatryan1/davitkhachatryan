"use client";
import { Children, isValidElement, useId, useState } from "react";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";

const VISIBLE_ITEMS = 2;

// Descriptions are <><ul><li/>...</ul></> fragments; count the list items.
const countListItems = (node) => {
  if (Array.isArray(node)) return node.reduce((total, child) => total + countListItems(child), 0);
  if (!isValidElement(node)) return 0;
  if (node.type === "li") return 1;
  return Children.toArray(node.props.children).reduce(
    (total, child) => total + countListItems(child),
    0
  );
};

const WorkCard = ({ data }) => {
  const { company, designation, duration, companyImg, description, stacks = [] } = data;
  const [isExpanded, setIsExpanded] = useState(false);
  const descriptionId = useId();
  const hasMore = countListItems(description) > VISIBLE_ITEMS;
  const isCurrent = duration.toLowerCase().includes("present");

  return (
    <article className="resume-card">
      <div className="resume-card__header">
        <span className="resume-card__logo">
          {companyImg ? (
            <Image
              src={`/images/${companyImg}`}
              alt={`${company} logo`}
              width={48}
              height={48}
            />
          ) : (
            <span className="resume-card__initial" aria-hidden="true">
              {company.charAt(0)}
            </span>
          )}
        </span>
        <div>
          <span className={`badge ${isCurrent ? "badge--current" : ""}`}>{duration}</span>
          <h4 className="resume-card__title">{designation}</h4>
          <p className="resume-card__place">{company}</p>
        </div>
      </div>

      <div
        id={descriptionId}
        className={`resume-card__text ${hasMore && !isExpanded ? "is-collapsed" : ""}`}
      >
        {description}
      </div>

      {hasMore && (
        <button
          type="button"
          className={`link-button ${isExpanded ? "is-expanded" : ""}`}
          aria-expanded={isExpanded}
          aria-controls={descriptionId}
          onClick={() => setIsExpanded((expanded) => !expanded)}
        >
          {isExpanded ? "Show less" : "Show more"} <HiChevronDown />
        </button>
      )}

      {stacks.length > 0 && (
        <ul className="tags tags--small">
          {stacks.map((stack) => (
            <li className="tag" key={stack}>
              {stack}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default WorkCard;
