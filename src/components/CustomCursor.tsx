import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';
import { cn } from '../lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringCamera, setIsHoveringCamera] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for camera cursor
      if (target.classList.contains('cursor-camera') || target.closest('.cursor-camera')) {
        setIsHoveringCamera(true);
        setIsHovering(false);
      } else if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
        setIsHoveringCamera(false);
      } else {
        setIsHovering(false);
        setIsHoveringCamera(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          'custom-cursor hidden md:flex items-center justify-center',
          isHovering && 'opacity-0',
          isHoveringCamera && 'hovering-camera',
          isClicking && 'scale-75'
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <Camera 
          size={20} 
          className={cn(
            "text-white transition-opacity duration-300", 
            isHoveringCamera ? "opacity-100" : "opacity-0 hidden"
          )} 
        />
      </div>
    </>
  );
}
