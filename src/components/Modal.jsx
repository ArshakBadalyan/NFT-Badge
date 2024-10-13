import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { metadataPopup } from "@/metadata";

// Define metadata for the page
export const metadata = {
  title: metadataPopup.modal.title,
  description: metadataPopup.modal.description,
  keywords: metadataPopup.modal.keywords,
};

/**
 * Modal Component
 *
 * Displays a modal window with animation effects for showing content
 * and allows for easy closing. The modal can be customized with a
 * background image and animation styles.
 *
 * Props:
 * - children (node): The content to be displayed inside the modal.
 * - showModal (boolean): Controls the visibility of the modal.
 * - onClose (function): Function to be called when the modal is closed.
 * - image (string): Optional className for custom background image styles.
 *
 * Usage:
 * <Modal showModal={isModalVisible} onClose={handleClose} image="custom-image-class">
 *   <p>Your content here</p>
 * </Modal>
 */
const Modal = ({ children, showModal, onClose, image }) => {
  return (
    <>
      {showModal && (
        <motion.div
          className={`border-l-2 border-r-2 border-[#423520] rounded-xl p-6 w-11/12 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl shadow-lg ${image}`}
          onClick={(e) => {
            e.stopPropagation(), onClose;
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

// Prop types validation
Modal.propTypes = {
  children: PropTypes.node.isRequired, // Content to be displayed inside the modal
  showModal: PropTypes.bool.isRequired, // Boolean to control modal visibility
  onClose: PropTypes.func.isRequired, // Function to close the modal
  image: PropTypes.string, // Optional className for background image styles
};

export default Modal;
