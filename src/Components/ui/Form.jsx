import { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

const Form = memo(({ onFormChange }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
  };

  useEffect(() => {
    const formData = { name, email };
    onFormChange(formData);
  }, [name, email, onFormChange]);

  return (
    <div className="flex flex-col gap-4 w-full">
      <input
        className="bg-[var(--secondary)] text-2xl text-gray-500 rounded-xl p-4"
        placeholder="Full Name"
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        className="bg-[var(--secondary)] text-2xl text-gray-500 rounded-xl p-4"
        placeholder="Email"
        type="text"
        name="email"
        value={email}
        onChange={handleChange}
      />
    </div>
  );
});

Form.displayName = "Form";

Form.propTypes = {
  onFormChange: PropTypes.func.isRequired,
};

export default Form;
