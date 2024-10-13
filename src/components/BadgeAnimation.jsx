import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { CONSTANTS } from "@/constants";
import { metadataPopup } from "@/metadata";

// Define metadata for the page
export const metadata = {
  title: metadataPopup.badge.title,
  description: metadataPopup.badge.description,
  keywords: metadataPopup.badge.keywords,
};

/**
 * BadgeAnimation Component
 *
 * This component handles the display and animation of a video badge.
 * It plays a video and triggers a modal when the video ends.
 *
 * Props:
 * - startAnimation (boolean): Controls whether the animation should start.
 * - setShowModal (function): Function to update modal visibility state.
 * - setStartAnimation (function): Function to update the animation state.
 *
 * Usage:
 * <BadgeAnimation
 *   startAnimation={true}
 *   setShowModal={setShowModalFunction}
 *   setStartAnimation={setStartAnimationFunction}
 * />
 *
 * Notes:
 * - The video is auto-played and muted for seamless animation.
 * - A subtitles track is included for accessibility.
 */
const BadgeAnimation = ({
  startAnimation,
  setShowModal,
  setStartAnimation,
}) => {
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  // Function to handle the end of the video
  const handleVideoEnd = () => {
    setShowModal(true);
    setIsVideoVisible(false);
    setStartAnimation(false);
  };

  useEffect(() => {
    if (startAnimation && isVideoVisible) {
      // Optional: You can perform actions when startAnimation changes
    }
  }, [startAnimation]);

  return (
    <div>
      {isVideoVisible && (
        <motion.div
          className="badge-animation"
          animate={{ scale: 1.2 }}
          transition={{ duration: 1, repeat: 1 }}
        >
          <video
            width="100%"
            height="100%"
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="video"
          >
            <source src="/videos/sample_animation.mp4" type="video/mp4" />
            <track
              src="/videos/sample_animation.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            {CONSTANTS.VIDEO_MESSAGE}
          </video>
        </motion.div>
      )}
    </div>
  );
};

// Prop types validation
BadgeAnimation.propTypes = {
  startAnimation: PropTypes.bool.isRequired, // Boolean to control animation start
  setShowModal: PropTypes.func.isRequired, // Function to show modal
  setStartAnimation: PropTypes.func.isRequired, // Function to set animation state
};

export default BadgeAnimation;
