import React from "react";

import ParticleImage, {
    ParticleOptions,
    Vector,
    // forces,
    forces,
    ParticleForce

} from "react-particle-image";

const round = (n: number, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;
const particleOptions: ParticleOptions = {
    // filter: ({ x, y, image }) => {
    //     // Get pixel
    //     const pixel = image.get(x, y);
    //     // Make a particle for this pixel if blue > 50 (range 0-255)
    //     return pixel.b > 50;
    // },
    //     const pixel = image.get(x, y);
    //     // Make a particle for this pixel if magnitude < 200 (range 0-255)
    //     const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
    //     return magnitude < 200;
    // },
    //     // Get pixel
    mass: () => 200,
    color: ({ x, y, image }) => {
        const pixel = image.get(x, y);
        // Canvases are much more performant when painting as few colors as possible.
        // Use color of pixel as color for particle however round to nearest 30
        // to decrease the number of unique colors painted on the canvas.
        // You'll notice if we remove this rounding, the framerate will slow down a lot.
        return `rgba(
      ${round(pixel.r, STEP)}, 
      ${round(pixel.g, STEP)}, 
      ${round(pixel.b, STEP)}, 
      ${round(pixel.a, STEP) / 255}
    )`;
    },
};

const motionForce = (x: number, y: number): ParticleForce => {
    // Reduce the strength of the disturbance force by decreasing the third parameter (1 in this case)
    return forces.disturbance(x, y, 5); // Adjust the strength as needed
};
export function ParticleImg({ src, color }: { src: string, color: string }) {
    return (
        <ParticleImage
            src={src}
            scale={.12}
            entropy={0}
            width={150}
            height={150}
            maxParticles={3000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            backgroundColor={color}
        />
    );
}
