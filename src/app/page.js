"use client";
import React, { useState } from 'react';
import BadgeAnimation from '../components/BadgeAnimation';
import FullPageCelebration from '../components/FullPageCelebration';
import CompactCelebration from '../components/CompactCelebration';
import { rewards } from '@/mockData';

/**
 * Main Component
 * 
 * Manages the display of various celebratory components based on the current state.
 * Controls the flow of animations and modals, providing a cohesive user experience.
 * 
 * States:
 * - startAnimation (boolean): Indicates whether the badge animation should be displayed.
 * - showModal (boolean): Controls the visibility of the modal.
 * 
 * Components:
 * - FullPageCelebration: Shown when neither the animation nor the modal is visible.
 * - BadgeAnimation: Displayed when the animation starts.
 * - CompactCelebration: Always shown, displays rewards.
 * 
 * Usage:
 * <Main />
 */
const Main = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {!startAnimation && !showModal && (<FullPageCelebration startAnimation={startAnimation} setStartAnimation={setStartAnimation} />)}
      {startAnimation && (<BadgeAnimation showModal={showModal} setShowModal={setShowModal} setStartAnimation={setStartAnimation} />)}
      <CompactCelebration rewards={rewards} showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default Main;

