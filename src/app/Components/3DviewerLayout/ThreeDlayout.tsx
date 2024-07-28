"use client"
import { Canvas } from '@react-three/fiber'
import React, { FC, ReactNode, Suspense } from 'react'
import { Center, Environment, OrbitControls, PerspectiveCamera, Preload } from '@react-three/drei'
import CanvasLoader from "./CanvasLoader"

const ThreeDlayout: FC<{ children: ReactNode, wrappedClassName?: string, FOV?: number }> = ({ children, wrappedClassName, FOV }) => {
  return (
    <Canvas
      shadows
      id="canvas"
      className={wrappedClassName}
      gl={{ preserveDrawingBuffer: true }}
    >
      {/* Suspense for loading fallback */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Perspective camera */}
        <PerspectiveCamera
          makeDefault
          fov={FOV || 75}
          position={[
            -0.10114847690554585, -0.0346831579137327, 2.5358609250881734]}
        />
        {/* Render ambient light or environment based on conditions */}
        {/* Center the content */}
        {/* <OrbitControls enableZoom autoRotate autoRotateSpeed={30} /> */}
        {/* <Environment preset='city' /> */}
        <Center>
          {children}
        </Center>
      </Suspense>
      {/* Preload all resources */}
      <Preload all />
    </Canvas>
  )
}

export default ThreeDlayout