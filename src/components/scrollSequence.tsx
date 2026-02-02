"use client";
import { useEffect, useRef, useState } from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface ScrollSequenceProps {
    frameCount: number;
    path: string;
    progress: MotionValue<number>;
    className?: string;
}

export default function ScrollSequence({ frameCount, path, progress, className }: ScrollSequenceProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

    const frameIndex = useTransform(progress, [0, 1], [1, frameCount]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const images: HTMLImageElement[] = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `${path}/ezgif-frame-${frameNumber}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === 1) {
                    setCanvasSize({ width: img.width, height: img.height });
                }
                if (loadedCount === frameCount) {
                    setImagesLoaded(true);
                }
            };
            images.push(img);
        }
        imagesRef.current = images;
    }, [frameCount, path]);

    // Render on canvas
    useEffect(() => {
        if (!imagesLoaded) return;

        const render = (index: number) => {
            const canvas = canvasRef.current;
            const context = canvas?.getContext("2d");
            if (!canvas || !context) return;

            const imgIndex = Math.floor(index) - 1;
            const safeIndex = Math.min(Math.max(imgIndex, 0), frameCount - 1);
            const img = imagesRef.current[safeIndex];

            if (img && img.complete) {
                // Clear and draw
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0);
            }
        };

        const unsubscribe = frameIndex.on("change", (latest) => {
            render(latest);
        });

        // Initial render
        render(frameIndex.get());

        return () => unsubscribe();
    }, [imagesLoaded, frameIndex, frameCount]);

    return (
        <div className={`${className} relative flex items-center justify-center overflow-hidden`}>
            <canvas
                ref={canvasRef}
                width={canvasSize.width}
                height={canvasSize.height}
                className="max-w-full max-h-full object-contain pointer-events-none"
            />
            {!imagesLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                    <div className="w-8 h-8 border-3 border-accent-gold border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </div>
    );
}
