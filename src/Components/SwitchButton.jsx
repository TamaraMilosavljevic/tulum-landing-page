import PropTypes from "prop-types";

export const SwitchButton = ({ label, selected, onClick }) => {
  return (
    <div>
      <div
        onClick={onClick}
        className={`flex flex-row justify-center w-64 h-10 p-4 rounded-3xl box-border text-center items-center text-secondary cursor-pointer ${
          selected ? "bg-primary " : ""
        }`}
      >
        {label}
      </div>
    </div>
  );
};

SwitchButton.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
