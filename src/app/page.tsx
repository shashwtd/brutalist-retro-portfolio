"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import BrutalAlert from "@/components/BrutalAlert";
import ContentPanel from "@/components/ContentPanel";
import gsap from 'gsap';

export default function Home() {
    const [showAlert, setShowAlert] = useState(false);
    const [showPanel, setShowPanel] = useState(false);
    const [activeNav, setActiveNav] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);

    const handleNavClick = (e: React.MouseEvent, path: string) => {
        e.preventDefault();
        setShowPanel(true);
        setActiveNav(path);
    };

    useEffect(() => {
        const isMobile = window.innerWidth < 640;
        const tl = gsap.timeline();

        if (showPanel) {
            if (isMobile) {
                tl.to(containerRef.current, {
                    y: '-100%',
                    duration: 0.5,
                    ease: 'power1.out'
                });
            } else {
                tl.to(containerRef.current, {
                    paddingLeft: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        } else {
            if (isMobile) {
                tl.to(containerRef.current, {
                    y: '0%',
                    duration: 0.3,
                    ease: 'power2.in',
                    delay: 0.5 // Delay to allow content panel to close
                });
            } else {
                tl.to(containerRef.current, {
                    paddingLeft: '510px',
                    duration: 0.5,
                    ease: 'power2.in',
                    delay: 0.45 // Delay to allow border animation to start and reach halfway
                });
            }
        }

        return () => {
            tl.kill();
        };
    }, [showPanel]);

    const handleClosePanel = () => {
        setShowPanel(false);
        setActiveNav("");
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
                        <animate
                            attributeName="baseFrequency"
                            dur="3s"
                            values="0.02 0.15;0.05 0.15;0.02 0.15"
                            repeatCount="indefinite"
                        />
                    </feTurbulence>
                    <feDisplacementMap in="SourceGraphic" scale="5" />
                </filter>
            </svg>

            <main className="flex flex-col sm:flex-row justify-center items-center min-h-[100dvh] h-[100dvh] sm:min-h-screen sm:h-auto scanline sm:p-4 overflow-hidden">
                <div ref={containerRef} className="relative flex flex-col sm:flex-row items-center justify-center gap-4 sm:pl-[510px] p-2">
                    {/* Main card container */}
                    <div className="w-full h-[calc(100dvh-1rem)] sm:h-full sm:w-[510px] sm:min-h-[700px] sm:max-h-[700px] border border-foreground flex flex-col justify-between px-3 py-4 sm:px-5 sm:py-5 sm:pb-6">
                        {/* Header: Time and Location */}
                        <div className="w-full flex flex-row justify-between gap-2 sm:gap-0">
                            <div className="font-inter text-sm sm:text-base leading-normal tracking-[-0.96px]">
                                {new Date().toLocaleString("en-IN", {
                                    weekday: "long",
                                    hour: "numeric",
                                    minute: "2-digit",
                                    hour12: true,
                                    timeZone: "Asia/Kolkata",
                                })}
                            </div>
                            <div className="flex items-center gap-2">
                                <Image
                                    src="/location.svg"
                                    width={16}
                                    height={16}
                                    alt="Location icon"
                                    className="sm:w-[18px] sm:h-[18px]"
                                />
                                <span className="font-inter text-sm sm:text-base leading-normal tracking-[-0.96px]">
                                    Prayagraj, India
                                </span>
                            </div>
                        </div>

                        {/* Bio section */}
                        <div className="flex flex-col gap-[18px] items-start self-stretch">
                            <div className="flex justify-center items-center gap-[10px] px-[9px] py-1 border border-foreground">
                                <div className="size-2 bg-green-400"></div>
                                <span className="font-hedvig-letters-serif text-sm sm:text-base leading-normal tracking-[-0.12px]">
                                    Available for remote work!
                                </span>
                            </div>
                            <div className="flex flex-col items-start gap-[10px] self-stretch">
                                <h1 className="font-hedvig-letters-serif text-[32px] sm:text-[48px] leading-normal tracking-[-0.96px]">
                                    Shashwat Dubey
                                </h1>
                                <p className="font-inter text-sm sm:text-base leading-normal tracking-[-0.65px]">
                                    Crafting digital experiences since 2020 / I
                                    design sleek web apps, extensions, & more /
                                    4+ years honing frontend skills with a
                                    creative edge / Passionate about web3, AI,
                                    and tech that shapes tomorrow.
                                </p>
                                <div className="flex flex-col mt-8 sm:mt-12 w-full">
                                    <div className="mb-4 font-hedvig-letters-serif text-lg">
                                        Featured Projects
                                    </div>
                                    {[
                                        {
                                            name: "Learn Crypto Trading",
                                            date: "Sep, 2024",
                                        },
                                        {
                                            name: "Qubic Extension",
                                            date: "Sep, 2024",
                                        },
                                        {
                                            name: "Metadomo AI",
                                            date: "Sep, 2024",
                                        },
                                    ].map((project) => (
                                        <div
                                            key={project.name}
                                            className="relative flex items-start w-full border-t border-white/50 px-1 pr-2 hover:px-3.5 duration-300 cursor-pointer group overflow-hidden"
                                        >
                                            <div className="w-full grid grid-cols-5 py-1.5 z-10">
                                                <span className="col-span-3 font-hedvig-letters-serif text-md transition-colors">
                                                    {project.name}
                                                </span>
                                                <span className="col-span-1 font-inter text-xs leading-5 opacity-60 transition-colors text-right group-hover:opacity-80 duration-300">
                                                    {project.date}
                                                </span>
                                                <span className="font-hedvig-letters-serif text-xl leading-4 pt-0.5 font-bold/60 transition-colors text-right">
                                                    ↵
                                                </span>
                                            </div>
                                            <div className="absolute inset-0 bg-foreground opacity-10 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="flex flex-col gap-4 sm:gap-6">
                            <nav className="flex flex-wrap gap-2 sm:gap-3">
                                {[
                                    { name: "about", path: "/about" },
                                    { name: "work", path: "/work" },
                                    { name: "contact", path: "/contact" },
                                ].map((link, i) => (
                                    <a
                                        key={link.name}
                                        href={link.path}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            if (activeNav === link.path) {
                                                handleClosePanel();
                                            } else {
                                                handleNavClick(e, link.path);
                                            }
                                        }}
                                        className={`
                                            group font-inter text-sm sm:text-base tracking-[-0.96px] px-2 sm:px-3 py-1
                                            border border-foreground hover:bg-foreground hover:text-background
                                            transition-colors relative flex items-center gap-1 sm:gap-2
                                            glitch-hover ${activeNav === link.path ? 'bg-foreground text-background' : ''}
                                            ${i === 0 ? 'rotate-[-2deg]' : ''}
                                            ${i === 1 ? 'rotate-[1deg]' : ''}
                                            ${i === 2 ? 'rotate-[-1deg]' : ''}
                                        `}
                                    >
                                        {link.name}
                                        {activeNav === link.path ? (
                                            <div className="w-4 h-4 border-[1.5px] border-background text-sm flex items-center justify-center font-bold">✕</div>
                                        ) : (
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 group-hover:fill-background fill-foreground duration-300 transition-transform group-hover:rotate-45"
                                            >
                                                <path d="M13.7786 8.62136L6.30886 8.64017L6.31458 6.37172L17.6569 6.34314L17.6283 17.6854L15.3598 17.6911L15.3786 10.2214L7.14315 18.4569L5.54315 16.8569L13.7786 8.62136Z" />
                                            </svg>
                                        )}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <ContentPanel 
                        isOpen={showPanel} 
                        onClose={handleClosePanel}
                        pageType={activeNav.slice(1) as "about" | "work" | "contact"}
                    />
                </div>
            </main>
        </>
    );
}
