const Pipeline = ({ steps }) => (
  <ol className="pipeline">
    {steps.map((step) => (
      <li className="pipeline__step" key={step}>
        {step}
      </li>
    ))}
  </ol>
);

export default Pipeline;
