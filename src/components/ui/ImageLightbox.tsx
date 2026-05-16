"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import Image from "next/image";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ImageLightbox({ src, alt, children, className }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Disable scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const LightboxContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-background/95 backdrop-blur-2xl p-4 md:p-10"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.button
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            className="absolute top-6 right-6 z-[1000] p-4 rounded-full bg-surface-2 border border-border text-foreground hover:bg-accent hover:text-background transition-all shadow-2xl"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X size={24} />
          </motion.button>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-[95vw] max-h-[92vh]">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain "
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div
        className={`relative group cursor-zoom-in ${className}`}
        onClick={() => setIsOpen(true)}
      >
        {children || (
          <div className="relative  h-full rounded-lg overflow-hidden border border-border">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover h-full transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-background/80 backdrop-blur-md p-3 rounded-full shadow-2xl">
            <ZoomIn size={20} className="text-foreground" />
          </div>
        </div>
      </div>

      {mounted && createPortal(LightboxContent, document.body)}
    </>
  );
}
