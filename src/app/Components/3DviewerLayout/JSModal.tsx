import React, { FC, useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import ThreeDlayout from './ThreeDlayout'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

export const JSModals: FC<any> = () => {
    return (
        <ThreeDlayout FOV={30} wrappedClassName="!h-[150px] !absolute top-[2%] left-[7%] !w-[150px]">
            <Modal />
        </ThreeDlayout>
    )
}

const Modal = () => {
    const { nodes, materials } = useGLTF('/3d/js.glb')
    useFrame((state, delta) => {
        easing.dampC(materials.back.color, "yellow", 0.25, delta)
        easing.dampC(materials.logo.color, "black", 0.25, delta)
    });
    return (
        <>
            <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={30}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI * 3 / 4}
            />
            <ambientLight intensity={3} />

            <group dispose={null}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
                    <mesh castShadow receiveShadow geometry={nodes.back.geometry} material={materials.back} />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.LOGO.geometry}
                        material={materials.logo}
                        position={[0.534, 0.644, 0.996]}
                    />
                </group>
            </group>
        </>
    )
}

useGLTF.preload('/3d/js.glb')