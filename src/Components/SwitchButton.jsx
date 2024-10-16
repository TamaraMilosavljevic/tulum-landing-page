export const SwitchButton = ({ label, selected }) => {
  return (
    <div>
      <button
        className={`flex justify-center w-64 h-10 p-4 rounded-3xl box-border text-center items-center text-secondary ${
          selected ? "fill-primary opacity-100 w-4" : ""
        }`}
      >
        {label}
      </button>
    </div>
  );
};
