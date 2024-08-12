"use client";

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef(null);
  const searchParams = useSearchParams();
  const [asPath, setAsPath] = useState("");
  useEffect(() => {
    // Construct the path with query parameters on the client side
    const path = window.location.pathname + searchParams.toString();
    setAsPath(path);
  }, [searchParams])

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={[asPath]}
      location={asPath}
      containerRef={containerRef}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0, disableLerp: true })}
    >
      <main data-scroll-container ref={containerRef}>
        {children}
      </main>
    </LocomotiveScrollProvider>
  );
};

export default SmoothScroll;
