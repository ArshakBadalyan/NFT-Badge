import React from "react";
import PropTypes from "prop-types";
import { CONSTANTS } from "../constants";
import Modal from "./Modal";
import Image from "next/image";
import { rewards } from "@/mockData";
import { metadataPopup } from "@/metadata";

// Define metadata for the page
export const metadata = {
  title: metadataPopup.compact.title,
  description: metadataPopup.compact.description,
  keywords: metadataPopup.compact.keywords,
};

/**
 * CompactCelebration Component
 *
 * Displays a celebration modal that showcases rewards information.
 *
 * Props:
 * - showModal (boolean): Controls the visibility of the modal.
 * - setShowModal (function): Function to update the modal visibility state.
 *
 * Usage:
 * <CompactCelebration
 *   showModal={isModalVisible}
 *   setShowModal={setModalVisibleFunction}
 * />
 *
 * Notes:
 * - The modal includes a close button and dynamic reward images based on the provided data.
 * - It utilizes a background image for visual appeal.
 */
const CompactCelebration = ({ showModal, setShowModal }) => {
  // Function to handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal
      showModal={showModal}
      image={
        'bg-[url("/images/modal_background.svg")] bg-cover bg-no-repeat bg-fixed bg-origin-border bg-center'
      }
    >
      <div className="flex flex-col items-center p-4 md:p-6">
        <div className="w-full flex justify-end">
          <button
            onClick={handleCloseModal}
            className="w-6 h-6 md:w-8 md:h-8 bg-no-repeat bg-cover bg-center bg-[url('/images/close.png')] hover:bg-opacity-80"
            aria-label="Close"
          />
        </div>

        <div className="relative flex flex-col items-center">
          <h1 className="font-bold font-inter text-xl sm:text-2xl text-[#F3BA2F] text-center">
            {CONSTANTS.MODAL_CONGRATULATIONS}
          </h1>
          <h2 className="font-medium text-lg sm:text-xl leading-6 text-center text-[#F3BA2F]">
            {CONSTANTS.MODAL_SUCCESS}
          </h2>
          <div className="flex flex-col items-center mt-4">
            <p className="text-base sm:text-lg text-center text-[#C8AA7A]">
              {CONSTANTS.MODAL_DESCRIPTION}
            </p>
            <p className="text-base sm:text-lg text-center text-[#C8AA7A]">
              {CONSTANTS.MODAL_GAINED}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center sm:gap-3 md:gap-5 mt-4">
            <Image
              src="/images/rewardLine1.png"
              alt="Reward line graphic"
              width={120}
              height={60}
              priority
              className="w-24 md:w-36"
            />
            <p className="mt-2 md:mt-0 font-semibold text-lg">
              {CONSTANTS.REWARDS}
            </p>
            <Image
              src="/images/rewardLine2.png"
              alt="Reward line graphic"
              width={120}
              height={60}
              priority
              className="w-24 md:w-36"
            />
          </div>

          <ul className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-5 mt-4 w-full">
            {/* Map through rewards and display each one */}
            {rewards.map((item, index) => (
              <li key={index} className="flex flex-col items-center">
                <Image
                  src={item.image}
                  alt={`Reward card showing ${item.value}`}
                  width={100}
                  height={100}
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

// Prop types validation
CompactCelebration.propTypes = {
  showModal: PropTypes.bool.isRequired, // Boolean to control modal visibility
  setShowModal: PropTypes.func.isRequired, // Function to set modal visibility state
};

export default CompactCelebration;
