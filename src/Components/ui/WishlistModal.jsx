import Form from "@/Components/ui/Form";
import { useCallback, useState } from "react";
import Button from "@/Components/ui/Button";
import PropTypes from "prop-types";
import Modal from "@/Components/ui/Modal";

const WishlistModal = ({
  buttonCaption,
  onSubmit,
  title,
  subtitle,
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({});
  const handleFormChange = useCallback((data) => {
    setFormData(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      console.log("No form data to submit");
      return;
    }
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal title={title} subtitle={subtitle} isOpen={isOpen} onClose={onClose}>
      <Form onFormChange={handleFormChange} />
      <div className="flex justify-between items-center mt-16 mb-0">
        <form
          className="flex justify-between items-center mt-16 mb-0"
          onSubmit={handleSubmit}
        >
          <Button
            styleButton="text-[1.5rem] text-[#363636] text-opacity-20 py-[1rem] px-[2.75rem] rounded-[2rem] cursor-pointer"
            type="submit"
            isModal="yes"
          >
            {buttonCaption}
          </Button>
        </form>
        <Button
          styleButton="text-2xl py-[1rem] px-[2.75rem] text-[#363636] text-opacity-20 cursor-pointer"
          onClick={onClose}
          isModal="other"
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

WishlistModal.propTypes = {
  buttonCaption: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default WishlistModal;
