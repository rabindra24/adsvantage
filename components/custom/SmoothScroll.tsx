"use client"
import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useScroll,
  useTransform,
  useSpring,
  motion
} from "framer-motion";

// Define the type for the props
interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  // Scroll container reference
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Page scrollable height based on content length
  const [pageHeight, setPageHeight] = useState<number>(0);

  // Update scrollable height when browser is resizing
  const resizePageHeight = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  // Observe when browser is resizing
  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => resizePageHeight(entries));
    if (scrollRef.current) {
      resizeObserver.observe(scrollRef.current);
    }
    return () => resizeObserver.disconnect();
  }, [resizePageHeight]);

  const { scrollY } = useScroll(); // Measures how many pixels user has scrolled vertically
  // As scrollY changes between 0px and the scrollable height, create a negative scroll value...
  // ... based on current scroll position to translateY the document in a natural way
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }; // Easing of smooth scroll
  const spring = useSpring(transform, physics); // Apply easing to the negative scroll value

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ y: spring }} // TranslateY of scroll container using negative scroll value
        className="scroll-container"
      >
        {children}
      </motion.div>
      {/* Blank div that has a dynamic height based on the content's inherent height */}
      {/* This is necessary to allow the scroll container to scroll... */}
      {/* ... using the browser's native scroll bar */}
      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
