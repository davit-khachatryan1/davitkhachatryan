"use client";
import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import { testimonialsData } from "../../utils/constants";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const count = testimonialsData.length;

  useEffect(() => {
    if (count < 2) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [count, index]);

  if (count === 0) return null;

  return (
    <section id="testimonial" className="section section--dark">
      <div className="container">
        <SectionTitle backdrop="Testimonial" title="Client Speak" />
        <div className="testimonials">
          <div
            className="testimonials__track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonialsData.map((item, i) => (
              <figure
                className="testimonial"
                key={item.name}
                aria-hidden={i !== index}
              >
                <blockquote>&ldquo;{item.quote}&rdquo;</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          {count > 1 && (
            <div className="testimonials__dots">
              {testimonialsData.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === index}
                  className={i === index ? "active" : undefined}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
