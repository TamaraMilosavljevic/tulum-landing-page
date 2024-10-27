import { SwitchButton } from "./SwitchButton";
import { BUTTON_SWITCH_TYPES } from "./Benefits";

export const SwitchElement = ({ selectedItem, onChange }) => {
  return (
    <div
      style={{ backgroundColor: "var(--soft-primary)" }}
      className="flex flex-row h-50 px-1 py-2 box-border rounded-3xl"
    >
      <div className="flex flex-row">
        {Object.values(BUTTON_SWITCH_TYPES).map((item) => (
          <SwitchButton
            key={item}
            selected={item === selectedItem}
            onClick={() => onChange(item)}
            label={item}
          />
        ))}
      </div>
    </div>
  );
};
