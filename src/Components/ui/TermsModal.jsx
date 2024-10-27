import Modal from "./Modal";
import PropTypes from "prop-types";

const TermsModal = ({ isOpen, onClose }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Terms and Conditions"
        subtitle="By downloading or using the Tulum app, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, you must refrain from using the app. Tulum reserves the right to modify or update these terms at any time, with changes effective immediately upon posting in the app. It is your responsibility to review these terms regularly."
      >
        <ol>
          <li>
            1. Acceptance of Terms By downloading or using the Tulum app, you
            agree to be bound by these Terms and Conditions. If you do not agree
            to these terms, you must refrain from using the app. Tulum reserves
            the right to modify or update these terms at any time, with changes
            effective immediately upon posting in the app. It is your
            responsibility to review these terms regularly.
          </li>
          <li>
            2. Description of the Service Tulum is an app that allows users to
            discover and organize parties, purchase tickets using virtual
            currency (UICOINS), and host their own events. Users can also
            exchange UICOINS for specific services offered in the app. The app
            is meant for entertainment purposes only, and all activities within
            the app must comply with local laws and regulations.
          </li>
          <li>
            3. User Accounts To use the app, you may be required to create an
            account. You are responsible for safeguarding your login credentials
            and for any activity that occurs under your account. You must notify
            Tulum immediately of any unauthorized use
          </li>
        </ol>
        ... Show more
      </Modal>
    </div>
  );
};

export default TermsModal;

TermsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
