// eslint-disable-next-line react/prop-types
export const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="w-full flex flex-col gap-4 items-center max-w-3xl	">
      <h2 style={{ color: "var(--secondary)" }}>{heading}</h2>
      <p className="text-center">{subheading}</p>
    </div>
  );
};

//{heading}
//{subheading}
