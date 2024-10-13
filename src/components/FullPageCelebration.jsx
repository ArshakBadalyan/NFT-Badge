import React, { useState, useEffect, useCallback } from 'react';
import XPBar from './XPBar';
import { CONSTANTS } from '../constants';
import PropTypes from 'prop-types';
import '../styles/celebration.css';
import { metadataPopup } from '@/metadata';

// Define metadata for the page
export const metadata = {
  title: metadataPopup.fullPage.title,
  description: metadataPopup.fullPage.description,
  keywords: metadataPopup.fullPage.keywords,
};

/**
 * FullPageCelebration Component
 * 
 * Displays a full-page celebration screen when the user levels up.
 * The component features a visual XP bar and dynamic content
 * that updates based on user interaction.
 * 
 * Props:
 * - setStartAnimation (function): Function to trigger the start of an animation when the XP bar is full.
 * 
 * Usage:
 * <FullPageCelebration setStartAnimation={setStartAnimationFunction} />
 * 
 * Notes:
 * - The component uses a button to simulate XP gain, which animates the XP bar.
 * - Background and visual elements are customizable via the styles.
 */
const FullPageCelebration = ({ setStartAnimation }) => {
  const [xp, setXp] = useState(0); 
  const maxXp = CONSTANTS.MAX_BAR;

  // Function to handle button click and simulate XP gain
  const handleClick = useCallback(() => {
    setXp(0);

    let currentXp = 0;
    const interval = setInterval(() => {
      currentXp += 1000;
      if (currentXp >= maxXp) {
        clearInterval(interval); 
        setXp(maxXp);
      } else {
        setXp(currentXp);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [maxXp]);

  // Effect to trigger animation when XP reaches maximum
  useEffect(() => {
    if (xp === maxXp) {
      setStartAnimation(true);
    }
  }, [xp, setStartAnimation, maxXp]);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center"
      style={{
        backgroundImage: 'url(/images/background_image.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col items-center gap-6 p-4 md:gap-6 md:mt-10">
        <div className="flex flex-col items-center gap-4 md:mb-10">
          <h1 className="font-bold font-inter drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] shadow-custom text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold leading-[3rem] text-[#FFF4C0] text-center bg-gradient-to-br from-[#FFF4C0] to-[#FFE02E] bg-clip-text text-transparent">
            {CONSTANTS.LEVEL_UP}
          </h1>
          <img src="/images/badge.png" alt="Badge" className="max-w-[150px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[500px] mb-4" />
        </div>

        <div className='flex flex-col content-center items-center gap-2'>
          <h2 className="font-bold text-[1.5rem] sm:text-[2rem] md:text-[3rem] text-[#291911] text-center">{CONSTANTS.CORPORAL}</h2>
          <div className="flex flex-col space-y-1 w-[60%] md:w-[60%]">
            <XPBar xp={xp} maxXp={maxXp} />
          </div>
          <button
            onClick={handleClick}
            className="text-black py-2 m-4 px-4 rounded max-w-xl mx-auto text-base border border-[#35241C] bg-[linear-gradient(180deg,#FFFFFF_0%,#F7C891_8.5%,#F3AC59_12.75%,#EC6615_77%,#944617_100%)]"
          >
            {CONSTANTS.CLAIM_BUTTON}
          </button>
          <div className='flex flex-col gap-4'>
            <div className="flex flex-col items-center text-center">
              <h2 className="text-base md:text-lg text-[#35241C] font-inter text-[1.25rem] font-bold">{CONSTANTS.EARN_BADGE}</h2>
              <h2 className="text-base md:text-lg text-[#DCC794] font-inter text-[1rem] font-normal">
                {CONSTANTS.CLAIM}<strong className='text-[#FFF4C0]'>{CONSTANTS.NFT_BADGE}</strong>{CONSTANTS.INVENTORY}
              </h2>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-xs md:text-sm text-[#DCC794] text-[0.9rem] font-normal leading-[1rem] text-center">{CONSTANTS.EXCHANGE_BADGE}</p>
              <p className="text-xs md:text-sm text-[#DCC794] text-[0.9rem] font-normal leading-[1rem] text-center">{CONSTANTS.INSUFFICIENT_BADGE}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop types validation
FullPageCelebration.propTypes = {
  setStartAnimation: PropTypes.func.isRequired, // Function to set the animation state
};

export default FullPageCelebration;
