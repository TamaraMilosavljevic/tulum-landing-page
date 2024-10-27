import { forwardRef } from "react";

const Button = forwardRef(function Button(
  { isModal, styleButton, onClick, children, type },
  ref
) {
  return (
    <button
      className={styleButton}
      type={type}
      style={{
        backgroundColor:
          isModal === "no"
            ? "var(--secondary)"
            : isModal === "yes"
            ? "var(--primary)"
            : "transparent",
        color:
          isModal === "no"
            ? "white"
            : isModal === "yes"
            ? "var(--secondary),30%"
            : "var(--secondary),30%",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
});
export default Button;
