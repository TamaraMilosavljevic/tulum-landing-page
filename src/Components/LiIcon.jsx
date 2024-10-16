import {} from "@heroicons/react/24/solid";
import { SectionIcon } from "./SectionIcon";

// eslint-disable-next-line react/prop-types
export const LiIcon = ({ name, description, icon, leftAlign }) => {
  return (
    <div
      className={`w-full flex flex-col gap-4 ${
        leftAlign ? "items-end text-right justify-end" : "items-start"
      }`}
    >
      <div
        className={`flex flex-row items-center gap-4 ${
          leftAlign ? "flex-row-reverse justify-end" : ""
        }`}
      >
        <SectionIcon iconName={icon} />
        <h3
          style={{
            background:
              "linear-gradient(90deg, rgb(118,58,241), rgb(96,102,244))", // Your gradient here
            WebkitBackgroundClip: "text", // Clips the gradient to the text
            WebkitTextFillColor: "transparent",
          }}
        >
          {name}
        </h3>
      </div>
      <p className="max-w-3xl">{description}</p>
    </div>
  );
};
