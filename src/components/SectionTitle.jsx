const SectionTitle = ({ backdrop, title }) => (
  <div className="section-title">
    <span className="section-title__backdrop" aria-hidden="true">
      {backdrop}
    </span>
    <h2 className="section-title__heading">{title}</h2>
  </div>
);

export default SectionTitle;
