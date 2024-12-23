'use client'

import Image from "next/image";
import { useState } from "react";
import BrutalAlert from "@/components/BrutalAlert";

export default function Home() {
  const [showAlert, setShowAlert] = useState(false);

  const handleNavClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAlert(true);
  };

  return (
    <>
      {showAlert && (
        <BrutalAlert 
          message="[ Under Construction ] Check back soon..." 
          onClose={() => setShowAlert(false)} 
        />
      )}
      {/* SVG filter for distortion effects */}
      <svg className="hidden">
        <filter id="turbulence">
          <feTurbulence baseFrequency="0.02 0.1" type="fractalNoise">
            <animate attributeName="baseFrequency" 
              dur="3s" values="0.02 0.15;0.05 0.15;0.02 0.15" 
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="5" />
        </filter>
      </svg>
      
      <main className="flex justify-center items-center min-h-[100dvh] h-[100dvh] sm:min-h-screen sm:h-auto scanline p-4">
        {/* Main card container */}
        <div className="w-full h-[calc(100dvh-2rem)] sm:h-full sm:w-[500px] sm:min-h-[550px] sm:max-h-[600px] border border-foreground flex flex-col justify-between px-3 py-4 sm:px-5 sm:py-5 sm:pb-6">
          {/* Header: Time and Location */}
          <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0">
            <div className="font-inter text-sm sm:text-base leading-normal tracking-[-0.96px]">
              {new Date().toLocaleString('en-IN', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                weekday: 'long',
                timeZone: 'Asia/Kolkata'
              }).split(',')[1].trim() + ', ' + new Date().toLocaleString('en-IN', {
                weekday: 'long',
                timeZone: 'Asia/Kolkata'
              })}
            </div>
            <div className="flex items-center gap-2">
              <Image src="/location.svg" width={16} height={16} alt="Location icon" className="sm:w-[18px] sm:h-[18px]" />
              <span className="font-inter text-sm sm:text-base leading-normal tracking-[-0.96px]">
                Prayagraj, India
              </span>
            </div>
          </div>

          {/* Bio section */}
          <div className="flex flex-col gap-[18px] items-start self-stretch">
            <div className="flex justify-center items-center gap-[10px] px-[9px] py-1 border border-foreground">
              <span className="font-hedvig-letters-serif text-sm sm:text-base leading-normal tracking-[-0.12px]">
                Available for remote work!
              </span>
            </div>
            <div className="flex flex-col items-start gap-[10px] self-stretch">
              <h1 className="font-hedvig-letters-serif text-[32px] sm:text-[48px] leading-normal tracking-[-0.96px]">
                Shashwat Dubey
              </h1>
              <p className="font-inter text-sm sm:text-base leading-normal tracking-[-0.75px]">
                Crafting digital experiences since 2020 / I design sleek web apps, extensions, & more / 4+ years honing frontend skills with a creative edge / Passionate about web3, AI, and tech that shapes tomorrow.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <nav className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { name: "about", path: "/" },
                { name: "work", path: "/" },
                { name: "contact", path: "/" },
                // { name: "experiments", path: "/" },
              ].map((link, i) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={handleNavClick}
                  className={`
                    group font-inter text-sm sm:text-base tracking-[-0.96px] px-2 sm:px-3 py-1
                    border border-foreground hover:bg-foreground hover:text-background
                    transition-colors relative flex items-center gap-1 sm:gap-2
                    glitch-hover
                    ${i === 0 ? 'rotate-[-2deg]' : ''}
                    ${i === 1 ? 'rotate-[1deg]' : ''}
                    ${i === 2 ? 'rotate-[-1deg]' : ''}
                    ${i === 3 ? 'rotate-[2deg]' : ''}
                  `}
                >
                  {link.name}
                  <Image 
                    src="/arrow.svg" 
                    width={16} 
                    height={16} 
                    alt="" 
                    className="invert group-hover:invert-0" 
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </main>
    </>
  );
}
