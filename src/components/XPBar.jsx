import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { metadataPopup } from '@/metadata';

// Define metadata for the page
export const metadata = {
  title: metadataPopup.XP_Bar.title,
  description: metadataPopup.XP_Bar.description,
  keywords: metadataPopup.XP_Bar.keywords,
};

/**
 * XPBar Component
 * 
 * Displays a progress bar representing the user's experience points (XP).
 * The bar visually indicates the current XP relative to a maximum XP value.
 * 
 * Props:
 * - xp (number): Current experience points that the user has.
 * - maxXp (number): Maximum experience points that can be achieved.
 * 
 * Usage:
 * <XPBar xp={currentXp} maxXp={maximumXp} />
 */
const XPBar = ({ xp, maxXp }) => {
  const xpPercentage = (xp / maxXp) * 100;

  return (
    <>
      <motion.div className="flex justify-between w-[100%]">
        <motion.div>
          XP: <span className="text-[#F08E3C]">{xp}</span>
        </motion.div>
        <motion.div>
          {maxXp}
        </motion.div>
      </motion.div>
      <motion.div className="w-full h-5 bg-gray-200 overflow-hidden !bg-[#35241C] border-4 border-[#2a1a11]">
        <motion.div
          className="h-full bg-[linear-gradient(to_bottom,yellow,red)]"
          initial={{ width: 0 }}
          animate={{ width: `${xpPercentage}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>
    </>
  );
};

// Prop types validation
XPBar.propTypes = {
  xp: PropTypes.number.isRequired, // Current experience points (required)
  maxXp: PropTypes.number.isRequired, // Maximum experience points (required)
};

export default XPBar;

