"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import AboutPage from "./AboutPage";
import WorkPage from "./WorkPage";
import ContactPage from "./ContactPage";

interface ContentPanelProps {
    isOpen: boolean;
    onClose: () => void;
    pageType: "about" | "work" | "contact";
}

export default function ContentPanel({ isOpen, onClose, pageType }: ContentPanelProps) {
    const panelRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const borderTopRef = useRef<HTMLDivElement>(null);
    const borderRightRef = useRef<HTMLDivElement>(null);
    const borderBottomLeftRef = useRef<HTMLDivElement>(null);
    const borderBottomRightRef = useRef<HTMLDivElement>(null);
    const borderLeftRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 640;
        const tl = gsap.timeline({ onComplete: () => { if (!isOpen) onClose(); } });

        if (isOpen) {
            if (isMobile) {
                tl.set(panelRef.current, { opacity: 0, y: '100%' })
                    .to(panelRef.current, { opacity: 1, y: '100%', duration: 0.5, ease: 'power1.out' })
                    .fromTo([borderTopRef.current],
                        { width: 0, height: 1 },
                        { width: '100%', height: 1, duration: 0.3, ease: 'power2.out'},
                        '-=0.5'
                    )
                    .fromTo([borderLeftRef.current, borderRightRef.current],
                      { width: 1, height: 0 },
                      { height: '100%', width: 1, duration: 0.3, ease: 'power2.out'},
                    )
                    .fromTo([borderBottomLeftRef.current, borderBottomRightRef.current],
                        { width: 0, height: 1 },
                        { width: '100%', height: 1, duration: 0.3, ease: 'power2.out'},
                    )
                    .to(contentRef.current, { opacity: 1, duration: 0.3 }, '-=0.1');
            } else {
                tl.set(
                    [
                        borderTopRef.current,
                        borderBottomLeftRef.current,
                        borderBottomRightRef.current,
                    ],
                    { width: 0, height: 1 }
                )
                    .set([borderLeftRef.current, borderRightRef.current], {
                        height: 0,
                        width: 1,
                    })
                    .set(panelRef.current, { opacity: 1 })
                    .to(borderTopRef.current, {
                        width: "100%",
                        duration: 0.3,
                        ease: "power2.out",
                    })
                    .to([borderLeftRef.current, borderRightRef.current], {
                        height: "100%",
                        duration: 0.3,
                        ease: "power2.out",
                    })
                    .to(
                        [borderBottomLeftRef.current, borderBottomRightRef.current],
                        { width: "50%", duration: 0.3, ease: "power2.out" }
                    )
                    .to(contentRef.current, { opacity: 1, duration: 0.3 }, "-=0.2");
            }
        } else {
            if (isMobile) {
                tl.to(contentRef.current, { opacity: 0, duration: 0.2 })
                  .to([borderBottomLeftRef.current, borderBottomRightRef.current],
                    { width: 0, height: 1, duration: 0.3, ease: 'power2.in' }
                  )
                  .to([borderLeftRef.current, borderRightRef.current],
                    { height: 0, width: 1, duration: 0.3, ease: 'power2.in' }
                  )
                  .to(borderTopRef.current,
                    { width: 0, height: 1, duration: 0.3, ease: 'power2.in' }
                  )
                  .to(panelRef.current, { opacity: 0, y: '100%', duration: 0.5, ease: 'power1.in' }, '-=0.3');
            } else {
                tl.to(contentRef.current, { opacity: 0, duration: 0.2 })
                    .to(
                        [borderBottomLeftRef.current, borderBottomRightRef.current],
                        { width: 0, duration: 0.3, ease: "power2.in" },
                        "-=0.2"
                    )
                    .to([borderLeftRef.current, borderRightRef.current], {
                        height: 0,
                        duration: 0.3,
                        ease: "power2.in",
                    })
                    .to(borderTopRef.current, {
                        width: 0,
                        duration: 0.3,
                        ease: "power2.in",
                    });
            }
        }

        return () => {
            tl.kill();
        };
    }, [isOpen, onClose]);

    const renderContent = () => {
        switch (pageType) {
            case "about":
                return <AboutPage />;
            case "work":
                return <WorkPage />;
            case "contact":
                return <ContactPage />;
            default:
                return null;
        }
    };

    return (
        <div ref={panelRef} className={`
            fixed inset-0 sm:relative sm:inset-auto w-full sm:w-[510px] h-full  p-2
            opacity-0 z-50 sm:z-auto bg-background sm:bg-transparent
            ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}
        `}>
            <div className="w-full h-full sm:h-[calc(100%-2rem)] relative overflow-hidden sm:min-h-[700px] sm:max-h-[700px] p-4 sm:p-0">
                {/* Border elements */}
                <div
                    ref={borderTopRef}
                    className="absolute origin-center top-0 left-0 w-full h-[1px] bg-foreground"
                ></div>
                <div
                    ref={borderRightRef}
                    className="absolute origin-top top-0 right-0 w-[1px] h-full bg-foreground"
                ></div>
                <div
                    ref={borderBottomLeftRef}
                    className="absolute origin-left bottom-0 left-0 w-1/2 h-[1px] bg-foreground"
                ></div>
                <div
                    ref={borderBottomRightRef}
                    className="absolute origin-right bottom-0 right-0 w-1/2 h-[1px] bg-foreground"
                ></div>
                <div
                    ref={borderLeftRef}
                    className="absolute origin-top top-0 left-0 w-[1px] h-full bg-foreground"
                ></div>

                <div ref={contentRef} className="opacity-0 p-3 sm:p-5 h-full overflow-y-auto">
                    <button
                        onClick={onClose}
                        className="absolute flex items-center justify-center gap-2 py-1 px-2 sm:px-4 top-2 right-2 sm:top-4 sm:right-4 font-mono text-xs sm:text-sm border border-foreground hover:bg-foreground hover:text-background transition-colors"
                    >
                        ✕ close
                    </button>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}
