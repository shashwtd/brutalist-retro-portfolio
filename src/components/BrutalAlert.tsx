// Usage: <BrutalAlert message="Your message" onClose={() => {}} />
import { useEffect } from 'react';

interface BrutalAlertProps {
  message: string;
  onClose: () => void;
}

export default function BrutalAlert({ message, onClose }: BrutalAlertProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2500);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 slide-in w-[calc(100%-1rem)] sm:w-auto">
      <div 
        className="relative border-2 border-foreground bg-background p-3 sm:p-4 shadow-brutal"
      >
        <p className="font-hedvig-letters-serif text-lg sm:text-xl distort mb-1">
          ERROR_404
        </p>
        <p className="font-mono text-xs sm:text-sm typewriter">
          {message}
        </p>
      </div>
    </div>
  );
}
